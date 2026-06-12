"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorTextField } from "@/components/calculators/CalculatorTextField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  formatFileSize,
  inspectPdfFile,
  splitPdfFile,
  type SplitPdfOutput,
} from "@/lib/pdf-browser-tools";

type DownloadableSplitFile = SplitPdfOutput & {
  url: string;
};

function bytesToArrayBuffer(bytes: Uint8Array) {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
}

export function SplitPdfClient() {
  const [downloadables, setDownloadables] = useState<DownloadableSplitFile[]>([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [rangeInput, setRangeInput] = useState("1-2, 3-4");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const downloadsRef = useRef<DownloadableSplitFile[]>([]);

  useEffect(() => {
    downloadsRef.current = downloadables;
  }, [downloadables]);

  useEffect(() => {
    return () => {
      downloadsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, []);

  function clearDownloads() {
    downloadsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    setDownloadables([]);
  }

  async function handleFileSelect(nextFile: File | null) {
    clearDownloads();
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
      if (inspection.pageCount === 1) {
        setRangeInput("1");
      } else if (inspection.pageCount === 2) {
        setRangeInput("1, 2");
      } else {
        setRangeInput(`1-${Math.min(2, inspection.pageCount)}, ${Math.min(3, inspection.pageCount)}-${Math.min(4, inspection.pageCount)}`);
      }
    } catch {
      setError("The selected file could not be read as a PDF.");
      setFile(null);
    }
  }

  async function handleSplit() {
    if (!file) {
      setError("Upload one PDF before splitting.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const result = await splitPdfFile(file, rangeInput);

      clearDownloads();
      setDownloadables(
        result.outputs.map((output) => ({
          ...output,
          url: URL.createObjectURL(
            new Blob([bytesToArrayBuffer(output.bytes)], {
              type: "application/pdf",
            }),
          ),
        })),
      );
      setPageCount(result.totalPages);
    } catch (splitError) {
      setError(
        splitError instanceof Error
          ? splitError.message
          : "Something went wrong while splitting the PDF.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  const totalOutputBytes = downloadables.reduce(
    (sum, item) => sum + item.bytes.length,
    0,
  );

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
                <h2 className="text-xl font-semibold text-white">PDF split uploader</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload one PDF, enter page ranges like 1-3, 4, or 7-9, and
                  export separate PDFs locally in your browser.
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
              Upload a single PDF, then enter the page groups you want to split
              into separate files.
            </div>
          )}

          <CalculatorTextField
            id="split-page-ranges"
            label="Page ranges"
            value={rangeInput}
            onChange={setRangeInput}
            helpText="Use commas to separate outputs, for example: 1-3, 4, 7-9"
            placeholder="1-3, 4, 7-9"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleSplit()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Splitting PDF..." : "Split PDF"}
            </button>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setPageCount(null);
                setError("");
                clearDownloads();
              }}
              disabled={!file && downloadables.length === 0}
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
        title="Split outputs"
        value={
          downloadables.length > 0
            ? `${downloadables.length} files ready`
            : "Prepare split files"
        }
        detail={
          downloadables.length > 0
            ? "Each page range has been exported as a separate downloadable PDF."
            : "Upload one PDF and define the page groups you want to split into separate files."
        }
        warning="Range-based splitting is an estimate-grade browser workflow. Forms, bookmarks, embedded attachments, and other advanced PDF features may not behave exactly the same in every split output."
      >
        <ResultGrid
          items={[
            {
              label: "Source pages",
              value: pageCount ? `${pageCount}` : "No PDF loaded",
            },
            {
              label: "Split files ready",
              value: `${downloadables.length}`,
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

        <div className="mt-5 space-y-3">
          {downloadables.length > 0 ? (
            <div className="grid gap-3">
              {downloadables.map((item) => (
                <a
                  key={item.fileName}
                  href={item.url}
                  download={item.fileName}
                  className="rounded-xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm transition hover:bg-white/5"
                >
                  <span className="block font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-slate-400">
                    {item.pageCount} pages • {formatFileSize(item.bytes.length)}
                  </span>
                </a>
              ))}
            </div>
          ) : null}

          <p className="text-sm leading-6 text-slate-200">
            Need the full PDF cluster? Visit{" "}
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
