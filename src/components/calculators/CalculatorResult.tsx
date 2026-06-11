type CalculatorResultProps = {
  title: string;
  value: string;
  detail?: string;
  warning?: string;
};

export function CalculatorResult({
  title,
  value,
  detail,
  warning,
}: CalculatorResultProps) {
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {title}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {value}
      </p>
      {detail ? (
        <p className="mt-3 text-sm leading-7 text-slate-200">{detail}</p>
      ) : null}
      {warning ? (
        <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100">
          {warning}
        </p>
      ) : null}
    </div>
  );
}
