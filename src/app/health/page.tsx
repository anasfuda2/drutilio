import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ToolNavigationBar } from "@/components/navigation/ToolNavigationBar";
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
import { getCalculatorsByDirectoryCategory } from "@/lib/calculators";

const description =
  "Explore Drutilio's health hub with educational wellness calculators and guides covering calories, BMR, body fat, healthy weight, hydration, and common planning mistakes.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Health" },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the purpose of Drutilio's health hub?",
    answer:
      "The health hub brings wellness-oriented calculators and educational guides into one place so readers can compare body metrics, calorie estimates, hydration planning, and weight-related concepts more easily.",
  },
  {
    question: "Does the health hub provide medical advice?",
    answer:
      "No. The hub is educational only and does not provide diagnosis, treatment, or personal medical advice.",
  },
  {
    question: "Which tools are best for a starting point?",
    answer:
      "A common starting path is the calorie calculator, BMR calculator, BMI calculator, and the healthy weight guide.",
  },
  {
    question: "Are the health calculators exact?",
    answer:
      "No. They provide simplified estimates that can be useful for planning and learning, but they should not be treated as exact clinical measurements.",
  },
  {
    question: "What should I do if I have a personal medical concern?",
    answer:
      "Consult a qualified healthcare professional for individualized guidance, especially if you have symptoms, a medical condition, or a treatment-related question.",
  },
];

type HealthCard = {
  title: string;
  description: string;
  href: string;
};

const calculatorCards: HealthCard[] = [
  {
    title: "BMI Calculator",
    description:
      "Estimate body mass index with imperial or metric inputs for quick educational reference.",
    href: "/calculators/bmi-calculator",
  },
  {
    title: "Calorie Calculator",
    description:
      "Estimate maintenance calories and simple gain-or-loss ranges using basic body and activity details.",
    href: "/calculators/calorie-calculator",
  },
  {
    title: "BMR Calculator",
    description:
      "Estimate resting energy needs using a common BMR formula.",
    href: "/calculators/bmr-calculator",
  },
  {
    title: "Body Fat Calculator",
    description:
      "Estimate body fat percentage using a simple circumference-based method.",
    href: "/calculators/body-fat-calculator",
  },
  {
    title: "Ideal Weight Calculator",
    description:
      "Compare a reference ideal-weight estimate with a healthy-BMI range.",
    href: "/calculators/ideal-weight-calculator",
  },
  {
    title: "Water Intake Calculator",
    description:
      "Estimate a simple daily hydration target from body weight and activity.",
    href: "/calculators/water-intake-calculator",
  },
];

const guideCards: HealthCard[] = [
  {
    title: "How Many Calories Should I Eat?",
    description:
      "Learn how calorie estimates are commonly built and why they are usually starting points rather than exact rules.",
    href: "/how-many-calories-should-i-eat",
  },
  {
    title: "What Is BMR?",
    description:
      "Understand basal metabolic rate and how it differs from total daily calorie needs.",
    href: "/what-is-bmr",
  },
  {
    title: "BMI vs. Body Fat Percentage",
    description:
      "Compare two common body-reference tools and the limits of each.",
    href: "/bmi-vs-body-fat-percentage",
  },
  {
    title: "Healthy Weight Guide",
    description:
      "Think through healthy-weight concepts with more nuance than a single target number.",
    href: "/healthy-weight-guide",
  },
  {
    title: "Common Weight Loss Mistakes",
    description:
      "Review the mistakes that often come from overtrusting estimates or using unrealistic plans.",
    href: "/common-weight-loss-mistakes",
  },
];

function HealthCardGrid({ cards }: { cards: HealthCard[] }) {
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
  title: "Health and Wellness Hub",
  description,
  alternates: {
    canonical: "/health",
  },
  openGraph: {
    title: "Health and Wellness Hub",
    description,
    url: "/health",
  },
};

export default function HealthHubPage() {
  const healthToolItems = getCalculatorsByDirectoryCategory("Health").map(
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
            Health and Wellness
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Health hub
          </h1>
          <ToolNavigationBar title="Health tools" items={healthToolItems} />
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Drutilio&apos;s health hub brings together practical wellness
              calculators and educational guides that help readers understand
              calorie estimates, resting metabolism, body metrics, hydration,
              and healthy-weight planning in a calmer, more structured way.
            </p>
            <p>
              Everything here is educational only. These tools are meant to
              support learning and rough planning, not diagnosis, treatment, or
              guaranteed health outcomes. For personal medical concerns, consult
              a qualified healthcare professional.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Health calculators
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Use these calculators when you want practical estimates for
                common wellness questions: body-size screening, calorie needs,
                basal metabolic rate, body-fat context, hydration, and
                reference-weight ranges.
              </p>
            </div>
            <div className="mt-6">
              <HealthCardGrid cards={calculatorCards} />
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Health guides
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                These guides explain how the numbers are commonly used, where
                they help, and where they can mislead. They are especially
                useful if you want more context before treating a calculator
                estimate like a real-world plan.
              </p>
            </div>
            <div className="mt-6">
              <HealthCardGrid cards={guideCards} />
            </div>
          </section>

          <FAQSection items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
