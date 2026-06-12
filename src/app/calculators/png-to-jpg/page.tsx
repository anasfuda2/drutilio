import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("png-to-jpg");

export default function PngToJpgPage() {
  return <ToolPage slug="png-to-jpg" calculator={<ImageTransformClient mode="png-to-jpg" />} />;
}
