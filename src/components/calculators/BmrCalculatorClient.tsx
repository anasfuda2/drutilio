"use client";

import { useMemo, useState } from "react";
import { calculateBmr, formatNumber } from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

function toMetricWeight(system: string, value: number) {
  return system === "imperial" ? value * 0.45359237 : value;
}

function toMetricHeight(
  system: string,
  heightFeet: number,
  heightInches: number,
  heightCm: number,
) {
  return system === "imperial"
    ? (heightFeet * 12 + heightInches) * 2.54
    : heightCm;
}

export function BmrCalculatorClient() {
  const [sex, setSex] = useState("male");
  const [system, setSystem] = useState("imperial");
  const [age, setAge] = useState(35);
  const [weightPounds, setWeightPounds] = useState(180);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);
  const [weightKg, setWeightKg] = useState(82);
  const [heightCm, setHeightCm] = useState(178);

  const result = useMemo(
    () =>
      calculateBmr({
        sex: sex as "male" | "female",
        age,
        weightKg: toMetricWeight(system, system === "imperial" ? weightPounds : weightKg),
        heightCm: toMetricHeight(system, heightFeet, heightInches, heightCm),
      }),
    [age, heightCm, heightFeet, heightInches, sex, system, weightKg, weightPounds],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="bmr-sex"
            label="Sex"
            value={sex}
            onChange={setSex}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <CalculatorSelectField
            id="bmr-system"
            label="Measurement system"
            value={system}
            onChange={setSystem}
            options={[
              { value: "imperial", label: "Imperial" },
              { value: "metric", label: "Metric" },
            ]}
          />
          <CalculatorField
            id="bmr-age"
            label="Age"
            value={age}
            onChange={setAge}
            suffix="years"
            step={1}
          />
          {system === "imperial" ? (
            <>
              <CalculatorField
                id="bmr-weight-pounds"
                label="Weight"
                value={weightPounds}
                onChange={setWeightPounds}
                suffix="lb"
                step={0.1}
              />
              <CalculatorField
                id="bmr-height-feet"
                label="Height (feet)"
                value={heightFeet}
                onChange={setHeightFeet}
                step={1}
              />
              <CalculatorField
                id="bmr-height-inches"
                label="Height (inches)"
                value={heightInches}
                onChange={setHeightInches}
                step={1}
              />
            </>
          ) : (
            <>
              <CalculatorField
                id="bmr-weight-kg"
                label="Weight"
                value={weightKg}
                onChange={setWeightKg}
                suffix="kg"
                step={0.1}
              />
              <CalculatorField
                id="bmr-height-cm"
                label="Height"
                value={heightCm}
                onChange={setHeightCm}
                suffix="cm"
                step={0.1}
              />
            </>
          )}
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Estimated BMR"
        value={result ? `${formatNumber(result.bmr, 0)} kcal/day` : "Enter valid measurements"}
        detail="Basal metabolic rate is a resting-energy estimate, not a diagnosis or personal nutrition plan."
      />
    </div>
  );
}
