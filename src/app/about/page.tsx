import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Finance Calculators Hub, a US-focused educational utility website for financial estimate calculators.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Finance Calculators Hub",
    description:
      "Background and purpose for this US-focused financial calculator website.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About"
      title="About Finance Calculators Hub"
      intro="Finance Calculators Hub is a public utility website built to help people think through common US personal finance decisions with practical, easy-to-read estimate tools."
    >
      <ContentSection title="What this site is for">
        <p>
          The site focuses on calculators for borrowing, saving, retirement, and
          other everyday money planning questions. Our goal is to make basic
          financial estimates faster to understand and easier to compare.
        </p>
        <p>
          Every calculator on this site is intended for educational and
          informational use only. Results are estimates, not guarantees or
          personalized recommendations.
        </p>
      </ContentSection>

      <ContentSection title="Important limitations">
        <p>
          Finance Calculators Hub does not provide financial, tax, legal, or
          investment advice. The tools do not account for every factor that may
          apply to your situation, and actual outcomes may differ from the
          results shown.
        </p>
        <p>
          Before making significant financial decisions, consider reviewing your
          situation with a qualified professional such as a licensed financial
          advisor, tax professional, attorney, lender, or accountant.
        </p>
      </ContentSection>

      <ContentSection title="Where to go next">
        <p>
          You can start with the main <Link href="/calculators" className="font-semibold text-emerald-300 hover:text-emerald-200">calculator library</Link> or read the site{" "}
          <Link href="/disclaimer" className="font-semibold text-emerald-300 hover:text-emerald-200">disclaimer</Link>,{" "}
          <Link href="/privacy-policy" className="font-semibold text-emerald-300 hover:text-emerald-200">privacy policy</Link>, and{" "}
          <Link href="/terms" className="font-semibold text-emerald-300 hover:text-emerald-200">terms</Link>.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
