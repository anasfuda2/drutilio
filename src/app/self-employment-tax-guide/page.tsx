import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "self-employment-tax-guide",
);

export default function SelfEmploymentTaxGuidePage() {
  return (
    <TaxArticlePage content={getTaxArticle("self-employment-tax-guide")!} />
  );
}
