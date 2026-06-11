"use client";

import { useMemo, useState } from "react";
import { calculateRetirementProjection, formatMonthsAsYearsMonths, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function RetirementCalculatorClient() {
  const [currentSavings, setCurrentSavings] = useState(60000);
  const [monthlyContribution, setMonthlyContribution] = useState(900);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(25);

  const result = useMemo(
    () =>
      calculateRetirementProjection({
        currentSavings,
        monthlyContribution,
        annualReturn,
        yearsUntilRetirement,
      }),
    [annualReturn, currentSavings, monthlyContribution, yearsUntilRetirement],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="current-savings"
            label="Current savings"
            prefix="$"
            value={currentSavings}
            onChange={setCurrentSavings}
            step={1000}
          />
          <CalculatorField
            id="monthly-contribution"
            label="Monthly contribution"
            prefix="$"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
            step={50}
          />
          <CalculatorField
            id="annual-return"
            label="Annual return"
            suffix="%"
            value={annualReturn}
            onChange={setAnnualReturn}
            step={0.1}
          />
          <CalculatorField
            id="years-until-retirement"
            label="Years until retirement"
            suffix="years"
            value={yearsUntilRetirement}
            onChange={setYearsUntilRetirement}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Projected retirement balance"
        value={formatUsd(result.projectedBalance)}
        detail={`Projection assumes monthly compounding over ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
      />
    </div>
  );
}
