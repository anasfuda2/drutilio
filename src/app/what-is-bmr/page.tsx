import { HealthArticlePage } from "@/components/content/HealthArticlePage";
import { getHealthArticle, getHealthArticleMetadata } from "@/lib/health-content";

export const metadata = getHealthArticleMetadata("what-is-bmr");

export default function WhatIsBmrPage() {
  return <HealthArticlePage content={getHealthArticle("what-is-bmr")} />;
}
