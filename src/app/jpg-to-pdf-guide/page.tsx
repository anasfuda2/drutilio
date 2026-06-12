import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("jpg-to-pdf-guide");

export default function JpgToPdfGuidePage() {
  return <PdfArticlePage content={getPdfArticle("jpg-to-pdf-guide")} />;
}
