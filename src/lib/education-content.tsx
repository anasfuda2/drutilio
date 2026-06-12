import Link from "next/link";
import type { Metadata } from "next";
import type { EducationArticleContent } from "@/components/content/EducationArticlePage";

function educationLink(href: string, label: string) {
  return (
    <Link
      href={href}
      className="font-semibold text-emerald-300 hover:text-emerald-200"
    >
      {label}
    </Link>
  );
}

type EducationArticleMap = Record<string, EducationArticleContent>;

export const educationArticleContent: EducationArticleMap = {
  "how-to-calculate-gpa": {
    title: "How to Calculate GPA",
    description:
      "Learn how GPA is calculated using letter grades, grade points, and credit hours in a simple educational guide.",
    path: "/how-to-calculate-gpa",
    intro: (
      <>
        <p>
          GPA, or grade point average, is one of the most common summary
          measures used in school and college settings. It looks simple on the
          surface, but students often get confused about how credit hours,
          letter grades, weighted courses, and term averages fit together.
        </p>
        <p>
          This guide is educational only. Schools can use different scales and
          transcript rules, so Dr.Utilio&apos;s education tools should be treated
          as planning aids rather than official academic records.
        </p>
      </>
    ),
    sections: [
      {
        title: "GPA starts with grade points",
        content: (
          <>
            <p>
              The basic idea is that each letter grade is converted into a
              grade-point value. A class with more credit hours affects the GPA
              more than a class with fewer credit hours. That means GPA is not
              usually a simple average of letters. It is a weighted average
              built from grade points and credits.
            </p>
            <p>
              Dr.Utilio&apos;s {educationLink("/calculators/gpa-calculator", "GPA calculator")}{" "}
              does that weighting automatically so you can focus on planning
              instead of repetitive arithmetic.
            </p>
          </>
        ),
      },
      {
        title: "Why credit hours matter",
        content: (
          <>
            <p>
              A four-credit class usually affects the cumulative average more
              than a one-credit class because it represents a larger portion of
              the academic workload. This is why students sometimes feel
              surprised when one strong or weak course moves the GPA more than
              expected.
            </p>
            <p>
              If you want to understand how one exam could affect a final
              course outcome before it even reaches your GPA, the{" "}
              {educationLink(
                "/calculators/final-grade-calculator",
                "final grade calculator",
              )}{" "}
              is the natural companion.
            </p>
          </>
        ),
      },
      {
        title: "Cumulative GPA versus one-term GPA",
        content: (
          <>
            <p>
              A term GPA only reflects one reporting period. A cumulative GPA
              blends multiple terms together. The same formula idea still
              applies, but cumulative averages are influenced by a much larger
              base of grades and credits.
            </p>
            <p>
              That is why long-term GPA improvement is usually slower than
              students expect. Once more credits have already been completed,
              each new class has a smaller proportional effect.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Continue with{" "}
              {educationLink(
                "/weighted-vs-unweighted-gpa",
                "weighted vs. unweighted GPA",
              )},{" "}
              {educationLink("/how-to-improve-your-gpa", "how to improve your GPA")}, and the{" "}
              {educationLink("/education", "education hub")} for the rest of
              the cluster. If time management is part of the problem, the{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )}{" "}
              and {educationLink("/how-many-hours-should-i-study", "study-hours guide")} help round out the planning side.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is GPA a simple average of my letter grades?",
        answer:
          "Usually no. GPA is commonly weighted by credit hours, so not every class affects the average equally.",
      },
      {
        question: "Can one course change my cumulative GPA a lot?",
        answer:
          "It depends on the credit hours and on how many total credits are already on your record.",
      },
      {
        question: "Will Dr.Utilio always match my school transcript?",
        answer:
          "Not always. Schools can use different scales, repeats policies, and honors adjustments.",
      },
      {
        question: "Should I use a final-grade tool with GPA planning?",
        answer:
          "Yes. Final course outcomes often feed into GPA planning, so the two tools work well together.",
      },
      {
        question: "Is this official academic advice?",
        answer:
          "No. This guide is educational only and should not replace your school’s official policies or advising.",
      },
    ],
  },
  "weighted-vs-unweighted-gpa": {
    title: "Weighted vs. Unweighted GPA",
    description:
      "Understand the difference between weighted and unweighted GPA and why schools do not always use the same academic scale.",
    path: "/weighted-vs-unweighted-gpa",
    intro: (
      <>
        <p>
          Weighted and unweighted GPA are often mentioned together, but they do
          not always answer the same question. An unweighted GPA usually sticks
          to one standard scale. A weighted GPA may give additional emphasis to
          honors, AP, IB, or similarly advanced coursework.
        </p>
        <p>
          This guide is educational only. Institutions can define weighting
          differently, so you should always check your school&apos;s official
          policy when precision matters.
        </p>
      </>
    ),
    sections: [
      {
        title: "Unweighted GPA keeps one standard scale",
        content: (
          <>
            <p>
              Unweighted GPA is often easier to read because the same general
              grade scale applies across classes. Its strength is simplicity.
              Its limitation is that it may not reflect differences in course
              rigor the way some schools want to present them.
            </p>
          </>
        ),
      },
      {
        title: "Weighted GPA tries to account for course rigor",
        content: (
          <>
            <p>
              A weighted GPA may award extra value to advanced courses, but the
              exact weighting system can vary. That variation is the main source
              of confusion. One school&apos;s weighted GPA may not be directly
              comparable to another&apos;s.
            </p>
            <p>
              If you want a clean academic average estimate from the courses you
              know, the {educationLink("/calculators/gpa-calculator", "GPA calculator")} is still useful as a planning base.
            </p>
          </>
        ),
      },
      {
        title: "Why students should care",
        content: (
          <>
            <p>
              Students care because transcripts, rankings, and admissions
              conversations may use one measure, the other, or both. The safest
              approach is to understand how your own school reports grades
              rather than assuming one universal system applies everywhere.
            </p>
          </>
        ),
      },
      {
        title: "Related education pages",
        content: (
          <>
            <p>
              Good next reads are{" "}
              {educationLink("/how-to-calculate-gpa", "how to calculate GPA")},
              {educationLink("/college-gpa-guide", "college GPA guide")}, and{" "}
              {educationLink("/education", "education hub")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is weighted GPA always better than unweighted GPA?",
        answer:
          "Not necessarily. They serve different reporting purposes, and schools may prefer one or use both.",
      },
      {
        question: "Do all schools weight courses the same way?",
        answer:
          "No. Weighting systems can vary significantly by school or district.",
      },
      {
        question: "Can Dr.Utilio calculate every school-specific weighting system?",
        answer:
          "No. The education tools are general planning tools and may not match every institutional rule.",
      },
      {
        question: "Why can GPA comparisons between students be tricky?",
        answer:
          "Because course rigor, school policies, and weighting methods may differ.",
      },
      {
        question: "Is this official admissions advice?",
        answer:
          "No. It is educational only.",
      },
    ],
  },
  "how-to-improve-your-gpa": {
    title: "How to Improve Your GPA",
    description:
      "Learn practical educational strategies for improving GPA through course planning, exam awareness, and study-time management.",
    path: "/how-to-improve-your-gpa",
    intro: (
      <>
        <p>
          Improving GPA usually takes more than just “trying harder.” It often
          comes down to understanding where grades are won or lost, using time
          more deliberately, and setting realistic expectations about how fast a
          cumulative average can move.
        </p>
        <p>
          This guide is educational only and does not replace academic advising,
          instructor guidance, or official school policy.
        </p>
      </>
    ),
    sections: [
      {
        title: "Know which courses carry the most weight",
        content: (
          <>
            <p>
              Credit-heavy courses often have the biggest influence on GPA, so
              identifying those classes helps you prioritize effort more
              effectively. The{" "}
              {educationLink("/calculators/gpa-calculator", "GPA calculator")}{" "}
              can help you model where the larger impact areas are.
            </p>
          </>
        ),
      },
      {
        title: "Use final-exam math early, not late",
        content: (
          <>
            <p>
              Many students wait too long to check what score they actually need
              on a final. The{" "}
              {educationLink(
                "/calculators/final-grade-calculator",
                "final grade calculator",
              )}{" "}
              works best when you use it early enough to adjust study strategy
              before the term is almost over.
            </p>
          </>
        ),
      },
      {
        title: "Protect study time with a real schedule",
        content: (
          <>
            <p>
              Improvement often comes from consistency more than intensity. A
              simple weekly routine is usually more sustainable than last-minute
              recovery efforts. That is where the{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )}{" "}
              becomes useful.
            </p>
          </>
        ),
      },
      {
        title: "Next steps",
        content: (
          <>
            <p>
              Pair this guide with{" "}
              {educationLink(
                "/how-many-hours-should-i-study",
                "how many hours you should study",
              )},{" "}
              {educationLink("/common-study-mistakes", "common study mistakes")}, and the{" "}
              {educationLink("/education", "education hub")} for a fuller plan.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Can GPA improve quickly?",
        answer:
          "It depends on how many credits are already completed and how strongly new grades affect the average.",
      },
      {
        question: "Is studying more hours always the answer?",
        answer:
          "Not always. Better planning and better use of time can matter as much as the total number of hours.",
      },
      {
        question: "Should I focus on all classes equally?",
        answer:
          "Usually not. Credit hours, course difficulty, and your current standing can make some classes more urgent than others.",
      },
      {
        question: "Can the final-grade calculator help with GPA improvement?",
        answer:
          "Yes. It helps you understand which course targets are realistic before grades are finalized.",
      },
      {
        question: "Is this academic advising?",
        answer:
          "No. It is educational guidance only.",
      },
    ],
  },
  "college-gpa-guide": {
    title: "College GPA Guide",
    description:
      "Understand how college GPA commonly works, including cumulative averages, credit hours, and why each term affects the record differently.",
    path: "/college-gpa-guide",
    intro: (
      <>
        <p>
          College GPA matters because it often shapes academic standing,
          scholarship conversations, program applications, and personal
          confidence. But college GPA can also feel harder to read than high
          school GPA because the pace, grading policies, and credit structure
          are often more varied.
        </p>
        <p>
          This page is educational only and should not replace the specific GPA
          rules published by your institution.
        </p>
      </>
    ),
    sections: [
      {
        title: "College GPA is usually credit-weighted",
        content: (
          <>
            <p>
              Credit weighting matters even more in college because course
              structures can vary widely. A lab, lecture, seminar, or elective
              may not all carry the same credit load, so their effect on GPA
              can differ.
            </p>
          </>
        ),
      },
      {
        title: "Cumulative averages move more slowly over time",
        content: (
          <>
            <p>
              Early in college, one term can change the cumulative GPA a lot.
              Later on, once many credits have accumulated, each new class tends
              to move the average more gradually. That can be reassuring or
              frustrating depending on the situation.
            </p>
          </>
        ),
      },
      {
        title: "Use tools for planning, not panic",
        content: (
          <>
            <p>
              The {educationLink("/calculators/gpa-calculator", "GPA calculator")} helps model course outcomes, while the{" "}
              {educationLink(
                "/calculators/final-grade-calculator",
                "final grade calculator",
              )}{" "}
              helps with exam-specific pressure points.
            </p>
          </>
        ),
      },
      {
        title: "Related education resources",
        content: (
          <>
            <p>
              Continue with{" "}
              {educationLink("/how-to-calculate-gpa", "how to calculate GPA")},
              {educationLink("/how-to-improve-your-gpa", "how to improve your GPA")}, and the{" "}
              {educationLink("/education", "education hub")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is college GPA calculated differently from high school GPA?",
        answer:
          "Often yes. Credit structures, weighting, and policy details can differ meaningfully by institution.",
      },
      {
        question: "Why does one college class sometimes affect GPA more than another?",
        answer:
          "Because credit hours are often different, so the weighting is different too.",
      },
      {
        question: "Can cumulative GPA recover after a weak term?",
        answer:
          "Yes, but the pace of recovery depends on how many credits are already on the record and how strong future grades are.",
      },
      {
        question: "Will Dr.Utilio match my official transcript exactly?",
        answer:
          "Not always. It is a planning tool and may not reflect every institutional rule.",
      },
      {
        question: "Is this official registrar guidance?",
        answer:
          "No. It is educational only.",
      },
    ],
  },
  "final-grade-calculator-guide": {
    title: "Final Grade Calculator Guide",
    description:
      "Learn how final grade calculators work and how weighted exam math can help set realistic course targets.",
    path: "/final-grade-calculator-guide",
    intro: (
      <>
        <p>
          Final-grade planning is one of the clearest places where a small
          amount of math can reduce a lot of uncertainty. Knowing what score
          you actually need on a final exam is usually more helpful than
          guessing, especially when time and stress are both limited.
        </p>
        <p>
          This guide is educational only and does not replace your course
          syllabus, grading policy, or instructor guidance.
        </p>
      </>
    ),
    sections: [
      {
        title: "The tool works backward from your goal",
        content: (
          <>
            <p>
              A final-grade calculator starts with your current grade, your
              target final grade, and the weight of the final exam. From there,
              it solves backward to estimate the score needed on the exam.
            </p>
            <p>
              Dr.Utilio&apos;s{" "}
              {educationLink(
                "/calculators/final-grade-calculator",
                "final grade calculator",
              )}{" "}
              is built around that exact approach.
            </p>
          </>
        ),
      },
      {
        title: "Why weighting matters so much",
        content: (
          <>
            <p>
              A 10% final and a 30% final can create very different score
              requirements even when the current course grade looks similar.
              This is why the weighting structure matters at least as much as
              the headline grade number.
            </p>
          </>
        ),
      },
      {
        title: "When the target is not reachable",
        content: (
          <>
            <p>
              Sometimes the required exam score ends up above 100%. That
              usually means the target is not reachable under the assumptions
              entered. It does not mean the course is lost. It means the goal
              may need to be adjusted to something more realistic.
            </p>
          </>
        ),
      },
      {
        title: "Related planning tools",
        content: (
          <>
            <p>
              Pair this guide with the{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )},{" "}
              {educationLink("/how-many-hours-should-i-study", "study-hours guide")}, and the{" "}
              {educationLink("/education", "education hub")} for a fuller exam-prep workflow.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Does the final-grade calculator guarantee what I need on the exam?",
        answer:
          "No. It estimates the score needed under the weighting assumptions entered.",
      },
      {
        question: "What if the required score is above 100%?",
        answer:
          "That usually means the target final grade is not reachable under the current assumptions.",
      },
      {
        question: "Can class rounding change the real result?",
        answer:
          "Yes. Instructors can use different rounding, category, or extra-credit rules.",
      },
      {
        question: "Should I use this before exam week?",
        answer:
          "Yes. It is most useful when there is still time to adjust study strategy.",
      },
      {
        question: "Is this official academic advice?",
        answer:
          "No. It is educational only.",
      },
    ],
  },
  "study-time-calculator-guide": {
    title: "Study Time Calculator Guide",
    description:
      "Learn how study-time calculators help turn weekly goals into realistic schedules across multiple subjects.",
    path: "/study-time-calculator-guide",
    intro: (
      <>
        <p>
          Study planning gets easier when the weekly goal turns into a schedule
          you can actually picture. That is the real value of a study-time
          calculator: not predicting grades, but making your workload feel more
          concrete and easier to organize.
        </p>
        <p>
          This guide is educational only and is meant for planning, not for
          replacing school support or individualized academic coaching.
        </p>
      </>
    ),
    sections: [
      {
        title: "Start with a weekly target",
        content: (
          <>
            <p>
              A weekly study-hours target gives you a container to work with.
              From there, you can spread those hours across available days and
              the number of subjects on your plate.
            </p>
          </>
        ),
      },
      {
        title: "Subjects and available days shape the schedule",
        content: (
          <>
            <p>
              The number of subjects matters because more subjects often means
              more switching costs and less time per topic. Available days
              matter because they determine how compact or spread out the plan
              becomes.
            </p>
            <p>
              Dr.Utilio&apos;s{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )}{" "}
              translates that into a simple weekly structure.
            </p>
          </>
        ),
      },
      {
        title: "Consistency usually beats intensity",
        content: (
          <>
            <p>
              A consistent schedule is often easier to sustain than an
              aggressive one that collapses after a few days. This is why even a
              modest plan can be useful if it is realistic enough to repeat.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Follow this with{" "}
              {educationLink("/how-many-hours-should-i-study", "how many hours you should study")},
              {educationLink("/common-study-mistakes", "common study mistakes")}, and the{" "}
              {educationLink("/education", "education hub")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Does a study-time calculator predict my grade?",
        answer:
          "No. It helps structure time, but it does not guarantee an academic result.",
      },
      {
        question: "Should every subject get the same number of hours?",
        answer:
          "Not always. Difficulty, urgency, and current standing can change how time should be distributed.",
      },
      {
        question: "Is a seven-day study plan always better?",
        answer:
          "Not necessarily. The best plan is often the one you can sustain with real consistency.",
      },
      {
        question: "Can this help with exam prep?",
        answer:
          "Yes. It is especially useful when paired with a final-grade target.",
      },
      {
        question: "Is this formal academic advising?",
        answer:
          "No. It is an educational planning guide only.",
      },
    ],
  },
  "common-study-mistakes": {
    title: "Common Study Mistakes",
    description:
      "Review common study mistakes that undermine grades, time use, and exam preparation, plus how calculators can support better planning.",
    path: "/common-study-mistakes",
    intro: (
      <>
        <p>
          Students often assume the problem is effort alone when the bigger
          issue is planning. Common study mistakes usually involve timing,
          unrealistic expectations, weak feedback loops, or using grades as
          surprise events instead of measurable targets.
        </p>
        <p>
          This guide is educational only and is intended to support academic
          planning, not replace school advising or instructor guidance.
        </p>
      </>
    ),
    sections: [
      {
        title: "Waiting too long to measure where you stand",
        content: (
          <>
            <p>
              One of the most common mistakes is not checking the numbers early
              enough. The {educationLink("/calculators/final-grade-calculator", "final grade calculator")} is most useful when it still gives you time to act.
            </p>
          </>
        ),
      },
      {
        title: "Equating hours with quality",
        content: (
          <>
            <p>
              More hours do not automatically mean better studying. Without
              structure, long study sessions can create the feeling of effort
              without much retention. The{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )}{" "}
              helps turn vague intent into a more structured weekly plan.
            </p>
          </>
        ),
      },
      {
        title: "Ignoring the cumulative GPA picture",
        content: (
          <>
            <p>
              Some students focus on one class so intensely that they lose sight
              of how the broader schedule affects cumulative GPA. That is where
              the {educationLink("/calculators/gpa-calculator", "GPA calculator")} is helpful.
            </p>
          </>
        ),
      },
      {
        title: "Related pages",
        content: (
          <>
            <p>
              Continue with{" "}
              {educationLink("/how-to-improve-your-gpa", "how to improve your GPA")},
              {educationLink("/how-many-hours-should-i-study", "how many hours you should study")}, and the{" "}
              {educationLink("/education", "education hub")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is cramming the biggest study mistake?",
        answer:
          "It is a common one, but unclear goals and weak planning are also major problems.",
      },
      {
        question: "Can calculators really help with study mistakes?",
        answer:
          "They can help by making targets, schedules, and grade requirements more concrete.",
      },
      {
        question: "Should I measure study success only by hours?",
        answer:
          "No. Hours matter, but strategy and quality of study matter too.",
      },
      {
        question: "Does one weak exam always ruin a GPA?",
        answer:
          "Not always. The overall impact depends on course weight, credits, and the rest of the academic record.",
      },
      {
        question: "Is this academic counseling?",
        answer:
          "No. It is educational content only.",
      },
    ],
  },
  "how-many-hours-should-i-study": {
    title: "How Many Hours Should I Study?",
    description:
      "Learn how students can think about weekly study hours in a more realistic way using subject load, deadlines, and scheduling constraints.",
    path: "/how-many-hours-should-i-study",
    intro: (
      <>
        <p>
          There is no single perfect number of study hours that works for every
          student. Course difficulty, prior knowledge, assignment type,
          deadlines, and learning style all matter. Still, students usually do
          better when they have a structured weekly target instead of only a
          vague plan to “study more.”
        </p>
        <p>
          This guide is educational only and is meant to support planning, not
          replace school support or individualized advising.
        </p>
      </>
    ),
    sections: [
      {
        title: "Start from workload, not guilt",
        content: (
          <>
            <p>
              A useful study-hours target starts with the actual number of
              subjects, difficulty level, and upcoming demands. Planning from
              guilt usually creates unrealistic schedules that are hard to
              sustain.
            </p>
          </>
        ),
      },
      {
        title: "Weekly targets are more practical than daily perfection",
        content: (
          <>
            <p>
              A weekly target gives flexibility. Some days are naturally more
              available than others, so thinking in weekly totals often makes
              the plan more realistic. The{" "}
              {educationLink(
                "/calculators/study-time-calculator",
                "study time calculator",
              )}{" "}
              is built around that exact idea.
            </p>
          </>
        ),
      },
      {
        title: "Study time should support a concrete academic goal",
        content: (
          <>
            <p>
              The most useful schedules connect back to something specific:
              protecting GPA, reaching a target final grade, or simply staying
              ahead of course load. That is why the study-time tool works best
              alongside the{" "}
              {educationLink("/calculators/gpa-calculator", "GPA calculator")}{" "}
              and{" "}
              {educationLink(
                "/calculators/final-grade-calculator",
                "final grade calculator",
              )}.
            </p>
          </>
        ),
      },
      {
        title: "Next steps",
        content: (
          <>
            <p>
              Continue with the{" "}
              {educationLink("/study-time-calculator-guide", "study time calculator guide")},
              {educationLink("/common-study-mistakes", "common study mistakes")}, and the{" "}
              {educationLink("/education", "education hub")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is there a universal number of study hours for all students?",
        answer:
          "No. Study-hour needs vary by subject load, deadlines, difficulty, and the student’s own learning context.",
      },
      {
        question: "Should I plan by day or by week?",
        answer:
          "Weekly planning is often more flexible, while daily planning helps with execution. Many students benefit from using both.",
      },
      {
        question: "Can a study schedule be too ambitious?",
        answer:
          "Yes. Overly aggressive schedules can be hard to sustain and may collapse quickly.",
      },
      {
        question: "Why pair study-hour planning with grade calculators?",
        answer:
          "Because time planning is more useful when it supports a clear academic target.",
      },
      {
        question: "Is this official academic advice?",
        answer:
          "No. It is educational guidance only.",
      },
    ],
  },
};

export function getEducationArticle(slug: string) {
  return educationArticleContent[slug];
}

export function getEducationArticleMetadata(slug: string): Metadata {
  const article = getEducationArticle(slug);

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
