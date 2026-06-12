"use client";

import { useMemo, useState } from "react";
import {
  estimateSelfEmploymentTax,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function SelfEmploymentTaxCalculatorClient() {
  const [netSelfEmploymentIncome, setNetSelfEmploymentIncome] = useState(60000);

  const result = useMemo(
    () => estimateSelfEmploymentTax({ netSelfEmploymentIncome }),
    [netSelfEmploymentIncome],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <CalculatorPanel>
        <div className="grid gap-5">
          <CalculatorField
            id="self-employment-net-income"
            label="Net self-employment income"
            prefix="$"
            value={netSelfEmploymentIncome}
            onChange={setNetSelfEmploymentIncome}
            step={1000}
            helpText="Use estimated annual net business income after ordinary business expenses."
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated self-employment tax"
          value={formatUsd(result.totalSelfEmploymentTax)}
          detail={result.assumptions}
          warning="Estimate only. Actual self-employment tax can change with wage interactions, business structure, additional Medicare tax, and return-specific adjustments."
        />
        <ResultGrid
          items={[
            { label: "Net income entered", value: formatUsd(result.netIncome) },
            { label: "Taxable earnings base", value: formatUsd(result.taxableBase) },
            { label: "Social Security portion", value: formatUsd(result.socialSecurityTax) },
            { label: "Medicare portion", value: formatUsd(result.medicareTax) },
            { label: "Deductible half", value: formatUsd(result.deductiblePortion) },
          ]}
        />
      </div>
    </div>
  );
}
