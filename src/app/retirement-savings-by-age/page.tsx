import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "retirement-savings-by-age",
);

export default function RetirementSavingsByAgePage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("retirement-savings-by-age")!}
    />
  );
}
