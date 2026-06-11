import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { ContentSection } from "@/components/content/ContentSection";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the site disclaimer for Finance Calculators Hub, including important limits on calculator accuracy and no-advice statements.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Finance Calculators Hub",
    description:
      "Important disclaimer information for the calculator estimates and site content.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <ContentPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="Please review this disclaimer before relying on any calculator result or written content on this website."
    >
      <ContentSection title="Educational estimates only">
        <p>
          All calculators, examples, and written content on Finance Calculators
          Hub are provided for educational and informational purposes only.
          Results are estimates based on the assumptions shown in each tool.
        </p>
        <p>
          These estimates may omit important factors such as taxes, fees,
          insurance, inflation, account restrictions, lender-specific terms, or
          changes in market conditions.
        </p>
      </ContentSection>

      <ContentSection title="No advice">
        <p>
          Finance Calculators Hub does not provide financial, tax, legal, or
          investment advice. Nothing on this site should be treated as a
          recommendation to borrow, lend, invest, buy, sell, refinance, file,
          or take legal action.
        </p>
      </ContentSection>

      <ContentSection title="Use professional judgment">
        <p>
          Before making significant financial or legal decisions, consult a
          qualified professional who can consider your specific facts and goals.
          Site content should support your research process, not replace it.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
