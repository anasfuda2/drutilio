import Link from "next/link";

type CalculatorCardProps = {
  title: string;
  description: string;
  category: string;
  href: string;
  status: "Available now" | "Featured" | "Popular";
};

export function CalculatorCard({
  title,
  description,
  category,
  href,
  status,
}: CalculatorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.65)] transition hover:border-emerald-400/40 hover:bg-white/[0.07]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
          {category}
        </span>
        <span className="text-xs font-medium text-slate-300">{status}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>

      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
      >
        Open calculator
      </Link>
    </article>
  );
}
