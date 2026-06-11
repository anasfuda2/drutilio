"use client";

type CalculatorFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
  helpText?: string;
};

export function CalculatorField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 0.01,
  min = 0,
  helpText,
}: CalculatorFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-white/10 bg-slate-950/60 focus-within:border-emerald-400/60">
        {prefix ? (
          <span className="pl-4 text-sm font-medium text-slate-400">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(event) => {
            const nextValue = Number(event.target.value);
            onChange(Number.isFinite(nextValue) && nextValue >= 0 ? nextValue : 0);
          }}
          className="w-full bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-slate-500"
        />
        {suffix ? (
          <span className="pr-4 text-sm font-medium text-slate-400">
            {suffix}
          </span>
        ) : null}
      </div>
      {helpText ? (
        <span className="mt-2 block text-xs leading-5 text-slate-400">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}
