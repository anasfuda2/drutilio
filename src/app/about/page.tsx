import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    `Learn about ${siteConfig.name}, a growing tools platform that currently focuses on educational financial calculators.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${siteConfig.name}`,
    description:
      `Background and purpose for ${siteConfig.name}, a smart online tools platform.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About"
      title={`About ${siteConfig.name}`}
      intro={`${siteConfig.name} is a growing platform for smart online tools and calculators. It currently starts with practical US-focused financial tools designed to help people compare scenarios and understand everyday money decisions more clearly.`}
    >
      <ContentSection title="What this site is for">
        <p>
          The platform currently focuses on calculators for borrowing, saving,
          retirement, and other everyday money planning questions. The goal is
          to make basic estimates faster to understand and easier to compare
          while leaving room for the platform to grow into additional practical
          tool categories over time.
        </p>
        <p>
          Every calculator on this site is intended for educational and
          informational use only. Results are estimates, not guarantees or
          personalized recommendations.
        </p>
      </ContentSection>

      <ContentSection title="Important limitations">
        <p>
          {siteConfig.name} does not provide financial, tax, legal, or
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
