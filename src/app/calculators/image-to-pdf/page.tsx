import type { Metadata } from "next";
import { ImageToPdfClient } from "@/components/calculators/ImageToPdfClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("image-to-pdf");

export default function ImageToPdfPage() {
  return <ToolPage slug="image-to-pdf" calculator={<ImageToPdfClient mode="image" />} />;
}
