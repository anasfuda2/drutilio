import type { Metadata } from "next";
import { ImageTransformClient } from "@/components/calculators/ImageTransformClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("jpg-to-png");

export default function JpgToPngPage() {
  return <ToolPage slug="jpg-to-png" calculator={<ImageTransformClient mode="jpg-to-png" />} />;
}
