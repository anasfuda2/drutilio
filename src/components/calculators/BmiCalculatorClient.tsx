"use client";

import { useMemo, useState } from "react";
import {
  calculateBmiImperial,
  calculateBmiMetric,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

export function BmiCalculatorClient() {
  const [system, setSystem] = useState("imperial");
  const [weightPounds, setWeightPounds] = useState(180);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);
  const [weightKg, setWeightKg] = useState(82);
  const [heightCm, setHeightCm] = useState(178);

  const result = useMemo(() => {
    return system === "imperial"
      ? calculateBmiImperial({ weightPounds, heightFeet, heightInches })
      : calculateBmiMetric({ weightKg, heightCm });
  }, [heightCm, heightFeet, heightInches, system, weightKg, weightPounds]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="bmi-system"
            label="Measurement system"
            value={system}
            onChange={setSystem}
            options={[
              { value: "imperial", label: "Imperial (lb, ft, in)" },
              { value: "metric", label: "Metric (kg, cm)" },
            ]}
          />
          {system === "imperial" ? (
            <>
              <CalculatorField
                id="weight-pounds"
                label="Weight"
                value={weightPounds}
                onChange={setWeightPounds}
                suffix="lb"
                step={1}
              />
              <CalculatorField
                id="height-feet"
                label="Height (feet)"
                value={heightFeet}
                onChange={setHeightFeet}
                step={1}
              />
              <CalculatorField
                id="height-inches"
                label="Height (inches)"
                value={heightInches}
                onChange={setHeightInches}
                step={1}
              />
            </>
          ) : (
            <>
              <CalculatorField
                id="weight-kg"
                label="Weight"
                value={weightKg}
                onChange={setWeightKg}
                suffix="kg"
                step={0.1}
              />
              <CalculatorField
                id="height-cm"
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
        title="Estimated BMI"
        value={result ? formatNumber(result.bmi, 1) : "Enter valid measurements"}
        detail={result ? `Category: ${result.category}.` : "BMI needs both a valid weight and height."}
      />
    </div>
  );
}
