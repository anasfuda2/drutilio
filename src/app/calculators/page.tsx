import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import { calculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calculators",
  description:
    `${siteConfig.name} calculators include interactive US-focused tools for mortgages, auto loans, retirement, savings goals, and student loans.`,
  alternates: {
    canonical: "/calculators",
  },
  openGraph: {
    title: "Calculator Library",
    description:
      `${siteConfig.name} starts with a central library of US-focused financial calculators and can grow into a broader tools platform over time.`,
    url: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Calculator library
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Financial calculators for common US planning scenarios.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This index is the central hub for the first set of interactive
            tools. Each calculator runs in a focused client component while the
            surrounding page stays server-rendered by default.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {calculators.map((calculator) => (
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
      </Container>
    </section>
  );
}
