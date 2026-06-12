import type { Metadata } from "next";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getToolDirectoryCategory,
  newestCalculators,
} from "@/lib/calculators";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

const description =
  "Browse the newest Dr.Utilio tools in registry-driven order, with recent additions shown first across PDF, finance, health, education, and converters.";

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "New Tools" },
];

export const metadata: Metadata = {
  title: "New Tools",
  description,
  alternates: {
    canonical: "/new-tools",
  },
  openGraph: {
    title: "New Tools",
    description,
    url: "/new-tools",
  },
};

export default function NewToolsPage() {
  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={buildBreadcrumbStructuredData(breadcrumbs)} />

      <Container>
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Platform Discovery
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            New tools on Dr.Utilio
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
            <p>
              This page follows the central tool registry order and surfaces the
              newest additions first, making it a quick way to spot what has
              been added most recently.
            </p>
            <p>
              The ordering is registry-driven rather than editorial, so this
              view stays aligned with the platform&apos;s real tool inventory.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Recently added from the registry
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Showing {newestCalculators.length} tools in newest-first order from
            the central Dr.Utilio registry.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newestCalculators.map((tool) => (
            <CalculatorCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              category={getToolDirectoryCategory(tool)}
              href={`/calculators/${tool.slug}`}
              status={tool.status}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
