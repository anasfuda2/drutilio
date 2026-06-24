import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/content/ContentSection";
import { Container } from "@/components/layout/Container";
import { ToolNavigationBar } from "@/components/navigation/ToolNavigationBar";
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
import { getCalculatorsByDirectoryCategory } from "@/lib/calculators";

const description =
  "Explore Drutilio's zakat hub with a zakat calculator, practical guides on nisab, gold, retirement accounts, stocks, business assets, and common zakat mistakes for Muslims in the US, Canada, UK, and Australia.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Drutilio's zakat hub?",
    answer:
      "The hub brings Drutilio's zakat calculator and related educational guides into one place so readers can move from basic concepts to more specific asset questions without relying on a single page to answer everything.",
  },
  {
    question: "Can this zakat hub give a definitive ruling?",
    answer:
      "No. The hub is educational and practical, but scholarly approaches can differ, especially for retirement accounts, business assets, jewelry, debts, and investment holdings.",
  },
  {
    question: "Who is this zakat content written for?",
    answer:
      "It is especially helpful for Muslims in the US, Canada, the UK, and Australia who are working with modern savings accounts, brokerage accounts, retirement plans, gold holdings, and business income.",
  },
  {
    question: "Where should I start if I just want a quick estimate?",
    answer:
      "A common starting point is the zakat calculator, followed by the how-to guide so you can review which assets and debts you want to include before relying on the estimate.",
  },
  {
    question: "When should I ask a scholar or local Islamic authority?",
    answer:
      "You should consider asking for qualified guidance when your situation involves complicated debts, business inventory, retirement restrictions, precious metals used as jewelry, or differing scholarly advice in your community.",
  },
];

type HubCard = {
  title: string;
  description: string;
  href: string;
};

const calculatorCard: HubCard = {
  title: "Zakat Calculator",
  description:
    "Estimate net zakatable assets and zakat due with a clean tool designed for savings, metals, investments, retirement balances, business assets, and debts.",
  href: "/calculators/zakat-calculator",
};

const basicsCards: HubCard[] = [
  {
    title: "How to Calculate Zakat",
    description:
      "A step-by-step guide to organizing assets, debts, and common calculation decisions in a practical way.",
    href: "/how-to-calculate-zakat",
  },
  {
    title: "What Is Nisab?",
    description:
      "Understand gold nisab, silver nisab, market pricing, and why thresholds can look different from one source to another.",
    href: "/what-is-nisab",
  },
];

const assetCards: HubCard[] = [
  {
    title: "Zakat on Gold and Silver",
    description:
      "Read about bullion, coins, jewelry, market value, and how precious metals fit into zakat calculations.",
    href: "/zakat-on-gold-and-silver",
  },
  {
    title: "Zakat on Retirement Accounts",
    description:
      "Review common approaches to 401(k), IRA, RRSP, pension, and other retirement balances.",
    href: "/zakat-on-retirement-accounts",
  },
  {
    title: "Zakat on Business Assets",
    description:
      "Explore inventory, receivables, cash, short-term liabilities, and the questions that matter for owners and freelancers.",
    href: "/zakat-on-business-assets",
  },
  {
    title: "Zakat on Stocks and ETFs",
    description:
      "Compare long-term investing, trading portfolios, accessible value, dividends, and retirement account distinctions.",
    href: "/zakat-on-stocks-and-etfs",
  },
];

const supportCards: HubCard[] = [
  {
    title: "Common Zakat Mistakes",
    description:
      "See the errors people often make with debts, metals, investments, outdated prices, and double counting.",
    href: "/common-zakat-mistakes",
  },
  {
    title: "Zakat Calculator USA",
    description:
      "A US-focused guide using USD examples and common questions around 401(k), IRA, stocks, savings, and gold.",
    href: "/zakat-calculator-usa",
  },
];

function HubCardGrid({
  cards,
  columns = "md:grid-cols-2",
}: {
  cards: HubCard[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
        >
          <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-200">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {card.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Zakat Guide and Calculator Hub",
  description,
  alternates: {
    canonical: "/zakat",
  },
  openGraph: {
    title: "Zakat Guide and Calculator Hub",
    description,
    url: "/zakat",
  },
};

export default function ZakatHubPage() {
  const zakatToolItems = getCalculatorsByDirectoryCategory("Zakat").map(
    (tool) => ({
      href: `/calculators/${tool.slug}`,
      label: tool.title,
    }),
  );

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
            Zakat hub
          </h1>
          <ToolNavigationBar title="Zakat tools" items={zakatToolItems} />
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Drutilio&apos;s zakat hub is a central place to learn the basics of
            zakat, estimate your numbers with a calculator, and explore common
            asset-specific questions in a careful, educational way. Many Muslims
            in the US, Canada, the UK, and Australia are not only dealing with
            cash savings. They may also hold brokerage accounts, retirement
            balances, business income, gold, silver, and debts that affect the
            annual calculation. That reality is exactly why a useful zakat
            resource has to be more than one short tool or one short article.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This hub is designed to help you move from broad concepts to more
            specific questions without pretending that every case has one
            universally agreed answer. The arithmetic often starts from a simple
            pattern: identify zakatable assets, consider deductible debts under
            the approach you follow, and apply the usual 2.5% rate where it is
            appropriate. But once you begin asking about jewelry, investment
            accounts, retirement restrictions, business receivables, or nisab
            thresholds, scholarly approaches may differ. That is why Drutilio
            treats this section as educational support rather than a source of
            definitive rulings.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you want the fastest starting point, begin with the{" "}
            <Link
              href={calculatorCard.href}
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            and then read the companion guides below. If your case involves
            unusual assets, family-held jewelry, complicated debt, or local
            religious guidance that differs from what you see online, consider
            using these pages as a framework and then checking the details with
            a qualified scholar or local Islamic authority.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Zakat calculator">
            <p>
              For many people, the hardest part of zakat is not the formula but
              getting all the numbers into one place. Drutilio&apos;s{" "}
              <Link
                href={calculatorCard.href}
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              is built to help you estimate total zakatable assets, subtract
              debts, and see a simple zakat due figure. It includes the
              categories that often come up first: cash savings, gold, silver,
              investments, retirement balances, business assets, and debts.
            </p>
            <p>
              The calculator is most useful when you treat it as a structured
              worksheet rather than as a religious decision-maker. It can help
              with the arithmetic, but it cannot decide whether a specific
              retirement balance should be counted at full value, whether
              personal-use jewelry is included under the view you follow, or
              which debts should reduce the total. Those questions belong in the
              supporting guides and, where needed, in conversation with
              qualified religious guidance.
            </p>
            <HubCardGrid cards={[calculatorCard]} columns="md:grid-cols-1" />
          </ContentSection>

          <ContentSection title="Zakat basics">
            <p>
              A good zakat calculation usually begins with two foundation
              questions: what counts as zakatable wealth, and when does that
              wealth cross the relevant threshold? The guide on{" "}
              <Link
                href="/how-to-calculate-zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                how to calculate zakat
              </Link>{" "}
              walks through a practical step-by-step process. The page on{" "}
              <Link
                href="/what-is-nisab"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                what nisab is
              </Link>{" "}
              explains the threshold itself, including why some Muslims pay
              close attention to gold-based and silver-based benchmarks and why
              published thresholds can vary over time.
            </p>
            <p>
              These basics matter because many errors in zakat do not come from
              bad intentions. They come from uncertainty about starting
              assumptions. One person may include every metal holding but forget
              a taxable brokerage balance. Another may deduct a long-term debt
              too aggressively. A third may use an outdated precious-metals
              price. By starting with the basics, you make the later
              asset-specific questions easier to handle.
            </p>
            <HubCardGrid cards={basicsCards} />
          </ContentSection>

          <ContentSection title="Asset-specific zakat guides">
            <p>
              Once the basics are clear, most people need guidance at the asset
              level. That is especially true in countries where Muslims use
              modern financial products that sit somewhere between ordinary cash
              and long-term restricted savings. Drutilio&apos;s asset-specific
              guides are meant to help you ask better questions before you do
              the math.
            </p>
            <p>
              The page on{" "}
              <Link
                href="/zakat-on-gold-and-silver"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on gold and silver
              </Link>{" "}
              covers jewelry, bullion, coins, market value, and nisab-related
              questions. The guide on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                retirement accounts
              </Link>{" "}
              explains why 401(k), IRA, RRSP, pension, and similar balances are
              often discussed differently from ordinary cash.
            </p>
            <p>
              Business owners and freelancers can turn to the guide on{" "}
              <Link
                href="/zakat-on-business-assets"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                business assets
              </Link>{" "}
              for inventory, receivables, business cash, and short-term
              liabilities. Investors can use the page on{" "}
              <Link
                href="/zakat-on-stocks-and-etfs"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                stocks and ETFs
              </Link>{" "}
              to think through long-term holdings, trading portfolios,
              dividends, and accessible value. None of these pages tries to
              flatten scholarly diversity into one answer. Instead, they give
              you a map of the main questions so you can approach your own
              calculation more responsibly.
            </p>
            <HubCardGrid cards={assetCards} />
          </ContentSection>

          <ContentSection title="Common mistakes">
            <p>
              One of the most useful ways to improve a zakat calculation is to
              study the mistakes people make when they rush. Some forget assets
              that are not sitting in an everyday bank account. Some count the
              same economic value twice. Some apply old gold or silver prices.
              Others assume that all debt should be deducted without carefully
              checking whether that is the right treatment under the approach
              they follow.
            </p>
            <p>
              Drutilio&apos;s{" "}
              <Link
                href="/common-zakat-mistakes"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                common zakat mistakes
              </Link>{" "}
              page gathers these issues into one practical checklist. Even
              experienced adults who have paid zakat for years can benefit from
              reviewing it, especially when their asset mix changes over time.
              A person who once had only savings might later have brokerage
              accounts, retirement balances, gold jewelry, or side-business
              income. The calculation grows with life.
            </p>
          </ContentSection>

          <ContentSection title="US-focused zakat guidance">
            <p>
              Muslims in the United States often face a distinct mix of financial
              realities: checking and savings accounts in USD, employer 401(k)
              plans, IRAs, taxable brokerage portfolios, credit-card balances,
              student loans, gold purchases, and varied local mosque guidance.
              That combination does not change the core principles of zakat, but
              it does change the practical questions people ask.
            </p>
            <p>
              The{" "}
              <Link
                href="/zakat-calculator-usa"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator USA
              </Link>{" "}
              page gives a US-oriented explanation with examples in dollars and
              discussion of common account types. Readers in Canada, the UK, and
              Australia may still find it helpful because the same broader themes
              appear across modern Western financial systems: retirement
              restrictions, taxable and tax-advantaged investments, precious
              metals, and local differences in scholarly advice.
            </p>
            <HubCardGrid cards={supportCards} />
          </ContentSection>

          <ContentSection title="How to use this hub well">
            <p>
              The best way to use this section is to move in layers. Start with
              the calculator if you want a quick estimate, or start with the
              basics if you want to understand the framework first. Then move to
              the asset-specific pages that match your actual life. If you own
              gold, read the gold guide. If you invest, read the stocks page. If
              you run a small business or freelance, read the business-assets
              page. If you have a workplace retirement plan, review the
              retirement-accounts guide.
            </p>
            <p>
              This layered approach matters because zakat is often less about
              one dramatic problem and more about several small classification
              questions combined. A calculator can tell you what 2.5% of a net
              number is. It cannot tell you whether the number itself has been
              assembled correctly under the view you follow. The guides help you
              slow down at the right moments.
            </p>
            <p>
              As always, these pages are meant to educate, not to replace
              qualified religious guidance. If your case involves mixed-use gold
              jewelry, unusual investment structures, disputed debt treatment,
              employer pension restrictions, or other facts that materially
              change the calculation, it is wise to consult a qualified scholar
              or local Islamic authority who can speak to your circumstances and
              the scholarly framework you rely on.
            </p>
          </ContentSection>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Zakat hub FAQs
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Short answers to common questions about using Drutilio&apos;s
                zakat guides and calculator.
              </p>
            </div>
            <FAQSection items={faqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
