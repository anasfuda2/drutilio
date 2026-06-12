export type CalculatorStatus = "Available now" | "Featured" | "Popular";
export type ToolCategory =
  | "Finance"
  | "Health"
  | "Education"
  | "Everyday Tools";

export type TaxFilingStatus =
  | "single"
  | "married-filing-jointly"
  | "married-filing-separately"
  | "head-of-household";

export type IraAccountType = "traditional" | "roth";

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
    slug: "zakat-calculator",
    title: "Zakat Calculator",
    description:
      "Estimate net zakatable assets and 2.5% zakat due across savings, metals, investments, and deductible debts.",
    category: "Finance",
    status: "Available now",
  },
  {
    slug: "federal-income-tax-calculator",
    title: "Federal Income Tax Calculator",
    description:
      "Estimate federal taxable income, bracket-based tax, and effective rate using a simplified US tax framework.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "self-employment-tax-calculator",
    title: "Self-Employment Tax Calculator",
    description:
      "Estimate self-employment tax on net business income using a simplified US tax approach.",
    category: "Finance",
    status: "Popular",
  },
  {
    slug: "tax-refund-estimator",
    title: "Tax Refund Estimator",
    description:
      "Estimate whether federal withholding may lead to a refund or amount due under a simplified US tax model.",
    category: "Finance",
    status: "Available now",
  },
  {
    slug: "401k-calculator",
    title: "401(k) Calculator",
    description:
      "Project long-term 401(k) growth using salary, employee contribution, employer match, return assumptions, and time.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "ira-calculator",
    title: "IRA Calculator",
    description:
      "Project IRA growth using current balance, annual contributions, return assumptions, and time horizon.",
    category: "Finance",
    status: "Popular",
  },
  {
    slug: "retirement-income-calculator",
    title: "Retirement Income Calculator",
    description:
      "Estimate first-year retirement income, annual withdrawals, and how savings may hold up over time under simplified assumptions.",
    category: "Finance",
    status: "Featured",
  },
  {
    slug: "mortgage-affordability-calculator",
    title: "Mortgage Affordability Calculator",
    description:
      "Estimate a simplified affordable home price range from income, debts, down payment, rate, and loan term assumptions.",
    category: "Finance",
    status: "Popular",
  },
  {
    slug: "mortgage-refinance-calculator",
    title: "Mortgage Refinance Calculator",
    description:
      "Compare current and refinanced mortgage payments, monthly savings, and a simplified break-even period.",
    category: "Finance",
    status: "Available now",
  },
  {
    slug: "closing-costs-calculator",
    title: "Closing Costs Calculator",
    description:
      "Estimate mortgage closing costs and cash to close using purchase price, down payment, fees, and prepaid-cost assumptions.",
    category: "Finance",
    status: "Available now",
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
    slug: "calorie-calculator",
    title: "Calorie Calculator",
    description:
      "Estimate maintenance calories and simple gain-or-loss targets using age, sex, height, weight, and activity assumptions.",
    category: "Health",
    status: "Featured",
  },
  {
    slug: "bmr-calculator",
    title: "BMR Calculator",
    description:
      "Estimate basal metabolic rate using a common BMR formula and simple body measurements.",
    category: "Health",
    status: "Popular",
  },
  {
    slug: "body-fat-calculator",
    title: "Body Fat Calculator",
    description:
      "Estimate body fat percentage using a simplified circumference-based method.",
    category: "Health",
    status: "Available now",
  },
  {
    slug: "ideal-weight-calculator",
    title: "Ideal Weight Calculator",
    description:
      "Estimate a reference weight using height, sex, and a healthy-BMI comparison range.",
    category: "Health",
    status: "Available now",
  },
  {
    slug: "water-intake-calculator",
    title: "Water Intake Calculator",
    description:
      "Estimate a simple daily water intake target using body weight and activity assumptions.",
    category: "Health",
    status: "Available now",
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
    slug: "final-grade-calculator",
    title: "Final Grade Calculator",
    description:
      "Estimate the exam score needed to reach a target course grade using a simplified weighted-grade model.",
    category: "Education",
    status: "Popular",
  },
  {
    slug: "study-time-calculator",
    title: "Study Time Calculator",
    description:
      "Estimate a simple weekly study schedule from subject count, target hours, and available study days.",
    category: "Education",
    status: "Available now",
  },
  {
    slug: "pdf-file-size-estimator",
    title: "PDF File Size Estimator",
    description:
      "Estimate approximate PDF size from page count, image density, image quality, and document type assumptions.",
    category: "Everyday Tools",
    status: "Available now",
  },
  {
    slug: "merge-pdf",
    title: "Merge PDF",
    description:
      "Merge multiple PDF files into one downloadable document locally in your browser.",
    category: "Everyday Tools",
    status: "Featured",
  },
  {
    slug: "split-pdf",
    title: "Split PDF",
    description:
      "Split one PDF into separate files by page ranges with local browser processing.",
    category: "Everyday Tools",
    status: "Popular",
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
    slug: "hijri-date-converter",
    title: "Hijri Date Converter",
    description:
      "Convert Gregorian dates to approximate Hijri dates and Hijri dates to approximate Gregorian dates.",
    category: "Everyday Tools",
    status: "Featured",
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF",
    description:
      "Turn multiple images into one browser-generated PDF without uploading files to a server.",
    category: "Everyday Tools",
    status: "Featured",
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF",
    description:
      "Combine one or more JPG images into a downloadable PDF using a client-side workflow.",
    category: "Everyday Tools",
    status: "Popular",
  },
  {
    slug: "png-to-pdf",
    title: "PNG to PDF",
    description:
      "Combine one or more PNG images into a downloadable PDF in your browser.",
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
    "mortgage-affordability-calculator",
    "compound-interest-calculator",
    "federal-income-tax-calculator",
    "401k-calculator",
    "retirement-income-calculator",
    "calorie-calculator",
    "bmi-calculator",
    "final-grade-calculator",
    "age-calculator",
    "image-to-pdf",
    "merge-pdf",
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

const standardDeductionByStatus: Record<TaxFilingStatus, number> = {
  single: 15000,
  "married-filing-jointly": 30000,
  "married-filing-separately": 15000,
  "head-of-household": 22500,
};

const taxBracketsByStatus: Record<
  TaxFilingStatus,
  Array<{ limit: number; rate: number }>
> = {
  single: [
    { limit: 11925, rate: 0.1 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
  "married-filing-jointly": [
    { limit: 23850, rate: 0.1 },
    { limit: 96950, rate: 0.12 },
    { limit: 206700, rate: 0.22 },
    { limit: 394600, rate: 0.24 },
    { limit: 501050, rate: 0.32 },
    { limit: 751600, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
  "married-filing-separately": [
    { limit: 11925, rate: 0.1 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 375800, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
  "head-of-household": [
    { limit: 17000, rate: 0.1 },
    { limit: 64850, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250500, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
};

const selfEmploymentSocialSecurityWageBase = 176100;

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

export function calculateZakat({
  cashSavings,
  goldValue,
  silverValue,
  investments,
  retirementAccounts,
  businessAssets,
  debtsOwed,
}: {
  cashSavings: number;
  goldValue: number;
  silverValue: number;
  investments: number;
  retirementAccounts: number;
  businessAssets: number;
  debtsOwed: number;
}) {
  const totalZakatableAssets =
    clampNonNegative(cashSavings) +
    clampNonNegative(goldValue) +
    clampNonNegative(silverValue) +
    clampNonNegative(investments) +
    clampNonNegative(retirementAccounts) +
    clampNonNegative(businessAssets);

  const deductibleDebts = clampNonNegative(debtsOwed);
  const netZakatableAssets = Math.max(
    0,
    totalZakatableAssets - deductibleDebts,
  );

  return {
    totalZakatableAssets,
    deductibleDebts,
    netZakatableAssets,
    zakatRate: 0.025,
    zakatDue: netZakatableAssets * 0.025,
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

function inchesToCentimeters(totalInches: number) {
  return clampNonNegative(totalInches) * 2.54;
}

function getBmrActivityMultiplier(activityLevel: string) {
  const multipliers: Record<string, number> = {
    sedentary: 1.2,
    "lightly-active": 1.375,
    "moderately-active": 1.55,
    "very-active": 1.725,
    "extra-active": 1.9,
  };

  return multipliers[activityLevel] ?? 1.2;
}

function getBodyFatCategory(bodyFatPercentage: number, sex: string) {
  if (sex === "male") {
    if (bodyFatPercentage < 6) return "Essential fat range";
    if (bodyFatPercentage < 14) return "Athletic range";
    if (bodyFatPercentage < 18) return "Fitness range";
    if (bodyFatPercentage < 25) return "Average range";
    return "Higher body fat range";
  }

  if (bodyFatPercentage < 14) return "Essential fat range";
  if (bodyFatPercentage < 21) return "Athletic range";
  if (bodyFatPercentage < 25) return "Fitness range";
  if (bodyFatPercentage < 32) return "Average range";
  return "Higher body fat range";
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

export function calculateBmr({
  sex,
  age,
  weightKg,
  heightCm,
}: {
  sex: "male" | "female";
  age: number;
  weightKg: number;
  heightCm: number;
}) {
  const safeAge = clampNonNegative(age);
  const safeWeightKg = clampNonNegative(weightKg);
  const safeHeightCm = clampNonNegative(heightCm);

  if (safeAge <= 0 || safeWeightKg <= 0 || safeHeightCm <= 0) {
    return null;
  }

  const base = 10 * safeWeightKg + 6.25 * safeHeightCm - 5 * safeAge;
  const bmr = sex === "male" ? base + 5 : base - 161;

  return {
    bmr,
  };
}

export function calculateCalorieNeeds({
  sex,
  age,
  weightKg,
  heightCm,
  activityLevel,
}: {
  sex: "male" | "female";
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: string;
}) {
  const bmrResult = calculateBmr({ sex, age, weightKg, heightCm });

  if (!bmrResult) {
    return null;
  }

  const activityMultiplier = getBmrActivityMultiplier(activityLevel);
  const maintenanceCalories = bmrResult.bmr * activityMultiplier;

  return {
    bmr: bmrResult.bmr,
    maintenanceCalories,
    mildWeightLossCalories: Math.max(1200, maintenanceCalories - 500),
    mildWeightGainCalories: maintenanceCalories + 300,
    activityMultiplier,
  };
}

export function calculateBodyFatPercentage({
  sex,
  heightInches,
  neckInches,
  waistInches,
  hipInches,
}: {
  sex: "male" | "female";
  heightInches: number;
  neckInches: number;
  waistInches: number;
  hipInches?: number;
}) {
  const height = clampNonNegative(heightInches);
  const neck = clampNonNegative(neckInches);
  const waist = clampNonNegative(waistInches);
  const hip = clampNonNegative(hipInches ?? 0);

  if (height <= 0 || neck <= 0 || waist <= 0) {
    return null;
  }

  let bodyFatPercentage: number | null = null;

  if (sex === "male") {
    const logInput = waist - neck;
    if (logInput <= 0) return null;
    bodyFatPercentage =
      86.01 * Math.log10(logInput) - 70.041 * Math.log10(height) + 36.76;
  } else {
    const logInput = waist + hip - neck;
    if (hip <= 0 || logInput <= 0) return null;
    bodyFatPercentage =
      163.205 * Math.log10(logInput) -
      97.684 * Math.log10(height) -
      78.387;
  }

  if (!Number.isFinite(bodyFatPercentage)) {
    return null;
  }

  return {
    bodyFatPercentage,
    category: getBodyFatCategory(bodyFatPercentage, sex),
  };
}

export function calculateIdealWeight({
  sex,
  heightFeet,
  heightInches,
}: {
  sex: "male" | "female";
  heightFeet: number;
  heightInches: number;
}) {
  const totalInches =
    clampNonNegative(heightFeet) * 12 + clampNonNegative(heightInches);

  if (totalInches <= 0) {
    return null;
  }

  const inchesOverFiveFeet = totalInches - 60;
  const devineBase = sex === "male" ? 50 : 45.5;
  const devineKg = devineBase + Math.max(0, inchesOverFiveFeet) * 2.3;
  const heightMeters = inchesToCentimeters(totalInches) / 100;
  const healthyBmiLowKg = 18.5 * heightMeters * heightMeters;
  const healthyBmiHighKg = 24.9 * heightMeters * heightMeters;

  return {
    devineKg,
    devineLb: devineKg * 2.2046226218,
    healthyBmiLowKg,
    healthyBmiHighKg,
    healthyBmiLowLb: healthyBmiLowKg * 2.2046226218,
    healthyBmiHighLb: healthyBmiHighKg * 2.2046226218,
  };
}

export function calculateWaterIntake({
  weightPounds,
  activityMinutes,
}: {
  weightPounds: number;
  activityMinutes: number;
}) {
  const safeWeightPounds = clampNonNegative(weightPounds);
  const safeActivityMinutes = clampNonNegative(activityMinutes);

  if (safeWeightPounds <= 0) {
    return null;
  }

  const baseOunces = safeWeightPounds * 0.5;
  const activityOunces = (safeActivityMinutes / 30) * 12;
  const totalOunces = baseOunces + activityOunces;

  return {
    totalOunces,
    totalLiters: totalOunces * 0.0295735,
    baseOunces,
    activityOunces,
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
  name?: string;
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

export function calculateStudyTimePlan({
  numberOfSubjects,
  targetStudyHoursPerWeek,
  availableDays,
}: {
  numberOfSubjects: number;
  targetStudyHoursPerWeek: number;
  availableDays: number;
}) {
  const subjects = Math.max(1, Math.round(clampNonNegative(numberOfSubjects)));
  const weeklyHours = clampNonNegative(targetStudyHoursPerWeek);
  const studyDays = Math.max(1, Math.round(clampNonNegative(availableDays)));

  const hoursPerSubjectPerWeek = weeklyHours / subjects;
  const hoursPerDay = weeklyHours / studyDays;
  const sessionsPerWeek = subjects * 2;
  const hoursPerSession = sessionsPerWeek > 0 ? weeklyHours / sessionsPerWeek : 0;
  const minutesPerSession = hoursPerSession * 60;

  return {
    subjects,
    weeklyHours,
    studyDays,
    hoursPerSubjectPerWeek,
    hoursPerDay,
    sessionsPerWeek,
    minutesPerSession,
    suggestedWeeklyOutline: Array.from({ length: studyDays }, (_, index) => ({
      day: `Day ${index + 1}`,
      hours: hoursPerDay,
    })),
  };
}

export function calculatePdfFileSizeEstimate({
  numberOfPages,
  averageImagesPerPage,
  imageQualityLevel,
  documentStyle,
}: {
  numberOfPages: number;
  averageImagesPerPage: number;
  imageQualityLevel: "low" | "medium" | "high";
  documentStyle: "text-heavy" | "balanced" | "image-heavy";
}) {
  const pages = Math.max(1, Math.round(clampNonNegative(numberOfPages)));
  const imagesPerPage = clampNonNegative(averageImagesPerPage);

  const qualityMultiplier =
    imageQualityLevel === "low"
      ? 0.35
      : imageQualityLevel === "medium"
        ? 0.75
        : 1.25;

  const styleBasePerPageKb =
    documentStyle === "text-heavy"
      ? 45
      : documentStyle === "balanced"
        ? 120
        : 220;

  const imageKbPerImage = 180 * qualityMultiplier;
  const estimatedPerPageKb = styleBasePerPageKb + imagesPerPage * imageKbPerImage;
  const totalEstimatedKb = pages * estimatedPerPageKb;

  return {
    pages,
    estimatedPerPageKb,
    totalEstimatedKb,
    totalEstimatedMb: totalEstimatedKb / 1024,
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

function getBracketTax({
  taxableIncome,
  filingStatus,
}: {
  taxableIncome: number;
  filingStatus: TaxFilingStatus;
}) {
  const income = Math.max(0, taxableIncome);
  const brackets = taxBracketsByStatus[filingStatus];
  let remaining = income;
  let previousLimit = 0;
  let totalTax = 0;
  let marginalRate = 0;

  for (const bracket of brackets) {
    if (remaining <= 0) {
      break;
    }

    const width = bracket.limit - previousLimit;
    const taxedAmount = Math.min(remaining, width);

    if (taxedAmount > 0) {
      totalTax += taxedAmount * bracket.rate;
      marginalRate = bracket.rate;
      remaining -= taxedAmount;
    }

    previousLimit = bracket.limit;
  }

  return { totalTax, marginalRate };
}

export function estimateFederalIncomeTax({
  filingStatus,
  annualIncome,
  preTaxDeductions,
  taxCredits,
}: {
  filingStatus: TaxFilingStatus;
  annualIncome: number;
  preTaxDeductions: number;
  taxCredits: number;
}) {
  const grossIncome = clampNonNegative(annualIncome);
  const aboveTheLineAdjustments = clampNonNegative(preTaxDeductions);
  const adjustedGrossIncome = Math.max(0, grossIncome - aboveTheLineAdjustments);
  const standardDeduction = standardDeductionByStatus[filingStatus];
  const taxableIncome = Math.max(0, adjustedGrossIncome - standardDeduction);
  const bracketEstimate = getBracketTax({ taxableIncome, filingStatus });
  const credits = clampNonNegative(taxCredits);
  const estimatedTax = Math.max(0, bracketEstimate.totalTax - credits);

  return {
    grossIncome,
    adjustedGrossIncome,
    standardDeduction,
    taxableIncome,
    estimatedTax,
    marginalRate: bracketEstimate.marginalRate,
    effectiveRate: grossIncome > 0 ? estimatedTax / grossIncome : 0,
    creditsApplied: Math.min(credits, bracketEstimate.totalTax),
    assumptions:
      "Simplified federal estimate using the standard deduction and ordinary-income bracket structure only.",
  };
}

export function estimateSelfEmploymentTax({
  netSelfEmploymentIncome,
}: {
  netSelfEmploymentIncome: number;
}) {
  const netIncome = clampNonNegative(netSelfEmploymentIncome);
  const taxableBase = netIncome * 0.9235;
  const socialSecurityTaxable = Math.min(
    taxableBase,
    selfEmploymentSocialSecurityWageBase,
  );
  const socialSecurityTax = socialSecurityTaxable * 0.124;
  const medicareTax = taxableBase * 0.029;
  const totalSelfEmploymentTax = socialSecurityTax + medicareTax;

  return {
    netIncome,
    taxableBase,
    socialSecurityTax,
    medicareTax,
    totalSelfEmploymentTax,
    deductiblePortion: totalSelfEmploymentTax / 2,
    assumptions:
      "Simplified estimate using 92.35% of net earnings and standard Social Security and Medicare rates. Additional Medicare tax, wage interactions, and entity-specific rules are not included.",
  };
}

export function estimateTaxRefund({
  filingStatus,
  annualIncome,
  preTaxDeductions,
  taxCredits,
  federalWithholding,
}: {
  filingStatus: TaxFilingStatus;
  annualIncome: number;
  preTaxDeductions: number;
  taxCredits: number;
  federalWithholding: number;
}) {
  const taxEstimate = estimateFederalIncomeTax({
    filingStatus,
    annualIncome,
    preTaxDeductions,
    taxCredits,
  });
  const withholding = clampNonNegative(federalWithholding);
  const overpayment = withholding - taxEstimate.estimatedTax;

  return {
    ...taxEstimate,
    federalWithholding: withholding,
    estimatedRefund: overpayment > 0 ? overpayment : 0,
    estimatedAmountDue: overpayment < 0 ? Math.abs(overpayment) : 0,
    isRefund: overpayment >= 0,
  };
}

export function calculate401kProjection({
  currentBalance,
  annualSalary,
  employeeContributionPercent,
  employerMatchPercent,
  employerMatchCapPercent,
  annualReturn,
  yearsUntilRetirement,
}: {
  currentBalance: number;
  annualSalary: number;
  employeeContributionPercent: number;
  employerMatchPercent: number;
  employerMatchCapPercent: number;
  annualReturn: number;
  yearsUntilRetirement: number;
}) {
  const startingBalance = clampNonNegative(currentBalance);
  const salary = clampNonNegative(annualSalary);
  const employeeContributionRate =
    Math.max(0, clampNonNegative(employeeContributionPercent)) / 100;
  const employerMatchRate =
    Math.max(0, clampNonNegative(employerMatchPercent)) / 100;
  const employerCapRate =
    Math.max(0, clampNonNegative(employerMatchCapPercent)) / 100;
  const annualEmployeeContribution = salary * employeeContributionRate;
  const matchedContributionBase = salary * Math.min(employeeContributionRate, employerCapRate);
  const annualEmployerMatch = matchedContributionBase * employerMatchRate;
  const monthlyContribution =
    (annualEmployeeContribution + annualEmployerMatch) / 12;
  const projection = calculateCompoundInterest({
    principal: startingBalance,
    monthlyContribution,
    annualRate: annualReturn,
    years: yearsUntilRetirement,
    compoundsPerYear: 12,
  });

  return {
    ...projection,
    annualEmployeeContribution,
    annualEmployerMatch,
    monthlyContribution,
  };
}

export function calculateIraProjection({
  currentBalance,
  annualContribution,
  annualReturn,
  yearsUntilRetirement,
}: {
  currentBalance: number;
  annualContribution: number;
  annualReturn: number;
  yearsUntilRetirement: number;
}) {
  const projection = calculateCompoundInterest({
    principal: clampNonNegative(currentBalance),
    monthlyContribution: clampNonNegative(annualContribution) / 12,
    annualRate: annualReturn,
    years: yearsUntilRetirement,
    compoundsPerYear: 12,
  });

  return {
    ...projection,
    annualContribution: clampNonNegative(annualContribution),
  };
}

export function calculateRetirementIncomePlan({
  retirementSavings,
  withdrawalRate,
  otherAnnualIncome,
  annualReturnDuringRetirement,
  yearsInRetirement,
}: {
  retirementSavings: number;
  withdrawalRate: number;
  otherAnnualIncome: number;
  annualReturnDuringRetirement: number;
  yearsInRetirement: number;
}) {
  const startingBalance = clampNonNegative(retirementSavings);
  const withdrawalDecimal = clampNonNegative(withdrawalRate) / 100;
  const annualWithdrawal = startingBalance * withdrawalDecimal;
  const annualOtherIncome = clampNonNegative(otherAnnualIncome);
  const years = Math.max(1, Math.round(clampNonNegative(yearsInRetirement)));
  const annualGrowth = clampNonNegative(annualReturnDuringRetirement) / 100;
  let endingBalance = startingBalance;

  for (let year = 0; year < years; year += 1) {
    endingBalance = Math.max(0, endingBalance - annualWithdrawal);
    endingBalance *= 1 + annualGrowth;
  }

  return {
    startingBalance,
    annualWithdrawal,
    monthlyWithdrawal: annualWithdrawal / 12,
    annualOtherIncome,
    estimatedAnnualIncome: annualWithdrawal + annualOtherIncome,
    estimatedMonthlyIncome: (annualWithdrawal + annualOtherIncome) / 12,
    years,
    endingBalance,
  };
}

export function calculateMortgageAffordability({
  annualIncome,
  monthlyDebts,
  downPayment,
  annualInterestRate,
  loanTermYears,
}: {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  annualInterestRate: number;
  loanTermYears: number;
}) {
  const grossMonthlyIncome = clampNonNegative(annualIncome) / 12;
  const existingDebts = clampNonNegative(monthlyDebts);
  const maxHousingPayment = Math.max(
    0,
    Math.min(grossMonthlyIncome * 0.28, grossMonthlyIncome * 0.36 - existingDebts),
  );
  const totalMonths = Math.max(1, Math.round(clampNonNegative(loanTermYears) * 12));
  const monthlyRate = monthlyRateFromAnnual(annualInterestRate);
  let maxLoanAmount = 0;

  if (maxHousingPayment > 0) {
    if (monthlyRate === 0) {
      maxLoanAmount = maxHousingPayment * totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      maxLoanAmount =
        maxHousingPayment / ((monthlyRate * factor) / (factor - 1));
    }
  }

  const availableDownPayment = clampNonNegative(downPayment);
  const estimatedHomePrice = maxLoanAmount + availableDownPayment;

  return {
    grossMonthlyIncome,
    maxHousingPayment,
    maxLoanAmount,
    estimatedHomePrice,
    availableDownPayment,
    assumptions:
      "Simplified affordability estimate using a 28% front-end ratio and a 36% total debt-to-income ratio.",
  };
}

export function calculateMortgageRefinance({
  currentLoanBalance,
  currentInterestRate,
  currentRemainingTermYears,
  newInterestRate,
  newLoanTermYears,
  closingCosts,
}: {
  currentLoanBalance: number;
  currentInterestRate: number;
  currentRemainingTermYears: number;
  newInterestRate: number;
  newLoanTermYears: number;
  closingCosts: number;
}) {
  const principal = clampNonNegative(currentLoanBalance);
  const currentLoan = calculateMortgagePayment({
    homePrice: principal,
    downPayment: 0,
    annualInterestRate: currentInterestRate,
    loanTermYears: currentRemainingTermYears,
  });
  const refinancedLoan = calculateMortgagePayment({
    homePrice: principal + clampNonNegative(closingCosts),
    downPayment: 0,
    annualInterestRate: newInterestRate,
    loanTermYears: newLoanTermYears,
  });
  const monthlySavings = currentLoan.monthlyPayment - refinancedLoan.monthlyPayment;
  const breakEvenMonths =
    monthlySavings > 0
      ? clampNonNegative(closingCosts) / monthlySavings
      : Number.POSITIVE_INFINITY;

  return {
    currentMonthlyPayment: currentLoan.monthlyPayment,
    newMonthlyPayment: refinancedLoan.monthlyPayment,
    monthlySavings,
    breakEvenMonths,
    financedClosingCosts: clampNonNegative(closingCosts),
  };
}

export function calculateClosingCosts({
  homePrice,
  downPayment,
  closingCostPercent,
  lenderFees,
  prepaidTaxesAndInsurance,
}: {
  homePrice: number;
  downPayment: number;
  closingCostPercent: number;
  lenderFees: number;
  prepaidTaxesAndInsurance: number;
}) {
  const purchasePrice = clampNonNegative(homePrice);
  const down = clampNonNegative(downPayment);
  const percentBasedCosts =
    purchasePrice * (clampNonNegative(closingCostPercent) / 100);
  const fixedFees =
    clampNonNegative(lenderFees) + clampNonNegative(prepaidTaxesAndInsurance);
  const totalClosingCosts = percentBasedCosts + fixedFees;
  const cashToClose = down + totalClosingCosts;

  return {
    purchasePrice,
    downPayment: down,
    percentBasedCosts,
    fixedFees,
    totalClosingCosts,
    cashToClose,
  };
}
