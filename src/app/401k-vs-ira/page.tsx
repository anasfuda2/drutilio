import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata("401k-vs-ira");

export default function FourOhOneKVsIraPage() {
  return (
    <RetirementArticlePage content={getRetirementArticle("401k-vs-ira")!} />
  );
}
