"use client";

import { useMemo, useState } from "react";
import {
  estimateTaxRefund,
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

export function TaxRefundEstimatorClient() {
  const [filingStatus, setFilingStatus] = useState<TaxFilingStatus>("single");
  const [annualIncome, setAnnualIncome] = useState(70000);
  const [preTaxDeductions, setPreTaxDeductions] = useState(4000);
  const [taxCredits, setTaxCredits] = useState(0);
  const [federalWithholding, setFederalWithholding] = useState(8000);

  const result = useMemo(
    () =>
      estimateTaxRefund({
        filingStatus,
        annualIncome,
        preTaxDeductions,
        taxCredits,
        federalWithholding,
      }),
    [annualIncome, federalWithholding, filingStatus, preTaxDeductions, taxCredits],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="refund-status"
            label="Filing status"
            value={filingStatus}
            onChange={(value) => setFilingStatus(value as TaxFilingStatus)}
            options={filingStatusOptions}
          />
          <CalculatorField
            id="refund-income"
            label="Annual gross income"
            prefix="$"
            value={annualIncome}
            onChange={setAnnualIncome}
            step={1000}
          />
          <CalculatorField
            id="refund-deductions"
            label="Pre-tax deductions or adjustments"
            prefix="$"
            value={preTaxDeductions}
            onChange={setPreTaxDeductions}
            step={500}
          />
          <CalculatorField
            id="refund-credits"
            label="Estimated tax credits"
            prefix="$"
            value={taxCredits}
            onChange={setTaxCredits}
            step={100}
          />
          <CalculatorField
            id="refund-withholding"
            label="Federal withholding paid in"
            prefix="$"
            value={federalWithholding}
            onChange={setFederalWithholding}
            step={250}
            helpText="Use the amount already withheld or expected to be withheld for the tax year."
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title={result.isRefund ? "Estimated refund" : "Estimated amount due"}
          value={formatUsd(result.isRefund ? result.estimatedRefund : result.estimatedAmountDue)}
          detail="This compares simplified estimated federal tax against the withholding amount you entered."
          warning="Estimate only. Refund outcomes can change with itemized deductions, late-arriving tax forms, credits, side income, and filing choices."
        />
        <ResultGrid
          items={[
            { label: "Estimated federal tax", value: formatUsd(result.estimatedTax) },
            { label: "Federal withholding", value: formatUsd(result.federalWithholding) },
            { label: "Adjusted gross income", value: formatUsd(result.adjustedGrossIncome) },
            { label: "Taxable income", value: formatUsd(result.taxableIncome) },
          ]}
        />
      </div>
    </div>
  );
}
