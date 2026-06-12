import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQSection, type FAQItem } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolsDirectoryClient } from "@/components/calculators/ToolsDirectoryClient";
import {
  popularCalculators,
  toolDirectoryCategories,
} from "@/lib/calculators";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Browse Dr.Utilio's most popular and featured tools across PDF, image tools, finance, tax, retirement, mortgage, health, education, zakat, and converters.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Popular Tools" },
];

const faqItems: FAQItem[] = [
  {
    question: "What appears on the Dr.Utilio Popular Tools page?",
    answer:
      "This page highlights the most useful Dr.Utilio tools using the platform's featured and popular registry entries, then groups them by category for easier discovery.",
  },
  {
    question: "Can I search within the popular tools list?",
    answer:
      "Yes. The page includes live search by tool name and category filters so you can narrow the discovery list quickly.",
  },
  {
    question: "Does Popular Tools include PDF and converter tools too?",
    answer:
      "Yes. Popular Tools spans the full platform, including PDF tools, converters, finance tools, and topic-specific planning calculators.",
  },
  {
    question: "How is this different from the full Tools Directory?",
    answer:
      "The full Tools Directory includes every registered tool. Popular Tools narrows the list to the most prominent tools so it is faster to browse.",
  },
];

export const metadata: Metadata = {
  title: "Popular Tools",
  description,
  alternates: {
    canonical: "/popular-tools",
  },
  openGraph: {
    title: "Popular Tools",
    description,
    url: "/popular-tools",
  },
};

function PopularToolsFallback() {
  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Browse popular categories
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "All",
                "PDF Tools",
                "Finance",
                "Tax",
                "Retirement",
                "Mortgage",
                "Health",
                "Education",
                "Zakat",
                "Image Tools",
                "Converters",
              ].map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Search by tool name
            </p>
            <div className="mt-3 h-[50px] w-full rounded-2xl border border-white/10 bg-slate-950/60" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PopularToolsPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Platform Discovery
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Popular tools across Dr.Utilio
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This discovery page brings the most useful Dr.Utilio tools into one
            filtered view. Start here when you want the strongest platform
            entry points before exploring the full tool library.
          </p>
        </div>

        <Suspense fallback={<PopularToolsFallback />}>
          <ToolsDirectoryClient
            calculators={popularCalculators}
            directoryCategories={toolDirectoryCategories}
          />
        </Suspense>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
