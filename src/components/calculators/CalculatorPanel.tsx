import { ReactNode } from "react";

type CalculatorPanelProps = {
  children: ReactNode;
};

export function CalculatorPanel({ children }: CalculatorPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.65)] sm:p-6 lg:p-8">
      {children}
    </div>
  );
}
