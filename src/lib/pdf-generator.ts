const encoder = new TextEncoder();

export type PreparedPdfImage = {
  height: number;
  jpegBytes: Uint8Array;
  width: number;
};

function encodeText(value: string) {
  return encoder.encode(value);
}

function mergeBytes(chunks: Uint8Array[]) {
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const merged = new Uint8Array(totalLength);

  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.length;
  }

  return merged;
}

function formatPdfNumber(value: number) {
  return value.toFixed(2).replace(/\.00$/, "");
}

function loadImage(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error(`Could not read image: ${file.name}`));
    };

    image.src = objectUrl;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Could not encode the image for PDF output."));
          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      quality,
    );
  });
}

export async function prepareImageForPdf(
  file: File,
  maxDimension = 2200,
): Promise<PreparedPdfImage> {
  const image = await loadImage(file);
  const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Your browser could not initialize canvas rendering.");
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const jpegBlob = await canvasToBlob(canvas, 0.92);
  const jpegBytes = new Uint8Array(await jpegBlob.arrayBuffer());

  return {
    height,
    jpegBytes,
    width,
  };
}

export function buildPdfDocument(images: PreparedPdfImage[]) {
  if (images.length === 0) {
    throw new Error("Add at least one image before generating a PDF.");
  }

  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  const portraitPage = { width: 595.28, height: 841.89 };
  const landscapePage = { width: 841.89, height: 595.28 };
  const margin = 24;
  const totalObjects = 2 + images.length * 3;
  let byteOffset = 0;

  function pushBytes(bytes: Uint8Array) {
    chunks.push(bytes);
    byteOffset += bytes.length;
  }

  function pushText(value: string) {
    pushBytes(encodeText(value));
  }

  function writeObject(id: number, parts: Array<string | Uint8Array>) {
    offsets[id] = byteOffset;
    pushText(`${id} 0 obj\n`);

    for (const part of parts) {
      if (typeof part === "string") {
        pushText(part);
      } else {
        pushBytes(part);
      }
    }

    pushText("\nendobj\n");
  }

  pushText("%PDF-1.4\n%âãÏÓ\n");

  const pageReferences = images.map((_, index) => `${3 + index * 3} 0 R`);

  writeObject(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
  writeObject(
    2,
    [`<< /Type /Pages /Count ${images.length} /Kids [${pageReferences.join(" ")}] >>`],
  );

  images.forEach((image, index) => {
    const pageId = 3 + index * 3;
    const contentId = pageId + 1;
    const imageId = pageId + 2;
    const resourceName = `Im${index + 1}`;
    const useLandscape = image.width > image.height;
    const pageSize = useLandscape ? landscapePage : portraitPage;
    const fit = Math.min(
      (pageSize.width - margin * 2) / image.width,
      (pageSize.height - margin * 2) / image.height,
    );
    const drawWidth = image.width * fit;
    const drawHeight = image.height * fit;
    const x = (pageSize.width - drawWidth) / 2;
    const y = (pageSize.height - drawHeight) / 2;
    const contentStream = encodeText(
      `q\n${formatPdfNumber(drawWidth)} 0 0 ${formatPdfNumber(drawHeight)} ${formatPdfNumber(x)} ${formatPdfNumber(y)} cm\n/${resourceName} Do\nQ\n`,
    );

    writeObject(pageId, [
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${formatPdfNumber(pageSize.width)} ${formatPdfNumber(pageSize.height)}] /Resources << /XObject << /${resourceName} ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    ]);

    writeObject(contentId, [
      `<< /Length ${contentStream.length} >>\nstream\n`,
      contentStream,
      "\nendstream",
    ]);

    writeObject(imageId, [
      `<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.jpegBytes.length} >>\nstream\n`,
      image.jpegBytes,
      "\nendstream",
    ]);
  });

  const xrefOffset = byteOffset;
  pushText(`xref\n0 ${totalObjects + 1}\n`);
  pushText("0000000000 65535 f \n");

  for (let objectId = 1; objectId <= totalObjects; objectId += 1) {
    pushText(`${String(offsets[objectId]).padStart(10, "0")} 00000 n \n`);
  }

  pushText(
    `trailer\n<< /Size ${totalObjects + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`,
  );

  return mergeBytes(chunks);
}
