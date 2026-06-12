declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "js" | "config",
      eventName: string | Date,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type ToolAnalyticsPayload = {
  slug: string;
  name: string;
  category: string;
  path: string;
  toolType?: string;
};

type FileDownloadPayload = ToolAnalyticsPayload & {
  downloadCount?: number;
  fileType: string;
  outputCount?: number;
};

type ExecutionPayload = ToolAnalyticsPayload & {
  operation?: string;
  outputCount?: number;
};

type CategoryVisitPayload = {
  category: string;
  path: string;
  section?: string;
};

function sendAnalyticsEvent(
  eventName: string,
  params: AnalyticsParams,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const sanitizedParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number | boolean>;

  window.gtag("event", eventName, sanitizedParams);
}

export function trackToolPageVisit(payload: ToolAnalyticsPayload) {
  sendAnalyticsEvent("drutilio_tool_page_view", {
    tool_slug: payload.slug,
    tool_name: payload.name,
    tool_category: payload.category,
    tool_path: payload.path,
    tool_type: payload.toolType ?? "calculator",
  });
}

export function trackToolExecutionSuccess(payload: ExecutionPayload) {
  const baseParams = {
    tool_slug: payload.slug,
    tool_name: payload.name,
    tool_category: payload.category,
    tool_path: payload.path,
    tool_type: payload.toolType ?? "calculator",
    operation: payload.operation,
    output_count: payload.outputCount,
  };

  sendAnalyticsEvent("drutilio_tool_execution_success", baseParams);
  sendAnalyticsEvent("drutilio_tool_conversion", baseParams);
}

export function trackFileDownload(payload: FileDownloadPayload) {
  sendAnalyticsEvent("drutilio_file_download", {
    tool_slug: payload.slug,
    tool_name: payload.name,
    tool_category: payload.category,
    tool_path: payload.path,
    tool_type: payload.toolType ?? "calculator",
    file_type: payload.fileType,
    download_count: payload.downloadCount ?? 1,
    output_count: payload.outputCount,
  });
}

export function trackCategoryVisit(payload: CategoryVisitPayload) {
  sendAnalyticsEvent("drutilio_category_visit", {
    category_name: payload.category,
    category_path: payload.path,
    category_section: payload.section ?? "hub",
  });
}
