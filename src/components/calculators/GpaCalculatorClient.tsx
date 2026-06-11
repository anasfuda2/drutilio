"use client";

import { useMemo, useState } from "react";
import {
  calculateGpa,
  GpaCourse,
  gradeScale,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";

const courseOptions = gradeScale.map((grade) => ({ value: grade, label: grade }));

function createCourse(id: string, grade = "A", credits = 3): GpaCourse {
  return { id, grade, credits };
}

export function GpaCalculatorClient() {
  const [courses, setCourses] = useState<GpaCourse[]>([
    createCourse("course-1", "A", 3),
    createCourse("course-2", "B+", 4),
    createCourse("course-3", "A-", 3),
  ]);

  const result = useMemo(() => calculateGpa(courses), [courses]);

  function updateCourse(id: string, field: "grade" | "credits", value: string | number) {
    setCourses((current) =>
      current.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  }

  function addCourse() {
    setCourses((current) => [
      ...current,
      createCourse(`course-${current.length + 1}`, "B", 3),
    ]);
  }

  function removeCourse(id: string) {
    setCourses((current) =>
      current.length > 1 ? current.filter((course) => course.id !== id) : current,
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <CalculatorPanel>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Course {index + 1}
                </p>
                <button
                  type="button"
                  onClick={() => removeCourse(course.id)}
                  className="text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  Remove
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <CalculatorSelectField
                  id={`${course.id}-grade`}
                  label="Letter grade"
                  value={course.grade}
                  onChange={(value) => updateCourse(course.id, "grade", value)}
                  options={courseOptions}
                />
                <CalculatorField
                  id={`${course.id}-credits`}
                  label="Credits"
                  value={course.credits}
                  onChange={(value) => updateCourse(course.id, "credits", value)}
                  step={0.5}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCourse}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
          >
            Add course
          </button>
        </div>
      </CalculatorPanel>

      <div>
        <CalculatorResult
          title="Estimated GPA"
          value={result ? formatNumber(result.gpa, 2) : "Add valid courses"}
          detail="GPA is weighted by the credit hours entered for each course."
        />
        {result ? (
          <ResultGrid
            items={[
              {
                label: "Counted credits",
                value: formatNumber(result.totalCredits, 1),
              },
              {
                label: "Courses entered",
                value: formatNumber(courses.length, 0),
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
