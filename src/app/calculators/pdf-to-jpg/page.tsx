import type { Metadata } from "next";
import { PdfToImageClient } from "@/components/calculators/PdfToImageClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("pdf-to-jpg");

export default function PdfToJpgPage() {
  return <ToolPage slug="pdf-to-jpg" calculator={<PdfToImageClient format="jpg" />} />;
}
