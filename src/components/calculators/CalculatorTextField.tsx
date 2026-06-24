"use client";

type CalculatorTextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helpText?: string;
};

export function CalculatorTextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  helpText,
}: CalculatorTextFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-100">
        {label}
      </span>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-lg font-medium text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/15"
      />
      {helpText ? (
        <span className="mt-2 block text-xs leading-5 text-slate-400">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}
