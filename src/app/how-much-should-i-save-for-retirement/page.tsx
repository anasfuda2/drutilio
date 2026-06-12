import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "how-much-should-i-save-for-retirement",
);

export default function HowMuchShouldISaveForRetirementPage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("how-much-should-i-save-for-retirement")!}
    />
  );
}
