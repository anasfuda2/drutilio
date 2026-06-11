"use client";

import { useMemo, useState } from "react";
import { calculateMortgagePayment, formatMonthsAsYearsMonths, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function MortgageCalculatorClient() {
  const [homePrice, setHomePrice] = useState(425000);
  const [downPayment, setDownPayment] = useState(85000);
  const [annualInterestRate, setAnnualInterestRate] = useState(6.75);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const result = useMemo(
    () =>
      calculateMortgagePayment({
        homePrice,
        downPayment,
        annualInterestRate,
        loanTermYears,
      }),
    [annualInterestRate, downPayment, homePrice, loanTermYears],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="home-price"
            label="Home price"
            prefix="$"
            value={homePrice}
            onChange={setHomePrice}
            step={1000}
          />
          <CalculatorField
            id="down-payment"
            label="Down payment"
            prefix="$"
            value={downPayment}
            onChange={setDownPayment}
            step={1000}
          />
          <CalculatorField
            id="interest-rate"
            label="Interest rate"
            suffix="%"
            value={annualInterestRate}
            onChange={setAnnualInterestRate}
            step={0.01}
          />
          <CalculatorField
            id="loan-term"
            label="Loan term"
            suffix="years"
            value={loanTermYears}
            onChange={setLoanTermYears}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Monthly principal and interest"
        value={formatUsd(result.monthlyPayment)}
        detail={`Loan amount: ${formatUsd(result.principal)} over ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
      />
    </div>
  );
}
