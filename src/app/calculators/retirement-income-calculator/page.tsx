import type { Metadata } from "next";
import { RetirementIncomeCalculatorClient } from "@/components/calculators/RetirementIncomeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "retirement-income-calculator",
);

export default function RetirementIncomeCalculatorPage() {
  return (
    <ToolPage
      slug="retirement-income-calculator"
      calculator={<RetirementIncomeCalculatorClient />}
    />
  );
}
