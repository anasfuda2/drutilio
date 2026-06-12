"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  trackFileDownload,
  trackToolExecutionSuccess,
} from "@/lib/analytics";
import { buildPdfDocument, prepareImageForPdf } from "@/lib/pdf-generator";

type ImageToPdfMode = "image" | "jpg" | "png";

type UploadedImage = {
  file: File;
  id: string;
  previewUrl: string;
};

const modeConfig: Record<
  ImageToPdfMode,
  {
    accept: string;
    description: string;
    downloadName: string;
    emptyHint: string;
    heading: string;
  }
> = {
  image: {
    accept: "image/*",
    description:
      "Upload JPG, PNG, or other common image files, then reorder them into one PDF.",
    downloadName: "drutilio-images.pdf",
    emptyHint: "Add one or more images to start building your PDF.",
    heading: "Image to PDF",
  },
  jpg: {
    accept: ".jpg,.jpeg,image/jpeg",
    description:
      "Upload one or more JPG images, reorder them, and download a combined PDF.",
    downloadName: "drutilio-jpg-to-pdf.pdf",
    emptyHint: "Add one or more JPG files to create a PDF.",
    heading: "JPG to PDF",
  },
  png: {
    accept: ".png,image/png",
    description:
      "Upload PNG files, arrange the page order, and export a PDF in your browser.",
    downloadName: "drutilio-png-to-pdf.pdf",
    emptyHint: "Add one or more PNG files to create a PDF.",
    heading: "PNG to PDF",
  },
};

function formatBytes(bytes: number) {
  if (bytes <= 0) {
    return "0 KB";
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function isAcceptedFile(file: File, mode: ImageToPdfMode) {
  if (mode === "image") {
    return file.type.startsWith("image/");
  }

  if (mode === "jpg") {
    return file.type === "image/jpeg" || /\.jpe?g$/i.test(file.name);
  }

  return file.type === "image/png" || /\.png$/i.test(file.name);
}

function moveItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const nextItems = [...items];
  const [item] = nextItems.splice(fromIndex, 1);

  nextItems.splice(toIndex, 0, item);

  return nextItems;
}

export function ImageToPdfClient({ mode }: { mode: ImageToPdfMode }) {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [items, setItems] = useState<UploadedImage[]>([]);
  const [outputSize, setOutputSize] = useState(0);
  const downloadUrlRef = useRef("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<UploadedImage[]>([]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    downloadUrlRef.current = downloadUrl;
  }, [downloadUrl]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => URL.revokeObjectURL(item.previewUrl));

      if (downloadUrlRef.current) {
        URL.revokeObjectURL(downloadUrlRef.current);
      }
    };
  }, []);

  const config = modeConfig[mode];
  const analytics =
    mode === "jpg"
      ? {
          name: "JPG to PDF",
          path: "/calculators/jpg-to-pdf",
          slug: "jpg-to-pdf",
        }
      : mode === "png"
        ? {
            name: "PNG to PDF",
            path: "/calculators/png-to-pdf",
            slug: "png-to-pdf",
          }
        : {
            name: "Image to PDF",
            path: "/calculators/image-to-pdf",
            slug: "image-to-pdf",
          };
  const totalInputBytes = useMemo(
    () => items.reduce((sum, item) => sum + item.file.size, 0),
    [items],
  );

  function replaceDownloadUrl(nextUrl: string) {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
    }

    setDownloadUrl(nextUrl);
  }

  function clearOutput() {
    replaceDownloadUrl("");
    setOutputSize(0);
  }

  function addFiles(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    const nextImages: UploadedImage[] = [];
    const rejectedNames: string[] = [];

    Array.from(fileList).forEach((file) => {
      if (isAcceptedFile(file, mode)) {
        nextImages.push({
          file,
          id:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          previewUrl: URL.createObjectURL(file),
        });
      } else {
        rejectedNames.push(file.name);
      }
    });

    if (rejectedNames.length > 0) {
      setError(
        `These files were skipped because they do not match this tool: ${rejectedNames.join(", ")}.`,
      );
    } else {
      setError("");
    }

    if (nextImages.length === 0) {
      return;
    }

    setItems((currentItems) => [...currentItems, ...nextImages]);
    clearOutput();
  }

  function removeItem(id: string) {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find((item) => item.id === id);

      if (itemToRemove) {
        URL.revokeObjectURL(itemToRemove.previewUrl);
      }

      return currentItems.filter((item) => item.id !== id);
    });
    setError("");
    clearOutput();
  }

  async function handleGeneratePdf() {
    if (items.length === 0) {
      setError(config.emptyHint);
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const preparedImages = [];

      for (const item of items) {
        preparedImages.push(await prepareImageForPdf(item.file));
      }

      const pdfBytes = buildPdfDocument(preparedImages);
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const nextUrl = URL.createObjectURL(blob);

      replaceDownloadUrl(nextUrl);
      setOutputSize(blob.size);
      trackToolExecutionSuccess({
        slug: analytics.slug,
        name: analytics.name,
        category: "PDF Tools",
        path: analytics.path,
        operation: "image-to-pdf",
        outputCount: items.length,
      });
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : "Something went wrong while creating the PDF.",
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
            Files are processed locally in your browser and are not uploaded to
            a server.
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-slate-950/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {config.heading} uploader
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {config.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Add Images
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept={config.accept}
              multiple
              className="sr-only"
              onChange={(event) => {
                addFiles(event.target.files);
                event.target.value = "";
              }}
            />
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              {config.emptyHint}
            </div>
          ) : (
            <div className="grid gap-3">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-[96px_minmax(0,1fr)_auto]"
                >
                  <Image
                    src={item.previewUrl}
                    alt={`Preview for ${item.file.name}`}
                    width={96}
                    height={96}
                    unoptimized
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-white">
                      {item.file.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Page {index + 1} • {formatBytes(item.file.size)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setItems((currentItems) =>
                          moveItem(currentItems, index, index - 1),
                        )
                      }
                      disabled={index === 0}
                      className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label={`Move ${item.file.name} up`}
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setItems((currentItems) =>
                          moveItem(currentItems, index, index + 1),
                        )
                      }
                      disabled={index === items.length - 1}
                      className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label={`Move ${item.file.name} down`}
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="rounded-lg border border-rose-400/20 bg-rose-400/10 px-3 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-400/20"
                      aria-label={`Remove ${item.file.name}`}
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
              onClick={handleGeneratePdf}
              disabled={items.length === 0 || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Generating PDF..." : "Generate PDF"}
            </button>
            <button
              type="button"
              onClick={() => {
                items.forEach((item) => URL.revokeObjectURL(item.previewUrl));
                setItems([]);
                setError("");
                clearOutput();
              }}
              disabled={items.length === 0 && !downloadUrl}
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
        title="PDF output"
        value={downloadUrl ? "Ready to download" : "Build your PDF"}
        detail={
          downloadUrl
            ? "Your PDF has been assembled locally in the browser. Review the page order and download when you are ready."
            : "Upload images, arrange the order, and generate a browser-made PDF without sending files to a server."
        }
        warning="This converter creates a practical client-side PDF from your images. Page sizing, compression, transparency handling, and print behavior can vary by browser and source images."
      >
        <ResultGrid
          items={[
            {
              label: "Pages queued",
              value: `${items.length}`,
            },
            {
              label: "Uploaded image size",
              value: formatBytes(totalInputBytes),
            },
            {
              label: "Generated PDF size",
              value: outputSize > 0 ? formatBytes(outputSize) : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-3">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download={config.downloadName}
              onClick={() =>
                trackFileDownload({
                  slug: analytics.slug,
                  name: analytics.name,
                  category: "PDF Tools",
                  path: analytics.path,
                  fileType: "pdf",
                })
              }
              className="inline-flex rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Download PDF
            </a>
          ) : null}
          <p className="text-sm leading-6 text-slate-200">
            Need the broader document workflow overview? Visit{" "}
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
