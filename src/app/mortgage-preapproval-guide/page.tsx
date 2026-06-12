import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "mortgage-preapproval-guide",
);

export default function MortgagePreapprovalGuidePage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("mortgage-preapproval-guide")!}
    />
  );
}
