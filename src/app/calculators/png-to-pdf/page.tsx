import type { Metadata } from "next";
import { ImageToPdfClient } from "@/components/calculators/ImageToPdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("png-to-pdf");

export default function PngToPdfPage() {
  return <ToolPage slug="png-to-pdf" calculator={<ImageToPdfClient mode="png" />} />;
}
