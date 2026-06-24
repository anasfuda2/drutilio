"use client";

type CalculatorDateFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  max?: string;
  min?: string;
};

export function CalculatorDateField({
  id,
  label,
  value,
  onChange,
  max,
  min,
}: CalculatorDateFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-100">
        {label}
      </span>
      <input
        id={id}
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        max={max}
        min={min}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-lg font-medium text-white outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/15"
      />
    </label>
  );
}
