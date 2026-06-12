import type { Metadata } from "next";
import { SelfEmploymentTaxCalculatorClient } from "@/components/calculators/SelfEmploymentTaxCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "self-employment-tax-calculator",
);

export default function SelfEmploymentTaxCalculatorPage() {
  return (
    <ToolPage
      slug="self-employment-tax-calculator"
      calculator={<SelfEmploymentTaxCalculatorClient />}
    />
  );
}
