"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  trackFileDownload,
  trackToolExecutionSuccess,
} from "@/lib/analytics";
import { formatFileSize, inspectPdfFile, mergePdfFiles } from "@/lib/pdf-browser-tools";

type UploadedPdf = {
  file: File;
  id: string;
  pageCount: number | null;
};

function moveItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const nextItems = [...items];
  const [item] = nextItems.splice(fromIndex, 1);
  nextItems.splice(toIndex, 0, item);
  return nextItems;
}

function bytesToArrayBuffer(bytes: Uint8Array) {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  ) as ArrayBuffer;
}

export function MergePdfClient() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<UploadedPdf[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mergedPageCount, setMergedPageCount] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
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

  const totalInputBytes = useMemo(
    () => files.reduce((sum, item) => sum + item.file.size, 0),
    [files],
  );
  const totalKnownPages = useMemo(
    () =>
      files.reduce((sum, item) => sum + (item.pageCount ? item.pageCount : 0), 0),
    [files],
  );

  function replaceDownloadUrl(nextUrl: string) {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
    }

    setDownloadUrl(nextUrl);
  }

  function clearOutput() {
    replaceDownloadUrl("");
    setMergedPageCount(0);
    setOutputSize(0);
  }

  async function addFiles(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    const incomingFiles = Array.from(fileList);
    const nextFiles: UploadedPdf[] = [];
    const rejectedNames: string[] = [];

    for (const file of incomingFiles) {
      if (file.type !== "application/pdf" && !/\.pdf$/i.test(file.name)) {
        rejectedNames.push(file.name);
        continue;
      }

      let pageCount: number | null = null;

      try {
        const inspection = await inspectPdfFile(file);
        pageCount = inspection.pageCount;
      } catch {
        pageCount = null;
      }

      nextFiles.push({
        file,
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        pageCount,
      });
    }

    if (rejectedNames.length > 0) {
      setError(
        `These files were skipped because they are not PDFs: ${rejectedNames.join(", ")}.`,
      );
    } else {
      setError("");
    }

    if (nextFiles.length === 0) {
      return;
    }

    setFiles((currentFiles) => [...currentFiles, ...nextFiles]);
    clearOutput();
  }

  async function handleMerge() {
    if (files.length === 0) {
      setError("Add at least one PDF file before merging.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const merged = await mergePdfFiles(files.map((item) => item.file));
      const blob = new Blob([bytesToArrayBuffer(merged.bytes)], {
        type: "application/pdf",
      });
      replaceDownloadUrl(URL.createObjectURL(blob));
      setMergedPageCount(merged.pageCount);
      setOutputSize(blob.size);
      trackToolExecutionSuccess({
        slug: "merge-pdf",
        name: "Merge PDF",
        category: "PDF Tools",
        path: "/calculators/merge-pdf",
        operation: "merge-pdf",
        outputCount: files.length,
      });
    } catch (mergeError) {
      setError(
        mergeError instanceof Error
          ? mergeError.message
          : "Something went wrong while merging the PDFs.",
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
                <h2 className="text-xl font-semibold text-white">PDF merge uploader</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload multiple PDF files, reorder them, and merge them into
                  one downloadable document directly in your browser.
                </p>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Add PDFs
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              multiple
              className="sr-only"
              onChange={(event) => {
                void addFiles(event.target.files);
                event.target.value = "";
              }}
            />
          </div>

          {files.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Add two or more PDF files to start building a merged document.
            </div>
          ) : (
            <div className="grid gap-3">
              {files.map((item, index) => (
                <div
                  key={item.id}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-[minmax(0,1fr)_auto]"
                >
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-white">
                      {item.file.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      File {index + 1} • {formatFileSize(item.file.size)}
                      {item.pageCount ? ` • ${item.pageCount} pages` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setFiles((currentFiles) =>
                          moveItem(currentFiles, index, index - 1),
                        )
                      }
                      disabled={index === 0}
                      className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFiles((currentFiles) =>
                          moveItem(currentFiles, index, index + 1),
                        )
                      }
                      disabled={index === files.length - 1}
                      className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFiles((currentFiles) =>
                          currentFiles.filter((file) => file.id !== item.id),
                        );
                        clearOutput();
                        setError("");
                      }}
                      className="rounded-lg border border-rose-400/20 bg-rose-400/10 px-3 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-400/20"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleMerge()}
              disabled={files.length === 0 || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Merging PDFs..." : "Merge PDFs"}
            </button>
            <button
              type="button"
              onClick={() => {
                setFiles([]);
                setError("");
                clearOutput();
              }}
              disabled={files.length === 0 && !downloadUrl}
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
        title="Merged PDF"
        value={downloadUrl ? "Ready to download" : "Merge your files"}
        detail={
          downloadUrl
            ? "Your combined PDF is ready. Review the output and download it when you are ready."
            : "Upload PDF files, arrange the order, and generate one combined PDF without sending anything to a server."
        }
        warning="Merged output is still based on the source PDFs you provide. File size, internal metadata, bookmarks, forms, and some advanced PDF features can vary after merging."
      >
        <ResultGrid
          items={[
            {
              label: "PDF files queued",
              value: `${files.length}`,
            },
            {
              label: "Known total pages",
              value: totalKnownPages > 0 ? `${totalKnownPages}` : "Scanning",
            },
            {
              label: "Source PDF size",
              value: totalInputBytes > 0 ? formatFileSize(totalInputBytes) : "0 KB",
            },
            {
              label: "Merged file size",
              value: outputSize > 0 ? formatFileSize(outputSize) : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-3">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download="drutilio-merged.pdf"
              onClick={() =>
                trackFileDownload({
                  slug: "merge-pdf",
                  name: "Merge PDF",
                  category: "PDF Tools",
                  path: "/calculators/merge-pdf",
                  fileType: "pdf",
                })
              }
              className="inline-flex rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Download merged PDF
            </a>
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
          {mergedPageCount > 0 ? (
            <p className="text-sm leading-6 text-slate-300">
              Combined output: {mergedPageCount} pages.
            </p>
          ) : null}
        </div>
      </CalculatorResult>
    </div>
  );
}
