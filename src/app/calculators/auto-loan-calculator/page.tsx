import type { Metadata } from "next";
import Link from "next/link";
import { AutoLoanCalculatorClient } from "@/components/calculators/AutoLoanCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Estimate monthly payment and total interest for a US auto loan using vehicle price, trade-in, rate, and loan term.";

const faqItems: FAQItem[] = [
  {
    question: "Does this auto loan calculator include taxes and registration?",
    answer:
      "No. The estimate focuses on the financed vehicle amount after down payment and trade-in value. Sales tax, registration, dealership fees, warranties, and other add-ons are not included unless you manually roll them into the price.",
  },
  {
    question: "Why does total interest matter if I only care about the monthly payment?",
    answer:
      "Monthly affordability matters, but total interest helps show the long-run cost of financing. A longer loan term can reduce the monthly payment while still increasing the overall cost of the vehicle loan substantially.",
  },
  {
    question: "Should I enter trade-in value before or after my loan payoff?",
    answer:
      "This calculator uses trade-in value as a simple reduction to the price being financed. If you still owe money on the trade-in, you would need to account for any remaining balance separately because negative equity is not modeled here.",
  },
  {
    question: "Can this estimate be used for dealership offers?",
    answer:
      "Yes, as an educational comparison tool. It can help you compare rates and terms across offers, but it is not a substitute for reviewing the full loan contract, total financed amount, and all dealer or lender disclosures.",
  },
  {
    question: "Is this page giving borrowing advice?",
    answer:
      "No. It provides educational estimates only and does not offer financial, tax, legal, or lending advice.",
  },
];

export const metadata: Metadata = {
  title: "Auto Loan Calculator",
  description,
  alternates: {
    canonical: "/calculators/auto-loan-calculator",
  },
  openGraph: {
    title: "Auto Loan Calculator",
    description,
    url: "/calculators/auto-loan-calculator",
  },
};

export default function AutoLoanCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="auto-loan-calculator"
      eyebrow="Borrowing"
      title="Auto Loan Calculator"
      intro="Estimate what a car loan could cost each month and over the life of the loan. This calculator is useful when you want to compare how price, down payment, trade-in value, loan term, and interest rate change the overall borrowing picture."
      calculator={<AutoLoanCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <p>
              The calculator starts with the vehicle price and then reduces that
              amount by your down payment and trade-in value to estimate the
              balance being financed. It then applies a fixed-payment loan
              formula based on the annual interest rate and selected loan term to
              estimate the monthly payment and total interest paid across the
              repayment period.
            </p>
            <p>
              This structure is especially useful for US auto shoppers because
              dealers and lenders often emphasize monthly payment first. By
              showing both monthly payment and total interest, the tool makes it
              easier to see whether a lower payment is actually coming from a
              healthier loan structure or simply from stretching the debt over
              more years.
            </p>
          </>
        ),
        resultMeans: (
          <>
            <p>
              The monthly payment estimate is the amount you would expect to pay
              toward principal and interest under the simplified assumptions on
              this page. The total interest estimate is the borrowing cost above
              the financed amount. Seeing both numbers together is important,
              because two loans can feel similar month to month while producing
              very different total costs.
            </p>
            <p>
              If the monthly payment looks manageable but the total interest
              feels high, that usually means the loan term or interest rate
              deserves another look. In that case, it may help to compare your
              numbers with the{" "}
              <Link
                href="/calculators/savings-goal-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                savings goal calculator
              </Link>{" "}
              to see whether building a larger down payment first could improve
              the financing outcome.
            </p>
          </>
        ),
        limitations: (
          <>
            <p>
              This estimate does not include sales tax, registration costs,
              documentation fees, warranties, service packages, GAP products, or
              lender-specific charges. It also does not handle negative equity
              from a trade-in loan payoff, lease buyout specifics, or promotional
              financing structures with deferred or unusual terms.
            </p>
            <p>
              It assumes a fixed rate, fixed payment, and ordinary repayment
              schedule. Use it as an educational comparison tool rather than a
              final loan disclosure. The site does not provide financial, tax,
              legal, or investment advice, and it does not recommend whether you
              should borrow or how much vehicle you should buy.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              This calculator is most helpful before you visit a dealership,
              while comparing online listings, or when you receive multiple rate
              quotes from lenders or credit unions. It can also help you decide
              whether reducing the purchase price or increasing the down payment
              is a more effective way to get to a monthly payment range that fits
              your budget.
            </p>
            <p>
              It also works well alongside the{" "}
              <Link
                href="/calculators/mortgage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                mortgage calculator
              </Link>{" "}
              if you are trying to understand total borrowing pressure across
              major life purchases, or the{" "}
              <Link
                href="/calculators/student-loan-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                student loan calculator
              </Link>{" "}
              if other debt obligations are already part of your monthly picture.
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
              { label: "Auto Loan Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Auto Loan Calculator",
              description,
              path: "/calculators/auto-loan-calculator",
            })}
          />
        </>
      }
    />
  );
}
