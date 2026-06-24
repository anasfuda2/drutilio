"use client";

type CalculatorSelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  helpText?: string;
};

export function CalculatorSelectField({
  id,
  label,
  value,
  onChange,
  options,
  helpText,
}: CalculatorSelectFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-100">
        {label}
      </span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-lg font-medium text-white outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/15"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText ? (
        <span className="mt-2 block text-xs leading-5 text-slate-400">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}
