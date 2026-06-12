import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/content/ContentSection";
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
  "Use this educational guide to understand a zakat calculator in the USA, including USD examples, savings, 401(k), IRA, stocks, gold, and when to consult a qualified scholar.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat Calculator USA" },
];

const faqItems: FAQItem[] = [
  {
    question: "How can a zakat calculator help Muslims in the United States?",
    answer:
      "A zakat calculator can help organize the arithmetic around savings, investments, metals, and debts in US dollars once you know which categories you want to include.",
  },
  {
    question: "Should 401(k) and IRA balances be treated the same as savings?",
    answer:
      "Not always. Retirement-account treatment is one of the areas where scholarly approaches can differ because of access restrictions, taxes, and penalties.",
  },
  {
    question: "Can I use a zakat calculator for stocks and ETFs in a taxable account?",
    answer:
      "Yes, as an arithmetic tool. But the correct inputs still depend on the method you follow for valuing and classifying investment holdings.",
  },
  {
    question: "Do gold holdings matter in a US zakat worksheet?",
    answer:
      "Yes, they often do, but treatment of jewelry, bullion, and valuation methods can differ depending on the approach being followed.",
  },
  {
    question: "Is a zakat calculator a substitute for a scholar?",
    answer:
      "No. It can help with arithmetic, but it does not replace qualified religious guidance for specific or complex cases.",
  },
];

export const metadata: Metadata = {
  title: "Zakat Calculator USA",
  description,
  alternates: {
    canonical: "/zakat-calculator-usa",
  },
  openGraph: {
    title: "Zakat Calculator USA",
    description,
    url: "/zakat-calculator-usa",
  },
};

export default function ZakatCalculatorUsaPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Faith and Finance
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Zakat calculator USA
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Muslims in the United States often need a zakat process that fits
            modern American financial life. That usually means working in US
            dollars while thinking across multiple asset categories at once:
            checking and savings accounts, brokerage holdings, stocks and ETFs,
            gold, small business balances, 401(k) plans, IRAs, HSA or other
            savings vehicles, and a mixture of short-term and long-term debts.
            A zakat calculator can make the arithmetic easier, but only if the
            person using it understands what belongs in the worksheet.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page explains how to use a zakat calculator in a US context in
            an educational way. It does not present a definitive religious
            ruling, and it does not assume every scholar treats modern American
            accounts in exactly the same way. Instead, it focuses on the
            categories and habits that commonly matter for Muslims in the United
            States, while keeping the tone practical and careful.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you are ready to model numbers, start with Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>
            . For the broader method, read{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>
            . If your assets include metals or retirement balances, the guides
            on{" "}
            <Link
              href="/zakat-on-gold-and-silver"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat on gold and silver
            </Link>{" "}
            and{" "}
            <Link
              href="/zakat-on-retirement-accounts"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat on retirement accounts
            </Link>{" "}
            are especially relevant. You can also use the{" "}
            <Link
              href="/zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Zakat hub
            </Link>{" "}
            as the central starting point for this topic cluster.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Why a USA-focused zakat page is useful">
            <p>
              A US zakat worksheet often looks different from a simpler
              cash-only example. Employer retirement accounts are common. Taxable
              investing is common. Credit-card usage is common. Student debt and
              mortgages are common. Small business activity and side income are
              also common. That combination means people often need to sort
              through more categories than they initially expect.
            </p>
            <p>
              A USA-focused zakat page is therefore less about creating a
              separate religion-specific standard and more about recognizing the
              account structures and obligations people actually hold. The
              categories are modern, but the need for careful classification is
              very traditional.
            </p>
            <p>
              Working in USD also matters practically. The same asset values,
              threshold comparisons, and zakat estimates may feel more concrete
              when they are written directly in dollars rather than loosely
              translated from another market example.
            </p>
          </ContentSection>

          <ContentSection title="Savings in US dollars are usually the easiest starting point">
            <p>
              For many people, savings are the cleanest place to begin. That can
              include checking balances, high-yield savings accounts, sinking
              funds, emergency reserves, and other clearly available cash. The
              first practical task is simply to gather those balances on the
              zakat date instead of relying on memory.
            </p>
            <p>
              In the United States, people often keep money in several separate
              accounts for budgeting or yield optimization. The result is that a
              person may underestimate their liquid wealth if they only look at
              a primary bank account. A clean worksheet gathers all the relevant
              balances first, then addresses liabilities separately.
            </p>
            <p>
              This step sounds basic, but it is one of the most powerful ways to
              make a zakat calculator useful rather than misleading.
            </p>
          </ContentSection>

          <ContentSection title="Stocks and brokerage accounts in a US setting">
            <p>
              Taxable brokerage accounts are now common in US household wealth.
              A person may hold index funds, ETFs, dividend stocks, cash sweep
              balances, or short-term trading positions. These assets often sit
              outside retirement wrappers and therefore may feel more directly
              accessible than 401(k) or IRA balances.
            </p>
            <p>
              Even so, treatment can still vary. Some people begin with current
              market value. Others want a more nuanced method depending on
              whether the holdings are for long-term appreciation, trading, or
              income generation. This is why the arithmetic can be straightforward
              while the interpretation still requires thought.
            </p>
            <p>
              If your US zakat review includes taxable investments, it may help
              to model them separately from retirement accounts and then combine
              the final chosen figures in the main calculator.
            </p>
          </ContentSection>

          <ContentSection title="401(k) and IRA balances often need separate treatment">
            <p>
              401(k) plans and IRAs are some of the most common reasons US
              Muslims seek additional zakat guidance. These accounts can hold
              significant wealth, but they also bring access restrictions, tax
              consequences, and penalty questions. That means they are often not
              handled as casually as an ordinary savings account.
            </p>
            <p>
              Some people use a current-value framework. Others prefer a more
              accessible-value or post-tax approach. Others may defer some or
              all of the treatment until withdrawal becomes more practical. The
              right takeaway is not that one internet answer ends the discussion,
              but that retirement-account treatment deserves separate review.
            </p>
            <p>
              That is exactly why Drutilio has a separate guide on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="Gold still matters even in a modern US balance sheet">
            <p>
              Gold and silver may feel less central in an American financial
              worksheet dominated by banks and brokerages, but they still matter
              for many households. Gold jewelry, coins, and bullion may be held
              for tradition, security, or investment. If they are present, they
              should not disappear simply because they are not visible in a
              banking app.
            </p>
            <p>
              The main practical tasks are to decide what you are including,
              estimate a current value, and then understand how that interacts
              with the threshold discussion. The guide on{" "}
              <Link
                href="/zakat-on-gold-and-silver"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on gold and silver
              </Link>{" "}
              is the best companion if metals are part of your US zakat
              worksheet.
            </p>
          </ContentSection>

          <ContentSection title="A practical USD example">
            <p>
              Imagine a US household with $14,000 in liquid savings, $22,000 in
              a taxable ETF portfolio, $3,500 in gold value, and $85,000 in a
              401(k). The household also has some short-term obligations and a
              credit-card balance tied to current expenses. A useful process
              would not be to throw every number into a calculator immediately.
              It would be to separate the asset categories first.
            </p>
            <p>
              Savings and gold can usually be reviewed relatively directly.
              Taxable ETFs may be handled using the investing method the family
              follows. The 401(k) likely needs a separate retirement-account
              judgment. Once those category decisions are made, the resulting
              figures can be entered into the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              in USD.
            </p>
            <p>
              The power of the calculator is that it then makes the arithmetic
              clear. The responsibility of the user is to make the categories
              clear first.
            </p>
          </ContentSection>

          <ContentSection title="Why local context still matters in the United States">
            <p>
              Even within the US, people may rely on different mosque guidance,
              scholarly traditions, or local educational resources. One family
              may follow one approach on retirement accounts or gold jewelry,
              while another follows a different well-established approach. That
              does not mean the process is arbitrary. It means the framework
              should be understood rather than assumed.
            </p>
            <p>
              This is especially important for complex cases involving business
              assets, family-owned property, trusts, stock compensation,
              multiple retirement plans, or mixed personal and business
              liabilities. A good local scholar or trusted Islamic authority can
              turn a broad educational rule into a more reliable case-specific
              method.
            </p>
          </ContentSection>

          <ContentSection title="How to use the calculator responsibly">
            <p>
              The best way to use a zakat calculator in the USA is to treat it
              as the final arithmetic step, not the first interpretive step.
              Gather your relevant balances, classify the assets, think carefully
              about liabilities, review any uncertain categories like retirement
              accounts or jewelry, and then enter the resulting values into the
              calculator.
            </p>
            <p>
              This avoids the common mistake of assuming the calculator itself
              determines what belongs in the worksheet. It does not. It reflects
              the categories you choose, which is why the surrounding educational
              pages matter so much.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is for educational purposes only. Scholarly approaches
              may differ on 401(k) plans, IRAs, taxable stocks, ETFs, gold,
              debts, and threshold questions. It does not provide a definitive
              religious ruling, tax advice, or financial advice.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority familiar with American financial structures and the
              zakat framework you follow. Drutilio can help with the arithmetic,
              but it should not replace case-specific guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
