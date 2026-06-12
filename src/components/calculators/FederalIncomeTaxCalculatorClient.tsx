"use client";

import { useMemo, useState } from "react";
import {
  estimateFederalIncomeTax,
  formatPercentage,
  formatUsd,
  TaxFilingStatus,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

const filingStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married-filing-jointly", label: "Married filing jointly" },
  { value: "married-filing-separately", label: "Married filing separately" },
  { value: "head-of-household", label: "Head of household" },
];

export function FederalIncomeTaxCalculatorClient() {
  const [filingStatus, setFilingStatus] = useState<TaxFilingStatus>("single");
  const [annualIncome, setAnnualIncome] = useState(85000);
  const [preTaxDeductions, setPreTaxDeductions] = useState(5000);
  const [taxCredits, setTaxCredits] = useState(0);

  const result = useMemo(
    () =>
      estimateFederalIncomeTax({
        filingStatus,
        annualIncome,
        preTaxDeductions,
        taxCredits,
      }),
    [annualIncome, filingStatus, preTaxDeductions, taxCredits],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="federal-tax-status"
            label="Filing status"
            value={filingStatus}
            onChange={(value) => setFilingStatus(value as TaxFilingStatus)}
            options={filingStatusOptions}
          />
          <CalculatorField
            id="federal-tax-income"
            label="Annual gross income"
            prefix="$"
            value={annualIncome}
            onChange={setAnnualIncome}
            step={1000}
          />
          <CalculatorField
            id="federal-tax-deductions"
            label="Pre-tax deductions or adjustments"
            prefix="$"
            value={preTaxDeductions}
            onChange={setPreTaxDeductions}
            step={500}
            helpText="Use a rough annual estimate for items that reduce income before the standard deduction."
          />
          <CalculatorField
            id="federal-tax-credits"
            label="Estimated tax credits"
            prefix="$"
            value={taxCredits}
            onChange={setTaxCredits}
            step={100}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated federal income tax"
          value={formatUsd(result.estimatedTax)}
          detail={`${result.assumptions} This tool uses a simplified standard-deduction approach.`}
          warning="Estimate only. Federal income tax outcomes can change with itemized deductions, capital gains, dependents, self-employment income, state taxes, and other return details."
        />
        <ResultGrid
          items={[
            { label: "Adjusted gross income", value: formatUsd(result.adjustedGrossIncome) },
            { label: "Standard deduction", value: formatUsd(result.standardDeduction) },
            { label: "Taxable income", value: formatUsd(result.taxableIncome) },
            { label: "Marginal rate", value: formatPercentage(result.marginalRate * 100, 0) },
            { label: "Effective rate", value: formatPercentage(result.effectiveRate * 100, 2) },
            { label: "Credits applied", value: formatUsd(result.creditsApplied) },
          ]}
        />
      </div>
    </div>
  );
}
