"use client";

import { useMemo, useState } from "react";
import { calculateClosingCosts, formatUsd } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function ClosingCostsCalculatorClient() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(45000);
  const [closingCostPercent, setClosingCostPercent] = useState(3);
  const [lenderFees, setLenderFees] = useState(3500);
  const [prepaidTaxesAndInsurance, setPrepaidTaxesAndInsurance] = useState(4200);

  const result = useMemo(
    () =>
      calculateClosingCosts({
        homePrice,
        downPayment,
        closingCostPercent,
        lenderFees,
        prepaidTaxesAndInsurance,
      }),
    [closingCostPercent, downPayment, homePrice, lenderFees, prepaidTaxesAndInsurance],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="closing-home-price"
            label="Home price"
            prefix="$"
            value={homePrice}
            onChange={setHomePrice}
            step={1000}
          />
          <CalculatorField
            id="closing-down-payment"
            label="Down payment"
            prefix="$"
            value={downPayment}
            onChange={setDownPayment}
            step={1000}
          />
          <CalculatorField
            id="closing-percent"
            label="Closing cost estimate"
            suffix="%"
            value={closingCostPercent}
            onChange={setClosingCostPercent}
            step={0.1}
          />
          <CalculatorField
            id="closing-lender-fees"
            label="Lender and title fees"
            prefix="$"
            value={lenderFees}
            onChange={setLenderFees}
            step={100}
          />
          <CalculatorField
            id="closing-prepaids"
            label="Prepaid taxes and insurance"
            prefix="$"
            value={prepaidTaxesAndInsurance}
            onChange={setPrepaidTaxesAndInsurance}
            step={100}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated cash to close"
          value={formatUsd(result.cashToClose)}
          detail="This combines down payment, percentage-based closing costs, and the fixed fee estimates you entered."
          warning="Estimate only. Actual cash to close depends on the loan estimate, credits, escrow setup, seller concessions, prepaid items, and lender-specific charges."
        />
        <ResultGrid
          items={[
            { label: "Down payment", value: formatUsd(result.downPayment) },
            { label: "Percent-based costs", value: formatUsd(result.percentBasedCosts) },
            { label: "Fixed fees and prepaids", value: formatUsd(result.fixedFees) },
            { label: "Total closing costs", value: formatUsd(result.totalClosingCosts) },
          ]}
        />
      </div>
    </div>
  );
}
