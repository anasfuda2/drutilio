import type { Metadata } from "next";
import { ToolPage } from "@/components/calculators/ToolPage";
import { UnitConverterClient } from "@/components/calculators/UnitConverterClient";
import { getToolMetadata } from "@/lib/tool-page-content";

export const metadata: Metadata = getToolMetadata("unit-converter");

export default function UnitConverterPage() {
  return (
    <ToolPage slug="unit-converter" calculator={<UnitConverterClient />} />
  );
}
