import type { Metadata } from "next";
import Link from "next/link";
import { SavingsGoalCalculatorClient } from "@/components/calculators/SavingsGoalCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Estimate the monthly contribution needed to reach a savings target within a selected timeline using a US dollar goal.";

const faqItems: FAQItem[] = [
  {
    question: "What if I already have enough saved for my goal?",
    answer:
      "If current savings already cover the target amount, the calculator returns a required monthly contribution of zero. That does not mean you must stop saving; it only means the stated goal is already funded under the assumptions entered.",
  },
  {
    question: "Why does the required monthly contribution change with annual return?",
    answer:
      "A higher assumed annual return means the existing balance and future contributions may grow more over time. That can lower the monthly amount needed to reach the target, but the estimate depends heavily on the return assumption actually being achieved.",
  },
  {
    question: "Can I use this for an emergency fund?",
    answer:
      "Yes. It works well for emergency fund planning, vacation savings, down payment goals, moving costs, or other defined cash targets. The most useful part is seeing how the monthly requirement changes as the timeline shortens or lengthens.",
  },
  {
    question: "Should I use a high return assumption for short-term goals?",
    answer:
      "Usually it is safer to be conservative for short-term cash goals. This page is educational only, but large return assumptions can make the monthly requirement look easier than it may be in practice if the money needs to stay stable and accessible.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. The result is an educational estimate only and is not financial, tax, legal, or investment advice.",
  },
];

export const metadata: Metadata = {
  title: "Savings Goal Calculator",
  description,
  alternates: {
    canonical: "/calculators/savings-goal-calculator",
  },
  openGraph: {
    title: "Savings Goal Calculator",
    description,
    url: "/calculators/savings-goal-calculator",
  },
};

export default function SavingsGoalCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="savings-goal-calculator"
      eyebrow="Saving"
      title="Savings Goal Calculator"
      intro="Set a target amount and timeline, then estimate how much you may need to save each month. This tool is useful for cash goals like emergency funds, planned purchases, travel, tuition, or a future down payment."
      calculator={<SavingsGoalCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <p>
              This calculator looks at four pieces of information: your target
              amount, your current savings, how many months you have to save, and
              an optional annual return assumption. It first estimates how much
              your current balance could grow over the timeline. Then it
              calculates the monthly contribution needed to close the remaining
              gap by the target date.
            </p>
            <p>
              That makes the tool especially useful for goals with a fixed
              deadline. Instead of asking only whether a goal feels possible, you
              can turn the goal into a monthly savings target and decide whether
              it fits your budget. If it does not, try changing the timeline or
              the goal amount and compare how sensitive the monthly requirement
              is to those adjustments.
            </p>
          </>
        ),
        resultMeans: (
          <>
            <p>
              The main result is the estimated monthly contribution required to
              reach the target under the assumptions entered. If the result is
              higher than expected, that is a signal to revisit the target date,
              the total goal amount, or the role of existing savings. If the
              result is lower than expected, it may mean the current balance and
              the selected timeline are already doing a lot of the heavy lifting.
            </p>
            <p>
              This estimate is often most helpful when paired with broader
              borrowing or long-term planning tools. For example, if you are
              trying to save for a down payment, the{" "}
              <Link
                href="/calculators/mortgage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                mortgage calculator
              </Link>{" "}
              can help connect that savings target to a likely housing payment,
              while the{" "}
              <Link
                href="/calculators/retirement-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                retirement calculator
              </Link>{" "}
              can frame the long-term opportunity cost of redirecting cash flow.
            </p>
          </>
        ),
        limitations: (
          <>
            <p>
              The calculator assumes regular monthly contributions and a steady
              return rate across the whole savings period. Real-world savings
              patterns are rarely that smooth. Income changes, unexpected
              expenses, rate changes on cash accounts, and taxes on returns can
              all affect the real path to a goal.
            </p>
            <p>
              It also does not determine what type of account you should use or
              how much risk is appropriate for your goal horizon. The page is
              educational only and does not provide financial, tax, legal, or
              investment advice. It helps you size a target; it does not tell you
              where to keep the money or what product to choose.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              This tool is best when you have a clear cash target and a specific
              time horizon. Common examples include building an emergency fund,
              preparing for relocation costs, saving for a vehicle down payment,
              or creating a disciplined plan for a future home purchase or
              education expense.
            </p>
            <p>
              It is also useful when you need to compare competing priorities. If
              the required contribution feels too aggressive, that may be a sign
              to extend the timeline, shrink the goal, or compare the effect of
              existing debt using the{" "}
              <Link
                href="/calculators/student-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                student loan calculator
              </Link>{" "}
              or{" "}
              <Link
                href="/calculators/auto-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                auto loan calculator
              </Link>
              .
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
              { label: "Savings Goal Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Savings Goal Calculator",
              description,
              path: "/calculators/savings-goal-calculator",
            })}
          />
        </>
      }
    />
  );
}
