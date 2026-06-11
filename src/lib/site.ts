const defaultSiteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://finance-calculators-hub.vercel.app";

export const siteConfig = {
  name: "Drutilio",
  subtitle: "Smart online tools and calculators",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || defaultSiteUrl,
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
};

export function toAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
