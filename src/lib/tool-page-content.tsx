import type { ReactNode } from "react";
import Link from "next/link";
import type { FAQItem } from "@/components/seo/FAQSection";
import type { ToolCategory } from "@/lib/calculators";

type ToolPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  category: ToolCategory;
  path: string;
  applicationCategory: string;
  sections: {
    howItWorks: ReactNode;
    resultMeans: ReactNode;
    limitations: ReactNode;
    whenToUse: ReactNode;
  };
  faqItems: FAQItem[];
};

function toolLink(href: string, label: string) {
  return (
    <Link href={href} className="font-semibold text-emerald-300 hover:text-emerald-200">
      {label}
    </Link>
  );
}

export const toolPageContent: Record<string, ToolPageContent> = {
  "age-calculator": {
    title: "Age Calculator",
    description:
      "Calculate age in years, months, and days from a birth date and comparison date with a simple online age calculator.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this age calculator to measure age from a birth date to a selected comparison date. It breaks the result into years, months, and days so you can check age for forms, milestones, planning, or general reference.",
    category: "Everyday Tools",
    path: "/calculators/age-calculator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool compares two calendar dates: a birth date and an as-of
            date. It calculates the elapsed time between them and translates
            that gap into a calendar-style answer in years, months, and days.
            It also shows the total number of days for situations where an exact
            day count is more useful than a birthday-style age format.
          </p>
          <p>
            Because the calculation uses real calendar boundaries, it handles
            month lengths and leap years more carefully than a rough estimate.
            If you also need to compare two general dates rather than measure a
            person&apos;s age, the{" "}
            {toolLink(
              "/calculators/date-difference-calculator",
              "date difference calculator",
            )}{" "}
            is the better companion tool.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The main result shows how many full years, additional months, and
            extra days have passed between the selected dates. That format is
            useful when a form asks for current age or when you want to verify a
            milestone date without doing manual calendar math.
          </p>
          <p>
            The total day count can be helpful for countdowns, eligibility
            checks, or recordkeeping. If you are building a broader timeline for
            an event, it can pair well with the{" "}
            {toolLink("/calculators/unit-converter", "unit converter")} and the{" "}
            {toolLink(
              "/calculators/percentage-calculator",
              "percentage calculator",
            )}{" "}
            for basic planning math around schedules and progress.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator is meant for general educational and practical use.
            It does not determine legal age status for any specific jurisdiction
            or policy. Formal age rules can vary depending on state law, agency
            definitions, contract language, or institutional requirements.
          </p>
          <p>
            It also does not account for time of day, time zone differences, or
            medical or administrative definitions of age. If an application,
            employer, school, insurer, or government office requires an official
            determination, use their stated rules and documentation instead of
            treating this tool as a final authority.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a quick and readable age estimate
            for forms, enrollment windows, milestone tracking, or everyday
            curiosity. It is especially useful when you want something more
            precise than just subtracting years on a calendar.
          </p>
          <p>
            It is also handy when you are comparing timelines across multiple
            events. For broader date math, try the{" "}
            {toolLink(
              "/calculators/date-difference-calculator",
              "date difference calculator",
            )}
            . For common number comparisons that come up alongside time-based
            planning, the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            and{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}{" "}
            can help.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this age calculator account for leap years?",
        answer:
          "Yes. It uses real calendar dates, so leap years and month lengths are reflected in the result rather than being treated as a flat average year.",
      },
      {
        question: "Can I calculate age on a past or future date?",
        answer:
          "Yes. You can choose any comparison date on or after the birth date to estimate age at a past milestone or on a future date.",
      },
      {
        question: "Is the total day count the same as legal age?",
        answer:
          "Not necessarily. The total day count is a practical time measurement, but legal age rules can depend on local law or an organization's specific policy.",
      },
      {
        question: "Why show years, months, and days instead of only decimal years?",
        answer:
          "That format is easier to read for forms and general use because it matches how people usually talk about age in real life.",
      },
      {
        question: "Is this calculator giving legal or official advice?",
        answer:
          "No. It is an educational and convenience tool only, and it should not replace official rules, legal guidance, or agency instructions.",
      },
    ],
  },
  "date-difference-calculator": {
    title: "Date Difference Calculator",
    description:
      "Measure the time between two dates in days, weeks, and calendar years-months-days with a simple date difference calculator.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this date difference calculator to measure the time between two calendar dates. It shows the gap in total days, total weeks, and a calendar-style breakdown in years, months, and days.",
    category: "Everyday Tools",
    path: "/calculators/date-difference-calculator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool compares two dates and automatically orders them so you
            can still get a result if the earlier and later dates are entered in
            reverse. It then calculates the total day span and translates that
            span into a calendar breakdown based on real month lengths.
          </p>
          <p>
            That dual approach is useful because different situations call for
            different formats. A project schedule may need an exact day count,
            while an anniversary or contract review may be easier to understand
            in years, months, and days. If you are specifically measuring a
            person&apos;s age, the{" "}
            {toolLink("/calculators/age-calculator", "age calculator")} is the
            more natural tool.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The years-months-days result answers a calendar question: how many
            full years, then additional months, then remaining days separate the
            two dates. The total day figure answers a pure elapsed-time question
            and can be easier to use for deadlines, pacing, or comparisons.
          </p>
          <p>
            The weeks value is simply the day count divided by seven. That can
            be helpful for rough planning or habit tracking, though most formal
            deadlines should still be reviewed as exact dates rather than only
            week totals. For simple numeric comparisons that sit alongside
            timeline planning, the{" "}
            {toolLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
            can also be useful.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool compares dates, not times. It does not account for hours,
            minutes, time zones, daylight saving transitions, or business-day
            conventions. If you need working days, market days, or contract
            rules that exclude weekends and holidays, a simple date-difference
            estimate may not be sufficient.
          </p>
          <p>
            It is also not a legal deadline calculator. Courts, agencies,
            schools, and employers may define counting rules differently, so
            this tool should be treated as an educational estimate rather than a
            binding interpretation.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you need a quick date span for planning,
            event timing, subscriptions, milestone tracking, or everyday
            reference. It is especially handy when you want both a strict day
            count and a human-readable calendar breakdown.
          </p>
          <p>
            It also works well alongside the{" "}
            {toolLink("/calculators/age-calculator", "age calculator")} for
            birthday-based timing and the{" "}
            {toolLink("/calculators/unit-converter", "unit converter")} if you
            are translating between related measures while planning travel,
            school, or household tasks.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Can the calculator handle dates entered in reverse order?",
        answer:
          "Yes. It will still calculate the time span and indicate when the original input order was reversed.",
      },
      {
        question: "Does it measure business days?",
        answer:
          "No. The result is based on calendar days, not working days or holiday-aware schedules.",
      },
      {
        question: "Why are total days and calendar years-months-days both shown?",
        answer:
          "They answer different questions. Total days is useful for exact elapsed time, while years-months-days is easier for human-readable date planning.",
      },
      {
        question: "Can I use this for contract or filing deadlines?",
        answer:
          "You can use it as a rough educational estimate, but official deadline rules may differ and should be verified from the relevant source.",
      },
      {
        question: "Is this tool giving legal advice?",
        answer:
          "No. It is a general-purpose utility and does not provide legal, tax, financial, or official compliance advice.",
      },
    ],
  },
  "percentage-calculator": {
    title: "Percentage Calculator",
    description:
      "Find what a percentage of a number equals with a quick everyday percentage calculator.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this percentage calculator to answer common questions like 15% of 80 or 22% of 145. It is a simple everyday tool for discounts, tips, markups, budgeting, and classroom math.",
    category: "Everyday Tools",
    path: "/calculators/percentage-calculator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            The calculation is straightforward: the percentage is converted into
            decimal form and multiplied by the base value. For example, 25%
            becomes 0.25, and 0.25 times 200 equals 50. This tool handles the
            arithmetic instantly so you can focus on the decision rather than
            the math steps.
          </p>
          <p>
            It is a useful foundation for other percentage tools too. If you
            need to compare an old value and a new value, the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            or{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}{" "}
            may be a better fit.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result is the portion of the base value represented by the
            percentage you entered. That makes it useful for quick checks such
            as tax estimates, gratuity planning, discount previews, allocation
            splits, and basic classroom work.
          </p>
          <p>
            On its own, the result does not tell you whether a number is good,
            bad, affordable, or appropriate. It simply shows the size of the
            selected portion. If you need a finance-specific projection, tools
            such as the{" "}
            {toolLink(
              "/calculators/compound-interest-calculator",
              "compound interest calculator",
            )}{" "}
            or{" "}
            {toolLink(
              "/calculators/savings-goal-calculator",
              "savings goal calculator",
            )}{" "}
            provide more context for that kind of planning.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a pure arithmetic tool. It does not account for tax rules,
            merchant pricing practices, compound returns, fee structures, or any
            policy framework behind the numbers you enter.
          </p>
          <p>
            It also assumes the inputs you provide are the right ones for your
            situation. If the base number is incomplete or the percentage should
            be applied in a different order, the output may still be mathematically
            correct while being practically misleading.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a fast answer to a single
            percentage-of-a-number question. It is especially helpful when you
            are comparing small scenarios and do not want to stop to calculate
            manually.
          </p>
          <p>
            It also works nicely as a companion tool when you are using the{" "}
            {toolLink("/calculators/unit-converter", "unit converter")} or
            looking at growth with the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            and decline with the{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}
            .
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Can I use decimals in the percentage field?",
        answer:
          "Yes. You can enter whole numbers or decimals, so values like 7.5% work normally.",
      },
      {
        question: "What is this calculator best for?",
        answer:
          "It is best for quick percentage-of-a-number questions such as discounts, tips, allocations, and everyday math checks.",
      },
      {
        question: "Does it calculate percentage change between two values?",
        answer:
          "No. For old-versus-new comparisons, use the percentage increase or percentage decrease calculator instead.",
      },
      {
        question: "Can I use it for taxes or investment returns?",
        answer:
          "You can use it for rough arithmetic, but it does not interpret tax rules, investment assumptions, or any financial context.",
      },
      {
        question: "Is the result financial advice?",
        answer:
          "No. The result is just a mathematical output and should not be treated as financial, tax, legal, or investment advice.",
      },
    ],
  },
  "percentage-increase-calculator": {
    title: "Percentage Increase Calculator",
    description:
      "Measure the increase amount and percentage change from an original value to a new value with a simple percentage increase calculator.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this percentage increase calculator to compare an original value with a higher new value. It shows both the absolute increase and the percentage change, which is useful for prices, revenue, scores, costs, and other everyday comparisons.",
    category: "Everyday Tools",
    path: "/calculators/percentage-increase-calculator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool starts with two values: the original amount and the new
            amount. It subtracts the original from the new value to find the
            increase amount. Then it divides that increase by the original value
            to estimate the percentage change.
          </p>
          <p>
            That makes it easy to answer questions like how much a bill rose,
            how much a product price changed, or how much a metric improved over
            time. If the number moved downward instead, the{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}{" "}
            is usually the better framing.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The increase amount tells you the raw change in the same unit as
            your inputs. The percentage change tells you how large that increase
            is relative to the starting point. Together, those two figures give
            a clearer picture than either measure alone.
          </p>
          <p>
            A larger percentage does not automatically mean a large practical
            impact. A small starting value can make a change look dramatic in
            percentage terms, while a large starting value can make a meaningful
            dollar change look modest as a percentage. For simple share-of-value
            math, the{" "}
            {toolLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
            may be enough.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool measures arithmetic change only. It does not explain why a
            number changed, whether the increase is sustainable, or whether it
            is favorable in a financial, business, or academic sense.
          </p>
          <p>
            If the original value is zero, percentage change becomes undefined
            in the usual sense. The calculator will still surface that the
            comparison is unusual, but you should interpret zero-baseline cases
            carefully rather than treating them as normal growth figures.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when a value has gone up and you want a clean
            summary of the change. It works well for budgets, pricing checks,
            performance reviews, and simple before-and-after comparisons.
          </p>
          <p>
            It can also complement the{" "}
            {toolLink(
              "/calculators/compound-interest-calculator",
              "compound interest calculator",
            )}{" "}
            for understanding growth language and the{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}{" "}
            for the opposite direction.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "What is the difference between increase amount and percentage increase?",
        answer:
          "The increase amount is the raw change in the original unit, while the percentage increase shows how large that change is relative to the starting value.",
      },
      {
        question: "Can I use this for price increases?",
        answer:
          "Yes. It works well for comparing old and new prices, bills, wages, or any other numeric value that increased.",
      },
      {
        question: "What if the new value is lower than the original?",
        answer:
          "The math still works, but a decrease-focused tool is easier to read. In that case, the percentage decrease calculator is usually the better choice.",
      },
      {
        question: "Why is a zero starting value tricky?",
        answer:
          "Because percentage change is normally measured relative to the original value. When that original value is zero, the standard formula stops behaving like an ordinary comparison.",
      },
      {
        question: "Is this tool making a financial recommendation?",
        answer:
          "No. It only measures change and does not tell you what action to take or whether a result is good for your situation.",
      },
    ],
  },
  "percentage-decrease-calculator": {
    title: "Percentage Decrease Calculator",
    description:
      "Measure the decrease amount and percentage change from an original value to a lower new value with a simple percentage decrease calculator.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this percentage decrease calculator to compare an original value with a lower new value. It shows both the amount of the drop and the percentage decrease, which is useful for discounts, cost reductions, score changes, and everyday comparisons.",
    category: "Everyday Tools",
    path: "/calculators/percentage-decrease-calculator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator compares an original value with a new value and
            measures the difference between them. It then divides that
            difference by the original value to estimate the percentage decline.
          </p>
          <p>
            The tool is designed for situations where the newer number is lower
            than the starting number. If the newer value is higher instead, the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            is the cleaner way to frame the result.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The decrease amount tells you the raw size of the drop. The
            percentage decrease shows how big that drop is relative to where you
            started. Together, those two views help you compare different
            scenarios more easily.
          </p>
          <p>
            This is often useful when looking at markdowns, reduced expenses, or
            declines in a measured value. Still, a lower value is not always
            automatically good or bad. It depends on context, which this tool
            does not interpret for you.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a numeric comparison tool, not an analysis engine. It does
            not explain why the decrease happened or whether it should affect a
            financial, business, academic, or health decision.
          </p>
          <p>
            Zero starting values and unusual inputs can also make percentage
            comparisons hard to interpret. The tool keeps the arithmetic simple,
            so you should still review edge cases with common sense rather than
            treating every output as equally meaningful.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to describe how much something has
            fallen from its original level. It works well for sale pricing,
            budget reductions, consumption changes, and before-and-after
            comparisons.
          </p>
          <p>
            It pairs naturally with the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            and the{" "}
            {toolLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
            when you need both change analysis and quick percentage-of-value
            math in the same workflow.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is percentage decrease the same as subtraction?",
        answer:
          "Not exactly. Subtraction gives the raw drop, while percentage decrease shows the size of that drop relative to the original value.",
      },
      {
        question: "Can I use this for discounts?",
        answer:
          "Yes. It works well for measuring the percentage reduction from an original price to a sale price.",
      },
      {
        question: "What if the new value is actually higher?",
        answer:
          "The math will signal that direction change, but the percentage increase calculator is the better tool for upward comparisons.",
      },
      {
        question: "Does this explain whether a decrease is good?",
        answer:
          "No. It only measures the change itself and does not judge whether the result is favorable in your specific situation.",
      },
      {
        question: "Is this tool advice?",
        answer:
          "No. It is an educational calculator and should not be treated as financial, tax, legal, or investment advice.",
      },
    ],
  },
  "bmi-calculator": {
    title: "BMI Calculator",
    description:
      "Estimate body mass index with either imperial or metric measurements using a simple BMI calculator.",
    eyebrow: "Health",
    intro:
      "Use this BMI calculator to estimate body mass index from your height and weight. It supports both imperial and metric measurements and returns a standard BMI category for general reference.",
    category: "Health",
    path: "/calculators/bmi-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            BMI is a ratio that compares body weight with height. In the
            imperial version, the calculation uses pounds and inches. In the
            metric version, it uses kilograms and meters. This tool applies the
            standard formula and then maps the numeric result to a broad BMI
            category.
          </p>
          <p>
            That makes it useful for quick personal reference or classroom
            learning. It is not designed to replace a more complete health
            assessment. If you are trying to understand trends in other
            day-to-day metrics, the{" "}
            {toolLink(
              "/calculators/percentage-increase-calculator",
              "percentage increase calculator",
            )}{" "}
            and{" "}
            {toolLink(
              "/calculators/percentage-decrease-calculator",
              "percentage decrease calculator",
            )}{" "}
            can help compare change over time.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The numeric BMI result is a screening-style estimate, not a
            diagnosis. The category label gives a general reference point based
            on widely used BMI ranges, which can be useful for broad educational
            context and simple self-checking.
          </p>
          <p>
            A BMI value does not directly measure body composition, fitness,
            lifestyle, or medical risk. Two people with the same BMI may have
            very different health profiles. That is why the result should be
            read as a general indicator rather than a complete assessment.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            BMI is intentionally simple, and that simplicity is also its
            biggest limitation. It does not distinguish between muscle and fat,
            does not reflect body fat distribution, and may be less informative
            for some individuals depending on age, build, or health context.
          </p>
          <p>
            This calculator does not provide medical advice, diagnosis, or
            treatment guidance. If you need health-specific interpretation, a
            clinician or qualified professional is the right next source, not an
            online estimate alone.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a quick BMI estimate for general
            education, tracking, or personal reference. It can be helpful when
            comparing measurements over time or learning the basics of BMI
            ranges.
          </p>
          <p>
            It is best used as one small data point, not as a standalone
            verdict. If you are doing general self-tracking, you may also find
            the{" "}
            {toolLink("/calculators/age-calculator", "age calculator")} useful
            for milestone reference and the{" "}
            {toolLink("/calculators/unit-converter", "unit converter")} for
            switching between imperial and metric measures elsewhere.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does BMI measure body fat directly?",
        answer:
          "No. BMI is a height-to-weight screening estimate and does not directly measure body fat percentage or overall fitness.",
      },
      {
        question: "Can I use either imperial or metric units?",
        answer:
          "Yes. This calculator supports both measurement systems so you can enter the format that is easiest for you.",
      },
      {
        question: "Is a BMI category a diagnosis?",
        answer:
          "No. The category is a general reference point and should not be treated as a diagnosis or a medical judgment by itself.",
      },
      {
        question: "Why can two people with the same BMI look different?",
        answer:
          "Because BMI does not account for body composition, muscle mass, or fat distribution. It is a simple screening tool, not a full health profile.",
      },
      {
        question: "Is this calculator medical advice?",
        answer:
          "No. It is educational only and does not provide medical, nutritional, or treatment advice.",
      },
    ],
  },
  "compound-interest-calculator": {
    title: "Compound Interest Calculator",
    description:
      "Project savings growth from a starting balance, recurring contributions, annual return, and compounding frequency.",
    eyebrow: "Finance",
    intro:
      "Use this compound interest calculator to estimate how a balance could grow over time with recurring contributions. It is a practical educational tool for understanding long-term savings growth, not a prediction of actual investment performance.",
    category: "Finance",
    path: "/calculators/compound-interest-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with a principal balance, adds any monthly
            contribution you choose, and applies a return assumption across the
            selected number of years. It also considers the compounding
            frequency so the estimate can reflect how often growth is applied to
            the balance.
          </p>
          <p>
            Each month, the balance is updated using the current estimate and
            then increased by the recurring contribution. That iterative
            approach makes the result more intuitive for people who save
            gradually rather than making only a one-time deposit. For
            retirement-specific planning, the{" "}
            {toolLink(
              "/calculators/retirement-calculator",
              "retirement calculator",
            )}{" "}
            gives a similarly practical view.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The future value is the projected ending balance based on the
            assumptions you entered. The total contributions figure shows how
            much money you added directly, while estimated growth isolates the
            portion attributed to the chosen return assumption.
          </p>
          <p>
            That breakdown is helpful because it reminds you that long-term
            outcomes usually reflect both saving behavior and time, not just
            return assumptions. If the result is below your target, the{" "}
            {toolLink(
              "/calculators/savings-goal-calculator",
              "savings goal calculator",
            )}{" "}
            can help test a more concrete monthly contribution plan.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool uses a smooth hypothetical rate of return. Real markets do
            not move in a straight line, and actual investment results can vary
            materially from any steady-growth estimate. Fees, taxes, account
            types, contribution timing, and inflation are also outside the core
            calculation unless you model them separately.
          </p>
          <p>
            Because of that, the output should be treated as an educational
            projection rather than an expected or guaranteed outcome. It does
            not provide financial, tax, legal, or investment advice, and it
            should not be used as a promise of future results.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to explore how time, regular
            saving, and return assumptions interact. It is especially useful for
            early planning, comparing scenarios, or building intuition around
            why long time horizons matter.
          </p>
          <p>
            It works well next to the{" "}
            {toolLink(
              "/calculators/retirement-calculator",
              "retirement calculator",
            )}{" "}
            for long-range planning and the{" "}
            {toolLink(
              "/calculators/savings-goal-calculator",
              "savings goal calculator",
            )}{" "}
            when you already have a target amount in mind.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this calculator predict actual investment returns?",
        answer:
          "No. It uses a steady hypothetical return assumption for education and planning, not a forecast or promise of real market performance.",
      },
      {
        question: "Why does compounding frequency matter?",
        answer:
          "More frequent compounding changes how often growth is applied to the balance, which can slightly change the final estimate over long periods.",
      },
      {
        question: "Do monthly contributions make a big difference?",
        answer:
          "They often do. Regular additions can materially change the ending balance, especially over longer time horizons.",
      },
      {
        question: "Does this include taxes or fees?",
        answer:
          "No. The projection is simplified and does not account for investment fees, taxes, account restrictions, or inflation unless you model those separately.",
      },
      {
        question: "Is this investment advice?",
        answer:
          "No. It is an educational calculator and does not provide investment, tax, legal, or financial advice.",
      },
    ],
  },
  "gpa-calculator": {
    title: "GPA Calculator",
    description:
      "Calculate weighted GPA from course grades and credit hours with a simple GPA calculator.",
    eyebrow: "Education",
    intro:
      "Use this GPA calculator to estimate a weighted grade point average from course grades and credit hours. It is a helpful planning tool for semester reviews, informal projections, and academic conversations.",
    category: "Education",
    path: "/calculators/gpa-calculator",
    applicationCategory: "EducationalApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            Each course entry combines a letter grade with a credit value. The
            calculator converts the letter grade into a grade-point number, then
            weights that value by the associated credit hours. After all valid
            course rows are added together, the tool divides total grade points
            by total credits to estimate GPA.
          </p>
          <p>
            Weighting matters because not every class contributes equally. A
            three-credit course usually carries more influence than a
            one-credit course, so the calculator reflects that difference
            automatically. If you are planning around a specific final exam, the{" "}
            {toolLink("/calculators/grade-calculator", "grade calculator")} is a
            strong companion tool.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result is an estimated weighted GPA based on the grade scale
            used in this calculator and the course mix you enter. It can help
            you understand overall performance trends and test how additional or
            different grades might affect the average.
          </p>
          <p>
            GPA is useful as a summary metric, but it does not capture every
            part of an academic record. Course difficulty, institutional
            policies, honors weighting, repeated classes, and pass-fail rules
            can all matter outside a simple estimate.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool uses a straightforward grade scale and standard credit
            weighting. Schools may use different grade-point mappings, weighted
            honors systems, plus-minus rules, or transcript conventions, which
            can make the official GPA differ from the estimate here.
          </p>
          <p>
            Because of that, the result should be treated as an educational
            estimate rather than an official academic record. It is not a school
            policy interpreter and does not replace your institution&apos;s own
            reported GPA.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a quick GPA estimate for planning,
            reflection, or goal setting. It is especially helpful before final
            grades post, when you are modeling several possible outcomes.
          </p>
          <p>
            It works well alongside the{" "}
            {toolLink("/calculators/grade-calculator", "grade calculator")} for
            target-grade planning and the{" "}
            {toolLink(
              "/calculators/percentage-calculator",
              "percentage calculator",
            )}{" "}
            if you need quick arithmetic for score weighting in a class.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this calculator use weighted credits?",
        answer:
          "Yes. Each course grade is weighted by its credit hours so higher-credit classes influence the GPA more than lower-credit classes.",
      },
      {
        question: "Will this always match my school transcript?",
        answer:
          "Not always. Schools may use different grade scales, honors weighting, repeated-course rules, or institutional adjustments.",
      },
      {
        question: "Can I model multiple courses at once?",
        answer:
          "Yes. You can add multiple course rows and adjust grades or credits to test different scenarios.",
      },
      {
        question: "Does it handle pass-fail or special grading systems?",
        answer:
          "Not directly. The tool is designed for a standard letter-grade GPA estimate and may not reflect every grading policy.",
      },
      {
        question: "Is this official academic advice?",
        answer:
          "No. It is an educational estimate and should not replace official school records or guidance from academic staff.",
      },
    ],
  },
  "grade-calculator": {
    title: "Grade Calculator",
    description:
      "Estimate the score needed on a final exam to reach a target course grade with a simple grade calculator.",
    eyebrow: "Education",
    intro:
      "Use this grade calculator to estimate the final exam score needed to reach a target course grade. It is a practical academic planning tool for checking what kind of finish would be required under a simplified weighting model.",
    category: "Education",
    path: "/calculators/grade-calculator",
    applicationCategory: "EducationalApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator uses four inputs: your current grade, the
            percentage weight already completed, your target final grade, and
            the weight of the final exam. It uses those values to solve for the
            final exam score needed to bring the weighted course average to the
            target you choose.
          </p>
          <p>
            In other words, it works backward from the desired outcome. That
            makes it useful when you are deciding how realistic a target may be
            or when you want to understand whether your course average already
            puts you close to the finish line. For broader multi-course planning,
            the{" "}
            {toolLink("/calculators/gpa-calculator", "GPA calculator")} is the
            natural companion.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The main result is the estimated score you would need on the final
            exam to reach the target grade under the weights you entered. If the
            required score is above 100, that usually signals the target may not
            be achievable under a standard percentage system. If the required
            score is zero or below, your current standing may already be enough
            to reach the target.
          </p>
          <p>
            This can reduce guesswork, but it is still just a model. Class
            policies, rounding, extra credit, dropped assignments, and grading
            adjustments can all affect what happens in the real course.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator assumes the weights you enter match the course
            grading structure and that the course average behaves in a simple
            linear way. Many classes have extra rules, curve adjustments,
            different rounding conventions, or category-level calculations that
            are more complex.
          </p>
          <p>
            Because of that, the result should be treated as an educational
            estimate rather than a guaranteed academic outcome. It does not
            provide academic advising, and it does not replace the instructor&apos;s
            syllabus or gradebook rules.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a quick sense of what score range
            would be needed to reach a course goal. It is especially helpful
            before finals, when planning study time, or when you are trying to
            set realistic expectations.
          </p>
          <p>
            It also pairs well with the{" "}
            {toolLink("/calculators/gpa-calculator", "GPA calculator")} when you
            are considering how one course result might affect a broader
            academic average, and with the{" "}
            {toolLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
            for simple weighting checks.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "What if the required final exam score is over 100?",
        answer:
          "That usually means the target grade is not reachable under a standard percentage scale based on the inputs you entered.",
      },
      {
        question: "What if the required score is below zero?",
        answer:
          "That suggests your current standing may already be enough to reach the target, assuming the weights and grading rules are accurate.",
      },
      {
        question: "Does this calculator account for curves or extra credit?",
        answer:
          "No. It uses a simplified weighting model and does not include custom instructor policies unless you approximate them yourself.",
      },
      {
        question: "Can I use this for any class?",
        answer:
          "You can use it as a rough estimate for many classes, but it is most reliable when the course uses clear percentage weights and conventional grading.",
      },
      {
        question: "Is this official academic guidance?",
        answer:
          "No. It is an educational estimate and should not replace official class policies or advice from your instructor or academic staff.",
      },
    ],
  },
  "hijri-date-converter": {
    title: "Hijri Date Converter",
    description:
      "Convert Gregorian dates to approximate Hijri dates and Hijri dates to approximate Gregorian dates with a practical online converter.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this Hijri date converter to switch between Gregorian calendar dates and approximate Hijri calendar dates. It is especially useful for planning around Ramadan, Eid, travel, school calendars, and Islamic finance tasks such as tracking zakat anniversaries.",
    category: "Everyday Tools",
    path: "/calculators/hijri-date-converter",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This converter uses a tabular Islamic calendar model to estimate the
            corresponding date in the other calendar system. You can enter a
            Gregorian date to see an approximate Hijri date, or enter a Hijri
            year, month, and day to see an approximate Gregorian equivalent.
          </p>
          <p>
            Because observed Islamic dates may differ by moon sighting and local
            religious authority, the result should be treated as an educational
            estimate rather than an official calendar decision. If you are
            planning around zakat timing, Ramadan, or a local mosque schedule,
            the{" "}
            {toolLink("/zakat", "zakat hub")} and{" "}
            {toolLink("/calculators/zakat-calculator", "zakat calculator")} can
            also be useful references.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The main result shows the estimated matching date in the other
            calendar. When you convert to Hijri, the tool gives you the Hijri
            day, month name, and year. When you convert to Gregorian, it also
            shows the ISO date format and weekday for easier reference.
          </p>
          <p>
            This makes the tool practical for personal planning, calendar
            notes, and rough religious date tracking. It is not meant to settle
            official start dates for fasting, celebrations, or local religious
            observance.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Islamic calendar dates can vary based on moon sighting, regional
            practice, and the approach adopted by a local Islamic authority.
            That means two reliable communities may still announce slightly
            different practical dates around the same part of the month.
          </p>
          <p>
            The converter also does not replace official school, court, travel,
            embassy, or religious calendars. Use it as a planning tool, then
            verify important dates with the relevant authority if exact local
            observance matters.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this tool when you want a quick approximation for Islamic
            months, zakat anniversaries, Ramadan planning, event scheduling, or
            comparing dates across everyday documents and religious reference
            points.
          </p>
          <p>
            It pairs naturally with the{" "}
            {toolLink("/hijri-to-gregorian", "Hijri to Gregorian guide")} and{" "}
            {toolLink(
              "/gregorian-to-hijri",
              "Gregorian to Hijri guide",
            )}{" "}
            for more context, and with the{" "}
            {toolLink("/calculators/date-difference-calculator", "date difference calculator")}{" "}
            if you also need to measure the span between two dates.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is this Hijri date converter exact?",
        answer:
          "No. It provides an approximate conversion based on a tabular Islamic calendar model, and actual observed dates may differ by moon sighting and local authority.",
      },
      {
        question: "Can I convert both directions?",
        answer:
          "Yes. The tool supports Gregorian-to-Hijri and Hijri-to-Gregorian conversion in one place.",
      },
      {
        question: "Why might my local mosque use a different date?",
        answer:
          "Local communities may follow different moon sighting methods or religious authorities, so practical observance dates can vary even when the arithmetic estimate is close.",
      },
      {
        question: "Can I use this for zakat planning?",
        answer:
          "Yes, as a general planning aid. It can be useful when tracking a Hijri anniversary, but exact religious timing should still be checked with trusted local guidance when necessary.",
      },
      {
        question: "Is this an official religious ruling?",
        answer:
          "No. It is an educational utility tool and not a substitute for official calendars or qualified religious guidance.",
      },
    ],
  },
  "federal-income-tax-calculator": {
    title: "Federal Income Tax Calculator",
    description:
      "Estimate federal taxable income, standard-deduction tax, and effective rate with a simplified US federal income tax calculator.",
    eyebrow: "Finance",
    intro:
      "Use this federal income tax calculator to estimate taxable income, bracket-based federal tax, and your effective rate under a simplified US framework. It is designed for educational planning, not for filing a return or replacing professional tax review.",
    category: "Finance",
    path: "/calculators/federal-income-tax-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with annual gross income, subtracts the
            pre-tax deductions or adjustments you enter, applies the standard
            deduction for the filing status you select, and then runs the
            remaining taxable income through a simplified federal bracket model.
          </p>
          <p>
            It also allows an estimate for tax credits, which reduce the
            bracket-based tax result after the income calculation has already
            been made. For a fuller conceptual walkthrough, read{" "}
            {toolLink(
              "/how-to-calculate-federal-income-tax",
              "how to calculate federal income tax",
            )}{" "}
            and the broader {toolLink("/tax", "tax hub")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The estimated federal tax result is a planning figure, not a filing
            figure. It helps you think through how taxable income, filing
            status, and standard deduction assumptions interact. The marginal
            rate shows the top bracket applied to your last taxable dollars,
            while the effective rate shows estimated tax as a share of gross
            income.
          </p>
          <p>
            If you want to understand the language behind those results, move to{" "}
            {toolLink(
              "/federal-income-tax-brackets",
              "federal income tax brackets",
            )}{" "}
            and{" "}
            {toolLink(
              "/taxable-income-vs-gross-income",
              "taxable income vs. gross income",
            )}
            .
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator uses a simplified standard-deduction approach. It
            does not handle itemized deductions, capital gains, AMT, multiple
            states, special credits, phaseouts, or the many return-specific
            details that can change actual federal tax outcomes.
          </p>
          <p>
            It is an educational estimate only and not legal, tax, or financial
            advice. If you are dealing with a real filing decision, pair this
            with the AGI guide, the refund guide, and qualified tax review where
            needed.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a fast estimate before reviewing a
            paycheck change, comparing offers, adjusting withholding, or
            pressure-testing a rough number from software. It is most useful
            when you want a planning frame rather than an exact return answer.
          </p>
          <p>
            Good companion reads are{" "}
            {toolLink(
              "/what-is-adjusted-gross-income",
              "what adjusted gross income is",
            )}
            ,{" "}
            {toolLink(
              "/common-tax-filing-mistakes",
              "common tax filing mistakes",
            )}
            ,{" "}
            {toolLink(
              "/tax-refund-calculator-guide",
              "tax refund calculator guide",
            )}
            , and{" "}
            {toolLink(
              "/self-employment-tax-guide",
              "self-employment tax guide",
            )}{" "}
            if business income is part of the story.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this federal income tax calculator replace tax software?",
        answer:
          "No. It is a simplified educational calculator and does not replace tax software, IRS instructions, or professional tax advice.",
      },
      {
        question: "Does it use the standard deduction?",
        answer:
          "Yes. This estimate uses a standard-deduction framework rather than itemized deductions.",
      },
      {
        question: "Does the marginal rate apply to all of my income?",
        answer:
          "No. The marginal rate reflects the top bracket reached by taxable income, while lower slices of taxable income are generally taxed at lower rates.",
      },
      {
        question: "Can I use this for self-employment income too?",
        answer:
          "You can use it for rough federal income tax planning, but self-employment tax is a separate issue and should be reviewed with the self-employment tax calculator and guide.",
      },
      {
        question: "Are the results official?",
        answer:
          "No. The results are estimates only and should not be treated as official federal tax calculations or professional advice.",
      },
    ],
  },
  "self-employment-tax-calculator": {
    title: "Self-Employment Tax Calculator",
    description:
      "Estimate self-employment tax on net business income with a simplified calculator for freelancers, contractors, and small business owners.",
    eyebrow: "Finance",
    intro:
      "Use this self-employment tax calculator to estimate the Social Security and Medicare portion of self-employment tax on net business income. It is built for educational planning and cash-flow awareness, not for filing decisions or professional tax advice.",
    category: "Finance",
    path: "/calculators/self-employment-tax-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with annual net self-employment income and
            applies a simplified self-employment tax framework. It uses 92.35%
            of net earnings as the working tax base, then estimates the Social
            Security and Medicare portions that commonly make up self-employment
            tax.
          </p>
          <p>
            It does not attempt to calculate your full return. For the broader
            context, pair this tool with{" "}
            {toolLink(
              "/self-employment-tax-guide",
              "the self-employment tax guide",
            )}{" "}
            and{" "}
            {toolLink(
              "/how-to-calculate-federal-income-tax",
              "how to calculate federal income tax",
            )}
            .
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The total self-employment tax estimate helps you see the extra layer
            that often surprises freelancers and contractors. The deductible
            half result is included because many people hear that concept before
            they understand where it fits in the return.
          </p>
          <p>
            This is why the tool works best as a reserve-planning aid. It shows
            why net business income can produce a different tax feel than W-2
            wages, even before the ordinary federal income tax calculation is
            finished.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This estimate does not include every real-world wrinkle. It does not
            handle entity-specific rules, Additional Medicare Tax, wage-base
            interactions with outside employment, state taxes, or specialized
            business circumstances.
          </p>
          <p>
            The result is an educational estimate only. If you are filing for a
            real business, use this as a planning checkpoint and not as a final
            tax position.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you are freelancing, contracting, or
            earning side-gig income and want a quick sense of how much of your
            net income may need to be set aside. It is especially useful before
            you build a reserve habit or compare contractor income to W-2
            income.
          </p>
          <p>
            Strong companion reads are{" "}
            {toolLink("/tax", "the tax hub")},{" "}
            {toolLink(
              "/common-tax-filing-mistakes",
              "common tax filing mistakes",
            )}
            ,{" "}
            {toolLink(
              "/tax-refund-calculator-guide",
              "tax refund calculator guide",
            )}
            ,{" "}
            {toolLink(
              "/what-is-adjusted-gross-income",
              "what adjusted gross income is",
            )}
            ,{" "}
            {toolLink(
              "/taxable-income-vs-gross-income",
              "taxable income vs. gross income",
            )}
            , and{" "}
            {toolLink(
              "/federal-income-tax-brackets",
              "federal income tax brackets",
            )}{" "}
            if you are comparing multiple layers of tax.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is self-employment tax the same as federal income tax?",
        answer:
          "No. Self-employment tax is a separate tax layer from ordinary federal income tax, even though both affect the year-end return.",
      },
      {
        question: "Should I use net income or gross revenue here?",
        answer:
          "This calculator is designed for net self-employment income after ordinary business expenses, not raw top-line revenue.",
      },
      {
        question: "Does this include every tax on freelance income?",
        answer:
          "No. It estimates self-employment tax only and does not replace full federal, state, or local tax calculations.",
      },
      {
        question: "Can this help with reserve planning?",
        answer:
          "Yes. It is especially useful as a reserve-planning estimate so freelancers can set aside money more deliberately during the year.",
      },
      {
        question: "Are the results official?",
        answer:
          "No. The results are estimates only and should not be treated as official tax advice or filing calculations.",
      },
    ],
  },
  "tax-refund-estimator": {
    title: "Tax Refund Estimator",
    description:
      "Estimate whether federal withholding may produce a refund or amount due under a simplified US federal tax model.",
    eyebrow: "Finance",
    intro:
      "Use this tax refund estimator to compare simplified estimated federal income tax against your federal withholding. It is a planning tool for understanding refund direction and rough size, not a filing tool or substitute for tax advice.",
    category: "Finance",
    path: "/calculators/tax-refund-estimator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This estimator uses the same simplified federal income tax approach
            as Drutilio&apos;s tax calculator. It estimates taxable income from
            gross income, pre-tax deductions, filing status, and tax credits,
            then compares that estimate with the federal withholding amount you
            enter.
          </p>
          <p>
            A positive difference is shown as an estimated refund. A negative
            difference is shown as an estimated amount due. For the deeper logic
            behind that comparison, read the{" "}
            {toolLink(
              "/tax-refund-calculator-guide",
              "tax refund calculator guide",
            )}{" "}
            and{" "}
            {toolLink(
              "/how-to-calculate-federal-income-tax",
              "how to calculate federal income tax",
            )}
            .
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result is best read as a relationship between two things:
            estimated federal liability and estimated withholding already paid
            in. A larger refund does not automatically mean lower taxes, and a
            smaller refund does not automatically mean a mistake. Often it
            reflects how closely withholding matched the year-end estimate.
          </p>
          <p>
            That is why this tool is useful for expectation setting. It helps
            you interpret withholding more calmly before you react to a raw
            refund number.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This estimator does not include every real-world return detail. It
            does not handle itemized deductions, unusual credits, capital gains,
            multi-state issues, contractor estimated payments, or other forms
            that can materially change an actual refund.
          </p>
          <p>
            Results are estimates only and should not be treated as legal,
            professional, or filing advice. Refund outcomes often change when
            late documents or additional income sources are added.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this estimator when you want a rough idea of whether current
            withholding is likely to overshoot or undershoot a simplified
            federal tax estimate. It is especially useful after a pay change, a
            withholding change, or a midyear check-in.
          </p>
          <p>
            Good follow-up reads are{" "}
            {toolLink("/tax", "the tax hub")},{" "}
            {toolLink(
              "/common-tax-filing-mistakes",
              "common tax filing mistakes",
            )}
            ,{" "}
            {toolLink(
              "/taxable-income-vs-gross-income",
              "taxable income vs. gross income",
            )}
            ,{" "}
            {toolLink(
              "/what-is-adjusted-gross-income",
              "what adjusted gross income is",
            )}
            ,{" "}
            {toolLink(
              "/federal-income-tax-brackets",
              "federal income tax brackets",
            )}
            , and{" "}
            {toolLink(
              "/self-employment-tax-guide",
              "self-employment tax guide",
            )}{" "}
            if side income is involved.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does a big estimated refund mean I paid less tax?",
        answer:
          "Not necessarily. It often means more tax was withheld during the year than the simplified estimate suggests was necessary.",
      },
      {
        question: "Can this estimator predict my exact refund?",
        answer:
          "No. It is a simplified educational estimate and many return-specific details can change the final result.",
      },
      {
        question: "Why might I owe even if withholding seems high?",
        answer:
          "Additional income, reduced credits, side-gig earnings, or simplified assumptions can all change the final balance compared with withholding alone.",
      },
      {
        question: "Should I use this before changing withholding?",
        answer:
          "Yes, it can be useful as a rough check before revisiting withholding, as long as you understand the estimate is simplified.",
      },
      {
        question: "Are the results official?",
        answer:
          "No. The results are estimates only and should not be treated as professional tax advice or official filing calculations.",
      },
    ],
  },
  "unit-converter": {
    title: "Unit Converter",
    description:
      "Convert common length, weight, and temperature units in one online unit converter.",
    eyebrow: "Everyday Tools",
    intro:
      "Use this unit converter to switch between common length, weight, and temperature units. It is a practical everyday tool for quick comparisons, schoolwork, travel planning, recipes, and general reference.",
    category: "Everyday Tools",
    path: "/calculators/unit-converter",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool groups units into conversion categories so that only
            compatible units are compared. Length and weight conversions use a
            standard base-unit approach, while temperature uses direct formulas
            because those scales do not convert through a simple multiplication
            factor alone.
          </p>
          <p>
            Once you choose a category, you enter a value, pick the starting
            unit, and select the destination unit. The tool then computes the
            translated measurement immediately. For number comparisons that sit
            alongside conversions, the{" "}
            {toolLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
            can be a helpful companion.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result is the equivalent value in the destination unit you
            selected. For example, it can tell you how many feet are in a
            meter-based measurement or how Fahrenheit and Celsius compare for a
            given temperature.
          </p>
          <p>
            This is most useful as a quick translation layer between unit
            systems. It does not interpret whether a measurement is safe,
            appropriate, clinically meaningful, or compliant with a specific
            standard. It simply converts the number.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            The converter is designed for common units only. It does not cover
            every possible scientific, engineering, or trade-specific unit, and
            it is not meant to replace reference material in highly specialized
            contexts.
          </p>
          <p>
            For tasks where precision standards matter, such as regulated
            labeling, technical design, or clinical documentation, you should
            verify the final numbers against the relevant official source rather
            than relying on a general web tool alone.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you need a quick translation between unit
            systems without opening a spreadsheet or searching through formulas.
            It is especially handy for everyday metric-imperial switching and
            basic classroom work.
          </p>
          <p>
            It also pairs naturally with the{" "}
            {toolLink("/calculators/bmi-calculator", "BMI calculator")} when you
            are working across measurement systems and the{" "}
            {toolLink(
              "/calculators/date-difference-calculator",
              "date difference calculator",
            )}{" "}
            for general-purpose planning workflows.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "What unit types does this converter support?",
        answer:
          "It currently supports common length, weight, and temperature conversions in one tool.",
      },
      {
        question: "Why is temperature handled differently?",
        answer:
          "Temperature scales use direct formulas rather than a simple base-factor conversion, so the math is handled separately.",
      },
      {
        question: "Can I convert between unrelated categories?",
        answer:
          "No. The tool only converts between compatible units within the same category, such as length to length or weight to weight.",
      },
      {
        question: "Is this suitable for technical or regulated work?",
        answer:
          "It can be useful as a quick estimate, but specialized or regulated contexts should be checked against an authoritative source.",
      },
      {
        question: "Is this converter professional advice?",
        answer:
          "No. It is a general utility tool and does not provide engineering, medical, legal, or official compliance advice.",
      },
    ],
  },
};

export function getToolPageContent(slug: string) {
  return toolPageContent[slug];
}

export function getToolMetadata(slug: string) {
  const content = getToolPageContent(slug);

  if (!content) {
    throw new Error(`Missing tool metadata for slug: ${slug}`);
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: content.path,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: content.path,
    },
  };
}
