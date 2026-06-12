"use client";

import { useMemo, useState } from "react";
import {
  calculateCalorieNeeds,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";

function getWeightKg(system: string, weight: number) {
  return system === "imperial" ? weight * 0.45359237 : weight;
}

function getHeightCm(
  system: string,
  heightFeet: number,
  heightInches: number,
  heightCm: number,
) {
  return system === "imperial"
    ? (heightFeet * 12 + heightInches) * 2.54
    : heightCm;
}

export function CalorieCalculatorClient() {
  const [sex, setSex] = useState("male");
  const [system, setSystem] = useState("imperial");
  const [age, setAge] = useState(35);
  const [weightPounds, setWeightPounds] = useState(180);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);
  const [weightKg, setWeightKg] = useState(82);
  const [heightCm, setHeightCm] = useState(178);
  const [activityLevel, setActivityLevel] = useState("moderately-active");

  const result = useMemo(
    () =>
      calculateCalorieNeeds({
        sex: sex as "male" | "female",
        age,
        weightKg: getWeightKg(system, system === "imperial" ? weightPounds : weightKg),
        heightCm: getHeightCm(system, heightFeet, heightInches, heightCm),
        activityLevel,
      }),
    [
      activityLevel,
      age,
      heightCm,
      heightFeet,
      heightInches,
      sex,
      system,
      weightKg,
      weightPounds,
    ],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="calorie-sex"
            label="Sex"
            value={sex}
            onChange={setSex}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <CalculatorSelectField
            id="calorie-system"
            label="Measurement system"
            value={system}
            onChange={setSystem}
            options={[
              { value: "imperial", label: "Imperial" },
              { value: "metric", label: "Metric" },
            ]}
          />
          <CalculatorField
            id="calorie-age"
            label="Age"
            value={age}
            onChange={setAge}
            suffix="years"
            step={1}
          />
          <CalculatorSelectField
            id="calorie-activity"
            label="Activity level"
            value={activityLevel}
            onChange={setActivityLevel}
            options={[
              { value: "sedentary", label: "Sedentary" },
              { value: "lightly-active", label: "Lightly active" },
              { value: "moderately-active", label: "Moderately active" },
              { value: "very-active", label: "Very active" },
              { value: "extra-active", label: "Extra active" },
            ]}
          />

          {system === "imperial" ? (
            <>
              <CalculatorField
                id="calorie-weight-pounds"
                label="Weight"
                value={weightPounds}
                onChange={setWeightPounds}
                suffix="lb"
                step={0.1}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <CalculatorField
                  id="calorie-height-feet"
                  label="Height (feet)"
                  value={heightFeet}
                  onChange={setHeightFeet}
                  step={1}
                />
                <CalculatorField
                  id="calorie-height-inches"
                  label="Height (inches)"
                  value={heightInches}
                  onChange={setHeightInches}
                  step={1}
                />
              </div>
            </>
          ) : (
            <>
              <CalculatorField
                id="calorie-weight-kg"
                label="Weight"
                value={weightKg}
                onChange={setWeightKg}
                suffix="kg"
                step={0.1}
              />
              <CalculatorField
                id="calorie-height-cm"
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
        title="Estimated maintenance calories"
        value={result ? `${formatNumber(result.maintenanceCalories, 0)} kcal/day` : "Enter valid details"}
        detail={
          result
            ? "Use the maintenance figure as a rough starting point, not a medical prescription."
            : "Age, height, and weight all need valid positive values."
        }
      >
        {result ? (
          <ResultGrid
            items={[
              {
                label: "Estimated BMR",
                value: `${formatNumber(result.bmr, 0)} kcal/day`,
              },
              {
                label: "Mild fat-loss target",
                value: `${formatNumber(result.mildWeightLossCalories, 0)} kcal/day`,
              },
              {
                label: "Mild gain target",
                value: `${formatNumber(result.mildWeightGainCalories, 0)} kcal/day`,
              },
              {
                label: "Activity multiplier",
                value: formatNumber(result.activityMultiplier, 3),
              },
            ]}
          />
        ) : null}
      </CalculatorResult>
    </div>
  );
}
