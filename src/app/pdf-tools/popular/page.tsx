import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQSection, type FAQItem } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getCalculatorBySlug,
  type CalculatorItem,
} from "@/lib/calculators";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Browse the most useful Dr.Utilio PDF tools, including PDF compression, merge, split, extract, rotate, image-to-PDF, and PDF-to-image workflows.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "PDF Tools", href: "/pdf-tools" },
  { label: "Popular" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the Dr.Utilio Popular PDF Tools page for?",
    answer:
      "It brings the strongest PDF entry points into one page so you can move directly into compression, merge, split, extract, rotation, PDF-to-image, and image-to-PDF workflows.",
  },
  {
    question: "Are these PDF tools server-based?",
    answer:
      "No. The live PDF tools highlighted here use browser-side processing so files stay local to your device during the workflow.",
  },
  {
    question: "Does this page include both conversion and document-organization tools?",
    answer:
      "Yes. It includes browser-based conversion tools such as JPG to PDF and PDF to PNG, plus document organization tools such as Merge PDF, Split PDF, Extract PDF Pages, and Rotate PDF.",
  },
  {
    question: "Where should I go for the broader PDF cluster?",
    answer:
      "Use the main PDF Tools hub or the PDF Tools category page if you want guides, directory context, and the rest of the document workflow cluster.",
  },
];

const popularPdfToolSlugs = [
  "compress-pdf",
  "merge-pdf",
  "split-pdf",
  "extract-pdf-pages",
  "rotate-pdf",
  "pdf-to-jpg",
  "pdf-to-png",
  "jpg-to-pdf",
  "png-to-pdf",
  "image-to-pdf",
] as const;

const popularPdfTools = popularPdfToolSlugs
  .map((slug) => getCalculatorBySlug(slug))
  .filter((tool): tool is CalculatorItem => Boolean(tool));

export const metadata: Metadata = {
  title: "Popular PDF Tools",
  description,
  alternates: {
    canonical: "/pdf-tools/popular",
  },
  openGraph: {
    title: "Popular PDF Tools",
    description,
    url: "/pdf-tools/popular",
  },
};

export default function PopularPdfToolsPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            PDF Discovery
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Popular PDF tools
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              This page collects the most practical Dr.Utilio PDF workflows in
              one place so you can move quickly between compression, conversion,
              page extraction, page rotation, and PDF organization.
            </p>
            <p>
              If you want the broader document cluster, continue into{" "}
              <Link
                href="/pdf-tools"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                the PDF Tools hub
              </Link>{" "}
              or browse{" "}
              <Link
                href="/pdf-tools/category"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                the PDF Tools category
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              PDF tool collection
            </h2>
            <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-sm font-medium text-slate-300">
              {popularPdfTools.length} tools
            </span>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This collection blends file-size planning, document cleanup,
            multi-file organization, page extraction, and image conversion in a
            focused PDF discovery page.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularPdfTools.map((tool) => (
            <CalculatorCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              category="PDF Tools"
              href={`/calculators/${tool.slug}`}
              status={tool.status}
            />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Keep exploring
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "PDF Tools Hub",
                description:
                  "Browse the broader PDF cluster with guides, directories, and tool entry points.",
                href: "/pdf-tools",
              },
              {
                title: "PDF Tools Category",
                description:
                  "Use the category view to scan current and future PDF-focused tools.",
                href: "/pdf-tools/category",
              },
              {
                title: "Guides Directory",
                description:
                  "Jump into PDF workflow guides alongside tax, retirement, health, and other clusters.",
                href: "/guides",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
