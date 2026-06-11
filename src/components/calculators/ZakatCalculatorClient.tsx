"use client";

import { useMemo, useState } from "react";
import {
  calculateZakat,
  formatPercentage,
  formatUsd,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function ZakatCalculatorClient() {
  const [cashSavings, setCashSavings] = useState(15000);
  const [goldValue, setGoldValue] = useState(2500);
  const [silverValue, setSilverValue] = useState(600);
  const [investments, setInvestments] = useState(8000);
  const [retirementAccounts, setRetirementAccounts] = useState(0);
  const [businessAssets, setBusinessAssets] = useState(0);
  const [debtsOwed, setDebtsOwed] = useState(3000);

  const result = useMemo(
    () =>
      calculateZakat({
        cashSavings,
        goldValue,
        silverValue,
        investments,
        retirementAccounts,
        businessAssets,
        debtsOwed,
      }),
    [
      businessAssets,
      cashSavings,
      debtsOwed,
      goldValue,
      investments,
      retirementAccounts,
      silverValue,
    ],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="zakat-cash-savings"
            label="Cash savings"
            prefix="$"
            value={cashSavings}
            onChange={setCashSavings}
            step={100}
          />
          <CalculatorField
            id="zakat-gold-value"
            label="Gold value"
            prefix="$"
            value={goldValue}
            onChange={setGoldValue}
            step={100}
          />
          <CalculatorField
            id="zakat-silver-value"
            label="Silver value"
            prefix="$"
            value={silverValue}
            onChange={setSilverValue}
            step={50}
          />
          <CalculatorField
            id="zakat-investments"
            label="Investments"
            prefix="$"
            value={investments}
            onChange={setInvestments}
            step={100}
          />
          <CalculatorField
            id="zakat-retirement"
            label="Retirement accounts (optional)"
            prefix="$"
            value={retirementAccounts}
            onChange={setRetirementAccounts}
            step={100}
          />
          <CalculatorField
            id="zakat-business-assets"
            label="Business assets (optional)"
            prefix="$"
            value={businessAssets}
            onChange={setBusinessAssets}
            step={100}
          />
          <CalculatorField
            id="zakat-debts-owed"
            label="Debts owed"
            prefix="$"
            value={debtsOwed}
            onChange={setDebtsOwed}
            step={100}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Zakat due"
          value={formatUsd(result.zakatDue)}
          detail={`This estimate applies the standard ${formatPercentage(result.zakatRate * 100)} zakat rate to net zakatable assets after deductible debts.`}
          warning="This calculator is an educational estimate only. Treatment of retirement accounts, business assets, debts, nisab, and local scholarly opinions can differ."
        />
        <ResultGrid
          items={[
            {
              label: "Total zakatable assets",
              value: formatUsd(result.totalZakatableAssets),
            },
            {
              label: "Deductible debts",
              value: formatUsd(result.deductibleDebts),
            },
            {
              label: "Net zakatable amount",
              value: formatUsd(result.netZakatableAssets),
            },
            {
              label: "Applied rate",
              value: formatPercentage(result.zakatRate * 100),
            },
          ]}
        />
      </div>
    </div>
  );
}
