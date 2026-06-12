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
  "Learn what nisab means in zakat calculations, including gold nisab, silver nisab, market value changes, why thresholds vary, and practical examples.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "What Is Nisab" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is nisab?",
    answer:
      "Nisab is the threshold associated with zakat obligation. It helps determine when qualifying wealth reaches a level where zakat becomes relevant under the approach being followed.",
  },
  {
    question: "Why do people talk about both gold nisab and silver nisab?",
    answer:
      "Because both gold and silver benchmarks are discussed in zakat calculations, and using one or the other can change the threshold amount in practical terms.",
  },
  {
    question: "Why does the nisab amount seem to change over time?",
    answer:
      "Because the market value of gold and silver changes. If someone uses a market-based benchmark, the threshold in local currency can move with those prices.",
  },
  {
    question: "Does one nisab standard apply universally to every Muslim situation?",
    answer:
      "Not always in practice. People may follow different scholarly approaches or local guidance on how the threshold should be understood and applied.",
  },
  {
    question: "Can a calculator tell me if I definitely owe zakat?",
    answer:
      "A calculator can help organize numbers, but final determinations may still depend on your assets, timing, and the scholarly framework you follow.",
  },
];

export const metadata: Metadata = {
  title: "What Is Nisab?",
  description,
  alternates: {
    canonical: "/what-is-nisab",
  },
  openGraph: {
    title: "What Is Nisab?",
    description,
    url: "/what-is-nisab",
  },
};

export default function WhatIsNisabPage() {
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
            What is nisab?
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nisab is one of the most discussed words in zakat conversations, but
            many people first encounter it only when they try to calculate zakat
            in practical modern circumstances. They may know they have savings,
            gold, investments, or business assets, but they are less certain
            about the threshold question: when does qualifying wealth reach the
            level where zakat becomes relevant in the first place?
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page explains nisab in an educational way. It covers gold
            nisab, silver nisab, market-value shifts, why threshold amounts seem
            to vary, and how practical examples can help. It does not present a
            single scholarly opinion as universally binding, and it does not
            provide a definitive ruling. Instead, it aims to give Muslims in the
            US, Canada, UK, Australia, and similar settings a clearer framework
            for thinking about the threshold question before using Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>
            .
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            For the wider calculation process, the guide on{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>{" "}
            is the main companion page. If your wealth includes precious metals
            or retirement accounts, the pages on{" "}
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
            will help with those specific areas.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Nisab is a threshold concept, not just a number">
            <p>
              Nisab is often described as the minimum threshold of qualifying
              wealth associated with zakat obligation. In plain language, it
              helps answer the question: has a person&apos;s relevant wealth reached
              a level where zakat becomes part of the discussion under the
              approach they follow?
            </p>
            <p>
              What makes nisab tricky is that people often want it reduced to a
              single static local-currency figure. But the concept is more than
              that. It is tied to benchmark measures, commonly discussed through
              gold and silver, and the practical local-currency amount can shift
              as market prices move.
            </p>
            <p>
              So when people ask, “What is nisab this year?” they are often
              really asking a bundle of questions at once: which benchmark am I
              using, how is it being valued today, and how does that value map
              onto the assets I actually hold?
            </p>
          </ContentSection>

          <ContentSection title="Gold nisab and silver nisab">
            <p>
              Gold nisab and silver nisab are both commonly mentioned because
              they reflect benchmark ways of thinking about the threshold. In
              practical terms, using a gold-based threshold can lead to a
              different local-currency amount than using a silver-based
              threshold, because gold and silver prices differ significantly in
              the modern market.
            </p>
            <p>
              This difference matters most for people whose net zakatable wealth
              is meaningful but not especially high. Under one benchmark, the
              threshold may be clearly crossed. Under the other, the practical
              result may look very different. That is one reason people
              sometimes seem to quote different nisab numbers even when they are
              speaking sincerely and trying to be accurate.
            </p>
            <p>
              The educational point is not that one benchmark can never be used
              or that another always must be used. The point is that threshold
              discussion depends on method, and method should be understood
              before numbers are treated as final.
            </p>
          </ContentSection>

          <ContentSection title="Why threshold amounts vary over time">
            <p>
              Nisab values in local currency often vary because market prices
              vary. If the threshold is being interpreted through gold or silver
              market value, then the amount in dollars, pounds, or other local
              currency will naturally move with those prices. This can make
              online nisab tables look inconsistent unless you know which metal
              benchmark and which valuation date were used.
            </p>
            <p>
              In practical terms, this means a figure someone saw last year may
              not be the right benchmark to use this year. It also means that
              quotes from different mosques, calculators, scholars, or websites
              may vary if they are based on different dates or different
              benchmark assumptions.
            </p>
            <p>
              That is one reason updated pricing matters. A zakat worksheet that
              uses current values is usually more transparent than one that
              relies on remembered or outdated numbers.
            </p>
          </ContentSection>

          <ContentSection title="Why some people use gold and others use silver">
            <p>
              Different communities, scholars, and educational resources may
              emphasize different nisab benchmarks. For the person trying to pay
              zakat conscientiously, the important lesson is not to panic when
              different numbers appear, but to understand that the numbers may
              reflect different methodologies rather than simple error.
            </p>
            <p>
              Some people are drawn to a gold-based figure because it can feel
              more aligned with a higher threshold and a certain understanding
              of substantial wealth. Others prefer a silver-based figure because
              it may capture a lower threshold and therefore bring zakat into
              view for more people. These are not merely financial preferences;
              they reflect deeper interpretive reasoning.
            </p>
            <p>
              Since this page is educational and not a ruling, the most honest
              recommendation is to identify the approach you follow, understand
              why it is being used, and apply it consistently rather than
              switching standards casually from year to year.
            </p>
          </ContentSection>

          <ContentSection title="Market value and practical calculation">
            <p>
              In real life, people usually need to translate the threshold into
              a current local-currency amount. That often means asking what the
              relevant gold or silver benchmark is worth on the zakat date.
              Because market prices change, the number is not permanently fixed.
            </p>
            <p>
              A practical workflow might look like this: first identify the
              benchmark method you are using, then determine the current value of
              that benchmark, then compare your net zakatable assets against that
              threshold, and only then move on to the arithmetic of the zakat
              amount itself using a tool like Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              .
            </p>
            <p>
              This is why nisab should not be treated as an isolated trivia
              figure. It belongs inside the larger zakat calculation process.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: savings near the threshold">
            <p>
              Imagine a Muslim household in the UK with savings that sit near
              the threshold level. If they compare their net zakatable assets
              against one benchmark, they may conclude zakat clearly applies.
              If they compare against another, they may feel less certain.
              Nothing about this example means someone is being careless. It
              simply shows that methodology changes the practical answer.
            </p>
            <p>
              In that situation, the helpful move is not to argue only from a
              single screenshot or a random social-media number. Instead, it is
              to understand the benchmark being used, then compare assets and
              liabilities carefully under that framework.
            </p>
            <p>
              Once the threshold question is clarified, the rest of the
              calculation becomes much easier to handle consistently from year to
              year.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: a family with gold, savings, and investments">
            <p>
              Now imagine a family in the US or Canada with liquid savings, a
              small amount of gold, and a taxable ETF portfolio. Their nisab
              question is not only about one account balance. It is about net
              qualifying wealth across several categories. A threshold benchmark
              only becomes meaningful after the relevant assets are identified
              and liabilities are considered.
            </p>
            <p>
              That is why the page on{" "}
              <Link
                href="/how-to-calculate-zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                how to calculate zakat
              </Link>{" "}
              is so useful alongside a nisab discussion. Nisab is one piece of
              the process, not the entire process. The same is true if part of
              the family&apos;s wealth sits in gold or retirement accounts, where
              the related guides become important.
            </p>
            <p>
              In practice, the cleanest workflow is to organize the asset
              picture first, then apply the threshold method you follow, then
              calculate the zakat due if the threshold is met.
            </p>
          </ContentSection>

          <ContentSection title="Common misunderstandings about nisab">
            <p>
              One misunderstanding is that nisab alone decides the whole zakat
              outcome. In reality, threshold is only one part of the picture.
              Another misunderstanding is that there must always be one single
              published number that all sincere Muslims everywhere must use in
              exactly the same way. In practice, threshold discussions often
              depend on benchmark method, date, local context, and scholarly
              guidance.
            </p>
            <p>
              A third misunderstanding is to compare gross wealth to the
              threshold without thinking about deductible debts or the nature of
              the assets. If someone is near the line, those distinctions can be
              very important. Yet another mistake is to rely on outdated gold or
              silver values without checking current market conditions.
            </p>
            <p>
              Good zakat practice is usually less about finding the fastest
              answer and more about following a clear method consistently.
            </p>
          </ContentSection>

          <ContentSection title="Why educational caution matters">
            <p>
              Nisab is exactly the kind of concept that can be oversimplified by
              short internet summaries. People want certainty, and threshold
              numbers feel concrete. But the threshold question is bound up with
              interpretive choices, and those choices can affect real religious
              practice. That is why educational resources should explain the
              range of approaches instead of pretending the topic is purely
              mechanical.
            </p>
            <p>
              This does not mean zakat is impossible to calculate. It means the
              calculation becomes more trustworthy when method and arithmetic are
              both clear. That is also why a calculator and a scholar are not
              competitors. They solve different parts of the problem.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is for educational purposes only. Scholarly approaches
              may differ on gold nisab, silver nisab, threshold application, and
              how to compare modern assets against benchmark values. It does not
              provide a definitive religious ruling, legal advice, or financial
              advice.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority familiar with the framework you follow. Drutilio can help
              you organize the numbers, but it should not replace case-specific
              religious guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
