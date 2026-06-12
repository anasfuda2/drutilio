import Link from "next/link";
import type { TaxArticleContent } from "@/components/content/TaxArticlePage";

function taxLink(href: string, label: string) {
  return (
    <Link href={href} className="font-semibold text-emerald-300 hover:text-emerald-200">
      {label}
    </Link>
  );
}

type TaxArticleMap = Record<string, TaxArticleContent>;

export const taxArticleContent: TaxArticleMap = {
  "how-to-calculate-federal-income-tax": {
    title: "How to Calculate Federal Income Tax",
    description:
      "Learn how to calculate federal income tax step by step with an educational guide covering taxable income, tax brackets, withholding, and common planning mistakes.",
    path: "/how-to-calculate-federal-income-tax",
    intro: (
      <>
        <p>
          Calculating federal income tax looks intimidating at first because the
          process mixes several concepts that people often blur together. Gross
          income is not the same thing as taxable income. Your marginal tax
          bracket is not the same thing as your effective tax rate. Withholding
          on a paycheck is not the same thing as your final tax bill. Once
          those pieces are separated, however, the logic becomes much easier to
          follow.
        </p>
        <p>
          This guide explains the process in plain language for a US audience.
          It is educational only and does not provide tax, legal, or financial
          advice. Federal income tax outcomes depend on filing status,
          deductions, credits, state rules, business income, and many other
          facts. Still, understanding the framework makes it much easier to ask
          better questions, use planning tools responsibly, and avoid common
          mistakes when reviewing a return or paycheck estimate.
        </p>
        <p>
          If you want a broader starting point, begin at the{" "}
          {taxLink("/tax", "Drutilio tax hub")}. For quick math alongside this
          article, the {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
          and {taxLink("/calculators/compound-interest-calculator", "compound interest calculator")}{" "}
          can be useful companions.
        </p>
      </>
    ),
    sections: [
      {
        title: "Start with gross income, but do not stop there",
        content: (
          <>
            <p>
              Many people hear “income” and assume the tax system applies one
              simple rate to the full amount they earned during the year. That
              is not how federal income tax works. The starting point is often
              gross income, meaning wages, self-employment income, interest,
              dividends, business receipts, and other includable amounts before
              many adjustments have been applied.
            </p>
            <p>
              Gross income matters because it is the raw material from which the
              tax calculation begins, but it is not usually the final number the
              IRS taxes. Adjustments may reduce it. Deductions may reduce it
              further. Credits may reduce tax after the base calculation has
              already been made. Understanding these layers prevents one of the
              most common misunderstandings in tax education: the belief that a
              higher tax bracket means every dollar you earn is suddenly taxed
              at that higher rate.
            </p>
          </>
        ),
      },
      {
        title: "Know the difference between AGI, taxable income, and tax due",
        content: (
          <>
            <p>
              After gross income, a common next stop is adjusted gross income,
              or AGI. AGI reflects certain allowed adjustments before the tax
              system applies either the standard deduction or itemized
              deductions. This is why AGI gets so much attention in tax forms,
              software, and income-based rules. It often acts as a reference
              point for phaseouts, credit eligibility, and planning decisions.
            </p>
            <p>
              Taxable income comes later. Once deductions are applied, the
              amount left is closer to the number that actually runs through the
              federal tax bracket system. But even then, that still does not
              equal final tax due. Credits, withholding, and estimated payments
              can all change the ending result. If you want a deeper breakdown
              of these distinctions, read{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              and {taxLink("/what-is-adjusted-gross-income", "what adjusted gross income is")}.
            </p>
          </>
        ),
      },
      {
        title: "How federal tax brackets actually work",
        content: (
          <>
            <p>
              The federal tax system is progressive, which means different
              layers of taxable income are taxed at different rates. Your top or
              marginal bracket applies only to the portion of taxable income
              that falls inside that range. The lower portions are taxed at the
              lower rates. This is why moving into a higher bracket does not
              cause your entire income to be taxed at that new rate.
            </p>
            <p>
              A simple way to think about it is as a stack of buckets. Each
              bucket has a rate and only the dollars poured into that bucket are
              taxed at that level. This distinction matters for planning. It
              also matters for morale, because many people feel unnecessary
              anxiety when they hear they are “in” a certain bracket and assume
              it changes everything. The dedicated guide on{" "}
              {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}{" "}
              walks through that structure in more detail.
            </p>
          </>
        ),
      },
      {
        title: "A practical step-by-step method",
        content: (
          <>
            <p>
              A practical federal income tax estimate usually follows this
              order: gather total income, estimate adjustments that affect AGI,
              determine whether the standard deduction or itemizing is more
              relevant, calculate taxable income, apply the bracket structure,
              then reduce the result by credits if they apply. After that,
              compare the estimated tax to withholding and estimated payments to
              see whether you are likely to owe more or receive a refund.
            </p>
            <p>
              This is where percentage math can help. Even when a tax return is
              more complicated than a back-of-the-envelope estimate, a quick
              number check with Drutilio&apos;s{" "}
              {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              can help you understand a marginal slice of income or compare the
              difference between one scenario and another. The point is not to
              replace tax software or professional review. The point is to make
              the structure legible enough that you can spot what is changing.
            </p>
          </>
        ),
      },
      {
        title: "Why withholding and refunds confuse so many people",
        content: (
          <>
            <p>
              People often talk about taxes in terms of refunds because that is
              the moment they feel most directly, but a refund is not the tax
              itself. A refund usually means too much money was withheld or paid
              in during the year relative to final tax liability. Owing at
              filing time usually means too little was withheld or paid in. In
              neither case does the refund alone tell you whether your tax rate
              was high or low.
            </p>
            <p>
              That is why refund conversations can drift into the wrong frame.
              A large refund may feel good, but it can also mean you gave up the
              use of your own money during the year. A very small refund or tax
              balance due may feel frustrating, but it can also mean your
              withholding was closer to the mark. For more on that side of the
              conversation, the{" "}
              {taxLink("/tax-refund-calculator-guide", "tax refund calculator guide")}{" "}
              is the right follow-up article.
            </p>
          </>
        ),
      },
      {
        title: "Common errors when estimating federal income tax",
        content: (
          <>
            <p>
              One very common mistake is confusing gross pay on a salary offer
              or paycheck with taxable income on a return. Another is assuming a
              bracket rate applies to every dollar earned. A third is ignoring
              how filing status, dependents, or self-employment income change
              the picture. Self-employment especially adds complexity because
              federal income tax and self-employment tax are related but not the
              same thing.
            </p>
            <p>
              Another easy miss is forgetting that credits and deductions work
              differently. Deductions reduce income subject to tax. Credits
              generally reduce the tax itself. That distinction can matter a
              lot. If you are trying to build a cleaner mental model of filing
              errors, see {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}{" "}
              and {taxLink("/self-employment-tax-guide", "the self-employment tax guide")}.
            </p>
          </>
        ),
      },
      {
        title: "When this guide is most useful",
        content: (
          <>
            <p>
              This guide is most useful when you want to understand the logic of
              federal income tax before relying on software output, comparing job
              offers, adjusting withholding, or reviewing whether a return makes
              rough sense. It is a framework page. It helps you ask the next
              right question.
            </p>
            <p>
              It is not a substitute for professional tax advice, return
              preparation review, or official IRS instructions. If your
              situation involves business losses, stock sales, multiple states,
              partnership income, or unusual credits, the details may move far
              beyond a general article. In those cases, use this page as a map,
              not as the final word.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next in Drutilio's tax cluster",
        content: (
          <>
            <p>
              If you are still building the basics, go next to{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              and {taxLink("/what-is-adjusted-gross-income", "what adjusted gross income is")}.
              If you want to understand rates more clearly, read{" "}
              {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}.
              If you are trying to troubleshoot a return or estimate, review{" "}
              {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}{" "}
              and {taxLink("/tax-refund-calculator-guide", "the tax refund calculator guide")}.
            </p>
            <p>
              And if your income includes independent contractor or small
              business earnings, the{" "}
              {taxLink("/self-employment-tax-guide", "self-employment tax guide")}{" "}
              is essential because it explains a separate layer of tax that many
              first-time freelancers underestimate.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is gross income the same as taxable income?",
        answer:
          "No. Gross income is usually an earlier starting point, while taxable income is what remains after certain adjustments and deductions have been applied.",
      },
      {
        question: "Does a higher tax bracket apply to all of my income?",
        answer:
          "No. In the federal bracket system, only the portion of taxable income inside a bracket is taxed at that bracket's rate.",
      },
      {
        question: "Is a tax refund the same thing as paying less tax?",
        answer:
          "Not necessarily. A refund often reflects how much was withheld or prepaid during the year relative to final liability.",
      },
      {
        question: "Can I estimate federal income tax with simple percentage math?",
        answer:
          "You can use percentage math for rough checks, but a full estimate usually needs income, deductions, filing status, credits, and withholding context.",
      },
      {
        question: "Is this guide tax advice?",
        answer:
          "No. It is an educational explanation of the federal income tax framework and is not a substitute for professional tax advice.",
      },
    ],
  },
  "federal-income-tax-brackets": {
    title: "Federal Income Tax Brackets",
    description:
      "Understand how federal income tax brackets work, what marginal tax rates mean, and why effective tax rate is usually lower than the top bracket you see.",
    path: "/federal-income-tax-brackets",
    intro: (
      <>
        <p>
          Tax brackets are one of the most quoted and least understood parts of
          the federal income tax system. People hear a rate, attach it to their
          identity, and often come away believing that all of their income is
          taxed at that single percentage. That misunderstanding creates a lot
          of unnecessary confusion around raises, side income, retirement
          distributions, and tax planning.
        </p>
        <p>
          This page explains federal income tax brackets in an educational way
          for a US audience. It does not provide tax advice. The point is to
          make the bracket system readable, show how marginal rates differ from
          effective rates, and help you understand what is actually changing
          when taxable income moves from one range to another.
        </p>
        <p>
          For the bigger picture, start with the{" "}
          {taxLink("/tax", "tax hub")} or the guide on{" "}
          {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}.
          For quick comparisons, Drutilio&apos;s{" "}
          {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
          can help with small what-if checks.
        </p>
      </>
    ),
    sections: [
      {
        title: "What a tax bracket actually means",
        content: (
          <>
            <p>
              A tax bracket is a rate that applies to a slice of taxable income,
              not usually to the full amount. The federal system uses multiple
              slices. Lower layers of taxable income are taxed at lower rates.
              Higher layers are taxed at higher rates. That is the practical
              meaning of a progressive tax system.
            </p>
            <p>
              This matters because the phrase “I am in the 22% bracket” is only
              partly informative. It tells you the top layer of your taxable
              income may be taxed at that rate, but it does not mean every
              dollar below that level is taxed the same way. Once you see the
              system as stacked ranges instead of one universal rate, the
              anxiety around crossing a threshold tends to ease considerably.
            </p>
          </>
        ),
      },
      {
        title: "Marginal rate vs. effective rate",
        content: (
          <>
            <p>
              Your marginal rate is the rate applied to your next dollar within
              the current bracket structure. Your effective rate is your total
              tax divided by taxable income, or sometimes by a broader income
              measure depending on the conversation. Effective rates are often
              lower than the top marginal bracket because earlier slices were
              taxed at lower levels.
            </p>
            <p>
              This is one of the most useful distinctions in personal tax
              literacy. It helps explain why a raise usually still leaves you
              better off even if part of the additional income enters a higher
              bracket. It also helps when reviewing a paycheck change,
              converting part-time work into self-employment, or comparing
              different retirement withdrawal strategies.
            </p>
          </>
        ),
      },
      {
        title: "Why taxable income matters more than gross income here",
        content: (
          <>
            <p>
              Tax brackets apply after the tax system has already moved from
              gross income toward taxable income. That is why someone with the
              same salary as someone else may not have the same bracket outcome
              once deductions, filing status, and other factors are applied.
            </p>
            <p>
              If you are unclear on that distinction, pause here and read{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              plus {taxLink("/what-is-adjusted-gross-income", "what AGI means")}.
              Those pages make the bracket conversation much easier to
              understand because they explain the income base more clearly.
            </p>
          </>
        ),
      },
      {
        title: "How bracket thinking helps with planning",
        content: (
          <>
            <p>
              Bracket awareness is useful because it helps you evaluate
              additional income, bonus pay, freelance work, or retirement
              withdrawals in a calmer and more precise way. Instead of asking,
              “Will this push me into a higher bracket and ruin everything?” you
              can ask, “What portion of the additional taxable income would be
              taxed at a higher marginal rate?”
            </p>
            <p>
              That style of thinking is not just more accurate. It is more
              practical. It helps you compare scenarios without dramatic
              overreaction. A rough percentage check can help here, which is why
              Drutilio&apos;s {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              and {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              can sometimes be useful side tools while you think through
              withholding, bonus spending, or reserve planning.
            </p>
          </>
        ),
      },
      {
        title: "Common misunderstandings around bracket changes",
        content: (
          <>
            <p>
              A very common misunderstanding is that a raise can leave you with
              less money because it pushes you into a higher bracket. In ordinary
              bracket mechanics, that is not how it works. The higher rate
              generally applies only to the additional slice, not the whole
              taxable income base. People can still feel a difference because of
              withholding, benefit phaseouts, or payroll timing, but the bracket
              story itself is more limited than people fear.
            </p>
            <p>
              Another misunderstanding is treating every bracket discussion as if
              it automatically predicts the final tax bill. Credits, deductions,
              filing status, and self-employment tax can all change the result.
              That is why bracket knowledge is necessary but not sufficient.
              It is one tool in the toolkit, not the entire tax return.
            </p>
          </>
        ),
      },
      {
        title: "Where brackets fit into filing mistakes",
        content: (
          <>
            <p>
              Bracket confusion often spills into filing mistakes. People may
              enter estimated numbers badly, assume withholding tells the whole
              story, or draw overly confident conclusions from a partial result.
              If that sounds familiar, the next good read is{" "}
              {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}.
            </p>
            <p>
              If you are trying to understand why a tax balance due or refund
              changed from one year to the next, the{" "}
              {taxLink("/tax-refund-calculator-guide", "tax refund calculator guide")}{" "}
              is also useful because it explains how withholding and final
              liability interact.
            </p>
          </>
        ),
      },
      {
        title: "Why this page stays educational",
        content: (
          <>
            <p>
              Federal brackets are official concepts, but how they affect a real
              person depends on the rest of the return. That is why this page
              stays at the level of education rather than giving individualized
              tax advice. A taxpayer with employee wages, dependents, investment
              income, business deductions, and credits may land in a very
              different effective position than a simple salary-only example
              suggests.
            </p>
            <p>
              The value of this page is that it helps you see the framework more
              clearly. Once that framework is clear, software output, paycheck
              changes, and planning conversations become much less mysterious.
            </p>
          </>
        ),
      },
      {
        title: "Next reads in the tax cluster",
        content: (
          <>
            <p>
              Continue with {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}{" "}
              if you want the full sequence. Read{" "}
              {taxLink("/what-is-adjusted-gross-income", "what AGI is")} and{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              if you want to understand the income base better. If you are
              dealing with contractor or side-gig income, the{" "}
              {taxLink("/self-employment-tax-guide", "self-employment tax guide")}{" "}
              matters because it covers a different tax layer entirely.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does my top bracket apply to all of my income?", answer: "No. It generally applies only to the portion of taxable income that falls within that bracket range." },
      { question: "What is the difference between marginal and effective tax rate?", answer: "Marginal rate applies to the next slice of taxable income, while effective rate reflects total tax relative to a broader income base." },
      { question: "Can a raise leave me with less take-home pay because of brackets alone?", answer: "Ordinary bracket mechanics do not usually make a raise leave you with less overall income, because only the additional slice is taxed at the higher rate." },
      { question: "Do brackets apply to gross income?", answer: "They usually apply after the tax system has moved closer to taxable income, not simply to gross income as originally earned." },
      { question: "Is this page tax advice?", answer: "No. It is an educational explanation of the bracket system and does not provide individualized tax advice." },
    ],
  },
  "taxable-income-vs-gross-income": {
    title: "Taxable Income vs. Gross Income",
    description:
      "Learn the difference between taxable income and gross income, why AGI matters in between, and how these terms affect tax estimates and refund expectations.",
    path: "/taxable-income-vs-gross-income",
    intro: (
      <>
        <p>
          Gross income and taxable income sound close enough that people often
          use them interchangeably, but in federal tax discussions they do very
          different jobs. Confusing them leads to bad estimates, unnecessary
          fear around brackets, and a lot of frustration when tax software or a
          paycheck result does not seem to match a rough mental calculation.
        </p>
        <p>
          This page explains the difference in plain language for US readers. It
          is educational only and does not provide tax advice. The goal is to
          show how income moves through the tax process, where AGI fits, and why
          understanding the chain from gross income to taxable income makes the
          rest of the return easier to read.
        </p>
        <p>
          The best companion pages are{" "}
          {taxLink("/what-is-adjusted-gross-income", "what adjusted gross income is")}{" "}
          and {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}.
        </p>
      </>
    ),
    sections: [
      {
        title: "Gross income is the starting pool",
        content: (
          <>
            <p>
              Gross income is often the broad starting pool of income that comes
              in before later tax adjustments and deductions reshape the number.
              Wages, self-employment income, some investment income, and other
              includable amounts may all feed into gross income. It is close to
              the headline number many people think of first.
            </p>
            <p>
              But a starting pool is not a final tax base. That is the key
              point. The tax system rarely stops at the first number you see.
              Instead, it keeps moving through additional layers that determine
              what actually matters for the bracket calculation and final tax
              bill.
            </p>
          </>
        ),
      },
      {
        title: "AGI sits in the middle for a reason",
        content: (
          <>
            <p>
              Adjusted gross income, or AGI, is one of the important middle
              checkpoints. It is not simply a vocabulary term for tax trivia. It
              often matters because credits, deductions, and phaseouts may use
              AGI or a related version of income as a reference point. That is
              why AGI appears so often in tax software and return review.
            </p>
            <p>
              In other words, gross income tells you where the process starts.
              AGI tells you where some important adjustments have already
              happened. Taxable income tells you where the bracket system is
              closer to being applied. Each stage matters for a different
              reason.
            </p>
          </>
        ),
      },
      {
        title: "Taxable income is the number closer to the bracket system",
        content: (
          <>
            <p>
              Taxable income is generally what remains after the tax process has
              applied the relevant deductions to the income base. This is the
              number more closely associated with the federal bracket
              calculation. When people want to know which bracket applies or
              whether a raise moves part of their income into a higher rate,
              taxable income is usually the more relevant measure.
            </p>
            <p>
              That is why gross income alone can be misleading. Two households
              can have similar gross income and still have different taxable
              income because their deductions, filing status, and other facts
              differ. Once you understand that, tax bracket conversations become
              much more grounded.
            </p>
          </>
        ),
      },
      {
        title: "Why this distinction matters in everyday life",
        content: (
          <>
            <p>
              This distinction matters whenever you estimate taxes, compare job
              offers, review year-end withholding, or wonder why software shows
              a different result than a simple salary-based calculation. It also
              matters when you hear tax policy debates in the news. Discussions
              of brackets or deductions often assume a more precise income base
              than ordinary conversation uses.
            </p>
            <p>
              It can even matter emotionally. People often become discouraged by
              numbers that sound larger than the amount actually subject to
              bracket rates. Understanding the sequence helps you replace vague
              anxiety with a more useful question: which income definition are
              we talking about right now?
            </p>
          </>
        ),
      },
      {
        title: "How this connects to refunds and filing mistakes",
        content: (
          <>
            <p>
              Confusing gross and taxable income often spills into refund
              expectations. A person may compare withholding to gross income and
              assume a refund should look a certain way, even though deductions,
              credits, and other return items changed the actual tax base. That
              disconnect is one reason returns can feel surprising.
            </p>
            <p>
              If you are troubleshooting that kind of surprise, review{" "}
              {taxLink("/tax-refund-calculator-guide", "the tax refund calculator guide")}{" "}
              and {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}.
              Those pages help connect income definitions back to the year-end
              outcome most people care about.
            </p>
          </>
        ),
      },
      {
        title: "Useful companion calculators",
        content: (
          <>
            <p>
              A lot of tax learning comes down to getting comfortable with
              changes in proportion. That is why Drutilio&apos;s{" "}
              {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              can be handy alongside this article when you want to compare how a
              deduction or change in income affects the bigger picture.
            </p>
            <p>
              If you are thinking beyond this year and trying to plan what tax
              reserves or refund adjustments might mean for your cash flow, the{" "}
              {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              and {taxLink("/calculators/compound-interest-calculator", "compound interest calculator")}{" "}
              can also help with broader money planning even though they are not
              tax calculators.
            </p>
          </>
        ),
      },
      {
        title: "Why this page stays educational",
        content: (
          <>
            <p>
              Federal tax outcomes depend on much more than vocabulary. The same
              terms can play out differently when credits, business income,
              investment sales, retirement distributions, and state taxes enter
              the picture. That is why this page explains the framework without
              pretending to calculate a real return from a handful of facts.
            </p>
            <p>
              Still, vocabulary matters. Once you know whether a conversation is
              about gross income, AGI, or taxable income, you can usually read
              the rest of the tax discussion with much more confidence.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Go next to {taxLink("/what-is-adjusted-gross-income", "what adjusted gross income is")}{" "}
              if you want the middle step in more detail. Read{" "}
              {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}{" "}
              to see how taxable income interacts with rates. And if you want the
              full flow from start to finish, the best next article is{" "}
              {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is gross income the same as AGI?", answer: "No. AGI is a later figure after certain adjustments have already been applied to gross income." },
      { question: "Is taxable income always lower than gross income?", answer: "Often it is lower because adjustments and deductions can reduce the amount that reaches the bracket system, but the path depends on the return." },
      { question: "Why does this distinction matter for brackets?", answer: "Because brackets usually apply closer to taxable income, not simply to the headline gross amount someone earned." },
      { question: "Can confusing these terms affect refund expectations?", answer: "Yes. Misunderstanding the income base can lead to unrealistic assumptions about withholding, credits, and year-end results." },
      { question: "Is this tax advice?", answer: "No. This page is educational and is not a substitute for individualized tax advice." },
    ],
  },
  "common-tax-filing-mistakes": {
    title: "Common Tax Filing Mistakes",
    description:
      "Review common tax filing mistakes involving income reporting, AGI, deductions, credits, withholding, and refund expectations in this educational US guide.",
    path: "/common-tax-filing-mistakes",
    intro: (
      <>
        <p>
          Many tax filing mistakes are not dramatic errors. They are smaller
          misunderstandings that stack up: the wrong income number, a missed
          form, an assumption about withholding, confusion over AGI, or a belief
          that a refund always means you handled the year well. Because tax
          filing mixes documents, software prompts, and tax vocabulary, it is
          easy for people to move too quickly and miss where the logic changed.
        </p>
        <p>
          This guide covers common filing mistakes in an educational way for US
          taxpayers. It does not provide tax advice. The aim is to help you
          review your process more calmly, understand where errors tend to come
          from, and spot the places where careful follow-up or professional
          review may be worthwhile.
        </p>
      </>
    ),
    sections: [
      {
        title: "Mistake 1: Using the wrong income concept",
        content: (
          <>
            <p>
              One of the most common mistakes is using the wrong income number
              for the question at hand. People may compare withholding to gross
              pay, then react to tax software results as if taxable income
              should match that same number. Or they may hear AGI discussed in a
              credit rule and assume it means total wages on a W-2.
            </p>
            <p>
              Getting this straight solves a surprising number of downstream
              problems. If you need to reset the terminology, go back to{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              and {taxLink("/what-is-adjusted-gross-income", "what AGI is")}.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 2: Assuming the bracket rate applies to everything",
        content: (
          <>
            <p>
              Another classic mistake is reading a bracket table and assuming a
              single rate applies to the full income amount. That error distorts
              estimates, makes raises feel scarier than they need to be, and can
              create confusion around refunds or balances due.
            </p>
            <p>
              Federal brackets generally work in layers. If that is still fuzzy,
              review {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}. A quick spot check with the{" "}
              {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              can also help you think through one slice at a time.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 3: Forgetting forms or side income",
        content: (
          <>
            <p>
              A return can go off course simply because a taxpayer forgot a form
              or treated side income casually. Gig work, freelance earnings,
              interest, dividends, marketplace payments, and smaller accounts
              can be overlooked more easily than regular W-2 wages because they
              arrive in different systems or at different times.
            </p>
            <p>
              This matters even more for independent contractors because the tax
              discussion is not only about federal income tax. Self-employment
              tax may also be relevant, which is why the{" "}
              {taxLink("/self-employment-tax-guide", "self-employment tax guide")}{" "}
              belongs on every side-gig reading list.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 4: Misreading refunds and withholding",
        content: (
          <>
            <p>
              Refund size can distract people from the underlying mechanics. A
              large refund is not automatically a sign of tax efficiency, and a
              smaller refund is not automatically a sign something went wrong.
              Very often, the refund is about how much was prepaid through
              withholding or estimated payments relative to final liability.
            </p>
            <p>
              If this is the part you are trying to understand, the{" "}
              {taxLink("/tax-refund-calculator-guide", "tax refund calculator guide")}{" "}
              is the best next read because it focuses on that year-end
              relationship directly.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 5: Overconfidence in software without understanding the prompts",
        content: (
          <>
            <p>
              Tax software is useful, but it still depends on the information
              you enter and the choices you make while answering prompts. If you
              misunderstand a category, skip context, or click through too
              quickly, the output may look polished while still being based on a
              shaky assumption.
            </p>
            <p>
              That is why educational tax reading is still valuable even if you
              use software. You do not need to become a tax professional. You
              just need enough understanding to recognize when a result feels
              inconsistent with the facts you actually lived through during the
              year.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 6: Treating deductions and credits as the same thing",
        content: (
          <>
            <p>
              Deductions usually reduce the amount of income subject to tax.
              Credits usually reduce the tax itself after the base calculation.
              Blurring those together leads to exaggerated assumptions about how
              valuable a write-off or eligibility item really is.
            </p>
            <p>
              This is a great place to slow down and use rough math. Even a
              quick comparison with the{" "}
              {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              can help you understand why a deduction and a credit of the same
              raw number do not always have the same impact.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 7: Not adjusting when life changes",
        content: (
          <>
            <p>
              People often file with habits left over from a very different tax
              year. Marriage, divorce, a child, homeownership, a new job,
              freelance income, retirement distributions, or investment sales
              can all change the tax picture enough that last year&apos;s instincts
              no longer fit.
            </p>
            <p>
              This is one reason a central cluster like the{" "}
              {taxLink("/tax", "Drutilio tax hub")} helps. The point is not to
              memorize every rule. It is to know which category of question you
              are actually dealing with before you guess.
            </p>
          </>
        ),
      },
      {
        title: "Why a calm review process matters",
        content: (
          <>
            <p>
              Tax stress often comes from speed and ambiguity more than from the
              complexity itself. A calmer process helps: gather documents, know
              which income number is being discussed, review bracket logic, and
              compare the final result to withholding and expectations without
              assuming a refund or balance due tells the whole story.
            </p>
            <p>
              That process is educational, not advisory. If the facts are
              complicated, getting qualified help is often the smartest move.
              But even then, better understanding makes you a better client and
              reviewer of the return.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "What is one of the most common filing mistakes?", answer: "Using the wrong income concept for the question at hand is one of the most common and most disruptive mistakes." },
      { question: "Does a large refund mean my taxes were handled well?", answer: "Not necessarily. A large refund often says more about withholding or prepayments than about overall tax efficiency." },
      { question: "Can tax software still produce a bad result?", answer: "Yes. Software depends on the information entered and the choices made while answering prompts." },
      { question: "Why do side gigs cause so many tax problems?", answer: "They are easier to overlook, may involve additional forms, and can raise self-employment tax issues that W-2 employees do not face in the same way." },
      { question: "Is this page tax advice?", answer: "No. It is an educational guide to common filing mistakes and not individualized tax advice." },
    ],
  },
  "what-is-adjusted-gross-income": {
    title: "What Is Adjusted Gross Income?",
    description:
      "Learn what adjusted gross income means, how AGI fits into federal tax calculations, and why it matters for deductions, credits, and planning.",
    path: "/what-is-adjusted-gross-income",
    intro: (
      <>
        <p>
          Adjusted gross income, usually shortened to AGI, is one of the most
          important middle numbers in a federal tax return. It is not the first
          number most people think about, and it is not usually the final tax
          base either. But it often acts like a hinge. Many other tax rules,
          limits, and phaseouts care about AGI or a closely related measure.
        </p>
        <p>
          This page explains AGI for a US audience in educational terms only. It
          does not provide tax advice. The goal is to help you understand why
          AGI appears so often in software and tax conversations, how it differs
          from gross income and taxable income, and why it can shape the rest of
          the return even when it is not the number finally run through the
          bracket system.
        </p>
      </>
    ),
    sections: [
      {
        title: "AGI is a middle checkpoint, not just a buzzword",
        content: (
          <>
            <p>
              AGI sits after certain adjustments but before later parts of the
              tax calculation. That means it often reflects a more refined
              number than gross income, while still coming earlier than taxable
              income. This middle position is exactly why it matters so much.
            </p>
            <p>
              The tax system uses intermediate checkpoints because not every
              rule should wait until the very end. Some eligibility rules need a
              consistent reference point before itemized or standard deductions
              are fully resolved. AGI often serves that role.
            </p>
          </>
        ),
      },
      {
        title: "Why AGI shows up everywhere",
        content: (
          <>
            <p>
              If you have ever used tax software and wondered why AGI appears
              repeatedly, it is because many rules key off it. Credits,
              deductions, income-based limitations, and verification steps may
              all lean on AGI. In some contexts, even when a taxpayer does not
              fully understand AGI, the system still expects that number to be
              available and meaningful.
            </p>
            <p>
              That does not mean AGI tells the whole story. It means AGI is one
              of the numbers that helps the story move from the raw income stage
              to the more refined return stage.
            </p>
          </>
        ),
      },
      {
        title: "How AGI differs from gross income",
        content: (
          <>
            <p>
              Gross income is broader and earlier. AGI comes after certain
              allowed adjustments have already changed that broader income base.
              So while gross income tells you what came in, AGI often tells you
              what the return looks like after the system has already recognized
              some important modifications.
            </p>
            <p>
              If you need the longer comparison, read{" "}
              {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}.
              That page shows where AGI fits into the larger chain from income
              earned to tax due.
            </p>
          </>
        ),
      },
      {
        title: "How AGI differs from taxable income",
        content: (
          <>
            <p>
              AGI is usually not the same as taxable income. Taxable income
              comes later, after more of the deduction structure has been
              applied. That is why AGI can shape eligibility while taxable
              income shapes bracket exposure more directly.
            </p>
            <p>
              This is an easy place to get lost if you are looking at one page
              of a return or one software screen at a time. Once you know AGI is
              a middle step, not the beginning and not the end, the sequence
              becomes much easier to follow.
            </p>
          </>
        ),
      },
      {
        title: "Why AGI matters for planning",
        content: (
          <>
            <p>
              AGI matters for planning because many tax-sensitive decisions
              revolve around threshold effects. Sometimes a person is not asking,
              “What is my exact tax bill?” but rather, “Am I near an income
              level where a certain rule changes?” AGI can be central in those
              conversations.
            </p>
            <p>
              That kind of planning often benefits from rough math and careful
              pacing. Drutilio&apos;s {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              can help with scenario checks, and the{" "}
              {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              can help if tax withholding changes are part of a broader cash
              reserve plan.
            </p>
          </>
        ),
      },
      {
        title: "How AGI confusion leads to filing mistakes",
        content: (
          <>
            <p>
              When people confuse AGI with gross income or taxable income, they
              may misunderstand eligibility, phaseouts, or why software is
              asking for a specific prior-year figure. This can create filing
              anxiety even before any true mistake has been made.
            </p>
            <p>
              That is one reason the cluster matters. If AGI still feels vague,
              the next pages to read are{" "}
              {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}{" "}
              and {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}.
            </p>
          </>
        ),
      },
      {
        title: "Why this remains educational only",
        content: (
          <>
            <p>
              AGI can look like a precise single number, but the path to it may
              depend on facts far beyond a generic article. Business deductions,
              special account activity, capital transactions, retirement flows,
              and family status all affect the bigger context. That is why this
              page explains the concept without trying to turn it into personal
              tax advice.
            </p>
            <p>
              Still, if you understand AGI, you understand one of the most
              useful middle checkpoints in the federal return. That alone can
              make the rest of a return feel much less opaque.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Continue with {taxLink("/taxable-income-vs-gross-income", "taxable income vs. gross income")}{" "}
              for the broader income map, {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}{" "}
              for the rate side of the story, and{" "}
              {taxLink("/tax-refund-calculator-guide", "tax refund calculator guide")}{" "}
              if your main question is really about year-end results rather than
              income definitions.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is AGI the same as gross income?", answer: "No. AGI is usually a later figure after certain adjustments have already changed gross income." },
      { question: "Is AGI the same as taxable income?", answer: "No. Taxable income usually comes later in the process after additional deductions have been applied." },
      { question: "Why does AGI show up so often in tax software?", answer: "Because many tax rules, limits, and verification steps use AGI or a related measure as a reference point." },
      { question: "Can AGI affect planning decisions?", answer: "Yes. It often matters in eligibility and threshold-based questions, which is why people watch it closely." },
      { question: "Is this page tax advice?", answer: "No. It is an educational explanation of AGI and not individualized tax advice." },
    ],
  },
  "tax-refund-calculator-guide": {
    title: "Tax Refund Calculator Guide",
    description:
      "Learn how a tax refund calculator works, what refunds really mean, and how withholding, credits, and estimated payments affect year-end results.",
    path: "/tax-refund-calculator-guide",
    intro: (
      <>
        <p>
          A tax refund calculator sounds simple: enter a few numbers and find
          out whether you are getting money back. In practice, refund estimates
          sit on top of a deeper set of moving parts. Withholding, estimated
          payments, credits, deductions, and actual tax liability all have to
          line up before the year-end result makes sense.
        </p>
        <p>
          This guide explains tax refund calculators in educational terms for a
          US audience. It does not provide tax advice. The point is to help you
          understand what a refund estimate can and cannot tell you, why refunds
          are not the same thing as tax savings, and how to think more clearly
          about withholding during the year.
        </p>
      </>
    ),
    sections: [
      {
        title: "What a tax refund actually measures",
        content: (
          <>
            <p>
              A refund is usually the difference between how much tax was paid
              in during the year and how much tax was actually owed once the
              return was calculated. If too much was withheld or prepaid, you
              may receive a refund. If too little was withheld or prepaid, you
              may owe a balance.
            </p>
            <p>
              That means a refund is not automatically a reward and a balance
              due is not automatically a failure. Those outcomes tell you about
              the relationship between payments made and final tax liability,
              not just about the underlying tax burden by itself.
            </p>
          </>
        ),
      },
      {
        title: "Why refund size can be emotionally misleading",
        content: (
          <>
            <p>
              Refunds feel concrete, so people often judge their tax year mainly
              by that result. But a bigger refund can simply mean more money was
              withheld from paychecks than necessary. Some households prefer that
              certainty. Others would rather keep more cash flow during the year.
              Neither preference is inherently wrong, but they are different
              planning choices.
            </p>
            <p>
              This is where educational framing helps. Instead of asking, “How
              do I get the biggest refund?” a more useful question is often,
              “How close do I want withholding to be to the likely final tax
              bill?”
            </p>
          </>
        ),
      },
      {
        title: "What a refund calculator needs to estimate",
        content: (
          <>
            <p>
              A refund estimate usually depends on projected income, filing
              status, deductions or the standard deduction, credits, and the
              amount already withheld or paid in. Without both sides of the
              equation, the refund number is mostly guesswork. You need some
              picture of liability and some picture of prepayment.
            </p>
            <p>
              That is why a refund estimate is often only as good as the tax
              foundation beneath it. If you are still unclear on income stages
              or bracket mechanics, review{" "}
              {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}{" "}
              and {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}.
            </p>
          </>
        ),
      },
      {
        title: "Withholding is the quiet driver",
        content: (
          <>
            <p>
              For employees, withholding is often the quiet driver behind refund
              surprises. A small change in W-4 choices, bonus timing, second-job
              income, or household earnings can change how close withholding is
              to the year-end result. People sometimes think the refund changed
              because “taxes went up,” when the more immediate reason is really a
              change in withholding accuracy.
            </p>
            <p>
              If you are trying to decide what to do with additional take-home
              pay after a withholding adjustment, the{" "}
              {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              can be a practical next tool.
            </p>
          </>
        ),
      },
      {
        title: "Credits and deductions still matter",
        content: (
          <>
            <p>
              Refund estimates are not just about wages and withholding.
              Deductions change the income base. Credits can reduce the tax
              itself. That means two people with similar paychecks can still
              have very different refund outcomes because the return behind the
              paycheck is different.
            </p>
            <p>
              This is one reason refund calculators can feel unreliable when the
              user is missing context. The calculator may not be wrong; the
              inputs may simply be too rough to capture the full return.
            </p>
          </>
        ),
      },
      {
        title: "How to use refund estimates responsibly",
        content: (
          <>
            <p>
              The responsible way to use a refund estimate is as a planning aid,
              not as a promise. A good estimate can help you decide whether to
              revisit withholding, plan a cash reserve, or prepare for a balance
              due. It can also help you compare rough scenarios, such as the
              effect of side income or a change in filing status.
            </p>
            <p>
              Because those scenarios often involve proportions and cash-flow
              tradeoffs, Drutilio&apos;s {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              and {taxLink("/calculators/compound-interest-calculator", "compound interest calculator")}{" "}
              can be helpful side tools when you are thinking beyond the refund
              itself.
            </p>
          </>
        ),
      },
      {
        title: "Where refund confusion turns into filing mistakes",
        content: (
          <>
            <p>
              People can make filing mistakes when they treat a refund estimate
              like a settled fact, ignore late-arriving forms, or forget that
              contractor income and investment activity may shift both liability
              and payment needs. That is why refund questions are closely linked
              to broader filing discipline.
            </p>
            <p>
              If you want the troubleshooting angle, read{" "}
              {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}.
              If side-gig income is part of the story, move to{" "}
              {taxLink("/self-employment-tax-guide", "the self-employment tax guide")}.
            </p>
          </>
        ),
      },
      {
        title: "Why this page is educational, not advisory",
        content: (
          <>
            <p>
              Refund estimates can change meaningfully with facts that generic
              articles cannot see: multiple jobs, credits, business income,
              itemizing, investment sales, and state tax interactions. That is
              why this page focuses on the logic of refunds rather than
              pretending to calculate your personal outcome.
            </p>
            <p>
              Still, once you understand that refunds measure overpayment or
              underpayment relative to final liability, year-end results become
              much easier to interpret.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does a large refund mean I paid less tax?", answer: "Not necessarily. It often means more tax was withheld or prepaid during the year than the final liability required." },
      { question: "Does owing money mean my return was wrong?", answer: "No. Owing at filing time can simply mean withholding or estimated payments did not fully cover final tax liability." },
      { question: "What does a refund calculator need to work well?", answer: "It needs a decent estimate of income, deductions, credits, and the amount already withheld or prepaid." },
      { question: "Can refund estimates help with planning?", answer: "Yes. They can help you think about withholding, reserves, and likely year-end cash flow, as long as you treat them as estimates." },
      { question: "Is this page tax advice?", answer: "No. It is an educational guide to how refund estimates work and not personalized tax advice." },
    ],
  },
  "self-employment-tax-guide": {
    title: "Self-Employment Tax Guide",
    description:
      "Learn how self-employment tax works, how it differs from federal income tax, and what freelancers and independent contractors should watch for.",
    path: "/self-employment-tax-guide",
    intro: (
      <>
        <p>
          Self-employment tax is one of the most surprising parts of tax life
          for freelancers, consultants, gig workers, and small business owners.
          Many people focus on federal income tax first because it is the most
          familiar concept, only to discover later that self-employment tax adds
          another meaningful layer to the overall picture.
        </p>
        <p>
          This guide explains the topic in educational terms for US readers. It
          does not provide tax advice. The goal is to show how self-employment
          tax differs from ordinary federal income tax, why it catches new
          freelancers off guard, and how to think about reserves, cash flow, and
          filing discipline more clearly.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why self-employment tax feels different",
        content: (
          <>
            <p>
              Employees often see payroll taxes partly handled through the
              employer relationship, even if they do not think about the details
              every pay period. Self-employed workers, by contrast, may
              experience more of the burden directly. That shift can make the
              tax bill feel larger or more sudden than expected.
            </p>
            <p>
              The key point is that self-employment tax is not simply another
              name for federal income tax. They are related because both affect
              the overall year-end picture, but they do different jobs in the
              tax system. That is why side-gig income can change a return more
              than a new freelancer initially expects.
            </p>
          </>
        ),
      },
      {
        title: "How it differs from federal income tax",
        content: (
          <>
            <p>
              Federal income tax generally depends on taxable income, filing
              status, deductions, and credits. Self-employment tax is a separate
              layer tied to self-employment earnings. Understanding that split
              matters because someone can roughly understand brackets and still
              be underprepared for the extra self-employment piece.
            </p>
            <p>
              That is why this page pairs naturally with{" "}
              {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}{" "}
              and {taxLink("/federal-income-tax-brackets", "federal income tax brackets")}.
              You need both conversations to understand the full picture.
            </p>
          </>
        ),
      },
      {
        title: "Why freelancers often underreserve",
        content: (
          <>
            <p>
              New freelancers often think in terms of client payments received
              rather than taxes eventually owed. Because the cash arrives before
              withholding happens automatically, it is easy to feel richer than
              the after-tax reality supports. That is a cash-flow problem before
              it becomes a filing problem.
            </p>
            <p>
              Reserve planning matters here. Even a simple planning exercise
              using Drutilio&apos;s {taxLink("/calculators/percentage-calculator", "percentage calculator")}{" "}
              or {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              can help freelancers set aside money more deliberately throughout
              the year.
            </p>
          </>
        ),
      },
      {
        title: "Recordkeeping matters more than many people expect",
        content: (
          <>
            <p>
              Self-employment tax discussions quickly run into recordkeeping.
              Income may arrive from multiple clients or platforms. Expenses may
              be mixed across cards or accounts. Some taxpayers start with clean
              invoices but weak category tracking. Others have decent expense
              tracking but no system for estimated payment reminders.
            </p>
            <p>
              The result is that tax stress grows as the year continues. A
              cleaner system reduces that pressure. It also makes it much easier
              to review whether the final tax result makes sense when filing
              season arrives.
            </p>
          </>
        ),
      },
      {
        title: "Common mistakes with self-employment income",
        content: (
          <>
            <p>
              One common mistake is assuming side income is too small to matter.
              Another is focusing only on income tax and forgetting the
              self-employment layer. A third is failing to reserve enough cash
              because business revenue feels like fully available personal money.
            </p>
            <p>
              These errors connect directly to{" "}
              {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}{" "}
              and {taxLink("/tax-refund-calculator-guide", "the tax refund calculator guide")},
              because year-end surprises often begin much earlier in the year
              when income is received without a plan.
            </p>
          </>
        ),
      },
      {
        title: "How self-employment changes planning conversations",
        content: (
          <>
            <p>
              Once self-employment enters the picture, many planning questions
              become less about “What is my bracket?” and more about “How much of
              each payment should I reserve, what rhythm of estimated payments
              makes sense, and how do I keep business and personal cash flow
              from blurring together?”
            </p>
            <p>
              That is why even non-tax tools can matter. The{" "}
              {taxLink("/calculators/compound-interest-calculator", "compound interest calculator")}{" "}
              can help when you are thinking about longer-term reserves or tax
              savings habits, while the{" "}
              {taxLink("/calculators/savings-goal-calculator", "savings goal calculator")}{" "}
              can help build a target reserve structure.
            </p>
          </>
        ),
      },
      {
        title: "Why this page stays educational",
        content: (
          <>
            <p>
              Self-employment tax can intersect with business structure,
              deductions, recordkeeping choices, state rules, and retirement
              planning in ways a general guide cannot fully personalize. That is
              why this page is educational only and not tax advice.
            </p>
            <p>
              Its purpose is to help you see the shape of the issue clearly
              enough that you know what to track, what to reserve for, and when
              specialized review may be worth the effort.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Continue with {taxLink("/how-to-calculate-federal-income-tax", "how to calculate federal income tax")}{" "}
              for the broader return context, {taxLink("/common-tax-filing-mistakes", "common tax filing mistakes")}{" "}
              for the troubleshooting angle, and the{" "}
              {taxLink("/tax", "tax hub")} for the rest of Drutilio&apos;s US tax
              learning cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is self-employment tax the same as federal income tax?", answer: "No. It is a separate layer that often applies to self-employment earnings in addition to ordinary federal income tax considerations." },
      { question: "Why do freelancers get surprised by taxes so often?", answer: "Because income may arrive without automatic withholding, which makes underreserving easier if the person is not planning ahead." },
      { question: "Can side-gig income matter even if it feels small?", answer: "Yes. Even modest self-employment income can change filing complexity and tax obligations." },
      { question: "What is one good practical habit for self-employed workers?", answer: "Keeping clear records and setting aside money consistently throughout the year are two of the most useful habits." },
      { question: "Is this page tax advice?", answer: "No. It is an educational guide to self-employment tax concepts and not individualized tax advice." },
    ],
  },
};

export function getTaxArticle(slug: string) {
  return taxArticleContent[slug];
}

export function getTaxArticleMetadata(slug: string) {
  const content = getTaxArticle(slug);

  if (!content) {
    throw new Error(`Missing tax article content for slug: ${slug}`);
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
