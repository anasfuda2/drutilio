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
  "/mortgage",
  "/how-much-house-can-i-afford",
  "/fixed-vs-adjustable-rate-mortgage",
  "/mortgage-points-explained",
  "/mortgage-preapproval-guide",
  "/common-home-buying-mistakes",
  "/down-payment-guide",
  "/mortgage-closing-costs-explained",
  "/refinance-vs-new-mortgage",
  "/retirement",
  "/how-much-do-i-need-to-retire",
  "/401k-vs-ira",
  "/roth-ira-vs-traditional-ira",
  "/retirement-savings-by-age",
  "/common-retirement-planning-mistakes",
  "/how-much-should-i-save-for-retirement",
  "/retirement-income-planning",
  "/safe-withdrawal-rate-explained",
  "/tax",
  "/how-to-calculate-federal-income-tax",
  "/federal-income-tax-brackets",
  "/taxable-income-vs-gross-income",
  "/common-tax-filing-mistakes",
  "/what-is-adjusted-gross-income",
  "/tax-refund-calculator-guide",
  "/self-employment-tax-guide",
  "/zakat",
  "/hijri-to-gregorian",
  "/gregorian-to-hijri",
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
