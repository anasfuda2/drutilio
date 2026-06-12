import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "federal-income-tax-brackets",
);

export default function FederalIncomeTaxBracketsPage() {
  return (
    <TaxArticlePage content={getTaxArticle("federal-income-tax-brackets")!} />
  );
}
