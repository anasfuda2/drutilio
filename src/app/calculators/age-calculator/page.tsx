import type { Metadata } from "next";
import { AgeCalculatorClient } from "@/components/calculators/AgeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("age-calculator");

export default function AgeCalculatorPage() {
  return (
    <ToolPage slug="age-calculator" calculator={<AgeCalculatorClient />} />
  );
}
