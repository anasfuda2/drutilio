import Link from "next/link";
import {
  getCalculatorBySlug,
  getToolDirectoryCategory,
} from "@/lib/calculators";

type PopularToolsStripProps = {
  title: string;
  slugs: string[];
  href?: string;
  hrefLabel?: string;
};

export function PopularToolsStrip({
  title,
  slugs,
  href,
  hrefLabel,
}: PopularToolsStripProps) {
  const tools = slugs
    .map((slug) => getCalculatorBySlug(slug))
    .filter((tool) => tool !== undefined);

  if (tools.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Jump straight into strong task-first tools without browsing the full
            directory first.
          </p>
        </div>
        {href && hrefLabel ? (
          <Link
            href={href}
            className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
          >
            {hrefLabel}
          </Link>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/calculators/${tool.slug}`}
            className="group rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm transition hover:border-emerald-400/40 hover:bg-slate-900/70"
          >
            <span className="font-semibold text-white transition group-hover:text-emerald-200">
              {tool.title}
            </span>
            <span className="ml-2 text-xs uppercase tracking-[0.14em] text-slate-400">
              {getToolDirectoryCategory(tool)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
