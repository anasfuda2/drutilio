export type ImageOutputFormat = "jpeg" | "png" | "webp";
export type RotationAngle = 0 | 90 | 180 | 270;

export type LoadedImage = {
  image: HTMLImageElement;
  height: number;
  width: number;
};

export type ImageCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type RenderImageOptions = {
  outputFormat: ImageOutputFormat;
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  crop?: ImageCrop;
  rotation?: RotationAngle;
  backgroundColor?: string;
};

function objectUrlToImage(objectUrl: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("The selected file could not be read as an image."));
    image.src = objectUrl;
  });
}

export async function loadImageFile(file: File): Promise<LoadedImage> {
  const objectUrl = URL.createObjectURL(file);

  try {
    const image = await objectUrlToImage(objectUrl);

    return {
      image,
      width: image.naturalWidth || image.width,
      height: image.naturalHeight || image.height,
    };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

export function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.[a-z0-9]+$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

export function formatImageFileSize(bytes: number) {
  if (bytes <= 0) {
    return "0 KB";
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function getImageFormatFromFile(file: File): ImageOutputFormat | null {
  if (file.type === "image/jpeg" || /\.jpe?g$/i.test(file.name)) {
    return "jpeg";
  }

  if (file.type === "image/png" || /\.png$/i.test(file.name)) {
    return "png";
  }

  if (file.type === "image/webp" || /\.webp$/i.test(file.name)) {
    return "webp";
  }

  return null;
}

export function getMimeTypeForImageFormat(format: ImageOutputFormat) {
  switch (format) {
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
  }
}

export function getExtensionForImageFormat(format: ImageOutputFormat) {
  switch (format) {
    case "jpeg":
      return "jpg";
    case "png":
      return "png";
    case "webp":
      return "webp";
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function normalizeCrop(crop: ImageCrop | undefined, width: number, height: number) {
  if (!crop) {
    return {
      x: 0,
      y: 0,
      width,
      height,
    };
  }

  const startX = clamp(Math.floor(crop.x), 0, width - 1);
  const startY = clamp(Math.floor(crop.y), 0, height - 1);
  const maxWidth = width - startX;
  const maxHeight = height - startY;
  const cropWidth = clamp(Math.floor(crop.width), 1, maxWidth);
  const cropHeight = clamp(Math.floor(crop.height), 1, maxHeight);

  return {
    x: startX,
    y: startY,
    width: cropWidth,
    height: cropHeight,
  };
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number,
) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("The browser could not export the processed image."));
          return;
        }

        resolve(blob);
      },
      mimeType,
      quality,
    );
  });
}

export async function renderImageBlob(
  file: File,
  options: RenderImageOptions,
) {
  const loaded = await loadImageFile(file);
  const crop = normalizeCrop(options.crop, loaded.width, loaded.height);
  const targetWidth = Math.max(
    1,
    Math.round(options.maxWidth ?? crop.width),
  );
  const targetHeight = Math.max(
    1,
    Math.round(options.maxHeight ?? crop.height),
  );
  const rotation = options.rotation ?? 0;
  const canvas = document.createElement("canvas");
  const isQuarterTurn = rotation === 90 || rotation === 270;

  canvas.width = isQuarterTurn ? targetHeight : targetWidth;
  canvas.height = isQuarterTurn ? targetWidth : targetHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Your browser could not initialize canvas processing.");
  }

  if (options.outputFormat === "jpeg") {
    context.fillStyle = options.backgroundColor ?? "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  if (rotation === 90) {
    context.translate(canvas.width, 0);
    context.rotate(Math.PI / 2);
  } else if (rotation === 180) {
    context.translate(canvas.width, canvas.height);
    context.rotate(Math.PI);
  } else if (rotation === 270) {
    context.translate(0, canvas.height);
    context.rotate(-Math.PI / 2);
  }

  context.drawImage(
    loaded.image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    targetWidth,
    targetHeight,
  );

  const blob = await canvasToBlob(
    canvas,
    getMimeTypeForImageFormat(options.outputFormat),
    options.quality,
  );

  return {
    blob,
    height: canvas.height,
    width: canvas.width,
  };
}
