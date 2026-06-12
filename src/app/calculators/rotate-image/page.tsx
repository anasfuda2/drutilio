import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("rotate-image");

export default function RotateImagePage() {
  return <ToolPage slug="rotate-image" calculator={<ImageTransformClient mode="rotate-image" />} />;
}
