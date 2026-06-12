import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "how-to-calculate-federal-income-tax",
);

export default function HowToCalculateFederalIncomeTaxPage() {
  return (
    <TaxArticlePage
      content={getTaxArticle("how-to-calculate-federal-income-tax")!}
    />
  );
}
