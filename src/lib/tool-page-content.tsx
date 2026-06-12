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
  "calorie-calculator": {
    title: "Calorie Calculator",
    description:
      "Estimate maintenance calories and simple calorie targets using age, body size, sex, and activity assumptions.",
    eyebrow: "Health",
    intro:
      "Use this calorie calculator to estimate maintenance calories and simplified gain-or-loss ranges. It is designed for educational planning only and should not be treated as medical or nutrition advice.",
    category: "Health",
    path: "/calculators/calorie-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with a basal metabolic rate estimate and
            then applies a broad activity multiplier to estimate total daily
            energy needs. In plain language, it combines body size, age, sex,
            and a rough movement assumption to estimate maintenance calories.
          </p>
          <p>
            It also shows simplified lower and higher calorie targets so you
            can compare a mild fat-loss or gain scenario without doing the math
            manually. If you want to isolate the resting-energy piece on its
            own, the {toolLink("/calculators/bmr-calculator", "BMR calculator")}{" "}
            is the best companion tool.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The maintenance result is a planning estimate for roughly weight
            stability under the selected assumptions. The gain and loss targets
            are not personalized prescriptions. They are simple reference
            points that can help you think through possible scenarios.
          </p>
          <p>
            Because nutrition and body-composition questions rarely come down to
            one number alone, many people also compare the result alongside the{" "}
            {toolLink("/calculators/bmi-calculator", "BMI calculator")} and{" "}
            {toolLink(
              "/calculators/body-fat-calculator",
              "body fat calculator",
            )}
            .
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator uses formula-based estimates, not direct metabolic
            measurement. Real energy needs can vary because of training volume,
            body composition, medication, medical conditions, and day-to-day
            routine differences.
          </p>
          <p>
            It does not provide medical advice, diagnosis, or treatment
            guidance. For personal health concerns, disordered eating history,
            or individualized nutrition questions, consult a qualified
            healthcare professional.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this tool when you want a structured calorie starting point for
            general wellness planning, body-weight trend review, or educational
            comparison across different activity levels.
          </p>
          <p>
            It pairs naturally with{" "}
            {toolLink(
              "/how-many-calories-should-i-eat",
              "how many calories you should eat",
            )}
            ,{" "}
            {toolLink("/what-is-bmr", "what BMR means")}, and the{" "}
            {toolLink("/health", "health hub")} for broader context.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this calorie calculator tell me exactly how much to eat?",
        answer:
          "No. It provides a useful estimate, not an exact prescription or a guarantee of results.",
      },
      {
        question: "What is the difference between BMR and maintenance calories?",
        answer:
          "BMR is a resting-energy estimate, while maintenance calories add a rough activity assumption on top of that baseline.",
      },
      {
        question: "Can two people with similar body size need different calories?",
        answer:
          "Yes. Formula estimates can differ from real needs because of lifestyle, training, body composition, and individual physiology.",
      },
      {
        question: "Should I use this tool for a medical condition?",
        answer:
          "Not as a substitute for care. If you have a personal medical or nutrition concern, consult a qualified healthcare professional.",
      },
      {
        question: "Is this nutrition or medical advice?",
        answer:
          "No. It is an educational estimate only.",
      },
    ],
  },
  "bmr-calculator": {
    title: "BMR Calculator",
    description:
      "Estimate basal metabolic rate using age, sex, height, and weight with a simple online BMR calculator.",
    eyebrow: "Health",
    intro:
      "Use this BMR calculator to estimate basal metabolic rate, which is a rough measure of resting energy needs. It is an educational tool for understanding metabolism concepts, not a medical assessment.",
    category: "Health",
    path: "/calculators/bmr-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool uses a common BMR formula built from age, sex, height,
            and weight. It estimates the energy your body may use at rest
            before daily movement and exercise are layered on top.
          </p>
          <p>
            That makes it a useful foundation for broader calorie planning. If
            you want the next step beyond resting metabolism, use the{" "}
            {toolLink("/calculators/calorie-calculator", "calorie calculator")}
            .
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result is a resting-energy estimate expressed in calories per
            day. It is not the same thing as maintenance calories, because most
            people burn more than their BMR once activity is included.
          </p>
          <p>
            In practical use, the number is best treated as a baseline rather
            than as a daily eating target by itself.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Formula-based BMR estimates cannot capture every individual
            difference. They do not directly measure metabolism, hormone status,
            or clinical health conditions.
          </p>
          <p>
            This calculator does not provide diagnosis or medical advice. For a
            personalized interpretation, consult a qualified healthcare
            professional.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to understand the resting side of
            calorie planning, compare scenarios, or learn how BMR fits into
            total daily energy estimates.
          </p>
          <p>
            It works well alongside{" "}
            {toolLink("/what-is-bmr", "what BMR is")}, the{" "}
            {toolLink("/calculators/calorie-calculator", "calorie calculator")},
            and the {toolLink("/health", "health hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is BMR the same as total calories burned in a day?",
        answer:
          "No. BMR is a resting estimate, while total daily energy use usually includes movement and activity.",
      },
      {
        question: "Can online tools measure metabolism exactly?",
        answer:
          "No. They estimate metabolism with formulas rather than direct testing.",
      },
      {
        question: "Why does age affect BMR?",
        answer:
          "Age is one of the common inputs used by formula-based estimates because energy needs often shift over time.",
      },
      {
        question: "Should I base medical decisions on this result?",
        answer:
          "No. This is an educational estimate and not a substitute for professional care.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is a general educational calculator only.",
      },
    ],
  },
  "body-fat-calculator": {
    title: "Body Fat Calculator",
    description:
      "Estimate body fat percentage using a simple circumference-based body fat calculator.",
    eyebrow: "Health",
    intro:
      "Use this body fat calculator to estimate body fat percentage from body measurements. It is designed for educational reference and trend thinking, not for clinical diagnosis.",
    category: "Health",
    path: "/calculators/body-fat-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator uses a simplified circumference-based method that
            relies on height plus neck, waist, and sometimes hip measurements.
            It is commonly used for rough body-composition estimates when more
            advanced testing is not available.
          </p>
          <p>
            That makes it more composition-focused than the{" "}
            {toolLink("/calculators/bmi-calculator", "BMI calculator")}, even
            though it is still an estimate rather than a clinical measurement.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The result shows an estimated body fat percentage and a broad
            reference category. That category is only meant to help you read the
            estimate more easily. It is not a diagnosis and should not be used
            as a standalone health judgment.
          </p>
          <p>
            For broader context, pair it with{" "}
            {toolLink(
              "/bmi-vs-body-fat-percentage",
              "BMI vs. body fat percentage",
            )}{" "}
            and the {toolLink("/health", "health hub")}.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Home body-fat estimates can vary depending on measurement technique,
            body shape, and the method used. Circumference formulas are useful
            for rough context but should not be treated as exact.
          </p>
          <p>
            This tool does not diagnose health conditions or provide medical
            advice. If body-composition interpretation is tied to a medical or
            treatment concern, consult a qualified healthcare professional.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a rough body-composition-style
            estimate, especially if BMI alone feels too broad for the question
            you are asking.
          </p>
          <p>
            It works well next to the{" "}
            {toolLink("/calculators/bmi-calculator", "BMI calculator")}, the{" "}
            {toolLink("/healthy-weight-guide", "healthy weight guide")}, and
            the {toolLink("/health", "health hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is body fat percentage more exact than BMI?",
        answer:
          "Not automatically. It can provide different context, but simplified body-fat methods are still estimates.",
      },
      {
        question: "Do I need hip measurements?",
        answer:
          "Hip measurements are commonly used for women in circumference-based methods, while the simplified male method usually relies on neck and waist measurements.",
      },
      {
        question: "Can tape-measure errors affect the result?",
        answer:
          "Yes. Small measurement differences can change the estimate, so consistency matters.",
      },
      {
        question: "Should I treat the category as a diagnosis?",
        answer:
          "No. It is a broad reference label, not a clinical diagnosis.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is an educational estimate only.",
      },
    ],
  },
  "ideal-weight-calculator": {
    title: "Ideal Weight Calculator",
    description:
      "Estimate a reference ideal weight and compare it with a healthy-BMI range using a simple ideal weight calculator.",
    eyebrow: "Health",
    intro:
      "Use this ideal weight calculator to compare a reference ideal-weight estimate with a broad healthy-BMI range. It is meant for educational perspective rather than for defining one perfect target number.",
    category: "Health",
    path: "/calculators/ideal-weight-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator uses height and sex to estimate a common
            formula-based reference weight. It also calculates a broad
            healthy-BMI comparison range so you can see the difference between
            one reference number and a wider range.
          </p>
          <p>
            That side-by-side view is useful because healthy-weight discussions
            are usually more nuanced than a single target. For the broader
            explanation, read the{" "}
            {toolLink("/healthy-weight-guide", "healthy weight guide")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The reference formula is just that: a reference. The BMI range is a
            second frame of comparison. Neither output should be interpreted as
            a personalized medical instruction.
          </p>
          <p>
            Many people find it helpful to compare these numbers with the{" "}
            {toolLink("/calculators/bmi-calculator", "BMI calculator")} and the{" "}
            {toolLink(
              "/calculators/body-fat-calculator",
              "body fat calculator",
            )}{" "}
            rather than relying on one number alone.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Ideal-weight formulas simplify human bodies into one reference
            equation. They do not capture body composition, medical context,
            strength, mobility, or how sustainable a given weight may be for an
            individual person.
          </p>
          <p>
            This calculator is educational only and not medical advice. For
            individualized goals or health concerns, consult a qualified
            healthcare professional.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this tool when you want perspective on common reference ranges
            rather than an authoritative target. It can be especially helpful
            when the question is “What range do these tools usually point to?”
            rather than “What should I do medically?”
          </p>
          <p>
            It belongs with the{" "}
            {toolLink("/healthy-weight-guide", "healthy weight guide")} and the{" "}
            {toolLink("/health", "health hub")} for the full context.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is there one perfect ideal weight for everyone?",
        answer:
          "No. This calculator provides reference estimates, not one universally correct target.",
      },
      {
        question: "Why does the calculator show a range as well as one number?",
        answer:
          "Because healthy-weight discussions are usually better framed as ranges and context, not only a single figure.",
      },
      {
        question: "Can muscle mass make ideal-weight estimates less useful?",
        answer:
          "Yes. Body composition is one reason reference formulas should be interpreted cautiously.",
      },
      {
        question: "Should I set medical goals from this result alone?",
        answer:
          "No. This is a general educational tool and not a substitute for individualized care.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is educational only.",
      },
    ],
  },
  "water-intake-calculator": {
    title: "Water Intake Calculator",
    description:
      "Estimate a simple daily water target using body weight and activity assumptions with an online water intake calculator.",
    eyebrow: "Health",
    intro:
      "Use this water intake calculator to estimate a simple daily hydration target from body weight and exercise time. It is a rough wellness planning tool, not a medical hydration prescription.",
    category: "Health",
    path: "/calculators/water-intake-calculator",
    applicationCategory: "HealthApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with a body-weight-based estimate and then
            adds a simple adjustment for exercise time. That creates a practical
            hydration planning number without pretending to account for every
            climate, training, or medical factor.
          </p>
          <p>
            The output is useful for broad daily awareness. It is not a sports
            medicine tool and it does not replace individualized hydration
            guidance.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The daily ounces and liters are rough targets for general planning.
            They can help with routine-building, but they should not be read as
            a guarantee that one number fits every person or every day.
          </p>
          <p>
            If you are also looking at calorie intake or body metrics, the{" "}
            {toolLink("/calculators/calorie-calculator", "calorie calculator")}{" "}
            and {toolLink("/calculators/bmi-calculator", "BMI calculator")} are
            useful companions within the same cluster.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Hydration needs can change with weather, medication, illness,
            pregnancy, training intensity, diet, and medical conditions. A
            simple body-weight formula cannot fully reflect those differences.
          </p>
          <p>
            This tool is not medical advice. For symptoms, fluid restrictions,
            kidney issues, or other health concerns, consult a qualified
            healthcare professional.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want a quick hydration reference for
            day-to-day planning, especially if you exercise regularly or prefer
            a more structured intake target.
          </p>
          <p>
            It pairs naturally with the{" "}
            {toolLink("/health", "health hub")} and the{" "}
            {toolLink(
              "/common-weight-loss-mistakes",
              "common weight-loss mistakes guide",
            )}{" "}
            when you are trying to avoid overinterpreting normal short-term
            body fluctuations.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this calculator know exactly how much water I need?",
        answer:
          "No. It provides a rough estimate, not an exact medical recommendation.",
      },
      {
        question: "Why does exercise increase the estimate?",
        answer:
          "Because movement and sweat loss can raise hydration needs in many situations.",
      },
      {
        question: "Can climate change water needs?",
        answer:
          "Yes. Heat, humidity, altitude, and illness can all change hydration needs beyond this simple estimate.",
      },
      {
        question: "Should I use this for a medical condition?",
        answer:
          "Not as a substitute for care. For medical questions, consult a qualified healthcare professional.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. It is an educational planning tool only.",
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
            {toolLink(
              "/calculators/final-grade-calculator",
              "final grade calculator",
            )}{" "}
            is a strong companion tool.
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
            {toolLink(
              "/calculators/final-grade-calculator",
              "final grade calculator",
            )}{" "}
            for target-grade planning, the{" "}
            {toolLink(
              "/how-to-calculate-gpa",
              "how to calculate GPA guide",
            )},
            and the {toolLink("/education", "education hub")}. For quick math checks, the{" "}
            {toolLink(
              "/calculators/percentage-calculator",
              "percentage calculator",
            )}{" "}
            can still help with score weighting in a class.
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
  "final-grade-calculator": {
    title: "Final Grade Calculator",
    description:
      "Estimate the exam score needed to reach a target course grade with a simple final grade calculator.",
    eyebrow: "Education",
    intro:
      "Use this final grade calculator to estimate the exam score needed to reach a target course grade. It is a practical academic planning tool for checking what kind of finish would be required under a simplified weighting model.",
    category: "Education",
    path: "/calculators/final-grade-calculator",
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
            puts you close to the finish line. For broader multi-course
            planning, the {toolLink("/calculators/gpa-calculator", "GPA calculator")} is a
            natural companion.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The main result is the estimated score you would need on the final
            exam to reach the target grade under the weights you entered. If
            the required score is above 100, that usually signals the target
            may not be achievable under a standard percentage system. If the
            required score is zero or below, your current standing may already
            be enough to reach the target.
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
            {toolLink("/calculators/gpa-calculator", "GPA calculator")}, the{" "}
            {toolLink(
              "/calculators/study-time-calculator",
              "study time calculator",
            )},
            the {toolLink("/final-grade-calculator-guide", "final grade calculator guide")},
            and the {toolLink("/education", "education hub")}.
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
  "study-time-calculator": {
    title: "Study Time Calculator",
    description:
      "Estimate a simple weekly study plan from subject count, study-hour goals, and available study days.",
    eyebrow: "Education",
    intro:
      "Use this study time calculator to turn a weekly study-hours goal into a simple subject-and-day schedule. It is an educational planning tool, not a guarantee of academic results.",
    category: "Education",
    path: "/calculators/study-time-calculator",
    applicationCategory: "EducationalApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with three core inputs: the number of
            subjects you are balancing, the number of study hours you want to
            complete each week, and the number of days you realistically have
            available.
          </p>
          <p>
            From there, it spreads the hours across days and subjects to create
            a simple weekly outline. It is designed to support planning, not to
            predict performance or replace a more detailed syllabus-based plan.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The daily hours result helps you picture what the week might look
            like in practice. The session estimates and per-subject totals make
            the plan more concrete so you can decide whether the target feels
            realistic.
          </p>
          <p>
            For many students, the most valuable part of the tool is not the
            exact number. It is the moment where a vague idea becomes a schedule
            that can actually be reviewed and adjusted.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool does not know subject difficulty, commute time, exam
            proximity, attention span, or school-specific workload patterns.
            It provides a rough planning frame rather than a personalized study
            prescription.
          </p>
          <p>
            It also does not guarantee grades, retention, or productivity.
            Study quality, feedback, and consistency still matter as much as the
            raw number of hours.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you are trying to build a steadier weekly
            routine, especially before exam pressure peaks. It is helpful when
            paired with concrete academic goals rather than used in isolation.
          </p>
          <p>
            Good companions include the{" "}
            {toolLink(
              "/how-many-hours-should-i-study",
              "how many hours should I study guide",
            )},
            the {toolLink("/common-study-mistakes", "common study mistakes guide")},
            the {toolLink("/calculators/final-grade-calculator", "final grade calculator")},
            and the {toolLink("/education", "education hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this study time calculator guarantee better grades?",
        answer:
          "No. It helps structure time, but it does not guarantee academic outcomes.",
      },
      {
        question: "Should every subject get the same time?",
        answer:
          "Not always. Some subjects may need more time depending on difficulty, deadlines, and your current standing.",
      },
      {
        question: "Can I use this for exam weeks only?",
        answer:
          "Yes, but it is often even more useful when used earlier for steady weekly planning.",
      },
      {
        question: "Why does the calculator show a daily average?",
        answer:
          "Because many students need to see whether the weekly goal actually fits into a realistic daily routine.",
      },
      {
        question: "Is this official academic advice?",
        answer:
          "No. It is an educational planning tool only.",
      },
    ],
  },
  "pdf-file-size-estimator": {
    title: "PDF File Size Estimator",
    description:
      "Estimate approximate PDF file size from page count, image density, image quality, and document style assumptions.",
    eyebrow: "PDF Tools",
    intro:
      "Use this PDF file size estimator to get a rough idea of how large a PDF might be before export or upload. It is an educational estimate only, not a file-processing tool or an exact measurement.",
    category: "Everyday Tools",
    path: "/calculators/pdf-file-size-estimator",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This estimator starts with the number of pages and then adjusts the
            estimate using image density, image quality level, and whether the
            document is more text-heavy or image-heavy.
          </p>
          <p>
            That creates a rough file-size estimate for planning. It does not
            inspect a real document. If you want the broader context around
            size-reduction strategy, see the{" "}
            {toolLink("/pdf-compression-guide", "PDF compression guide")} and
            the {toolLink("/pdf-tools", "PDF tools hub")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The estimated MB and KB values are planning numbers. They help you
            compare rough scenarios such as whether a text-heavy document will
            likely stay small or whether an image-heavy export may be more
            difficult to share.
          </p>
          <p>
            They should not be treated as exact upload predictions. Real PDFs
            can vary because of fonts, compression method, export engine, scan
            settings, and embedded metadata.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool does not process, compress, or inspect an actual PDF. It
            uses simplified assumptions only. Actual file size may differ
            significantly from the estimate.
          </p>
          <p>
            It also does not tell you what compression setting is best. It is a
            planning aid, not a replacement for testing a real export workflow.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this estimator when you are planning a scan, export, upload, or
            sharing workflow and want a fast rough size comparison before
            handling real files.
          </p>
          <p>
            Good companion pages include the{" "}
            {toolLink("/pdf-tools", "PDF tools hub")},{" "}
            {toolLink("/pdf-compression-guide", "PDF compression guide")},{" "}
            {toolLink("/merge-pdf-guide", "merge PDF guide")}, and{" "}
            {toolLink("/image-to-pdf-guide", "image to PDF guide")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is the PDF file size estimator exact?",
        answer:
          "No. It is only a rough estimate based on simplified page and image assumptions.",
      },
      {
        question: "Why can real PDF size differ from the estimate?",
        answer:
          "Because real file size depends on compression settings, fonts, metadata, scans, export tools, and the actual content inside the file.",
      },
      {
        question: "Does this tool upload or inspect my file?",
        answer:
          "No. It does not process actual PDFs at this stage.",
      },
      {
        question: "Can this help before compressing a PDF?",
        answer:
          "Yes. It can help you think through rough size expectations before trying a compression workflow.",
      },
      {
        question: "Is this a file-processing tool?",
        answer:
          "No. It is an educational estimator only.",
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
  "401k-calculator": {
    title: "401(k) Calculator",
    description:
      "Project long-term 401(k) growth using salary, employee contribution, employer match, return assumptions, and time.",
    eyebrow: "Finance",
    intro:
      "Use this 401(k) calculator to estimate how employee contributions, employer matching, and long-term growth assumptions may affect a workplace retirement account over time. It is designed for educational planning and rough comparisons, not for investment or tax advice.",
    category: "Finance",
    path: "/calculators/401k-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with current balance, annual salary, employee
            contribution rate, employer match assumptions, expected annual
            return, and years until retirement. It converts contribution inputs
            into a monthly saving stream, then projects growth using monthly
            compounding.
          </p>
          <p>
            Because employer matching can meaningfully change the pace of
            accumulation, the tool separates employee contributions from match
            amounts. It pairs naturally with the guides on{" "}
            {toolLink("/401k-vs-ira", "401(k) vs. IRA")} and{" "}
            {toolLink(
              "/how-much-should-i-save-for-retirement",
              "how much should I save for retirement",
            )}
            .
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The projected balance is a simplified estimate of what the account
            may grow to if contributions, match, and return assumptions remain
            consistent. The result grid breaks out annual employee
            contributions, employer match, and estimated long-term growth so you
            can see where the projection is coming from.
          </p>
          <p>
            This makes the calculator especially helpful for comparison
            questions: How much does the match matter? What happens if the
            contribution rate rises? How different does a longer time horizon
            look?
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            The estimate is intentionally simplified. It does not model plan
            fees, contribution limits, vesting schedules, investment menu
            quality, taxes, or changing salary over time unless you approximate
            those effects yourself through the inputs.
          </p>
          <p>
            Results are estimates only. Real retirement outcomes depend on
            savings behavior, market returns, job changes, and planning
            decisions that no general calculator can fully predict.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to compare 401(k) contribution
            strategies, understand the value of an employer match, or estimate
            whether your current pace looks aligned with your broader retirement
            goals.
          </p>
          <p>
            Strong companion resources are{" "}
            {toolLink(
              "/calculators/retirement-calculator",
              "retirement calculator",
            )}
            ,{" "}
            {toolLink("/calculators/ira-calculator", "IRA calculator")},{" "}
            {toolLink(
              "/retirement-savings-by-age",
              "retirement savings by age",
            )},
            {" "}and {toolLink("/retirement", "the retirement hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this 401(k) calculator include an employer match?",
        answer:
          "Yes. The calculator includes a simplified employer match model based on the match rate and salary cap percentage you enter.",
      },
      {
        question: "Does it account for vesting or plan fees?",
        answer:
          "No. This is a simplified projection and does not model vesting schedules, fee drag, or plan-specific rules.",
      },
      {
        question: "Can I use it to compare contribution rates?",
        answer:
          "Yes. It is especially useful for seeing how different employee contribution rates and employer match levels may change long-term results.",
      },
      {
        question: "Are the results guaranteed?",
        answer:
          "No. The results are estimates only and depend heavily on future returns, contributions, and real-world account conditions.",
      },
      {
        question: "Is this financial advice?",
        answer:
          "No. This tool is educational only and not individualized financial, investment, or tax advice.",
      },
    ],
  },
  "ira-calculator": {
    title: "IRA Calculator",
    description:
      "Project IRA growth using current balance, annual contributions, return assumptions, and time horizon.",
    eyebrow: "Finance",
    intro:
      "Use this IRA calculator to estimate how current balance, annual contributions, and return assumptions may affect long-term IRA growth. It is designed for educational planning and comparison, not for tax or investment advice.",
    category: "Finance",
    path: "/calculators/ira-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with current balance, annual contribution,
            expected annual return, and years until retirement. It spreads the
            annual contribution across monthly savings and uses monthly
            compounding to project growth over time.
          </p>
          <p>
            You can label the projection as traditional or Roth for planning
            context, even though this simplified version does not model tax
            differences directly. For the tax-treatment side of the discussion,
            read{" "}
            {toolLink(
              "/roth-ira-vs-traditional-ira",
              "Roth IRA vs. traditional IRA",
            )}{" "}
            and {toolLink("/401k-vs-ira", "401(k) vs. IRA")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The projected balance shows how ongoing contributions and growth may
            build over time under the assumptions you enter. The result grid
            also breaks out annual contribution, total contribution, and
            estimated growth so you can see the balance between discipline and
            compounding.
          </p>
          <p>
            This helps answer practical planning questions: Is my annual
            contribution pace meaningful? How much of the future value comes
            from deposits versus growth? How sensitive is the projection to
            time?
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a simplified growth projection. It does not account for
            contribution limits, eligibility rules, taxes, fees, or investment
            outcomes that change over time. Choosing Roth or traditional in the
            interface is a labeling aid, not a tax engine.
          </p>
          <p>
            Results are estimates only and should not be treated as financial,
            investment, or tax advice. A real IRA plan depends on broader
            household and tax context.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to compare IRA contribution
            scenarios, understand how steady funding may grow over time, or see
            how an IRA fits into a wider retirement system.
          </p>
          <p>
            Good next resources are{" "}
            {toolLink(
              "/calculators/retirement-calculator",
              "retirement calculator",
            )}
            ,{" "}
            {toolLink("/calculators/401k-calculator", "401(k) calculator")},{" "}
            {toolLink(
              "/how-much-do-i-need-to-retire",
              "how much do I need to retire",
            )},
            {" "}and {toolLink("/retirement", "the retirement hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this IRA calculator work for both Roth and traditional IRAs?",
        answer:
          "Yes, as a simplified growth projection. The account-type selection adds planning context but does not change the underlying growth math.",
      },
      {
        question: "Does it include IRA contribution limits?",
        answer:
          "No. This calculator does not enforce legal contribution limits or eligibility rules.",
      },
      {
        question: "Does the calculator model taxes?",
        answer:
          "No. It focuses on contribution and growth assumptions rather than tax treatment details.",
      },
      {
        question: "Can I compare different annual contribution amounts?",
        answer:
          "Yes. That is one of the main uses of the tool, especially when paired with other retirement calculators and guides.",
      },
      {
        question: "Is this financial advice?",
        answer:
          "No. This tool is educational only and not individualized financial, investment, or tax advice.",
      },
    ],
  },
  "retirement-income-calculator": {
    title: "Retirement Income Calculator",
    description:
      "Estimate first-year retirement income, annual withdrawals, and how savings may hold up over time under simplified assumptions.",
    eyebrow: "Finance",
    intro:
      "Use this retirement income calculator to estimate how portfolio withdrawals and other annual income sources may combine during retirement. It is designed for educational planning and rough scenario testing, not for guaranteed retirement advice.",
    category: "Finance",
    path: "/calculators/retirement-income-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with total retirement savings, an annual
            withdrawal rate, other annual income, a return assumption during
            retirement, and the number of years in retirement you want to test.
            It estimates first-year withdrawal income and then runs a simple
            annual drawdown-and-growth loop to show a rough ending balance.
          </p>
          <p>
            It is especially useful when paired with the guide on{" "}
            {toolLink(
              "/retirement-income-planning",
              "retirement income planning",
            )}{" "}
            and the article on{" "}
            {toolLink(
              "/safe-withdrawal-rate-explained",
              "safe withdrawal rate explained",
            )}
            .
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The annual and monthly income estimates show what your first-year
            retirement cash flow may look like under the assumptions entered.
            The ending balance estimate gives a simplified sense of how the
            savings pool may hold up over the time horizon selected.
          </p>
          <p>
            This is not a claim about what retirement will actually cost or how
            markets will behave. It is a way to connect withdrawals, outside
            income, and time horizon into one planning picture.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            The estimate is intentionally simplified. It does not model taxes,
            inflation detail, spending changes, sequence risk, changing
            withdrawal patterns, Social Security timing decisions, or account
            structure differences with full realism.
          </p>
          <p>
            Results are estimates only and should not be treated as financial
            advice or as a guarantee that a given withdrawal rate will be
            sustainable.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you want to test whether a portfolio and
            outside income mix feels plausible for retirement, compare
            withdrawal assumptions, or translate a retirement target into a
            rough annual income picture.
          </p>
          <p>
            Strong companion resources are{" "}
            {toolLink(
              "/how-much-do-i-need-to-retire",
              "how much do I need to retire",
            )}
            ,{" "}
            {toolLink(
              "/calculators/retirement-calculator",
              "retirement calculator",
            )}
            ,{" "}
            {toolLink(
              "/common-retirement-planning-mistakes",
              "common retirement planning mistakes",
            )},
            {" "}and {toolLink("/retirement", "the retirement hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this retirement income calculator guarantee a sustainable withdrawal rate?",
        answer:
          "No. It is a simplified estimate only and cannot guarantee sustainability under real market and spending conditions.",
      },
      {
        question: "What does other annual income mean here?",
        answer:
          "It can represent recurring retirement income such as Social Security, pension income, or consistent part-time earnings.",
      },
      {
        question: "Does this calculator include taxes?",
        answer:
          "No. It is a gross planning estimate and does not model tax effects on retirement income.",
      },
      {
        question: "Why does the ending balance matter?",
        answer:
          "It gives a simplified sense of how the savings pool may hold up after repeated withdrawals and assumed growth over time.",
      },
      {
        question: "Is this financial advice?",
        answer:
          "No. This tool is educational only and not individualized financial, investment, or tax advice.",
      },
    ],
  },
  "mortgage-affordability-calculator": {
    title: "Mortgage Affordability Calculator",
    description:
      "Estimate a simplified affordable home price range from income, debts, down payment, rate, and loan term assumptions.",
    eyebrow: "Home Buying",
    intro:
      "Use this mortgage affordability calculator to estimate a simplified home price range based on household income, monthly debts, available down payment, mortgage rate, and loan term. It is built for planning and education, not as a lender approval tool.",
    category: "Finance",
    path: "/calculators/mortgage-affordability-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator estimates an affordable housing-payment range using
            a simplified debt-to-income framework. It starts with annual income
            and monthly debts, applies a front-end and back-end ratio
            assumption, and then solves backward for an estimated loan amount
            based on the mortgage rate and term you enter.
          </p>
          <p>
            It then adds your available down payment to estimate an affordable
            home price. This makes it a useful first-pass planning tool before
            you move into the broader mortgage hub, the{" "}
            {toolLink("/calculators/mortgage-calculator", "mortgage calculator")},
            {" "}or articles like {toolLink("/how-much-house-can-i-afford", "how much house can I afford")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The estimated home price is a simplified planning number, not an
            approval amount. The max housing payment helps explain what the
            calculator is assuming about affordability, while the estimated loan
            amount and down payment show how that price range was constructed.
          </p>
          <p>
            This is most useful for early-range comparison. It helps you see
            whether a target home price is roughly in line with income and debt
            assumptions before taxes, insurance, HOA dues, and lender-specific
            rules are layered in.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator uses a simplified debt-to-income framework and does
            not model property taxes, homeowners insurance, mortgage insurance,
            HOA dues, reserves, credit profile, underwriting overlays, or local
            lender standards.
          </p>
          <p>
            Results are estimates only and should not be treated as lending,
            financial, tax, or legal advice. A lender&apos;s actual approval or
            comfort level may differ materially.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you are narrowing a home-shopping range,
            testing how debts affect affordability, or comparing how a larger
            down payment changes the picture. It is especially helpful before a
            preapproval conversation.
          </p>
          <p>
            Strong companion resources are{" "}
            {toolLink("/mortgage", "the mortgage hub")},{" "}
            {toolLink("/mortgage-preapproval-guide", "mortgage preapproval guide")},
            {" "}{toolLink("/down-payment-guide", "down payment guide")}, and the{" "}
            {toolLink("/calculators/closing-costs-calculator", "closing costs calculator")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Is this an approval calculator?",
        answer:
          "No. It is an educational affordability estimate and not a lender approval or guarantee.",
      },
      {
        question: "Does this include taxes and insurance?",
        answer:
          "No. This simplified version focuses on mortgage payment capacity and does not fully model taxes, insurance, or HOA dues.",
      },
      {
        question: "Why do my monthly debts matter here?",
        answer:
          "Because existing monthly debts affect how much room a simplified debt-to-income framework leaves for housing costs.",
      },
      {
        question: "Can a larger down payment change the estimate a lot?",
        answer:
          "Yes. A larger down payment increases the estimated home price range because less of the purchase must be financed.",
      },
      {
        question: "Is this mortgage advice?",
        answer:
          "No. It is an educational estimate only and not lending, financial, tax, or legal advice.",
      },
    ],
  },
  "mortgage-refinance-calculator": {
    title: "Mortgage Refinance Calculator",
    description:
      "Compare current and refinanced mortgage payments, monthly savings, and a simplified break-even period.",
    eyebrow: "Home Buying",
    intro:
      "Use this mortgage refinance calculator to compare a simplified current mortgage payment with a possible refinance scenario. It estimates monthly savings, financed closing costs, and a rough break-even period for educational planning only.",
    category: "Finance",
    path: "/calculators/mortgage-refinance-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator takes your current loan balance, current rate,
            remaining term, proposed new rate, proposed new term, and refinance
            closing costs. It estimates the current monthly principal-and-interest
            payment and compares it with a refinanced loan that includes the
            closing costs in the financed amount.
          </p>
          <p>
            It then shows the monthly payment change and a rough break-even
            period based on the costs entered. This is useful for framing the
            question before you move to deeper reading like{" "}
            {toolLink("/refinance-vs-new-mortgage", "refinance vs. new mortgage")}
            {" "}and {toolLink("/mortgage-points-explained", "mortgage points explained")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            Monthly savings compares the simplified current payment with the new
            payment estimate. The break-even period shows how long it may take
            for those monthly savings to offset the refinance costs you entered.
          </p>
          <p>
            That break-even number is useful because a lower rate does not
            automatically mean a refinance is compelling. Timing, term reset,
            and how long you expect to keep the loan all matter.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This calculator does not include every factor that matters in a real
            refinance decision. It does not model escrow changes, taxes,
            insurance, cash paid at closing, opportunity cost, future moving
            plans, or individualized lender pricing.
          </p>
          <p>
            Results are estimates only and should not be treated as mortgage,
            lending, financial, tax, or legal advice. A refinance decision is
            more nuanced than payment change alone.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when rates have moved, when you are comparing a
            shorter or longer term, or when you want a rough sense of whether a
            refinance conversation is worth exploring further.
          </p>
          <p>
            Good companion resources are{" "}
            {toolLink("/mortgage", "the mortgage hub")},{" "}
            {toolLink("/refinance-vs-new-mortgage", "refinance vs. new mortgage")},
            {" "}{toolLink("/mortgage-closing-costs-explained", "mortgage closing costs explained")},
            {" "}and the {toolLink("/calculators/mortgage-calculator", "mortgage calculator")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this refinance calculator include closing costs?",
        answer:
          "Yes, in a simplified way. It assumes the closing costs you enter are financed into the new loan for comparison purposes.",
      },
      {
        question: "Is break-even enough to decide whether to refinance?",
        answer:
          "No. Break-even is helpful, but term reset, total interest, future moving plans, cash needs, and broader goals also matter.",
      },
      {
        question: "Does this include taxes and insurance?",
        answer:
          "No. It focuses on simplified principal-and-interest payment comparison rather than full escrowed housing cost.",
      },
      {
        question: "Can a lower monthly payment still be a weak refinance?",
        answer:
          "Yes. A lower payment may come from a longer term or higher financed costs, so the broader context still matters.",
      },
      {
        question: "Is this mortgage advice?",
        answer:
          "No. It is an educational estimate only and not mortgage, lending, tax, or legal advice.",
      },
    ],
  },
  "closing-costs-calculator": {
    title: "Closing Costs Calculator",
    description:
      "Estimate mortgage closing costs and cash to close using purchase price, down payment, fees, and prepaid-cost assumptions.",
    eyebrow: "Home Buying",
    intro:
      "Use this closing costs calculator to estimate percent-based closing costs, fixed fees, and a rough cash-to-close total for a home purchase. It is designed for educational budgeting, not for replacing a lender's loan estimate or closing disclosure.",
    category: "Finance",
    path: "/calculators/closing-costs-calculator",
    applicationCategory: "FinanceApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This calculator starts with home price, down payment, a general
            closing-cost percentage estimate, lender/title fees, and prepaid
            taxes and insurance. It combines the percentage-based costs with the
            fixed-fee assumptions you enter and then adds the down payment to
            estimate cash to close.
          </p>
          <p>
            This makes it useful for early budgeting because home shoppers often
            focus on down payment while underestimating the rest of the upfront
            cash. For broader context, read{" "}
            {toolLink(
              "/mortgage-closing-costs-explained",
              "mortgage closing costs explained",
            )}{" "}
            and the{" "}
            {toolLink("/down-payment-guide", "down payment guide")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The total closing-cost estimate shows the rough size of upfront
            costs beyond the down payment. Cash to close combines those closing
            costs with the down payment amount to give a more realistic picture
            of how much cash may be needed near purchase.
          </p>
          <p>
            This is useful because many affordability conversations become more
            practical once upfront cash is included, not just the ongoing
            mortgage payment.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            Real closing costs vary by lender, location, escrow setup, seller
            concessions, prepaid items, rate choice, and transaction structure.
            This calculator does not replace an official loan estimate or closing
            disclosure.
          </p>
          <p>
            Results are estimates only and should not be treated as mortgage,
            lending, tax, or legal advice. Actual charges can differ materially
            from generalized planning numbers.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this calculator when you are trying to budget for a purchase,
            compare properties, or check whether the cash side of a home purchase
            feels realistic alongside the monthly-payment side.
          </p>
          <p>
            Strong companion resources are{" "}
            {toolLink("/mortgage", "the mortgage hub")},{" "}
            {toolLink("/how-much-house-can-i-afford", "how much house can I afford")},
            {" "}{toolLink("/common-home-buying-mistakes", "common home buying mistakes")},
            {" "}and the {toolLink("/calculators/mortgage-affordability-calculator", "mortgage affordability calculator")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Does this closing costs calculator replace a lender estimate?",
        answer:
          "No. It is a generalized educational estimate and not a substitute for a lender's official loan estimate or closing disclosure.",
      },
      {
        question: "Why does cash to close exceed the down payment?",
        answer:
          "Because home purchases often involve lender fees, title costs, prepaids, escrow funding, and other upfront charges in addition to the down payment.",
      },
      {
        question: "Can closing costs vary a lot by location and lender?",
        answer:
          "Yes. Location, lender pricing, title charges, escrow setup, rate choice, and seller credits can all change the final number.",
      },
      {
        question: "Is the percentage input enough for a real transaction?",
        answer:
          "Not by itself. It is useful for rough budgeting, but real transactions should be reviewed using formal lender documents.",
      },
      {
        question: "Is this mortgage advice?",
        answer:
          "No. It is an educational estimate only and not mortgage, lending, tax, or legal advice.",
      },
    ],
  },
  "merge-pdf": {
    title: "Merge PDF",
    description:
      "Merge multiple PDF files into one downloadable PDF with a client-side PDF merge tool that runs locally in your browser.",
    eyebrow: "PDF Tools",
    intro:
      "Use this Merge PDF tool to upload multiple PDF files, arrange them in the order you want, and generate one merged PDF directly in your browser. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/merge-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool loads each selected PDF in the browser, copies the pages
            in your chosen order, and writes them into one merged output file.
            That makes it useful for combining forms, invoices, scanned
            sections, slide exports, and multi-part document bundles.
          </p>
          <p>
            Because the work happens locally, your files are not uploaded to a
            server during the merge. You can also use the{" "}
            {toolLink("/split-pdf-guide", "Split PDF guide")} and the{" "}
            {toolLink("/pdf-tools", "PDF tools hub")} to compare related
            document workflows.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means the merged PDF is ready to download. The
            summary shows how many source PDFs were combined, the known page
            count where available, and the approximate size of the output file.
          </p>
          <p>
            That helps you sanity-check whether the combined document is still
            practical for sharing or uploading. If file size is a concern, the{" "}
            {toolLink(
              "/calculators/pdf-file-size-estimator",
              "PDF File Size Estimator",
            )}{" "}
            can help you think through the likely tradeoffs.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a practical browser-based merge workflow, not a full PDF
            editing suite. Advanced PDF features such as bookmarks, forms,
            embedded attachments, internal metadata, and other specialized
            document structures may not carry over exactly as they appeared in
            every source file.
          </p>
          <p>
            It is also not a server-side archival workflow. For very large or
            highly specialized PDFs, browser memory limits can still matter.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use Merge PDF when you want to combine multiple existing PDFs into
            one file for review, sharing, printing, or submission.
          </p>
          <p>
            If you need the opposite workflow, where one large file is broken
            into smaller pieces, use {toolLink("/calculators/split-pdf", "Split PDF")}
            .
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDFs uploaded to a server during merging?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "Can I reorder the PDFs before merging them?",
        answer:
          "Yes. You can move files up or down so the final merged PDF follows the order you want.",
      },
      {
        question: "Will all PDF features stay identical after merging?",
        answer:
          "Not always. Core pages usually merge well, but advanced features such as bookmarks, forms, metadata, or attachments can vary.",
      },
      {
        question: "Can I merge more than two PDF files?",
        answer:
          "Yes. You can merge multiple PDF files into one downloadable output.",
      },
      {
        question: "Is this tool giving legal or professional document advice?",
        answer:
          "No. It is a browser-based utility tool only and does not provide legal, compliance, or records-management advice.",
      },
    ],
  },
  "split-pdf": {
    title: "Split PDF",
    description:
      "Split a PDF by page ranges into separate downloadable files with a client-side PDF split tool that runs locally in your browser.",
    eyebrow: "PDF Tools",
    intro:
      "Use this Split PDF tool to upload one PDF, define page ranges like 1-3 or 7-9, and export separate PDF files directly in your browser. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/split-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool reads one PDF in the browser, interprets the page ranges
            you provide, and creates a separate PDF output for each range. That
            can be useful for chapter extraction, form separation, batch scan
            cleanup, or sharing only the pages someone actually needs.
          </p>
          <p>
            Because the output is range-based, the most important input is
            still planning the page groups clearly. The{" "}
            {toolLink("/split-pdf-guide", "Split PDF guide")} is a good
            companion if you want to think through that workflow more carefully.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            When the split succeeds, each requested range becomes its own
            downloadable PDF. The result area shows how many outputs were
            created and the approximate total size of those generated files.
          </p>
          <p>
            That makes it easier to confirm that your page grouping worked the
            way you intended before you download or share the outputs.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a practical browser-based split workflow, not a full PDF
            editing environment. Advanced features such as forms, bookmarks,
            attachments, or internal navigation may not behave identically in
            every split output.
          </p>
          <p>
            Very large PDFs may also run into browser memory limits depending on
            the device and the document itself.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use Split PDF when one large file needs to become smaller, more
            targeted PDFs for email, upload, internal routing, or record
            organization.
          </p>
          <p>
            If you need the opposite workflow, where several files become one,
            use {toolLink("/calculators/merge-pdf", "Merge PDF")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDFs uploaded to a server during splitting?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "How do I enter page ranges?",
        answer:
          "Use commas to separate outputs, such as 1-3, 4, 7-9. Each item becomes a separate downloadable PDF.",
      },
      {
        question: "Can I split one PDF into several new PDFs at once?",
        answer:
          "Yes. Each page range you provide becomes its own separate output file.",
      },
      {
        question: "Will advanced PDF features always carry over cleanly?",
        answer:
          "Not always. Basic page extraction usually works well, but forms, bookmarks, metadata, and other advanced features can vary.",
      },
      {
        question: "Is this tool giving legal or professional document advice?",
        answer:
          "No. It is a browser-based utility tool only and does not provide legal, compliance, or records-management advice.",
      },
    ],
  },
  "extract-pdf-pages": {
    title: "Extract PDF Pages",
    description:
      "Extract selected PDF pages into one downloadable PDF with a browser-based page extraction tool that runs locally on your device.",
    eyebrow: "PDF Tools",
    intro:
      "Use this Extract PDF Pages tool to upload one PDF, choose page ranges like 1-3 or 1-2,5,8-10, and generate a new PDF containing only those pages. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/extract-pdf-pages",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool reads one PDF in the browser, validates the page ranges
            you enter, and copies only those pages into a new output PDF. That
            makes it useful when you want to keep just a chapter, a few forms,
            a limited set of exhibits, or selected report pages.
          </p>
          <p>
            Because the workflow is local, your PDF is not uploaded to a
            server during extraction. It also pairs naturally with{" "}
            {toolLink("/calculators/split-pdf", "Split PDF")} and{" "}
            {toolLink("/calculators/merge-pdf", "Merge PDF")} if you are
            reorganizing documents more broadly.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means one new downloadable PDF has been
            created using only the page ranges you selected. The result summary
            shows how many pages made it into the output and the approximate
            size of the extracted file.
          </p>
          <p>
            That helps you confirm that the smaller document is ready for
            sharing, printing, or storing without keeping the full original
            file attached.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a practical browser-based extraction workflow, not a full
            PDF editorial environment. Advanced PDF features such as bookmarks,
            forms, attachments, or internal links may not behave identically in
            the extracted output.
          </p>
          <p>
            Very large files can also run into browser memory limits depending
            on the device and document complexity.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use Extract PDF Pages when you want a smaller PDF containing only
            the pages that matter for review, submission, or record-keeping.
          </p>
          <p>
            If you want separate output PDFs for each range, use{" "}
            {toolLink("/calculators/split-pdf", "Split PDF")}. For more
            related document tools, visit the{" "}
            {toolLink("/pdf-tools", "PDF tools hub")} or the{" "}
            {toolLink("/pdf-tools/category", "PDF tools category")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDFs uploaded to a server during extraction?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "What page range formats can I use?",
        answer:
          "You can use formats such as 1-3, 2,4,7, or 1-2,5,8-10 to choose exactly which pages stay in the output.",
      },
      {
        question: "Does this tool create one PDF or many PDFs?",
        answer:
          "This tool creates one downloadable PDF containing all selected pages in the order defined by your range input.",
      },
      {
        question: "Will forms, bookmarks, or attachments always transfer perfectly?",
        answer:
          "Not always. Core page extraction usually works well, but advanced PDF features can vary after extraction.",
      },
      {
        question: "Is this legal, records, or compliance advice?",
        answer:
          "No. It is a browser-based utility tool only and does not provide legal, compliance, or records-management advice.",
      },
    ],
  },
  "rotate-pdf": {
    title: "Rotate PDF",
    description:
      "Rotate all pages or selected page ranges in a PDF with a browser-based PDF rotation tool that runs locally on your device.",
    eyebrow: "PDF Tools",
    intro:
      "Use this Rotate PDF tool to upload one PDF, choose an angle of 90, 180, or 270 degrees, and rotate either the whole document or selected page ranges directly in your browser. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/rotate-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool loads a PDF in the browser and applies page rotation to
            either every page or only the page ranges you specify. That is
            useful when scans arrive sideways, mixed-orientation reports need a
            cleanup pass, or selected pages should be turned for easier review.
          </p>
          <p>
            The processing stays local to your browser, so the uploaded PDF is
            not sent to a server while pages are rotated.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means the rotated PDF is ready to download. The
            summary shows the source page count, the rotation angle you applied,
            and the approximate size of the output file.
          </p>
          <p>
            That gives you a quick way to confirm the document is ready before
            you send or store it.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a practical browser-based rotation workflow, not a full
            PDF editing suite. Advanced features such as form behavior,
            bookmarks, attachments, or special document metadata may not behave
            identically after rotation.
          </p>
          <p>
            Very large PDFs can still be limited by browser memory, especially
            on lighter mobile devices.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use Rotate PDF when pages are sideways or upside down and you want
            a clean output file without installing desktop software.
          </p>
          <p>
            If you need to keep only certain pages afterward, pair this with{" "}
            {toolLink("/calculators/extract-pdf-pages", "Extract PDF Pages")} or{" "}
            {toolLink("/calculators/split-pdf", "Split PDF")}. For the wider
            cluster, visit {toolLink("/pdf-tools", "PDF tools hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDFs uploaded to a server during rotation?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "Can I rotate only selected pages instead of the whole PDF?",
        answer:
          "Yes. You can choose either all pages or selected page ranges.",
      },
      {
        question: "What rotation angles are supported?",
        answer:
          "You can rotate by 90, 180, or 270 degrees.",
      },
      {
        question: "Can I use page ranges like 1-3 or 5,7-9?",
        answer:
          "Yes. The tool validates common page range formats such as 1-3, 5, or 7-9 when you choose selected ranges.",
      },
      {
        question: "Is this publishing, legal, or archival advice?",
        answer:
          "No. It is a browser-based utility tool and does not provide legal, records, archival, or publishing advice.",
      },
    ],
  },
  "pdf-to-jpg": {
    title: "PDF to JPG",
    description:
      "Convert selected PDF pages into downloadable JPG images with a browser-based PDF to JPG tool that runs locally on your device.",
    eyebrow: "PDF Tools",
    intro:
      "Use this PDF to JPG converter to upload one PDF, choose the pages you want, and render those pages as JPG image files directly in your browser. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/pdf-to-jpg",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool loads your PDF in the browser, renders the selected pages
            onto canvas elements, and encodes each rendered page as a JPG file.
            That makes it useful when you need visual page previews, shareable
            page images, or image-based extracts from a larger PDF.
          </p>
          <p>
            Because the conversion happens locally, your PDF is not uploaded to
            a server while pages are rendered. If you need a lossless-style
            image export instead, use {toolLink("/calculators/pdf-to-png", "PDF to PNG")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means each selected page has been rendered as
            its own JPG download. The result summary shows how many image files
            are ready and the approximate total output size.
          </p>
          <p>
            That helps you judge whether the export is practical for email,
            documentation, reviews, or image-based reuse.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is a browser-based rendering workflow, not a print-proof image
            pipeline. Fine typography, transparency, annotations, and color
            handling can vary depending on the PDF and the browser.
          </p>
          <p>
            JPG also involves lossy encoding, which can make it less ideal than
            PNG when the source PDF needs extra sharpness for diagrams or text.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use PDF to JPG when you want lighter image files from selected PDF
            pages for previews, chat attachments, slide decks, or quick visual
            reference.
          </p>
          <p>
            If you want sharper image output for diagrams or screenshots, try{" "}
            {toolLink("/calculators/pdf-to-png", "PDF to PNG")}. For the broader
            document cluster, visit {toolLink("/pdf-tools", "the PDF tools hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDF files uploaded to a server?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "Can I choose only certain pages to convert?",
        answer:
          "Yes. You can enter page ranges such as 1-3, 5 to render only the pages you want.",
      },
      {
        question: "Why choose JPG instead of PNG?",
        answer:
          "JPG is often useful when you want smaller image files and the output is mainly for visual sharing rather than the sharpest possible page capture.",
      },
      {
        question: "Will the converted images look exactly like the original PDF?",
        answer:
          "Not always. Rendering, compression, and color handling can vary by browser and by the source PDF itself.",
      },
      {
        question: "Is this professional publishing advice?",
        answer:
          "No. It is a browser-based utility tool and does not provide printing, archival, or publishing advice.",
      },
    ],
  },
  "pdf-to-png": {
    title: "PDF to PNG",
    description:
      "Convert selected PDF pages into downloadable PNG images with a browser-based PDF to PNG tool that runs locally on your device.",
    eyebrow: "PDF Tools",
    intro:
      "Use this PDF to PNG converter to upload one PDF, choose the pages you want, and render those pages as PNG image files directly in your browser. Files stay local to your device during processing.",
    category: "Everyday Tools",
    path: "/calculators/pdf-to-png",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool loads your PDF in the browser, renders the selected pages
            onto canvas elements, and exports each rendered page as a PNG file.
            That can be especially useful for diagrams, forms, screenshots, or
            other cases where crisp lines and text matter.
          </p>
          <p>
            Because the conversion stays local to your browser, your PDF is not
            uploaded to a server during the workflow.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means each selected page has been rendered as
            its own PNG download. The result summary shows how many output files
            are ready and the approximate total size of those image exports.
          </p>
          <p>
            That makes it easier to evaluate whether the output is practical
            for documentation, markup, visual review, or reuse in another
            design workflow.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This is still a browser-based rendering workflow, not a full
            desktop publishing pipeline. Fine typography, color, annotations,
            and advanced PDF features can still vary depending on the document
            and the browser.
          </p>
          <p>
            PNG files can also become much larger than JPG files, especially if
            many pages are exported at once.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use PDF to PNG when you want sharper page images from a PDF for
            diagrams, screenshots, visual notes, or documentation steps.
          </p>
          <p>
            If you want smaller image files instead, compare the output against{" "}
            {toolLink("/calculators/pdf-to-jpg", "PDF to JPG")}. For the
            broader cluster, visit {toolLink("/pdf-tools", "the PDF tools hub")}.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my PDF files uploaded to a server?",
        answer:
          "No. Files are processed locally in your browser and are never uploaded by this tool.",
      },
      {
        question: "Can I convert only specific pages?",
        answer:
          "Yes. You can choose page ranges such as 1-3, 5 to render only the pages you want.",
      },
      {
        question: "Why use PNG instead of JPG?",
        answer:
          "PNG is often useful when you want sharper output for diagrams, forms, and screenshots, even though the files may be larger.",
      },
      {
        question: "Will PNG files always look identical to the PDF?",
        answer:
          "Not always. Rendering, color handling, and transparency behavior can still vary by browser and by the source PDF.",
      },
      {
        question: "Is this professional publishing advice?",
        answer:
          "No. It is a browser-based utility tool and does not provide printing, archival, or publishing advice.",
      },
    ],
  },
  "image-to-pdf": {
    title: "Image to PDF",
    description:
      "Convert multiple images into one downloadable PDF with a client-side image to PDF tool that runs locally in your browser.",
    eyebrow: "PDF Tools",
    intro:
      "Use this Image to PDF tool to combine JPG, PNG, and other common image files into one PDF document without sending files to a server. You can upload multiple images, reorder the pages, and download the finished PDF directly from your browser.",
    category: "Everyday Tools",
    path: "/calculators/image-to-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            This tool uses browser APIs to read your selected images, arrange
            them in your chosen order, and generate a simple downloadable PDF.
            Each uploaded image becomes a PDF page, which makes the tool useful
            for scan bundles, receipts, worksheets, notes, and lightweight
            document sharing.
          </p>
          <p>
            Because the work happens locally, your files stay on your device
            during conversion. If you want the broader directory for this tool
            family, visit the {toolLink("/pdf-tools", "PDF tools hub")} or the{" "}
            {toolLink("/pdf-tools/category", "PDF tools category")}.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            The main result tells you when the PDF is ready and gives you a
            download link. It also shows how many pages are included and the
            approximate size of the generated PDF, which can help when you are
            planning around upload limits or email attachments.
          </p>
          <p>
            If file size matters before or after conversion, compare the result
            with the{" "}
            {toolLink(
              "/calculators/pdf-file-size-estimator",
              "PDF File Size Estimator",
            )}{" "}
            to understand how page count, image density, and quality can change
            a PDF.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            This tool is meant for practical client-side conversion, not
            high-end document publishing. Output size, page scaling, print
            results, and transparency handling can vary with browser behavior
            and the source images you upload.
          </p>
          <p>
            It also does not add OCR, editable text, signatures, or advanced
            PDF features. For workflow education around compression, merging, or
            conversion tradeoffs, continue into the{" "}
            {toolLink("/image-to-pdf-guide", "Image to PDF guide")} and related
            PDF guides.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use this tool when you want a quick way to package images into one
            PDF for sharing, printing, school submissions, internal reference,
            or personal organization.
          </p>
          <p>
            If you only need JPEG-specific or PNG-specific workflows, you can
            also use the {toolLink("/calculators/jpg-to-pdf", "JPG to PDF")} or{" "}
            {toolLink("/calculators/png-to-pdf", "PNG to PDF")} variants.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Are my images uploaded to a server?",
        answer:
          "No. The files are processed locally in your browser and are not uploaded to a server by this tool.",
      },
      {
        question: "Can I reorder the images before downloading the PDF?",
        answer:
          "Yes. You can move uploaded images up or down so the PDF pages follow the order you want.",
      },
      {
        question: "Does this tool support multiple image uploads?",
        answer:
          "Yes. You can upload multiple images in one batch and convert them into a single PDF document.",
      },
      {
        question: "Will the PDF size always match the original image sizes?",
        answer:
          "Not exactly. The generated PDF size depends on page count, image dimensions, browser-side encoding, and how each page is placed into the PDF.",
      },
      {
        question: "Is this a secure private workflow?",
        answer:
          "It is a local browser-based workflow, which means files stay on your device during conversion. You should still use your own judgment for sensitive documents.",
      },
    ],
  },
  "jpg-to-pdf": {
    title: "JPG to PDF",
    description:
      "Combine multiple JPG or JPEG images into one downloadable PDF with a client-side JPG to PDF converter.",
    eyebrow: "PDF Tools",
    intro:
      "Use this JPG to PDF converter to combine one or more JPG images into a single PDF directly in your browser. It supports multiple uploads, page reordering, and local processing without a server upload step.",
    category: "Everyday Tools",
    path: "/calculators/jpg-to-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            The converter accepts JPG and JPEG image files, arranges them into
            your preferred order, and assembles a simple PDF in the browser.
            That makes it useful for camera photos, scanned JPG exports, travel
            paperwork, and lightweight document bundles.
          </p>
          <p>
            If your source files are mixed rather than JPG-only, the broader{" "}
            {toolLink("/calculators/image-to-pdf", "Image to PDF")} route gives
            you a more flexible entry point.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            Once generated, the PDF result is ready for download and the tool
            shows the page count plus an approximate output size. That can help
            you check whether the document feels reasonable before sharing it.
          </p>
          <p>
            For extra file-size context, compare your result with the{" "}
            {toolLink(
              "/calculators/pdf-file-size-estimator",
              "PDF File Size Estimator",
            )}{" "}
            or browse the {toolLink("/pdf-tools", "PDF tools hub")} for related
            guidance.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            The output is still an estimate-grade document workflow, not a
            publishing or archival system. Browsers can differ in how they
            encode and package image-heavy PDFs, so exact output size and
            visual behavior can vary.
          </p>
          <p>
            This tool also does not edit the images themselves beyond placing
            them into PDF pages. If you need workflow education, the{" "}
            {toolLink("/jpg-to-pdf-guide", "JPG to PDF guide")} covers the
            practical tradeoffs in more detail.
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use JPG to PDF when your source files are already photographs or
            scans saved as JPEGs and you want a fast browser-based PDF export
            without installing software.
          </p>
          <p>
            If you are working with PNGs instead, the{" "}
            {toolLink("/calculators/png-to-pdf", "PNG to PDF")} tool is the
            better match.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "What image types does this converter accept?",
        answer:
          "This route is focused on JPG and JPEG files. If you need a mixed-image workflow, the broader Image to PDF tool is a better fit.",
      },
      {
        question: "Can I combine several JPG files into one PDF?",
        answer:
          "Yes. The tool supports multiple uploads and combines them into a single downloadable PDF.",
      },
      {
        question: "Is the conversion happening locally?",
        answer:
          "Yes. Files are processed locally in your browser and are not uploaded to a server by this tool.",
      },
      {
        question: "Can I control the order of the PDF pages?",
        answer:
          "Yes. You can reorder the uploaded JPG files before generating the PDF.",
      },
      {
        question: "Does this guarantee exact print output?",
        answer:
          "No. It is a practical browser-based converter, so scaling and file behavior can vary by device, browser, and source images.",
      },
    ],
  },
  "png-to-pdf": {
    title: "PNG to PDF",
    description:
      "Convert multiple PNG images into one downloadable PDF with a client-side PNG to PDF converter.",
    eyebrow: "PDF Tools",
    intro:
      "Use this PNG to PDF converter to upload multiple PNG files, arrange them into page order, and export a combined PDF in your browser. The workflow stays client-side and does not depend on a server upload.",
    category: "Everyday Tools",
    path: "/calculators/png-to-pdf",
    applicationCategory: "UtilitiesApplication",
    sections: {
      howItWorks: (
        <>
          <p>
            The tool reads PNG files in the browser, converts them into a
            PDF-friendly image stream, and places each one on its own page.
            That can be helpful for screenshots, diagrams, scanned notes, and
            image-based handouts.
          </p>
          <p>
            If you are comparing formats, the{" "}
            {toolLink("/png-to-pdf-guide", "PNG to PDF guide")} explains why
            PNG-heavy documents often behave differently from JPG-heavy ones.
          </p>
        </>
      ),
      resultMeans: (
        <>
          <p>
            A successful result means the PDF is ready to download locally from
            your browser. The summary also shows the number of pages and the
            approximate generated file size so you can quickly sanity-check the
            output.
          </p>
          <p>
            If you want a more general image workflow, the{" "}
            {toolLink("/calculators/image-to-pdf", "Image to PDF")} route can
            handle a broader mix of files.
          </p>
        </>
      ),
      limitations: (
        <>
          <p>
            PNG files often preserve sharp lines, text, or transparency, but
            the PDF output still depends on browser rendering and PDF assembly
            behavior. Transparency may be flattened during conversion, and the
            final file size may still be larger than expected for image-heavy
            documents.
          </p>
          <p>
            This tool is meant for practical local conversion rather than exact
            publishing control. If file size is your main concern, compare the
            result against the{" "}
            {toolLink(
              "/calculators/pdf-file-size-estimator",
              "PDF File Size Estimator",
            )}
            .
          </p>
        </>
      ),
      whenToUse: (
        <>
          <p>
            Use PNG to PDF when your images are screenshots, diagrams, or
            artwork saved as PNG files and you want them packaged as a single
            PDF for distribution or printing.
          </p>
          <p>
            If your files are primarily photos, the{" "}
            {toolLink("/calculators/jpg-to-pdf", "JPG to PDF")} route is often
            the more natural fit.
          </p>
        </>
      ),
    },
    faqItems: [
      {
        question: "Why use a PNG-specific PDF converter?",
        answer:
          "It is useful when your source files are already PNG screenshots, diagrams, or graphics and you want a cleaner route focused on that format.",
      },
      {
        question: "Are PNG files uploaded anywhere during conversion?",
        answer:
          "No. The files are processed locally in your browser and are not uploaded to a server by this tool.",
      },
      {
        question: "Can PNG transparency affect the PDF result?",
        answer:
          "Yes. Transparency can be flattened during conversion depending on how the browser renders the images into PDF-ready pages.",
      },
      {
        question: "Can I reorder the PNG pages before download?",
        answer:
          "Yes. You can move uploaded images up or down before generating the PDF.",
      },
      {
        question: "Is the output an exact publishing-grade PDF?",
        answer:
          "No. It is a practical local browser converter, so exact output details can vary by browser, device, and source images.",
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
