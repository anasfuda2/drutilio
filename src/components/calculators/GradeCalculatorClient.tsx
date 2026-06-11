"use client";

import { useMemo, useState } from "react";
import {
  calculateRequiredFinalExamScore,
  formatPercentage,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";

export function GradeCalculatorClient() {
  const [currentGrade, setCurrentGrade] = useState(88);
  const [completedWeight, setCompletedWeight] = useState(80);
  const [targetGrade, setTargetGrade] = useState(90);
  const [finalExamWeight, setFinalExamWeight] = useState(20);

  const result = useMemo(
    () =>
      calculateRequiredFinalExamScore({
        currentGrade,
        completedWeight,
        targetGrade,
        finalExamWeight,
      }),
    [completedWeight, currentGrade, finalExamWeight, targetGrade],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="current-grade"
            label="Current grade"
            value={currentGrade}
            onChange={setCurrentGrade}
            suffix="%"
            step={0.1}
          />
          <CalculatorField
            id="completed-weight"
            label="Completed coursework weight"
            value={completedWeight}
            onChange={setCompletedWeight}
            suffix="%"
            step={0.1}
          />
          <CalculatorField
            id="target-grade"
            label="Target final grade"
            value={targetGrade}
            onChange={setTargetGrade}
            suffix="%"
            step={0.1}
          />
          <CalculatorField
            id="final-weight"
            label="Final exam weight"
            value={finalExamWeight}
            onChange={setFinalExamWeight}
            suffix="%"
            step={0.1}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Required final exam score"
        value={
          result ? formatPercentage(result.requiredScore) : "Check weights"
        }
        detail="This assumes your current grade applies to the completed portion of the course."
        warning={
          !result
            ? "Completed coursework weight and final exam weight must both be positive and together cannot exceed 100%."
            : result.isAlreadyMet
              ? "You have already met the target based on the current numbers entered."
              : !result.isPossible
                ? "The required final exam score is above 100%, so the target is not reachable under these assumptions."
                : undefined
        }
      />
    </div>
  );
}
