"use client";

import { useMemo, useState } from "react";
import {
  convertUnits,
  formatNumber,
  UnitConverterCategory,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";

const unitOptions: Record<
  UnitConverterCategory,
  Array<{ value: string; label: string }>
> = {
  length: [
    { value: "mm", label: "Millimeters" },
    { value: "cm", label: "Centimeters" },
    { value: "m", label: "Meters" },
    { value: "km", label: "Kilometers" },
    { value: "in", label: "Inches" },
    { value: "ft", label: "Feet" },
    { value: "yd", label: "Yards" },
    { value: "mi", label: "Miles" },
  ],
  weight: [
    { value: "mg", label: "Milligrams" },
    { value: "g", label: "Grams" },
    { value: "kg", label: "Kilograms" },
    { value: "oz", label: "Ounces" },
    { value: "lb", label: "Pounds" },
  ],
  temperature: [
    { value: "C", label: "Celsius" },
    { value: "F", label: "Fahrenheit" },
    { value: "K", label: "Kelvin" },
  ],
};

export function UnitConverterClient() {
  const [category, setCategory] = useState<UnitConverterCategory>("length");
  const [value, setValue] = useState(10);
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");

  const convertedValue = useMemo(
    () => convertUnits({ category, value, fromUnit, toUnit }),
    [category, fromUnit, toUnit, value],
  );

  function changeCategory(nextCategory: string) {
    const normalized = nextCategory as UnitConverterCategory;
    setCategory(normalized);
    setFromUnit(unitOptions[normalized][0].value);
    setToUnit(unitOptions[normalized][1].value);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="unit-category"
            label="Conversion category"
            value={category}
            onChange={changeCategory}
            options={[
              { value: "length", label: "Length" },
              { value: "weight", label: "Weight" },
              { value: "temperature", label: "Temperature" },
            ]}
          />
          <CalculatorField
            id="unit-value"
            label="Value"
            value={value}
            onChange={setValue}
            step={0.01}
          />
          <CalculatorSelectField
            id="from-unit"
            label="From"
            value={fromUnit}
            onChange={setFromUnit}
            options={unitOptions[category]}
          />
          <CalculatorSelectField
            id="to-unit"
            label="To"
            value={toUnit}
            onChange={setToUnit}
            options={unitOptions[category]}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Converted value"
        value={
          convertedValue !== null ? formatNumber(convertedValue, 4) : "Select valid units"
        }
        detail="Temperature conversions use direct formulas. Length and weight conversions use standard base-unit factors."
      />
    </div>
  );
}
