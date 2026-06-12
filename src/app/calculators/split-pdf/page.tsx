import type { Metadata } from "next";
import { SplitPdfClient } from "@/components/calculators/SplitPdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("split-pdf");

export default function SplitPdfPage() {
  return <ToolPage slug="split-pdf" calculator={<SplitPdfClient />} />;
}
