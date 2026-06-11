import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import { featuredCalculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Online Tools and Calculators",
  description:
    "Drutilio is a growing tools platform with smart online calculators, starting with US-focused mortgage, auto loan, retirement, savings, and student loan tools.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description:
      "Smart online tools and calculators, starting with practical US-focused financial planning tools.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(15,23,42,1))]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {siteConfig.subtitle}
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Drutilio, a growing platform for smart online tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start with practical financial calculators for mortgages, loans,
              savings, student debt, and retirement planning. Over time, the
              platform can grow beyond finance while keeping the same fast,
              readable, utility-first experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Browse calculators
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View featured tools
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-slate-900/70 py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Focused coverage",
                value: "5 interactive launch calculators",
              },
              {
                label: "Brand direction",
                value: "A growing tools platform with finance at launch",
              },
              {
                label: "Approach",
                value: "Fast pages with server-first rendering",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Featured calculators
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Start with the financial tools people use most.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                These launch calculators cover common borrowing and long-term
                planning questions without burying the useful parts.
              </p>
            </div>

            <Link
              href="/calculators"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              See all calculators
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredCalculators.map((calculator) => (
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
    </>
  );
}
