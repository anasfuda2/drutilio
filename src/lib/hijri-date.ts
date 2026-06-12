export type HijriDateInput = {
  year: number;
  month: number;
  day: number;
};

export type HijriDateResult = HijriDateInput & {
  monthName: string;
  formatted: string;
};

export type GregorianDateResult = {
  dateString: string;
  formatted: string;
  weekday: string;
};

export const hijriMonthNames = [
  "Muharram",
  "Safar",
  "Rabi al-Awwal",
  "Rabi al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qadah",
  "Dhu al-Hijjah",
] as const;

const gregorianFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const gregorianWeekdayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "UTC",
});

function parseGregorianDateInput(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

function gregorianToJulianDay(year: number, month: number, day: number) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;

  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

function julianDayToGregorian(julianDay: number) {
  const a = julianDay + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d) / 4);
  const m = Math.floor((5 * e + 2) / 153);

  const day = e - Math.floor((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * Math.floor(m / 10);
  const year = 100 * b + d - 4800 + Math.floor(m / 10);

  return { year, month, day };
}

function isHijriLeapYear(year: number) {
  return ((11 * year + 14) % 30) < 11;
}

export function getHijriMonthLength(year: number, month: number) {
  if (month < 1 || month > 12) {
    return 0;
  }

  if (month === 12) {
    return isHijriLeapYear(year) ? 30 : 29;
  }

  return month % 2 === 1 ? 30 : 29;
}

function isValidHijriDate(input: HijriDateInput) {
  if (
    !Number.isInteger(input.year) ||
    !Number.isInteger(input.month) ||
    !Number.isInteger(input.day) ||
    input.year <= 0 ||
    input.month < 1 ||
    input.month > 12
  ) {
    return false;
  }

  return input.day >= 1 && input.day <= getHijriMonthLength(input.year, input.month);
}

function julianDayToHijri(julianDay: number): HijriDateInput {
  let l = julianDay - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l) / 5316) *
      Math.floor((50 * l) / 17719) +
    Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l =
    l -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * l) / 709);
  const day = l - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  return { year, month, day };
}

function hijriToJulianDay(input: HijriDateInput) {
  return (
    input.day +
    Math.ceil(29.5 * (input.month - 1)) +
    (input.year - 1) * 354 +
    Math.floor((3 + 11 * input.year) / 30) +
    1948440 -
    385
  );
}

function toUtcDate(dateParts: { year: number; month: number; day: number }) {
  return new Date(Date.UTC(dateParts.year, dateParts.month - 1, dateParts.day));
}

function formatIsoDate(dateParts: { year: number; month: number; day: number }) {
  return `${dateParts.year.toString().padStart(4, "0")}-${dateParts.month
    .toString()
    .padStart(2, "0")}-${dateParts.day.toString().padStart(2, "0")}`;
}

export function convertGregorianToHijri(
  gregorianDateString: string,
): HijriDateResult | null {
  const parsed = parseGregorianDateInput(gregorianDateString);

  if (!parsed) {
    return null;
  }

  const hijri = julianDayToHijri(
    gregorianToJulianDay(parsed.year, parsed.month, parsed.day),
  );
  const monthName = hijriMonthNames[hijri.month - 1];

  return {
    ...hijri,
    monthName,
    formatted: `${hijri.day} ${monthName} ${hijri.year} AH`,
  };
}

export function convertHijriToGregorian(
  hijriDate: HijriDateInput,
): GregorianDateResult | null {
  if (!isValidHijriDate(hijriDate)) {
    return null;
  }

  const gregorian = julianDayToGregorian(hijriToJulianDay(hijriDate));
  const utcDate = toUtcDate(gregorian);

  return {
    dateString: formatIsoDate(gregorian),
    formatted: gregorianFormatter.format(utcDate),
    weekday: gregorianWeekdayFormatter.format(utcDate),
  };
}
