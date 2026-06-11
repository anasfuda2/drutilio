"use client";

import { useMemo, useState } from "react";
import {
  calculatePercentageChange,
  formatNumber,
  formatPercentage,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function PercentageDecreaseCalculatorClient() {
  const [originalValue, setOriginalValue] = useState(150);
  const [newValue, setNewValue] = useState(120);

  const result = useMemo(
    () => calculatePercentageChange({ originalValue, newValue }),
    [newValue, originalValue],
  );

  const decreasePercent = result.percentageChange <= 0 ? Math.abs(result.percentageChange) : 0;
  const isDecrease = result.percentageChange <= 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="decrease-original"
            label="Original value"
            value={originalValue}
            onChange={setOriginalValue}
            step={0.01}
          />
          <CalculatorField
            id="decrease-new"
            label="New value"
            value={newValue}
            onChange={setNewValue}
            step={0.01}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Percentage decrease"
          value={isDecrease ? formatPercentage(decreasePercent) : "No decrease"}
          detail="This measures the reduction relative to the original value."
          warning={
            isDecrease
              ? undefined
              : "The new value is higher than the original value, so this scenario does not represent a decrease."
          }
        />
        <ResultGrid
          items={[
            {
              label: "Decrease amount",
              value: formatNumber(Math.abs(result.difference), 2),
            },
            {
              label: "New vs. original",
              value: `${formatNumber(newValue, 2)} vs ${formatNumber(originalValue, 2)}`,
            },
          ]}
        />
      </div>
    </div>
  );
}
