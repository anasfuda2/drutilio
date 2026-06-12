import type { Metadata } from "next";
import { PdfToImageClient } from "@/components/calculators/PdfToImageClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("pdf-to-png");

export default function PdfToPngPage() {
  return <ToolPage slug="pdf-to-png" calculator={<PdfToImageClient format="png" />} />;
}
