"use client";

import { useEffect, useRef } from "react";
import {
  trackCategoryVisit,
  trackToolPageVisit,
} from "@/lib/analytics";

type AnalyticsTrackerProps =
  | {
      type: "tool-page";
      slug: string;
      name: string;
      category: string;
      path: string;
      toolType?: string;
    }
  | {
      type: "category-visit";
      category: string;
      path: string;
      section?: string;
    };

export function AnalyticsTracker(props: AnalyticsTrackerProps) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (hasTrackedRef.current) {
      return;
    }

    hasTrackedRef.current = true;

    if (props.type === "tool-page") {
      trackToolPageVisit({
        slug: props.slug,
        name: props.name,
        category: props.category,
        path: props.path,
        toolType: props.toolType,
      });
      return;
    }

    trackCategoryVisit({
      category: props.category,
      path: props.path,
      section: props.section,
    });
  }, [props]);

  return null;
}
