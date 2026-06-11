import type { Metadata } from "next";
import Link from "next/link";
import { MortgageCalculatorClient } from "@/components/calculators/MortgageCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Estimate monthly principal and interest for a US mortgage using home price, down payment, rate, and loan term.";

const faqItems: FAQItem[] = [
  {
    question: "Does this mortgage calculator include taxes and insurance?",
    answer:
      "No. This page estimates principal and interest only. Property taxes, homeowners insurance, mortgage insurance, HOA dues, and closing costs are separate items that can materially change a full monthly housing budget.",
  },
  {
    question: "Why does a small rate change matter so much?",
    answer:
      "Mortgage balances are usually large and repayment periods are long. Even a modest rate change can shift the monthly payment noticeably and can add or remove a substantial amount of lifetime interest over 15 or 30 years.",
  },
  {
    question: "What happens if I put more money down?",
    answer:
      "A larger down payment reduces the financed loan amount. That generally lowers the monthly principal-and-interest payment and also reduces total interest paid over time because you are borrowing less from the start.",
  },
  {
    question: "Can I use this for a refinance estimate?",
    answer:
      "Yes, as a rough educational estimate. You can enter the balance you expect to finance and compare new rates or terms, but this tool does not include refinance costs, escrow changes, or lender-specific fees.",
  },
  {
    question: "Is this page giving mortgage advice?",
    answer:
      "No. The calculator is educational only. It does not provide financial, tax, legal, or lending advice and should not replace a quote from a lender or guidance from a qualified professional.",
  },
];

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description,
  alternates: {
    canonical: "/calculators/mortgage-calculator",
  },
  openGraph: {
    title: "Mortgage Calculator",
    description,
    url: "/calculators/mortgage-calculator",
  },
};

export default function MortgageCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="mortgage-calculator"
      eyebrow="Home Buying"
      title="Mortgage Calculator"
      intro="Use this mortgage calculator to estimate monthly principal and interest for a fixed-rate home loan. It helps you compare home prices, down payment choices, and loan terms without losing sight of the monthly payment impact."
      calculator={<MortgageCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <p>
              This calculator starts with four inputs that most home shoppers
              already have in mind: home price, down payment, interest rate, and
              loan term. It subtracts the down payment from the home price to
              estimate the amount being financed. That financed amount is then
              amortized over the selected term using the interest rate you enter.
              The result is an estimated monthly principal-and-interest payment.
            </p>
            <p>
              For US borrowers, this is often the cleanest first step in the
              mortgage planning process because it isolates the debt payment from
              the rest of the housing budget. That makes it easier to compare a
              15-year loan with a 30-year loan, or to see whether raising your
              down payment meaningfully improves the monthly number before you
              move on to taxes, insurance, and other homeownership costs.
            </p>
          </>
        ),
        resultMeans: (
          <>
            <p>
              The result is the estimated monthly principal-and-interest portion
              of a fixed-rate mortgage payment. Principal is the amount that
              reduces the loan balance. Interest is the borrowing cost charged by
              the lender. Early in a typical mortgage, a larger share of the
              payment goes to interest; later in the loan, more of each payment
              goes toward principal reduction.
            </p>
            <p>
              This number is useful as a decision-making anchor, not as a final
              housing budget. If the calculator shows a payment that already
              feels stretched, that is often a sign to test a lower purchase
              price, a larger down payment, or a different term before moving
              deeper into the buying process. For broader planning, compare the
              result with the payment range you might also see on the{" "}
              <Link
                href="/calculators/auto-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                auto loan calculator
              </Link>{" "}
              and the savings pace on the{" "}
              <Link
                href="/calculators/savings-goal-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                savings goal calculator
              </Link>
              .
            </p>
          </>
        ),
        limitations: (
          <>
            <p>
              This page deliberately keeps the estimate narrow. It does not
              include property taxes, homeowners insurance, mortgage insurance,
              HOA dues, closing costs, prepaid items, discount points, or lender
              fees. In many US markets, those items can significantly change the
              real monthly amount that appears on a mortgage statement.
            </p>
            <p>
              It also assumes a fixed-rate structure and regular payments across
              the full term. Adjustable-rate mortgages, buydowns, escrow
              fluctuations, and local tax changes are outside the scope of this
              tool. The calculator is educational only and does not provide
              financial, tax, legal, or lending advice.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              This calculator is most useful when you are testing affordability
              ranges, comparing loan scenarios from online listings, or deciding
              how a larger down payment might change the monthly payment. It is
              also helpful before speaking with a lender because it gives you a
              simple framework for evaluating rate quotes instead of reacting only
              to the sticker price of the home.
            </p>
            <p>
              It can also support longer-term planning. If your expected payment
              still feels too high, you may want to build a stronger down payment
              runway first with the{" "}
              <Link
                href="/calculators/savings-goal-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                savings goal calculator
              </Link>
              , or review broader retirement tradeoffs with the{" "}
              <Link
                href="/calculators/retirement-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                retirement calculator
              </Link>{" "}
              before committing cash to a home purchase.
            </p>
          </>
        ),
      }}
      faq={<FAQSection items={faqItems} />}
      structuredData={
        <>
          <JsonLd data={buildFaqStructuredData(faqItems)} />
          <JsonLd
            data={buildBreadcrumbStructuredData([
              { label: "Home", href: "/" },
              { label: "Calculators", href: "/calculators" },
              { label: "Mortgage Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Mortgage Calculator",
              description,
              path: "/calculators/mortgage-calculator",
            })}
          />
        </>
      }
    />
  );
}
