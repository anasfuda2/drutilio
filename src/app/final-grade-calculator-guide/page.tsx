import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata(
  "final-grade-calculator-guide",
);

export default function FinalGradeCalculatorGuidePage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("final-grade-calculator-guide")}
    />
  );
}
