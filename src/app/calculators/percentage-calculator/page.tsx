import type { Metadata } from "next";
import { PercentageCalculatorClient } from "@/components/calculators/PercentageCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("percentage-calculator");

export default function PercentageCalculatorPage() {
  return (
    <ToolPage
      slug="percentage-calculator"
      calculator={<PercentageCalculatorClient />}
    />
  );
}
