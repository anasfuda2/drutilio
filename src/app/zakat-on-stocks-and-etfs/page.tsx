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
  "Learn about zakat on stocks and ETFs, including long-term investing, trading portfolios, dividends, accessible value, and retirement-account distinctions in an educational guide.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat on Stocks and ETFs" },
];

const faqItems: FAQItem[] = [
  {
    question: "Are stocks and ETFs always treated the same way for zakat?",
    answer:
      "Not always. Scholarly approaches may differ based on whether the holdings are for long-term investing, active trading, income generation, or another purpose.",
  },
  {
    question: "Do dividends matter in zakat calculations?",
    answer:
      "They often can. Dividends that have been received and remain part of your available wealth are commonly relevant, though broader treatment depends on the method you follow.",
  },
  {
    question: "Should I use market value or only accessible value?",
    answer:
      "Some approaches emphasize current market value, while others pay closer attention to practical access, liquidity, or the underlying nature of the holding.",
  },
  {
    question: "Are stocks inside retirement accounts different from taxable brokerage holdings?",
    answer:
      "They often are discussed separately because retirement accounts may involve access restrictions, taxes, and penalties that do not apply in the same way to ordinary brokerage assets.",
  },
  {
    question: "Can a calculator decide which zakat method I should use?",
    answer:
      "No. A calculator can help total the numbers after you choose an approach, but it does not decide which scholarly interpretation is best for your situation.",
  },
];

export const metadata: Metadata = {
  title: "Zakat on Stocks and ETFs",
  description,
  alternates: {
    canonical: "/zakat-on-stocks-and-etfs",
  },
  openGraph: {
    title: "Zakat on Stocks and ETFs",
    description,
    url: "/zakat-on-stocks-and-etfs",
  },
};

export default function ZakatOnStocksAndEtfsPage() {
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
            Zakat on stocks and ETFs
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zakat on stocks and ETFs is one of the most important modern wealth
            questions for Muslims who invest. Many households in the US, Canada,
            UK, and Australia now hold broad index funds, individual shares,
            dividend ETFs, taxable brokerage assets, and employer-sponsored
            investment accounts. That means zakat planning increasingly has to
            engage with public markets, not just cash and precious metals.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            The challenge is that stocks and ETFs can be held for different
            reasons. Some people actively trade them. Others buy and hold for
            years. Some focus on dividends, while others focus on long-term
            appreciation. Those differences can matter because scholarly
            approaches may not treat every investing style in exactly the same
            way. This page explains the main ideas in an educational tone rather
            than offering a definitive religious ruling.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you want to model the numbers after deciding on an approach,
            Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            can help. For the bigger framework, see{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>
            . If your holdings sit inside retirement wrappers, the guide on{" "}
            <Link
              href="/zakat-on-retirement-accounts"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat on retirement accounts
            </Link>{" "}
            is especially relevant, and the page on{" "}
            <Link
              href="/zakat-on-gold-and-silver"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat on gold and silver
            </Link>{" "}
            can help with another common asset category. The{" "}
            <Link
              href="/zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Zakat hub
            </Link>{" "}
            also gives you a central place to compare the related guides.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Why stocks and ETFs create modern zakat questions">
            <p>
              Stocks and ETFs represent ownership interests, exposure to
              underlying assets, and in many cases ready market value. At the
              same time, not every investor relates to these holdings the same
              way. A day trader, a retirement saver, and a dividend investor may
              all hold equities, but they may understand the purpose of those
              holdings very differently.
            </p>
            <p>
              That matters for zakat because some approaches give significant
              weight to how an asset is being used. A trading portfolio can feel
              more like trade inventory to some people. A long-term investment
              portfolio may raise questions about whether the full market value
              should be counted each year or whether another method better fits
              the purpose and structure of the asset.
            </p>
            <p>
              ETFs add another layer because they are wrappers around many
              underlying holdings. A broad index fund can include cash,
              industrial companies, tech firms, banks, REITs, and more. A
              single number on a statement may be easy to see, but the
              interpretive question is still how that number should be treated
              under the zakat method you follow.
            </p>
          </ContentSection>

          <ContentSection title="Long-term investing and buy-and-hold portfolios">
            <p>
              Many Muslims invest through long-term portfolios rather than short
              term trading accounts. They may buy diversified ETFs, individual
              blue-chip stocks, or retirement-oriented holdings and leave them in
              place for years. Under one broad approach, that current market
              value may still be treated as part of current wealth. Under
              another, the analysis may become more nuanced depending on how the
              holdings are being used and how underlying company assets are
              understood.
            </p>
            <p>
              Some people are comfortable starting from current market value
              because it is transparent and measurable. Others worry that a
              long-term investment position is not identical to cash or
              inventory, especially where the account is not intended to be
              liquidated in the near term. This is one of the reasons scholarly
              approaches can differ even among people looking at the same
              statement.
            </p>
            <p>
              From an educational perspective, the key point is not to assume
              that “I plan to hold it for years” automatically removes the zakat
              question, nor to assume that “it has a ticker symbol” settles the
              full-value method for everyone. Both instincts can oversimplify a
              real area of debate.
            </p>
          </ContentSection>

          <ContentSection title="Trading portfolios may be viewed differently">
            <p>
              Active trading portfolios often feel more straightforward in zakat
              discussions because the holdings are frequently bought and sold and
              are sometimes understood more like tradeable assets than dormant
              ownership positions. Someone who turns over positions regularly may
              already think in terms of current market value and accessible
              wealth, which can make the arithmetic more intuitive.
            </p>
            <p>
              Even then, practical questions remain. What about unsettled cash?
              What about margin use, short-term liabilities, or taxes? Should
              one count the gross portfolio value or the net economically owned
              position? These are the kinds of questions where investing
              mechanics and zakat reasoning intersect.
            </p>
            <p>
              The takeaway is that trading activity can influence why a
              particular method feels persuasive, but it does not eliminate the
              need for careful classification.
            </p>
          </ContentSection>

          <ContentSection title="Dividends and distributions">
            <p>
              Dividends often matter because they create clearly realized cash.
              If dividend payments or ETF distributions have already been
              received and remain part of your available wealth, they are often
              easier to think about than the broader treatment of the underlying
              holdings. Cash that has arrived in the account and remains under
              your control is frequently one of the least ambiguous parts of the
              worksheet.
            </p>
            <p>
              The more difficult question is whether dividend-oriented investing
              changes how the underlying holdings themselves are viewed. Some
              people see income-producing holdings as a reason to think more
              carefully about asset purpose. Others do not distinguish sharply
              between growth and income funds for zakat purposes. Again, the
              existence of multiple thoughtful methods is part of the reality
              here.
            </p>
            <p>
              Practically speaking, dividends should at least prompt better
              recordkeeping. Once cash distributions arrive, they can become easy
              to overlook if they have been partially reinvested, swept into a
              money market balance, or mixed with other account cash.
            </p>
          </ContentSection>

          <ContentSection title="Accessible value and liquidity">
            <p>
              Accessible value is a helpful concept because it asks what the
              investor really controls in usable terms. In a taxable brokerage
              account, accessibility may be relatively direct. In a restricted
              or tax-advantaged account, it may be less so. Even in a plain
              brokerage account, there may be questions about pending trades,
              margin balances, or tax consequences if positions are sold.
            </p>
            <p>
              Some scholarly approaches and practical advisors therefore give
              more weight to what is actually available or reasonably realizable.
              Others prefer to keep the method simple and use the current market
              value of the holdings. Neither idea should be caricatured. Each is
              trying to connect zakat to a meaningful concept of wealth.
            </p>
            <p>
              This is one reason a calculation can change significantly depending
              on account structure, not just portfolio size. Two investors with
              the same ETF balance may feel very different about accessibility if
              one holds the assets in a regular taxable account and the other
              holds them inside a retirement wrapper.
            </p>
          </ContentSection>

          <ContentSection title="Why retirement accounts should be treated separately">
            <p>
              Stocks and ETFs inside retirement accounts often need to be thought
              about separately from ordinary taxable brokerage holdings. The
              underlying investments may look similar, but the account wrapper
              changes practical access, tax consequences, and sometimes even
              ownership expectations in the mind of the investor.
            </p>
            <p>
              That is why Drutilio keeps a separate guide for{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>
              . A person may feel comfortable using one method for taxable ETFs
              in a brokerage account and a more cautious or qualified method for
              the same asset class when it sits inside a 401(k), IRA, RRSP, or
              pension-linked environment.
            </p>
            <p>
              Keeping those categories conceptually separate usually makes the
              final zakat worksheet more honest and easier to explain.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: a US investor with ETFs and dividend cash">
            <p>
              Imagine a Muslim investor in the United States with a taxable
              brokerage account holding $35,000 in broad-market ETFs and $1,200
              in unspent dividend cash. Under a simple current-value method,
              they may start from the present market value of the portfolio and
              add the cash already received. Under a more qualified method, they
              may still review whether all holdings should be counted in exactly
              that way, but the arithmetic begins from the same visible numbers.
            </p>
            <p>
              If that investor also has a 401(k), they may deliberately handle
              the retirement account separately rather than bundling everything
              together. That alone can prevent confusion and double counting.
            </p>
            <p>
              Once the categories are separated, the taxable brokerage position
              can be entered into the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              more clearly.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: a long-term investor in Canada or the UK">
            <p>
              Imagine a long-term investor in Canada or the UK with a modest
              taxable ETF portfolio, a separate retirement account, and some
              dividend reinvestment. Their main question may not be “Can I value
              this?” but rather “Should I treat my long-term holdings the same
              way I would treat cash or trading assets?” That is a legitimate
              question, and it is exactly where scholarly methods can diverge.
            </p>
            <p>
              One educationally responsible way to handle this is to model more
              than one scenario. A person might run a current-value estimate and
              then compare it with a narrower method based on the guidance they
              trust. This helps them understand the practical effect of the
              method instead of arguing only in abstractions.
            </p>
            <p>
              The goal is not to create anxiety, but clarity. Once the numbers
              are organized, the person can take a more focused question to a
              scholar or local Islamic authority if needed.
            </p>
          </ContentSection>

          <ContentSection title="Common mistakes with stocks and ETFs">
            <p>
              One common mistake is mixing taxable brokerage assets with
              retirement-account assets and assuming they should all be treated
              identically. Another is forgetting cash balances, sweep accounts,
              or recent dividends that remain part of available wealth. Some
              people also rely on outdated prices or rough memory instead of
              using a consistent value on the zakat date.
            </p>
            <p>
              Another mistake is jumping straight to arithmetic without deciding
              what method is being used. A calculator is only as good as the
              classification choices behind it. If those choices are muddy, the
              final number may look precise without actually being well-founded.
            </p>
            <p>
              Finally, some investors assume that because an ETF is diversified,
              the zakat question becomes simpler automatically. Diversification
              can reduce investment risk, but it does not remove the need for a
              zakat method.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is educational only. Scholarly approaches may differ on
              long-term investing, trading portfolios, dividend treatment,
              accessible value, and how public-market holdings should be treated
              in different account structures. The correct method for a specific
              case may depend on the account type, how the assets are used, and
              the guidance you follow.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority familiar with modern investing structures. Drutilio can
              help you organize the arithmetic, but it should not replace
              case-specific religious guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
