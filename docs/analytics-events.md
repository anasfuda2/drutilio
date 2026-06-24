# Dr.Utilio Analytics Events

This document describes the current Google Analytics 4 event layer used across
Dr.Utilio.

The app sends GA4 events through the reusable helpers in
[`/Users/anasfuda/Documents/Calculators Website/finance-calculators-hub/src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts).

## Privacy note

Dr.Utilio does **not** send personal data, uploaded file contents, extracted
text, image pixels, PDF contents, account data, or free-form user-entered file
data through these analytics events.

Current analytics payloads are limited to:

- tool names
- tool slugs
- route paths
- broad tool categories
- operation names
- file type labels
- output counts
- category hub names

This is intended to support product usage analysis without collecting
personally identifying information.

## GA4 event names

The current platform emits these custom GA4 events:

1. `drutilio_tool_page_view`
2. `drutilio_tool_execution_success`
3. `drutilio_tool_conversion`
4. `drutilio_file_download`
5. `drutilio_category_visit`

## Event reference

### `drutilio_tool_page_view`

Tracks a visit to a registered tool page.

Current helper:

- `trackToolPageVisit()` in
  [`src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts)

Where it currently fires:

- shared tool page wrapper:
  [`src/components/calculators/ToolPage.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ToolPage.tsx)

This means it automatically covers registry-driven calculator/tool pages using
the shared `ToolPage` architecture.

Parameters:

- `tool_slug`
- `tool_name`
- `tool_category`
- `tool_path`
- `tool_type`

Typical example:

```text
event_name: drutilio_tool_page_view
tool_slug: merge-pdf
tool_name: Merge PDF
tool_category: PDF Tools
tool_path: /calculators/merge-pdf
tool_type: calculator
```

Recommended GA4 reports:

- Explore report grouped by `tool_name`
- Landing-page style report using `tool_path`
- Comparison by `tool_category`

Recommended use:

- identify which tools attract the most page-level interest
- compare visits vs successful completions later

### `drutilio_tool_execution_success`

Tracks a successful tool run after the main browser-side operation completes.

Current helper:

- `trackToolExecutionSuccess()` in
  [`src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts)

Where it currently fires:

- PDF tools:
  - [`src/components/calculators/MergePdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/MergePdfClient.tsx)
  - [`src/components/calculators/SplitPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/SplitPdfClient.tsx)
  - [`src/components/calculators/ExtractPdfPagesClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ExtractPdfPagesClient.tsx)
  - [`src/components/calculators/RotatePdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/RotatePdfClient.tsx)
  - [`src/components/calculators/CompressPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/CompressPdfClient.tsx)
  - [`src/components/calculators/PdfToImageClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/PdfToImageClient.tsx)
  - [`src/components/calculators/ImageToPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ImageToPdfClient.tsx)
  - [`src/components/calculators/PdfFileSizeEstimatorClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/PdfFileSizeEstimatorClient.tsx)
- Image tools:
  - [`src/components/calculators/ImageTransformClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ImageTransformClient.tsx)
  - [`src/components/calculators/CropImageClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/CropImageClient.tsx)

Parameters:

- `tool_slug`
- `tool_name`
- `tool_category`
- `tool_path`
- `tool_type`
- `operation`
- `output_count`

Typical example:

```text
event_name: drutilio_tool_execution_success
tool_slug: pdf-to-jpg
tool_name: PDF to JPG
tool_category: PDF Tools
tool_path: /calculators/pdf-to-jpg
tool_type: calculator
operation: pdf-to-jpg
output_count: 3
```

Recommended GA4 reports:

- event count by `tool_name`
- success count by `tool_category`
- funnel comparison:
  - `drutilio_tool_page_view`
  - `drutilio_tool_execution_success`
  - `drutilio_file_download`

How to interpret:

- treat this as the main **tool success** signal
- it means the browser-side job completed and produced an output or usable
  result
- if page views are high but success events are low, the tool may be confusing,
  failing, or not matching intent

### `drutilio_tool_conversion`

Tracks the same successful action as `drutilio_tool_execution_success`, but as a
parallel “conversion-style” event for simpler GA4 goal setup.

Current helper:

- also emitted by `trackToolExecutionSuccess()` in
  [`src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts)

Where it currently fires:

- exactly wherever `drutilio_tool_execution_success` fires

Parameters:

- `tool_slug`
- `tool_name`
- `tool_category`
- `tool_path`
- `tool_type`
- `operation`
- `output_count`

Recommended GA4 reports:

- mark this as a key event in GA4 if you want a simpler platform-wide
  completion signal
- compare conversions by `tool_name` and `tool_category`

How to interpret:

- this is the easiest event to promote to a high-level “completed useful work”
  KPI
- it is intentionally broader than downloads, because some tools produce value
  before a file is downloaded

### `drutilio_file_download`

Tracks a user clicking a generated output download link.

Current helper:

- `trackFileDownload()` in
  [`src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts)

Where it currently fires:

- PDF tools:
  - [`src/components/calculators/MergePdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/MergePdfClient.tsx)
  - [`src/components/calculators/SplitPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/SplitPdfClient.tsx)
  - [`src/components/calculators/ExtractPdfPagesClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ExtractPdfPagesClient.tsx)
  - [`src/components/calculators/RotatePdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/RotatePdfClient.tsx)
  - [`src/components/calculators/CompressPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/CompressPdfClient.tsx)
  - [`src/components/calculators/PdfToImageClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/PdfToImageClient.tsx)
  - [`src/components/calculators/ImageToPdfClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ImageToPdfClient.tsx)
- Image tools:
  - [`src/components/calculators/ImageTransformClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ImageTransformClient.tsx)
  - [`src/components/calculators/CropImageClient.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/CropImageClient.tsx)

Parameters:

- `tool_slug`
- `tool_name`
- `tool_category`
- `tool_path`
- `tool_type`
- `file_type`
- `download_count`
- `output_count`

Typical example:

```text
event_name: drutilio_file_download
tool_slug: image-to-pdf
tool_name: Image to PDF
tool_category: PDF Tools
tool_path: /calculators/image-to-pdf
tool_type: calculator
file_type: pdf
download_count: 1
output_count: 5
```

Recommended GA4 reports:

- download count by `tool_name`
- file type breakdown by `file_type`
- compare `drutilio_tool_execution_success` vs `drutilio_file_download`

How to interpret:

- this is the strongest **output consumption** signal
- use it when you want to know whether people only ran the tool or actually
  took the generated file
- if success is high but download is low, the output may not be what users
  expected or they may be using the result as a preview only

### `drutilio_category_visit`

Tracks visits to broad platform category or hub pages.

Current helper:

- `trackCategoryVisit()` in
  [`src/lib/analytics.ts`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/lib/analytics.ts)

Where it currently fires:

- [`src/app/pdf-tools/page.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/app/pdf-tools/page.tsx)
- [`src/app/pdf-tools/category/page.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/app/pdf-tools/category/page.tsx)
- [`src/app/image-tools/page.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/app/image-tools/page.tsx)

Parameters:

- `category_name`
- `category_path`
- `category_section`

Typical example:

```text
event_name: drutilio_category_visit
category_name: PDF Tools
category_path: /pdf-tools/category
category_section: category-directory
```

Recommended GA4 reports:

- visits by `category_name`
- compare hub traffic vs tool traffic
- path-to-tool analysis starting from category hubs

## Current event coverage summary

### Tool page visit tracking

Currently covered through the shared `ToolPage` architecture for registered
tool routes that use:

- [`src/components/calculators/ToolPage.tsx`](/Users/anasfuda/Documents/Calculators%20Website/finance-calculators-hub/src/components/calculators/ToolPage.tsx)

### Tool success tracking

Currently strongest in:

- PDF tools
- Image tools

That is where successful browser-side workflows and downloads are most clearly
defined today.

### Category visit tracking

Currently active on:

- `/pdf-tools`
- `/pdf-tools/category`
- `/image-tools`

## Recommended GA4 setup

Recommended custom dimensions in GA4:

- `tool_slug`
- `tool_name`
- `tool_category`
- `tool_path`
- `tool_type`
- `operation`
- `file_type`
- `category_name`
- `category_path`
- `category_section`

Recommended custom metrics or numeric parameters to expose:

- `output_count`
- `download_count`

Recommended GA4 reports:

1. **Top tools by visits**
   - Event: `drutilio_tool_page_view`
   - Breakdown: `tool_name`

2. **Top tools by completions**
   - Event: `drutilio_tool_execution_success`
   - Breakdown: `tool_name`

3. **Top tools by downloads**
   - Event: `drutilio_file_download`
   - Breakdown: `tool_name`

4. **Most-used categories**
   - Event: `drutilio_category_visit`
   - Breakdown: `category_name`

5. **Tool funnel**
   - Compare:
     - `drutilio_tool_page_view`
     - `drutilio_tool_execution_success`
     - `drutilio_file_download`
   - Breakdown: `tool_name`

6. **PDF vs Image usage**
   - Compare by `tool_category`
   - Useful for deciding whether to expand document workflows or image workflows next

## How to interpret key events

### Interpreting tool success

Use `drutilio_tool_execution_success` as the main signal that:

- a tool run completed
- the user got a usable output or result
- the workflow is likely functioning from the user’s perspective

Good signs:

- high page views
- healthy success rate
- healthy follow-through to downloads where downloading makes sense

Possible warning signs:

- high page views, low success
  - the UI may be confusing
  - the input requirements may be unclear
  - the browser-side processing may be failing on real files

### Interpreting tool downloads

Use `drutilio_file_download` as the main signal that:

- the user wanted the generated file enough to take it
- the output format met their need
- the tool delivered something concrete, not just a preview

Possible patterns:

- **high success + high download**
  - the tool is likely doing exactly what users came for
- **high success + low download**
  - the tool may be useful for previewing or checking
  - or the output may not be good enough to keep
- **low success + low download**
  - likely a friction or reliability problem

## Notes for future expansion

If Dr.Utilio adds more real browser-side tools later, the best next step is to
reuse the same helper functions rather than inventing new event names.

That keeps reporting stable and makes cross-tool comparisons much easier over
time.
