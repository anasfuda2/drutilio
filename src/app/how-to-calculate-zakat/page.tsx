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
  "Learn how to calculate zakat step by step with a practical guide for Muslims in the US, Canada, UK, and Australia, including savings, gold, silver, investments, debts, and when to use a zakat calculator.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "How to Calculate Zakat" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the usual zakat rate on eligible wealth?",
    answer:
      "A common starting point is 2.5% of net zakatable assets, but how particular assets and debts are treated can vary by scholarly opinion and personal circumstance.",
  },
  {
    question: "Do Muslims in the US, Canada, UK, and Australia calculate zakat differently?",
    answer:
      "The core principles are shared, but practical questions can differ because of retirement systems, tax structures, investment accounts, mortgages, and local scholarly guidance.",
  },
  {
    question: "Should retirement accounts always be included in zakat?",
    answer:
      "Not always in the same way. Access restrictions, penalties, taxes, and scholarly interpretation can all affect treatment, so this is an area where case-specific guidance is often helpful.",
  },
  {
    question: "Can debts reduce zakatable assets?",
    answer:
      "They often can, but the types of debts that are deductible and the amount that should be deducted may differ across scholarly views and situations.",
  },
  {
    question: "When should I use a zakat calculator?",
    answer:
      "A zakat calculator is useful when you want a clear first estimate before checking the details of nisab, asset treatment, and debt treatment with a qualified scholar or local Islamic authority.",
  },
];

export const metadata: Metadata = {
  title: "How to Calculate Zakat Step by Step",
  description,
  alternates: {
    canonical: "/how-to-calculate-zakat",
  },
  openGraph: {
    title: "How to Calculate Zakat Step by Step",
    description,
    url: "/how-to-calculate-zakat",
  },
};

export default function HowToCalculateZakatPage() {
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
            How to calculate zakat step by step
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zakat calculations can feel simple in theory and complicated in real
            life. Many Muslims in the US, Canada, UK, and Australia are working
            with bank savings, investment accounts, retirement plans, gold,
            silver, and different kinds of debts, which means the arithmetic is
            only one part of the picture. This guide explains a practical way to
            think through the process while keeping the tone educational and
            careful about differences in scholarly interpretation.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you want a quick estimate while reading, Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            can help organize the numbers. For related number work, the{" "}
            <Link
              href="/calculators/percentage-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              percentage calculator
            </Link>{" "}
            and{" "}
            <Link
              href="/calculators/compound-interest-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              compound interest calculator
            </Link>{" "}
            may also be useful reference tools. If you want the wider reading
            path in one place, visit the{" "}
            <Link
              href="/zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Zakat hub
            </Link>{" "}
            for Drutilio&apos;s full cluster of calculator and guide pages.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="What is zakat?">
            <p>
              Zakat is one of the core financial obligations in Islam. In broad
              terms, it is an obligatory charitable payment that applies to
              qualifying wealth once certain conditions have been met. Muslims
              often think of it as both an act of worship and a financial duty,
              which is one reason the details matter: the calculation is not
              just bookkeeping, but part of a religious responsibility.
            </p>
            <p>
              At a high level, many zakat calculations begin with the same basic
              structure. First, identify the assets that may be zakatable.
              Second, consider whether deductible debts reduce that amount.
              Third, review whether the wealth meets the relevant threshold and
              conditions under the approach you follow. Finally, apply the usual
              2.5% rate to the net zakatable amount where appropriate.
            </p>
            <p>
              That broad outline is widely recognizable, but the details can be
              nuanced. Gold and silver may be treated differently from a
              retirement account. Business inventory may raise different
              questions than ordinary savings. Some scholars differ on whether
              certain debts reduce the base in full or in part. So it is wise to
              treat any online explanation as a helpful framework rather than a
              universal ruling that overrides qualified guidance.
            </p>
          </ContentSection>

          <ContentSection title="Who needs to pay zakat?">
            <p>
              A person generally needs to pay zakat when their qualifying wealth
              reaches the relevant threshold, often discussed in relation to
              nisab, and remains subject to zakat under the approach they follow.
              In practice, that means the question is not only “How much money
              do I have?” but also “What kind of wealth is this, how long has it
              been held, and how is it treated under the view I rely on?”
            </p>
            <p>
              For Muslims living in countries like the US, Canada, the UK, and
              Australia, modern financial life adds more variables than a simple
              cash-only calculation. People may have employer retirement plans,
              brokerage accounts, tax-advantaged savings vehicles, student debt,
              home loans, or business assets. These are exactly the areas where
              the arithmetic can be easy but the treatment can be debated.
            </p>
            <p>
              That is why many people use a calculator for the math but still
              ask a scholar or local Islamic authority about asset categories
              that are not straightforward. The calculator helps organize the
              numbers. It does not replace a qualified religious opinion where
              one is needed.
            </p>
          </ContentSection>

          <ContentSection title="How to calculate zakat step by step">
            <p>
              A practical step-by-step method starts with listing the assets you
              believe may be zakatable. Common starting categories include cash
              savings, the current value of gold and silver, certain investment
              holdings, and some forms of business assets. Depending on the
              opinion you follow, you may also include all or part of a
              retirement account.
            </p>
            <p>
              Next, total those assets. This gives you a preliminary zakatable
              asset figure. After that, look at debts that may reduce the amount.
              Some people only deduct short-term obligations or amounts currently
              due, while others ask more detailed questions about installment
              debts, business liabilities, or consumer obligations. This is one
              of the places where scholarly guidance matters.
            </p>
            <p>
              Once deductible debts have been considered, subtract them from the
              total zakatable assets to estimate net zakatable wealth. If the
              amount remains above the relevant threshold under the approach you
              use, a common next step is to apply the usual 2.5% zakat rate.
              That is the core calculation shown by Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              .
            </p>
            <p>
              This process is intentionally simple, and that is its main
              strength. It gives you a structured first estimate. But it should
              still sit alongside careful review of nisab, asset treatment, and
              debts. In other words, a step-by-step method is useful not because
              it removes all judgment, but because it helps you know where
              judgment is still required.
            </p>
          </ContentSection>

          <ContentSection title="What assets are usually included?">
            <p>
              Cash savings are often the clearest starting point. If money is
              sitting in checking, savings, or similar liquid accounts, people
              commonly treat it as part of zakatable wealth. Gold and silver are
              also frequently included, whether held as jewelry, bullion, coins,
              or other forms, depending on the view followed and the details of
              the item.
            </p>
            <p>
              Investments can be more varied. Some people include the current
              value of tradeable investments. Others make distinctions based on
              whether holdings are meant for long-term appreciation, business
              ownership, dividend income, or active trading. A simple online
              calculator can accept an investment value, but it cannot settle
              the underlying classification issue for every portfolio.
            </p>
            <p>
              Business assets may also be included, particularly when inventory,
              receivables, or trade goods are part of the zakat discussion. But
              here again the categories can become technical. Operational
              equipment, business cash, sellable goods, and outstanding invoices
              may not all be treated the same way under every approach.
            </p>
          </ContentSection>

          <ContentSection title="What debts can reduce zakatable assets?">
            <p>
              Debts are one of the most common sources of confusion in zakat
              calculations. Many Muslims ask whether they should subtract all
              debts, only short-term debts, only current installments, or only
              debts directly connected to zakatable wealth. The answer often
              depends on the scholarly framework being followed.
            </p>
            <p>
              In practical terms, people commonly start by identifying amounts
              that are currently owed and genuinely payable, then checking how
              those obligations are treated under local guidance. Credit-card
              balances, business liabilities, short-term loans, and other
              obligations may be considered differently from long-term financing
              structures that stretch over many years.
            </p>
            <p>
              For Muslims in Western financial systems, this question often
              comes up around mortgages, student debt, and retirement planning.
              A calculator can help you test the arithmetic after choosing an
              approach, but it cannot tell you which debt treatment is
              religiously strongest for your exact case. That is where a
              qualified scholar or local Islamic authority can add real value.
            </p>
          </ContentSection>

          <ContentSection title="Zakat on savings">
            <p>
              Savings are usually the easiest category for people to understand.
              If you hold cash in liquid accounts and it remains part of your
              available wealth, it is often part of the zakat discussion. For
              many households in the US, Canada, UK, and Australia, this means
              checking balances across checking, savings, high-yield savings,
              and other cash-like accounts at the relevant zakat date.
            </p>
            <p>
              The main benefit of starting with savings is clarity. You usually
              know the number, and you can usually treat it consistently over
              time. If your savings are spread across multiple institutions or
              sub-accounts, it helps to gather them into one worksheet or one
              calculator session so you are not mentally adding and subtracting
              from memory.
            </p>
            <p>
              If you also want to understand how your savings may grow over
              time, Drutilio&apos;s{" "}
              <Link
                href="/calculators/compound-interest-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                compound interest calculator
              </Link>{" "}
              can help frame a different question: future growth rather than
              current zakat liability.
            </p>
          </ContentSection>

          <ContentSection title="Zakat on gold and silver">
            <p>
              Gold and silver often sit near the center of zakat discussions
              because they are tied both to classical zakat concepts and to the
              practical question of valuing physical holdings today. A common
              modern approach is to estimate the current value of the gold and
              silver you hold and include that amount in the asset side of the
              calculation.
            </p>
            <p>
              The difficulty is not usually the arithmetic itself. It is often
              deciding which items count, how they should be valued, and whether
              certain forms of jewelry are treated differently under the opinion
              you follow. That is why many people prefer to separate the
              “What is the value today?” question from the “Is this item fully
              zakatable under my view?” question.
            </p>
            <p>
              Once you have a value you are comfortable using, it can be entered
              alongside savings and other assets in the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              . The calculator handles the addition cleanly, but the underlying
              treatment of the asset should still reflect the guidance you trust.
            </p>
          </ContentSection>

          <ContentSection title="Zakat on investments and retirement accounts">
            <p>
              Investments and retirement accounts are some of the most common
              modern pain points in zakat calculations. A brokerage account may
              contain public equities, funds, cash positions, and dividend
              holdings. A retirement account may be tax-advantaged, locked until
              a certain age, subject to penalties, or partially accessible.
              These details can matter a great deal.
            </p>
            <p>
              Some people include the current market value of certain investment
              assets. Others apply distinctions based on purpose, liquidity, or
              composition. Retirement accounts can be treated even more
              carefully, with some approaches considering accessibility,
              employer-match structures, taxes, or expected withdrawal
              constraints before deciding what amount to count.
            </p>
            <p>
              Because many Muslims in the US, Canada, UK, and Australia hold
              wealth through retirement systems that did not exist in classical
              form, this is exactly the kind of topic where local or trusted
              scholarly guidance can be especially important. The right move is
              often to use a calculator to test scenarios while asking a
              qualified scholar how you should classify the assets in the first
              place.
            </p>
          </ContentSection>

          <ContentSection title="Common mistakes when calculating zakat">
            <p>
              One common mistake is treating the calculator as the ruling rather
              than as the arithmetic tool. Calculators are excellent for adding,
              subtracting, and applying the standard rate. They are much less
              capable of resolving differences in religious interpretation,
              especially around modern assets and debts.
            </p>
            <p>
              Another mistake is mixing time frames. People sometimes combine a
              current balance with an old debt figure, or include one account
              value from months ago and another from the present day. Zakat
              calculations are easier to trust when the figures are gathered as
              consistently as possible around one review date.
            </p>
            <p>
              A third mistake is overlooking small but real asset categories:
              idle cash in multiple apps, precious-metal holdings, side-business
              inventory, or taxable investment balances that do not feel like
              “spending money” but still may matter. On the other side, some
              people over-deduct debts without checking whether their chosen
              approach supports that treatment.
            </p>
          </ContentSection>

          <ContentSection title="When to use a zakat calculator">
            <p>
              A zakat calculator is most useful when you already understand the
              asset categories you want to include and need a clean, repeatable
              way to total them. It is also useful when you are comparing
              scenarios, such as including or excluding a retirement account
              depending on the opinion you follow.
            </p>
            <p>
              It becomes especially valuable for households with multiple asset
              buckets, where simple arithmetic mistakes are easy to make by hand.
              By entering the figures directly into Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              , you can quickly see total assets, deductible debts, net
              zakatable wealth, and the resulting 2.5% estimate.
            </p>
            <p>
              The key is to use the tool at the right stage. First, decide how
              you are classifying your assets and debts under reliable guidance.
              Then use the calculator to make the arithmetic fast, clear, and
              repeatable.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is for educational purposes only. It does not present a
              single scholarly opinion as universally binding, and it does not
              provide religious rulings, legal advice, tax advice, or financial
              advice. Zakat questions can be highly fact-specific, especially
              when modern investment structures, business assets, retirement
              accounts, or complex debts are involved.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority familiar with your circumstances and the framework you
              follow. Drutilio can help you organize the numbers, but it should
              not replace trusted case-specific guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Related tools
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/calculators/zakat-calculator",
                  title: "Zakat Calculator",
                  description:
                    "Estimate total zakatable assets, deductible debts, and zakat due at 2.5%.",
                },
                {
                  href: "/calculators/compound-interest-calculator",
                  title: "Compound Interest Calculator",
                  description:
                    "Model long-term savings growth separately from current zakat obligations.",
                },
                {
                  href: "/calculators/percentage-calculator",
                  title: "Percentage Calculator",
                  description:
                    "Quickly work with 2.5% or other percentage comparisons while reviewing values.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-emerald-400/40 hover:bg-white/[0.07]"
                >
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
