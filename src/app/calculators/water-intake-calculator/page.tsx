import type { Metadata } from "next";
import { WaterIntakeCalculatorClient } from "@/components/calculators/WaterIntakeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("water-intake-calculator");

export default function WaterIntakeCalculatorPage() {
  return (
    <ToolPage
      slug="water-intake-calculator"
      calculator={<WaterIntakeCalculatorClient />}
    />
  );
}
