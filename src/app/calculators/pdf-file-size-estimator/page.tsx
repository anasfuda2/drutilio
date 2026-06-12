import type { Metadata } from "next";
import { PdfFileSizeEstimatorClient } from "@/components/calculators/PdfFileSizeEstimatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("pdf-file-size-estimator");

export default function PdfFileSizeEstimatorPage() {
  return (
    <ToolPage
      slug="pdf-file-size-estimator"
      calculator={<PdfFileSizeEstimatorClient />}
    />
  );
}
