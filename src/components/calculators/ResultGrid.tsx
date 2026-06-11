type ResultGridProps = {
  items: Array<{
    label: string;
    value: string;
  }>;
};

export function ResultGrid({ items }: ResultGridProps) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-slate-950/35 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {item.label}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
