"use client";

import { useMemo, useState } from "react";
import {
  calculateDateDifference,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorDateField } from "@/components/calculators/CalculatorDateField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function DateDifferenceCalculatorClient() {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2025-01-01");

  const result = useMemo(
    () => calculateDateDifference({ startDate, endDate }),
    [endDate, startDate],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorDateField
            id="start-date"
            label="Start date"
            value={startDate}
            onChange={setStartDate}
          />
          <CalculatorDateField
            id="end-date"
            label="End date"
            value={endDate}
            onChange={setEndDate}
          />
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Calendar difference"
          value={
            result
              ? `${result.years}y ${result.months}m ${result.days}d`
              : "Enter valid dates"
          }
          detail="The calculator also shows total days and weeks between the dates."
        />
        {result ? (
          <ResultGrid
            items={[
              { label: "Total days", value: formatNumber(result.totalDays, 0) },
              { label: "Total weeks", value: formatNumber(result.totalWeeks, 2) },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
