"use client";

import { useMemo, useState } from "react";
import {
  calculateStudyTimePlan,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { ResultGrid } from "@/components/calculators/ResultGrid";

export function StudyTimeCalculatorClient() {
  const [numberOfSubjects, setNumberOfSubjects] = useState(5);
  const [targetStudyHoursPerWeek, setTargetStudyHoursPerWeek] = useState(15);
  const [availableDays, setAvailableDays] = useState(5);

  const result = useMemo(
    () =>
      calculateStudyTimePlan({
        numberOfSubjects,
        targetStudyHoursPerWeek,
        availableDays,
      }),
    [availableDays, numberOfSubjects, targetStudyHoursPerWeek],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="study-subject-count"
            label="Number of subjects"
            value={numberOfSubjects}
            onChange={setNumberOfSubjects}
            step={1}
          />
          <CalculatorField
            id="study-hours-target"
            label="Target study hours per week"
            value={targetStudyHoursPerWeek}
            onChange={setTargetStudyHoursPerWeek}
            suffix="hrs"
            step={0.5}
          />
          <CalculatorField
            id="study-available-days"
            label="Available study days"
            value={availableDays}
            onChange={setAvailableDays}
            suffix="days"
            step={1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Recommended weekly study plan"
        value={`${formatNumber(result.hoursPerDay, 1)} hrs/day`}
        detail="This is a simplified scheduling estimate designed to help you turn a weekly goal into a workable routine."
      >
        <ResultGrid
          items={[
            {
              label: "Per subject per week",
              value: `${formatNumber(result.hoursPerSubjectPerWeek, 1)} hrs`,
            },
            {
              label: "Suggested sessions",
              value: `${formatNumber(result.sessionsPerWeek, 0)} sessions`,
            },
            {
              label: "Average session length",
              value: `${formatNumber(result.minutesPerSession, 0)} min`,
            },
            {
              label: "Study days",
              value: formatNumber(result.studyDays, 0),
            },
          ]}
        />

        <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/35 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Simple schedule outline
          </p>
          <div className="mt-3 grid gap-2">
            {result.suggestedWeeklyOutline.map((day) => (
              <div
                key={day.day}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/45 px-3 py-2 text-sm text-slate-200"
              >
                <span>{day.day}</span>
                <span>{formatNumber(day.hours, 1)} hrs</span>
              </div>
            ))}
          </div>
        </div>
      </CalculatorResult>
    </div>
  );
}
