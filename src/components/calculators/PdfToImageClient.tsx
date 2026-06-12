"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorTextField } from "@/components/calculators/CalculatorTextField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  formatFileSize,
  inspectPdfFile,
  parsePageRanges,
} from "@/lib/pdf-browser-tools";

type OutputFormat = "jpg" | "png";

type RenderedImage = {
  fileName: string;
  height: number;
  label: string;
  pageNumber: number;
  sizeBytes: number;
  url: string;
  width: number;
};

const modeConfig: Record<
  OutputFormat,
  {
    downloadExtension: string;
    heading: string;
    mimeType: string;
    quality?: number;
  }
> = {
  jpg: {
    downloadExtension: "jpg",
    heading: "PDF to JPG",
    mimeType: "image/jpeg",
    quality: 0.92,
  },
  png: {
    downloadExtension: "png",
    heading: "PDF to PNG",
    mimeType: "image/png",
  },
};

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number,
) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("The page could not be rendered as an image."));
          return;
        }

        resolve(blob);
      },
      mimeType,
      quality,
    );
  });
}

function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.pdf$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

export function PdfToImageClient({ format }: { format: OutputFormat }) {
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputs, setOutputs] = useState<RenderedImage[]>([]);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [rangeInput, setRangeInput] = useState("1-3");
  const downloadsRef = useRef<RenderedImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    downloadsRef.current = outputs;
  }, [outputs]);

  useEffect(() => {
    return () => {
      downloadsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, []);

  function clearOutputs() {
    downloadsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    setOutputs([]);
  }

  async function handleFileSelect(nextFile: File | null) {
    clearOutputs();
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
      setRangeInput(`1-${Math.min(inspection.pageCount, 3)}`);
    } catch {
      setFile(null);
      setError("The selected file could not be read as a PDF.");
    }
  }

  async function handleConvert() {
    if (!file) {
      setError("Upload one PDF before converting.");
      return;
    }

    if (!pageCount) {
      setError("The PDF page count could not be read.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const ranges = parsePageRanges(rangeInput, pageCount);
      const selectedPages = ranges.flatMap((range) =>
        Array.from(
          { length: range.end - range.start + 1 },
          (_, index) => range.start + index,
        ),
      );
      const uniquePages = [...new Set(selectedPages)];
      const fileBytes = await file.arrayBuffer();
      const pdf = await getDocument({
        data: fileBytes,
      }).promise;
      const nextOutputs: RenderedImage[] = [];
      const config = modeConfig[format];
      const baseName = sanitizeBaseName(file.name) || "document";

      for (const pageNumber of uniquePages) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.8 });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);

        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Your browser could not initialize canvas rendering.");
        }

        await page.render({
          canvas: canvas as HTMLCanvasElement,
          canvasContext: context,
          viewport,
        }).promise;

        const blob = await canvasToBlob(canvas, config.mimeType, config.quality);
        const url = URL.createObjectURL(blob);

        nextOutputs.push({
          fileName: `${baseName}-page-${pageNumber}.${config.downloadExtension}`,
          height: canvas.height,
          label: `Page ${pageNumber}`,
          pageNumber,
          sizeBytes: blob.size,
          url,
          width: canvas.width,
        });
      }

      clearOutputs();
      setOutputs(nextOutputs);
    } catch (conversionError) {
      setError(
        conversionError instanceof Error
          ? conversionError.message
          : "Something went wrong while converting the PDF pages.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  const totalOutputBytes = outputs.reduce((sum, item) => sum + item.sizeBytes, 0);
  const config = modeConfig[format];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="space-y-5">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
            Files are processed locally in your browser and are never uploaded.
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-slate-950/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {config.heading} converter
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload one PDF, choose which pages you want, and render those
                  pages as downloadable image files locally in your browser.
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
              Upload one PDF and choose which pages you want to export as image
              files.
            </div>
          )}

          <CalculatorTextField
            id={`pdf-to-${format}-ranges`}
            label="Pages to convert"
            value={rangeInput}
            onChange={setRangeInput}
            placeholder="1-3, 5"
            helpText="Use commas to separate page ranges, for example: 1-3, 5"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleConvert()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating
                ? `Rendering ${config.heading}...`
                : `Convert to ${format.toUpperCase()}`}
            </button>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setPageCount(null);
                setError("");
                clearOutputs();
              }}
              disabled={!file && outputs.length === 0}
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
        title={`${config.heading} output`}
        value={
          outputs.length > 0
            ? `${outputs.length} image${outputs.length === 1 ? "" : "s"} ready`
            : `Export ${format.toUpperCase()} files`
        }
        detail={
          outputs.length > 0
            ? "Your selected PDF pages are ready to download as image files."
            : "Upload one PDF, choose page ranges, and render selected pages into browser-generated image files."
        }
        warning="Rendered output is still a browser-based approximation of the source PDF pages. Fine typography, transparency, annotations, and color handling can vary across PDFs and browsers."
      >
        <ResultGrid
          items={[
            {
              label: "Source pages",
              value: pageCount ? `${pageCount}` : "No PDF loaded",
            },
            {
              label: `${format.toUpperCase()} files ready`,
              value: `${outputs.length}`,
            },
            {
              label: "Total output size",
              value:
                totalOutputBytes > 0
                  ? formatFileSize(totalOutputBytes)
                  : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-4">
          {outputs.length > 0 ? (
            <div className="grid gap-3">
              {outputs.map((item) => (
                <div
                  key={item.fileName}
                  className="rounded-xl border border-white/10 bg-slate-950/35 p-3"
                >
                  <div className="grid gap-3 sm:grid-cols-[88px_minmax(0,1fr)] sm:items-center">
                    <Image
                      src={item.url}
                      alt={`Preview for ${item.label}`}
                      width={88}
                      height={Math.max(88, Math.round((88 * item.height) / item.width))}
                      unoptimized
                      className="rounded-lg border border-white/10 object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.fileName} • {formatFileSize(item.sizeBytes)}
                      </p>
                      <a
                        href={item.url}
                        download={item.fileName}
                        className="mt-3 inline-flex rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                      >
                        Download {format.toUpperCase()}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <p className="text-sm leading-6 text-slate-200">
            Need the broader document workflow context? Visit{" "}
            <Link
              href="/pdf-tools"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              the PDF tools hub
            </Link>
            .
          </p>
        </div>
      </CalculatorResult>
    </div>
  );
}
