import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("merge-pdf-guide");

export default function MergePdfGuidePage() {
  return <PdfArticlePage content={getPdfArticle("merge-pdf-guide")} />;
}
