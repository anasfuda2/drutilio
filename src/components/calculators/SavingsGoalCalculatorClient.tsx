"use client";

import { useMemo, useState } from "react";
import { calculateSavingsGoal, formatMonthsAsYearsMonths, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function SavingsGoalCalculatorClient() {
  const [targetAmount, setTargetAmount] = useState(30000);
  const [currentSavings, setCurrentSavings] = useState(8000);
  const [monthsToSave, setMonthsToSave] = useState(36);
  const [annualReturn, setAnnualReturn] = useState(4.5);

  const result = useMemo(
    () =>
      calculateSavingsGoal({
        targetAmount,
        currentSavings,
        monthsToSave,
        annualReturn,
      }),
    [annualReturn, currentSavings, monthsToSave, targetAmount],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="target-amount"
            label="Target amount"
            prefix="$"
            value={targetAmount}
            onChange={setTargetAmount}
            step={500}
          />
          <CalculatorField
            id="current-savings-goal"
            label="Current savings"
            prefix="$"
            value={currentSavings}
            onChange={setCurrentSavings}
            step={500}
          />
          <CalculatorField
            id="months-to-save"
            label="Months to save"
            suffix="months"
            value={monthsToSave}
            onChange={setMonthsToSave}
            step={1}
          />
          <CalculatorField
            id="savings-annual-return"
            label="Annual return"
            suffix="%"
            value={annualReturn}
            onChange={setAnnualReturn}
            step={0.1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Required monthly contribution"
        value={formatUsd(result.requiredMonthlyContribution)}
        detail={`Current savings could grow to about ${formatUsd(result.futureValueOfCurrentSavings)} over ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
      />
    </div>
  );
}
