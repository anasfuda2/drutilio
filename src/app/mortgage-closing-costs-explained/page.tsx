import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "mortgage-closing-costs-explained",
);

export default function MortgageClosingCostsExplainedPage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("mortgage-closing-costs-explained")!}
    />
  );
}
