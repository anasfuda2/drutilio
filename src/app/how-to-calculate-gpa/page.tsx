import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata("how-to-calculate-gpa");

export default function HowToCalculateGpaPage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("how-to-calculate-gpa")}
    />
  );
}
