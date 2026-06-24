import type { Metadata } from "next";
import Link from "next/link";
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
  "Explore Dr.Utilio's converters hub for date, unit, age, and future file and format conversion tools.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Converters" },
];

const faqItems: FAQItem[] = [
  {
    question: "What kinds of tools belong in the converters hub?",
    answer:
      "The converters hub is the home for date, unit, age, and other conversion-oriented utility tools, with room to grow into file and format conversion later.",
  },
  {
    question: "Does the converters hub include only classic unit conversion?",
    answer:
      "No. It also includes date and calendar conversion tools because users often think of those as conversion tasks too.",
  },
  {
    question: "Are these tools exact for every official use case?",
    answer:
      "Not always. Some tools, especially calendar-related ones, are educational estimates and should be verified when exact official use matters.",
  },
  {
    question: "Will more converters be added later?",
    answer:
      "Yes. This page is positioned as the future home for broader conversion tools across the platform.",
  },
];

type ConverterCard = {
  title: string;
  description: string;
  href: string;
};

const converterCards: ConverterCard[] = [
  {
    title: "Hijri Date Converter",
    description:
      "Convert Gregorian dates to approximate Hijri dates and Hijri dates to approximate Gregorian dates.",
    href: "/calculators/hijri-date-converter",
  },
  {
    title: "Hijri to Gregorian",
    description:
      "Read the dedicated Hijri-to-Gregorian conversion page with educational context around date variation.",
    href: "/hijri-to-gregorian",
  },
  {
    title: "Gregorian to Hijri",
    description:
      "Read the dedicated Gregorian-to-Hijri conversion page with educational context around date variation.",
    href: "/gregorian-to-hijri",
  },
  {
    title: "Unit Converter",
    description:
      "Convert common length, weight, and temperature units in one place.",
    href: "/calculators/unit-converter",
  },
  {
    title: "Age Calculator",
    description:
      "Measure age across dates in years, months, days, and total day count.",
    href: "/calculators/age-calculator",
  },
  {
    title: "Date Difference Calculator",
    description:
      "Compare two dates in days, weeks, and calendar-style time spans.",
    href: "/calculators/date-difference-calculator",
  },
];

export const metadata: Metadata = {
  title: "Converters",
  description,
  alternates: {
    canonical: "/converters",
  },
  openGraph: {
    title: "Converters",
    description,
    url: "/converters",
  },
};

export default function ConvertersPage() {
  const converterToolItems = getCalculatorsByDirectoryCategory("Converters").map(
    (tool) => ({
      href: `/calculators/${tool.slug}`,
      label: tool.title,
    }),
  );

  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Converter Tools
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Converters hub
          </h1>
          <ToolNavigationBar
            title="Converter tools"
            items={converterToolItems}
          />
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio&apos;s converters hub brings together practical tools for
              date, unit, and general conversion tasks. It is also the planned
              home for future file, format, and utility-style conversion tools
              as the platform grows.
            </p>
            <p>
              Some conversion tools are strict arithmetic utilities, while
              others are educational estimates with real-world variation. The
              linked pages call out those limits where they matter.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {converterCards.map((item) => (
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
