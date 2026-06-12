import type { Metadata } from "next";
import { MortgageRefinanceCalculatorClient } from "@/components/calculators/MortgageRefinanceCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "mortgage-refinance-calculator",
);

export default function MortgageRefinanceCalculatorPage() {
  return (
    <ToolPage
      slug="mortgage-refinance-calculator"
      calculator={<MortgageRefinanceCalculatorClient />}
    />
  );
}
