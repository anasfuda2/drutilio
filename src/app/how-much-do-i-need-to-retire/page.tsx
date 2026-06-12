import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "how-much-do-i-need-to-retire",
);

export default function HowMuchDoINeedToRetirePage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("how-much-do-i-need-to-retire")!}
    />
  );
}
