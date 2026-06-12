import type { Metadata } from "next";
import { StudyTimeCalculatorClient } from "@/components/calculators/StudyTimeCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("study-time-calculator");

export default function StudyTimeCalculatorPage() {
  return (
    <ToolPage
      slug="study-time-calculator"
      calculator={<StudyTimeCalculatorClient />}
    />
  );
}
