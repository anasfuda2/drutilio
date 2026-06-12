import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

const description =
  "Browse the PDF Tools category on Dr.Utilio, including browser-based conversion tools, PDF guides, and the PDF size estimator.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "PDF Tools", href: "/pdf-tools" },
  { label: "Category" },
];

type PdfCategoryCard = {
  title: string;
  description: string;
  href: string;
};

const pdfCategoryCards: PdfCategoryCard[] = [
  {
    title: "Compress PDF",
    description:
      "Create a lighter browser-generated PDF when practical using local compression settings.",
    href: "/calculators/compress-pdf",
  },
  {
    title: "Image to PDF",
    description:
      "Convert multiple uploaded images into a downloadable PDF locally in your browser.",
    href: "/calculators/image-to-pdf",
  },
  {
    title: "JPG to PDF",
    description:
      "Turn one or more JPG files into a browser-generated PDF with local processing.",
    href: "/calculators/jpg-to-pdf",
  },
  {
    title: "PNG to PDF",
    description:
      "Turn one or more PNG files into a browser-generated PDF without a server upload.",
    href: "/calculators/png-to-pdf",
  },
  {
    title: "Merge PDF",
    description:
      "Upload multiple PDFs, arrange the order, and merge them into one browser-generated PDF.",
    href: "/calculators/merge-pdf",
  },
  {
    title: "Split PDF",
    description:
      "Upload one PDF, define page ranges, and export separate PDF files locally in the browser.",
    href: "/calculators/split-pdf",
  },
  {
    title: "Extract PDF Pages",
    description:
      "Create one smaller PDF using only the selected pages you want to keep.",
    href: "/calculators/extract-pdf-pages",
  },
  {
    title: "Rotate PDF",
    description:
      "Rotate all pages or chosen page ranges directly in your browser.",
    href: "/calculators/rotate-pdf",
  },
  {
    title: "PDF to JPG",
    description:
      "Render selected PDF pages as downloadable JPG image files in your browser.",
    href: "/calculators/pdf-to-jpg",
  },
  {
    title: "PDF to PNG",
    description:
      "Render selected PDF pages as downloadable PNG image files in your browser.",
    href: "/calculators/pdf-to-png",
  },
  {
    title: "PDF Compression Guide",
    description:
      "Understand what affects compression quality and why file size usually involves tradeoffs.",
    href: "/pdf-compression-guide",
  },
  {
    title: "Merge PDF Guide",
    description:
      "Review the page-order and file-size considerations behind combining PDFs.",
    href: "/merge-pdf-guide",
  },
  {
    title: "Split PDF Guide",
    description:
      "Explore how splitting documents into smaller parts usually works in practice.",
    href: "/split-pdf-guide",
  },
  {
    title: "PDF to Word",
    description:
      "See what usually affects editability and formatting quality during conversion.",
    href: "/pdf-to-word-guide",
  },
  {
    title: "Image to PDF Guide",
    description:
      "Learn what matters when turning photos or scans into a PDF workflow.",
    href: "/image-to-pdf-guide",
  },
  {
    title: "JPG to PDF Guide",
    description:
      "Review quality, file-size, and workflow considerations for JPG-based PDF conversion.",
    href: "/jpg-to-pdf-guide",
  },
  {
    title: "PNG to PDF Guide",
    description:
      "Review sharpness, file-size, and transparency considerations for PNG-based PDF conversion.",
    href: "/png-to-pdf-guide",
  },
  {
    title: "PDF Size Estimator",
    description:
      "Estimate approximate PDF size from page count, image density, and document style assumptions.",
    href: "/calculators/pdf-file-size-estimator",
  },
];

export const metadata: Metadata = {
  title: "PDF Tools Category",
  description,
  alternates: {
    canonical: "/pdf-tools/category",
  },
  openGraph: {
    title: "PDF Tools Category",
    description,
    url: "/pdf-tools/category",
  },
};

export default function PdfToolsCategoryPage() {
  return (
    <section className="py-16 sm:py-20">
      <AnalyticsTracker
        type="category-visit"
        category="PDF Tools"
        path="/pdf-tools/category"
        section="category-directory"
      />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            PDF Tools Category
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Browse PDF tools
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              This category page collects Dr.Utilio&apos;s PDF-focused guides and
              utility tools into one place so the document workflow cluster is
              easier to browse.
            </p>
            <p>
              The current section now includes a browser-based PDF compressor,
              client-side image-conversion tools, browser-based PDF merge,
              split, extract, and rotation tools, browser-based PDF-to-image
              exports, plus educational PDF guides. It does not perform
              server-side PDF upload processing yet.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pdfCategoryCards.map((item) => (
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
      </Container>
    </section>
  );
}
