import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { PopularToolsStrip } from "@/components/calculators/PopularToolsStrip";
import { Container } from "@/components/layout/Container";
import { ToolNavigationBar } from "@/components/navigation/ToolNavigationBar";
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
import { getCalculatorsByDirectoryCategory } from "@/lib/calculators";

const description =
  "Explore Dr.Utilio's browser-based Image Tools hub with resizing, compression, format conversion, cropping, and rotation tools.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Image Tools" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the Dr.Utilio Image Tools hub?",
    answer:
      "The Image Tools hub brings together browser-based utilities for resizing, compressing, converting, cropping, and rotating images without uploading them to a server.",
  },
  {
    question: "Do these image tools upload files to a server?",
    answer:
      "No. The tools in this cluster process images locally in your browser so files stay on your device during the workflow.",
  },
  {
    question: "Are these tools meant for everyday tasks or professional editing?",
    answer:
      "They are practical browser-based utilities for everyday image handling. They are not meant to replace full professional design software.",
  },
  {
    question: "Will more image tools be added later?",
    answer:
      "Yes. This hub is intended as the foundation for a broader browser-based image utility cluster on Dr.Utilio.",
  },
];

const imageToolCards = [
  {
    title: "Image Resizer",
    description:
      "Resize one image by fitting it within custom maximum dimensions.",
    href: "/calculators/image-resizer",
  },
  {
    title: "Image Compressor",
    description:
      "Create a lighter image using adjustable compression levels and export formats.",
    href: "/calculators/image-compressor",
  },
  {
    title: "JPG to PNG",
    description:
      "Convert a JPG or JPEG image into PNG format directly in your browser.",
    href: "/calculators/jpg-to-png",
  },
  {
    title: "PNG to JPG",
    description:
      "Convert a PNG image into JPG format with a white background where needed.",
    href: "/calculators/png-to-jpg",
  },
  {
    title: "WebP Converter",
    description:
      "Convert JPG, PNG, or WebP images into another common format.",
    href: "/calculators/webp-converter",
  },
  {
    title: "Crop Image",
    description:
      "Crop an image with custom pixel bounds and download the trimmed result.",
    href: "/calculators/crop-image",
  },
  {
    title: "Rotate Image",
    description:
      "Rotate an image by 90, 180, or 270 degrees and export the corrected result.",
    href: "/calculators/rotate-image",
  },
];

export const metadata: Metadata = {
  title: "Image Tools",
  description,
  alternates: {
    canonical: "/image-tools",
  },
  openGraph: {
    title: "Image Tools",
    description,
    url: "/image-tools",
  },
};

export default function ImageToolsPage() {
  const imageToolItems = getCalculatorsByDirectoryCategory("Image Tools").map(
    (tool) => ({
      href: `/calculators/${tool.slug}`,
      label: tool.title,
    }),
  );

  return (
    <section className="py-16 sm:py-20">
      <AnalyticsTracker
        type="category-visit"
        category="Image Tools"
        path="/image-tools"
      />
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Image Tools
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Browser-based image tools
          </h1>
          <ToolNavigationBar title="Image tools" items={imageToolItems} />
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio&apos;s Image Tools hub is the home for browser-based
              image utilities that help with everyday resizing, compression,
              format conversion, cropping, and rotation.
            </p>
            <p>
              Every workflow in this cluster is designed to stay local to your
              browser, which makes it a practical way to handle quick image
              tasks without a server upload step.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <PopularToolsStrip
            title="Popular Image Tools"
            slugs={[
              "image-compressor",
              "image-resizer",
              "crop-image",
              "rotate-image",
              "jpg-to-png",
              "png-to-jpg",
            ]}
            href="/tools?category=Image%20Tools"
            hrefLabel="Browse image tools"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {imageToolCards.map((item) => (
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
