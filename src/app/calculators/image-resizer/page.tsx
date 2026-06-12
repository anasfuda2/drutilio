import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("image-resizer");

export default function ImageResizerPage() {
  return <ToolPage slug="image-resizer" calculator={<ImageTransformClient mode="image-resizer" />} />;
}
