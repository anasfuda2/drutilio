import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata(
  "common-home-buying-mistakes",
);

export default function CommonHomeBuyingMistakesPage() {
  return (
    <MortgageArticlePage
      content={getMortgageArticle("common-home-buying-mistakes")!}
    />
  );
}
