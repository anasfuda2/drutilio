import type { Metadata } from "next";
import { GpaCalculatorClient } from "@/components/calculators/GpaCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("gpa-calculator");

export default function GpaCalculatorPage() {
  return (
    <ToolPage slug="gpa-calculator" calculator={<GpaCalculatorClient />} />
  );
}
