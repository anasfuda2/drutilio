"use client";

import { useMemo, useState } from "react";
import {
  calculateBodyFatPercentage,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

function measurementToInches(system: string, value: number) {
  return system === "imperial" ? value : value / 2.54;
}

export function BodyFatCalculatorClient() {
  const [sex, setSex] = useState("male");
  const [system, setSystem] = useState("imperial");
  const [height, setHeight] = useState(70);
  const [neck, setNeck] = useState(16);
  const [waist, setWaist] = useState(34);
  const [hip, setHip] = useState(38);

  const result = useMemo(
    () =>
      calculateBodyFatPercentage({
        sex: sex as "male" | "female",
        heightInches: measurementToInches(system, height),
        neckInches: measurementToInches(system, neck),
        waistInches: measurementToInches(system, waist),
        hipInches: sex === "female" ? measurementToInches(system, hip) : 0,
      }),
    [height, hip, neck, sex, system, waist],
  );

  const suffix = system === "imperial" ? "in" : "cm";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="body-fat-sex"
            label="Sex"
            value={sex}
            onChange={setSex}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <CalculatorSelectField
            id="body-fat-system"
            label="Measurement system"
            value={system}
            onChange={setSystem}
            options={[
              { value: "imperial", label: "Imperial" },
              { value: "metric", label: "Metric" },
            ]}
          />
          <CalculatorField
            id="body-fat-height"
            label="Height"
            value={height}
            onChange={setHeight}
            suffix={suffix}
            step={0.1}
          />
          <CalculatorField
            id="body-fat-neck"
            label="Neck circumference"
            value={neck}
            onChange={setNeck}
            suffix={suffix}
            step={0.1}
          />
          <CalculatorField
            id="body-fat-waist"
            label="Waist circumference"
            value={waist}
            onChange={setWaist}
            suffix={suffix}
            step={0.1}
          />
          {sex === "female" ? (
            <CalculatorField
              id="body-fat-hip"
              label="Hip circumference"
              value={hip}
              onChange={setHip}
              suffix={suffix}
              step={0.1}
            />
          ) : null}
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Estimated body fat"
        value={result ? `${formatNumber(result.bodyFatPercentage, 1)}%` : "Enter valid measurements"}
        detail={
          result
            ? `Reference category: ${result.category}.`
            : "Circumference-based methods need realistic positive measurements."
        }
      />
    </div>
  );
}
