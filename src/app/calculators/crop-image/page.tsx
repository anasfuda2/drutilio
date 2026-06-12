import type { Metadata } from "next";
import { CropImageClient } from "@/components/calculators/CropImageClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("crop-image");

export default function CropImagePage() {
  return <ToolPage slug="crop-image" calculator={<CropImageClient />} />;
}
