import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "roth-ira-vs-traditional-ira",
);

export default function RothIraVsTraditionalIraPage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("roth-ira-vs-traditional-ira")!}
    />
  );
}
