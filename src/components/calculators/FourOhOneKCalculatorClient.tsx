"use client";

import { useMemo, useState } from "react";
import {
  calculate401kProjection,
  formatMonthsAsYearsMonths,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function FourOhOneKCalculatorClient() {
  const [currentBalance, setCurrentBalance] = useState(90000);
  const [annualSalary, setAnnualSalary] = useState(110000);
  const [employeeContributionPercent, setEmployeeContributionPercent] = useState(10);
  const [employerMatchPercent, setEmployerMatchPercent] = useState(50);
  const [employerMatchCapPercent, setEmployerMatchCapPercent] = useState(6);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(25);

  const result = useMemo(
    () =>
      calculate401kProjection({
        currentBalance,
        annualSalary,
        employeeContributionPercent,
        employerMatchPercent,
        employerMatchCapPercent,
        annualReturn,
        yearsUntilRetirement,
      }),
    [
      annualReturn,
      annualSalary,
      currentBalance,
      employeeContributionPercent,
      employerMatchCapPercent,
      employerMatchPercent,
      yearsUntilRetirement,
    ],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="401k-current-balance"
            label="Current 401(k) balance"
            prefix="$"
            value={currentBalance}
            onChange={setCurrentBalance}
            step={1000}
          />
          <CalculatorField
            id="401k-annual-salary"
            label="Annual salary"
            prefix="$"
            value={annualSalary}
            onChange={setAnnualSalary}
            step={1000}
          />
          <CalculatorField
            id="401k-employee-contribution"
            label="Employee contribution"
            suffix="%"
            value={employeeContributionPercent}
            onChange={setEmployeeContributionPercent}
            step={0.5}
          />
          <CalculatorField
            id="401k-employer-match"
            label="Employer match rate"
            suffix="%"
            value={employerMatchPercent}
            onChange={setEmployerMatchPercent}
            step={1}
            helpText="Example: enter 50 for a 50% match."
          />
          <CalculatorField
            id="401k-employer-cap"
            label="Employer match cap"
            suffix="% of salary"
            value={employerMatchCapPercent}
            onChange={setEmployerMatchCapPercent}
            step={0.5}
          />
          <CalculatorField
            id="401k-annual-return"
            label="Annual return assumption"
            suffix="%"
            value={annualReturn}
            onChange={setAnnualReturn}
            step={0.1}
          />
          <CalculatorField
            id="401k-years-until-retirement"
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
          title="Projected 401(k) balance"
          value={formatUsd(result.futureValue)}
          detail={`Projection assumes monthly contributions and monthly compounding over ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
          warning="Estimate only. Real 401(k) outcomes depend on contribution limits, plan fees, vesting, investment returns, taxes, and plan-specific rules."
        />
        <ResultGrid
          items={[
            {
              label: "Annual employee contribution",
              value: formatUsd(result.annualEmployeeContribution),
            },
            {
              label: "Annual employer match",
              value: formatUsd(result.annualEmployerMatch),
            },
            {
              label: "Monthly total contribution",
              value: formatUsd(result.monthlyContribution),
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
