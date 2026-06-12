import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "taxable-income-vs-gross-income",
);

export default function TaxableIncomeVsGrossIncomePage() {
  return (
    <TaxArticlePage
      content={getTaxArticle("taxable-income-vs-gross-income")!}
    />
  );
}
