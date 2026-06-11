export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">FAQs</h2>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
