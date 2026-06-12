"use client";

import { useMemo, useState } from "react";
import {
  calculateIraProjection,
  formatMonthsAsYearsMonths,
  formatUsd,
  IraAccountType,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

const iraTypeOptions = [
  { value: "traditional", label: "Traditional IRA" },
  { value: "roth", label: "Roth IRA" },
];

export function IraCalculatorClient() {
  const [iraType, setIraType] = useState<IraAccountType>("traditional");
  const [currentBalance, setCurrentBalance] = useState(25000);
  const [annualContribution, setAnnualContribution] = useState(7000);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(25);

  const result = useMemo(
    () =>
      calculateIraProjection({
        currentBalance,
        annualContribution,
        annualReturn,
        yearsUntilRetirement,
      }),
    [annualContribution, annualReturn, currentBalance, yearsUntilRetirement],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="ira-type"
            label="IRA type"
            value={iraType}
            onChange={(value) => setIraType(value as IraAccountType)}
            options={iraTypeOptions}
            helpText="This selection helps frame the estimate but does not change the math in this simplified projection."
          />
          <CalculatorField
            id="ira-current-balance"
            label="Current IRA balance"
            prefix="$"
            value={currentBalance}
            onChange={setCurrentBalance}
            step={500}
          />
          <CalculatorField
            id="ira-annual-contribution"
            label="Annual contribution"
            prefix="$"
            value={annualContribution}
            onChange={setAnnualContribution}
            step={100}
          />
          <CalculatorField
            id="ira-annual-return"
            label="Annual return assumption"
            suffix="%"
            value={annualReturn}
            onChange={setAnnualReturn}
            step={0.1}
          />
          <CalculatorField
            id="ira-years"
            label="Years until retirement"
            suffix="years"
            value={yearsUntilRetirement}
            onChange={setYearsUntilRetirement}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title={`Projected ${iraType === "roth" ? "Roth" : "traditional"} IRA balance`}
          value={formatUsd(result.futureValue)}
          detail={`Projection assumes annual contributions spread monthly over ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
          warning="Estimate only. Real IRA outcomes depend on contribution rules, eligibility, fees, taxes, and investment returns."
        />
        <ResultGrid
          items={[
            { label: "Annual contribution", value: formatUsd(result.annualContribution) },
            { label: "Total contributions", value: formatUsd(result.totalContributions) },
            { label: "Estimated growth", value: formatUsd(result.interestEarned) },
            { label: "Starting balance", value: formatUsd(currentBalance) },
          ]}
        />
      </div>
    </div>
  );
}
