import type { Metadata } from "next";
import { RetirementArticlePage } from "@/components/content/RetirementArticlePage";
import {
  getRetirementArticle,
  getRetirementArticleMetadata,
} from "@/lib/retirement-content";

export const metadata: Metadata = getRetirementArticleMetadata(
  "safe-withdrawal-rate-explained",
);

export default function SafeWithdrawalRateExplainedPage() {
  return (
    <RetirementArticlePage
      content={getRetirementArticle("safe-withdrawal-rate-explained")!}
    />
  );
}
