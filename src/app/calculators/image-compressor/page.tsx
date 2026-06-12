import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("image-compressor");

export default function ImageCompressorPage() {
  return <ToolPage slug="image-compressor" calculator={<ImageTransformClient mode="image-compressor" />} />;
}
