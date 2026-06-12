import Link from "next/link";
import type { Metadata } from "next";
import type { HealthArticleContent } from "@/components/content/HealthArticlePage";

function healthLink(href: string, label: string) {
  return (
    <Link
      href={href}
      className="font-semibold text-emerald-300 hover:text-emerald-200"
    >
      {label}
    </Link>
  );
}

type HealthArticleMap = Record<string, HealthArticleContent>;

export const healthArticleContent: HealthArticleMap = {
  "how-many-calories-should-i-eat": {
    title: "How Many Calories Should I Eat?",
    description:
      "Learn how calorie needs are commonly estimated using body size, age, sex, and activity level, plus why real needs can vary.",
    path: "/how-many-calories-should-i-eat",
    intro: (
      <>
        <p>
          “How many calories should I eat?” sounds simple, but the useful
          answer is usually a range rather than a single perfect number.
          Maintenance calories depend on body size, age, sex, movement, and the
          assumptions used by the formula. Real life adds even more variation:
          appetite, training volume, medication effects, sleep, and adherence
          all influence what feels workable.
        </p>
        <p>
          This guide is educational only and does not provide medical,
          nutritional, or treatment advice. If you have a medical condition, a
          history of disordered eating, or a personal health concern, consult a
          qualified healthcare professional for guidance tailored to you.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why calorie estimates start with energy needs",
        content: (
          <>
            <p>
              Most calorie estimates begin with basal metabolic rate and then
              layer in activity. In practical terms, that means the estimate
              starts with the energy your body would roughly use at rest and
              then scales upward depending on how active you are. Drutilio&apos;s{" "}
              {healthLink("/calculators/bmr-calculator", "BMR calculator")} and{" "}
              {healthLink("/calculators/calorie-calculator", "calorie calculator")}{" "}
              are built around this logic.
            </p>
            <p>
              The result is useful because it gives you a structured starting
              point. It is limited because formulas are averages, not direct
              measurements of your metabolism.
            </p>
          </>
        ),
      },
      {
        title: "Maintenance, loss, and gain are different targets",
        content: (
          <>
            <p>
              Maintenance calories aim to hold body weight roughly stable over
              time. A fat-loss target is usually set below maintenance. A
              weight-gain target is usually set above it. Those targets are not
              guarantees, and the same calorie level may affect two people
              differently even when their numbers look similar on paper.
            </p>
            <p>
              If you are comparing body-weight context, the{" "}
              {healthLink("/calculators/bmi-calculator", "BMI calculator")} and{" "}
              {healthLink(
                "/calculators/body-fat-calculator",
                "body fat calculator",
              )}{" "}
              add useful perspective, even though neither replaces a clinical
              assessment.
            </p>
          </>
        ),
      },
      {
        title: "Why estimated calorie needs can differ by country and routine",
        content: (
          <>
            <p>
              For readers in the US, Canada, the UK, and Australia, the broad
              concepts are the same, but food labeling, portion sizes, and
              activity habits can still change how easy it is to apply an
              estimate in daily life. Restaurant meals, packaged snacks, and
              weekend routines often create a bigger real-world gap than the
              formula itself.
            </p>
            <p>
              This is why calorie planning works better as an iterative process
              than as a one-time verdict. Estimate, observe, adjust, and keep
              expectations realistic.
            </p>
          </>
        ),
      },
      {
        title: "Good companion tools and guides",
        content: (
          <>
            <p>
              Continue with{" "}
              {healthLink("/what-is-bmr", "what BMR is")} if you want the
              resting-metabolism concept explained more clearly. Read{" "}
              {healthLink(
                "/bmi-vs-body-fat-percentage",
                "BMI vs. body fat percentage",
              )}{" "}
              if you want a better sense of how screening tools differ. And use
              the {healthLink("/health", "health hub")} to browse the full
              wellness cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Can a calorie calculator tell me exactly how much to eat?",
        answer:
          "No. It gives a structured estimate, not an exact prescription. Real calorie needs can vary from the formula.",
      },
      {
        question: "Is maintenance the same as a healthy intake for everyone?",
        answer:
          "Not necessarily. Maintenance is a weight-stability concept, while health planning may involve additional medical, nutritional, or lifestyle context.",
      },
      {
        question: "Why do two calculators sometimes give different answers?",
        answer:
          "Different formulas and activity assumptions can produce slightly different calorie estimates.",
      },
      {
        question: "Should I use BMI or body fat to decide calories?",
        answer:
          "They can provide context, but neither should be treated as a standalone nutrition prescription.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. This page is educational only and does not replace personalized medical or nutrition guidance.",
      },
    ],
  },
  "what-is-bmr": {
    title: "What Is BMR?",
    description:
      "Understand what basal metabolic rate means, how BMR is estimated, and how it differs from total daily calorie needs.",
    path: "/what-is-bmr",
    intro: (
      <>
        <p>
          Basal metabolic rate, usually shortened to BMR, is an estimate of how
          much energy the body would use at rest to support basic life
          functions. It is one of the building blocks behind many calorie
          calculators, but it is often misunderstood because people treat it as
          if it were the same thing as total daily calorie needs.
        </p>
        <p>
          This guide is educational only. It does not provide medical advice,
          diagnosis, or treatment guidance, and individual energy needs should
          be discussed with a qualified healthcare professional when a personal
          health concern is involved.
        </p>
      </>
    ),
    sections: [
      {
        title: "BMR is a resting estimate, not a daily total",
        content: (
          <>
            <p>
              BMR is best understood as a resting baseline. It represents the
              energy needed for basic processes such as breathing, circulation,
              and temperature regulation in a resting state. Most people burn
              more than BMR over the course of a normal day because walking,
              work, childcare, exercise, and digestion all add energy demand.
            </p>
            <p>
              That is why BMR becomes more useful when paired with an activity
              multiplier, which is exactly how the{" "}
              {healthLink("/calculators/calorie-calculator", "calorie calculator")}{" "}
              works.
            </p>
          </>
        ),
      },
      {
        title: "How BMR is commonly estimated",
        content: (
          <>
            <p>
              Most online BMR tools use a formula based on age, sex, height,
              and weight. These formulas are practical because they are easy to
              apply without specialized equipment. They are imperfect because
              they do not directly measure body composition, hormone status, or
              individual metabolic differences.
            </p>
            <p>
              Drutilio&apos;s {healthLink("/calculators/bmr-calculator", "BMR calculator")}{" "}
              gives a fast estimate, while{" "}
              {healthLink(
                "/calculators/body-fat-calculator",
                "body fat calculator",
              )}{" "}
              offers a separate body-composition-style reference that some
              people find helpful for context.
            </p>
          </>
        ),
      },
      {
        title: "Why BMR is useful but limited",
        content: (
          <>
            <p>
              BMR can help people understand why larger bodies usually require
              more energy and why total calorie needs are not one-size-fits-all.
              It can also make calorie estimates feel less arbitrary because the
              math is anchored to real physical inputs rather than guesswork.
            </p>
            <p>
              But BMR is still just an estimate. It should not be treated as a
              diagnostic tool or a direct measure of metabolic health.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              From here, the best next reads are{" "}
              {healthLink(
                "/how-many-calories-should-i-eat",
                "how many calories should I eat",
              )}{" "}
              and{" "}
              {healthLink(
                "/bmi-vs-body-fat-percentage",
                "BMI vs. body fat percentage",
              )}{" "}
              if you want more context about the limits of simple body metrics.
              The broader {healthLink("/health", "health hub")} links the whole
              cluster together.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is BMR the same as maintenance calories?",
        answer:
          "No. BMR is a resting estimate, while maintenance calories usually include daily activity as well.",
      },
      {
        question: "Can I measure BMR exactly with an online tool?",
        answer:
          "No. Online tools estimate BMR using formulas rather than direct laboratory measurement.",
      },
      {
        question: "Why does age matter in a BMR estimate?",
        answer:
          "Age is one of the factors used by common formulas because energy needs often change over time.",
      },
      {
        question: "Does BMR tell me whether I am healthy?",
        answer:
          "No. BMR is an energy-use estimate, not a diagnosis or a full health assessment.",
      },
      {
        question: "Is this guide medical advice?",
        answer:
          "No. It is educational only and should not replace guidance from a qualified healthcare professional.",
      },
    ],
  },
  "bmi-vs-body-fat-percentage": {
    title: "BMI vs. Body Fat Percentage",
    description:
      "Compare BMI and body fat percentage to understand what each measurement can and cannot tell you.",
    path: "/bmi-vs-body-fat-percentage",
    intro: (
      <>
        <p>
          BMI and body fat percentage often get discussed together because both
          try to summarize something about body size or composition. But they do
          different jobs. BMI is a simple height-to-weight screen. Body fat
          percentage tries to say something more specific about body
          composition, though simplified home methods still rely on estimation.
        </p>
        <p>
          This page is educational only. It does not provide diagnosis,
          treatment, or medical advice, and it should not replace personalized
          evaluation from a qualified healthcare professional.
        </p>
      </>
    ),
    sections: [
      {
        title: "BMI is simpler, but broader",
        content: (
          <>
            <p>
              BMI uses only height and weight, which makes it fast and
              accessible. The tradeoff is that it cannot distinguish between
              muscle, fat, frame size, or fat distribution. That simplicity is
              why BMI is best seen as a broad screening-style measure rather
              than a detailed body-composition tool.
            </p>
            <p>
              Drutilio&apos;s {healthLink("/calculators/bmi-calculator", "BMI calculator")}{" "}
              is useful when you want that broad screen quickly.
            </p>
          </>
        ),
      },
      {
        title: "Body fat percentage aims to say more",
        content: (
          <>
            <p>
              Body fat percentage is often more intuitive for people who want to
              think about composition rather than only body size. It can still
              vary depending on method. A circumference-based estimate is not
              the same thing as a scan-based measurement, and the numbers should
              be interpreted with appropriate caution.
            </p>
            <p>
              That is why a{" "}
              {healthLink(
                "/calculators/body-fat-calculator",
                "body fat calculator",
              )}{" "}
              is useful for rough context but not for definitive medical
              conclusions.
            </p>
          </>
        ),
      },
      {
        title: "Why using both can be more useful than using only one",
        content: (
          <>
            <p>
              Looking at BMI and body fat percentage together can sometimes give
              a more balanced view than relying on one number alone. For
              example, a person with a high BMI and a modest body-fat estimate
              may interpret their numbers differently from someone whose two
              measures move in the same direction.
            </p>
            <p>
              Even then, neither number should be treated as a verdict. Real
              health status involves far more than screening estimates.
            </p>
          </>
        ),
      },
      {
        title: "Related tools and guides",
        content: (
          <>
            <p>
              Continue with the{" "}
              {healthLink("/healthy-weight-guide", "healthy weight guide")} for
              a broader discussion of body-size reference tools, or visit the{" "}
              {healthLink("/health", "health hub")} to compare the full health
              calculator cluster, including calorie, BMR, ideal-weight, and
              water-intake tools.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is body fat percentage always better than BMI?",
        answer:
          "Not always. Body fat percentage can offer more composition context, but simplified methods are still estimates and are not automatically more useful in every setting.",
      },
      {
        question: "Can BMI be misleading?",
        answer:
          "Yes. BMI can be limited because it does not distinguish between muscle, fat, or body-fat distribution.",
      },
      {
        question: "Can body fat calculations vary by method?",
        answer:
          "Yes. Different methods can produce different estimates, especially between home measurements and clinical tools.",
      },
      {
        question: "Should I rely on one metric alone?",
        answer:
          "Usually not. These tools are more helpful when treated as context rather than as definitive judgments.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No. This page is educational only and not a substitute for professional medical evaluation.",
      },
    ],
  },
  "healthy-weight-guide": {
    title: "Healthy Weight Guide",
    description:
      "Learn how healthy weight is often discussed using BMI ranges, body composition, and practical context rather than one perfect number.",
    path: "/healthy-weight-guide",
    intro: (
      <>
        <p>
          Healthy weight is often talked about as if it were one exact number,
          but that framing is usually too narrow. A healthier way to think about
          it is as a zone informed by height, body composition, habits, medical
          context, and sustainability. Reference tools can be useful, but none
          should be mistaken for a complete answer on their own.
        </p>
        <p>
          This guide is educational only. It does not provide medical advice,
          diagnosis, or treatment recommendations. For personal concerns, talk
          with a qualified healthcare professional.
        </p>
      </>
    ),
    sections: [
      {
        title: "Reference ranges are starting points",
        content: (
          <>
            <p>
              Many people start with BMI because it is widely known and quick to
              estimate. Others prefer an ideal-weight formula or a body-fat
              estimate. These can all be helpful as starting points, especially
              when used together rather than as isolated verdicts.
            </p>
            <p>
              Drutilio&apos;s {healthLink("/calculators/ideal-weight-calculator", "ideal weight calculator")}{" "}
              shows both a reference formula and a healthy-BMI comparison range,
              while the{" "}
              {healthLink("/calculators/bmi-calculator", "BMI calculator")} and{" "}
              {healthLink(
                "/calculators/body-fat-calculator",
                "body fat calculator",
              )}{" "}
              add related context.
            </p>
          </>
        ),
      },
      {
        title: "A healthy weight is not only about the scale",
        content: (
          <>
            <p>
              Body weight matters, but health conversations usually also include
              sleep, movement, nutrition quality, blood markers, strength,
              medication needs, and how sustainable a routine feels. Focusing on
              one number alone can make the conversation smaller than it needs
              to be.
            </p>
            <p>
              That is especially true for readers in the US, Canada, the UK,
              and Australia, where food environment and daily routine can make
              consistency harder than the math itself.
            </p>
          </>
        ),
      },
      {
        title: "Use screening tools with realism",
        content: (
          <>
            <p>
              A screening-style number can still be helpful if you treat it as a
              prompt rather than a judgment. It can help frame a conversation,
              track change over time, or encourage you to ask better questions.
              It should not be treated as a guarantee of future health or as a
              diagnosis.
            </p>
            <p>
              The broader {healthLink("/health", "health hub")} is designed with
              that spirit in mind: practical tools, useful framing, and clear
              limits.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is there one exact healthy weight for everyone?",
        answer:
          "No. Healthy weight is usually better understood as a range or context-based zone rather than one universal target number.",
      },
      {
        question: "Is BMI enough to define healthy weight?",
        answer:
          "No. BMI can be useful, but it is only one screening measure and does not capture every part of health or body composition.",
      },
      {
        question: "Why do ideal-weight formulas differ from BMI ranges?",
        answer:
          "They are built from different assumptions, so they can produce different reference points.",
      },
      {
        question: "Should I focus only on the scale?",
        answer:
          "Usually not. Habits, fitness, medical context, and sustainability all matter alongside body weight.",
      },
      {
        question: "Is this guide giving medical advice?",
        answer:
          "No. It is educational only and should not replace individualized care from a healthcare professional.",
      },
    ],
  },
  "common-weight-loss-mistakes": {
    title: "Common Weight Loss Mistakes",
    description:
      "Review common weight-loss planning mistakes around calorie estimates, expectations, hydration, body metrics, and sustainability.",
    path: "/common-weight-loss-mistakes",
    intro: (
      <>
        <p>
          Weight-loss planning often becomes harder not because the math is
          impossible, but because expectations, routine, and interpretation can
          drift away from reality. Many common mistakes are less about effort
          and more about using tools too rigidly, trusting rough estimates too
          much, or expecting fast change to be linear.
        </p>
        <p>
          This article is educational only. It does not provide medical
          diagnosis, treatment, or individualized nutrition advice. For
          personal medical concerns, consult a qualified healthcare
          professional.
        </p>
      </>
    ),
    sections: [
      {
        title: "Mistaking estimates for exact instructions",
        content: (
          <>
            <p>
              Calorie estimates, BMR numbers, BMI values, and body-fat formulas
              are useful starting points. Problems begin when people treat them
              as exact instructions rather than approximations. That can lead to
              frustration when real results move slower or faster than expected.
            </p>
            <p>
              Tools like the{" "}
              {healthLink("/calculators/calorie-calculator", "calorie calculator")}{" "}
              and {healthLink("/calculators/bmr-calculator", "BMR calculator")}{" "}
              are best used as planning aids, not guarantees.
            </p>
          </>
        ),
      },
      {
        title: "Ignoring sustainability",
        content: (
          <>
            <p>
              A plan that looks perfect on paper but feels impossible after a
              week is often less useful than a gentler plan that someone can
              maintain. Unrealistic restriction, all-or-nothing rules, and
              dramatic expectations can undermine consistency.
            </p>
            <p>
              That is one reason why mild calorie adjustments and realistic
              behavior patterns often matter more than chasing the most
              aggressive theoretical number.
            </p>
          </>
        ),
      },
      {
        title: "Using only one body metric",
        content: (
          <>
            <p>
              Another common mistake is treating one number as the whole story.
              BMI, body fat percentage, weight, waist size, and daily
              hydration-related fluctuations can each tell only part of the
              picture. Looking at trend direction and context is often more
              useful than obsessing over a single reading.
            </p>
            <p>
              That is why Drutilio links the{" "}
              {healthLink("/calculators/bmi-calculator", "BMI calculator")},{" "}
              {healthLink(
                "/calculators/body-fat-calculator",
                "body fat calculator",
              )},{" "}
              and{" "}
              {healthLink(
                "/calculators/water-intake-calculator",
                "water intake calculator",
              )}{" "}
              together inside the same cluster.
            </p>
          </>
        ),
      },
      {
        title: "Better next steps",
        content: (
          <>
            <p>
              If you are trying to build a calmer, more informed approach, use
              the {healthLink("/health", "health hub")} as the main starting
              point. It connects calorie planning, BMR, body-composition
              context, healthy-weight framing, and practical hydration
              estimates without pretending online tools can replace clinical
              care.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is the most common mistake eating too many calories?",
        answer:
          "Sometimes, but another common mistake is expecting rough estimates to behave like exact prescriptions.",
      },
      {
        question: "Can aggressive plans backfire?",
        answer:
          "They can for some people, especially if the plan is too difficult to sustain in real life.",
      },
      {
        question: "Should I rely only on weight to judge progress?",
        answer:
          "Usually not. Weight is one data point, but trend, routine, hydration, and other measurements can also matter.",
      },
      {
        question: "Do online tools replace professional care?",
        answer:
          "No. They are educational tools and should not replace personal medical evaluation or treatment guidance.",
      },
      {
        question: "Is this page medical advice?",
        answer:
          "No. It is educational only and not a substitute for a qualified healthcare professional.",
      },
    ],
  },
};

export function getHealthArticle(slug: string) {
  return healthArticleContent[slug];
}

export function getHealthArticleMetadata(slug: string): Metadata {
  const article = getHealthArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.path,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: article.path,
    },
  };
}
