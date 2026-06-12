import type { Metadata } from "next";
import { ClosingCostsCalculatorClient } from "@/components/calculators/ClosingCostsCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("closing-costs-calculator");

export default function ClosingCostsCalculatorPage() {
  return (
    <ToolPage
      slug="closing-costs-calculator"
      calculator={<ClosingCostsCalculatorClient />}
    />
  );
}
