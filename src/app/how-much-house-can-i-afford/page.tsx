import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "how-much-house-can-i-afford",
);

export default function HowMuchHouseCanIAffordPage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("how-much-house-can-i-afford")!}
    />
  );
}
