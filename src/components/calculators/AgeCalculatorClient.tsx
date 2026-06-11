"use client";

import { useMemo, useState } from "react";
import {
  calculateAge,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorDateField } from "@/components/calculators/CalculatorDateField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

const today = new Date().toISOString().slice(0, 10);

export function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("1995-05-15");
  const [asOfDate, setAsOfDate] = useState(today);

  const result = useMemo(
    () => calculateAge({ birthDate, asOfDate }),
    [asOfDate, birthDate],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorDateField
            id="birth-date"
            label="Birth date"
            value={birthDate}
            onChange={setBirthDate}
            max={today}
          />
          <CalculatorDateField
            id="as-of-date"
            label="As of date"
            value={asOfDate}
            onChange={setAsOfDate}
            max={today}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Calculated age"
          value={
            result
              ? `${result.years}y ${result.months}m ${result.days}d`
              : "Enter valid dates"
          }
          detail="This uses calendar years, months, and days between the two dates."
        />
        {result ? (
          <ResultGrid
            items={[
              { label: "Total days", value: formatNumber(result.totalDays, 0) },
              {
                label: "Total weeks",
                value: formatNumber(result.totalDays / 7, 2),
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
