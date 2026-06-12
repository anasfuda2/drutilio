import { PdfArticlePage } from "@/components/content/PdfArticlePage";
import { getPdfArticle, getPdfArticleMetadata } from "@/lib/pdf-content";

export const metadata = getPdfArticleMetadata("split-pdf-guide");

export default function SplitPdfGuidePage() {
  return <PdfArticlePage content={getPdfArticle("split-pdf-guide")} />;
}
