"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

const categoryLinks = [
  {
    href: "/calculators?category=Finance",
    label: "Finance",
    description: "Money, loan, savings, and planning tools.",
  },
  {
    href: "/tax",
    label: "Tax",
    description: "US tax guides and estimate-based tax tools.",
  },
  {
    href: "/retirement",
    label: "Retirement",
    description: "Long-range retirement planning and income tools.",
  },
  {
    href: "/mortgage",
    label: "Mortgage",
    description: "Home buying, refinancing, and closing-cost planning.",
  },
  {
    href: "/health",
    label: "Health",
    description: "Wellness, body metrics, hydration, and calorie guides.",
  },
  {
    href: "/zakat",
    label: "Zakat",
    description: "Zakat calculators and educational Islamic finance content.",
  },
];

const toolLinks = [
  {
    href: "/calculators",
    label: "Calculators",
    description: "Browse the full Dr.Utilio calculator directory.",
  },
  {
    href: "/calculators?q=converter",
    label: "Converters",
    description: "Jump straight to date and unit conversion tools.",
  },
];

const guideLinks = [
  {
    href: "/tax",
    label: "Tax Guides",
    description: "Educational filing and federal tax explainers.",
  },
  {
    href: "/retirement",
    label: "Retirement Guides",
    description: "Saving, IRA, 401(k), and retirement-income education.",
  },
  {
    href: "/mortgage",
    label: "Mortgage Guides",
    description: "Affordability, preapproval, points, and closing costs.",
  },
  {
    href: "/health",
    label: "Health Guides",
    description: "Calories, BMR, body fat, and healthy-weight explainers.",
  },
  {
    href: "/zakat",
    label: "Zakat Guides",
    description: "Zakat basics, nisab, and asset-specific articles.",
  },
];

function DesktopMenu({
  label,
  items,
}: {
  label: string;
  items: Array<{ href: string; label: string; description: string }>;
}) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
        {label}
      </summary>
      <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[22rem] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur">
        <div className="grid gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5"
            >
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

function MobileSection({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: Array<{ href: string; label: string; description: string }>;
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
        {title}
      </p>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 transition hover:bg-white/5"
            onClick={onNavigate}
          >
            <p className="text-sm font-semibold text-white">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-start justify-between gap-4">
          <Link
            href="/"
            className="flex max-w-xs flex-col"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 sm:text-sm">
              {siteConfig.subtitle}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-nav"
          >
            Menu
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Home
            </Link>
            <DesktopMenu label="Tools" items={toolLinks} />
            <DesktopMenu label="Categories" items={categoryLinks} />
            <DesktopMenu label="Guides" items={guideLinks} />
          </nav>
        </div>

        {mobileOpen ? (
          <div
            id="mobile-primary-nav"
            className="mt-4 rounded-2xl border border-white/10 bg-slate-950/95 p-4 md:hidden"
          >
            <nav aria-label="Mobile primary" className="grid gap-4">
              <Link
                href="/"
                className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <MobileSection
                title="Tools"
                items={toolLinks}
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileSection
                title="Categories"
                items={categoryLinks}
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileSection
                title="Guides"
                items={guideLinks}
                onNavigate={() => setMobileOpen(false)}
              />
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
