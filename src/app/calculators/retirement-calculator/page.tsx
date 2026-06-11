import type { Metadata } from "next";
import Link from "next/link";
import { RetirementCalculatorClient } from "@/components/calculators/RetirementCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Project retirement savings growth with current savings, monthly contributions, annual return, and years until retirement.";

const faqItems: FAQItem[] = [
  {
    question: "Is the projected balance guaranteed?",
    answer:
      "No. The projection is an educational estimate based on the assumptions you enter. Real investment returns can vary widely from year to year, and actual outcomes may be higher or lower than the estimate shown.",
  },
  {
    question: "Why does the assumed annual return matter so much?",
    answer:
      "Retirement savings often grow over many years, so compounding has a large effect. A small change in the assumed annual return can create a meaningful difference in the projected balance over long time horizons.",
  },
  {
    question: "Does this calculator include employer matching?",
    answer:
      "Not directly. If you want to approximate employer matching, you can add the expected match amount into the monthly contribution field, but this page does not model plan rules or vesting schedules.",
  },
  {
    question: "Does the result account for inflation?",
    answer:
      "No. The projected balance is a nominal estimate based on the stated return. Inflation can reduce future purchasing power, so a balance that looks large on screen may still buy less in retirement than it would today.",
  },
  {
    question: "Is this investment advice?",
    answer:
      "No. This tool is educational only and does not provide financial, tax, legal, or investment advice.",
  },
];

export const metadata: Metadata = {
  title: "Retirement Calculator",
  description,
  alternates: {
    canonical: "/calculators/retirement-calculator",
  },
  openGraph: {
    title: "Retirement Calculator",
    description,
    url: "/calculators/retirement-calculator",
  },
};

export default function RetirementCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="retirement-calculator"
      eyebrow="Retirement"
      title="Retirement Calculator"
      intro="Estimate how retirement savings may grow over time based on your current balance, regular monthly contributions, expected annual return, and years until retirement. It is designed to help with planning comparisons rather than predictions."
      calculator={<RetirementCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <p>
              The calculator begins with your current savings balance and then
              compounds that amount using the annual return you enter. It also
              adds your monthly contribution throughout the selected timeline.
              That means the estimate reflects two engines of growth at once:
              money you have already saved and money you continue adding over
              time.
            </p>
            <p>
              This approach is useful because retirement planning is often less
              about finding one perfect number and more about understanding the
              relationship between time, consistency, and return assumptions. In
              practical terms, the tool can help you compare whether increasing
              your monthly contribution, extending your working timeline, or
              adjusting your assumptions has the biggest effect on the future
              balance shown.
            </p>
          </>
        ),
        resultMeans: (
          <>
            <p>
              The projected balance is an estimate of what your account could
              grow to under a steady monthly compounding model. It is not a
              promised outcome and should not be treated as a forecast of market
              performance. Instead, it is best used as a scenario-planning
              number: if you save this much for this long and returns average
              this level, your balance may end up in this general range.
            </p>
            <p>
              The result is often most valuable when you run several versions of
              the same plan. For example, compare a slightly higher monthly
              contribution or a slightly lower return assumption to understand
              the sensitivity of the result. If retirement saving competes with
              nearer-term goals, the{" "}
              <Link
                href="/calculators/savings-goal-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                savings goal calculator
              </Link>{" "}
              can help frame shorter-term tradeoffs.
            </p>
          </>
        ),
        limitations: (
          <>
            <p>
              This page does not model taxes, employer plan limits, fund fees,
              changing contribution levels, pension income, Social Security,
              required minimum distributions, inflation, or future withdrawal
              strategy. Those factors can materially affect retirement readiness
              and are outside the scope of a simple educational estimate.
            </p>
            <p>
              It also assumes a stable average return even though real market
              paths are uneven. Sequence-of-returns risk matters, especially when
              a person is near retirement. The calculator does not provide
              investment advice or tell you how to allocate assets; it is meant
              to support research and comparison only.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              This calculator is helpful when you want to check whether your
              current saving pace aligns with a long-term target, or when you are
              deciding how much to increase contributions after a raise, debt
              payoff, or job change. It is also useful when comparing the impact
              of starting earlier versus contributing more later.
            </p>
            <p>
              It pairs naturally with the{" "}
              <Link
                href="/calculators/student-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                student loan calculator
              </Link>{" "}
              and the{" "}
              <Link
                href="/calculators/mortgage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                mortgage calculator
              </Link>{" "}
              when you are evaluating how debt payments and major purchases may
              affect long-run saving capacity.
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
              { label: "Retirement Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Retirement Calculator",
              description,
              path: "/calculators/retirement-calculator",
            })}
          />
        </>
      }
    />
  );
}
