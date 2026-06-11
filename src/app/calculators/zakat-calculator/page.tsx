import type { Metadata } from "next";
import Link from "next/link";
import { ZakatCalculatorClient } from "@/components/calculators/ZakatCalculatorClient";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Use this Zakat Calculator (2026) to estimate net zakatable assets and 2.5% zakat due on savings, gold, silver, investments, retirement accounts, business assets, and debts for Muslims in the US, Canada, UK, and Australia.";

const faqItems: FAQItem[] = [
  {
    question: "What does this zakat calculator include?",
    answer:
      "This page lets you estimate zakat on cash savings, gold value, silver value, investments, optional retirement accounts, optional business assets, and deductible debts. It is a practical educational estimate rather than a final religious ruling.",
  },
  {
    question: "Does the calculator apply the standard zakat rate?",
    answer:
      "Yes. It applies the standard 2.5% zakat rate to net zakatable assets after the debts you enter have been deducted.",
  },
  {
    question: "Should retirement accounts always be included?",
    answer:
      "Not always. Treatment of retirement accounts can differ based on access restrictions, tax consequences, and scholarly opinion. This tool allows you to include them as an optional field so you can model your preferred approach.",
  },
  {
    question: "Does this calculator check nisab automatically?",
    answer:
      "No. It focuses on net zakatable assets and zakat due. Nisab thresholds can depend on whether you use a gold or silver benchmark and on the values you follow, so those checks should be reviewed separately.",
  },
  {
    question: "Is this calculator a religious or financial ruling?",
    answer:
      "No. It is an educational estimate only. For personal religious guidance, treatment of unusual assets, or local scholarly practice, consult a qualified scholar or trusted advisor familiar with your situation.",
  },
];

export const metadata: Metadata = {
  title: "Zakat Calculator (2026)",
  description,
  alternates: {
    canonical: "/calculators/zakat-calculator",
  },
  openGraph: {
    title: "Zakat Calculator (2026)",
    description,
    url: "/calculators/zakat-calculator",
  },
};

export default function ZakatCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="zakat-calculator"
      eyebrow="Finance"
      title="Zakat Calculator"
      intro="Estimate zakat due from net zakatable assets using a straightforward 2.5% rate. This tool is designed as an educational planning aid for Muslims in the US, Canada, UK, Australia, and other English-speaking contexts who want a clear first-pass estimate."
      calculator={<ZakatCalculatorClient />}
      sections={{
        howItWorks: (
          <>
            <h3 className="text-lg font-semibold text-white">What is Zakat?</h3>
            <p>
              Zakat is an obligatory charitable payment in Islam that is
              generally calculated on qualifying wealth once it reaches the
              relevant threshold and has been held for the required period. In
              practical terms, many people begin by identifying which assets are
              zakatable, subtracting deductible debts, and then applying a
              2.5% rate to the net amount.
            </p>
            <h3 className="text-lg font-semibold text-white">
              How is Zakat calculated?
            </h3>
            <p>
              This calculator adds the values you enter for cash savings, gold,
              silver, investments, optional retirement accounts, and optional
              business assets. It then subtracts the debts you enter to produce
              a net zakatable amount. Finally, it applies the standard 2.5%
              zakat rate to estimate zakat due.
            </p>
            <p>
              If you are also reviewing longer-term wealth growth, it can be
              useful to compare your numbers with the{" "}
              <Link
                href="/calculators/compound-interest-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                compound interest calculator
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
        resultMeans: (
          <>
            <h3 className="text-lg font-semibold text-white">
              Who must pay Zakat?
            </h3>
            <p>
              Whether someone must pay zakat depends on factors beyond a simple
              arithmetic result, including whether their wealth exceeds the
              nisab threshold and whether the relevant holding period has been
              met. This page does not make that determination for you. Instead,
              it helps estimate the value of assets that may be considered in a
              zakat calculation.
            </p>
            <p>
              The main result is the estimated zakat due after subtracting the
              debts you entered from total zakatable assets. That output is best
              treated as a practical estimate you can review before making a
              final decision under your preferred scholarly guidance.
            </p>
          </>
        ),
        limitations: (
          <>
            <h3 className="text-lg font-semibold text-white">
              Zakat on savings, investments and retirement accounts
            </h3>
            <p>
              Treatment of savings is often relatively straightforward, but
              investments, retirement accounts, pensions, tax-sheltered assets,
              stock options, business receivables, and debts can be more
              nuanced. Some people include the full market value of certain
              assets, while others apply adjustments based on accessibility,
              taxes, liquidity, or the specific nature of the holding.
            </p>
            <p>
              This tool does not evaluate nisab, hawl, school-specific rulings,
              or local scholarly interpretations. It also does not distinguish
              between retirement assets that are immediately accessible and
              assets that are restricted, penalized, or taxed upon withdrawal.
              Use the calculator as an educational estimate, not as a final
              fatwa, legal opinion, tax opinion, or financial recommendation.
            </p>
          </>
        ),
        whenToUse: (
          <>
            <p>
              Use this calculator when you want a clear first estimate of
              zakatable wealth and zakat due before reviewing the details of
              your situation more carefully. It can be especially helpful during
              annual personal finance reviews, Ramadan planning, charitable
              budgeting, or family discussions about how to organize assets.
            </p>
            <p>
              It also fits naturally with other Drutilio finance tools. The{" "}
              <Link
                href="/calculators/retirement-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                retirement calculator
              </Link>{" "}
              can help frame long-range savings context, while the{" "}
              <Link
                href="/calculators/percentage-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                percentage calculator
              </Link>{" "}
              is useful for quick comparisons when reviewing asset categories
              manually.
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
              { label: "Zakat Calculator" },
            ])}
          />
          <JsonLd
            data={buildCalculatorStructuredData({
              name: "Zakat Calculator",
              description,
              path: "/calculators/zakat-calculator",
              applicationCategory: "FinanceApplication",
            })}
          />
        </>
      }
    />
  );
}
