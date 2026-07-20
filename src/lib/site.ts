const LOCAL_SITE_URL = "http://localhost:3000";
const CANONICAL_PRODUCTION_SITE_URL = "https://www.drutilio.net";

function normalizeSiteUrl(value: string) {
  const trimmedValue = value.trim().replace(/\/+$/, "");

  if (!trimmedValue) {
    return trimmedValue;
  }

  if (!/^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  const parsedUrl = new URL(trimmedValue);
  const normalizedHost = parsedUrl.hostname.toLowerCase();

  if (
    normalizedHost === "drutilio.net" ||
    normalizedHost === "www.drutilio.net"
  ) {
    return CANONICAL_PRODUCTION_SITE_URL;
  }

  return parsedUrl.origin + parsedUrl.pathname.replace(/\/+$/, "");
}

function resolveSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredSiteUrl) {
    return normalizeSiteUrl(configuredSiteUrl);
  }

  if (process.env.NODE_ENV === "development") {
    return LOCAL_SITE_URL;
  }

  return CANONICAL_PRODUCTION_SITE_URL;
}

export const siteConfig = {
  name: "Dr.Utilio",
  subtitle: "Smart Online Tools & Calculators",
  siteUrl: resolveSiteUrl(),
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-5TVBZXM2Y2",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    "b7yfqTRAa3iCtGvNY_ACtsNx9ZaDg-z7V4qAJRVziJY",
  adsEnabled: process.env.NEXT_PUBLIC_ENABLE_AD_PLACEHOLDERS === "true",
};

export function toAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
