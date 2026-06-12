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
  "Learn about zakat on retirement accounts, including common scholarly approaches to 401(k), IRA, RRSP, and pension assets for Muslims in the US, Canada, UK, and Australia.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat on Retirement Accounts" },
];

const faqItems: FAQItem[] = [
  {
    question: "Are retirement accounts always subject to zakat?",
    answer:
      "Not in exactly the same way under every scholarly approach. Many people agree the topic matters, but they differ on when the zakat base is measured and whether access limits, taxes, or penalties should affect the amount counted.",
  },
  {
    question: "How do 401(k) and IRA accounts fit into zakat calculations?",
    answer:
      "They are commonly discussed as retirement assets that may carry restrictions, tax consequences, and investment growth. Some approaches focus on full current value, while others consider what is accessible or what would remain after penalties and taxes.",
  },
  {
    question: "Do RRSP and pension accounts raise similar issues?",
    answer:
      "Yes. RRSPs, pensions, and employer-sponsored retirement plans often raise the same core questions: ownership, accessibility, withdrawal constraints, and how much of the balance should be treated as presently zakatable.",
  },
  {
    question: "Can a zakat calculator settle the ruling on retirement accounts?",
    answer:
      "No. A calculator can help with the arithmetic once you choose an approach, but it cannot decide which scholarly view best fits your circumstances.",
  },
  {
    question: "What is the safest next step if I am unsure?",
    answer:
      "Use a calculator to organize the numbers, then consult a qualified scholar or local Islamic authority who understands your retirement system and the view you follow.",
  },
];

export const metadata: Metadata = {
  title: "Zakat on Retirement Accounts",
  description,
  alternates: {
    canonical: "/zakat-on-retirement-accounts",
  },
  openGraph: {
    title: "Zakat on Retirement Accounts",
    description,
    url: "/zakat-on-retirement-accounts",
  },
};

export default function ZakatOnRetirementAccountsPage() {
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
            Zakat on retirement accounts
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Retirement accounts are one of the most common modern questions in
            zakat planning. Muslims in the US, Canada, the UK, and Australia
            often hold meaningful wealth in 401(k) plans, IRAs, RRSPs, pensions,
            workplace superannuation-like structures, and other tax-advantaged
            accounts that were not designed with zakat calculations in mind.
            That creates a practical tension: the assets may be real, but access
            to them may be delayed, limited, taxed, or penalized.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page is an educational guide to the main ideas people consider
            when thinking about zakat on retirement assets. It does not present
            a single scholarly opinion as universally binding, and it does not
            offer a definitive religious ruling. The goal is to explain the
            common approaches clearly so you can understand the arithmetic,
            recognize the areas of disagreement, and know when to ask a
            qualified scholar or local Islamic authority for case-specific
            guidance.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you want to model numbers while you read, Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            can help you estimate the arithmetic once you choose an approach.
            For the broader framework, the guide on{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>{" "}
            gives a wider overview of assets, debts, and common calculation
            steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Why retirement accounts create zakat questions">
            <p>
              Retirement accounts sit in an unusual middle space. They are often
              clearly owned in some meaningful sense, and they may represent a
              major part of a household&apos;s wealth. At the same time, they may
              not be fully accessible today. A worker might face age-based
              restrictions, early-withdrawal penalties, employer rules, tax
              consequences, or vesting conditions. In some cases, a balance may
              be visible on a statement but not practically liquid in the same
              way as cash in a bank account.
            </p>
            <p>
              In classical zakat discussions, liquid wealth and directly owned
              assets are usually easier to classify. Modern retirement systems,
              however, introduce questions about timing, control, and valuation.
              That is why thoughtful people can agree that zakat matters here
              while still disagreeing about how the amount should be measured in
              a given year.
            </p>
            <p>
              Another reason the topic is complicated is that retirement systems
              differ by country and employer. A private 401(k) in the United
              States is not identical to a Canadian RRSP, a UK pension, or an
              Australian retirement arrangement. Even within one country, the
              details of access, employer contributions, withdrawal timing, and
              tax structure can vary. The result is that zakat treatment often
              depends not only on fiqh reasoning but also on the practical rules
              of the specific account.
            </p>
          </ContentSection>

          <ContentSection title="Are retirement accounts subject to zakat?">
            <p>
              A common starting answer is that retirement wealth may be subject
              to zakat in some form, but the exact treatment is one of the main
              points of scholarly discussion. Some people look first at the fact
              of ownership: if the account belongs to you and has real value,
              they see a strong reason to include it in the zakat conversation.
              Others focus more on present access and say that a balance locked
              behind major restrictions should not always be treated like cash in
              hand.
            </p>
            <p>
              This difference in emphasis leads to different practical methods.
              One approach may count the full current value of the account.
              Another may count only the portion that is actually accessible. A
              third may consider the present value after taxes or penalties. Yet
              another may defer the obligation until withdrawal or effective
              control becomes possible. These approaches are not interchangeable,
              and each can rest on a distinct line of reasoning.
            </p>
            <p>
              The most responsible way to read this issue is to avoid assuming
              that one short internet answer settles it for everyone. A good
              educational resource should show the main contours of the debate,
              help with the arithmetic, and then point people toward qualified
              guidance when the account structure or personal situation is
              complex.
            </p>
          </ContentSection>

          <ContentSection title="Common scholarly approaches">
            <p>
              One common approach is to treat retirement assets as wealth that
              should be counted now, at or near their current value. The logic
              here is often that the account belongs to the individual, has real
              economic value, and represents wealth that is accumulating in their
              name. People who follow this approach may feel that delaying zakat
              on the entire balance understates a real part of personal wealth.
            </p>
            <p>
              A second approach is to count only what is accessible today, or
              what would remain after expected taxes and penalties. This
              framework often tries to connect zakat more closely to practical
              control and usable value. If an account has a large statement
              balance but a person cannot reasonably withdraw it without a major
              haircut, some scholars and advisors prefer to work from the amount
              that is closer to actual realizable wealth.
            </p>
            <p>
              A third approach is to defer zakat on some or all of the balance
              until the funds are withdrawn or come within clear control. This
              line of thinking gives significant weight to the idea that
              restricted assets do not operate like ordinary liquid savings.
              Under this model, zakat may become more relevant when the assets
              are received or become truly available for use.
            </p>
            <p>
              In practice, people sometimes use hybrid methods. For example, a
              person may include only vested employer contributions, or only the
              portion of the account they believe can be meaningfully accessed,
              or only the part attributable to contributions rather than future
              uncertain growth. These hybrids are one reason calculators help
              with the numbers but cannot decide the underlying method.
            </p>
          </ContentSection>

          <ContentSection title="401(k) considerations">
            <p>
              In the United States, a 401(k) is often the first retirement
              account people ask about. A 401(k) may include employee
              contributions, employer match, investment gains, vesting rules,
              plan-specific restrictions, and tax consequences upon withdrawal.
              Each of those features can affect how someone thinks about zakat.
            </p>
            <p>
              Someone who leans toward full-value inclusion may look at the
              total vested balance shown on the plan statement and treat that as
              the starting point. Someone who emphasizes present accessibility
              may instead ask: if I had to reach this money now, what would
              remain after penalties and taxes? Another person may say the
              account is so retirement-locked that it should not be treated like
              ordinary savings at all until later.
            </p>
            <p>
              Practical details also matter. Is the employer contribution fully
              vested? Can the account be rolled over? Are there loans against
              the balance? Is there an after-tax or Roth component? None of
              these questions automatically changes the answer in the same way
              for every scholar, but they affect why different conclusions can
              seem reasonable.
            </p>
          </ContentSection>

          <ContentSection title="IRA considerations">
            <p>
              IRAs raise similar questions, though the structure can feel more
              individually controlled than an employer plan. Traditional IRAs
              and Roth IRAs have different tax consequences, different
              withdrawal implications, and potentially different practical
              intuitions about present access. A person may be able to see the
              assets clearly and even have more direct control over the
              underlying investments, but tax treatment still matters.
            </p>
            <p>
              Under one approach, an IRA balance is part of present wealth and
              should be included directly. Under another, the account should be
              adjusted for what a person could actually realize after costs or
              restrictions. Under a more deferral-oriented view, the decisive
              factor may still be whether the assets are truly available without
              major barriers.
            </p>
            <p>
              This is a good example of why two sincere people can reach
              different zakat worksheets from the same account statement. One is
              emphasizing ownership. Another is emphasizing liquidity. Both are
              trying to connect the legal and financial structure of the account
              to the purposes of zakat.
            </p>
          </ContentSection>

          <ContentSection title="RRSP considerations">
            <p>
              In Canada, RRSPs often raise many of the same practical questions
              as US retirement accounts. The money is earmarked for retirement,
              tax treatment matters, and the account may be invested in multiple
              asset types. Someone calculating zakat on an RRSP may therefore
              ask not just “What is the balance?” but “What part of this balance
              should be counted this year under the approach I follow?”
            </p>
            <p>
              A current-value method may start with the statement balance. A
              realizable-value method may think about tax drag or effective
              access. A deferral-based method may give more weight to when the
              funds are actually available. Because Canadian households often use
              RRSPs as a major long-term savings vehicle, this is not a small
              side question. It can materially affect the amount of zakat
              estimated in a given year.
            </p>
            <p>
              That is one reason Muslims in Canada often benefit from local
              guidance. A scholar or advisor who understands both zakat
              principles and the way RRSPs function in practice can help make a
              general principle more concrete for a real family situation.
            </p>
          </ContentSection>

          <ContentSection title="Pension considerations">
            <p>
              Pensions can be even less straightforward than self-directed
              retirement accounts. Some pensions promise future income but do
              not give the account holder a clearly accessible present balance.
              Others provide statements that suggest present value but still
              restrict control heavily. Defined benefit plans, public pensions,
              and employer guarantees may create a different practical picture
              than an individual investment account.
            </p>
            <p>
              Because of that, pensions often push the debate toward questions
              of certainty and control. Is the person dealing with presently
              owned wealth that merely happens to be restricted, or with a
              future entitlement that should be treated more like an expected
              benefit than current zakatable property? Scholars may answer that
              differently depending on the exact design of the plan.
            </p>
            <p>
              For people in the UK, Australia, or elsewhere with strong
              employer-based retirement systems, pensions are often where an
              “easy online answer” becomes least convincing. The more the plan
              depends on future conditions, employer structures, or payout
              formulas, the more important it is to avoid overconfidence and ask
              for qualified guidance if the amount is significant.
            </p>
          </ContentSection>

          <ContentSection title="Practical examples">
            <p>
              Example one: imagine a Muslim professional in the US with
              $18,000 in cash savings and a 401(k) balance of $90,000. Under a
              full-value approach, they may include the savings plus the entire
              retirement balance, then subtract deductible debts as appropriate,
              and apply the usual 2.5% rate to the resulting zakat base.
              Under a realizable-value approach, they may instead estimate what
              portion of the 401(k) would remain after taxes and penalties and
              use that lower number in the calculation.
            </p>
            <p>
              Example two: imagine a Canadian family with an RRSP and a small
              pension interest. They may include the RRSP differently from the
              pension if they view the RRSP as more directly owned and the
              pension as less accessible or less clearly realized. The arithmetic
              can be done with the same{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              , but the inputs change depending on how the account types are
              classified.
            </p>
            <p>
              Example three: imagine a UK or Australian worker who has
              significant retirement wealth but relatively modest liquid
              savings. One method may produce a noticeably higher zakat figure
              if the retirement balance is fully included. Another may delay
              part of the obligation until benefits are more accessible. The
              practical takeaway is not that one example proves a universal
              answer, but that the chosen method can materially change the
              outcome.
            </p>
          </ContentSection>

          <ContentSection title="How to use a calculator responsibly">
            <p>
              A calculator is best used after you decide what you are including,
              not before. If you are unsure whether to count a retirement
              balance in full, in part, or later, the calculator cannot resolve
              that uncertainty by itself. What it can do very well is total the
              numbers once you have an approach in mind.
            </p>
            <p>
              That is why many people first read a broader guide like{" "}
              <Link
                href="/how-to-calculate-zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                how to calculate zakat
              </Link>
              , then model the figures using the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              . That combination helps keep the process honest: first understand
              the categories, then run the arithmetic.
            </p>
            <p>
              If your case is simple and your trusted guidance is clear, this
              may be enough. If your case includes large balances, multiple
              jurisdictions, pensions, vesting complications, or contested debt
              treatment, the calculator should be treated as a worksheet tool
              rather than a self-contained answer.
            </p>
          </ContentSection>

          <ContentSection title="A careful conclusion">
            <p>
              The most balanced takeaway is that retirement accounts often
              matter for zakat, but not always in one universally agreed way.
              Some people will count full current value. Others will count
              accessible or net realizable value. Others will defer some or all
              of the amount until withdrawal or clearer control. Those
              approaches reflect real differences in how scholars think about
              ownership, access, and valuation in modern financial systems.
            </p>
            <p>
              For Muslims in the US, Canada, UK, and Australia, this is one of
              the places where modern account design intersects directly with
              religious obligation. That means precision matters, but humility
              matters too. It is better to use a good calculator and ask a good
              question than to force a quick answer where your situation really
              needs informed guidance.
            </p>
            <p>
              This page is educational only. It does not provide a definitive
              religious ruling, legal advice, tax advice, or financial advice.
              For specific cases, consult a qualified scholar or local Islamic
              authority who understands both the zakat framework you follow and
              the retirement system you are dealing with.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Related resources
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  href: "/calculators/zakat-calculator",
                  title: "Zakat Calculator",
                  description:
                    "Estimate net zakatable assets and 2.5% zakat due once you decide how to classify your retirement holdings.",
                },
                {
                  href: "/how-to-calculate-zakat",
                  title: "How to Calculate Zakat",
                  description:
                    "Read the broader step-by-step guide to savings, gold, silver, investments, debts, and when to use a zakat calculator.",
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
