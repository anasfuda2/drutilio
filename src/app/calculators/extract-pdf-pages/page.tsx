import type { Metadata } from "next";
import { ExtractPdfPagesClient } from "@/components/calculators/ExtractPdfPagesClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("extract-pdf-pages");

export default function ExtractPdfPagesPage() {
  return <ToolPage slug="extract-pdf-pages" calculator={<ExtractPdfPagesClient />} />;
}
