import type { Metadata } from "next";
import { HijriDateConverterClient } from "@/components/calculators/HijriDateConverterClient";
import { ToolPage } from "@/components/calculators/ToolPage";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("hijri-date-converter");

export default function HijriDateConverterPage() {
  return (
    <ToolPage
      slug="hijri-date-converter"
      calculator={<HijriDateConverterClient />}
    />
  );
}
