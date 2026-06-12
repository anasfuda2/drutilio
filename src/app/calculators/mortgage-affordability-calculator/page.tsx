import type { Metadata } from "next";
import { MortgageAffordabilityCalculatorClient } from "@/components/calculators/MortgageAffordabilityCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "mortgage-affordability-calculator",
);

export default function MortgageAffordabilityCalculatorPage() {
  return (
    <ToolPage
      slug="mortgage-affordability-calculator"
      calculator={<MortgageAffordabilityCalculatorClient />}
    />
  );
}
