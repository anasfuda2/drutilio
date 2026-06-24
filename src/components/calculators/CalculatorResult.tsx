"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { AdPlaceholder } from "@/components/ads/AdPlaceholder";

type CalculatorResultProps = {
  title: string;
  value: string;
  detail?: string;
  warning?: string;
  children?: ReactNode;
  copyValue?: string;
};

export function CalculatorResult({
  title,
  value,
  detail,
  warning,
  children,
  copyValue,
}: CalculatorResultProps) {
  const [copyState, setCopyState] = useState<"idle" | "done">("idle");
  const resolvedCopyValue = useMemo(() => {
    if (copyValue) {
      return copyValue;
    }

    return /[\d$%]/.test(value) ? value : "";
  }, [copyValue, value]);

  async function handleCopy() {
    if (!resolvedCopyValue || typeof navigator === "undefined") {
      return;
    }

    try {
      await navigator.clipboard.writeText(resolvedCopyValue);
      setCopyState("done");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("idle");
    }
  }

  return (
    <>
      <div className="rounded-3xl border border-emerald-400/25 bg-[linear-gradient(180deg,rgba(16,185,129,0.18),rgba(16,185,129,0.08))] p-5 shadow-[0_28px_80px_-30px_rgba(16,185,129,0.5)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {title}
          </p>
          {resolvedCopyValue ? (
            <button
              type="button"
              onClick={() => void handleCopy()}
              className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:bg-slate-900/60"
            >
              {copyState === "done" ? "Copied" : "Copy result"}
            </button>
          ) : null}
        </div>
        <p className="mt-4 text-4xl font-semibold tracking-tight tabular-nums text-white sm:text-5xl lg:text-6xl">
          {value}
        </p>
        {detail ? (
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-100">
            {detail}
          </p>
        ) : null}
        {warning ? (
          <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100">
            {warning}
          </p>
        ) : null}
        {children}
      </div>
      <div className="mt-4">
        <AdPlaceholder placement="calculator-result" />
      </div>
    </>
  );
}
