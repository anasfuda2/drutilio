import type { Metadata } from "next";
import { IdealWeightCalculatorClient } from "@/components/calculators/IdealWeightCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("ideal-weight-calculator");

export default function IdealWeightCalculatorPage() {
  return (
    <ToolPage
      slug="ideal-weight-calculator"
      calculator={<IdealWeightCalculatorClient />}
    />
  );
}
