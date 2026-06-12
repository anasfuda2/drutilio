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
  "Explore Drutilio's mortgage hub with calculators and educational guides on affordability, down payment, closing costs, refinancing, and mortgage structure.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Mortgage" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Drutilio's mortgage hub?",
    answer:
      "The mortgage hub brings home buying calculators and educational guides into one place so readers can move from affordability to cash-to-close planning, loan structure, and refinance thinking more easily.",
  },
  {
    question: "Does this mortgage hub provide lending or financial advice?",
    answer:
      "No. It is educational content and calculator support designed to explain concepts and planning assumptions, not to provide lending, mortgage, or financial advice.",
  },
  {
    question: "Where should I start if I am early in the process?",
    answer:
      "A strong starting sequence is how much house can I afford, the mortgage affordability calculator, the mortgage calculator, and the down payment guide.",
  },
  {
    question: "Which pages help most with upfront cash planning?",
    answer:
      "The down payment guide, mortgage closing costs explained, and the closing costs calculator are the best starting points for upfront cash planning.",
  },
  {
    question: "Which calculator is best for refinance questions?",
    answer:
      "The mortgage refinance calculator is the best first tool if your question is how a new rate and term compare with your current mortgage.",
  },
];

type MortgageCard = {
  title: string;
  description: string;
  href: string;
};

const calculatorCards: MortgageCard[] = [
  {
    title: "Mortgage Calculator",
    description:
      "Estimate monthly principal and interest for a fixed-rate mortgage using home price, down payment, rate, and term.",
    href: "/calculators/mortgage-calculator",
  },
  {
    title: "Mortgage Affordability Calculator",
    description:
      "Estimate a simplified affordable home price using income, debts, down payment, rate, and term assumptions.",
    href: "/calculators/mortgage-affordability-calculator",
  },
  {
    title: "Mortgage Refinance Calculator",
    description:
      "Compare simplified current and refinanced payments, monthly savings, and a rough break-even period.",
    href: "/calculators/mortgage-refinance-calculator",
  },
  {
    title: "Closing Costs Calculator",
    description:
      "Estimate percentage-based closing costs, fixed fees, and rough cash to close for a home purchase.",
    href: "/calculators/closing-costs-calculator",
  },
];

const guideCards: MortgageCard[] = [
  {
    title: "How Much House Can I Afford?",
    description:
      "Learn how affordability works when income, debts, cash to close, and personal comfort are all considered together.",
    href: "/how-much-house-can-i-afford",
  },
  {
    title: "Mortgage Preapproval Guide",
    description:
      "Understand what preapproval is, why it matters, and why approval is not the same thing as comfort.",
    href: "/mortgage-preapproval-guide",
  },
  {
    title: "Down Payment Guide",
    description:
      "Think through down payment tradeoffs, reserves, and how upfront cash affects the buying process.",
    href: "/down-payment-guide",
  },
  {
    title: "Mortgage Closing Costs Explained",
    description:
      "Understand what makes up closing costs and why cash to close is broader than down payment alone.",
    href: "/mortgage-closing-costs-explained",
  },
];

const structureCards: MortgageCard[] = [
  {
    title: "Fixed vs. Adjustable Rate Mortgage",
    description:
      "Compare payment stability and future reset risk in an educational way.",
    href: "/fixed-vs-adjustable-rate-mortgage",
  },
  {
    title: "Mortgage Points Explained",
    description:
      "Learn how upfront points affect rate structure and why break-even thinking matters.",
    href: "/mortgage-points-explained",
  },
  {
    title: "Refinance vs. New Mortgage",
    description:
      "See how refinance thinking differs from purchase-loan planning even when the math overlaps.",
    href: "/refinance-vs-new-mortgage",
  },
  {
    title: "Common Home Buying Mistakes",
    description:
      "Review the planning mistakes that often create stress around affordability, cash, and loan structure.",
    href: "/common-home-buying-mistakes",
  },
];

function MortgageCardGrid({ cards }: { cards: MortgageCard[] }) {
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
  title: "Mortgage and Home Buying Hub",
  description,
  alternates: {
    canonical: "/mortgage",
  },
  openGraph: {
    title: "Mortgage and Home Buying Hub",
    description,
    url: "/mortgage",
  },
};

export default function MortgageHubPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Mortgage and Home Buying
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Mortgage hub
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Drutilio&apos;s mortgage hub brings together the main calculators
              and educational guides that help buyers move from vague home
              shopping toward more structured planning. The cluster is designed
              around the parts of the process that most often create confusion:
              affordability, down payment, cash to close, mortgage structure,
              and refinancing tradeoffs.
            </p>
            <p>
              This hub is educational only and does not provide mortgage,
              lending, financial, tax, or legal advice. Its purpose is to help
              you understand the moving parts so you can compare scenarios,
              prepare better questions, and avoid the most common planning
              mistakes.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Mortgage calculators
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Start here if you want to turn broad home-buying questions into
                rough numbers. These calculators work best as planning tools:
                the mortgage calculator for monthly payment, the affordability
                calculator for home-price range, the refinance calculator for
                savings and break-even thinking, and the closing-costs
                calculator for upfront cash.
              </p>
            </div>
            <div className="mt-6">
              <MortgageCardGrid cards={calculatorCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Affordability and cash guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These pages help with the early-stage questions: what payment
                range feels workable, what preapproval means, how much cash is
                needed up front, and why down payment and closing costs have to
                be considered together rather than in isolation.
              </p>
            </div>
            <div className="mt-6">
              <MortgageCardGrid cards={guideCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Loan structure and refinance guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These pages focus on how loan structure and future refinancing
                decisions affect payment shape, risk, and cost recovery. They
                are especially useful once the home price range feels roughly
                settled and the financing structure itself becomes the main
                planning question.
              </p>
            </div>
            <div className="mt-6">
              <MortgageCardGrid cards={structureCards} />
            </div>
          </section>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
