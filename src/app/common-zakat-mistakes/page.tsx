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
  "Learn the most common zakat mistakes, including missed assets, debts, gold, investments, double counting, and outdated prices, in an educational guide for Muslims in the US, Canada, UK, and Australia.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Common Zakat Mistakes" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the most common zakat mistake?",
    answer:
      "A very common mistake is incomplete asset review, where savings, gold, investments, receivables, or other categories are missed because the person only looks at one account balance.",
  },
  {
    question: "Can debts be handled incorrectly in zakat calculations?",
    answer:
      "Yes. People sometimes deduct too much, too little, or the wrong kinds of debts without checking the approach they follow.",
  },
  {
    question: "Why do outdated metal or portfolio prices matter?",
    answer:
      "Because current value often matters in practical zakat worksheets. Using old values can materially distort both threshold comparisons and the final estimate.",
  },
  {
    question: "Can someone accidentally double count assets?",
    answer:
      "Yes. This can happen when the same money is reflected across cash balances, investment transfers, business accounts, or joint family tracking without careful separation.",
  },
  {
    question: "Should I rely only on an online calculator?",
    answer:
      "A calculator is useful for arithmetic, but complex cases often still need review with a qualified scholar or local Islamic authority.",
  },
];

export const metadata: Metadata = {
  title: "Common Zakat Mistakes",
  description,
  alternates: {
    canonical: "/common-zakat-mistakes",
  },
  openGraph: {
    title: "Common Zakat Mistakes",
    description,
    url: "/common-zakat-mistakes",
  },
};

export default function CommonZakatMistakesPage() {
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
            Common zakat mistakes
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zakat mistakes are often not caused by carelessness or bad
            intentions. They usually happen because modern financial life is
            fragmented. Savings can sit in multiple banks, investments may be
            split between taxable and retirement accounts, precious metals may
            be stored in several places, and debts can be a mixture of short-term
            obligations and long-term financing. That makes it surprisingly easy
            to miss something important or count the same value twice.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page covers common zakat mistakes in an educational tone. It
            does not offer definitive religious rulings, and it does not assume
            that one scholarly approach resolves every case. Instead, it focuses
            on the practical errors people often make when trying to calculate
            zakat in the US, Canada, UK, Australia, and similar financial
            environments. If you already know your preferred method, Drutilio’s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            can help with the arithmetic. If you need the broader framework,
            start with{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Mistake 1: Looking at only one account balance">
            <p>
              One of the most common mistakes is treating zakat as if it were
              only about the money in a checking account. In reality, many
              households hold wealth across savings accounts, brokerage accounts,
              employer plans, gold, silver, business cash, receivables, and
              other categories. Looking at only one account can create a false
              sense of simplicity.
            </p>
            <p>
              This problem shows up especially often with people who save in
              multiple places for practical reasons. There may be a household
              emergency fund, a separate tax savings account, a child-related
              savings bucket, an online brokerage, and a side-business payment
              account. Each one may seem small alone, but together they can
              materially change the zakat picture.
            </p>
            <p>
              The fix is not complicated conceptually, but it does require
              discipline: gather the relevant categories before calculating. A
              calculator works best after a person has collected the assets, not
              before.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 2: Missing gold, silver, or stored valuables">
            <p>
              Precious metals are often overlooked because they do not appear on
              ordinary banking dashboards. Gold jewelry may live in a safe or a
              family drawer. Silver bars may sit in a box that hasn&apos;t been
              checked for months. Coins may be held partly as collectibles and
              partly as savings. When people review only their digital accounts,
              these items can disappear from the conversation entirely.
            </p>
            <p>
              This is one reason the guide on{" "}
              <Link
                href="/zakat-on-gold-and-silver"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on gold and silver
              </Link>{" "}
              matters so much. The question is not only whether metals exist,
              but also how they are valued and whether certain forms of jewelry
              are included under the approach being followed.
            </p>
            <p>
              Missing metals entirely is usually a bigger error than spending
              time deciding between two good-faith valuation methods. First make
              sure the asset is on the worksheet. Then refine the method.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 3: Mishandling investments">
            <p>
              Investments are another frequent source of error. Some people
              forget taxable brokerage assets because they think of them as
              “long-term money” rather than current wealth. Others treat every
              equity holding exactly the same without asking whether trading
              activity, accessible value, or account structure changes the
              analysis.
            </p>
            <p>
              Problems also arise when dividends, cash sweep balances, or recent
              investment transfers are ignored. A brokerage account may have a
              visible position value and a separate cash balance, and both can
              matter. On the other hand, a person can also accidentally double
              count if they include both a transferred cash amount and the new
              investment balance that already absorbed it.
            </p>
            <p>
              This is why it helps to think through categories slowly. A clear
              asset map is more valuable than a fast guess.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 4: Treating retirement accounts casually">
            <p>
              Retirement accounts are often handled too casually in either
              direction. Some people ignore them entirely because they are not
              immediately spendable. Others include the full balance without
              thinking about taxes, penalties, access restrictions, or scholarly
              differences. Neither shortcut is especially careful.
            </p>
            <p>
              The page on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>{" "}
              exists for exactly this reason. 401(k) plans, IRAs, RRSPs, and
              pensions often require a more deliberate method than ordinary cash
              or taxable brokerage holdings.
            </p>
            <p>
              A good rule of thumb is that if an asset carries meaningful access
              restrictions or future tax consequences, it deserves separate
              thought rather than being casually folded into or out of the
              worksheet.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 5: Deducting debts without a clear method">
            <p>
              Debt mistakes happen in both directions. Some people deduct every
              balance they can think of, including large long-term obligations
              that may not reduce the zakat base in the same way under their
              preferred approach. Others fail to deduct clearly due short-term
              obligations and end up overstating the zakatable base.
            </p>
            <p>
              This matters because liabilities can materially change the final
              number. Student debt, business payables, tax bills, supplier
              balances, credit-card charges, and installment obligations may not
              all be treated identically. A thoughtful method is more important
              than a hurried deduction habit.
            </p>
            <p>
              When in doubt, it helps to separate debts into categories:
              immediate short-term obligations, near-term installments, and
              longer-term financing. Then review how the approach you follow
              handles each type instead of assuming one debt rule fits all.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 6: Double counting the same wealth">
            <p>
              Double counting is surprisingly common in modern financial life. A
              person may transfer money from savings into a brokerage account,
              then accidentally include both the original savings balance and the
              new investment balance because the review dates are not aligned. A
              business owner may count an invoice as a receivable and also count
              the same amount after it has been deposited into business cash
              without adjusting the worksheet.
            </p>
            <p>
              Families can also double count when spouses or relatives share
              partial spreadsheets or overlapping account access. One person may
              include a joint account in full while the other also counts it in
              their own review. This is not a rare edge case. It happens
              whenever recordkeeping is informal.
            </p>
            <p>
              The simplest defense is a single reference date, a single source
              worksheet, and clear notes on what each line item represents.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 7: Relying on outdated prices">
            <p>
              Zakat calculations often depend on current value. That is why
              outdated gold prices, old brokerage screenshots, stale crypto or
              fund values, and remembered numbers from months ago can create a
              real error. The problem is not only precision. It is that the
              values may have moved meaningfully since the last time they were
              checked.
            </p>
            <p>
              This is especially relevant for gold and silver, where both asset
              valuation and nisab discussions can depend on current market value.
              It is also relevant for stocks, ETFs, and any holding whose value
              fluctuates substantially over time.
            </p>
            <p>
              In practice, the best habit is to pick a zakat date and gather the
              most current reasonable values you can on or near that date. A
              neat spreadsheet built on old prices is still an old worksheet.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 8: Confusing revenue, income, and wealth">
            <p>
              This mistake appears often in both personal and business settings.
              A freelancer may think annual income is the key zakat number. A
              business owner may think annual sales are the key number. But
              zakat is not usually a straight tax on revenue. It is much more
              closely tied to qualifying wealth and how that wealth is
              classified.
            </p>
            <p>
              A person can earn a high income and have relatively little net
              zakatable wealth if the money has already been spent or absorbed
              into obligations. Another person may have more modest annual income
              but substantial stored wealth across cash, investments, metals, or
              business assets.
            </p>
            <p>
              That is why income can be relevant context without being the final
              zakat figure.
            </p>
          </ContentSection>

          <ContentSection title="Mistake 9: Treating online tools as rulings">
            <p>
              Calculators are excellent for arithmetic, but they are not
              scholars. They do not decide whether jewelry is included under
              your approach, whether a pension is presently zakatable, how a
              doubtful receivable should be treated, or which debts should be
              deducted. They reflect the numbers and categories you choose.
            </p>
            <p>
              This is why the best use of a tool like Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              is after you have already thought through your method. The tool
              speeds up the math, but it should not replace the judgment and
              guidance needed for complex cases.
            </p>
            <p>
              A calculator and a qualified scholar solve different problems. The
              first helps with arithmetic. The second helps with interpretation.
            </p>
          </ContentSection>

          <ContentSection title="How to avoid these mistakes in practice">
            <p>
              A strong practical routine starts with one review date, one asset
              list, one liability list, and one chosen method. Gather the
              relevant accounts, note the values carefully, separate business and
              personal items where needed, and identify any categories that feel
              uncertain before you begin the arithmetic.
            </p>
            <p>
              Then use the supporting guides. Review{" "}
              <Link
                href="/how-to-calculate-zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                how to calculate zakat
              </Link>{" "}
              for the overall process, the page on{" "}
              <Link
                href="/zakat-on-gold-and-silver"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on gold and silver
              </Link>{" "}
              for metals, and the guide on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>{" "}
              for employer plans and similar assets.
            </p>
            <p>
              After that, the calculator becomes much more useful because the
              worksheet behind it is sound.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is for educational purposes only. Scholarly approaches
              may differ on assets, debts, valuation, nisab, and modern account
              structures. It does not provide a definitive religious ruling,
              legal advice, tax advice, or financial advice.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority familiar with your circumstances. Drutilio can help you
              organize the arithmetic, but it should not replace case-specific
              religious guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
