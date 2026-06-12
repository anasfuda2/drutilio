import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
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

const description =
  "Explore Drutilio's retirement hub with calculators and educational guides on 401(k)s, IRAs, savings rates, retirement income, and withdrawal planning.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Retirement" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Drutilio's retirement hub?",
    answer:
      "The retirement hub brings calculators and educational retirement guides into one place so readers can move from contribution planning to retirement income and withdrawal concepts more easily.",
  },
  {
    question: "Does this retirement hub provide financial advice?",
    answer:
      "No. It is educational content and calculator support designed to help readers understand assumptions, tradeoffs, and planning concepts.",
  },
  {
    question: "Where should I start if I am new to retirement planning?",
    answer:
      "A strong starting sequence is how much do I need to retire, how much should I save for retirement, the retirement calculator, and the 401(k) calculator.",
  },
  {
    question: "Which guides help with account choice?",
    answer:
      "The 401(k) vs. IRA page and the Roth IRA vs. traditional IRA page are the best starting points for account-structure comparisons.",
  },
  {
    question: "Which calculator is best for retirement income questions?",
    answer:
      "The retirement income calculator is the best companion if your main question is how retirement savings may turn into annual or monthly income.",
  },
];

type RetirementCard = {
  title: string;
  description: string;
  href: string;
};

const calculatorCards: RetirementCard[] = [
  {
    title: "Retirement Calculator",
    description:
      "Project long-term savings growth using current balance, monthly contributions, time, and return assumptions.",
    href: "/calculators/retirement-calculator",
  },
  {
    title: "401(k) Calculator",
    description:
      "Estimate how salary contributions and employer matching may affect a workplace retirement plan over time.",
    href: "/calculators/401k-calculator",
  },
  {
    title: "IRA Calculator",
    description:
      "Project IRA growth using current balance, annual contributions, and long-term return assumptions.",
    href: "/calculators/ira-calculator",
  },
  {
    title: "Retirement Income Calculator",
    description:
      "Estimate annual and monthly retirement income using withdrawals, outside income, and retirement savings.",
    href: "/calculators/retirement-income-calculator",
  },
  {
    title: "Compound Interest Calculator",
    description:
      "Model how recurring contributions and return assumptions may build long-term savings.",
    href: "/calculators/compound-interest-calculator",
  },
  {
    title: "Savings Goal Calculator",
    description:
      "Estimate the monthly saving pace needed to reach a retirement savings target on a chosen timeline.",
    href: "/calculators/savings-goal-calculator",
  },
];

const planningCards: RetirementCard[] = [
  {
    title: "How Much Do I Need to Retire?",
    description:
      "Learn how spending, time horizon, other income, and withdrawal assumptions shape retirement targets.",
    href: "/how-much-do-i-need-to-retire",
  },
  {
    title: "How Much Should I Save for Retirement?",
    description:
      "Understand contribution rate, employer match, and why savings pace matters as much as return assumptions.",
    href: "/how-much-should-i-save-for-retirement",
  },
  {
    title: "Retirement Savings by Age",
    description:
      "Use age-based benchmarks thoughtfully without treating them like a complete retirement plan.",
    href: "/retirement-savings-by-age",
  },
  {
    title: "Common Retirement Planning Mistakes",
    description:
      "Review the practical errors that often slow retirement progress or weaken long-term planning.",
    href: "/common-retirement-planning-mistakes",
  },
];

const accountCards: RetirementCard[] = [
  {
    title: "401(k) vs. IRA",
    description:
      "Compare workplace retirement plans and IRAs, including match, control, fees, and planning behavior.",
    href: "/401k-vs-ira",
  },
  {
    title: "Roth IRA vs. Traditional IRA",
    description:
      "Understand how tax timing, flexibility, and future expectations shape the IRA choice conversation.",
    href: "/roth-ira-vs-traditional-ira",
  },
];

const incomeCards: RetirementCard[] = [
  {
    title: "Retirement Income Planning",
    description:
      "Learn how portfolio withdrawals, recurring income, and flexible spending fit together in retirement.",
    href: "/retirement-income-planning",
  },
  {
    title: "Safe Withdrawal Rate Explained",
    description:
      "Understand withdrawal-rate thinking, why it is debated, and how it fits into retirement income planning.",
    href: "/safe-withdrawal-rate-explained",
  },
];

function RetirementCardGrid({ cards }: { cards: RetirementCard[] }) {
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
  title: "Retirement Planning Hub",
  description,
  alternates: {
    canonical: "/retirement",
  },
  openGraph: {
    title: "Retirement Planning Hub",
    description,
    url: "/retirement",
  },
};

export default function RetirementHubPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Retirement Planning
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Retirement hub
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Drutilio&apos;s retirement hub brings together the main retirement
              calculators and educational guides you need to move from broad
              saving goals to more practical questions about account choice,
              income planning, and withdrawal assumptions. Retirement planning
              is easier to handle when it is broken into layers: how much you
              may need, how much you are saving, where you are saving it, and
              how that money may eventually support spending.
            </p>
            <p>
              This hub is educational only and does not provide financial,
              investment, or tax advice. It is designed to help you understand
              the moving parts so that calculators and comparisons feel more
              useful and less abstract. The goal is not to hand you one magic
              number. The goal is to help you ask better planning questions.
            </p>
            <p>
              A simple way to use the cluster is to start with the target and
              contribution pages, then move to account structure, then finish
              with the retirement income and withdrawal pages. The calculators
              fit naturally into that sequence because they make the assumptions
              easier to test.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Retirement calculators
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These tools help with the three main practical questions most
                readers bring into retirement planning: how savings may grow,
                how workplace and IRA contributions compare over time, and how
                retirement savings may translate into income.
              </p>
            </div>
            <div className="mt-6">
              <RetirementCardGrid cards={calculatorCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Core planning guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Start here if you want to build a clearer framework around
                retirement targets, savings pace, and age-based context. These
                pages help connect saving behavior to long-term planning without
                pretending that one benchmark or one rule settles every case.
              </p>
            </div>
            <div className="mt-6">
              <RetirementCardGrid cards={planningCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Account-choice guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These pages focus on the structure side of retirement planning:
                workplace plans versus IRAs, and the tax-timing tradeoffs that
                often appear when savers compare Roth and traditional accounts.
              </p>
            </div>
            <div className="mt-6">
              <RetirementCardGrid cards={accountCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Income and withdrawal guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Retirement is not only about accumulation. These pages help with
                the income stage by explaining recurring income sources,
                withdrawal thinking, and how sustainable income questions fit
                into a long-term plan.
              </p>
            </div>
            <div className="mt-6">
              <RetirementCardGrid cards={incomeCards} />
            </div>
          </section>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
