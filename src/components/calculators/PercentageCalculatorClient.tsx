"use client";

import { useMemo, useState } from "react";
import {
  calculatePercentageOf,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function PercentageCalculatorClient() {
  const [percent, setPercent] = useState(15);
  const [value, setValue] = useState(240);

  const result = useMemo(
    () => calculatePercentageOf({ percent, value }),
    [percent, value],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="percent-value"
            label="Percentage"
            value={percent}
            onChange={setPercent}
            suffix="%"
            step={0.01}
          />
          <CalculatorField
            id="base-number"
            label="Number"
            value={value}
            onChange={setValue}
            step={0.01}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Result"
        value={formatNumber(result, 2)}
        detail={`${formatNumber(percent, 2)}% of ${formatNumber(value, 2)} equals ${formatNumber(result, 2)}.`}
      />
    </div>
  );
}
