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
  "Browse all major Dr.Utilio categories including finance, tax, retirement, mortgage, health, education, PDF tools, zakat, and converters.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Categories" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of the Dr.Utilio categories page?",
    answer:
      "The categories page helps you navigate Dr.Utilio by topic so you can move quickly into the right hub, guide cluster, or tool directory.",
  },
  {
    question: "Does every category include calculators?",
    answer:
      "Most categories connect to calculators, guides, or both, depending on how the topic is currently developed on the platform.",
  },
  {
    question: "Where should I start if I only want tools?",
    answer:
      "The calculators directory and converters hub are the fastest starting points if you want tools before reading guides.",
  },
  {
    question: "Will Dr.Utilio add more categories later?",
    answer:
      "Yes. The page is designed as a central platform directory, so it can grow as new clusters and tool families are added.",
  },
];

type CategoryCard = {
  title: string;
  description: string;
  href: string;
};

const categories: CategoryCard[] = [
  {
    title: "Finance",
    description:
      "Explore loans, savings, interest, and financial-planning calculators in the main tool directory.",
    href: "/calculators?category=Finance",
  },
  {
    title: "Tax",
    description:
      "Browse the US tax hub with calculators, filing guides, and educational explainers.",
    href: "/tax",
  },
  {
    title: "Retirement",
    description:
      "Visit the retirement planning hub for calculators, IRA and 401(k) guides, and income-planning articles.",
    href: "/retirement",
  },
  {
    title: "Mortgage",
    description:
      "See home-buying, affordability, refinance, and closing-cost content in the mortgage hub.",
    href: "/mortgage",
  },
  {
    title: "Health",
    description:
      "Open the health hub for calorie, BMR, body-metric, hydration, and wellness planning tools.",
    href: "/health",
  },
  {
    title: "Education",
    description:
      "Find GPA, final-grade, and study-planning tools plus student-focused academic guides.",
    href: "/education",
  },
  {
    title: "PDF Tools",
    description:
      "Explore browser-based image-to-PDF tools, PDF workflow guides, and the growing document-tools area.",
    href: "/pdf-tools/category",
  },
  {
    title: "Zakat",
    description:
      "Browse the zakat hub with calculators and educational pages for savings, gold, investments, and nisab.",
    href: "/zakat",
  },
  {
    title: "Converters",
    description:
      "Open the converters hub for date, unit, age, and conversion-oriented utility tools.",
    href: "/converters",
  },
];

export const metadata: Metadata = {
  title: "Categories",
  description,
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "Categories",
    description,
    url: "/categories",
  },
};

export default function CategoriesPage() {
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
            Browse categories
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio organizes tools and educational content into topic hubs
              so it is easier to move from a broad category to the specific
              calculator or guide you actually need.
            </p>
            <p>
              Start with the category that best matches your question, then use
              the linked hubs and directories to go deeper.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/70"
            >
              <h2 className="text-xl font-semibold text-white transition group-hover:text-emerald-200">
                {category.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Popular Tools",
              description:
                "Go straight to the strongest discovery page for featured and popular tools across the platform.",
              href: "/popular-tools",
            },
            {
              title: "New Tools",
              description:
                "See the newest tool additions first using the live central registry order.",
              href: "/new-tools",
            },
            {
              title: "Popular PDF Tools",
              description:
                "Jump into the most useful PDF compression, merge, split, extract, rotate, and conversion tools.",
              href: "/pdf-tools/popular",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
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
