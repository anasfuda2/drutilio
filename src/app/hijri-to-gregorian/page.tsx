import type { Metadata } from "next";
import Link from "next/link";
import { HijriDateConverterClient } from "@/components/calculators/HijriDateConverterClient";
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
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Convert an approximate Hijri date to its Gregorian equivalent with Drutilio's educational Hijri to Gregorian converter and planning guide.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Hijri to Gregorian" },
];

const faqItems: FAQItem[] = [
  {
    question: "Is this Hijri to Gregorian conversion exact?",
    answer:
      "No. It is an approximate conversion based on a tabular Islamic calendar model, and actual Islamic dates can vary by moon sighting and local authority.",
  },
  {
    question: "Why might a mosque calendar differ from this result?",
    answer:
      "Different communities may follow different moon sighting methods or regional authorities, so observed dates can shift slightly from a calculated estimate.",
  },
  {
    question: "Can I use this for zakat planning?",
    answer:
      "Yes, as a planning aid. It can help you estimate the Gregorian timing of a Hijri anniversary, but exact religious observance should be checked with trusted local guidance if needed.",
  },
  {
    question: "What Hijri month names does the converter use?",
    answer:
      "The tool uses familiar month names such as Muharram, Ramadan, and Dhu al-Hijjah to make the result easier to read.",
  },
  {
    question: "Does this replace an official religious calendar?",
    answer:
      "No. It is an educational utility and should not replace official calendars issued by local Islamic authorities or organizations.",
  },
];

export const metadata: Metadata = {
  title: "Hijri to Gregorian Converter",
  description,
  alternates: {
    canonical: "/hijri-to-gregorian",
  },
  openGraph: {
    title: "Hijri to Gregorian Converter",
    description,
    url: "/hijri-to-gregorian",
  },
};

export default function HijriToGregorianPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />
      <JsonLd
        data={buildCalculatorStructuredData({
          name: "Hijri to Gregorian Converter",
          description,
          path: "/hijri-to-gregorian",
          applicationCategory: "UtilitiesApplication",
        })}
      />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Everyday Tools
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Hijri to Gregorian converter
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Converting an Islamic date into a Gregorian calendar date is often
            useful for travel, school planning, reminders, family events, and
            religious finance tasks such as tracking a Hijri zakat anniversary.
            This tool gives an approximate Gregorian equivalent for a Hijri
            date, which makes it easier to map an Islamic calendar reference
            onto the civil calendar most people use day to day.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Drutilio keeps this page educational and non-authoritative. Islamic
            dates may vary by moon sighting, local religious authority, and the
            calendar approach used in a specific community. That means this
            converter is best treated as a planning aid rather than an official
            ruling on when a month begins.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <HijriDateConverterClient initialMode="hijri-to-gregorian" />

          <ContentSection title="Why convert Hijri dates into Gregorian dates?">
            <p>
              Many people encounter an Islamic date first and then need to place
              it on a work, school, or household calendar that runs on the
              Gregorian system. A reminder might mention 1 Ramadan, 10 Muharram,
              or a personal zakat anniversary in Sha&apos;ban, while the practical
              question is still: what day does that fall on in my ordinary
              calendar this year?
            </p>
            <p>
              A converter like this can help answer that question quickly. It is
              particularly useful when you are trying to estimate dates before a
              local announcement is issued, or when you want to compare past or
              future Islamic dates across multiple years. For broader Islamic
              finance context, the{" "}
              <Link
                href="/zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat hub
              </Link>{" "}
              and the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>{" "}
              are useful companions.
            </p>
          </ContentSection>

          <ContentSection title="Why the result is approximate">
            <p>
              The Islamic calendar is not simply a fixed offset from the
              Gregorian calendar. Actual observed dates can differ depending on
              moon sighting practices, regional decisions, and which scholarly
              or organizational approach a community follows. That is why
              two trustworthy calendars can still differ slightly around Ramadan
              and Eid.
            </p>
            <p>
              Drutilio&apos;s converter uses a tabular model so you can get a fast,
              consistent estimate. That is extremely useful for rough planning,
              but it should not override official local announcements when exact
              observance matters. If you also need the reverse workflow, use the{" "}
              <Link
                href="/gregorian-to-hijri"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Gregorian to Hijri converter
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="When this is useful for zakat and Islamic planning">
            <p>
              This kind of conversion is especially practical when you track
              religious milestones by Hijri date but manage your reminders,
              payroll, travel, and household plans in Gregorian dates. Someone
              who pays zakat around the same Hijri date each year may want a
              rough Gregorian estimate in order to set reminders, schedule a
              yearly review, or prepare records in advance.
            </p>
            <p>
              That is one reason date conversion sits naturally alongside the{" "}
              <Link
                href="/zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat hub
              </Link>
              . It helps bridge the practical calendar question without trying
              to replace the local religious judgment that may still matter for
              final observance.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
