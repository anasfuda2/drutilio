import type { Metadata } from "next";
import { RotatePdfClient } from "@/components/calculators/RotatePdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("rotate-pdf");

export default function RotatePdfPage() {
  return <ToolPage slug="rotate-pdf" calculator={<RotatePdfClient />} />;
}
