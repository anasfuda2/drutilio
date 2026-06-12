"use client";

import { useMemo, useState } from "react";
import {
  calculateRetirementIncomePlan,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function RetirementIncomeCalculatorClient() {
  const [retirementSavings, setRetirementSavings] = useState(1200000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [otherAnnualIncome, setOtherAnnualIncome] = useState(32000);
  const [annualReturnDuringRetirement, setAnnualReturnDuringRetirement] = useState(4);
  const [yearsInRetirement, setYearsInRetirement] = useState(30);

  const result = useMemo(
    () =>
      calculateRetirementIncomePlan({
        retirementSavings,
        withdrawalRate,
        otherAnnualIncome,
        annualReturnDuringRetirement,
        yearsInRetirement,
      }),
    [
      annualReturnDuringRetirement,
      otherAnnualIncome,
      retirementSavings,
      withdrawalRate,
      yearsInRetirement,
    ],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="ret-income-savings"
            label="Retirement savings"
            prefix="$"
            value={retirementSavings}
            onChange={setRetirementSavings}
            step={5000}
          />
          <CalculatorField
            id="ret-income-withdrawal-rate"
            label="Annual withdrawal rate"
            suffix="%"
            value={withdrawalRate}
            onChange={setWithdrawalRate}
            step={0.1}
          />
          <CalculatorField
            id="ret-income-other-income"
            label="Other annual income"
            prefix="$"
            value={otherAnnualIncome}
            onChange={setOtherAnnualIncome}
            step={1000}
            helpText="Examples include Social Security, pension income, or recurring part-time income."
          />
          <CalculatorField
            id="ret-income-return"
            label="Annual return during retirement"
            suffix="%"
            value={annualReturnDuringRetirement}
            onChange={setAnnualReturnDuringRetirement}
            step={0.1}
          />
          <CalculatorField
            id="ret-income-years"
            label="Years in retirement"
            suffix="years"
            value={yearsInRetirement}
            onChange={setYearsInRetirement}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated annual retirement income"
          value={formatUsd(result.estimatedAnnualIncome)}
          detail="This combines first-year portfolio withdrawals with the other annual income you entered."
          warning="Estimate only. Real retirement income planning depends on taxes, spending flexibility, market sequence, Social Security timing, and withdrawal strategy."
        />
        <ResultGrid
          items={[
            { label: "Monthly income estimate", value: formatUsd(result.estimatedMonthlyIncome) },
            { label: "Annual withdrawal", value: formatUsd(result.annualWithdrawal) },
            { label: "Other annual income", value: formatUsd(result.annualOtherIncome) },
            { label: "Ending balance estimate", value: formatUsd(result.endingBalance) },
          ]}
        />
      </div>
    </div>
  );
}
