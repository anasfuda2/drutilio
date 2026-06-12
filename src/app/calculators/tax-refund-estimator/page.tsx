import type { Metadata } from "next";
import { TaxRefundEstimatorClient } from "@/components/calculators/TaxRefundEstimatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("tax-refund-estimator");

export default function TaxRefundEstimatorPage() {
  return (
    <ToolPage
      slug="tax-refund-estimator"
      calculator={<TaxRefundEstimatorClient />}
    />
  );
}
