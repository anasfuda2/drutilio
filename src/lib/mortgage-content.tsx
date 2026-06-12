import Link from "next/link";
import type { MortgageArticleContent } from "@/components/content/MortgageArticlePage";

function mortgageLink(href: string, label: string) {
  return (
    <Link href={href} className="font-semibold text-emerald-300 hover:text-emerald-200">
      {label}
    </Link>
  );
}

type MortgageArticleMap = Record<string, MortgageArticleContent>;

export const mortgageArticleContent: MortgageArticleMap = {
  "how-much-house-can-i-afford": {
    title: "How Much House Can I Afford?",
    description:
      "Learn how to think about home affordability using income, debts, down payment, monthly payment limits, and cash-to-close planning.",
    path: "/how-much-house-can-i-afford",
    intro: (
      <>
        <p>
          “How much house can I afford?” is one of the first questions most
          home buyers ask, but it is also one of the easiest questions to answer
          too loosely. A lender may approve one number. A spreadsheet may
          support another. Your own comfort level may point to something else
          entirely. The most useful affordability framework brings those ideas
          together without pretending they are identical.
        </p>
        <p>
          This guide is educational only and does not provide mortgage, lending,
          tax, legal, or financial advice. Its purpose is to help you think more
          clearly about affordability so the mortgage calculators on Drutilio
          feel more grounded and less abstract.
        </p>
      </>
    ),
    sections: [
      {
        title: "Affordability is more than lender approval",
        content: (
          <>
            <p>
              A lender&apos;s approval range is one piece of the puzzle, not the
              entire puzzle. Approval standards are designed around credit,
              income, debt, and underwriting rules. Personal affordability also
              includes how you want to live after closing: savings flexibility,
              maintenance comfort, travel goals, childcare, emergency reserves,
              and how much monthly payment stress you are willing to tolerate.
            </p>
            <p>
              That is why the right question is often not “What is the maximum I
              can borrow?” but “What payment range supports the rest of my
              financial life without turning the house into a burden?”
            </p>
          </>
        ),
      },
      {
        title: "Income, debt, and monthly payment all matter",
        content: (
          <>
            <p>
              Affordability usually begins with income, but it does not end
              there. Existing monthly debts, interest rates, loan term, and
              down payment all affect what a home purchase looks like in real
              cash flow. A household with strong income but heavy debt payments
              may have less room than a lower-debt household with similar
              earnings.
            </p>
            <p>
              Drutilio&apos;s{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )}{" "}
              is built for this part of the conversation, while the{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              helps once you want to compare payment scenarios more directly.
            </p>
          </>
        ),
      },
      {
        title: "Cash to close changes the story",
        content: (
          <>
            <p>
              Buyers often focus on monthly payment and down payment while
              underestimating the upfront cash needed to actually complete the
              purchase. Closing costs, prepaid taxes and insurance, moving
              costs, reserve targets, and immediate repairs can all change the
              true affordability picture.
            </p>
            <p>
              This is why the{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}{" "}
              belongs alongside affordability planning. A house can look
              affordable on a monthly basis and still feel unrealistic once the
              upfront cash requirement is clear.
            </p>
          </>
        ),
      },
      {
        title: "Rate sensitivity matters",
        content: (
          <>
            <p>
              Mortgage affordability can shift materially when rates move.
              Because mortgage repayment usually stretches over decades, even a
              modest rate change can change the payment enough to affect the
              workable home-price range. This is one reason buyers should test
              multiple scenarios rather than anchoring to a single rate quote.
            </p>
            <p>
              Articles like{" "}
              {mortgageLink(
                "/fixed-vs-adjustable-rate-mortgage",
                "fixed vs. adjustable rate mortgage",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/mortgage-points-explained",
                "mortgage points explained",
              )}{" "}
              help explain why rate structure affects affordability, not just
              long-term interest cost.
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
              {mortgageLink("/mortgage-preapproval-guide", "mortgage preapproval guide")}{" "}
              if you are moving closer to lender conversations. Read{" "}
              {mortgageLink("/down-payment-guide", "down payment guide")}{" "}
              and{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              if upfront cash is the real planning pressure. And use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} to navigate the full
              cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      {
        question: "Is affordability the same as approval?",
        answer:
          "No. Approval is a lender decision, while personal affordability also includes your comfort level, goals, and broader cash-flow picture.",
      },
      {
        question: "Why do monthly debts matter so much?",
        answer:
          "Existing debts affect how much room is left for housing costs within simplified debt-to-income frameworks and real monthly budgeting.",
      },
      {
        question: "Should I focus only on the mortgage payment?",
        answer:
          "No. Upfront cash, taxes, insurance, HOA dues, and maintenance also affect whether a home purchase feels workable.",
      },
      {
        question: "Which Drutilio calculator should I use first?",
        answer:
          "The mortgage affordability calculator is the best first step, followed by the mortgage calculator and closing costs calculator.",
      },
      {
        question: "Is this mortgage advice?",
        answer:
          "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice.",
      },
    ],
  },
  "fixed-vs-adjustable-rate-mortgage": {
    title: "Fixed vs. Adjustable Rate Mortgage",
    description:
      "Compare fixed-rate and adjustable-rate mortgages in an educational guide covering payment stability, reset risk, and planning tradeoffs.",
    path: "/fixed-vs-adjustable-rate-mortgage",
    intro: (
      <>
        <p>
          Fixed-rate and adjustable-rate mortgages solve the same basic problem
          in different ways. One emphasizes payment stability. The other may
          emphasize lower initial pricing or a different tradeoff around future
          rate risk. Choosing between them is not only a math problem. It is a
          planning and risk-tolerance problem.
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, financial, tax, or legal advice. It is meant to help you
          understand the structure of the choice before you rely on rate
          comparisons alone.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why fixed-rate loans feel simpler",
        content: (
          <>
            <p>
              A fixed-rate mortgage gives many buyers a strong sense of
              stability because the principal-and-interest payment structure is
              not designed to change with rate resets. That simplicity is part
              of the appeal. Planning feels easier when one major housing cost
              is more predictable over time.
            </p>
            <p>
              That does not make fixed-rate loans automatically better. It means
              their value often comes from predictability rather than from one
              universal cost advantage in every market environment.
            </p>
          </>
        ),
      },
      {
        title: "Why adjustable-rate loans can attract buyers",
        content: (
          <>
            <p>
              Adjustable-rate mortgages may appeal to borrowers who expect a
              shorter holding period, want to compare lower initial pricing, or
              believe the structure better fits their likely timeline. The early
              payment picture can look more attractive, which is why some buyers
              are tempted to focus on the introductory phase alone.
            </p>
            <p>
              The challenge is that future resets can change the cost picture.
              That is why adjustable-rate comparisons need more than a snapshot.
              They require scenario thinking about timeline, flexibility, and
              future refinancing conditions.
            </p>
          </>
        ),
      },
      {
        title: "Payment stability versus future uncertainty",
        content: (
          <>
            <p>
              At the heart of the comparison is a tradeoff between current price
              and future uncertainty. Fixed-rate borrowers often accept today&apos;s
              terms in exchange for longer-term clarity. Adjustable-rate
              borrowers may accept future uncertainty in exchange for a different
              initial structure.
            </p>
            <p>
              This is why the right comparison depends heavily on how long you
              expect to keep the property or loan, how much payment variability
              your budget could absorb, and whether refinance options would
              realistically be available later.
            </p>
          </>
        ),
      },
      {
        title: "Use calculators to test payment scenarios",
        content: (
          <>
            <p>
              The{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              is the strongest first tool for comparing how different rates and
              terms affect monthly payment. The{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )}{" "}
              helps if you want to know how those payment shifts affect home
              price range.
            </p>
            <p>
              If you suspect refinancing might be part of the long-term plan,
              then the{" "}
              {mortgageLink(
                "/calculators/mortgage-refinance-calculator",
                "mortgage refinance calculator",
              )}{" "}
              and the guide on{" "}
              {mortgageLink(
                "/refinance-vs-new-mortgage",
                "refinance vs. new mortgage",
              )}{" "}
              are useful next steps.
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
              {mortgageLink(
                "/mortgage-points-explained",
                "mortgage points explained",
              )}{" "}
              if pricing structure is the next question. Read{" "}
              {mortgageLink(
                "/common-home-buying-mistakes",
                "common home buying mistakes",
              )}{" "}
              if you want a wider planning lens. And use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} for the full cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is a fixed-rate mortgage always better?", answer: "No. It often offers more payment stability, but the better fit depends on timeline, risk tolerance, and market conditions." },
      { question: "Why do some buyers consider adjustable-rate loans?", answer: "They may be attracted by the initial pricing or by the belief that the loan may not be kept long enough for future reset risk to dominate." },
      { question: "Can I compare these options with Drutilio calculators?", answer: "Yes. The mortgage calculator and mortgage affordability calculator are useful for testing simplified payment and range differences." },
      { question: "Does this page tell me which loan to choose?", answer: "No. It is an educational comparison and not mortgage, lending, or financial advice." },
      { question: "Should refinance assumptions matter here?", answer: "Yes. If you expect a refinance may be part of the strategy, that possibility changes how the loan comparison may feel." },
    ],
  },
  "mortgage-points-explained": {
    title: "Mortgage Points Explained",
    description:
      "Learn what mortgage points are, how they affect pricing, and why break-even thinking matters when comparing rate options.",
    path: "/mortgage-points-explained",
    intro: (
      <>
        <p>
          Mortgage points are one of the most confusing pricing features in home
          lending because they convert upfront cash into a different interest
          rate structure. Some borrowers like the idea immediately. Others hear
          “buy down the rate” and assume it is always wise. In reality, points
          are a tradeoff, not a universal bargain.
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, tax, legal, or financial advice. It explains how to think
          about points, rate tradeoffs, and break-even logic in a practical way.
        </p>
      </>
    ),
    sections: [
      {
        title: "Points exchange cash now for rate structure later",
        content: (
          <>
            <p>
              Points matter because they change the timing of cost. Instead of
              paying entirely through the ongoing rate, a borrower pays more
              upfront in exchange for a different rate structure. That means the
              conversation is really about timing, not free savings.
            </p>
            <p>
              Once you see points that way, the question becomes clearer: will
              the upfront cost be worth it given how long you expect to keep the
              loan and how much payment savings the lower rate creates?
            </p>
          </>
        ),
      },
      {
        title: "Break-even thinking matters",
        content: (
          <>
            <p>
              The most practical way to think about points is through break-even
              logic. If paying more upfront lowers the monthly payment, how long
              would it take for those savings to recover the added cost? If you
              are unlikely to keep the loan that long, the tradeoff may feel
              weaker.
            </p>
            <p>
              This is why points often belong alongside refinance-style
              thinking, even on an initial purchase. Timing matters as much as
              the raw monthly number.
            </p>
          </>
        ),
      },
      {
        title: "Upfront cash still has to come from somewhere",
        content: (
          <>
            <p>
              Points do not exist in isolation from the rest of closing cash.
              A borrower deciding whether to pay points is also deciding what
              else that cash could do: reduce reserves pressure, increase down
              payment, help with moving costs, or simply stay liquid.
            </p>
            <p>
              That is why the{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}{" "}
              and the guide on{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              fit naturally into this discussion.
            </p>
          </>
        ),
      },
      {
        title: "The monthly payment is only one side of the decision",
        content: (
          <>
            <p>
              A lower rate can improve the monthly number, but a lower payment
              alone does not make the decision automatically wise. The borrower
              still needs to ask about timeline, rate sensitivity, opportunity
              cost, and whether the cash commitment fits the broader plan.
            </p>
            <p>
              The{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              helps with payment comparison, while the{" "}
              {mortgageLink(
                "/calculators/mortgage-refinance-calculator",
                "mortgage refinance calculator",
              )}{" "}
              helps with cost-recovery thinking.
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
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/refinance-vs-new-mortgage",
                "refinance vs. new mortgage",
              )}{" "}
              if cost structure is the bigger issue. Use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} for the full content
              cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Are mortgage points always worth paying?", answer: "No. Points are a tradeoff between upfront cash and rate structure, and the value depends heavily on time horizon and cash priorities." },
      { question: "Why does break-even matter so much?", answer: "Because it helps show how long payment savings may take to recover the added upfront cost." },
      { question: "Do points affect cash to close?", answer: "Yes. Paying points increases the upfront cash burden, which is why closing-cost planning matters." },
      { question: "Can calculators help with this topic?", answer: "Yes. The mortgage calculator, refinance calculator, and closing costs calculator all help with different parts of the tradeoff." },
      { question: "Is this mortgage advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
  "mortgage-preapproval-guide": {
    title: "Mortgage Preapproval Guide",
    description:
      "Understand what mortgage preapproval is, how it differs from browsing estimates, and how to prepare for the process in an educational way.",
    path: "/mortgage-preapproval-guide",
    intro: (
      <>
        <p>
          Mortgage preapproval is often the point where home shopping starts to
          feel real. Until then, many numbers are rough planning estimates. A
          preapproval process asks for documents, evaluates credit and debt more
          formally, and gives buyers a stronger sense of how a lender may view
          the application. That is useful, but it is still not the same as a
          final loan commitment.
        </p>
        <p>
          This guide is educational only and does not provide lending,
          mortgage, financial, tax, or legal advice. Its goal is to help you
          understand what preapproval is doing so that the process feels less
          mysterious and less stressful.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why preapproval matters",
        content: (
          <>
            <p>
              Preapproval matters because it takes the home search out of pure
              theory. It gives a buyer a more concrete sense of how income,
              debts, credit, and cash may be viewed by a lender. That can help
              narrow the price range, shape offer strategy, and prevent wasted
              time on homes that are likely outside the workable range.
            </p>
            <p>
              But it still does not replace broader budgeting. A lender&apos;s
              willingness and your own comfort level can differ, which is why
              the preapproval guide belongs next to{" "}
              {mortgageLink(
                "/how-much-house-can-i-afford",
                "how much house can I afford",
              )}.
            </p>
          </>
        ),
      },
      {
        title: "Documents and readiness shape the experience",
        content: (
          <>
            <p>
              Preapproval usually feels easier when the buyer already has their
              financial picture organized. Income documents, asset records, debt
              awareness, and a realistic sense of upfront cash all help. The
              more complete the picture, the more useful the lender&apos;s feedback
              can be.
            </p>
            <p>
              This is another reason the calculators matter. The{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )}{" "}
              and {mortgageLink("/calculators/closing-costs-calculator", "closing costs calculator")}{" "}
              help buyers organize assumptions before stepping into a more
              document-driven conversation.
            </p>
          </>
        ),
      },
      {
        title: "Preapproval is not a comfort-level decision for you",
        content: (
          <>
            <p>
              A preapproval can tell you something about lender standards, but
              it does not decide what monthly payment you should actually be
              happy carrying. Your emergency savings, childcare, job stability,
              future goals, and maintenance tolerance still matter. Buyers who
              skip that second layer can end up approved for a home that feels
              too heavy once real life resumes after closing.
            </p>
            <p>
              This is where the mortgage hub is useful. It keeps the approval
              conversation connected to the broader affordability and cash-flow
              conversation instead of treating them as the same thing.
            </p>
          </>
        ),
      },
      {
        title: "Preapproval does not eliminate closing costs and cash questions",
        content: (
          <>
            <p>
              Buyers sometimes feel relieved once preapproval is secured and
              assume the hard part is done. But closing costs, reserves, moving
              costs, and repair realities can still change what the purchase
              feels like. That is why preapproval should be followed by deeper
              cash-to-close planning, not replaced by it.
            </p>
            <p>
              The guide on{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              is a strong next read here, along with the{" "}
              {mortgageLink("/down-payment-guide", "down payment guide")}.
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
              {mortgageLink(
                "/common-home-buying-mistakes",
                "common home buying mistakes",
              )}{" "}
              for the broader process lens. Use the{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")},{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )},
              {" "}and {mortgageLink("/calculators/closing-costs-calculator", "closing costs calculator")}{" "}
              as your core planning tools.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is preapproval the same as final loan approval?", answer: "No. Preapproval is an earlier stage and does not guarantee final approval or final loan terms." },
      { question: "Why should I still budget after getting preapproved?", answer: "Because lender approval and personal comfort are not identical, and closing cash plus ongoing costs still matter." },
      { question: "Can calculators help before preapproval?", answer: "Yes. They help organize affordability, payment, and closing-cost assumptions before the process becomes document-heavy." },
      { question: "Does preapproval solve the down payment question?", answer: "No. Down payment and cash-to-close planning remain important even after preapproval." },
      { question: "Is this lending advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
  "common-home-buying-mistakes": {
    title: "Common Home Buying Mistakes",
    description:
      "Learn the most common home buying mistakes involving affordability, preapproval, down payment planning, closing costs, and payment assumptions.",
    path: "/common-home-buying-mistakes",
    intro: (
      <>
        <p>
          Home buying mistakes are often not wild one-time disasters. More
          often, they are small planning gaps that compound: shopping by lender
          maximum instead of by true comfort, underestimating closing cash,
          ignoring payment sensitivity, or assuming the house budget ends at the
          mortgage principal-and-interest number.
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, financial, tax, or legal advice. It is designed to help you
          spot the common errors that make home buying more stressful or more
          expensive than it needs to be.
        </p>
      </>
    ),
    sections: [
      {
        title: "Mistake 1: Treating approval as affordability",
        content: (
          <>
            <p>
              One of the most common mistakes is treating a lender&apos;s approval
              range as the same thing as your personal affordability range.
              Approval standards answer one question. Personal comfort answers
              another. They may overlap, but they do not have to be identical.
            </p>
            <p>
              The fix is to test the payment against the rest of your life, not
              just against a lender ratio. That is exactly where{" "}
              {mortgageLink(
                "/how-much-house-can-i-afford",
                "how much house can I afford",
              )}{" "}
              and the{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )}{" "}
              help.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 2: Ignoring cash to close",
        content: (
          <>
            <p>
              Buyers often plan hard for down payment and too lightly for
              everything else. Closing costs, prepaids, moving costs, immediate
              repairs, furnishings, and emergency reserves can all crowd the
              picture. A purchase that works on paper can feel much tighter once
              the non-down-payment cash is counted honestly.
            </p>
            <p>
              The{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              are the best next resources for this problem.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 3: Anchoring too hard to one rate quote",
        content: (
          <>
            <p>
              Mortgage planning can change quickly when rates move. Buyers who
              anchor to one quote too early may not appreciate how much payment
              sensitivity affects their workable range. Even a modest rate shift
              can change monthly payment enough to force a budget rethink.
            </p>
            <p>
              The{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              is the simplest way to keep testing that sensitivity as the
              market or your assumptions move.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 4: Underestimating how account structure affects choices",
        content: (
          <>
            <p>
              Buyers sometimes focus only on purchase price and forget that
              loan structure, term, adjustable features, and points also affect
              the experience. A home decision is not just a price decision. It
              is also a financing-structure decision.
            </p>
            <p>
              That is why pages like{" "}
              {mortgageLink(
                "/fixed-vs-adjustable-rate-mortgage",
                "fixed vs. adjustable rate mortgage",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/mortgage-points-explained",
                "mortgage points explained",
              )}{" "}
              belong in the cluster.
            </p>
          </>
        ),
      },
      {
        title: "Mistake 5: Thinking the home search ends after the purchase loan decision",
        content: (
          <>
            <p>
              Some buyers also underestimate how often refinance thinking may
              matter later. Even if the initial purchase is the immediate focus,
              future refinance choices, break-even logic, and closing costs can
              matter when the market changes.
            </p>
            <p>
              That is why the{" "}
              {mortgageLink(
                "/calculators/mortgage-refinance-calculator",
                "mortgage refinance calculator",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/refinance-vs-new-mortgage",
                "refinance vs. new mortgage",
              )}{" "}
              are still relevant even for buyers who have not closed yet.
            </p>
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} as the central map.
              Then move through affordability, preapproval, down payment, and
              closing-cost planning in sequence. That order tends to reduce the
              most common surprises.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "What is one of the most common home buying mistakes?", answer: "Treating lender approval as the same thing as personal affordability is one of the most common and costly planning mistakes." },
      { question: "Why are closing costs such a common problem?", answer: "Because buyers often focus on down payment and monthly payment while underestimating the rest of the upfront cash requirement." },
      { question: "Do rate changes really matter that much?", answer: "Yes. Even a modest mortgage rate change can noticeably affect payment and affordability." },
      { question: "Can Drutilio calculators help avoid these mistakes?", answer: "Yes. The mortgage calculator, affordability calculator, refinance calculator, and closing costs calculator all help with different parts of the process." },
      { question: "Is this home buying advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
  "down-payment-guide": {
    title: "Down Payment Guide",
    description:
      "Learn how to think about down payment size, tradeoffs, cash reserves, and monthly payment impact in this educational home buying guide.",
    path: "/down-payment-guide",
    intro: (
      <>
        <p>
          Down payment planning is one of the most emotionally charged parts of
          buying a home because it sits at the intersection of patience, cash
          reserves, monthly payment goals, and purchase timing. Some buyers feel
          pressure to delay until they hit a very large target. Others feel
          pressure to buy earlier before rates or prices move again. The right
          framework is rarely as simple as “bigger is always better.”
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, financial, tax, or legal advice. It is designed to help you
          think about down payment tradeoffs more clearly so your planning is
          more intentional and less reactive.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why down payment size matters",
        content: (
          <>
            <p>
              Down payment size matters because it affects both the financed
              loan amount and the upfront cash burden. A larger down payment can
              reduce borrowing, improve monthly payment, and sometimes change
              how the loan is structured. But it also requires more liquidity up
              front, which can strain reserves.
            </p>
            <p>
              That is why the planning question is not just “How big can I make
              it?” but “How big can I make it while still leaving enough room
              for closing costs, reserves, and the rest of life?”
            </p>
          </>
        ),
      },
      {
        title: "Bigger down payment versus stronger reserves",
        content: (
          <>
            <p>
              A larger down payment often looks attractive because it lowers the
              amount borrowed. But cash used for down payment is cash that is
              no longer available for emergency reserves, repairs, moving costs,
              or flexibility after closing. There is a tradeoff here, and
              responsible planning takes both sides seriously.
            </p>
            <p>
              That is why many buyers benefit from modeling the payment side
              with the{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              and the upfront side with the{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}
              .
            </p>
          </>
        ),
      },
      {
        title: "Affordability is not only a down payment question",
        content: (
          <>
            <p>
              Down payment matters, but it does not act alone. Income, debt
              payments, rates, taxes, insurance, and closing costs still shape
              the bigger picture. A buyer who focuses only on hitting a down
              payment milestone can miss whether the monthly payment still feels
              workable.
            </p>
            <p>
              This is one reason the{" "}
              {mortgageLink(
                "/calculators/mortgage-affordability-calculator",
                "mortgage affordability calculator",
              )}{" "}
              and the article on{" "}
              {mortgageLink(
                "/how-much-house-can-i-afford",
                "how much house can I afford",
              )}{" "}
              belong beside this guide.
            </p>
          </>
        ),
      },
      {
        title: "Closing costs can complicate the target",
        content: (
          <>
            <p>
              Buyers sometimes hit the down payment number they wanted and then
              realize they were still underprepared for the rest of the closing
              cash. That can lead to rushed compromises or a painful loss of
              reserves. Down payment planning works best when it is connected to
              the full cash-to-close picture from the beginning.
            </p>
            <p>
              Read{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              next if that is the main question causing uncertainty.
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
              {mortgageLink(
                "/mortgage-preapproval-guide",
                "mortgage preapproval guide",
              )}{" "}
              if you are moving toward lender conversations. Use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} for the full planning
              cluster and the affordability, mortgage, and closing-costs
              calculators as your main numeric tools.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is a bigger down payment always better?", answer: "Not automatically. A larger down payment can improve borrowing terms but may also reduce reserves and flexibility." },
      { question: "Why should I think about reserves separately?", answer: "Because closing, repairs, and life after the move can still create cash pressure even after the purchase is complete." },
      { question: "Does down payment size affect monthly payment?", answer: "Yes. Borrowing less usually lowers the monthly principal-and-interest payment." },
      { question: "Should I use calculators alongside this guide?", answer: "Yes. The mortgage calculator, affordability calculator, and closing costs calculator help make the tradeoffs more visible." },
      { question: "Is this mortgage advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
  "mortgage-closing-costs-explained": {
    title: "Mortgage Closing Costs Explained",
    description:
      "Understand mortgage closing costs, prepaids, fees, and cash-to-close planning in this educational guide for home buyers.",
    path: "/mortgage-closing-costs-explained",
    intro: (
      <>
        <p>
          Closing costs are one of the most common sources of home buying
          surprise because they sit just outside the simplest version of the
          purchase story. Buyers may plan hard for the monthly payment and down
          payment but still feel blindsided by the rest of the upfront cash.
          That is why closing-cost literacy matters long before the final loan
          estimate arrives.
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, financial, tax, or legal advice. It is designed to make the
          language and logic of closing costs easier to follow so you can budget
          more responsibly.
        </p>
      </>
    ),
    sections: [
      {
        title: "Closing costs are not one single fee",
        content: (
          <>
            <p>
              A closing-cost conversation often sounds like one percentage or
              one lump sum, but the real picture usually includes multiple
              categories. Lender fees, title charges, escrow funding, prepaid
              taxes and insurance, and other upfront items can all affect the
              total. That is why buyers who ask only “What percent are closing
              costs?” sometimes come away with a weaker understanding than they
              expected.
            </p>
            <p>
              The point of a guide like this is not to memorize every fee name.
              It is to understand that the total is made of parts, and that
              those parts may shift by lender, location, and transaction
              structure.
            </p>
          </>
        ),
      },
      {
        title: "Cash to close is broader than down payment",
        content: (
          <>
            <p>
              A buyer&apos;s real upfront commitment is usually bigger than the
              down payment alone. Closing costs help explain why. Even if a home
              feels affordable from a monthly-payment perspective, the purchase
              may still strain liquidity if the full cash requirement is not
              planned well.
            </p>
            <p>
              That is why the{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}{" "}
              is such a useful budgeting tool. It helps turn a vague concern
              into a more structured cash estimate.
            </p>
          </>
        ),
      },
      {
        title: "Different transactions can produce different cost structures",
        content: (
          <>
            <p>
              Closing costs can vary meaningfully by lender, geography, escrow
              setup, rate structure, and how the deal is negotiated. Seller
              concessions, credits, and timing can all change the practical
              outcome. That is why general estimates are useful for planning but
              should not be confused with formal lender documents.
            </p>
            <p>
              The formal documents matter because they move you from planning
              assumptions to transaction-specific numbers. Good planning makes
              those documents less surprising. It does not replace them.
            </p>
          </>
        ),
      },
      {
        title: "How this connects to refinancing too",
        content: (
          <>
            <p>
              Buyers often associate closing costs only with a purchase, but
              refinance decisions can also involve meaningful upfront costs. That
              means closing-cost thinking is relevant even after the first loan
              is in place. If you expect refinancing may matter later, the{" "}
              {mortgageLink(
                "/calculators/mortgage-refinance-calculator",
                "mortgage refinance calculator",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/refinance-vs-new-mortgage",
                "refinance vs. new mortgage",
              )}{" "}
              belong on the reading list.
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
              {mortgageLink("/down-payment-guide", "down payment guide")}{" "}
              if you are balancing liquidity and borrowing. Read{" "}
              {mortgageLink(
                "/common-home-buying-mistakes",
                "common home buying mistakes",
              )}{" "}
              for the wider planning lens, and use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} for the full cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Are closing costs the same as the down payment?", answer: "No. Closing costs are a separate part of the upfront cash required in a home purchase." },
      { question: "Can closing costs vary by lender and location?", answer: "Yes. Lender pricing, title charges, escrow setup, and regional practices can all change the total." },
      { question: "Why should I estimate cash to close early?", answer: "Because a home can look affordable monthly while still straining liquidity if the upfront cash picture is underestimated." },
      { question: "Can closing costs matter in refinancing too?", answer: "Yes. Refinance decisions often involve upfront costs that can affect break-even timing and overall value." },
      { question: "Is this mortgage advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
  "refinance-vs-new-mortgage": {
    title: "Refinance vs. New Mortgage",
    description:
      "Learn how to think about refinance decisions versus new-purchase mortgage planning in this educational mortgage guide.",
    path: "/refinance-vs-new-mortgage",
    intro: (
      <>
        <p>
          Refinance and new-purchase mortgage decisions live in related but not
          identical planning worlds. A purchase loan is usually centered on
          affordability, cash to close, and home selection. A refinance
          conversation is often centered on rate structure, term changes,
          closing costs, and break-even logic. The math overlaps, but the
          decision frame is different.
        </p>
        <p>
          This guide is educational only and does not provide mortgage,
          lending, financial, tax, or legal advice. It is meant to help you
          compare the planning logic behind refinance decisions and new mortgage
          decisions more clearly.
        </p>
      </>
    ),
    sections: [
      {
        title: "New mortgages focus on entry and affordability",
        content: (
          <>
            <p>
              A new mortgage usually begins with questions about purchase price,
              down payment, closing costs, and whether the monthly payment fits
              the buyer&apos;s broader financial life. The buyer is moving from no
              loan on that property to a new housing obligation, which means
              affordability and upfront cash planning dominate the process.
            </p>
            <p>
              That is why pages like{" "}
              {mortgageLink(
                "/how-much-house-can-i-afford",
                "how much house can I afford",
              )}{" "}
              and the{" "}
              {mortgageLink(
                "/mortgage-preapproval-guide",
                "mortgage preapproval guide",
              )}{" "}
              matter so much on the purchase side.
            </p>
          </>
        ),
      },
      {
        title: "Refinance decisions focus on replacement and recovery",
        content: (
          <>
            <p>
              A refinance decision usually starts from a different place. You
              already have a loan. The question is whether changing that loan
              improves your position enough to justify the costs and effort. That
              means break-even timing, monthly savings, term reset, and closing
              costs become central.
            </p>
            <p>
              This is where the{" "}
              {mortgageLink(
                "/calculators/mortgage-refinance-calculator",
                "mortgage refinance calculator",
              )}{" "}
              is especially useful because it gives a quick sense of whether the
              conversation looks promising before deeper lender work begins.
            </p>
          </>
        ),
      },
      {
        title: "Lower payment does not settle the refinance question",
        content: (
          <>
            <p>
              A refinance can lower payment and still be more complicated than
              it first appears. Extending term, financing costs, and changing
              timeline expectations can all alter the value of the transaction.
              A borrower who plans to move soon may evaluate the same savings
              differently from a borrower planning to keep the home much longer.
            </p>
            <p>
              That is why break-even logic, points, and cost recovery matter
              here more than they might in the first glance at a purchase loan.
            </p>
          </>
        ),
      },
      {
        title: "The same calculators still support both worlds",
        content: (
          <>
            <p>
              Even though the planning logic differs, the calculators still
              overlap. The{" "}
              {mortgageLink("/calculators/mortgage-calculator", "mortgage calculator")}{" "}
              remains useful for payment comparison. The{" "}
              {mortgageLink(
                "/calculators/closing-costs-calculator",
                "closing costs calculator",
              )}{" "}
              remains useful because closing cash matters in both purchase and
              refinance contexts. The difference is how the numbers are being
              used in the final decision.
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
              {mortgageLink(
                "/mortgage-points-explained",
                "mortgage points explained",
              )}{" "}
              and{" "}
              {mortgageLink(
                "/mortgage-closing-costs-explained",
                "mortgage closing costs explained",
              )}{" "}
              for the cost side of the story. Use the{" "}
              {mortgageLink("/mortgage", "mortgage hub")} for the full content
              cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Is a refinance decision the same as a purchase mortgage decision?", answer: "No. A purchase mortgage is usually centered on affordability and cash to close, while a refinance often centers on savings, costs, and break-even timing." },
      { question: "Does a lower payment automatically mean refinancing is worth it?", answer: "No. Break-even timing, term reset, financed costs, and how long you expect to keep the loan all still matter." },
      { question: "Can the same calculators help with both topics?", answer: "Yes. The mortgage calculator, refinance calculator, and closing costs calculator each support different parts of the comparison." },
      { question: "Should I think about points and closing costs here too?", answer: "Yes. Those cost-structure issues are especially relevant in refinance decisions." },
      { question: "Is this mortgage advice?", answer: "No. This page is educational only and not mortgage, lending, financial, tax, or legal advice." },
    ],
  },
};

export function getMortgageArticle(slug: string) {
  return mortgageArticleContent[slug];
}

export function getMortgageArticleMetadata(slug: string) {
  const content = getMortgageArticle(slug);

  if (!content) {
    throw new Error(`Missing mortgage article content for slug: ${slug}`);
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
