import type { Metadata } from "next";
import { MortgageArticlePage } from "@/components/content/MortgageArticlePage";
import {
  getMortgageArticle,
  getMortgageArticleMetadata,
} from "@/lib/mortgage-content";

export const metadata: Metadata = getMortgageArticleMetadata("down-payment-guide");

export default function DownPaymentGuidePage() {
  return (
    <MortgageArticlePage content={getMortgageArticle("down-payment-guide")!} />
  );
}
