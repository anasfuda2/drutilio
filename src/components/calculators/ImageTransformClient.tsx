"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import {
  formatImageFileSize,
  getExtensionForImageFormat,
  getImageFormatFromFile,
  type ImageOutputFormat,
  renderImageBlob,
} from "@/lib/image-browser-tools";

type ImageToolMode =
  | "image-resizer"
  | "image-compressor"
  | "jpg-to-png"
  | "png-to-jpg"
  | "webp-converter"
  | "rotate-image";

type ProcessedOutput = {
  fileName: string;
  height: number;
  sizeBytes: number;
  url: string;
  width: number;
};

const compressionConfig: Record<
  "low" | "medium" | "high",
  { label: string; quality: number }
> = {
  low: { label: "Low", quality: 0.88 },
  medium: { label: "Medium", quality: 0.72 },
  high: { label: "High", quality: 0.56 },
};

const modeConfig: Record<
  ImageToolMode,
  {
    accept: string;
    defaultFormat?: ImageOutputFormat;
    description: string;
    emptyHint: string;
    heading: string;
    fileRule: (file: File) => boolean;
  }
> = {
  "image-resizer": {
    accept: "image/*",
    description:
      "Upload one image, set maximum width and height, and export a resized version directly in your browser.",
    emptyHint: "Upload one image before resizing.",
    heading: "Image Resizer",
    fileRule: (file) => file.type.startsWith("image/"),
  },
  "image-compressor": {
    accept: "image/*",
    description:
      "Upload one image, choose a compression level and output format, and export a lighter version locally in your browser.",
    emptyHint: "Upload one image before compressing.",
    heading: "Image Compressor",
    fileRule: (file) => file.type.startsWith("image/"),
  },
  "jpg-to-png": {
    accept: ".jpg,.jpeg,image/jpeg",
    defaultFormat: "png",
    description:
      "Upload one JPG or JPEG image and convert it into a PNG file locally in your browser.",
    emptyHint: "Upload one JPG image before converting.",
    heading: "JPG to PNG",
    fileRule: (file) =>
      file.type === "image/jpeg" || /\.jpe?g$/i.test(file.name),
  },
  "png-to-jpg": {
    accept: ".png,image/png",
    defaultFormat: "jpeg",
    description:
      "Upload one PNG image and convert it into a JPG file with a white background where needed.",
    emptyHint: "Upload one PNG image before converting.",
    heading: "PNG to JPG",
    fileRule: (file) => file.type === "image/png" || /\.png$/i.test(file.name),
  },
  "webp-converter": {
    accept: ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp",
    description:
      "Upload one JPG, PNG, or WebP image and export it into another common image format locally in your browser.",
    emptyHint: "Upload one JPG, PNG, or WebP image before converting.",
    heading: "WebP Converter",
    fileRule: (file) =>
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp" ||
      /\.(jpe?g|png|webp)$/i.test(file.name),
  },
  "rotate-image": {
    accept: "image/*",
    description:
      "Upload one image, choose a rotation angle, and export the rotated result locally in your browser.",
    emptyHint: "Upload one image before rotating.",
    heading: "Rotate Image",
    fileRule: (file) => file.type.startsWith("image/"),
  },
};

function sanitizeBaseName(fileName: string) {
  return fileName.replace(/\.[a-z0-9]+$/i, "").replace(/[^a-z0-9-_]+/gi, "-");
}

function outputLabel(format: ImageOutputFormat) {
  switch (format) {
    case "jpeg":
      return "JPG";
    case "png":
      return "PNG";
    case "webp":
      return "WebP";
  }
}

function formatFromSelection(value: string): ImageOutputFormat {
  if (value === "png") return "png";
  if (value === "webp") return "webp";
  return "jpeg";
}

export function ImageTransformClient({ mode }: { mode: ImageToolMode }) {
  const [compressionLevel, setCompressionLevel] = useState<"low" | "medium" | "high">("medium");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [maxHeight, setMaxHeight] = useState(1200);
  const [maxWidth, setMaxWidth] = useState(1200);
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null);
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);
  const [output, setOutput] = useState<ProcessedOutput | null>(null);
  const [outputFormatSelection, setOutputFormatSelection] = useState("jpeg");
  const [previewUrl, setPreviewUrl] = useState("");
  const [rotation, setRotation] = useState<"90" | "180" | "270">("90");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef("");
  const outputUrlRef = useRef("");

  const config = modeConfig[mode];

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

  const inputFormat = file ? getImageFormatFromFile(file) : null;
  const effectiveOutputFormat = useMemo(() => {
    if (mode === "jpg-to-png") {
      return "png" as ImageOutputFormat;
    }

    if (mode === "png-to-jpg") {
      return "jpeg" as ImageOutputFormat;
    }

    if (mode === "webp-converter" || mode === "image-compressor") {
      return formatFromSelection(outputFormatSelection);
    }

    return inputFormat ?? "png";
  }, [inputFormat, mode, outputFormatSelection]);

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

    if (!config.fileRule(nextFile)) {
      setFile(null);
      setError("Please choose a supported image file for this tool.");
      return;
    }

    const objectUrl = URL.createObjectURL(nextFile);
    replacePreviewUrl(objectUrl);

    const image = new window.Image();
    image.onload = () => {
      setNaturalWidth(image.naturalWidth || image.width);
      setNaturalHeight(image.naturalHeight || image.height);
      setMaxWidth(image.naturalWidth || image.width);
      setMaxHeight(image.naturalHeight || image.height);
    };
    image.onerror = () => {
      setError("The selected image could not be read.");
      setFile(null);
    };
    image.src = objectUrl;
  }

  async function handleProcess() {
    if (!file) {
      setError(config.emptyHint);
      return;
    }

    setError("");
    setIsGenerating(true);

    try {
      const quality =
        mode === "image-compressor"
          ? compressionConfig[compressionLevel].quality
          : effectiveOutputFormat === "jpeg" || effectiveOutputFormat === "webp"
            ? 0.92
            : undefined;

      const result = await renderImageBlob(file, {
        outputFormat: effectiveOutputFormat,
        quality,
        maxWidth:
          mode === "image-resizer"
            ? Math.max(1, Math.round(maxWidth))
            : undefined,
        maxHeight:
          mode === "image-resizer"
            ? Math.max(1, Math.round(maxHeight))
            : undefined,
        rotation:
          mode === "rotate-image"
            ? (Number(rotation) as 90 | 180 | 270)
            : 0,
        backgroundColor: "#ffffff",
      });

      const baseName = sanitizeBaseName(file.name) || "image";
      const extension = getExtensionForImageFormat(effectiveOutputFormat);
      let suffix = "processed";

      if (mode === "image-resizer") suffix = "resized";
      if (mode === "image-compressor") suffix = "compressed";
      if (mode === "jpg-to-png") suffix = "png";
      if (mode === "png-to-jpg") suffix = "jpg";
      if (mode === "webp-converter") suffix = extension;
      if (mode === "rotate-image") suffix = `rotated-${rotation}`;

      replaceOutput({
        fileName: `${baseName}-${suffix}.${extension}`,
        height: result.height,
        sizeBytes: result.blob.size,
        url: URL.createObjectURL(result.blob),
        width: result.width,
      });
    } catch (processingError) {
      setError(
        processingError instanceof Error
          ? processingError.message
          : "Something went wrong while processing the image.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  const sizeChange =
    file && output
      ? `${(((output.sizeBytes - file.size) / file.size) * 100).toFixed(1)}%`
      : null;

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
                Choose image
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept={config.accept}
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
              {config.emptyHint}
            </div>
          )}

          {mode === "image-resizer" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <CalculatorField
                id="image-max-width"
                label="Maximum width"
                value={maxWidth}
                onChange={setMaxWidth}
                min={1}
                step={1}
                suffix="px"
                helpText="The output will fit inside these bounds while preserving the source aspect ratio."
              />
              <CalculatorField
                id="image-max-height"
                label="Maximum height"
                value={maxHeight}
                onChange={setMaxHeight}
                min={1}
                step={1}
                suffix="px"
              />
            </div>
          ) : null}

          {mode === "image-compressor" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <CalculatorSelectField
                id="image-compression-level"
                label="Compression level"
                value={compressionLevel}
                onChange={(value) =>
                  setCompressionLevel(value as "low" | "medium" | "high")
                }
                options={[
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                ]}
                helpText="Compression results depend on the source image and file format."
              />
              <CalculatorSelectField
                id="image-compression-output"
                label="Output format"
                value={outputFormatSelection}
                onChange={setOutputFormatSelection}
                options={[
                  { value: "jpeg", label: "JPG" },
                  { value: "webp", label: "WebP" },
                ]}
                helpText="WebP can often shrink more, while JPG is more universally familiar."
              />
            </div>
          ) : null}

          {mode === "webp-converter" ? (
            <CalculatorSelectField
              id="webp-output-format"
              label="Output format"
              value={outputFormatSelection}
              onChange={setOutputFormatSelection}
              options={[
                { value: "jpeg", label: "JPG" },
                { value: "png", label: "PNG" },
                { value: "webp", label: "WebP" },
              ]}
              helpText="Choose the format you want for the converted image."
            />
          ) : null}

          {mode === "rotate-image" ? (
            <CalculatorSelectField
              id="rotate-image-angle"
              label="Rotation angle"
              value={rotation}
              onChange={(value) => setRotation(value as "90" | "180" | "270")}
              options={[
                { value: "90", label: "90 degrees" },
                { value: "180", label: "180 degrees" },
                { value: "270", label: "270 degrees" },
              ]}
            />
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void handleProcess()}
              disabled={!file || isGenerating}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Processing image..." : config.heading}
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
        title="Processed image"
        value={output ? `${output.width} x ${output.height}` : "Prepare output"}
        detail={
          output
            ? `Your ${outputLabel(effectiveOutputFormat)} file is ready to download.`
            : "Upload one image, adjust the tool settings, and export a processed image locally in your browser."
        }
        warning={
          mode === "image-compressor"
            ? "Compression results depend on the original image format, dimensions, and visual detail. Some files may shrink significantly, while others may change only a little."
            : undefined
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
              label: "Format",
              value: output ? outputLabel(effectiveOutputFormat) : "Not generated yet",
            },
            {
              label: "Size change",
              value: sizeChange ? sizeChange : "Not generated yet",
            },
          ]}
        />

        <div className="mt-5 space-y-4">
          {output ? (
            <>
              <NextImage
                src={output.url}
                alt="Processed preview"
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
                Download processed image
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
            or browse the main{" "}
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
