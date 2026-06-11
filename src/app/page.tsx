import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import {
  categoryDescriptions,
  featuredCalculators,
  toolCategories,
} from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Online Tools and Calculators",
  description:
    "Drutilio is a growing tools platform with smart online calculators across finance, health, education, and everyday categories.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description:
      "Smart online tools and calculators across finance, health, education, and everyday use cases.",
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
              Meet Drutilio, a growing platform for smart online tools and calculators.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore practical tools for financial planning, health reference,
              academic tracking, date math, percentage math, and everyday
              conversions. The platform starts with useful essentials and keeps
              the same fast, readable, utility-first experience across every
              category.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Browse all tools
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
                label: "Current library",
                value: "15 interactive tools across 4 categories",
              },
              {
                label: "Brand direction",
                value: "A growing tools platform anchored by practical utilities",
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
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Start with the category that matches the job you need done.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Drutilio is organized to make browsing feel simple even as the
              library expands. Finance tools remain a strong foundation, and
              other categories are built to feel just as clear and practical.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {toolCategories.map((category) => (
              <article
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  {category}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {categoryDescriptions[category]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Featured tools
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                A cross-category starting set that shows where the platform is heading.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                These picks cover money, health, school, and everyday utility
                work without burying the useful parts under clutter.
              </p>
            </div>

            <Link
              href="/calculators"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              See all tools
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
