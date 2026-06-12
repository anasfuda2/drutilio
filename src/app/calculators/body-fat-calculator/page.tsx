import type { Metadata } from "next";
import { BodyFatCalculatorClient } from "@/components/calculators/BodyFatCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("body-fat-calculator");

export default function BodyFatCalculatorPage() {
  return (
    <ToolPage
      slug="body-fat-calculator"
      calculator={<BodyFatCalculatorClient />}
    />
  );
}
