"use client";

import { useMemo, useState } from "react";
import {
  calculateCompoundInterest,
  formatMonthsAsYearsMonths,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundsPerYear, setCompoundsPerYear] = useState(12);

  const result = useMemo(
    () =>
      calculateCompoundInterest({
        principal,
        monthlyContribution,
        annualRate,
        years,
        compoundsPerYear,
      }),
    [annualRate, compoundsPerYear, monthlyContribution, principal, years],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="compound-principal"
            label="Starting amount"
            prefix="$"
            value={principal}
            onChange={setPrincipal}
            step={100}
          />
          <CalculatorField
            id="compound-monthly"
            label="Monthly contribution"
            prefix="$"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
            step={25}
          />
          <CalculatorField
            id="compound-rate"
            label="Annual return"
            suffix="%"
            value={annualRate}
            onChange={setAnnualRate}
            step={0.1}
          />
          <CalculatorField
            id="compound-years"
            label="Years"
            suffix="years"
            value={years}
            onChange={setYears}
            step={1}
          />
          <CalculatorField
            id="compound-frequency"
            label="Compounds per year"
            value={compoundsPerYear}
            onChange={setCompoundsPerYear}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Future value"
          value={formatUsd(result.futureValue)}
          detail={`Projection window: ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
        />
        <ResultGrid
          items={[
            {
              label: "Total contributions",
              value: formatUsd(result.totalContributions),
            },
            {
              label: "Estimated growth",
              value: formatUsd(result.interestEarned),
            },
          ]}
        />
      </div>
    </div>
  );
}
