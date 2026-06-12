import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/ads/AdPlaceholder";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { FAQItem, FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
} from "@/lib/structured-data";

export type HealthArticleSection = {
  title: string;
  content: ReactNode;
};

export type HealthArticleContent = {
  title: string;
  description: string;
  path: string;
  eyebrow?: string;
  intro: ReactNode;
  sections: HealthArticleSection[];
  faqItems: FAQItem[];
};

export function HealthArticlePage({
  content,
}: {
  content: HealthArticleContent;
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Health", href: "/health" },
    { label: content.title },
  ];

  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildFaqStructuredData(content.faqItems)} />
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {content.eyebrow ?? "Health and Wellness"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {content.title}
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            {content.intro}
          </div>
        </div>

        <div className="mt-10">
          <AdPlaceholder placement="article-inline" />
        </div>

        <div className="mt-10 grid gap-6">
          {content.sections.map((section, index) => (
            <div key={section.title} className="grid gap-6">
              <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
                  {section.content}
                </div>
              </section>
              {index === 1 ? (
                <AdPlaceholder placement="article-inline" />
              ) : null}
            </div>
          ))}

          <FAQSection items={content.faqItems} />
        </div>
      </Container>
    </section>
  );
}
