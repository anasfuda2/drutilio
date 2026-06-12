import type { Metadata } from "next";
import { GradeCalculatorClient } from "@/components/calculators/GradeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("final-grade-calculator");

export default function FinalGradeCalculatorPage() {
  return (
    <ToolPage
      slug="final-grade-calculator"
      calculator={<GradeCalculatorClient />}
    />
  );
}
