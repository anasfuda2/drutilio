import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { toAbsoluteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/calculators",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/zakat",
  "/how-to-calculate-zakat",
  "/zakat-on-business-assets",
  "/zakat-on-stocks-and-etfs",
  "/what-is-nisab",
  "/common-zakat-mistakes",
  "/zakat-calculator-usa",
  "/zakat-on-retirement-accounts",
  "/zakat-on-gold-and-silver",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorRoutes = calculators.map(
    (calculator) => `/calculators/${calculator.slug}`,
  );

  return [...staticRoutes, ...calculatorRoutes].map((route) => ({
    url: toAbsoluteUrl(route || "/"),
    lastModified: new Date(),
  }));
}
