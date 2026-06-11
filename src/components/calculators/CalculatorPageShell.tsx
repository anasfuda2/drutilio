import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { RelatedCalculators } from "@/components/calculators/RelatedCalculators";
import { TrustStrip } from "@/components/calculators/TrustStrip";
import {
  BreadcrumbItem,
  Breadcrumbs,
} from "@/components/navigation/Breadcrumbs";

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
  return (
    <section className="py-16 sm:py-20">
      {structuredData}
      <Container>
        <div className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{intro}</p>
        </div>

        <div className="mt-10">{calculator}</div>
        <TrustStrip />

        <div className="mt-12 grid gap-6">
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

        <RelatedCalculators currentSlug={slug} />

        <div className="mt-12">{faq}</div>
      </Container>
    </section>
  );
}
