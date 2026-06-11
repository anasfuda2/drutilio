import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    `Review the privacy policy for ${siteConfig.name}, including general information about data handling and website use.`,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      `Privacy information for users of ${siteConfig.name}.`,
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This page provides a simple publishing-ready privacy policy baseline for a public financial utility website. It should be reviewed and updated to match the site’s actual analytics, forms, hosting, and third-party services before launch."
    >
      <ContentSection title="Information you provide">
        <p>
          {siteConfig.name} is designed as a tools website and does
          not require account creation to use the tools currently shown.
          Information entered into calculators is intended to stay within your
          browsing session and is used to generate educational estimates.
        </p>
        <p>
          If a contact method is provided, any information voluntarily submitted
          by email may be used to respond to your message and maintain website
          operations.
        </p>
      </ContentSection>

      <ContentSection title="Usage data and technical information">
        <p>
          Like most websites, the site may collect basic technical information
          such as browser type, device information, referring pages, IP address,
          and general usage data through hosting infrastructure, logs, or future
          analytics tools.
        </p>
        <p>
          Any such data should be used to operate, secure, maintain, and improve
          the website, not to provide personalized financial, tax, legal, or
          investment advice.
        </p>
      </ContentSection>

      <ContentSection title="Educational-use reminder">
        <p>
          The calculators and content on this website are educational estimates
          only. They are not financial, tax, legal, or investment advice, and
          the site does not create an advisor-client, attorney-client, or other
          professional relationship.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
