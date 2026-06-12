import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("pdf-compression-guide");

export default function PdfCompressionGuidePage() {
  return (
    <PdfArticlePage content={getPdfArticle("pdf-compression-guide")} />
  );
}
