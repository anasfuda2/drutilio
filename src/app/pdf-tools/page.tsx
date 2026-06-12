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
  "Explore Dr.Utilio's PDF tools hub with browser-based conversion tools, PDF workflow guides, and a file size estimator.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "PDF Tools" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is currently available in Dr.Utilio's PDF tools hub?",
    answer:
      "The hub currently includes browser-based image-to-PDF tools, browser-based PDF merge and split tools, browser-based PDF-to-image tools, educational PDF workflow guides, and a lightweight file size estimator.",
  },
  {
    question: "Can Dr.Utilio process PDF uploads here yet?",
    answer:
      "Not yet for server-side PDF upload workflows. The current live tools focus on browser-based image-to-PDF conversion, browser-based PDF merge and split, browser-based PDF-to-image exports, and estimate-based planning.",
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
    title: "Image to PDF",
    description:
      "Convert multiple images into one downloadable PDF directly in your browser.",
    href: "/calculators/image-to-pdf",
  },
  {
    title: "JPG to PDF",
    description:
      "Combine JPG files into a single browser-generated PDF with local processing.",
    href: "/calculators/jpg-to-pdf",
  },
  {
    title: "PNG to PDF",
    description:
      "Combine PNG files into a single browser-generated PDF without a server upload.",
    href: "/calculators/png-to-pdf",
  },
  {
    title: "Merge PDF",
    description:
      "Upload multiple PDFs, reorder them, and merge them into one downloadable file locally in your browser.",
    href: "/calculators/merge-pdf",
  },
  {
    title: "Split PDF",
    description:
      "Upload one PDF, define page ranges, and export separate PDF files locally in your browser.",
    href: "/calculators/split-pdf",
  },
  {
    title: "Extract PDF Pages",
    description:
      "Keep only selected pages in one smaller downloadable PDF with local browser processing.",
    href: "/calculators/extract-pdf-pages",
  },
  {
    title: "Rotate PDF",
    description:
      "Rotate all pages or selected page ranges in one PDF directly in your browser.",
    href: "/calculators/rotate-pdf",
  },
  {
    title: "PDF to JPG",
    description:
      "Render selected PDF pages as downloadable JPG image files locally in your browser.",
    href: "/calculators/pdf-to-jpg",
  },
  {
    title: "PDF to PNG",
    description:
      "Render selected PDF pages as downloadable PNG image files locally in your browser.",
    href: "/calculators/pdf-to-png",
  },
  {
    title: "PDF Tools Category",
    description:
      "Browse the full PDF category directory with current and future PDF-focused tools.",
    href: "/pdf-tools/category",
  },
  {
    title: "Compress PDF",
    description:
      "Learn what usually affects PDF compression quality and file size.",
    href: "/pdf-compression-guide",
  },
  {
    title: "Merge PDF Guide",
    description:
      "Understand what matters when combining multiple PDFs into one file.",
    href: "/merge-pdf-guide",
  },
  {
    title: "Split PDF Guide",
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
    title: "JPG to PDF Guide",
    description:
      "Learn the practical tradeoffs behind JPEG-based PDF workflows.",
    href: "/jpg-to-pdf-guide",
  },
  {
    title: "PNG to PDF Guide",
    description:
      "Learn how PNG-heavy documents behave in PDF conversion workflows.",
    href: "/png-to-pdf-guide",
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
              future document utilities. It now includes browser-based image to
              PDF converters, browser-based PDF merge, split, extract, and
              rotation tools, browser-based PDF-to-image tools, educational
              workflow guides, and a file-size estimator.
            </p>
            <p>
              That makes it a useful place to understand what usually affects
              PDF size, merging, splitting, conversion quality, and image-based
              document workflows while also giving you a first set of real
              client-side file-conversion tools.
            </p>
            <p>
              If you want a clean directory view of the PDF cluster, start with{" "}
              <Link
                href="/pdf-tools/category"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                the PDF tools category page
              </Link>
              .
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
