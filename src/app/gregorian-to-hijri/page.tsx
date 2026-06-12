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
  "Convert a Gregorian date to an approximate Hijri date with Drutilio's educational Gregorian to Hijri converter for planning, Ramadan tracking, and zakat reminders.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Gregorian to Hijri" },
];

const faqItems: FAQItem[] = [
  {
    question: "Is this Gregorian to Hijri result exact?",
    answer:
      "No. It is an approximate Hijri conversion using a tabular model, and actual dates may vary by moon sighting and local authority.",
  },
  {
    question: "Why would someone convert a Gregorian date to Hijri?",
    answer:
      "It can help when planning around Ramadan, Islamic anniversaries, family events, or a zakat timeline while starting from an ordinary civil calendar date.",
  },
  {
    question: "Can I use this for Eid or Ramadan announcements?",
    answer:
      "You can use it as a general estimate, but official observance should still follow trusted local guidance because communities may differ in practical date announcements.",
  },
  {
    question: "Does this help with zakat timing?",
    answer:
      "Yes. It can help translate a remembered Gregorian date into an approximate Hijri date when reviewing a zakat anniversary or comparing years.",
  },
  {
    question: "Is there a reverse converter too?",
    answer:
      "Yes. Drutilio also provides a Hijri to Gregorian converter if you want to start from an Islamic date and map it back to the civil calendar.",
  },
];

export const metadata: Metadata = {
  title: "Gregorian to Hijri Converter",
  description,
  alternates: {
    canonical: "/gregorian-to-hijri",
  },
  openGraph: {
    title: "Gregorian to Hijri Converter",
    description,
    url: "/gregorian-to-hijri",
  },
};

export default function GregorianToHijriPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />
      <JsonLd
        data={buildCalculatorStructuredData({
          name: "Gregorian to Hijri Converter",
          description,
          path: "/gregorian-to-hijri",
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
            Gregorian to Hijri converter
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Converting a Gregorian date into an approximate Hijri date is useful
            when you start from a school, work, travel, or family calendar and
            want to understand where that date lands in the Islamic year. It can
            help with Ramadan planning, event reminders, and financial tracking
            around Islamic anniversaries such as a recurring zakat review.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This page is intentionally educational. Islamic dates can vary by
            moon sighting, local authority, and community practice, so a web
            converter should be treated as a practical estimate rather than an
            official ruling. That distinction matters most around actual
            observance dates, mosque calendars, and formal announcements.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <HijriDateConverterClient initialMode="gregorian-to-hijri" />

          <ContentSection title="Why convert Gregorian dates into Hijri dates?">
            <p>
              Most people organize appointments and documents using the
              Gregorian calendar, but many religious milestones are still
              remembered in Hijri terms. You may know the Gregorian date of a
              past payment, a family event, or a planned trip and want to see
              which Islamic month it aligns with. That is where this converter
              becomes useful.
            </p>
            <p>
              It can also help when someone remembers that they paid zakat at a
              certain time of year but wants to estimate the corresponding Hijri
              date before reviewing the full picture in the{" "}
              <Link
                href="/zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat hub
              </Link>{" "}
              or using the{" "}
              <Link
                href="/calculators/zakat-calculator"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat calculator
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="Why moon sighting still matters">
            <p>
              A calculated conversion is useful, but it does not cancel the fact
              that Islamic dates in real life can vary. Communities may observe
              the beginning of a month according to different methods, and local
              authorities may publish slightly different practical calendars
              around the same period.
            </p>
            <p>
              That means the converter is strongest as a planning tool. It helps
              you understand the likely Islamic month and approximate day, while
              still leaving room for local religious guidance where exact
              observance matters. If you need the reverse direction, use the{" "}
              <Link
                href="/hijri-to-gregorian"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Hijri to Gregorian converter
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="How this fits into Islamic finance and scheduling">
            <p>
              Many people use Hijri timing for zakat reminders, Ramadan goals,
              and yearly reflection, even while their bank statements and bills
              stay firmly Gregorian. A quick Gregorian-to-Hijri conversion helps
              bridge those systems. You can use it to estimate where a date
              falls in the Islamic year, then move into more specific planning
              inside Drutilio&apos;s religious-finance content when needed.
            </p>
            <p>
              That is why we connect this page back to the{" "}
              <Link
                href="/zakat"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                zakat hub
              </Link>
              . The converter is not itself a zakat ruling tool, but it is often
              part of the practical workflow around annual review and date
              tracking.
            </p>
          </ContentSection>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
