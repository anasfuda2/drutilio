import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "common-retirement-planning-mistakes",
);

export default function CommonRetirementPlanningMistakesPage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("common-retirement-planning-mistakes")!}
    />
  );
}
