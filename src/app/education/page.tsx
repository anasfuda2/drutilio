import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQSection, type FAQItem } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

const description =
  "Explore Dr.Utilio's education hub with GPA tools, final-grade planning, study-time scheduling, and educational guides for students.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Education" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Dr.Utilio's education hub?",
    answer:
      "The education hub brings together academic planning calculators and educational guides so students can connect GPA tracking, final-grade math, and study scheduling in one place.",
  },
  {
    question: "Are these education tools official school records?",
    answer:
      "No. They are educational planning tools and may not match every school’s grading or transcript policy exactly.",
  },
  {
    question: "Which tools are the best starting point?",
    answer:
      "A strong starting path is the GPA calculator, the final grade calculator, and the study time calculator, followed by the core GPA and study guides.",
  },
  {
    question: "Can these calculators guarantee academic outcomes?",
    answer:
      "No. They are estimate-based planning tools and should not be treated as guarantees.",
  },
  {
    question: "Should I still check my school’s official grading policy?",
    answer:
      "Yes. When precision matters, your school’s official policy should always take priority over a general online estimate.",
  },
];

type EducationCard = {
  title: string;
  description: string;
  href: string;
};

const calculatorCards: EducationCard[] = [
  {
    title: "GPA Calculator",
    description:
      "Estimate cumulative GPA from letter grades, course names, and credit hours.",
    href: "/calculators/gpa-calculator",
  },
  {
    title: "Final Grade Calculator",
    description:
      "Estimate the exam score needed to reach a target course grade.",
    href: "/calculators/final-grade-calculator",
  },
  {
    title: "Study Time Calculator",
    description:
      "Turn a weekly study goal into a simple subject-and-day schedule.",
    href: "/calculators/study-time-calculator",
  },
];

const guideCards: EducationCard[] = [
  {
    title: "How to Calculate GPA",
    description:
      "Understand how grade points and credit hours work together.",
    href: "/how-to-calculate-gpa",
  },
  {
    title: "Weighted vs. Unweighted GPA",
    description:
      "Learn how different schools may frame GPA differently.",
    href: "/weighted-vs-unweighted-gpa",
  },
  {
    title: "How to Improve Your GPA",
    description:
      "Review practical educational strategies for academic improvement.",
    href: "/how-to-improve-your-gpa",
  },
  {
    title: "College GPA Guide",
    description:
      "See how cumulative GPA, credit hours, and term averages fit together.",
    href: "/college-gpa-guide",
  },
  {
    title: "Final Grade Calculator Guide",
    description:
      "Learn how weighted exam math supports better end-of-term planning.",
    href: "/final-grade-calculator-guide",
  },
  {
    title: "Study Time Calculator Guide",
    description:
      "See how weekly study goals turn into realistic schedules.",
    href: "/study-time-calculator-guide",
  },
  {
    title: "Common Study Mistakes",
    description:
      "Review the planning mistakes that often undermine academic results.",
    href: "/common-study-mistakes",
  },
  {
    title: "How Many Hours Should I Study?",
    description:
      "Think through study-time targets in a more realistic way.",
    href: "/how-many-hours-should-i-study",
  },
];

function EducationCardGrid({ cards }: { cards: EducationCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
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
  title: "Education Hub",
  description,
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Education Hub",
    description,
    url: "/education",
  },
};

export default function EducationHubPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Education Tools
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Education hub
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Dr.Utilio&apos;s education hub brings together the main academic
              planning tools students often need: GPA tracking, final-grade
              math, study scheduling, and clear educational guides that explain
              how the numbers actually work.
            </p>
            <p>
              Everything here is educational only. These tools are meant to
              support planning and understanding, not to replace your school&apos;s
              official grade records, advising, or published policies.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Education calculators
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Use these calculators when you want to estimate GPA, work
                backward from a target final grade, or build a simple weekly
                study schedule.
              </p>
            </div>
            <div className="mt-6">
              <EducationCardGrid cards={calculatorCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Education guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These guides explain GPA math, weighted grading concepts, final
                exam planning, and study routines in a calmer, more useful way
                than trying to figure everything out under deadline pressure.
              </p>
            </div>
            <div className="mt-6">
              <EducationCardGrid cards={guideCards} />
            </div>
          </section>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
