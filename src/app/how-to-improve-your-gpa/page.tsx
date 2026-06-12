import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata("how-to-improve-your-gpa");

export default function HowToImproveYourGpaPage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("how-to-improve-your-gpa")}
    />
  );
}
