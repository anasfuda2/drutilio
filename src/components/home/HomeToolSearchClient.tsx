"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomeToolSearchClient() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery.length === 0) {
      router.push("/tools");
      return;
    }

    router.push(`/tools?q=${encodeURIComponent(trimmedQuery)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="home-tool-search" className="sr-only">
        Search tools
      </label>
      <input
        id="home-tool-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search tools, calculators, converters, or PDF workflows"
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Search tools
      </button>
    </form>
  );
}
