"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  trackFileDownload,
  trackToolExecutionSuccess,
} from "@/lib/analytics";
import { buildPdfDocument, type PreparedPdfImage } from "@/lib/pdf-generator";
import { formatFileSize, inspectPdfFile } from "@/lib/pdf-browser-tools";

type CompressionLevel = "low" | "medium" | "high";

const compressionConfig: Record<
  CompressionLevel,
  {
    quality: number;
    scale: number;
    label: string;
    note: string;
  }
> = {
  low: {
    quality: 0.86,
    scale: 1.7,
    label: "Low",
    note: "Light compression with a gentler quality tradeoff.",
  },
  medium: {
    quality: 0.72,
    scale: 1.35,
    label: "Medium",
    note: "Balanced compression for many mixed image-and-text documents.",
  },
  high: {
    quality: 0.56,
    scale: 1.05,
    label: "High",
    note: "Strong compression that may noticeably reduce page sharpness.",
  },
};

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.pdf$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

function compressionSummary(inputSize: number, outputSize: number) {
  if (inputSize <= 0 || outputSize <= 0) {
    return "Not generated yet";
  }

  const delta = inputSize - outputSize;
  if (delta === 0) {
    return "No size change";
  }

  const percent = Math.abs((delta / inputSize) * 100);

  if (delta > 0) {
    return `${percent.toFixed(1)}% smaller`;
  }

  return `${percent.toFixed(1)}% larger`;
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  quality: number,
) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("The page could not be encoded for PDF output."));
          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      quality,
    );
  });
}

function bytesToArrayBuffer(bytes: Uint8Array) {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
}

export function CompressPdfClient() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [outputName, setOutputName] = useState("");
  const [outputPageCount, setOutputPageCount] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const downloadUrlRef = useRef("");

  useEffect(() => {
    downloadUrlRef.current = downloadUrl;
  }, [downloadUrl]);

  useEffect(() => {
    return () => {
      if (downloadUrlRef.current) {
        URL.revokeObjectURL(downloadUrlRef.current);
      }
    };
  }, []);

  function replaceDownloadUrl(nextUrl: string) {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
    }

    setDownloadUrl(nextUrl);
  }

  function clearOutput() {
    replaceDownloadUrl("");
    setOutputName("");
    setOutputPageCount(0);
    setOutputSize(0);
  }

  async function handleFileSelect(nextFile: File | null) {
    clearOutput();
    setError("");
    setPageCount(null);
    setFile(nextFile);

    if (!nextFile) {
      return;
    }

    if (nextFile.type !== "application/pdf" && !/\.pdf$/i.test(nextFile.name)) {
      setFile(null);
      setError("Please choose a PDF file.");
      return;
    }

    try {
      const inspection = await inspectPdfFile(nextFile);
      setPageCount(inspection.pageCount);
    } catch {
      setError("The selected file could not be read as a PDF.");
      setFile(null);
    }
  }

  async function handleCompress() {
    if (!file) {
      setError("Upload one PDF before compressing.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const config = compressionConfig[level];
      const fileBytes = await file.arrayBuffer();
      const pdf = await getDocument({ data: fileBytes }).promise;
      const preparedPages: PreparedPdfImage[] = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: config.scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);

        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Your browser could not initialize canvas rendering.");
        }

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvas: canvas as HTMLCanvasElement,
          canvasContext: context,
          viewport,
        }).promise;

        const blob = await canvasToBlob(canvas, config.quality);
        preparedPages.push({
          height: canvas.height,
          jpegBytes: new Uint8Array(await blob.arrayBuffer()),
          width: canvas.width,
        });
      }

      const pdfBytes = buildPdfDocument(preparedPages);
      const blob = new Blob([bytesToArrayBuffer(pdfBytes)], {
        type: "application/pdf",
      });
      const baseName = sanitizeBaseName(file.name) || "compressed-document";

      replaceDownloadUrl(URL.createObjectURL(blob));
      setOutputName(`${baseName}-compressed-${level}.pdf`);
      setOutputPageCount(preparedPages.length);
      setOutputSize(blob.size);
      trackToolExecutionSuccess({
        slug: "compress-pdf",
        name: "Compress PDF",
        category: "PDF Tools",
        path: "/calculators/compress-pdf",
        operation: `compress-${level}`,
        outputCount: preparedPages.length,
      });
    } catch (compressionError) {
      setError(
        compressionError instanceof Error
          ? compressionError.message
          : "Something went wrong while compressing the PDF.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  const activeConfig = compressionConfig[level];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="space-y-5">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
            Files are processed locally in your browser and are never uploaded.
          </div>

          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            Compression results depend heavily on document contents. This
            browser-based tool works best for scan-heavy or image-heavy PDFs and
            may have limited effect on text-only PDFs. It can also reduce page
            sharpness because pages are rebuilt as compressed images.
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-slate-950/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">PDF compressor</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload one PDF, choose a compression level, and generate a
                  lighter PDF locally in your browser when practical.
                </p>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Choose PDF
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="sr-only"
              onChange={(event) => {
                void handleFileSelect(event.target.files?.[0] ?? null);
                event.target.value = "";
              }}
            />
          </div>

          {file ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="truncate text-base font-semibold text-white">
                {file.name}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {formatFileSize(file.size)}
                {pageCount ? ` • ${pageCount} pages` : ""}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Upload one PDF to estimate whether a lower-quality rebuilt version
              will be more practical for sharing or storage.
            </div>
          )}

          <CalculatorSelectField
            id="pdf-compression-level"
            label="Compression level"
            value={level}
            onChange={(value) => setLevel(value as CompressionLevel)}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            helpText={activeConfig.note}
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleCompress()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Compressing PDF..." : "Compress PDF"}
            </button>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setPageCount(null);
                setError("");
                clearOutput();
              }}
              disabled={!file && !downloadUrl}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear
            </button>
          </div>

          {error ? (
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100">
              {error}
            </div>
          ) : null}
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Compressed PDF"
        value={downloadUrl ? "Compressed file ready" : "Prepare compressed PDF"}
        detail={
          downloadUrl
            ? `Your ${activeConfig.label.toLowerCase()} compression output is ready to download.`
            : "Upload one PDF, choose a compression level, and generate a smaller PDF when the document structure makes that practical."
        }
        warning="This browser-based compressor rebuilds pages as compressed images. That can reduce file size for scan-heavy PDFs, but it may preserve little or no savings for text-heavy PDFs and can reduce searchability or page sharpness."
      >
        <ResultGrid
          items={[
            {
              label: "Source size",
              value: file ? formatFileSize(file.size) : "No PDF loaded",
            },
            {
              label: "Output pages",
              value: outputPageCount > 0 ? `${outputPageCount}` : "Not generated yet",
            },
            {
              label: "Output size",
              value: outputSize > 0 ? formatFileSize(outputSize) : "Not generated yet",
            },
            {
              label: "Size change",
              value: file ? compressionSummary(file.size, outputSize) : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-3">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download={outputName || "compressed-document.pdf"}
              onClick={() =>
                trackFileDownload({
                  slug: "compress-pdf",
                  name: "Compress PDF",
                  category: "PDF Tools",
                  path: "/calculators/compress-pdf",
                  fileType: "pdf",
                })
              }
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Download compressed PDF
            </a>
          ) : null}

          <p className="text-sm leading-6 text-slate-300">
            Need more document workflows? Visit{" "}
            <Link href="/pdf-tools" className="font-semibold text-emerald-300 hover:text-emerald-200">
              PDF Tools
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/pdf-tools/category"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              PDF Tools category
            </Link>
            .
          </p>
        </div>
      </CalculatorResult>
    </div>
  );
}
