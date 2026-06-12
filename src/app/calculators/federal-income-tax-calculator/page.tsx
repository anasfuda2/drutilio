import type { Metadata } from "next";
import { FederalIncomeTaxCalculatorClient } from "@/components/calculators/FederalIncomeTaxCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "federal-income-tax-calculator",
);

export default function FederalIncomeTaxCalculatorPage() {
  return (
    <ToolPage
      slug="federal-income-tax-calculator"
      calculator={<FederalIncomeTaxCalculatorClient />}
    />
  );
}
