import type { Metadata } from "next";
import { DateDifferenceCalculatorClient } from "@/components/calculators/DateDifferenceCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata(
  "date-difference-calculator",
);

export default function DateDifferenceCalculatorPage() {
  return (
    <ToolPage
      slug="date-difference-calculator"
      calculator={<DateDifferenceCalculatorClient />}
    />
  );
}
