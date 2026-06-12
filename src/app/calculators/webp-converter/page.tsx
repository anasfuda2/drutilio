import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("webp-converter");

export default function WebpConverterPage() {
  return <ToolPage slug="webp-converter" calculator={<ImageTransformClient mode="webp-converter" />} />;
}
