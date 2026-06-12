"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  formatImageFileSize,
  getExtensionForImageFormat,
  getImageFormatFromFile,
  renderImageBlob,
} from "@/lib/image-browser-tools";

type ProcessedOutput = {
  fileName: string;
  height: number;
  sizeBytes: number;
  url: string;
  width: number;
};

function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.[a-z0-9]+$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

export function CropImageClient() {
  const [cropHeight, setCropHeight] = useState(0);
  const [cropWidth, setCropWidth] = useState(0);
  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null);
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);
  const [output, setOutput] = useState<ProcessedOutput | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef("");
  const outputUrlRef = useRef("");

  useEffect(() => {
    previewUrlRef.current = previewUrl;
  }, [previewUrl]);

  useEffect(() => {
    outputUrlRef.current = output?.url ?? "";
  }, [output]);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }

      if (outputUrlRef.current) {
        URL.revokeObjectURL(outputUrlRef.current);
      }
    };
  }, []);

  function replacePreviewUrl(nextUrl: string) {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }

    setPreviewUrl(nextUrl);
  }

  function replaceOutput(nextOutput: ProcessedOutput | null) {
    if (outputUrlRef.current) {
      URL.revokeObjectURL(outputUrlRef.current);
    }

    setOutput(nextOutput);
  }

  async function handleFileSelect(nextFile: File | null) {
    replaceOutput(null);
    setError("");
    setNaturalWidth(null);
    setNaturalHeight(null);
    setFile(nextFile);

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      setPreviewUrl("");
    }

    if (!nextFile) {
      return;
    }

    if (!nextFile.type.startsWith("image/")) {
      setFile(null);
      setError("Please choose an image file.");
      return;
    }

    const objectUrl = URL.createObjectURL(nextFile);
    replacePreviewUrl(objectUrl);

    const image = new window.Image();
    image.onload = () => {
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;

      setNaturalWidth(width);
      setNaturalHeight(height);
      setCropX(0);
      setCropY(0);
      setCropWidth(width);
      setCropHeight(height);
    };
    image.onerror = () => {
      setError("The selected image could not be read.");
      setFile(null);
    };
    image.src = objectUrl;
  }

  async function handleCrop() {
    if (!file) {
      setError("Upload one image before cropping.");
      return;
    }

    if (!naturalWidth || !naturalHeight) {
      setError("The source image dimensions could not be read.");
      return;
    }

    if (
      cropWidth <= 0 ||
      cropHeight <= 0 ||
      cropX < 0 ||
      cropY < 0 ||
      cropX + cropWidth > naturalWidth ||
      cropY + cropHeight > naturalHeight
    ) {
      setError("Crop bounds must fit inside the source image dimensions.");
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const format = getImageFormatFromFile(file) ?? "png";
      const result = await renderImageBlob(file, {
        outputFormat: format,
        crop: {
          x: cropX,
          y: cropY,
          width: cropWidth,
          height: cropHeight,
        },
        backgroundColor: "#ffffff",
      });
      const extension = getExtensionForImageFormat(format);
      const baseName = sanitizeBaseName(file.name) || "image";

      replaceOutput({
        fileName: `${baseName}-cropped.${extension}`,
        height: result.height,
        sizeBytes: result.blob.size,
        url: URL.createObjectURL(result.blob),
        width: result.width,
      });
    } catch (cropError) {
      setError(
        cropError instanceof Error
          ? cropError.message
          : "Something went wrong while cropping the image.",
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
            Images are processed locally in your browser and are never uploaded.
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-slate-950/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Crop image uploader</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Upload one image, set crop bounds in source-image pixels, and
                  export the cropped result directly in your browser.
                </p>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Choose image
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
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
                {formatImageFileSize(file.size)}
                {naturalWidth && naturalHeight
                  ? ` • ${naturalWidth} x ${naturalHeight}`
                  : ""}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Upload one image before setting crop bounds.
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <CalculatorField
              id="crop-x"
              label="Start X"
              value={cropX}
              onChange={setCropX}
              min={0}
              step={1}
              suffix="px"
            />
            <CalculatorField
              id="crop-y"
              label="Start Y"
              value={cropY}
              onChange={setCropY}
              min={0}
              step={1}
              suffix="px"
            />
            <CalculatorField
              id="crop-width"
              label="Crop width"
              value={cropWidth}
              onChange={setCropWidth}
              min={1}
              step={1}
              suffix="px"
            />
            <CalculatorField
              id="crop-height"
              label="Crop height"
              value={cropHeight}
              onChange={setCropHeight}
              min={1}
              step={1}
              suffix="px"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleCrop()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Cropping image..." : "Crop Image"}
            </button>
            <button
              type="button"
              onClick={() => {
                setError("");
                setFile(null);
                setNaturalWidth(null);
                setNaturalHeight(null);
                replaceOutput(null);
                replacePreviewUrl("");
              }}
              disabled={!file && !output}
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
        title="Cropped image"
        value={output ? `${output.width} x ${output.height}` : "Prepare crop"}
        detail={
          output
            ? "Your cropped image is ready to download."
            : "Upload one image, set crop bounds, and export the cropped output locally in your browser."
        }
      >
        <ResultGrid
          items={[
            {
              label: "Source size",
              value: file ? formatImageFileSize(file.size) : "No image loaded",
            },
            {
              label: "Output size",
              value: output ? formatImageFileSize(output.sizeBytes) : "Not generated yet",
            },
            {
              label: "Crop area",
              value:
                cropWidth > 0 && cropHeight > 0
                  ? `${cropWidth} x ${cropHeight}`
                  : "Not set",
            },
          ]}
        />

        <div className="mt-5 space-y-4">
          {output ? (
            <>
              <NextImage
                src={output.url}
                alt="Cropped preview"
                width={output.width}
                height={output.height}
                unoptimized
                className="max-h-72 w-full rounded-2xl border border-white/10 object-contain"
              />
              <a
                href={output.url}
                download={output.fileName}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Download cropped image
              </a>
            </>
          ) : previewUrl ? (
            <NextImage
              src={previewUrl}
              alt="Source preview"
              width={naturalWidth ?? 1200}
              height={naturalHeight ?? 900}
              unoptimized
              className="max-h-72 w-full rounded-2xl border border-white/10 object-contain"
            />
          ) : null}

          <p className="text-sm leading-6 text-slate-300">
            Explore more visual utilities in{" "}
            <Link href="/image-tools" className="font-semibold text-emerald-300 hover:text-emerald-200">
              Image Tools
            </Link>{" "}
            or the main{" "}
            <Link href="/tools" className="font-semibold text-emerald-300 hover:text-emerald-200">
              Tools Directory
            </Link>
            .
          </p>
        </div>
      </CalculatorResult>
    </div>
  );
}
