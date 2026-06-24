import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ToolNavigationBar } from "@/components/navigation/ToolNavigationBar";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";
import { getCalculatorsByDirectoryCategory } from "@/lib/calculators";

const description =
  "Explore Drutilio's US tax hub with guides on federal income tax, tax brackets, AGI, refund planning, filing mistakes, and self-employment tax.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Tax" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Drutilio's tax hub?",
    answer:
      "The tax hub brings Drutilio's US tax guides into one place so readers can move from core concepts like taxable income and brackets to practical issues like refunds, filing mistakes, and self-employment tax.",
  },
  {
    question: "Is this tax hub professional tax advice?",
    answer:
      "No. It is educational content designed to help readers understand terminology, process, and planning concepts before seeking tax advice where appropriate.",
  },
  {
    question: "Where should I start if I am new to taxes?",
    answer:
      "A strong starting sequence is how to calculate federal income tax, taxable income vs. gross income, and federal income tax brackets.",
  },
  {
    question: "Which pages are most useful for refund confusion?",
    answer:
      "The tax refund calculator guide and common tax filing mistakes are the best starting points if your main question is why you owed money or received a different refund than expected.",
  },
  {
    question: "Which page matters most for freelancers and contractors?",
    answer:
      "The self-employment tax guide is especially important because side-gig and freelance income often adds a separate tax layer beyond ordinary federal income tax.",
  },
];

type TaxCard = {
  title: string;
  description: string;
  href: string;
};

const basicsCards: TaxCard[] = [
  {
    title: "How to Calculate Federal Income Tax",
    description:
      "A step-by-step look at moving from income to taxable income, brackets, credits, withholding, and year-end results.",
    href: "/how-to-calculate-federal-income-tax",
  },
  {
    title: "Federal Income Tax Brackets",
    description:
      "Understand marginal rates, effective rates, and why a higher bracket does not tax all income at one rate.",
    href: "/federal-income-tax-brackets",
  },
  {
    title: "Taxable Income vs. Gross Income",
    description:
      "See how gross income, AGI, and taxable income fit together inside a real tax-return framework.",
    href: "/taxable-income-vs-gross-income",
  },
  {
    title: "What Is Adjusted Gross Income?",
    description:
      "Learn why AGI appears so often in software, credit rules, and tax planning conversations.",
    href: "/what-is-adjusted-gross-income",
  },
];

const calculatorCards: TaxCard[] = [
  {
    title: "Federal Income Tax Calculator",
    description:
      "Estimate taxable income, simplified federal tax, marginal rate, and effective rate using a standard-deduction model.",
    href: "/calculators/federal-income-tax-calculator",
  },
  {
    title: "Self-Employment Tax Calculator",
    description:
      "Estimate self-employment tax on net business income for freelancers, contractors, and side-gig earners.",
    href: "/calculators/self-employment-tax-calculator",
  },
  {
    title: "Tax Refund Estimator",
    description:
      "Compare simplified estimated federal tax against withholding to see whether you may be headed toward a refund or amount due.",
    href: "/calculators/tax-refund-estimator",
  },
];

const troubleshootingCards: TaxCard[] = [
  {
    title: "Common Tax Filing Mistakes",
    description:
      "Review the errors people make with income reporting, bracket assumptions, withholding, credits, and software prompts.",
    href: "/common-tax-filing-mistakes",
  },
  {
    title: "Tax Refund Calculator Guide",
    description:
      "Understand how refund estimates work and why refund size often says more about withholding than about tax efficiency.",
    href: "/tax-refund-calculator-guide",
  },
  {
    title: "Self-Employment Tax Guide",
    description:
      "Get the basics on freelance, gig, and contractor taxes, including why self-employment tax catches new earners off guard.",
    href: "/self-employment-tax-guide",
  },
];

function TaxCardGrid({ cards }: { cards: TaxCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
        >
          <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-200">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {card.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "US Tax Guide Hub",
  description,
  alternates: {
    canonical: "/tax",
  },
  openGraph: {
    title: "US Tax Guide Hub",
    description,
    url: "/tax",
  },
};

export default function TaxHubPage() {
  const taxToolItems = getCalculatorsByDirectoryCategory("Tax").map((tool) => ({
    href: `/calculators/${tool.slug}`,
    label: tool.title,
  }));

  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Taxes and Money
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tax hub
          </h1>
          <ToolNavigationBar title="Tax tools" items={taxToolItems} />
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Drutilio&apos;s tax hub is built to make US tax concepts easier to
              follow without pretending that tax law becomes simple just because
              a page is readable. Most people do not get stuck because they are
              unable to understand taxes in principle. They get stuck because a
              handful of core terms keep sliding past each other: gross income,
              AGI, taxable income, tax brackets, withholding, refunds, and
              self-employment tax. Once those ideas are separated and linked
              back together in the right order, the system becomes much more
              manageable.
            </p>
            <p>
              This hub is educational only and does not provide tax advice. Its
              purpose is to help you build a working mental model before you use
              software, review a return, compare a paycheck estimate, or decide
              whether you need professional help. It is especially useful for US
              readers who want a calmer, more structured way to approach common
              tax questions without starting from technical IRS language.
            </p>
            <p>
              We also connect the tax cluster to a few practical calculators
              already available on Drutilio. The{" "}
              <Link
                href="/calculators/percentage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                percentage calculator
              </Link>{" "}
              helps with quick tax-rate thought experiments. The{" "}
              <Link
                href="/calculators/savings-goal-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                savings goal calculator
              </Link>{" "}
              can help if you are adjusting withholding and want to plan around
              the cash difference. And the{" "}
              <Link
                href="/calculators/compound-interest-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                compound interest calculator
              </Link>{" "}
              can help when you are thinking about longer-term reserve habits
              rather than one filing season alone.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Tax calculators
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                If you want to move from concepts into rough numbers, start
                here. These calculators are built for educational planning and
                quick scenario checks. They work best when you use them
                alongside the article cluster, especially if you want to
                understand why a number changed rather than just see the number
                itself.
              </p>
              <p>
                The federal income tax calculator helps with bracket-based
                estimates, the self-employment tax calculator helps freelancers
                and contractors understand a separate tax layer, and the refund
                estimator helps translate withholding into a likely year-end
                direction.
              </p>
            </div>
            <div className="mt-6">
              <TaxCardGrid cards={calculatorCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Start with the basics
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                The best way into the cluster is usually to begin with the
                sequence of broad concepts rather than jumping straight to a
                refund or bracket headline. If you understand how federal income
                tax is built, what taxable income means, how AGI fits into the
                story, and how brackets apply only to slices of income, the rest
                of the year-end conversation becomes more legible very quickly.
              </p>
              <p>
                These foundation pages are designed to work together. One page
                gives you the overall roadmap. Another explains the income
                terminology. Another focuses on bracket logic. The result is not
                just more knowledge. It is less panic when you see a number you
                do not immediately recognize.
              </p>
            </div>
            <div className="mt-6">
              <TaxCardGrid cards={basicsCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Troubleshooting and year-end questions
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Once the basics are clear, most readers start caring about more
                practical questions. Why did my refund change? Why did I owe
                this year? Why does freelance income feel different? Why does
                software keep asking about AGI or self-employment details? These
                are not fringe questions. They are the ones that usually make
                tax season feel personal.
              </p>
              <p>
                That is why the second half of the cluster focuses on trouble
                spots: filing mistakes, refund logic, and self-employment tax.
                These pages do not try to replace professional preparation or
                advice. They help you understand the structure of the problem so
                you can respond more intelligently.
              </p>
            </div>
            <div className="mt-6">
              <TaxCardGrid cards={troubleshootingCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Why Drutilio treats tax content carefully
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Tax content can become misleading very quickly when it pretends
                every concept leads directly to a universal answer. A bracket
                explanation is useful, but it is not a return. A refund estimate
                is useful, but it is not a guarantee. A side-gig tax article is
                useful, but it cannot see the forms, expenses, and filing status
                of every reader. That is why this hub stays educational and
                avoids acting like a substitute for individualized advice.
              </p>
              <p>
                The payoff of that approach is clarity. These pages are meant to
                help you understand the vocabulary, relationships, and common
                traps so that software output, payroll estimates, and return
                reviews stop feeling arbitrary. Once the structure is clear, you
                can decide whether you simply needed a better explanation or a
                deeper review from a tax professional.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              How to use this cluster well
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                If you are starting from zero, read the federal income tax
                overview first. Then move to taxable income vs. gross income and
                the AGI guide. After that, read the bracket page. If your
                confusion is about filing season outcomes, move next to the
                refund and filing-mistakes guides. If you have any kind of
                freelance, contractor, or self-employed income, read the
                self-employment tax guide before you assume a normal W-2 mental
                model still fits.
              </p>
              <p>
                In short, use the hub as a sequence rather than a pile of
                articles. These pages are designed to reinforce one another. The
                more you follow the internal links, the more the concepts start
                behaving like one system instead of seven disconnected problems.
              </p>
            </div>
          </section>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
