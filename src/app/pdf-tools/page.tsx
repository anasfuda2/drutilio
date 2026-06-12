import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQSection, type FAQItem } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Explore Dr.Utilio's PDF tools hub with educational PDF guides and a file size estimator for future document workflows.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "PDF Tools" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is currently available in Dr.Utilio's PDF tools hub?",
    answer:
      "The hub currently includes educational PDF workflow guides and a lightweight file size estimator, with room for future document utilities.",
  },
  {
    question: "Can Dr.Utilio process PDF uploads here yet?",
    answer:
      "No. This cluster is educational and estimate-based for now. Server-side file processing is not implemented on these routes yet.",
  },
  {
    question: "What is the PDF File Size Estimator for?",
    answer:
      "It helps you think through rough PDF size outcomes before export or upload, especially for image-heavy documents.",
  },
  {
    question: "Will more PDF tools be added later?",
    answer:
      "Yes. This hub is designed as the foundation for future PDF workflows and document utilities.",
  },
];

type PdfCard = {
  title: string;
  description: string;
  href: string;
};

const pdfCards: PdfCard[] = [
  {
    title: "Compress PDF",
    description:
      "Learn what usually affects PDF compression quality and file size.",
    href: "/pdf-compression-guide",
  },
  {
    title: "Merge PDF",
    description:
      "Understand what matters when combining multiple PDFs into one file.",
    href: "/merge-pdf-guide",
  },
  {
    title: "Split PDF",
    description:
      "Review how splitting large documents into smaller parts usually works.",
    href: "/split-pdf-guide",
  },
  {
    title: "PDF to Word",
    description:
      "Learn what affects editability and layout quality in PDF-to-Word workflows.",
    href: "/pdf-to-word-guide",
  },
  {
    title: "Image to PDF",
    description:
      "See what matters when turning images or scans into one PDF document.",
    href: "/image-to-pdf-guide",
  },
  {
    title: "PDF File Size Estimator",
    description:
      "Estimate approximate PDF size from pages, image density, and document style assumptions.",
    href: "/calculators/pdf-file-size-estimator",
  },
];

export const metadata: Metadata = {
  title: "PDF Tools",
  description,
  alternates: {
    canonical: "/pdf-tools",
  },
  openGraph: {
    title: "PDF Tools",
    description,
    url: "/pdf-tools",
  },
};

export default function PdfToolsPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            PDF Tools
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            PDF tools hub
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio&apos;s PDF tools hub is the foundation for current and
              future document utilities. Right now it focuses on educational
              workflow guides and a file-size estimator rather than live upload
              processing.
            </p>
            <p>
              That makes it a useful place to understand what usually affects
              PDF size, merging, splitting, conversion quality, and image-based
              document workflows before reaching for a specific tool.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pdfCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/70"
            >
              <h2 className="text-xl font-semibold text-white transition group-hover:text-emerald-200">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
