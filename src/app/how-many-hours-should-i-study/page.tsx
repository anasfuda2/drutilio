import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata(
  "how-many-hours-should-i-study",
);

export default function HowManyHoursShouldIStudyPage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("how-many-hours-should-i-study")}
    />
  );
}
