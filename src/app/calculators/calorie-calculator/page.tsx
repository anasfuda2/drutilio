import type { Metadata } from "next";
import { CalorieCalculatorClient } from "@/components/calculators/CalorieCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("calorie-calculator");

export default function CalorieCalculatorPage() {
  return (
    <ToolPage slug="calorie-calculator" calculator={<CalorieCalculatorClient />} />
  );
}
