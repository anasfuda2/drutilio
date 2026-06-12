import type { Metadata } from "next";
import { IraCalculatorClient } from "@/components/calculators/IraCalculatorClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("ira-calculator");

export default function IraCalculatorPage() {
  return <ToolPage slug="ira-calculator" calculator={<IraCalculatorClient />} />;
}
