"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import type { CalculatorItem, ToolCategory } from "@/lib/calculators";

type CategoryFilter = "All" | ToolCategory;

type CalculatorsDirectoryClientProps = {
  calculators: CalculatorItem[];
  toolCategories: ToolCategory[];
  categoryDescriptions: Record<ToolCategory, string>;
};

function parseCategoryFilter(
  value: string | null,
  toolCategories: ToolCategory[],
): CategoryFilter {
  return value && toolCategories.includes(value as ToolCategory)
    ? (value as ToolCategory)
    : "All";
}

export function CalculatorsDirectoryClient({
  calculators,
  toolCategories,
  categoryDescriptions,
}: CalculatorsDirectoryClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const resultsRef = useRef<HTMLElement | null>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldRevealResultsRef = useRef(false);

  const activeCategory = parseCategoryFilter(
    searchParams.get("category"),
    toolCategories,
  );
  const searchQuery = searchParams.get("q") ?? "";

  function updateQueryParams(nextValues: {
    category?: CategoryFilter;
    q?: string;
  }) {
    const nextParams = new URLSearchParams(searchParams.toString());
    const nextCategory = nextValues.category ?? activeCategory;
    const nextQuery = nextValues.q ?? searchQuery;

    if (nextCategory === "All") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", nextCategory);
    }

    const trimmedQuery = nextQuery.trim();

    if (trimmedQuery.length === 0) {
      nextParams.delete("q");
    } else {
      nextParams.set("q", trimmedQuery);
    }

    const nextQueryString = nextParams.toString();
    const currentQueryString = searchParams.toString();

    if (nextQueryString === currentQueryString) {
      return;
    }

    router.replace(
      nextQueryString ? `${pathname}?${nextQueryString}` : pathname,
      { scroll: false },
    );
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCalculators = calculators.filter((calculator) => {
    const matchesCategory =
      activeCategory === "All" || calculator.category === activeCategory;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      calculator.title.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const visibleCategories =
    activeCategory !== "All"
      ? [activeCategory]
      : toolCategories.filter((category) =>
          filteredCalculators.some(
            (calculator) => calculator.category === category,
          ),
        );

  const categoryFilters = useMemo(
    () => ["All", ...toolCategories] as CategoryFilter[],
    [toolCategories],
  );

  useEffect(() => {
    if (!shouldRevealResultsRef.current || typeof window === "undefined") {
      return;
    }

    shouldRevealResultsRef.current = false;

    if (window.innerWidth >= 768) {
      return;
    }

    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      resultsHeadingRef.current?.focus();
    }, 220);
  }, [activeCategory, searchQuery]);

  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Browse by category
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {categoryFilters.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      shouldRevealResultsRef.current = true;
                      updateQueryParams({ category });
                    }}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-200"
                        : "border-white/10 bg-slate-950/40 text-slate-300 hover:border-emerald-400/30 hover:text-white",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="tool-search"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Search by tool name
            </label>
            <input
              id="tool-search"
              type="search"
              value={searchQuery}
              onChange={(event) => updateQueryParams({ q: event.target.value })}
              placeholder="Search calculators and tools"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-300">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredCalculators.length}
          </span>{" "}
          tool{filteredCalculators.length === 1 ? "" : "s"}
          {normalizedQuery ? (
            <>
              {" "}
              for <span className="font-semibold text-white">{searchQuery}</span>
            </>
          ) : null}
          .
        </p>
      </section>

      {filteredCalculators.length === 0 ? (
        <section
          ref={resultsRef}
          className="rounded-3xl border border-dashed border-white/10 bg-slate-950/30 p-8 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            No tools match that search yet.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Try a broader keyword or switch back to another category to keep
            exploring the library.
          </p>
        </section>
      ) : (
        visibleCategories.map((category) => {
          const categoryTools = filteredCalculators.filter(
            (calculator) => calculator.category === category,
          );

          return (
            <section
              key={category}
              ref={category === visibleCategories[0] ? resultsRef : undefined}
            >
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  {category}
                </p>
                <h2
                  ref={category === visibleCategories[0] ? resultsHeadingRef : undefined}
                  tabIndex={-1}
                  className="mt-3 scroll-mt-24 text-3xl font-semibold tracking-tight text-white outline-none"
                >
                  {category} tools
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {categoryDescriptions[category]}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryTools.map((calculator) => (
                  <CalculatorCard
                    key={calculator.slug}
                    title={calculator.title}
                    description={calculator.description}
                    category={calculator.category}
                    href={`/calculators/${calculator.slug}`}
                    status={calculator.status}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
