import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata("common-study-mistakes");

export default function CommonStudyMistakesPage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("common-study-mistakes")}
    />
  );
}
