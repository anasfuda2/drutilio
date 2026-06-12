import { HealthArticlePage } from "@/components/content/HealthArticlePage";
import {
  getHealthArticle,
  getHealthArticleMetadata,
} from "@/lib/health-content";

export const metadata = getHealthArticleMetadata("how-many-calories-should-i-eat");

export default function HowManyCaloriesShouldIEatPage() {
  return (
    <HealthArticlePage
      content={getHealthArticle("how-many-calories-should-i-eat")}
    />
  );
}
