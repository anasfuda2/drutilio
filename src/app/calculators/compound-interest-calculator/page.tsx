import type { Metadata } from "next";
import { CompoundInterestCalculatorClient } from "@/components/calculators/CompoundInterestCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "compound-interest-calculator",
);

export default function CompoundInterestCalculatorPage() {
  return (
    <ToolPage
      slug="compound-interest-calculator"
      calculator={<CompoundInterestCalculatorClient />}
    />
  );
}
