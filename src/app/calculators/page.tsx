import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import {
  categoryDescriptions,
  getCalculatorsByCategory,
  toolCategories,
} from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Tools and Calculators",
  description:
    `${siteConfig.name} includes finance, health, education, and everyday tools with interactive calculators for loans, savings, grades, BMI, dates, percentages, and conversions.`,
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
            the surrounding pages stay server-rendered by default. Browse by
            category to find planning tools, reference tools, and quick
            calculation helpers that are easy to use on any device.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {toolCategories.map((category) => {
            const categoryTools = getCalculatorsByCategory(category);

            return (
              <section key={category}>
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {category}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {category} tools
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {categoryTools.map((calculator) => (
                    <CalculatorCard
                      key={calculator.slug}
                      title={calculator.title}
                      description={calculator.description}
                      category={calculator.category}
                      href={`/calculators/${calculator.slug}`}
                      status={calculator.status}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
