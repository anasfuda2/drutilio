import Link from "next/link";

type ToolNavigationItem = {
  href: string;
  label: string;
};

type ToolNavigationBarProps = {
  title: string;
  items: ToolNavigationItem[];
  activeHref?: string;
};

export function ToolNavigationBar({
  title,
  items,
  activeHref,
}: ToolNavigationBarProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {title}
        </h2>
        <span className="rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 text-xs font-semibold text-slate-300">
          {items.length}
        </span>
      </div>

      <div className="mt-4 -mx-1 flex gap-3 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={[
                "shrink-0 rounded-xl border px-4 py-3 text-sm font-semibold transition md:shrink",
                isActive
                  ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-100"
                  : "border-white/10 bg-slate-950/50 text-white hover:border-emerald-400/40 hover:bg-slate-900/80 hover:text-emerald-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
