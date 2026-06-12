import type { Metadata } from "next";
import { FourOhOneKCalculatorClient } from "@/components/calculators/FourOhOneKCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("401k-calculator");

export default function FourOhOneKCalculatorPage() {
  return (
    <ToolPage
      slug="401k-calculator"
      calculator={<FourOhOneKCalculatorClient />}
    />
  );
}
