import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("pdf-to-word-guide");

export default function PdfToWordGuidePage() {
  return <PdfArticlePage content={getPdfArticle("pdf-to-word-guide")} />;
}
