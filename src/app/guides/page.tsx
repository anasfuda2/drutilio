import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

const description =
  "Browse Dr.Utilio guides by topic, including tax, retirement, mortgage, health, education, PDF tools, and zakat.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Guides" },
];

type GuideCard = {
  title: string;
  description: string;
  href: string;
};

type GuideGroup = {
  title: string;
  intro: string;
  items: GuideCard[];
};

const guideGroups: GuideGroup[] = [
  {
    title: "Tax",
    intro: "US tax explainers and planning guides built around core filing concepts.",
    items: [
      { title: "Tax Hub", description: "Central landing page for the tax content cluster.", href: "/tax" },
      { title: "How to Calculate Federal Income Tax", description: "Understand bracket-based federal tax math in a simplified educational way.", href: "/how-to-calculate-federal-income-tax" },
      { title: "Federal Income Tax Brackets", description: "Learn how progressive brackets work and why top rate is not the same as total rate.", href: "/federal-income-tax-brackets" },
      { title: "Taxable Income vs. Gross Income", description: "See how gross income, deductions, and taxable income relate.", href: "/taxable-income-vs-gross-income" },
      { title: "Common Tax Filing Mistakes", description: "Review the mistakes that often create avoidable filing stress.", href: "/common-tax-filing-mistakes" },
      { title: "What Is Adjusted Gross Income", description: "Understand AGI and why it matters in planning and filing contexts.", href: "/what-is-adjusted-gross-income" },
      { title: "Tax Refund Calculator Guide", description: "Learn how refund estimates work and why withholding matters.", href: "/tax-refund-calculator-guide" },
      { title: "Self-Employment Tax Guide", description: "Understand the basics of self-employment tax for freelancers and business owners.", href: "/self-employment-tax-guide" },
    ],
  },
  {
    title: "Retirement",
    intro: "Retirement planning guides for saving, account choices, and income strategy.",
    items: [
      { title: "Retirement Hub", description: "Central landing page for retirement planning content and calculators.", href: "/retirement" },
      { title: "How Much Do I Need to Retire", description: "Explore the question of retirement targets with realistic planning context.", href: "/how-much-do-i-need-to-retire" },
      { title: "401(k) vs. IRA", description: "Compare the main differences between employer plans and IRAs.", href: "/401k-vs-ira" },
      { title: "Roth IRA vs. Traditional IRA", description: "Understand the tax-timing tradeoffs between Roth and traditional IRAs.", href: "/roth-ira-vs-traditional-ira" },
      { title: "Retirement Savings by Age", description: "See how age-based savings benchmarks can be used carefully.", href: "/retirement-savings-by-age" },
      { title: "Common Retirement Planning Mistakes", description: "Review the mistakes that often derail long-range planning.", href: "/common-retirement-planning-mistakes" },
      { title: "How Much Should I Save for Retirement", description: "Think through contribution levels in a more practical way.", href: "/how-much-should-i-save-for-retirement" },
      { title: "Retirement Income Planning", description: "Learn how withdrawals and other income sources work together.", href: "/retirement-income-planning" },
      { title: "Safe Withdrawal Rate Explained", description: "Understand what withdrawal-rate discussions are actually trying to estimate.", href: "/safe-withdrawal-rate-explained" },
    ],
  },
  {
    title: "Mortgage",
    intro: "Home-buying, affordability, refinance, and cash-to-close guidance.",
    items: [
      { title: "Mortgage Hub", description: "Central landing page for mortgage calculators and home-buying guides.", href: "/mortgage" },
      { title: "How Much House Can I Afford?", description: "Understand affordability beyond lender approval numbers.", href: "/how-much-house-can-i-afford" },
      { title: "Fixed vs. Adjustable Rate Mortgage", description: "Compare payment stability and future rate uncertainty.", href: "/fixed-vs-adjustable-rate-mortgage" },
      { title: "Mortgage Points Explained", description: "Learn how points can change rate structure and break-even timing.", href: "/mortgage-points-explained" },
      { title: "Mortgage Preapproval Guide", description: "Understand what preapproval means and what it does not mean.", href: "/mortgage-preapproval-guide" },
      { title: "Common Home Buying Mistakes", description: "Review the planning mistakes that create avoidable pressure.", href: "/common-home-buying-mistakes" },
      { title: "Down Payment Guide", description: "Think through down-payment tradeoffs and cash planning.", href: "/down-payment-guide" },
      { title: "Mortgage Closing Costs Explained", description: "See what cash to close often includes beyond the down payment.", href: "/mortgage-closing-costs-explained" },
      { title: "Refinance vs. New Mortgage", description: "Compare refinance planning with purchase-loan planning.", href: "/refinance-vs-new-mortgage" },
    ],
  },
  {
    title: "Health",
    intro: "Educational wellness guides around calories, BMR, body metrics, and healthy-weight context.",
    items: [
      { title: "Health Hub", description: "Central landing page for health calculators and wellness guides.", href: "/health" },
      { title: "How Many Calories Should I Eat?", description: "Learn how calorie estimates are usually built and applied.", href: "/how-many-calories-should-i-eat" },
      { title: "What Is BMR?", description: "Understand basal metabolic rate and how it differs from total daily needs.", href: "/what-is-bmr" },
      { title: "BMI vs. Body Fat Percentage", description: "Compare two common body-reference tools and their limits.", href: "/bmi-vs-body-fat-percentage" },
      { title: "Healthy Weight Guide", description: "Think through healthy weight with more nuance than one target number.", href: "/healthy-weight-guide" },
      { title: "Common Weight Loss Mistakes", description: "Review the planning mistakes that often create unrealistic expectations.", href: "/common-weight-loss-mistakes" },
    ],
  },
  {
    title: "Education",
    intro: "Academic planning guides for GPA math, finals, and study-time structure.",
    items: [
      { title: "Education Hub", description: "Central landing page for student-focused calculators and guides.", href: "/education" },
      { title: "How to Calculate GPA", description: "Learn how grade points and credit hours work together.", href: "/how-to-calculate-gpa" },
      { title: "Weighted vs. Unweighted GPA", description: "Understand how schools can frame GPA differently.", href: "/weighted-vs-unweighted-gpa" },
      { title: "How to Improve Your GPA", description: "Review practical educational strategies for GPA improvement.", href: "/how-to-improve-your-gpa" },
      { title: "College GPA Guide", description: "See how cumulative GPA and term averages fit together in college.", href: "/college-gpa-guide" },
      { title: "Final Grade Calculator Guide", description: "Learn how final-grade math helps set realistic course targets.", href: "/final-grade-calculator-guide" },
      { title: "Study Time Calculator Guide", description: "See how weekly study goals turn into a workable schedule.", href: "/study-time-calculator-guide" },
      { title: "Common Study Mistakes", description: "Review planning mistakes that often undermine academic progress.", href: "/common-study-mistakes" },
      { title: "How Many Hours Should I Study?", description: "Think through study-hour planning with more realism.", href: "/how-many-hours-should-i-study" },
    ],
  },
  {
    title: "PDF Tools",
    intro: "PDF workflow guides for compression, merging, splitting, conversion planning, and browser-based image-to-PDF tools.",
    items: [
      { title: "PDF Tools Hub", description: "Central landing page for Dr.Utilio's PDF tools foundation.", href: "/pdf-tools" },
      { title: "Merge PDF Tool", description: "Use the live browser-based Merge PDF tool to combine multiple PDFs locally.", href: "/calculators/merge-pdf" },
      { title: "Split PDF Tool", description: "Use the live browser-based Split PDF tool to export separate PDFs by page range.", href: "/calculators/split-pdf" },
      { title: "Extract PDF Pages Tool", description: "Create one smaller PDF containing only the selected page ranges you want to keep.", href: "/calculators/extract-pdf-pages" },
      { title: "Rotate PDF Tool", description: "Rotate all pages or selected page ranges locally in the browser.", href: "/calculators/rotate-pdf" },
      { title: "PDF to JPG Tool", description: "Render selected PDF pages into downloadable JPG files locally in the browser.", href: "/calculators/pdf-to-jpg" },
      { title: "PDF to PNG Tool", description: "Render selected PDF pages into downloadable PNG files locally in the browser.", href: "/calculators/pdf-to-png" },
      { title: "PDF Compression Guide", description: "Learn what usually affects compression quality and file size.", href: "/pdf-compression-guide" },
      { title: "Merge PDF Guide", description: "Understand what matters when combining multiple PDFs into one file.", href: "/merge-pdf-guide" },
      { title: "Split PDF Guide", description: "Review how splitting a document into smaller parts usually works.", href: "/split-pdf-guide" },
      { title: "PDF to Word Guide", description: "Learn what affects editability and layout quality in PDF-to-Word workflows.", href: "/pdf-to-word-guide" },
      { title: "Image to PDF Guide", description: "See what matters when turning images or scans into one PDF document.", href: "/image-to-pdf-guide" },
      { title: "JPG to PDF Guide", description: "Understand browser-based JPG to PDF workflows and the tradeoffs behind them.", href: "/jpg-to-pdf-guide" },
      { title: "PNG to PDF Guide", description: "Understand browser-based PNG to PDF workflows and why file size can vary.", href: "/png-to-pdf-guide" },
    ],
  },
  {
    title: "Zakat",
    intro: "Zakat basics, asset-specific guides, and educational Islamic finance content.",
    items: [
      { title: "Zakat Hub", description: "Central landing page for the zakat content cluster.", href: "/zakat" },
      { title: "How to Calculate Zakat", description: "Step-by-step educational guide to zakat calculation.", href: "/how-to-calculate-zakat" },
      { title: "Zakat on Gold and Silver", description: "Learn how gold, silver, jewelry, and nisab are commonly discussed.", href: "/zakat-on-gold-and-silver" },
      { title: "Zakat on Retirement Accounts", description: "Review common scholarly approaches to retirement-account treatment.", href: "/zakat-on-retirement-accounts" },
      { title: "Zakat on Business Assets", description: "Explore inventory, receivables, business cash, and liabilities.", href: "/zakat-on-business-assets" },
      { title: "Zakat on Stocks and ETFs", description: "Compare long-term and trading-oriented approaches to investments.", href: "/zakat-on-stocks-and-etfs" },
      { title: "What Is Nisab?", description: "Understand nisab thresholds and why they can vary with market value.", href: "/what-is-nisab" },
      { title: "Common Zakat Mistakes", description: "Review the mistakes that often distort zakat calculations.", href: "/common-zakat-mistakes" },
      { title: "Zakat Calculator USA", description: "US-focused zakat guide with USD examples and local-context framing.", href: "/zakat-calculator-usa" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Guides",
  description,
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Guides",
    description,
    url: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Guide Directory
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Browse guides
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio&apos;s guides page groups educational content by topic so
              you can move through the platform by subject instead of by tool
              type.
            </p>
            <p>
              Start with the topic that best matches your question, then move
              from hub pages into the deeper guides within each cluster.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {guideGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {group.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {group.intro}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
                  >
                    <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-200">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
