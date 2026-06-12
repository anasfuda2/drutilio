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
  calculators,
  toolDirectoryCategories,
} from "@/lib/calculators";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

const description =
  `${siteConfig.name} tools directory brings together finance, tax, retirement, mortgage, health, education, zakat, PDF, and converter tools in one searchable place.`;

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Tools" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the Dr.Utilio Tools Directory?",
    answer:
      "The Tools Directory is a platform-wide view of the central Dr.Utilio tool registry, grouped into practical categories such as finance, tax, retirement, mortgage, health, education, zakat, PDF tools, and converters.",
  },
  {
    question: "Can I search across all Dr.Utilio tools here?",
    answer:
      "Yes. The page includes live search by tool name along with category filters so you can quickly narrow down the library.",
  },
  {
    question: "Does the directory include PDF and conversion tools too?",
    answer:
      "Yes. The directory includes browser-based PDF tools, browser-based image tools, and general converters alongside planning, education, and health tools.",
  },
  {
    question: "Are these tools interactive or just guide pages?",
    answer:
      "This directory is focused on registered interactive tools from the central calculator registry. Guide pages live in the separate guides and category hubs.",
  },
];

export const metadata: Metadata = {
  title: "Tools Directory",
  description,
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Dr.Utilio Tools Directory",
    description,
    url: "/tools",
  },
};

function ToolsDirectoryFallback() {
  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Browse by platform category
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "All",
                "Finance",
                "Tax",
                "Retirement",
                "Mortgage",
                "Health",
                "Education",
                "Zakat",
                "Image Tools",
                "PDF Tools",
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

        <p className="mt-6 text-sm leading-6 text-slate-300">
          Loading interactive tool filters.
        </p>
      </section>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Platform Directory
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Browse every Dr.Utilio tool in one place
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The Tools Directory pulls together the full registered Dr.Utilio
            tool library in a single searchable view. Use category filters and
            live search to move between finance, tax, retirement, mortgage,
            health, education, zakat, PDF, and converter workflows without
            hopping through multiple hubs first.
          </p>
        </div>

        <Suspense fallback={<ToolsDirectoryFallback />}>
          <ToolsDirectoryClient
            calculators={calculators}
            directoryCategories={toolDirectoryCategories}
          />
        </Suspense>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Popular Tools",
              description:
                "Open a curated view of Dr.Utilio's strongest tool entry points with category filters and live search.",
              href: "/popular-tools",
            },
            {
              title: "New Tools",
              description:
                "See the latest additions in registry-driven order so you can spot what was added most recently.",
              href: "/new-tools",
            },
            {
              title: "Image Tools",
              description:
                "Jump into browser-based resizing, compression, format conversion, cropping, and rotation workflows.",
              href: "/image-tools",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/70"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
