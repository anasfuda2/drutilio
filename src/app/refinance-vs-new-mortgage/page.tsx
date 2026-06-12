import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "refinance-vs-new-mortgage",
);

export default function RefinanceVsNewMortgagePage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("refinance-vs-new-mortgage")!}
    />
  );
}
