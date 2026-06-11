import type { Metadata } from "next";
import { GradeCalculatorClient } from "@/components/calculators/GradeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("grade-calculator");

export default function GradeCalculatorPage() {
  return (
    <ToolPage
      slug="grade-calculator"
      calculator={<GradeCalculatorClient />}
    />
  );
}
