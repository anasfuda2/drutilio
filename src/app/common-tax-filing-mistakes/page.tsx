import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "common-tax-filing-mistakes",
);

export default function CommonTaxFilingMistakesPage() {
  return (
    <TaxArticlePage content={getTaxArticle("common-tax-filing-mistakes")!} />
  );
}
