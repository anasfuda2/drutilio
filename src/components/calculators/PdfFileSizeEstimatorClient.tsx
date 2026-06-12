"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  calculatePdfFileSizeEstimate,
  formatNumber,
} from "@/lib/calculators";
import { CalculatorField } from "@/components/calculators/CalculatorField";
import { CalculatorPanel } from "@/components/calculators/CalculatorPanel";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { CalculatorSelectField } from "@/components/calculators/CalculatorSelectField";
import { ResultGrid } from "@/components/calculators/ResultGrid";
import { trackToolExecutionSuccess } from "@/lib/analytics";

export function PdfFileSizeEstimatorClient() {
  const [numberOfPages, setNumberOfPages] = useState(12);
  const [averageImagesPerPage, setAverageImagesPerPage] = useState(2);
  const [imageQualityLevel, setImageQualityLevel] = useState("medium");
  const [documentStyle, setDocumentStyle] = useState("balanced");
  const hasTrackedInitialEstimate = useRef(false);

  const result = useMemo(
    () =>
      calculatePdfFileSizeEstimate({
        numberOfPages,
        averageImagesPerPage,
        imageQualityLevel: imageQualityLevel as "low" | "medium" | "high",
        documentStyle: documentStyle as "text-heavy" | "balanced" | "image-heavy",
      }),
    [averageImagesPerPage, documentStyle, imageQualityLevel, numberOfPages],
  );

  useEffect(() => {
    if (hasTrackedInitialEstimate.current) {
      return;
    }

    hasTrackedInitialEstimate.current = true;
    trackToolExecutionSuccess({
      slug: "pdf-file-size-estimator",
      name: "PDF File Size Estimator",
      category: "PDF Tools",
      path: "/calculators/pdf-file-size-estimator",
      operation: "pdf-size-estimate",
    });
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <CalculatorPanel>
        <div className="grid gap-5 md:grid-cols-2">
          <CalculatorField
            id="pdf-pages"
            label="Number of pages"
            value={numberOfPages}
            onChange={setNumberOfPages}
            step={1}
          />
          <CalculatorField
            id="pdf-images-per-page"
            label="Average images per page"
            value={averageImagesPerPage}
            onChange={setAverageImagesPerPage}
            step={0.1}
          />
          <CalculatorSelectField
            id="pdf-image-quality"
            label="Image quality level"
            value={imageQualityLevel}
            onChange={setImageQualityLevel}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
          />
          <CalculatorSelectField
            id="pdf-document-style"
            label="Document style"
            value={documentStyle}
            onChange={setDocumentStyle}
            options={[
              { value: "text-heavy", label: "Text-heavy" },
              { value: "balanced", label: "Balanced" },
              { value: "image-heavy", label: "Image-heavy" },
            ]}
          />
        </div>
      </CalculatorPanel>

      <CalculatorResult
        title="Estimated PDF size"
        value={`${formatNumber(result.totalEstimatedMb, 2)} MB`}
        detail="This is only a rough estimate based on simplified assumptions about layout and image density."
        warning="Actual PDF size can vary significantly depending on compression method, fonts, embedded metadata, and export settings."
      >
        <ResultGrid
          items={[
            {
              label: "Estimated total KB",
              value: `${formatNumber(result.totalEstimatedKb, 0)} KB`,
            },
            {
              label: "Estimated per page",
              value: `${formatNumber(result.estimatedPerPageKb, 0)} KB`,
            },
            {
              label: "Pages counted",
              value: formatNumber(result.pages, 0),
            },
          ]}
        />
      </CalculatorResult>
    </div>
  );
}
