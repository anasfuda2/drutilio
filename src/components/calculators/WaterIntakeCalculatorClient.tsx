"use client";

import { useMemo, useState } from "react";
import {
  calculateWaterIntake,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function WaterIntakeCalculatorClient() {
  const [system, setSystem] = useState("imperial");
  const [weightPounds, setWeightPounds] = useState(180);
  const [weightKg, setWeightKg] = useState(82);
  const [activityMinutes, setActivityMinutes] = useState(30);

  const result = useMemo(
    () =>
      calculateWaterIntake({
        weightPounds: system === "imperial" ? weightPounds : weightKg * 2.2046226218,
        activityMinutes,
      }),
    [activityMinutes, system, weightKg, weightPounds],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="water-system"
            label="Measurement system"
            value={system}
            onChange={setSystem}
            options={[
              { value: "imperial", label: "Imperial" },
              { value: "metric", label: "Metric" },
            ]}
          />
          {system === "imperial" ? (
            <CalculatorField
              id="water-weight-pounds"
              label="Weight"
              value={weightPounds}
              onChange={setWeightPounds}
              suffix="lb"
              step={0.1}
            />
          ) : (
            <CalculatorField
              id="water-weight-kg"
              label="Weight"
              value={weightKg}
              onChange={setWeightKg}
              suffix="kg"
              step={0.1}
            />
          )}
          <CalculatorField
            id="water-activity-minutes"
            label="Exercise per day"
            value={activityMinutes}
            onChange={setActivityMinutes}
            suffix="min"
            step={1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Estimated daily water intake"
        value={result ? `${formatNumber(result.totalOunces, 0)} oz/day` : "Enter valid details"}
        detail="This is a simple hydration estimate, not a medical hydration prescription."
      >
        {result ? (
          <ResultGrid
            items={[
              {
                label: "Liters per day",
                value: `${formatNumber(result.totalLiters, 2)} L`,
              },
              {
                label: "Base estimate",
                value: `${formatNumber(result.baseOunces, 0)} oz`,
              },
              {
                label: "Activity adjustment",
                value: `${formatNumber(result.activityOunces, 0)} oz`,
              },
            ]}
          />
        ) : null}
      </CalculatorResult>
    </div>
  );
}
