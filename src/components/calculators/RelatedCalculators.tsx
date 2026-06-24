import Link from "next/link";
import {
  getRelatedCalculators,
  getToolDirectoryCategory,
} from "@/lib/calculators";

export function RelatedCalculators({ currentSlug }: { currentSlug: string }) {
  const relatedCalculators = getRelatedCalculators(currentSlug, 6);

  return (
    <section className="mt-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
        Related tools
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Keep moving while you have task momentum. These nearby tools are
          chosen to stay close to this workflow first, then widen into the next
          most relevant Dr.Utilio utilities.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {relatedCalculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/[0.07]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              {getToolDirectoryCategory(calculator)}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {calculator.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {calculator.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-emerald-300">
              Open {calculator.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
