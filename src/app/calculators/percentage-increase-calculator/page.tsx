import type { Metadata } from "next";
import { PercentageIncreaseCalculatorClient } from "@/components/calculators/PercentageIncreaseCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "percentage-increase-calculator",
);

export default function PercentageIncreaseCalculatorPage() {
  return (
    <ToolPage
      slug="percentage-increase-calculator"
      calculator={<PercentageIncreaseCalculatorClient />}
    />
  );
}
