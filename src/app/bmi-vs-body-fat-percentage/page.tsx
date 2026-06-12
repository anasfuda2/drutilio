import { HealthArticlePage } from "@/components/content/HealthArticlePage";
import { getHealthArticle, getHealthArticleMetadata } from "@/lib/health-content";

export const metadata = getHealthArticleMetadata("bmi-vs-body-fat-percentage");

export default function BmiVsBodyFatPercentagePage() {
  return (
    <HealthArticlePage
      content={getHealthArticle("bmi-vs-body-fat-percentage")}
    />
  );
}
