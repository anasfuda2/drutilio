import type { Metadata } from "next";
import { PercentageDecreaseCalculatorClient } from "@/components/calculators/PercentageDecreaseCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "percentage-decrease-calculator",
);

export default function PercentageDecreaseCalculatorPage() {
  return (
    <ToolPage
      slug="percentage-decrease-calculator"
      calculator={<PercentageDecreaseCalculatorClient />}
    />
  );
}
