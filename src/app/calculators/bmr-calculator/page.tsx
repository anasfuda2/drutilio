import type { Metadata } from "next";
import { BmrCalculatorClient } from "@/components/calculators/BmrCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("bmr-calculator");

export default function BmrCalculatorPage() {
  return <ToolPage slug="bmr-calculator" calculator={<BmrCalculatorClient />} />;
}
