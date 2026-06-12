import type { Metadata } from "next";
import { ImageToPdfClient } from "@/components/calculators/ImageToPdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("jpg-to-pdf");

export default function JpgToPdfPage() {
  return <ToolPage slug="jpg-to-pdf" calculator={<ImageToPdfClient mode="jpg" />} />;
}
