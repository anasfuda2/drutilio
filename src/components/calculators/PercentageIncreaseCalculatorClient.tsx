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

export function PercentageIncreaseCalculatorClient() {
  const [originalValue, setOriginalValue] = useState(120);
  const [newValue, setNewValue] = useState(150);

  const result = useMemo(
    () => calculatePercentageChange({ originalValue, newValue }),
    [newValue, originalValue],
  );

  const isIncrease = result.percentageChange >= 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="increase-original"
            label="Original value"
            value={originalValue}
            onChange={setOriginalValue}
            step={0.01}
          />
          <CalculatorField
            id="increase-new"
            label="New value"
            value={newValue}
            onChange={setNewValue}
            step={0.01}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Percentage increase"
          value={isIncrease ? formatPercentage(result.percentageChange) : "No increase"}
          detail="This compares the difference between the new value and the original value relative to the original."
          warning={
            isIncrease
              ? undefined
              : "The new value is not higher than the original value, so this scenario does not represent an increase."
          }
        />
        <ResultGrid
          items={[
            { label: "Change amount", value: formatNumber(result.difference, 2) },
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
