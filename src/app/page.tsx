import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { HomeToolSearchClient } from "@/components/home/HomeToolSearchClient";
import { Container } from "@/components/layout/Container";
import {
  calculators,
  getCalculatorBySlug,
  newestCalculators,
  toolDirectoryCategories,
  type CalculatorItem,
} from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

const popularToolSlugs = [
  "merge-pdf",
  "split-pdf",
  "compress-pdf",
  "jpg-to-pdf",
  "pdf-to-jpg",
  "image-compressor",
  "mortgage-calculator",
  "zakat-calculator",
  "federal-income-tax-calculator",
] as const;

const popularPdfToolSlugs = [
  "compress-pdf",
  "merge-pdf",
  "split-pdf",
  "extract-pdf-pages",
  "rotate-pdf",
  "pdf-to-jpg",
  "pdf-to-png",
  "jpg-to-pdf",
] as const;

const heroQuickLinks = [
  { label: "Merge PDF", href: "/calculators/merge-pdf" },
  { label: "Compress PDF", href: "/calculators/compress-pdf" },
  { label: "Image Compressor", href: "/calculators/image-compressor" },
  { label: "Mortgage Calculator", href: "/calculators/mortgage-calculator" },
  { label: "Zakat Calculator", href: "/calculators/zakat-calculator" },
  { label: "Tax Calculator", href: "/calculators/federal-income-tax-calculator" },
];

const categoryCards = [
  {
    title: "PDF Tools",
    description:
      "Merge, split, extract, rotate, compress, and convert PDFs directly in your browser.",
    href: "/pdf-tools",
  },
  {
    title: "Image Tools",
    description:
      "Resize, compress, crop, rotate, and convert images with browser-based utilities.",
    href: "/image-tools",
  },
  {
    title: "Finance",
    description:
      "Explore loans, savings, interest, and everyday money-planning calculators.",
    href: "/calculators?category=Finance",
  },
  {
    title: "Tax",
    description:
      "Browse US tax calculators, filing explainers, and refund-planning guides.",
    href: "/tax",
  },
  {
    title: "Retirement",
    description:
      "Move into retirement planning calculators, IRA guides, and income strategy content.",
    href: "/retirement",
  },
  {
    title: "Mortgage",
    description:
      "Open mortgage calculators and home-buying guides for affordability, refinance, and closing costs.",
    href: "/mortgage",
  },
  {
    title: "Health",
    description:
      "See calorie, BMR, hydration, body-metric, and healthy-weight tools.",
    href: "/health",
  },
  {
    title: "Education",
    description:
      "Find GPA, final-grade, and study-planning tools plus academic guides.",
    href: "/education",
  },
  {
    title: "Zakat",
    description:
      "Browse zakat tools and guides for nisab, retirement accounts, metals, and business assets.",
    href: "/zakat",
  },
  {
    title: "Converters",
    description:
      "Use date, age, unit, and everyday conversion tools from a focused hub.",
    href: "/converters",
  },
];

const featuredHubs = [
  {
    title: "PDF Tools",
    description:
      "The strongest live browser-side document workflows, plus the guides that explain the tradeoffs.",
    href: "/pdf-tools",
  },
  {
    title: "Image Tools",
    description:
      "A new browser-based image utility cluster for resizing, compression, conversion, cropping, and rotation.",
    href: "/image-tools",
  },
  {
    title: "Tax",
    description:
      "US-focused calculators and explainers for brackets, AGI, refund planning, and self-employment tax.",
    href: "/tax",
  },
  {
    title: "Retirement",
    description:
      "Retirement calculators, account-comparison guides, and income-planning explainers in one cluster.",
    href: "/retirement",
  },
  {
    title: "Health",
    description:
      "Educational wellness tools and guides for calories, BMR, body metrics, and healthy-weight context.",
    href: "/health",
  },
  {
    title: "Education",
    description:
      "Student-focused tools and guides for GPA, final-grade planning, and weekly study structure.",
    href: "/education",
  },
  {
    title: "Zakat",
    description:
      "A growing zakat content hub anchored by calculators, nisab explainers, and asset-specific guides.",
    href: "/zakat",
  },
];

const latestGuides = [
  {
    title: "Zakat on Gold and Silver",
    description:
      "Learn how jewelry, bullion, coins, silver value, and nisab are commonly discussed.",
    href: "/zakat-on-gold-and-silver",
  },
  {
    title: "Zakat on Retirement Accounts",
    description:
      "Review common scholarly approaches to 401(k), IRA, RRSP, and pension treatment.",
    href: "/zakat-on-retirement-accounts",
  },
  {
    title: "How to Calculate Federal Income Tax",
    description:
      "Understand simplified bracket-based tax math in a cleaner step-by-step guide.",
    href: "/how-to-calculate-federal-income-tax",
  },
  {
    title: "Safe Withdrawal Rate Explained",
    description:
      "Get a calmer explanation of what withdrawal-rate discussions are actually estimating.",
    href: "/safe-withdrawal-rate-explained",
  },
  {
    title: "Mortgage Closing Costs Explained",
    description:
      "See what cash-to-close usually includes beyond the down payment.",
    href: "/mortgage-closing-costs-explained",
  },
  {
    title: "What Is BMR?",
    description:
      "Understand basal metabolic rate and how it differs from daily calorie needs.",
    href: "/what-is-bmr",
  },
  {
    title: "How to Improve Your GPA",
    description:
      "Review practical study and planning strategies for GPA improvement.",
    href: "/how-to-improve-your-gpa",
  },
  {
    title: "PDF Compression Guide",
    description:
      "See what usually affects PDF file size and why compression is a quality tradeoff.",
    href: "/pdf-compression-guide",
  },
];

const internalLinkCards = [
  {
    title: "All Tools",
    description:
      "Browse the full registry with category filters and live search across the whole platform.",
    href: "/tools",
  },
  {
    title: "Popular Tools",
    description:
      "Start with the strongest platform entry points when you want quick wins.",
    href: "/popular-tools",
  },
  {
    title: "New Tools",
    description:
      "See the latest registry additions in newest-first order.",
    href: "/new-tools",
  },
  {
    title: "Categories",
    description:
      "Navigate Dr.Utilio by category when you know the general area but not the exact tool.",
    href: "/categories",
  },
  {
    title: "Guides",
    description:
      "Move through educational content hubs and guide clusters across every major topic.",
    href: "/guides",
  },
  {
    title: "Popular PDF Tools",
    description:
      "Jump straight into the strongest PDF workflows from compression to page extraction.",
    href: "/pdf-tools/popular",
  },
];

function mustTool(slug: string): CalculatorItem {
  const tool = getCalculatorBySlug(slug);

  if (!tool) {
    throw new Error(`Missing calculator registry entry for slug: ${slug}`);
  }

  return tool;
}

const popularTools = popularToolSlugs.map((slug) => mustTool(slug));
const popularPdfTools = popularPdfToolSlugs.map((slug) => mustTool(slug));
const newestHomeTools = newestCalculators.slice(0, 8);

export const metadata: Metadata = {
  title: "Dr.Utilio | Smart Online Tools & Calculators",
  description:
    "Discover Dr.Utilio's growing platform of browser-based PDF tools, image tools, finance calculators, tax tools, retirement tools, health tools, education tools, and everyday converters.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr.Utilio | Smart Online Tools & Calculators",
    description:
      "Explore popular tools, category hubs, guides, PDF workflows, image utilities, and new additions across the Dr.Utilio platform.",
    url: "/",
  },
};

function LinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/70"
    >
      <h3 className="text-xl font-semibold text-white transition group-hover:text-emerald-200">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(15,23,42,1))]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                {siteConfig.subtitle}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover tools, calculators, converters, and content hubs across the full Dr.Utilio platform.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Dr.Utilio has grown into a broader platform for browser-based
                PDF workflows, image utilities, financial planning,
                tax-focused tools, retirement calculators, health references,
                education helpers, and everyday converters.
              </p>

              <HomeToolSearchClient />

              <div className="mt-6 flex flex-wrap gap-3">
                {heroQuickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/30 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  label: "Tool count",
                  value: `${calculators.length} interactive tools`,
                },
                {
                  label: "Category count",
                  value: `${toolDirectoryCategories.length} discovery categories`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Popular Tools
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Start with the tools people are most likely to need first.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This set mixes real browser-side file workflows with strong
                financial utilities so the homepage feels useful immediately.
              </p>
            </div>

            <Link
              href="/popular-tools"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Browse popular tools
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {popularTools.map((tool) => (
              <CalculatorCard
                key={tool.slug}
                title={tool.title}
                description={tool.description}
                category={tool.category === "Everyday Tools" ? "Utility" : tool.category}
                href={`/calculators/${tool.slug}`}
                status={tool.status}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Browse the platform by category instead of guessing where to begin.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Each category acts as a cleaner starting point for a different
              kind of job, whether you need a PDF utility, a retirement
              calculator, a tax explainer, or a quick image conversion.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categoryCards.map((category) => (
              <LinkCard key={category.href} {...category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Featured Hubs
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Follow the strongest content and calculator clusters.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                These hubs tie together tools, guides, and internal links so
                each topic feels like a real working section of the platform.
              </p>
            </div>

            <Link
              href="/categories"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Browse all categories
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredHubs.map((hub) => (
              <LinkCard key={hub.href} {...hub} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                New Tools
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Recently added tools from the live registry.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This section follows the registry order so the newest additions
                surface first without needing a separate editorial list.
              </p>
            </div>

            <Link
              href="/new-tools"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              See all new tools
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {newestHomeTools.map((tool) => (
              <CalculatorCard
                key={tool.slug}
                title={tool.title}
                description={tool.description}
                category={tool.category === "Everyday Tools" ? "Utility" : tool.category}
                href={`/calculators/${tool.slug}`}
                status={tool.status}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Guides
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Move from tools into deeper explainers and content hubs.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                These guide links give the homepage stronger internal linking and
                help users land in the right educational cluster when they need
                context, not just a calculator.
              </p>
            </div>

            <Link
              href="/guides"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Browse all guides
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {latestGuides.map((guide) => (
              <LinkCard key={guide.href} {...guide} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Popular PDF Tools
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                The strongest live PDF workflows in one place.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                PDF is one of the platform&apos;s most mature browser-side
                clusters now, so it deserves its own discovery lane on the
                homepage.
              </p>
            </div>

            <Link
              href="/pdf-tools/popular"
              className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Open popular PDF tools
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
        </Container>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Internal Links
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Quick paths into the rest of the platform.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              These entry points connect the homepage to the strongest
              directories, category surfaces, and cluster pages across Dr.Utilio.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {internalLinkCards.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
