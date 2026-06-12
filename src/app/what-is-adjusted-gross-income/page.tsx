import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "what-is-adjusted-gross-income",
);

export default function WhatIsAdjustedGrossIncomePage() {
  return (
    <TaxArticlePage content={getTaxArticle("what-is-adjusted-gross-income")!} />
  );
}
