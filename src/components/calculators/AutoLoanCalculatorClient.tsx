"use client";

import { useMemo, useState } from "react";
import { calculateAutoLoan, formatMonthsAsYearsMonths, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function AutoLoanCalculatorClient() {
  const [vehiclePrice, setVehiclePrice] = useState(36000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeInValue, setTradeInValue] = useState(4000);
  const [annualInterestRate, setAnnualInterestRate] = useState(7.2);
  const [loanTermYears, setLoanTermYears] = useState(5);

  const result = useMemo(
    () =>
      calculateAutoLoan({
        vehiclePrice,
        downPayment,
        tradeInValue,
        annualInterestRate,
        loanTermYears,
      }),
    [annualInterestRate, downPayment, loanTermYears, tradeInValue, vehiclePrice],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="vehicle-price"
            label="Vehicle price"
            prefix="$"
            value={vehiclePrice}
            onChange={setVehiclePrice}
            step={500}
          />
          <CalculatorField
            id="auto-down-payment"
            label="Down payment"
            prefix="$"
            value={downPayment}
            onChange={setDownPayment}
            step={500}
          />
          <CalculatorField
            id="trade-in"
            label="Trade-in value"
            prefix="$"
            value={tradeInValue}
            onChange={setTradeInValue}
            step={500}
          />
          <CalculatorField
            id="auto-interest-rate"
            label="Interest rate"
            suffix="%"
            value={annualInterestRate}
            onChange={setAnnualInterestRate}
            step={0.01}
          />
          <CalculatorField
            id="auto-loan-term"
            label="Loan term"
            suffix="years"
            value={loanTermYears}
            onChange={setLoanTermYears}
            step={1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Monthly auto payment"
        value={formatUsd(result.monthlyPayment)}
        detail={`Estimated total interest: ${formatUsd(result.totalInterest)} across ${formatMonthsAsYearsMonths(result.totalMonths)}.`}
      />
    </div>
  );
}
