"use client";

import { useMemo, useState } from "react";
import {
  calculateIdealWeight,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function IdealWeightCalculatorClient() {
  const [sex, setSex] = useState("male");
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);

  const result = useMemo(
    () => calculateIdealWeight({ sex: sex as "male" | "female", heightFeet, heightInches }),
    [heightFeet, heightInches, sex],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="ideal-weight-sex"
            label="Sex"
            value={sex}
            onChange={setSex}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <CalculatorField
              id="ideal-weight-height-feet"
              label="Height (feet)"
              value={heightFeet}
              onChange={setHeightFeet}
              step={1}
            />
            <CalculatorField
              id="ideal-weight-height-inches"
              label="Height (inches)"
              value={heightInches}
              onChange={setHeightInches}
              step={1}
            />
          </div>
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Reference ideal weight"
        value={result ? `${formatNumber(result.devineLb, 1)} lb` : "Enter valid height"}
        detail="This is a reference estimate, not a target that fits every body type or medical situation."
      >
        {result ? (
          <ResultGrid
            items={[
              {
                label: "Reference formula",
                value: `${formatNumber(result.devineKg, 1)} kg`,
              },
              {
                label: "Healthy BMI range",
                value: `${formatNumber(result.healthyBmiLowLb, 1)}-${formatNumber(result.healthyBmiHighLb, 1)} lb`,
              },
              {
                label: "Healthy BMI range (kg)",
                value: `${formatNumber(result.healthyBmiLowKg, 1)}-${formatNumber(result.healthyBmiHighKg, 1)} kg`,
              },
            ]}
          />
        ) : null}
      </CalculatorResult>
    </div>
  );
}
