import Link from "next/link";
import { getRelatedCalculators } from "@/lib/calculators";

export function RelatedCalculators({ currentSlug }: { currentSlug: string }) {
  const relatedCalculators = getRelatedCalculators(currentSlug);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Related calculators
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {relatedCalculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/calculators/${calculator.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/[0.07]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              {calculator.category}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {calculator.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {calculator.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
