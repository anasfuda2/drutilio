import type { Metadata } from "next";
import { TaxArticlePage } from "@/components/content/TaxArticlePage";
import { getTaxArticle, getTaxArticleMetadata } from "@/lib/tax-content";

export const metadata: Metadata = getTaxArticleMetadata(
  "tax-refund-calculator-guide",
);

export default function TaxRefundCalculatorGuidePage() {
  return (
    <TaxArticlePage content={getTaxArticle("tax-refund-calculator-guide")!} />
  );
}
