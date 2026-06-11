export type CalculatorStatus = "Available now" | "Featured" | "Popular";
export type ToolCategory =
  | "Finance"
  | "Health"
  | "Education"
  | "Everyday Tools";

export type CalculatorItem = {
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  status: CalculatorStatus;
};

export const toolCategories: ToolCategory[] = [
  "Finance",
  "Health",
  "Education",
  "Everyday Tools",
];

export const categoryDescriptions: Record<ToolCategory, string> = {
  Finance:
    "Mortgage, loan, retirement, savings, and interest tools for everyday US financial planning.",
  Health:
    "Health-oriented utility tools for quick personal measurements and educational estimates.",
  Education:
    "Academic tools for GPA tracking, grade planning, and education-related estimates.",
  "Everyday Tools":
    "General-purpose tools for dates, percentages, conversions, and common daily calculations.",
};

export const calculators: CalculatorItem[] = [
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    description:
      "Estimate monthly principal and interest payments and compare borrowing scenarios.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "auto-loan-calculator",
    title: "Auto Loan Calculator",
    description:
      "Compare monthly payment and total interest across vehicle financing scenarios.",
    category: "Finance",
    status: "Popular",
  },
  {
    slug: "retirement-calculator",
    title: "Retirement Calculator",
    description:
      "Project future savings balances using contributions, time, and return assumptions.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    description:
      "Estimate the monthly contribution needed to hit a target amount on schedule.",
    category: "Finance",
    status: "Popular",
  },
  {
    slug: "student-loan-calculator",
    title: "Student Loan Calculator",
    description:
      "Estimate payoff time and lifetime interest based on balance, rate, and payment size.",
    category: "Finance",
    status: "Available now",
  },
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    description:
      "Project growth from principal, recurring contributions, annual return, and compounding frequency.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "Estimate body mass index using either imperial or metric measurements.",
    category: "Health",
    status: "Popular",
  },
  {
    slug: "gpa-calculator",
    title: "GPA Calculator",
    description:
      "Calculate weighted GPA from course grades and credit hours.",
    category: "Education",
    status: "Featured",
  },
  {
    slug: "grade-calculator",
    title: "Grade Calculator",
    description:
      "Estimate the score needed on a final exam to reach a target course grade.",
    category: "Education",
    status: "Available now",
  },
  {
    slug: "age-calculator",
    title: "Age Calculator",
    description:
      "Calculate age in years, months, and days from a birth date and comparison date.",
    category: "Everyday Tools",
    status: "Featured",
  },
  {
    slug: "date-difference-calculator",
    title: "Date Difference Calculator",
    description:
      "Measure the time between two dates in days, weeks, and calendar years-months-days.",
    category: "Everyday Tools",
    status: "Popular",
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    description:
      "Find what a percentage of a number equals using a quick two-input calculation.",
    category: "Everyday Tools",
    status: "Available now",
  },
  {
    slug: "percentage-increase-calculator",
    title: "Percentage Increase Calculator",
    description:
      "Measure the increase amount and percentage change from an original value to a higher value.",
    category: "Everyday Tools",
    status: "Available now",
  },
  {
    slug: "percentage-decrease-calculator",
    title: "Percentage Decrease Calculator",
    description:
      "Measure the decrease amount and percentage change from an original value to a lower value.",
    category: "Everyday Tools",
    status: "Available now",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    description:
      "Convert between common length, weight, and temperature units in one place.",
    category: "Everyday Tools",
    status: "Popular",
  },
];

export const featuredCalculators = calculators.filter((calculator) =>
  [
    "mortgage-calculator",
    "compound-interest-calculator",
    "bmi-calculator",
    "age-calculator",
    "gpa-calculator",
    "unit-converter",
  ].includes(calculator.slug),
);

export function getCalculatorBySlug(slug: string) {
  return calculators.find((calculator) => calculator.slug === slug);
}

export function getCalculatorsByCategory(category: ToolCategory) {
  return calculators.filter((calculator) => calculator.category === category);
}

export function getRelatedCalculators(
  currentSlug: string,
  limit = 3,
): CalculatorItem[] {
  const currentTool = getCalculatorBySlug(currentSlug);

  return calculators
    .filter((calculator) => calculator.slug !== currentSlug)
    .sort((left, right) => {
      const leftScore = left.category === currentTool?.category ? 0 : 1;
      const rightScore = right.category === currentTool?.category ? 0 : 1;

      if (leftScore !== rightScore) {
        return leftScore - rightScore;
      }

      return left.title.localeCompare(right.title);
    })
    .slice(0, limit);
}

export function clampNonNegative(value: number) {
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }

  return value;
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

export function formatPercentage(value: number, maximumFractionDigits = 2) {
  return `${value.toFixed(maximumFractionDigits)}%`;
}

export function formatMonthsAsYearsMonths(totalMonths: number) {
  if (!Number.isFinite(totalMonths) || totalMonths <= 0) {
    return "0 months";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} month${months === 1 ? "" : "s"}`;
  }

  if (months === 0) {
    return `${years} year${years === 1 ? "" : "s"}`;
  }

  return `${years} year${years === 1 ? "" : "s"} ${months} month${months === 1 ? "" : "s"}`;
}

function monthlyRateFromAnnual(annualRatePercent: number) {
  return clampNonNegative(annualRatePercent) / 100 / 12;
}

function utcDateFromInput(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(Date.UTC(year, month - 1, day));
}

export function calculateMortgagePayment({
  homePrice,
  downPayment,
  annualInterestRate,
  loanTermYears,
}: {
  homePrice: number;
  downPayment: number;
  annualInterestRate: number;
  loanTermYears: number;
}) {
  const principal = Math.max(
    0,
    clampNonNegative(homePrice) - clampNonNegative(downPayment),
  );
  const totalMonths = Math.max(
    1,
    Math.round(clampNonNegative(loanTermYears) * 12),
  );
  const monthlyRate = monthlyRateFromAnnual(annualInterestRate);

  if (monthlyRate === 0) {
    return {
      principal,
      monthlyPayment: principal / totalMonths,
      totalMonths,
    };
  }

  const factor = Math.pow(1 + monthlyRate, totalMonths);
  const monthlyPayment = principal * ((monthlyRate * factor) / (factor - 1));

  return {
    principal,
    monthlyPayment,
    totalMonths,
  };
}

export function calculateAutoLoan({
  vehiclePrice,
  downPayment,
  tradeInValue,
  annualInterestRate,
  loanTermYears,
}: {
  vehiclePrice: number;
  downPayment: number;
  tradeInValue: number;
  annualInterestRate: number;
  loanTermYears: number;
}) {
  const principal = Math.max(
    0,
    clampNonNegative(vehiclePrice) -
      clampNonNegative(downPayment) -
      clampNonNegative(tradeInValue),
  );
  const totalMonths = Math.max(
    1,
    Math.round(clampNonNegative(loanTermYears) * 12),
  );
  const monthlyRate = monthlyRateFromAnnual(annualInterestRate);

  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = principal / totalMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, totalMonths);
    monthlyPayment = principal * ((monthlyRate * factor) / (factor - 1));
  }

  const totalPaid = monthlyPayment * totalMonths;

  return {
    principal,
    monthlyPayment,
    totalInterest: Math.max(0, totalPaid - principal),
    totalMonths,
  };
}

export function calculateRetirementProjection({
  currentSavings,
  monthlyContribution,
  annualReturn,
  yearsUntilRetirement,
}: {
  currentSavings: number;
  monthlyContribution: number;
  annualReturn: number;
  yearsUntilRetirement: number;
}) {
  const startingBalance = clampNonNegative(currentSavings);
  const contribution = clampNonNegative(monthlyContribution);
  const totalMonths = Math.max(
    1,
    Math.round(clampNonNegative(yearsUntilRetirement) * 12),
  );
  const monthlyRate = monthlyRateFromAnnual(annualReturn);

  if (monthlyRate === 0) {
    return {
      projectedBalance: startingBalance + contribution * totalMonths,
      totalMonths,
    };
  }

  const growthFactor = Math.pow(1 + monthlyRate, totalMonths);
  const futureCurrentSavings = startingBalance * growthFactor;
  const futureContributions = contribution * ((growthFactor - 1) / monthlyRate);

  return {
    projectedBalance: futureCurrentSavings + futureContributions,
    totalMonths,
  };
}

export function calculateSavingsGoal({
  targetAmount,
  currentSavings,
  monthsToSave,
  annualReturn,
}: {
  targetAmount: number;
  currentSavings: number;
  monthsToSave: number;
  annualReturn: number;
}) {
  const goal = clampNonNegative(targetAmount);
  const current = clampNonNegative(currentSavings);
  const totalMonths = Math.max(1, Math.round(clampNonNegative(monthsToSave)));
  const monthlyRate = monthlyRateFromAnnual(annualReturn);

  if (goal <= current) {
    return {
      requiredMonthlyContribution: 0,
      totalMonths,
      futureValueOfCurrentSavings: current,
    };
  }

  if (monthlyRate === 0) {
    return {
      requiredMonthlyContribution: Math.max(0, (goal - current) / totalMonths),
      totalMonths,
      futureValueOfCurrentSavings: current,
    };
  }

  const futureValueOfCurrentSavings =
    current * Math.pow(1 + monthlyRate, totalMonths);
  const remainingGap = Math.max(0, goal - futureValueOfCurrentSavings);
  const annuityFactor =
    (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;

  return {
    requiredMonthlyContribution: remainingGap / annuityFactor,
    totalMonths,
    futureValueOfCurrentSavings,
  };
}

export function calculateStudentLoan({
  loanBalance,
  annualInterestRate,
  monthlyPayment,
}: {
  loanBalance: number;
  annualInterestRate: number;
  monthlyPayment: number;
}) {
  const principal = clampNonNegative(loanBalance);
  const payment = clampNonNegative(monthlyPayment);
  const monthlyRate = monthlyRateFromAnnual(annualInterestRate);

  if (principal === 0) {
    return {
      canRepay: true,
      payoffMonths: 0,
      totalInterest: 0,
    };
  }

  if (payment === 0) {
    return {
      canRepay: false,
      payoffMonths: Number.POSITIVE_INFINITY,
      totalInterest: Number.POSITIVE_INFINITY,
    };
  }

  if (monthlyRate === 0) {
    const payoffMonths = Math.ceil(principal / payment);

    return {
      canRepay: true,
      payoffMonths,
      totalInterest: 0,
    };
  }

  const firstMonthInterest = principal * monthlyRate;

  if (payment <= firstMonthInterest) {
    return {
      canRepay: false,
      payoffMonths: Number.POSITIVE_INFINITY,
      totalInterest: Number.POSITIVE_INFINITY,
    };
  }

  const payoffMonths = Math.ceil(
    -Math.log(1 - (monthlyRate * principal) / payment) /
      Math.log(1 + monthlyRate),
  );

  const totalPaid = payment * payoffMonths;

  return {
    canRepay: true,
    payoffMonths,
    totalInterest: Math.max(0, totalPaid - principal),
  };
}

export function calculateAge({
  birthDate,
  asOfDate,
}: {
  birthDate: string;
  asOfDate: string;
}) {
  const birth = utcDateFromInput(birthDate);
  const compare = utcDateFromInput(asOfDate);

  if (!birth || !compare || compare < birth) {
    return null;
  }

  let years = compare.getUTCFullYear() - birth.getUTCFullYear();
  let months = compare.getUTCMonth() - birth.getUTCMonth();
  let days = compare.getUTCDate() - birth.getUTCDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(
      Date.UTC(compare.getUTCFullYear(), compare.getUTCMonth(), 0),
    );
    days += previousMonth.getUTCDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (compare.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24),
  );

  return { years, months, days, totalDays };
}

export function calculateDateDifference({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const start = utcDateFromInput(startDate);
  const end = utcDateFromInput(endDate);

  if (!start || !end) {
    return null;
  }

  const [earlier, later] = start <= end ? [start, end] : [end, start];
  let years = later.getUTCFullYear() - earlier.getUTCFullYear();
  let months = later.getUTCMonth() - earlier.getUTCMonth();
  let days = later.getUTCDate() - earlier.getUTCDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(
      Date.UTC(later.getUTCFullYear(), later.getUTCMonth(), 0),
    );
    days += previousMonth.getUTCDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor(
    (later.getTime() - earlier.getTime()) / (1000 * 60 * 60 * 24),
  );

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks: totalDays / 7,
    isReversed: start > end,
  };
}

export function calculatePercentageOf({
  percent,
  value,
}: {
  percent: number;
  value: number;
}) {
  return (clampNonNegative(percent) / 100) * clampNonNegative(value);
}

export function calculatePercentageChange({
  originalValue,
  newValue,
}: {
  originalValue: number;
  newValue: number;
}) {
  const original = clampNonNegative(originalValue);
  const current = clampNonNegative(newValue);

  if (original === 0) {
    return {
      difference: current,
      percentageChange: current === 0 ? 0 : Number.POSITIVE_INFINITY,
    };
  }

  const difference = current - original;

  return {
    difference,
    percentageChange: (difference / original) * 100,
  };
}

export function calculateBmiImperial({
  weightPounds,
  heightFeet,
  heightInches,
}: {
  weightPounds: number;
  heightFeet: number;
  heightInches: number;
}) {
  const totalInches =
    clampNonNegative(heightFeet) * 12 + clampNonNegative(heightInches);
  const weight = clampNonNegative(weightPounds);

  if (totalInches <= 0 || weight <= 0) {
    return null;
  }

  const bmi = (weight / (totalInches * totalInches)) * 703;
  return { bmi, category: getBmiCategory(bmi) };
}

export function calculateBmiMetric({
  weightKg,
  heightCm,
}: {
  weightKg: number;
  heightCm: number;
}) {
  const heightMeters = clampNonNegative(heightCm) / 100;
  const weight = clampNonNegative(weightKg);

  if (heightMeters <= 0 || weight <= 0) {
    return null;
  }

  const bmi = weight / (heightMeters * heightMeters);
  return { bmi, category: getBmiCategory(bmi) };
}

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export function calculateCompoundInterest({
  principal,
  monthlyContribution,
  annualRate,
  years,
  compoundsPerYear,
}: {
  principal: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
  compoundsPerYear: number;
}) {
  const startingPrincipal = clampNonNegative(principal);
  const contribution = clampNonNegative(monthlyContribution);
  const totalMonths = Math.max(1, Math.round(clampNonNegative(years) * 12));
  const compoundFrequency = Math.max(1, Math.round(clampNonNegative(compoundsPerYear)));
  const annualDecimal = clampNonNegative(annualRate) / 100;
  const effectiveMonthlyRate =
    annualDecimal === 0
      ? 0
      : Math.pow(1 + annualDecimal / compoundFrequency, compoundFrequency / 12) -
        1;

  let balance = startingPrincipal;

  for (let month = 0; month < totalMonths; month += 1) {
    balance = balance * (1 + effectiveMonthlyRate) + contribution;
  }

  const totalContributions = contribution * totalMonths;
  const totalDeposits = startingPrincipal + totalContributions;

  return {
    futureValue: balance,
    totalContributions,
    interestEarned: Math.max(0, balance - totalDeposits),
    totalMonths,
  };
}

const gradePoints: Record<string, number> = {
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3,
  "B-": 2.7,
  "C+": 2.3,
  C: 2,
  "C-": 1.7,
  "D+": 1.3,
  D: 1,
  F: 0,
};

export const gradeScale = Object.keys(gradePoints);

export type GpaCourse = {
  id: string;
  grade: string;
  credits: number;
};

export function calculateGpa(courses: GpaCourse[]) {
  const validCourses = courses.filter(
    (course) => clampNonNegative(course.credits) > 0 && gradePoints[course.grade] !== undefined,
  );

  const totalCredits = validCourses.reduce(
    (sum, course) => sum + clampNonNegative(course.credits),
    0,
  );

  if (totalCredits === 0) {
    return null;
  }

  const totalGradePoints = validCourses.reduce(
    (sum, course) =>
      sum + gradePoints[course.grade] * clampNonNegative(course.credits),
    0,
  );

  return {
    gpa: totalGradePoints / totalCredits,
    totalCredits,
  };
}

export function calculateRequiredFinalExamScore({
  currentGrade,
  completedWeight,
  targetGrade,
  finalExamWeight,
}: {
  currentGrade: number;
  completedWeight: number;
  targetGrade: number;
  finalExamWeight: number;
}) {
  const current = clampNonNegative(currentGrade);
  const completed = clampNonNegative(completedWeight) / 100;
  const target = clampNonNegative(targetGrade);
  const finalWeight = clampNonNegative(finalExamWeight) / 100;

  if (finalWeight <= 0 || completed <= 0 || completed + finalWeight > 1.0001) {
    return null;
  }

  const requiredScore = (target - current * completed) / finalWeight;

  return {
    requiredScore,
    isPossible: requiredScore <= 100,
    isAlreadyMet: requiredScore <= 0,
  };
}

export type UnitConverterCategory = "length" | "weight" | "temperature";

const lengthFactors: Record<string, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

const weightFactors: Record<string, number> = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  oz: 28.349523125,
  lb: 453.59237,
};

export function convertUnits({
  category,
  value,
  fromUnit,
  toUnit,
}: {
  category: UnitConverterCategory;
  value: number;
  fromUnit: string;
  toUnit: string;
}) {
  const amount = value;

  if (!Number.isFinite(amount)) {
    return null;
  }

  if (category === "length") {
    const fromFactor = lengthFactors[fromUnit];
    const toFactor = lengthFactors[toUnit];
    if (!fromFactor || !toFactor) return null;
    return (amount * fromFactor) / toFactor;
  }

  if (category === "weight") {
    const fromFactor = weightFactors[fromUnit];
    const toFactor = weightFactors[toUnit];
    if (!fromFactor || !toFactor) return null;
    return (amount * fromFactor) / toFactor;
  }

  if (category === "temperature") {
    return convertTemperature(amount, fromUnit, toUnit);
  }

  return null;
}

function convertTemperature(value: number, fromUnit: string, toUnit: string) {
  let celsius = value;

  if (fromUnit === "F") celsius = ((value - 32) * 5) / 9;
  if (fromUnit === "K") celsius = value - 273.15;

  if (toUnit === "C") return celsius;
  if (toUnit === "F") return (celsius * 9) / 5 + 32;
  if (toUnit === "K") return celsius + 273.15;

  return null;
}
