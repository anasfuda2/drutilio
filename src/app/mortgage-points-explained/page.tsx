import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "mortgage-points-explained",
);

export default function MortgagePointsExplainedPage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("mortgage-points-explained")!}
    />
  );
}
