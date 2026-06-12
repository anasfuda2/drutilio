import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("png-to-pdf-guide");

export default function PngToPdfGuidePage() {
  return <PdfArticlePage content={getPdfArticle("png-to-pdf-guide")} />;
}
