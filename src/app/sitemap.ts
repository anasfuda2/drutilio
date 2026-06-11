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
  "/how-to-calculate-zakat",
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
