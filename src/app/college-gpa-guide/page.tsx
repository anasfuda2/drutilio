import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata("college-gpa-guide");

export default function CollegeGpaGuidePage() {
  return (
    <EducationArticlePage content={getEducationArticle("college-gpa-guide")} />
  );
}
