"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

const toolLinks = [
  {
    href: "/tools",
    label: "All Tools",
    description: "Browse the full Dr.Utilio tools directory grouped by platform category.",
  },
  {
    href: "/pdf-tools",
    label: "PDF Tools",
    description: "Open live browser-based PDF tools for merge, split, compress, convert, and export tasks.",
  },
  {
    href: "/image-tools",
    label: "Image Tools",
    description: "Use browser-based image resizing, compression, conversion, cropping, and rotation tools.",
  },
  {
    href: "/calculators?category=Finance",
    label: "Finance Calculators",
    description: "Jump into money, loan, savings, and planning calculators.",
  },
  {
    href: "/tax",
    label: "Tax Calculators",
    description: "Go directly to tax estimate tools and the tax hub.",
  },
  {
    href: "/mortgage",
    label: "Mortgage Calculators",
    description: "Open mortgage, affordability, refinance, and closing-cost tools quickly.",
  },
  {
    href: "/retirement",
    label: "Retirement Calculators",
    description: "Use retirement, 401(k), IRA, and income-planning tools.",
  },
  {
    href: "/health",
    label: "Health Calculators",
    description: "Open BMI, BMR, calorie, hydration, and body-composition tools.",
  },
  {
    href: "/education",
    label: "Education Tools",
    description: "Go straight to GPA, final-grade, study-time, and academic planning tools.",
  },
  {
    href: "/zakat",
    label: "Zakat Tools",
    description: "Open zakat-focused tools and the zakat guidance hub.",
  },
  {
    href: "/converters",
    label: "Converters",
    description: "Jump straight to date, unit, percentage, and calendar conversion tools.",
  },
];

function DesktopMenu({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: Array<{ href: string; label: string; description: string }>;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleFocusIn(event: FocusEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={onToggle}
        className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
      >
        {label}
      </button>
      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 top-[calc(100%+0.75rem)] w-[22rem] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur"
        >
          <div className="grid gap-2">
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={`rounded-xl px-4 py-3 transition hover:bg-white/5 focus:bg-white/5 focus:outline-none ${
                  index === 0 ? "border border-emerald-400/20 bg-emerald-400/10" : ""
                }`}
                onClick={onClose}
              >
                <p className={`text-sm font-semibold ${index === 0 ? "text-emerald-100" : "text-white"}`}>
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
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
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeMenusTimer = window.setTimeout(() => {
      setMobileOpen(false);
      setToolsOpen(false);
    }, 0);

    return () => window.clearTimeout(closeMenusTimer);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-start justify-between gap-4">
          <Link
            href="/"
            className="flex max-w-xs flex-col"
            onClick={() => {
              setMobileOpen(false);
              setToolsOpen(false);
            }}
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
            <DesktopMenu
              label="Tools"
              items={toolLinks}
              isOpen={toolsOpen}
              onToggle={() => setToolsOpen((open) => !open)}
              onClose={() => setToolsOpen(false)}
            />
            <Link
              href="/guides"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Guides
            </Link>
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
              <Link
                href="/guides"
                className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Guides
              </Link>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
