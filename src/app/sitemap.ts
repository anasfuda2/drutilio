import type { MetadataRoute } from "next";
import { toAbsoluteUrl } from "@/lib/site";

const routes = [
  "",
  "/calculators",
  "/calculators/mortgage-calculator",
  "/calculators/auto-loan-calculator",
  "/calculators/retirement-calculator",
  "/calculators/savings-goal-calculator",
  "/calculators/student-loan-calculator",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: toAbsoluteUrl(route || "/"),
    lastModified: new Date(),
  }));
}
