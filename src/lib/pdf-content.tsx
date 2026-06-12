import Link from "next/link";
import type { Metadata } from "next";
import type { PdfArticleContent } from "@/components/content/PdfArticlePage";

function pdfLink(href: string, label: string) {
  return (
    <Link
      href={href}
      className="font-semibold text-emerald-300 hover:text-emerald-200"
    >
      {label}
    </Link>
  );
}

type PdfArticleMap = Record<string, PdfArticleContent>;

export const pdfArticleContent: PdfArticleMap = {
  "pdf-compression-guide": {
    title: "PDF Compression Guide",
    description:
      "Learn what usually affects PDF file size and how compression choices can change document size and quality.",
    path: "/pdf-compression-guide",
    intro: (
      <>
        <p>
          PDF compression is usually about reducing file size while keeping the
          document usable. In practice, the biggest drivers are image density,
          image quality, page count, fonts, and export settings.
        </p>
        <p>
          Dr.Utilio now includes a browser-based{" "}
          {pdfLink("/calculators/compress-pdf", "Compress PDF")} tool, so this
          guide focuses on understanding the tradeoffs behind compression
          rather than pretending every PDF behaves the same way.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why PDFs become large",
        content: (
          <>
            <p>
              Large PDFs are often driven by high-resolution images, scans with
              heavy visual detail, embedded fonts, or extra metadata. A text
              document with only a few pages behaves very differently from a
              presentation deck exported with many screenshots.
            </p>
          </>
        ),
      },
      {
        title: "Compression is a quality tradeoff",
        content: (
          <>
            <p>
              Compression often works by reducing image detail, changing image
              encoding, or removing overhead. The right setting depends on
              whether the file is being used for print, email, upload limits, or
              everyday viewing.
            </p>
            <p>
              If you want a rough size planning tool before that step, use the{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF file size estimator",
              )}.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Continue with the {pdfLink("/pdf-tools", "PDF tools hub")},{" "}
              {pdfLink("/calculators/compress-pdf", "Compress PDF")},{" "}
              {pdfLink("/pdf-tools/category", "PDF tools category")},{" "}
              {pdfLink("/merge-pdf-guide", "merge PDF guide")},{" "}
              {pdfLink("/split-pdf-guide", "split PDF guide")}, and{" "}
              {pdfLink("/image-to-pdf-guide", "image to PDF guide")} for the rest
              of the cluster.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does compression always reduce quality?", answer: "Often yes, especially when image-heavy documents are reduced aggressively." },
      { question: "Are text PDFs usually smaller than scan-heavy PDFs?", answer: "Usually yes, because scan-heavy files often embed larger image data." },
      { question: "Can PDF size estimates be exact?", answer: "No. They are usually rough because export settings and file content vary." },
      { question: "Can Dr.Utilio compress PDFs now?", answer: "Yes. Dr.Utilio now offers a working client-side Compress PDF tool that runs locally in the browser." },
    ],
  },
  "merge-pdf-guide": {
    title: "Merge PDF Guide",
    description:
      "Learn what merging PDFs usually involves and how page order, file quality, and duplicate pages can affect the result.",
    path: "/merge-pdf-guide",
    intro: (
      <>
        <p>
          Merging PDFs sounds simple, but a clean result still depends on page
          order, source quality, and checking whether the combined file remains
          easy to read and share.
        </p>
        <p>
          Dr.Utilio now includes a working client-side{" "}
          {pdfLink("/calculators/merge-pdf", "Merge PDF")} tool, so this guide
          focuses on workflow decisions and edge cases rather than acting as a
          placeholder.
        </p>
      </>
    ),
    sections: [
      {
        title: "Merging is mostly about document flow",
        content: (
          <>
            <p>
              The technical step is usually straightforward. The real question
              is whether the final order makes sense, whether page sizes are
              consistent enough, and whether any duplicates or blank pages need
              to be removed first.
            </p>
          </>
        ),
      },
      {
        title: "File size can jump after merging",
        content: (
          <>
            <p>
              Combining several PDFs can produce a much larger file, especially
              when multiple source files contain large images or scanned pages.
              The {pdfLink("/pdf-compression-guide", "PDF compression guide")} and{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF file size estimator",
              )}{" "}
              are useful companions here.
            </p>
            <p>
              If you want the live browser-side workflow itself, use{" "}
              {pdfLink("/calculators/merge-pdf", "Merge PDF")}.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Visit {pdfLink("/calculators/merge-pdf", "Merge PDF")},{" "}
              {pdfLink("/calculators/split-pdf", "Split PDF")},{" "}
              {pdfLink("/calculators/extract-pdf-pages", "Extract PDF Pages")},{" "}
              {pdfLink("/calculators/rotate-pdf", "Rotate PDF")},{" "}
              the {pdfLink("/pdf-tools", "PDF tools hub")},{" "}
              {pdfLink("/pdf-tools/category", "PDF tools category")},{" "}
              {pdfLink("/split-pdf-guide", "split PDF guide")},{" "}
              {pdfLink("/pdf-compression-guide", "PDF compression guide")}, and{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF file size estimator",
              )}{" "}
              if you are comparing opposite document workflows.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does merging always keep source quality unchanged?", answer: "Often yes, but downstream export or re-save behavior can still affect file size and readability." },
      { question: "Can merged files become much larger?", answer: "Yes, especially when the inputs are image-heavy or scan-heavy." },
      { question: "Should I check page order before sharing?", answer: "Yes. Order and duplicate pages are among the most common practical issues." },
      { question: "Can Dr.Utilio merge PDFs now?", answer: "Yes. Dr.Utilio now offers a working client-side Merge PDF tool that runs locally in the browser." },
    ],
  },
  "split-pdf-guide": {
    title: "Split PDF Guide",
    description:
      "Learn how splitting a PDF works and why page ranges, file naming, and source quality matter in the process.",
    path: "/split-pdf-guide",
    intro: (
      <>
        <p>
          Splitting a PDF is usually about separating a large document into
          smaller parts that are easier to send, organize, or review.
        </p>
        <p>
          Dr.Utilio now includes a working client-side{" "}
          {pdfLink("/calculators/split-pdf", "Split PDF")} tool, so this guide
          focuses on workflow planning rather than acting as a placeholder.
        </p>
      </>
    ),
    sections: [
      {
        title: "Why people split PDFs",
        content: (
          <>
            <p>
              Common reasons include email attachment limits, organizing
              chapters or sections, sending only selected pages, or separating
              scanned batches into smaller documents.
            </p>
          </>
        ),
      },
      {
        title: "Page ranges matter more than the button click",
        content: (
          <>
            <p>
              The real planning step is usually deciding which pages belong
              together, how the files should be named, and whether the resulting
              pieces will still make sense when opened on their own.
            </p>
            <p>
              If you want the live browser-side workflow itself, use{" "}
              {pdfLink("/calculators/split-pdf", "Split PDF")}.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Compare {pdfLink("/calculators/split-pdf", "Split PDF")},{" "}
              {pdfLink("/calculators/extract-pdf-pages", "Extract PDF Pages")},{" "}
              {pdfLink("/calculators/merge-pdf", "Merge PDF")}, and the{" "}
              {pdfLink("/merge-pdf-guide", "merge PDF guide")}
              , the {pdfLink("/pdf-tools", "PDF tools hub")}, the{" "}
              {pdfLink("/pdf-tools/category", "PDF tools category")}, and the{" "}
              {pdfLink("/pdf-compression-guide", "PDF compression guide")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does splitting reduce file size automatically?", answer: "It reduces the size of each output part, but not always in perfectly proportional ways." },
      { question: "Can page numbering become confusing after splitting?", answer: "Yes. It helps to rename outputs clearly so context is not lost." },
      { question: "Is splitting mainly about organization?", answer: "Often yes. Organization and shareability are the most common reasons." },
      { question: "Can Dr.Utilio split PDFs now?", answer: "Yes. Dr.Utilio now offers a working client-side Split PDF tool that runs locally in the browser." },
    ],
  },
  "pdf-to-word-guide": {
    title: "PDF to Word Guide",
    description:
      "Learn what usually affects PDF to Word conversion quality, especially layout complexity, scans, and images.",
    path: "/pdf-to-word-guide",
    intro: (
      <>
        <p>
          PDF to Word conversion is usually about turning a fixed-layout
          document into something editable. That sounds convenient, but the
          quality of the result depends heavily on the source file.
        </p>
        <p>
          This page is educational only. Dr.Utilio is not converting PDFs to
          Word on this route yet.
        </p>
      </>
    ),
    sections: [
      {
        title: "Simple documents convert more cleanly",
        content: (
          <>
            <p>
              Text-heavy PDFs with straightforward headings and paragraphs are
              usually easier to convert than scan-heavy or design-heavy files.
              Complex tables, images, and layered layouts often need manual
              cleanup after conversion.
            </p>
          </>
        ),
      },
      {
        title: "Scanned PDFs are a separate challenge",
        content: (
          <>
            <p>
              If the PDF is really a collection of scanned page images, the
              process often depends on OCR. That adds another layer of
              variation, especially for unusual fonts, dense layouts, or
              low-quality scans.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Continue with the {pdfLink("/pdf-tools", "PDF tools hub")},{" "}
              {pdfLink("/pdf-tools/category", "PDF tools category")}, the{" "}
              {pdfLink("/calculators/pdf-to-jpg", "PDF to JPG")},{" "}
              {pdfLink("/calculators/pdf-to-png", "PDF to PNG")}, the{" "}
              {pdfLink("/image-to-pdf-guide", "image to PDF guide")}, and the{" "}
              {pdfLink("/merge-pdf-guide", "merge PDF guide")} if your workflow
              moves between scans and editable documents.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Do all PDFs convert cleanly to Word?", answer: "No. Layout complexity and source quality often determine how much cleanup is needed." },
      { question: "Are scans harder to convert than text PDFs?", answer: "Usually yes, because scans often require OCR." },
      { question: "Will formatting always stay identical?", answer: "Not always. Tables, fonts, and spacing often need review." },
      { question: "Can Dr.Utilio convert PDFs to Word here yet?", answer: "Not yet. This page is educational only for now." },
    ],
  },
  "image-to-pdf-guide": {
    title: "Image to PDF Guide",
    description:
      "Learn what usually matters when turning images into PDFs, including page order, image quality, browser-side conversion, and resulting file size.",
    path: "/image-to-pdf-guide",
    intro: (
      <>
        <p>
          Image to PDF workflows are common for scans, photo-based paperwork,
          and simple document bundles. The key questions are usually image
          order, readability, and final file size.
        </p>
        <p>
          Dr.Utilio now includes working client-side image-to-PDF tools, so
          this guide focuses on the surrounding tradeoffs rather than serving
          only as a placeholder page.
        </p>
      </>
    ),
    sections: [
      {
        title: "The biggest tradeoff is often clarity versus size",
        content: (
          <>
            <p>
              Higher image quality usually makes text and details easier to see,
              but it can also make the final PDF much larger. That is one reason
              a size estimate can be useful before export.
            </p>
            <p>
              If you want the working browser tool itself, use{" "}
              {pdfLink("/calculators/image-to-pdf", "Image to PDF")}.
            </p>
          </>
        ),
      },
      {
        title: "Order and orientation matter",
        content: (
          <>
            <p>
              Beyond file size, the practical quality of the result depends on
              whether pages are in the right order, rotated correctly, and easy
              to review as a single document.
            </p>
            <p>
              Dr.Utilio&apos;s converter keeps the workflow in the browser and
              lets you reorder pages before download, which is one of the most
              important practical parts of an image-based PDF workflow.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Use{" "}
              {pdfLink("/calculators/image-to-pdf", "Image to PDF")},{" "}
              {pdfLink("/calculators/jpg-to-pdf", "JPG to PDF")},{" "}
              {pdfLink("/calculators/png-to-pdf", "PNG to PDF")},{" "}
              {pdfLink("/calculators/pdf-to-jpg", "PDF to JPG")},{" "}
              {pdfLink("/calculators/pdf-to-png", "PDF to PNG")},{" "}
              the{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF file size estimator",
              )},
              the {pdfLink("/pdf-compression-guide", "PDF compression guide")},
              the {pdfLink("/merge-pdf-guide", "merge PDF guide")},
              the {pdfLink("/pdf-tools/category", "PDF tools category")},
              and the {pdfLink("/pdf-tools", "PDF tools hub")} as the next
              references.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Can image-based PDFs become very large?", answer: "Yes. Image count, quality, and page count can increase size quickly." },
      { question: "Does image order matter?", answer: "Yes. Order is one of the most important practical parts of the workflow." },
      { question: "Can low-quality images hurt readability?", answer: "Yes. Small or heavily compressed images can make text hard to read." },
      { question: "Can Dr.Utilio convert images to PDFs now?", answer: "Yes. Dr.Utilio now offers working client-side Image to PDF, JPG to PDF, and PNG to PDF tools that run in the browser." },
    ],
  },
  "jpg-to-pdf-guide": {
    title: "JPG to PDF Guide",
    description:
      "Learn how JPG to PDF workflows usually behave, including image quality tradeoffs, page order, and browser-side document creation.",
    path: "/jpg-to-pdf-guide",
    intro: (
      <>
        <p>
          JPG to PDF workflows are common when photos, scans, or phone-camera
          images need to be bundled into one shareable document.
        </p>
        <p>
          This guide explains the practical tradeoffs while the working{" "}
          {pdfLink("/calculators/jpg-to-pdf", "JPG to PDF")} converter handles
          the actual browser-side export.
        </p>
      </>
    ),
    sections: [
      {
        title: "JPG is often efficient for photo-heavy pages",
        content: (
          <>
            <p>
              JPEG is commonly used for photo-heavy content because it can keep
              file size lower than some other formats while still preserving a
              usable visual result.
            </p>
          </>
        ),
      },
      {
        title: "Order and source quality still matter",
        content: (
          <>
            <p>
              Even when the conversion step is easy, the usefulness of the
              final PDF depends on page order, legibility, lighting, cropping,
              and whether the original images are clean enough to read.
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Continue with {pdfLink("/calculators/jpg-to-pdf", "JPG to PDF")},
              {pdfLink("/calculators/image-to-pdf", " Image to PDF")},{" "}
              {pdfLink("/calculators/png-to-pdf", "PNG to PDF")},{" "}
              {pdfLink("/pdf-tools", "the PDF tools hub")}, and{" "}
              {pdfLink("/image-to-pdf-guide", "the Image to PDF guide")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "When is JPG to PDF a good fit?", answer: "It is often a practical fit for photos, camera scans, and other JPEG-based image bundles." },
      { question: "Does JPG usually keep file size lower than some lossless formats?", answer: "Often yes, especially for photo-heavy content, though exact results vary." },
      { question: "Can I reorder JPG pages before download?", answer: "Yes. Dr.Utilio's JPG to PDF tool lets you rearrange the upload order before export." },
      { question: "Is the browser doing the conversion locally?", answer: "Yes. The current tool is designed as a client-side local workflow." },
    ],
  },
  "png-to-pdf-guide": {
    title: "PNG to PDF Guide",
    description:
      "Learn how PNG to PDF workflows usually behave, especially for screenshots, diagrams, transparency, and image-heavy document size.",
    path: "/png-to-pdf-guide",
    intro: (
      <>
        <p>
          PNG to PDF workflows are useful for screenshots, diagrams, forms, and
          crisp image assets that need to be packaged into one PDF.
        </p>
        <p>
          This guide explains the practical tradeoffs while the working{" "}
          {pdfLink("/calculators/png-to-pdf", "PNG to PDF")} tool handles the
          browser-side export itself.
        </p>
      </>
    ),
    sections: [
      {
        title: "PNG often favors sharp detail over smaller size",
        content: (
          <>
            <p>
              PNG is commonly used for screenshots, interface captures, charts,
              or diagrams because it can preserve cleaner edges and text detail
              than some photo-oriented formats.
            </p>
          </>
        ),
      },
      {
        title: "File size can climb quickly",
        content: (
          <>
            <p>
              The tradeoff is that PNG-based documents can become large,
              especially when many pages are involved. That is why it can help
              to compare the result against the{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF File Size Estimator",
              )}
              .
            </p>
          </>
        ),
      },
      {
        title: "Related PDF Tools",
        content: (
          <>
            <p>
              Continue with {pdfLink("/calculators/png-to-pdf", "PNG to PDF")},
              {pdfLink("/calculators/image-to-pdf", " Image to PDF")},{" "}
              {pdfLink("/calculators/jpg-to-pdf", "JPG to PDF")},{" "}
              {pdfLink("/pdf-tools", "the PDF tools hub")}, and{" "}
              {pdfLink("/image-to-pdf-guide", "the Image to PDF guide")}.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "When is PNG to PDF especially useful?", answer: "It is often useful for screenshots, diagrams, forms, and assets where crisp line detail matters." },
      { question: "Can PNG-based PDFs be larger than expected?", answer: "Yes. PNG-heavy workflows can produce larger PDFs, especially across many pages." },
      { question: "Can transparency affect PDF output?", answer: "Yes. Transparent PNGs may be flattened during browser-side conversion." },
      { question: "Is Dr.Utilio's PNG to PDF workflow local to the browser?", answer: "Yes. The current converter is designed to run client-side in the browser." },
    ],
  },
};

export function getPdfArticle(slug: string) {
  return pdfArticleContent[slug];
}

export function getPdfArticleMetadata(slug: string): Metadata {
  const article = getPdfArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.path,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: article.path,
    },
  };
}
