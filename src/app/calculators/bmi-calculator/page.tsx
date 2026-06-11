import type { Metadata } from "next";
import { BmiCalculatorClient } from "@/components/calculators/BmiCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("bmi-calculator");

export default function BmiCalculatorPage() {
  return (
    <ToolPage slug="bmi-calculator" calculator={<BmiCalculatorClient />} />
  );
}
