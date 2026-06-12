import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "retirement-income-planning",
);

export default function RetirementIncomePlanningPage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("retirement-income-planning")!}
    />
  );
}
