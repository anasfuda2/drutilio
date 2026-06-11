const trustItems = [
  "Free to use",
  "No signup required",
  "Educational estimates",
  "Privacy-friendly",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4"
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
