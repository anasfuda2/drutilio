import type { Metadata } from "next";
import { MergePdfClient } from "@/components/calculators/MergePdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("merge-pdf");

export default function MergePdfPage() {
  return <ToolPage slug="merge-pdf" calculator={<MergePdfClient />} />;
}
