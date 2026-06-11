import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    `Read the terms of use for ${siteConfig.name}, including educational-use and no-advice terms.`,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `Terms of Use | ${siteConfig.name}`,
    description:
      `Terms governing use of the ${siteConfig.name} website.`,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="By using this website, you agree to these general terms of use. This page is intended as a practical baseline for a financial utility website and should be reviewed before publication."
    >
      <ContentSection title="Permitted use">
        <p>
          {siteConfig.name} is provided for lawful personal or internal
          business use as an educational calculator website. You may use the
          tools to generate estimates and compare scenarios.
        </p>
        <p>
          You agree not to misuse the site, interfere with its operation, or
          rely on its results as a substitute for professional advice.
        </p>
      </ContentSection>

      <ContentSection title="No professional advice">
        <p>
          All content and calculator outputs are educational estimates only.
          {siteConfig.name} does not provide financial, tax, legal, or
          investment advice, and no professional relationship is created by your
          use of the site.
        </p>
      </ContentSection>

      <ContentSection title="No warranty">
        <p>
          The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranties of any kind. We do not guarantee accuracy,
          completeness, availability, or fitness for any particular purpose.
        </p>
        <p>
          Actual loan offers, tax outcomes, legal obligations, investment
          results, and savings performance may differ materially from any
          estimate shown on the site.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
