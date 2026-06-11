import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Finance Calculators Hub for general website questions, corrections, or support inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Finance Calculators Hub",
    description:
      "Contact information for general questions about the website and calculator content.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Contact"
      intro="For general questions about the website, calculator behavior, or content corrections, you can use the placeholder contact address below."
    >
      <ContentSection title="General contact">
        <p>
          Email:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-semibold text-emerald-300 hover:text-emerald-200"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
        <p>
          This contact address is a placeholder for publishing preparation. It
          should be replaced with a real support or editorial email before the
          site goes live.
        </p>
      </ContentSection>

      <ContentSection title="What we can help with">
        <p>
          Appropriate messages include website feedback, broken-page reports,
          calculator issues, and requests to review factual or wording errors.
        </p>
        <p>
          Finance Calculators Hub does not provide individualized financial,
          tax, legal, or investment advice through email or through the site.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
