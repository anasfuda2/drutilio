"use client";

import { useMemo, useState } from "react";
import {
  calculateMortgageAffordability,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function MortgageAffordabilityCalculatorClient() {
  const [annualIncome, setAnnualIncome] = useState(125000);
  const [monthlyDebts, setMonthlyDebts] = useState(850);
  const [downPayment, setDownPayment] = useState(60000);
  const [annualInterestRate, setAnnualInterestRate] = useState(6.75);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const result = useMemo(
    () =>
      calculateMortgageAffordability({
        annualIncome,
        monthlyDebts,
        downPayment,
        annualInterestRate,
        loanTermYears,
      }),
    [annualIncome, annualInterestRate, downPayment, loanTermYears, monthlyDebts],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="afford-income"
            label="Annual household income"
            prefix="$"
            value={annualIncome}
            onChange={setAnnualIncome}
            step={1000}
          />
          <CalculatorField
            id="afford-debts"
            label="Monthly debt payments"
            prefix="$"
            value={monthlyDebts}
            onChange={setMonthlyDebts}
            step={50}
          />
          <CalculatorField
            id="afford-down-payment"
            label="Available down payment"
            prefix="$"
            value={downPayment}
            onChange={setDownPayment}
            step={1000}
          />
          <CalculatorField
            id="afford-rate"
            label="Mortgage interest rate"
            suffix="%"
            value={annualInterestRate}
            onChange={setAnnualInterestRate}
            step={0.1}
          />
          <CalculatorField
            id="afford-term"
            label="Loan term"
            suffix="years"
            value={loanTermYears}
            onChange={setLoanTermYears}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated affordable home price"
          value={formatUsd(result.estimatedHomePrice)}
          detail={result.assumptions}
          warning="Estimate only. Real affordability depends on taxes, insurance, HOA dues, credit profile, underwriting rules, reserves, and lender-specific standards."
        />
        <ResultGrid
          items={[
            { label: "Gross monthly income", value: formatUsd(result.grossMonthlyIncome) },
            { label: "Max housing payment", value: formatUsd(result.maxHousingPayment) },
            { label: "Estimated loan amount", value: formatUsd(result.maxLoanAmount) },
            { label: "Down payment used", value: formatUsd(result.availableDownPayment) },
          ]}
        />
      </div>
    </div>
  );
}
