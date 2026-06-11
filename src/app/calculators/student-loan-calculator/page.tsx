import type { Metadata } from "next";
import Link from "next/link";
import { StudentLoanCalculatorClient } from "@/components/calculators/StudentLoanCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Estimate student loan payoff time and total interest from loan balance, rate, and monthly payment.";

const faqItems: FAQItem[] = [
  {
    question: "Why does the calculator sometimes say the payment is too low?",
    answer:
      "That warning appears when the monthly payment is not large enough to cover the monthly interest charge. In that situation, the balance may not decline in a normal payoff pattern, so the tool cannot produce a realistic payoff timeline.",
  },
  {
    question: "Does this include income-driven repayment plans?",
    answer:
      "No. The page assumes a fixed monthly payment and fixed interest rate. Income-driven plans, forgiveness rules, changing payment amounts, and capitalization events are outside the scope of this simplified educational estimate.",
  },
  {
    question: "What does total interest tell me?",
    answer:
      "Total interest shows how much borrowing cost is added on top of the original balance over the estimated payoff period. It helps you compare whether increasing your payment could materially reduce the long-run cost of the debt.",
  },
  {
    question: "Can I use this for private and federal loans together?",
    answer:
      "You can use it as a rough blended estimate if you enter a combined balance, blended rate, and single payment amount. However, separate loans may have different terms and protections, so the result is only a high-level approximation.",
  },
  {
    question: "Is this loan advice?",
    answer:
      "No. The tool provides educational estimates only and does not give financial, tax, legal, investment, or repayment-plan advice.",
  },
];

export const metadata: Metadata = {
  title: "Student Loan Calculator",
  description,
  alternates: {
    canonical: "/calculators/student-loan-calculator",
  },
  openGraph: {
    title: "Student Loan Calculator",
    description,
    url: "/calculators/student-loan-calculator",
  },
};

export default function StudentLoanCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="student-loan-calculator"
      eyebrow="Education"
      title="Student Loan Calculator"
      intro="Estimate how long it could take to repay student debt and how much interest you may pay over time. This page is most useful when you want a clearer picture of the tradeoff between a lower payment today and a longer payoff horizon."
      calculator={<StudentLoanCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <p>
              The calculator uses three main inputs: current loan balance,
              interest rate, and monthly payment. With those numbers, it
              estimates whether the payment is high enough to reduce principal at
              all. If it is, the page calculates an approximate payoff period and
              total interest paid assuming a fixed rate and steady payment over
              time.
            </p>
            <p>
              This matters because student debt often feels abstract when it is
              discussed only as a balance. Turning the balance into an estimated
              payoff timeline gives you a more practical view of the obligation.
              It can help you compare whether a modest payment increase changes
              the long-run cost meaningfully, or whether the current payment
              mainly stretches the loan over a much longer timeline.
            </p>
          </>
        ),
        resultMeans: (
          <>
            <p>
              If the page returns a payoff timeline, that is the estimated amount
              of time needed to reduce the balance to zero under the current
              assumptions. The total interest estimate represents the borrowing
              cost above the original balance over that period. Both figures are
              educational approximations rather than a servicer statement.
            </p>
            <p>
              If the calculator warns that the payment is too low, that is an
              important signal. It means interest may be consuming too much of
              the payment for the loan to amortize normally. In a broader budget
              context, compare that pressure with your other goals using the{" "}
              <Link
                href="/calculators/retirement-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                retirement calculator
              </Link>{" "}
              or the{" "}
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
              This calculator does not model income-driven repayment, loan
              forgiveness, deferment, forbearance, capitalization, subsidy
              mechanics, autopay discounts, changing rates, or multiple separate
              loans with different terms. Those features can meaningfully affect
              actual repayment outcomes, especially for federal student loans.
            </p>
            <p>
              The page also does not determine what repayment strategy is best
              for your situation. It is educational only and does not provide
              financial, tax, legal, or investment advice. It is best used as a
              planning estimate to support better questions, not as a final
              decision framework by itself.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              This calculator is most helpful when you are deciding whether to
              increase monthly payments, reviewing refinancing tradeoffs, or
              trying to understand how student debt may affect other priorities.
              It is also useful when you want a quick estimate before speaking
              with a servicer or evaluating how extra cash flow could be used.
            </p>
            <p>
              If student debt is competing with transportation or housing goals,
              you may also want to compare the monthly strain alongside the{" "}
              <Link
                href="/calculators/auto-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                auto loan calculator
              </Link>{" "}
              and the{" "}
              <Link
                href="/calculators/mortgage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                mortgage calculator
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
              { label: "Student Loan Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Student Loan Calculator",
              description,
              path: "/calculators/student-loan-calculator",
            })}
          />
        </>
      }
    />
  );
}
