"use client";

import { useMemo, useState } from "react";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorDateField } from "@/components/calculators/CalculatorDateField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import {
  convertGregorianToHijri,
  convertHijriToGregorian,
  getHijriMonthLength,
  hijriMonthNames,
} from "@/lib/hijri-date";

export type HijriConverterMode = "gregorian-to-hijri" | "hijri-to-gregorian";

const today = new Date().toISOString().slice(0, 10);

const modeOptions = [
  { value: "gregorian-to-hijri", label: "Gregorian to Hijri" },
  { value: "hijri-to-gregorian", label: "Hijri to Gregorian" },
];

const monthOptions = hijriMonthNames.map((monthName, index) => ({
  value: String(index + 1),
  label: `${index + 1}. ${monthName}`,
}));

const approximationNote =
  "Approximate result only. Islamic dates can vary by moon sighting, local practice, and the guidance of your local Islamic authority.";

export function HijriDateConverterClient({
  initialMode = "gregorian-to-hijri",
}: {
  initialMode?: HijriConverterMode;
}) {
  const [mode, setMode] = useState<HijriConverterMode>(initialMode);
  const [gregorianDate, setGregorianDate] = useState(today);
  const [hijriYear, setHijriYear] = useState(1447);
  const [hijriMonth, setHijriMonth] = useState("1");
  const [hijriDay, setHijriDay] = useState(1);

  const maxHijriDay = getHijriMonthLength(hijriYear, Number(hijriMonth)) || 30;

  const gregorianToHijriResult = useMemo(
    () => convertGregorianToHijri(gregorianDate),
    [gregorianDate],
  );

  const hijriToGregorianResult = useMemo(
    () =>
      convertHijriToGregorian({
        year: hijriYear,
        month: Number(hijriMonth),
        day: Math.min(hijriDay, maxHijriDay),
      }),
    [hijriDay, hijriMonth, hijriYear, maxHijriDay],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorSelectField
            id="converter-mode"
            label="Conversion direction"
            value={mode}
            onChange={(value) => setMode(value as HijriConverterMode)}
            options={modeOptions}
            helpText="Switch between Gregorian-to-Hijri and Hijri-to-Gregorian conversion."
          />

          {mode === "gregorian-to-hijri" ? (
            <CalculatorDateField
              id="gregorian-date"
              label="Gregorian date"
              value={gregorianDate}
              onChange={setGregorianDate}
            />
          ) : (
            <>
              <CalculatorField
                id="hijri-year"
                label="Hijri year"
                value={hijriYear}
                onChange={(value) => setHijriYear(Math.max(1, Math.round(value)))}
                step={1}
                min={1}
                helpText="Enter the Hijri year, such as 1447."
              />
              <CalculatorSelectField
                id="hijri-month"
                label="Hijri month"
                value={hijriMonth}
                onChange={setHijriMonth}
                options={monthOptions}
              />
              <CalculatorField
                id="hijri-day"
                label="Hijri day"
                value={hijriDay}
                onChange={(value) =>
                  setHijriDay(Math.min(maxHijriDay, Math.max(1, Math.round(value))))
                }
                step={1}
                min={1}
                helpText={`This approximation allows up to ${maxHijriDay} days in the selected month.`}
              />
            </>
          )}
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title={mode === "gregorian-to-hijri" ? "Approximate Hijri date" : "Approximate Gregorian date"}
          value={
            mode === "gregorian-to-hijri"
              ? gregorianToHijriResult?.formatted ?? "Enter a valid Gregorian date"
              : hijriToGregorianResult?.formatted ?? "Enter a valid Hijri date"
          }
          detail={
            mode === "gregorian-to-hijri"
              ? "This uses a tabular Hijri calendar model to estimate the corresponding Islamic date."
              : "This uses a tabular Hijri calendar model to estimate the corresponding Gregorian calendar date."
          }
          warning={approximationNote}
        />
        {mode === "gregorian-to-hijri" && gregorianToHijriResult ? (
          <ResultGrid
            items={[
              {
                label: "Hijri numeric",
                value: `${gregorianToHijriResult.year}-${String(
                  gregorianToHijriResult.month,
                ).padStart(2, "0")}-${String(gregorianToHijriResult.day).padStart(
                  2,
                  "0",
                )}`,
              },
              {
                label: "Month name",
                value: gregorianToHijriResult.monthName,
              },
            ]}
          />
        ) : null}
        {mode === "hijri-to-gregorian" && hijriToGregorianResult ? (
          <ResultGrid
            items={[
              {
                label: "Gregorian numeric",
                value: hijriToGregorianResult.dateString,
              },
              {
                label: "Weekday",
                value: hijriToGregorianResult.weekday,
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
