import { HealthArticlePage } from "@/components/content/HealthArticlePage";
import { getHealthArticle, getHealthArticleMetadata } from "@/lib/health-content";

export const metadata = getHealthArticleMetadata("common-weight-loss-mistakes");

export default function CommonWeightLossMistakesPage() {
  return (
    <HealthArticlePage
      content={getHealthArticle("common-weight-loss-mistakes")}
    />
  );
}
