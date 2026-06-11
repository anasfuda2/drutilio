import type { Metadata } from "next";
import { CalculatorsDirectoryClient } from "@/components/calculators/CalculatorsDirectoryClient";
import { Container } from "@/components/layout/Container";
import {
  calculators,
  categoryDescriptions,
  toolCategories,
} from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Tools and Calculators",
  description:
    `${siteConfig.name} includes searchable finance, health, education, and everyday tools with interactive calculators for loans, savings, grades, BMI, dates, percentages, and conversions.`,
  alternates: {
    canonical: "/calculators",
  },
  openGraph: {
    title: "Drutilio Tool Library",
    description:
      `${siteConfig.name} brings together a growing library of finance, health, education, and everyday tools in one place.`,
    url: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Tool library
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Explore calculators across finance, health, education, and everyday life.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Drutilio keeps interactive tools in focused client components while
            the surrounding pages stay server-rendered by default. Use category
            filters and live search to quickly find planning tools, reference
            tools, and quick calculation helpers that are easy to use on any
            device.
          </p>
        </div>

        <CalculatorsDirectoryClient
          calculators={calculators}
          toolCategories={toolCategories}
          categoryDescriptions={categoryDescriptions}
        />
      </Container>
    </section>
  );
}
