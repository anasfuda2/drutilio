import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("image-to-pdf-guide");

export default function ImageToPdfGuidePage() {
  return <PdfArticlePage content={getPdfArticle("image-to-pdf-guide")} />;
}
