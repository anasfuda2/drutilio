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
  "Learn about zakat on gold and silver, including jewelry, bullion, coins, market value, nisab, and practical examples in an educational guide for Muslims in the US, Canada, UK, and Australia.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat on Gold and Silver" },
];

const faqItems: FAQItem[] = [
  {
    question: "Is zakat due on all gold and silver?",
    answer:
      "Not always in exactly the same way under every scholarly approach. Gold and silver are commonly included in zakat discussions, but questions about jewelry, personal use, and valuation can lead to different conclusions.",
  },
  {
    question: "Should gold jewelry be treated the same as bullion?",
    answer:
      "Not necessarily. Some people treat wearable jewelry differently from investment-style holdings such as bullion or coins, while others take a broader inclusion approach.",
  },
  {
    question: "How is the value of gold and silver usually estimated?",
    answer:
      "A common practical method is to use current market value on the zakat calculation date, but exactly how that value should be measured can depend on the form of the asset and the method you follow.",
  },
  {
    question: "What is nisab in relation to gold and silver?",
    answer:
      "Nisab is the threshold associated with zakat obligation. Some people use a gold benchmark, others use a silver benchmark, and this choice can affect whether zakat becomes due in a given case.",
  },
  {
    question: "Can a calculator decide the ruling for me?",
    answer:
      "No. A calculator is useful for organizing the arithmetic once you know what you are including, but it cannot determine which scholarly interpretation best applies to your situation.",
  },
];

export const metadata: Metadata = {
  title: "Zakat on Gold and Silver",
  description,
  alternates: {
    canonical: "/zakat-on-gold-and-silver",
  },
  openGraph: {
    title: "Zakat on Gold and Silver",
    description,
    url: "/zakat-on-gold-and-silver",
  },
};

export default function ZakatOnGoldAndSilverPage() {
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
            Zakat on gold and silver
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Gold and silver are among the most familiar asset categories in
            zakat discussions, but they can still create real uncertainty in
            practice. Some people hold bullion or coins as a store of value.
            Others hold jewelry for personal use, family traditions, or
            occasional resale. Market prices move, purity can vary, and the way
            people apply nisab may differ depending on whether they look to a
            gold or silver benchmark. All of that means the topic is important,
            but not always as simple as one line of arithmetic.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page explains zakat on gold and silver in an educational way.
            It does not present one scholarly opinion as universally binding,
            and it does not offer a definitive religious ruling. The goal is to
            help Muslims in the US, Canada, UK, Australia, and similar
            contexts understand the main ideas, organize the practical steps,
            and know when to ask a qualified scholar or local Islamic authority
            for more specific guidance.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you want to model the arithmetic as you read, Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            can help. For the wider framework around assets, debts, and timing,
            the guide on{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>{" "}
            is a strong companion, and the page on{" "}
            <Link
              href="/zakat-on-retirement-accounts"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat on retirement accounts
            </Link>{" "}
            helps with another common modern asset category.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Why gold and silver matter in zakat discussions">
            <p>
              Gold and silver have a special place in zakat conversations
              because they connect both to classical discussions of wealth and
              to modern forms of stored value. They can function as adornment,
              heirloom property, emergency savings, or intentional investment.
              That means they are not merely symbolic assets. For many people,
              they hold real economic value and may be among the most important
              non-cash assets they own.
            </p>
            <p>
              In one sense, gold and silver can feel simpler than retirement
              accounts or business assets. A piece of metal can often be weighed,
              valued, and described more directly than a complicated investment
              structure. But in another sense they can be harder, because
              questions of personal use, jewelry, purity, workmanship, and local
              market pricing can all affect how people think about zakat.
            </p>
            <p>
              This is why a careful approach matters. The arithmetic may be
              straightforward once you have a value, but deciding what value to
              use and whether a particular item is included under the view you
              follow may require more thought than people first expect.
            </p>
          </ContentSection>

          <ContentSection title="Is zakat due on gold and silver?">
            <p>
              A common broad answer is that gold and silver are often treated as
              relevant zakatable assets, especially when they function as stored
              wealth or investment-type holdings. But the practical application
              can differ depending on the form of the asset and the scholarly
              approach being followed.
            </p>
            <p>
              Bullion bars and investment coins are often easier to classify in
              zakat conversations because they are commonly held for wealth
              preservation or investment. Jewelry can be more contested. Some
              people treat certain personal-use jewelry differently from gold or
              silver held mainly as stored wealth. Others prefer a broader view
              and include substantial gold jewelry in the zakat calculation.
            </p>
            <p>
              So while many Muslims begin from the assumption that gold and
              silver matter for zakat, the exact treatment of personal-use items
              is one of the places where scholarly diversity becomes visible.
              That is not a flaw in the process. It is simply part of why people
              should be careful before treating one online answer as the only
              valid answer.
            </p>
          </ContentSection>

          <ContentSection title="Jewelry, bullion, and coins">
            <p>
              Jewelry is often the first point of uncertainty. A family may own
              gold jewelry that is worn regularly, saved for special occasions,
              or inherited for long-term safekeeping. Some people ask whether
              all of that should be treated like ordinary investable wealth.
              Others ask whether personal-use items should be treated
              differently. Different scholarly traditions and local practices
              may answer that question differently.
            </p>
            <p>
              Bullion and bars often raise fewer conceptual questions because
              they are usually acquired as wealth holdings rather than adornment.
              The practical task is often to identify purity and market value on
              the zakat date. Investment coins may fall into a similar category,
              though collectible premiums or numismatic features can complicate
              how a person chooses to value them.
            </p>
            <p>
              Coins can therefore sit in a mixed zone. If a coin is held mainly
              for metal value, someone may focus on its bullion worth. If it has
              a large collector premium, another person may ask whether market
              resale value or metal content is the more relevant number. This is
              not an issue every household will face, but it shows why asset
              form matters even when the material itself is familiar.
            </p>
          </ContentSection>

          <ContentSection title="Silver often receives less attention, but it still matters">
            <p>
              Gold usually gets more public attention, but silver is often just
              as important in zakat conversations. Some Muslims actively buy
              silver bars or coins. Others inherit silverware or hold silver as
              part of a broader precious-metals strategy. In some calculations,
              silver matters not only because it is an asset itself but also
              because it may be used as a reference point when thinking about
              nisab.
            </p>
            <p>
              The practical questions for silver often echo those for gold:
              what is the purity, what is the current market value, and is the
              item being treated as stored wealth, personal use, or something
              else? Because silver values are often lower per ounce than gold,
              people may pay less attention to them, but that can lead to
              accidental undercounting when silver holdings are spread across
              several small pieces or accounts.
            </p>
            <p>
              Silver can also become especially important when people discuss
              nisab benchmarks. That is one reason it deserves more than a quick
              footnote in a zakat conversation.
            </p>
          </ContentSection>

          <ContentSection title="How market value is usually approached">
            <p>
              A common practical method is to estimate current market value on
              the zakat date. In broad terms, this means asking what the gold or
              silver is worth at the relevant time rather than what you paid for
              it years ago. That approach keeps the calculation anchored in
              present value, which is often more useful than historical cost.
            </p>
            <p>
              Even then, there are still questions. Should you use the retail
              jewelry price, the scrap value, a spot-based estimate, a dealer
              buyback figure, or a realistic resale price? The answer can depend
              on the kind of item you own and the method you trust. For bullion,
              a market-based metal value may feel relatively simple. For jewelry,
              workmanship and resale reality can complicate things.
            </p>
            <p>
              In educational practice, many people choose a consistent valuation
              method and apply it carefully. The important thing is not
              pretending the valuation question does not exist. A sound
              calculation often begins with being honest about which number you
              are using and why.
            </p>
          </ContentSection>

          <ContentSection title="How nisab enters the discussion">
            <p>
              Nisab is the threshold associated with zakat obligation, and gold
              and silver often play an important role in how people think about
              it. Some Muslims use a gold benchmark. Others use a silver
              benchmark. This choice can materially affect whether someone’s net
              zakatable wealth is treated as having crossed the threshold in a
              given year.
            </p>
            <p>
              The practical significance of that difference is especially visible
              for households whose liquid wealth is meaningful but not very
              large. Under one benchmark, zakat may clearly apply. Under another,
              the result may look less obvious. This is one reason people should
              avoid assuming that a single threshold quote on social media
              resolves the issue for everyone.
            </p>
            <p>
              A careful educational approach is to understand that nisab is part
              of the broader zakat framework, then check the threshold under the
              guidance or methodology you follow. Once that framework is clear,
              the arithmetic can be modeled more confidently using a tool like
              Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="Practical example: gold jewelry">
            <p>
              Imagine a household in Canada or the UK that owns several pieces
              of gold jewelry accumulated over time: a bracelet, a necklace,
              earrings, and a few inherited items kept for family reasons. One
              approach may treat the relevant pieces as includable assets and
              estimate their current market value. Another approach may
              distinguish between routinely worn personal-use jewelry and
              investment-like holdings.
            </p>
            <p>
              The important lesson is not that one answer is always correct for
              all cases. It is that the practical arithmetic depends on the
              method chosen. If the household includes the pieces, the next step
              is often to value them consistently on the zakat date. If the
              household excludes certain personal-use items under the guidance it
              follows, then only the remaining relevant gold value may be
              entered in the calculation.
            </p>
            <p>
              In both cases, the calculator helps with the numbers. It does not
              decide the classification by itself.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: bullion and coins">
            <p>
              Imagine a Muslim family in the United States that has gradually
              built a small emergency holding of gold and silver bullion. They
              own a few gold coins, several silver bars, and some fractional
              pieces bought over the years. Here the practical issue is often
              less about whether the holdings matter and more about how to value
              them cleanly and consistently.
            </p>
            <p>
              One straightforward approach is to estimate present market value
              using a reliable pricing source on the zakat date, then combine
              those values with cash savings and other relevant assets. If the
              family is also considering investment balances or retirement
              assets, they may compare this page with the guide on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>{" "}
              to think through the other half of the picture.
            </p>
            <p>
              The point is that a practical zakat worksheet often involves both
              metal values and other asset categories. Gold and silver may be
              central, but they are rarely the only numbers being reviewed.
            </p>
          </ContentSection>

          <ContentSection title="Common mistakes people make">
            <p>
              One common mistake is using original purchase price instead of a
              current value estimate. If an item has changed significantly in
              value, historical cost may no longer reflect the present wealth
              being considered. Another mistake is forgetting small pieces, such
              as scattered silver holdings or family items that are easy to
              overlook because they are not stored in one obvious place.
            </p>
            <p>
              A third mistake is assuming all jewelry is always treated the same
              way under every opinion. That is exactly the kind of assumption
              that leads to confusion. A more careful approach is to ask what
              method you follow, then apply the arithmetic consistently under
              that framework.
            </p>
            <p>
              People also sometimes confuse nisab discussion with final zakat
              calculation, or assume that once gold or silver is present, the
              rest of the zakat worksheet can be ignored. In reality, precious
              metals are often one important part of a larger asset review.
            </p>
          </ContentSection>

          <ContentSection title="When to use a zakat calculator for gold and silver">
            <p>
              A calculator is most useful once you know what values you want to
              include. If you have already identified the gold and silver items
              you are counting, estimated their market values, and chosen how
              you are treating them under the guidance you follow, then a
              calculator makes the arithmetic fast and repeatable.
            </p>
            <p>
              Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              is useful here because it lets you combine gold and silver with
              savings, investments, debts, and other categories. That reflects
              how real households usually think about zakat: not as one isolated
              metal question, but as part of a broader wealth review.
            </p>
            <p>
              If you are still unsure whether a particular jewelry item should
              be included, or how nisab should be handled under your preferred
              framework, the calculator is still helpful, but only as a what-if
              tool. You can run multiple scenarios while you gather more
              informed guidance.
            </p>
          </ContentSection>

          <ContentSection title="A careful conclusion">
            <p>
              Gold and silver are classic zakat assets in the sense that they
              have long been central to wealth discussions, but modern life
              still leaves room for real uncertainty in how particular items are
              valued and classified. Jewelry, bullion, coins, silver holdings,
              and nisab benchmarks all raise practical questions that can affect
              the final numbers.
            </p>
            <p>
              The most responsible approach is usually a combination of clear
              arithmetic and careful guidance. Use a trusted method for deciding
              what to include. Value the assets consistently on your zakat date.
              Then use a tool like the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              to organize the numbers. If the case is complex, consult a
              qualified scholar or local Islamic authority familiar with the
              framework you follow.
            </p>
            <p>
              This page is educational only. It does not provide a definitive
              religious ruling, legal advice, or financial advice. Its purpose
              is to help you understand the practical questions so you can ask
              better questions and calculate more carefully.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Related resources
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/calculators/zakat-calculator",
                  title: "Zakat Calculator",
                  description:
                    "Estimate total zakatable assets and zakat due once you decide what gold and silver values to include.",
                },
                {
                  href: "/how-to-calculate-zakat",
                  title: "How to Calculate Zakat",
                  description:
                    "Read the broader guide to savings, debts, investments, nisab, and the overall zakat process.",
                },
                {
                  href: "/zakat-on-retirement-accounts",
                  title: "Zakat on Retirement Accounts",
                  description:
                    "Compare how modern retirement assets raise different zakat questions around access, taxes, and valuation.",
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
