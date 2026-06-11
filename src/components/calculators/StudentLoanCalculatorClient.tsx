"use client";

import { useMemo, useState } from "react";
import { calculateStudentLoan, formatMonthsAsYearsMonths, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function StudentLoanCalculatorClient() {
  const [loanBalance, setLoanBalance] = useState(42000);
  const [annualInterestRate, setAnnualInterestRate] = useState(5.9);
  const [monthlyPayment, setMonthlyPayment] = useState(500);

  const result = useMemo(
    () =>
      calculateStudentLoan({
        loanBalance,
        annualInterestRate,
        monthlyPayment,
      }),
    [annualInterestRate, loanBalance, monthlyPayment],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="loan-balance"
            label="Loan balance"
            prefix="$"
            value={loanBalance}
            onChange={setLoanBalance}
            step={500}
          />
          <CalculatorField
            id="student-interest-rate"
            label="Interest rate"
            suffix="%"
            value={annualInterestRate}
            onChange={setAnnualInterestRate}
            step={0.01}
          />
          <CalculatorField
            id="monthly-payment"
            label="Monthly payment"
            prefix="$"
            value={monthlyPayment}
            onChange={setMonthlyPayment}
            step={25}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Estimated payoff timeline"
        value={
          result.canRepay
            ? formatMonthsAsYearsMonths(result.payoffMonths)
            : "Payment too low"
        }
        detail={
          result.canRepay
            ? `Estimated total interest: ${formatUsd(result.totalInterest)}.`
            : "Increase the monthly payment so it exceeds the monthly interest charge."
        }
        warning={
          result.canRepay
            ? undefined
            : "With the current inputs, the payment does not reduce principal enough to fully pay off the loan."
        }
      />
    </div>
  );
}
