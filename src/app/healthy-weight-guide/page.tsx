import { HealthArticlePage } from "@/components/content/HealthArticlePage";
import { getHealthArticle, getHealthArticleMetadata } from "@/lib/health-content";

export const metadata = getHealthArticleMetadata("healthy-weight-guide");

export default function HealthyWeightGuidePage() {
  return (
    <HealthArticlePage content={getHealthArticle("healthy-weight-guide")} />
  );
}
