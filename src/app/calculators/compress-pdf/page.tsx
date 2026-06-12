import type { Metadata } from "next";
import { CompressPdfClient } from "@/components/calculators/CompressPdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("compress-pdf");

export default function CompressPdfPage() {
  return <ToolPage slug="compress-pdf" calculator={<CompressPdfClient />} />;
}
