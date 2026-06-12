"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CalculatorCard } from "@/components/calculators/CalculatorCard";
import type {
  CalculatorItem,
  ToolDirectoryCategory,
} from "@/lib/calculators";
import {
  getToolDirectoryCategory,
  toolDirectoryCategoryDescriptions,
} from "@/lib/calculators";

type CategoryFilter = "All" | ToolDirectoryCategory;

type ToolsDirectoryClientProps = {
  calculators: CalculatorItem[];
  directoryCategories: ToolDirectoryCategory[];
};

function parseCategoryFilter(
  value: string | null,
  directoryCategories: ToolDirectoryCategory[],
): CategoryFilter {
  return value && directoryCategories.includes(value as ToolDirectoryCategory)
    ? (value as ToolDirectoryCategory)
    : "All";
}

export function ToolsDirectoryClient({
  calculators,
  directoryCategories,
}: ToolsDirectoryClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = parseCategoryFilter(
    searchParams.get("category"),
    directoryCategories,
  );
  const searchQuery = searchParams.get("q") ?? "";

  const toolsWithDirectoryCategory = useMemo(
    () =>
      calculators.map((calculator) => ({
        ...calculator,
        directoryCategory: getToolDirectoryCategory(calculator),
      })),
    [calculators],
  );

  const categoryCounts = useMemo(() => {
    const counts = Object.fromEntries(
      directoryCategories.map((category) => [category, 0]),
    ) as Record<ToolDirectoryCategory, number>;

    toolsWithDirectoryCategory.forEach((tool) => {
      counts[tool.directoryCategory] += 1;
    });

    return counts;
  }, [directoryCategories, toolsWithDirectoryCategory]);

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

  const filteredTools = toolsWithDirectoryCategory.filter((tool) => {
    const matchesCategory =
      activeCategory === "All" || tool.directoryCategory === activeCategory;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      tool.title.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const visibleCategories =
    activeCategory !== "All"
      ? [activeCategory]
      : directoryCategories.filter((category) =>
          filteredTools.some((tool) => tool.directoryCategory === category),
        );

  const categoryFilters = useMemo(
    () => ["All", ...directoryCategories] as CategoryFilter[],
    [directoryCategories],
  );

  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Browse by platform category
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {categoryFilters.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === "All"
                    ? calculators.length
                    : categoryCounts[category];

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => updateQueryParams({ category })}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-200"
                        : "border-white/10 bg-slate-950/40 text-slate-300 hover:border-emerald-400/30 hover:text-white",
                    ].join(" ")}
                  >
                    <span>{category}</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-200">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="platform-tool-search"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Search by tool name
            </label>
            <input
              id="platform-tool-search"
              type="search"
              value={searchQuery}
              onChange={(event) => updateQueryParams({ q: event.target.value })}
              placeholder="Search all Dr.Utilio tools"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-300">
          Showing{" "}
          <span className="font-semibold text-white">{filteredTools.length}</span>{" "}
          tool{filteredTools.length === 1 ? "" : "s"}
          {normalizedQuery ? (
            <>
              {" "}
              for <span className="font-semibold text-white">{searchQuery}</span>
            </>
          ) : null}
          .
        </p>
      </section>

      {filteredTools.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-white/10 bg-slate-950/30 p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            No tools match that search yet.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Try a broader keyword or switch to another category to keep
            exploring the full Dr.Utilio library.
          </p>
        </section>
      ) : (
        visibleCategories.map((category) => {
          const categoryTools = filteredTools.filter(
            (tool) => tool.directoryCategory === category,
          );

          return (
            <section key={category}>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  {category}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    {category} tools
                  </h2>
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-sm font-medium text-slate-300">
                    {categoryTools.length}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {toolDirectoryCategoryDescriptions[category]}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryTools.map((tool) => (
                  <CalculatorCard
                    key={tool.slug}
                    title={tool.title}
                    description={tool.description}
                    category={tool.directoryCategory}
                    href={`/calculators/${tool.slug}`}
                    status={tool.status}
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
