"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorTextField } from "@/components/calculators/CalculatorTextField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  trackFileDownload,
  trackToolExecutionSuccess,
} from "@/lib/analytics";
import {
  extractPdfPages,
  formatFileSize,
  inspectPdfFile,
} from "@/lib/pdf-browser-tools";

function bytesToArrayBuffer(bytes: Uint8Array) {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
}

export function ExtractPdfPagesClient() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputName, setOutputName] = useState("");
  const [outputPageCount, setOutputPageCount] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [rangeInput, setRangeInput] = useState("1-3");
  const [selectedPagesLabel, setSelectedPagesLabel] = useState("");
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
    setSelectedPagesLabel("");
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

      if (inspection.pageCount === 1) {
        setRangeInput("1");
      } else if (inspection.pageCount <= 3) {
        setRangeInput(`1-${inspection.pageCount}`);
      } else {
        setRangeInput("1-3");
      }
    } catch {
      setError("The selected file could not be read as a PDF.");
      setFile(null);
    }
  }

  async function handleExtract() {
    if (!file) {
      setError("Upload one PDF before extracting pages.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const extracted = await extractPdfPages(file, rangeInput);
      const blob = new Blob([bytesToArrayBuffer(extracted.bytes)], {
        type: "application/pdf",
      });

      replaceDownloadUrl(URL.createObjectURL(blob));
      setOutputName(extracted.fileName);
      setOutputPageCount(extracted.pageCount);
      setOutputSize(blob.size);
      setSelectedPagesLabel(extracted.selectedPages);
      trackToolExecutionSuccess({
        slug: "extract-pdf-pages",
        name: "Extract PDF Pages",
        category: "PDF Tools",
        path: "/calculators/extract-pdf-pages",
        operation: "extract-pdf-pages",
        outputCount: extracted.pageCount,
      });
    } catch (extractError) {
      setError(
        extractError instanceof Error
          ? extractError.message
          : "Something went wrong while extracting pages.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

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
                <h2 className="text-xl font-semibold text-white">PDF page extractor</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload one PDF, enter the page ranges you want to keep, and
                  download a new PDF containing only those pages.
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
              Upload one PDF, then define the pages you want to keep using
              ranges like 1-3, 2,4,7, or 1-2,5,8-10.
            </div>
          )}

          <CalculatorTextField
            id="extract-page-ranges"
            label="Pages to extract"
            value={rangeInput}
            onChange={setRangeInput}
            helpText="Accepted examples: 1-3, 2,4,7, or 1-2,5,8-10"
            placeholder="1-3, 5, 8-10"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleExtract()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Extracting pages..." : "Extract PDF Pages"}
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
        title="Extracted PDF"
        value={downloadUrl ? `${outputPageCount} pages ready` : "Prepare page extract"}
        detail={
          downloadUrl
            ? `Your extracted PDF keeps pages ${selectedPagesLabel}.`
            : "Upload one PDF, define the page ranges you want to keep, and generate one smaller PDF."
        }
        warning="This is a browser-based document utility. Advanced PDF features such as forms, bookmarks, attachments, or internal navigation can vary after extraction."
      >
        <ResultGrid
          items={[
            {
              label: "Source pages",
              value: pageCount ? `${pageCount}` : "No PDF loaded",
            },
            {
              label: "Extracted pages",
              value: outputPageCount > 0 ? `${outputPageCount}` : "Not generated yet",
            },
            {
              label: "Output size",
              value: outputSize > 0 ? formatFileSize(outputSize) : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-3">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download={outputName || "extracted-pages.pdf"}
              onClick={() =>
                trackFileDownload({
                  slug: "extract-pdf-pages",
                  name: "Extract PDF Pages",
                  category: "PDF Tools",
                  path: "/calculators/extract-pdf-pages",
                  fileType: "pdf",
                  outputCount: outputPageCount,
                })
              }
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Download extracted PDF
            </a>
          ) : null}

          <p className="text-sm leading-6 text-slate-300">
            Need more document tools? Visit{" "}
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
