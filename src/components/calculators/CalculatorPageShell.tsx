import { ReactNode } from "react";
import { AdPlaceholder } from "@/components/ads/AdPlaceholder";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { RelatedCalculators } from "@/components/calculators/RelatedCalculators";
import { TrustStrip } from "@/components/calculators/TrustStrip";
import {
  BreadcrumbItem,
  Breadcrumbs,
} from "@/components/navigation/Breadcrumbs";
import {
  getCalculatorBySlug,
  getToolDirectoryCategory,
} from "@/lib/calculators";

type CalculatorPageShellProps = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs?: BreadcrumbItem[];
  calculator: ReactNode;
  sections: {
    howItWorks: ReactNode;
    resultMeans: ReactNode;
    limitations: ReactNode;
    whenToUse: ReactNode;
  };
  faq: ReactNode;
  structuredData?: ReactNode;
};

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
        {children}
      </div>
    </section>
  );
}

export function CalculatorPageShell({
  slug,
  eyebrow,
  title,
  intro,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    { label: title },
  ],
  calculator,
  sections,
  faq,
  structuredData,
}: CalculatorPageShellProps) {
  const registryItem = getCalculatorBySlug(slug);
  const directoryCategory = registryItem
    ? getToolDirectoryCategory(registryItem)
    : "Tools";
  const shortIntro =
    intro.split(/(?<=[.!?])\s+/).slice(0, 2).join(" ") || intro;

  const benefitChips = (() => {
    const baseChips = ["Free to use", "No signup required"];

    if (directoryCategory === "PDF Tools" || directoryCategory === "Image Tools") {
      return [...baseChips, "Browser-based", "Files stay private"];
    }

    if (directoryCategory === "Converters") {
      return [...baseChips, "Quick to use", "Browser-based"];
    }

    return [...baseChips, "Educational estimate", "Fast to compare"];
  })();

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      {structuredData}
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,1fr)] lg:items-start">
          <div className="max-w-3xl">
            <Breadcrumbs items={breadcrumbs} />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {shortIntro}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {benefitChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#tool-workspace"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Use this tool
              </Link>
              <Link
                href="#tool-content"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                Read how it works
              </Link>
            </div>
          </div>

          <div
            id="tool-workspace"
            className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-3 shadow-[0_26px_80px_-30px_rgba(15,23,42,0.75)] sm:p-4"
          >
            {calculator}
          </div>
        </div>

        <div className="mt-5">
          <TrustStrip />
        </div>

        <RelatedCalculators currentSlug={slug} />

        <div className="mt-8">
          <AdPlaceholder placement="between-sections" />
        </div>

        <div id="tool-content" className="mt-10 grid gap-6">
          <SectionCard title="Quick overview">{intro}</SectionCard>

          <SectionCard title="How this calculator works">
            {sections.howItWorks}
          </SectionCard>

          <SectionCard title="What the result means">
            {sections.resultMeans}
          </SectionCard>

          <SectionCard title="Important limitations">
            {sections.limitations}
          </SectionCard>

          <SectionCard title="When to use this calculator">
            {sections.whenToUse}
          </SectionCard>
        </div>

        <div className="mt-12">{faq}</div>
      </Container>
    </section>
  );
}
