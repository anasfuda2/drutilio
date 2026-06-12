import { PDFDocument } from "pdf-lib";

export type SplitPdfOutput = {
  bytes: Uint8Array;
  fileName: string;
  label: string;
  pageCount: number;
};

export function formatFileSize(bytes: number) {
  if (bytes <= 0) {
    return "0 KB";
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.pdf$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

export async function mergePdfFiles(files: File[]) {
  if (files.length === 0) {
    throw new Error("Add at least one PDF file before merging.");
  }

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const sourceBytes = await file.arrayBuffer();
    const sourcePdf = await PDFDocument.load(sourceBytes);
    const copiedPages = await mergedPdf.copyPages(
      sourcePdf,
      sourcePdf.getPageIndices(),
    );

    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const bytes = await mergedPdf.save();

  return {
    bytes,
    pageCount: mergedPdf.getPageCount(),
  };
}

export async function inspectPdfFile(file: File) {
  const bytes = await file.arrayBuffer();
  const pdf = await PDFDocument.load(bytes);

  return {
    pageCount: pdf.getPageCount(),
  };
}

function parseRangeToken(token: string, totalPages: number) {
  const trimmed = token.trim();

  if (!trimmed) {
    return null;
  }

  const singleMatch = trimmed.match(/^\d+$/);
  if (singleMatch) {
    const page = Number(trimmed);

    if (page < 1 || page > totalPages) {
      throw new Error(`Page ${page} is outside the document range.`);
    }

    return {
      end: page,
      label: `${page}`,
      start: page,
    };
  }

  const rangeMatch = trimmed.match(/^(\d+)\s*-\s*(\d+)$/);
  if (!rangeMatch) {
    throw new Error(
      `Could not understand "${trimmed}". Use formats like 1-3, 4, or 7-9.`,
    );
  }

  const start = Number(rangeMatch[1]);
  const end = Number(rangeMatch[2]);

  if (start < 1 || end < 1 || start > totalPages || end > totalPages) {
    throw new Error(`Range ${trimmed} is outside the document range.`);
  }

  if (end < start) {
    throw new Error(`Range ${trimmed} ends before it starts.`);
  }

  return {
    end,
    label: `${start}-${end}`,
    start,
  };
}

export function parsePageRanges(input: string, totalPages: number) {
  const tokens = input
    .split(",")
    .map((token) => token.trim())
    .filter(Boolean);

  if (tokens.length === 0) {
    throw new Error("Enter at least one page range, such as 1-3 or 4.");
  }

  return tokens
    .map((token) => parseRangeToken(token, totalPages))
    .filter((range): range is NonNullable<typeof range> => Boolean(range));
}

export async function splitPdfFile(file: File, rangeInput: string) {
  const sourceBytes = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(sourceBytes);
  const totalPages = sourcePdf.getPageCount();
  const ranges = parsePageRanges(rangeInput, totalPages);
  const baseName = sanitizeBaseName(file.name) || "split-document";
  const outputs: SplitPdfOutput[] = [];

  for (const range of ranges) {
    const nextPdf = await PDFDocument.create();
    const pageIndexes = Array.from(
      { length: range.end - range.start + 1 },
      (_, index) => range.start - 1 + index,
    );
    const copiedPages = await nextPdf.copyPages(sourcePdf, pageIndexes);

    copiedPages.forEach((page) => nextPdf.addPage(page));

    outputs.push({
      bytes: await nextPdf.save(),
      fileName: `${baseName}-pages-${range.label.replace(/\s+/g, "")}.pdf`,
      label: `Pages ${range.label}`,
      pageCount: copiedPages.length,
    });
  }

  return {
    outputs,
    totalPages,
  };
}
