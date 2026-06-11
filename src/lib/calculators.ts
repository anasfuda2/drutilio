export type CalculatorStatus = "Available now" | "Featured" | "Popular";

export type CalculatorItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: CalculatorStatus;
};

export const calculators: CalculatorItem[] = [
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    description:
      "Estimate monthly principal and interest payments, compare borrowing scenarios, and get a quick baseline for home affordability.",
    category: "Home Buying",
    status: "Featured",
  },
  {
    slug: "auto-loan-calculator",
    title: "Auto Loan Calculator",
    description:
      "Compare monthly payment and total interest across down payment, trade-in, term, and rate combinations.",
    category: "Borrowing",
    status: "Popular",
  },
  {
    slug: "retirement-calculator",
    title: "Retirement Calculator",
    description:
      "Project future savings balances using current assets, monthly contributions, years to retirement, and expected annual return.",
    category: "Retirement",
    status: "Featured",
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    description:
      "Estimate the monthly contribution needed to hit a target savings amount within a chosen timeline.",
    category: "Saving",
    status: "Popular",
  },
  {
    slug: "student-loan-calculator",
    title: "Student Loan Calculator",
    description:
      "Estimate payoff time and lifetime interest based on your balance, rate, and monthly payment amount.",
    category: "Education",
    status: "Available now",
  },
];

export const featuredCalculators = calculators.slice(0, 4);

export function getCalculatorBySlug(slug: string) {
  return calculators.find((calculator) => calculator.slug === slug);
}

export function getRelatedCalculators(
  currentSlug: string,
  limit = 3,
): CalculatorItem[] {
  return calculators
    .filter((calculator) => calculator.slug !== currentSlug)
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

export function formatPercentage(value: number) {
  return `${value.toFixed(2)}%`;
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
  const totalMonths = Math.max(1, Math.round(clampNonNegative(loanTermYears) * 12));
  const monthlyRate = monthlyRateFromAnnual(annualInterestRate);

  if (monthlyRate === 0) {
    return {
      principal,
      monthlyPayment: principal / totalMonths,
      totalMonths,
    };
  }

  const factor = Math.pow(1 + monthlyRate, totalMonths);
  const monthlyPayment =
    principal * ((monthlyRate * factor) / (factor - 1));

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
  const totalMonths = Math.max(1, Math.round(clampNonNegative(loanTermYears) * 12));
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
  const futureContributions =
    contribution * ((growthFactor - 1) / monthlyRate);

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

  const futureValueOfCurrentSavings = current * Math.pow(1 + monthlyRate, totalMonths);
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
