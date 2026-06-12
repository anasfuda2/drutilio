import { ReactNode } from "react";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { CalculatorPageShell } from "@/components/calculators/CalculatorPageShell";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getCalculatorBySlug,
  getToolDirectoryCategory,
} from "@/lib/calculators";
import { getToolPageContent } from "@/lib/tool-page-content";
import {
  buildBreadcrumbStructuredData,
  buildCalculatorStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

export function ToolPage({
  slug,
  calculator,
}: {
  slug: string;
  calculator: ReactNode;
}) {
  const content = getToolPageContent(slug);

  if (!content) {
    throw new Error(`Missing tool page content for slug: ${slug}`);
  }

  const registeredTool = getCalculatorBySlug(slug);
  const toolCategory = registeredTool
    ? getToolDirectoryCategory(registeredTool)
    : "Tools";

  return (
    <>
      <AnalyticsTracker
        type="tool-page"
        slug={slug}
        name={content.title}
        category={toolCategory}
        path={content.path}
      />
      <CalculatorPageShell
        slug={slug}
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        calculator={calculator}
        sections={content.sections}
        faq={<FAQSection items={content.faqItems} />}
        structuredData={
          <>
            <JsonLd data={buildFaqStructuredData(content.faqItems)} />
            <JsonLd
              data={buildBreadcrumbStructuredData([
                { label: "Home", href: "/" },
                { label: "Calculators", href: "/calculators" },
                { label: content.title },
              ])}
            />
            <JsonLd
              data={buildCalculatorStructuredData({
                name: content.title,
                description: content.description,
                path: content.path,
                applicationCategory: content.applicationCategory,
              })}
            />
          </>
        }
      />
    </>
  );
}
