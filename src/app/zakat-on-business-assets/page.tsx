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
  "Learn about zakat on business assets, including inventory, receivables, cash, and short-term liabilities, with an educational guide for Muslim business owners and freelancers.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Zakat on Business Assets" },
];

const faqItems: FAQItem[] = [
  {
    question: "Do business owners usually pay zakat on inventory?",
    answer:
      "Inventory is commonly discussed as a zakatable business asset, but treatment can differ depending on the type of business, how items are valued, and the scholarly approach being followed.",
  },
  {
    question: "Are accounts receivable always included?",
    answer:
      "Receivables are often considered, but people may distinguish between collectible receivables, doubtful receivables, and invoices that are uncertain or long overdue.",
  },
  {
    question: "Can short-term business liabilities reduce the zakat base?",
    answer:
      "They often may, but which liabilities are deducted and how much is deducted can vary by method and by the facts of the business.",
  },
  {
    question: "Do freelancers need to calculate zakat differently from traditional businesses?",
    answer:
      "Freelancers often work with a simpler asset mix, such as cash, unpaid invoices, and operating balances, but the same broad questions about included assets and deductible obligations still apply.",
  },
  {
    question: "Is this page giving a definitive religious ruling?",
    answer:
      "No. It is an educational guide only and should not replace advice from a qualified scholar or local Islamic authority for specific business cases.",
  },
];

export const metadata: Metadata = {
  title: "Zakat on Business Assets",
  description,
  alternates: {
    canonical: "/zakat-on-business-assets",
  },
  openGraph: {
    title: "Zakat on Business Assets",
    description,
    url: "/zakat-on-business-assets",
  },
};

export default function ZakatOnBusinessAssetsPage() {
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
            Zakat on business assets
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zakat on business assets is one of the most practical and easily
            misunderstood parts of zakat planning. A Muslim who runs a store,
            online shop, consulting practice, side business, agency, or
            freelance operation may hold many different types of value at the
            same time: cash balances, inventory, receivables, prepaid expenses,
            tax obligations, business equipment, and short-term liabilities. In
            theory, the principle sounds simple. In real life, deciding which
            items belong in the zakat calculation can take much more care.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This guide explains zakat on business assets in an educational way.
            It does not present one scholarly position as universally binding,
            and it does not offer a final religious ruling. Instead, it walks
            through the common categories that business owners and freelancers in
            the US, Canada, UK, Australia, and similar settings often need to
            think about. The aim is to help you organize your assets, ask better
            questions, and use Drutilio&apos;s{" "}
            <Link
              href="/calculators/zakat-calculator"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              zakat calculator
            </Link>{" "}
            more thoughtfully once you know which numbers you want to include.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            If you need the wider framework first, the page on{" "}
            <Link
              href="/how-to-calculate-zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              how to calculate zakat
            </Link>{" "}
            explains the overall process. If your business wealth also includes
            precious metals or retirement savings, the related guides on{" "}
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
            can help round out the picture. You can also browse the{" "}
            <Link
              href="/zakat"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Zakat hub
            </Link>{" "}
            for the full set of linked guides and tools.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <ContentSection title="Why business assets are different from personal cash">
            <p>
              Personal savings are often relatively easy to identify. Business
              wealth is more layered. A business may hold cash that is clearly
              available, inventory that is intended for sale, invoices that may
              or may not be collected soon, software subscriptions already paid
              for, tax obligations not yet due, and equipment that helps produce
              revenue but is not itself part of trade inventory.
            </p>
            <p>
              Because of that mix, zakat on business assets often turns into a
              classification exercise before it becomes a math exercise. Two
              businesses with the same total revenue can have very different
              zakat worksheets if one is inventory-heavy and the other is almost
              entirely service-based. That is one reason business owners should
              not assume that a single template applies to every structure.
            </p>
            <p>
              The more helpful approach is usually to ask: which business items
              represent tradeable or liquid value, which items are doubtful or
              uncertain, which obligations may reduce the zakat base, and which
              business resources are simply tools used to operate the business?
            </p>
          </ContentSection>

          <ContentSection title="Inventory is often the first category people review">
            <p>
              Inventory is commonly treated as one of the clearest business
              assets to review for zakat because it represents goods held for
              sale. A retail store, e-commerce business, or product-based brand
              may hold clothing, electronics, packaged foods, cosmetics,
              supplies, or other merchandise intended for customers. In many
              discussions, this makes inventory more relevant to zakat than
              office furniture, display shelving, or business computers.
            </p>
            <p>
              The practical question is often how to value it. Some people look
              to current saleable value, others focus on wholesale or net
              realizable value, and others use inventory methods that reflect
              how the goods would realistically be priced if sold. This matters
              because a number on an internal accounting sheet may not match the
              real value that can be recovered in the market.
            </p>
            <p>
              Seasonal inventory, damaged goods, obsolete products, or items
              that have become difficult to sell may also complicate the
              calculation. Educationally, it is often better to use a realistic
              and consistent valuation method than to assume every item should be
              carried at its most optimistic sticker price.
            </p>
          </ContentSection>

          <ContentSection title="Receivables can matter, but certainty matters too">
            <p>
              Accounts receivable are another major business category. If clients
              or customers owe the business money, that value may be relevant to
              zakat planning. But receivables are not always equally solid. Some
              invoices are nearly certain to be collected. Others are delayed,
              disputed, or doubtful. That distinction can make a practical
              difference.
            </p>
            <p>
              A consultant or freelancer may have only a few outstanding client
              invoices at the end of the year. A larger company may have many
              receivables across different customers, with some aging
              substantially past their due dates. People often distinguish
              between receivables that are genuinely collectible and those that
              are uncertain enough that immediate inclusion feels questionable.
            </p>
            <p>
              This is one of the places where bookkeeping clarity helps a great
              deal. If the business already tracks aging reports, paid status,
              disputed invoices, and expected losses, then the zakat discussion
              becomes much easier. If everything is mixed together in one rough
              balance, the business owner may need to pause and sort the data
              before any calculator can be meaningfully used.
            </p>
          </ContentSection>

          <ContentSection title="Business cash is often the easiest business asset to identify">
            <p>
              Business cash balances are usually the most straightforward number
              on the worksheet. Checking accounts, payment platform balances,
              operating reserves, and clearly available business savings often
              look similar to personal liquid assets from an arithmetic point of
              view. The main difference is that the cash sits inside a business
              workflow and may be earmarked for payroll, taxes, or upcoming
              expenses.
            </p>
            <p>
              That is where careful thinking becomes important. The fact that
              cash is intended for an upcoming use does not always answer
              whether it should be included or reduced by a liability. Some
              people focus on what is presently owned and liquid, then deal with
              deductible obligations separately. Others think in a more
              net-operating-capital style. The correct handling depends on the
              approach being followed.
            </p>
            <p>
              For freelancers and solo operators, this often means looking at
              the balance sitting in the business account on the zakat date,
              then deciding how to handle unpaid taxes, invoices, and near-term
              obligations under the guidance they trust.
            </p>
          </ContentSection>

          <ContentSection title="Short-term liabilities can reduce the picture, but not always identically">
            <p>
              Short-term liabilities are often part of zakat calculations for
              businesses, but the exact treatment can vary. Common examples
              include supplier invoices already due, wages payable, credit-card
              balances tied to operations, short-term financing obligations,
              certain taxes, or immediate rent and utility obligations.
            </p>
            <p>
              The practical issue is not only whether liabilities exist, but how
              directly and currently they should reduce the zakat base. Some
              people deduct clearly due short-term obligations. Others may be
              more cautious about long-term financing or expenses that are
              ordinary parts of future operations rather than immediate payable
              claims.
            </p>
            <p>
              This distinction can matter a great deal. A business with large
              current obligations may look very different on a net basis than a
              business with similar assets but very little immediately payable
              debt. It is a good reminder that the most useful number is not
              always gross revenue or total sales, but rather the composition of
              actual assets and current obligations at the zakat date.
            </p>
          </ContentSection>

          <ContentSection title="Freelancers and service businesses have their own pattern">
            <p>
              Freelancers often assume zakat on business assets does not really
              apply to them because they do not carry traditional inventory. In
              reality, freelancers may still have meaningful business cash,
              unpaid invoices, retained earnings, client deposits, and short-term
              operating obligations. The asset mix is different, but the topic is
              still very real.
            </p>
            <p>
              A consultant, designer, developer, therapist, coach, or creative
              contractor may not have shelves of goods, but they may have
              several months of accumulated business cash and a queue of invoices
              due from clients. In that case, zakat planning becomes less about
              merchandise and more about cash flow, receivables, and operational
              obligations.
            </p>
            <p>
              The same is often true for small agencies and professional
              practices. The absence of physical goods does not eliminate the
              need for classification. It simply changes the categories.
            </p>
          </ContentSection>

          <ContentSection title="What usually is not treated the same way as inventory or cash">
            <p>
              Business equipment often raises questions because it has value, but
              it may not be held for sale. Laptops, office furniture, delivery
              vans, manufacturing tools, cameras, servers, and other operating
              assets can be central to a business without functioning like
              tradeable stock. In many discussions, these items are not treated
              the same way as inventory, but the reasoning and exact treatment
              can still differ depending on the framework.
            </p>
            <p>
              The same is true of prepaid subscriptions, intangible assets,
              branding costs, or accumulated goodwill. These may matter for the
              business economically without necessarily fitting neatly into the
              same category as liquid or sale-ready wealth. That is why strong
              bookkeeping does not automatically settle the zakat question.
              Accounting categories and zakat categories overlap, but they are
              not identical.
            </p>
            <p>
              If a business owner is unsure whether a category belongs in the
              zakat base, it is often wise to bring that exact example to a
              scholar rather than asking only in general terms.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: a small online store">
            <p>
              Imagine a Muslim entrepreneur in the United States running a small
              online store. On the zakat date, the business has $12,000 in bank
              cash, $18,000 in saleable inventory, $4,000 in reasonably
              collectible receivables, and $5,000 in short-term supplier
              obligations and credit-card balances tied to inventory purchases.
            </p>
            <p>
              Under a simple educational model, that owner might total the
              relevant assets, review the short-term liabilities under the
              approach they follow, and then estimate the net zakatable amount.
              They could then enter the appropriate values into Drutilio&apos;s{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              .
            </p>
            <p>
              But even here there are judgment questions. Is all inventory
              fairly saleable at current values? Are all receivables genuinely
              collectible? Should every liability on the balance sheet reduce
              the zakat base, or only the immediate short-term ones? The example
              helps show why the arithmetic is useful but not self-sufficient.
            </p>
          </ContentSection>

          <ContentSection title="Practical example: a freelancer in Canada or the UK">
            <p>
              Now imagine a freelancer in Canada or the UK with no inventory,
              $9,000 in business cash, $6,000 in unpaid client invoices, and
              near-term tax and credit-card obligations related to operations.
              This person may initially assume zakat is only about their
              personal savings, but their business accounts are clearly part of
              the financial picture.
            </p>
            <p>
              In this case, the key categories may be liquid balances,
              collectible receivables, and current liabilities. The owner may
              also need to separate personal and business accounts more clearly
              if those flows have been mixed throughout the year. Once the data
              is clear, the arithmetic can be modeled more confidently.
            </p>
            <p>
              This kind of example is especially relevant for modern Muslim
              professionals whose business structure is simple enough to be
              manageable, but still complex enough that a “just look at my
              checking account” approach would miss meaningful assets.
            </p>
          </ContentSection>

          <ContentSection title="Common mistakes with business zakat calculations">
            <p>
              One common mistake is counting gross sales or annual revenue as if
              they were equivalent to zakatable wealth. Revenue measures business
              activity, not the current stock of relevant assets. A business may
              have large revenue and relatively modest net zakatable wealth, or
              smaller revenue and significant inventory and cash on hand.
            </p>
            <p>
              Another mistake is ignoring receivables entirely or including every
              invoice without distinction. A more careful approach usually asks
              whether the receivables are realistically collectible and how the
              chosen method treats doubtful amounts.
            </p>
            <p>
              A third mistake is treating every business liability as an
              automatic deduction without examining whether it is short-term,
              immediately payable, operationally routine, or part of a longer
              financing structure. Finally, many owners under-document their
              numbers, which makes it hard to reproduce the method consistently
              the following year.
            </p>
          </ContentSection>

          <ContentSection title="How this fits with other zakat asset categories">
            <p>
              Business assets are often only one part of a household&apos;s zakat
              review. A business owner may also hold personal savings, gold or
              silver, stocks, retirement accounts, or real estate-related cash
              balances. That is why it is helpful to think of business zakat as
              one module inside a larger personal zakat worksheet.
            </p>
            <p>
              If you also hold precious metals, the guide on{" "}
              <Link
                href="/zakat-on-gold-and-silver"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on gold and silver
              </Link>{" "}
              may be relevant. If part of your wealth sits in retirement plans,
              the page on{" "}
              <Link
                href="/zakat-on-retirement-accounts"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat on retirement accounts
              </Link>{" "}
              can help frame those questions separately.
            </p>
            <p>
              Keeping the categories conceptually separate often makes the final
              arithmetic easier and helps you avoid both missed assets and double
              counting.
            </p>
          </ContentSection>

          <ContentSection title="Important disclaimer">
            <p>
              This page is for educational purposes only. Scholarly approaches
              may differ on how to value inventory, treat doubtful receivables,
              deduct liabilities, and distinguish between operating assets and
              zakatable business wealth. The correct method for a specific
              business may depend on facts that a general online guide cannot
              fully capture.
            </p>
            <p>
              For specific cases, consult a qualified scholar or local Islamic
              authority who understands business zakat and the type of operation
              you run. Drutilio can help you organize the arithmetic, but it
              should not replace case-specific religious guidance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
