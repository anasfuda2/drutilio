import { siteConfig } from "@/lib/site";

type AdPlacement =
  | "below-hero"
  | "between-sections"
  | "article-inline"
  | "calculator-result";

type AdPlaceholderProps = {
  placement: AdPlacement;
  label?: string;
  className?: string;
};

const placementStyles: Record<AdPlacement, string> = {
  "below-hero": "min-h-[140px] sm:min-h-[160px]",
  "between-sections": "min-h-[140px] sm:min-h-[160px]",
  "article-inline": "min-h-[180px] sm:min-h-[220px]",
  "calculator-result": "min-h-[120px] sm:min-h-[140px]",
};

const placementText: Record<AdPlacement, string> = {
  "below-hero": "Homepage banner slot",
  "between-sections": "Section break slot",
  "article-inline": "Article content slot",
  "calculator-result": "Calculator result slot",
};

export function AdPlaceholder({
  placement,
  label,
  className = "",
}: AdPlaceholderProps) {
  if (!siteConfig.adsEnabled) {
    return null;
  }

  return (
    <aside
      aria-label={label ?? placementText[placement]}
      className={`overflow-hidden rounded-2xl border border-dashed border-white/10 bg-slate-950/40 ${placementStyles[placement]} ${className}`.trim()}
    >
      <div className="flex h-full flex-col justify-between p-4 sm:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {label ?? placementText[placement]}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Reserved responsive space for a future ad placement. This remains
            disabled by default so layout stability is preserved without loading
            any third-party scripts.
          </p>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Future AdSense integration goes here. Keep any ad script or slot code
          inside this component so ad behavior stays centralized and easy to
          disable.
        </p>
      </div>
    </aside>
  );
}
