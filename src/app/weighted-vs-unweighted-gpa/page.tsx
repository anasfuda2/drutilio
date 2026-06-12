import { EducationArticlePage } from "@/components/content/EducationArticlePage";
import {
  getEducationArticle,
  getEducationArticleMetadata,
} from "@/lib/education-content";

export const metadata = getEducationArticleMetadata(
  "weighted-vs-unweighted-gpa",
);

export default function WeightedVsUnweightedGpaPage() {
  return (
    <EducationArticlePage
      content={getEducationArticle("weighted-vs-unweighted-gpa")}
    />
  );
}
