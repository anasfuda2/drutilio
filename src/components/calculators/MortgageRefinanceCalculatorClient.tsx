"use client";

import { useMemo, useState } from "react";
import {
  calculateMortgageRefinance,
  formatMonthsAsYearsMonths,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function MortgageRefinanceCalculatorClient() {
  const [currentLoanBalance, setCurrentLoanBalance] = useState(320000);
  const [currentInterestRate, setCurrentInterestRate] = useState(7.1);
  const [currentRemainingTermYears, setCurrentRemainingTermYears] = useState(26);
  const [newInterestRate, setNewInterestRate] = useState(6.1);
  const [newLoanTermYears, setNewLoanTermYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(6500);

  const result = useMemo(
    () =>
      calculateMortgageRefinance({
        currentLoanBalance,
        currentInterestRate,
        currentRemainingTermYears,
        newInterestRate,
        newLoanTermYears,
        closingCosts,
      }),
    [
      closingCosts,
      currentInterestRate,
      currentLoanBalance,
      currentRemainingTermYears,
      newInterestRate,
      newLoanTermYears,
    ],
  );

  const breakEvenLabel =
    Number.isFinite(result.breakEvenMonths) && result.breakEvenMonths > 0
      ? formatMonthsAsYearsMonths(Math.ceil(result.breakEvenMonths))
      : "No break-even under current assumptions";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="refi-balance"
            label="Current loan balance"
            prefix="$"
            value={currentLoanBalance}
            onChange={setCurrentLoanBalance}
            step={1000}
          />
          <CalculatorField
            id="refi-current-rate"
            label="Current interest rate"
            suffix="%"
            value={currentInterestRate}
            onChange={setCurrentInterestRate}
            step={0.1}
          />
          <CalculatorField
            id="refi-current-term"
            label="Remaining current term"
            suffix="years"
            value={currentRemainingTermYears}
            onChange={setCurrentRemainingTermYears}
            step={1}
          />
          <CalculatorField
            id="refi-new-rate"
            label="New interest rate"
            suffix="%"
            value={newInterestRate}
            onChange={setNewInterestRate}
            step={0.1}
          />
          <CalculatorField
            id="refi-new-term"
            label="New loan term"
            suffix="years"
            value={newLoanTermYears}
            onChange={setNewLoanTermYears}
            step={1}
          />
          <CalculatorField
            id="refi-closing-costs"
            label="Refinance closing costs"
            prefix="$"
            value={closingCosts}
            onChange={setClosingCosts}
            step={100}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated monthly savings"
          value={formatUsd(Math.max(0, result.monthlySavings))}
          detail="This compares the simplified current monthly principal-and-interest payment with the refinanced payment."
          warning="Estimate only. Real refinance outcomes depend on escrow changes, taxes, insurance, cash paid at closing, lender fees, and whether extending the term fits your goals."
        />
        <ResultGrid
          items={[
            { label: "Current monthly payment", value: formatUsd(result.currentMonthlyPayment) },
            { label: "New monthly payment", value: formatUsd(result.newMonthlyPayment) },
            { label: "Financed closing costs", value: formatUsd(result.financedClosingCosts) },
            { label: "Break-even period", value: breakEvenLabel },
          ]}
        />
      </div>
    </div>
  );
}
