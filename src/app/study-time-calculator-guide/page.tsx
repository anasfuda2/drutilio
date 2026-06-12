import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata(
  "study-time-calculator-guide",
);

export default function StudyTimeCalculatorGuidePage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("study-time-calculator-guide")}
    />
  );
}
