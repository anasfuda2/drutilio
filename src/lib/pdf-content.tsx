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
          This guide is educational only. Dr.Utilio is not processing files on
          this page yet, so the goal here is to explain the concepts and help
          you estimate the tradeoffs before using a compression workflow.
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
        title: "Related PDF guides",
        content: (
          <>
            <p>
              Continue with the {pdfLink("/pdf-tools", "PDF tools hub")},{" "}
              {pdfLink("/merge-pdf-guide", "merge PDF guide")}, and{" "}
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
      { question: "Can Dr.Utilio compress PDFs on this page yet?", answer: "Not yet. This page is educational only at this stage." },
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
          This guide is educational only. Dr.Utilio is not processing uploaded
          PDFs on this page yet.
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
          </>
        ),
      },
      {
        title: "Where to go next",
        content: (
          <>
            <p>
              Visit the {pdfLink("/pdf-tools", "PDF tools hub")} and the{" "}
              {pdfLink("/split-pdf-guide", "split PDF guide")} if you are
              comparing opposite document workflows.
            </p>
          </>
        ),
      },
    ],
    faqItems: [
      { question: "Does merging always keep source quality unchanged?", answer: "Often yes, but downstream export or re-save behavior can still affect file size and readability." },
      { question: "Can merged files become much larger?", answer: "Yes, especially when the inputs are image-heavy or scan-heavy." },
      { question: "Should I check page order before sharing?", answer: "Yes. Order and duplicate pages are among the most common practical issues." },
      { question: "Can Dr.Utilio merge PDFs on this page yet?", answer: "Not yet. This page is educational only for now." },
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
          This page is educational only. Dr.Utilio is not yet processing files
          on this route.
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
          </>
        ),
      },
      {
        title: "Related PDF workflows",
        content: (
          <>
            <p>
              Compare this with the {pdfLink("/merge-pdf-guide", "merge PDF guide")}
              , the {pdfLink("/pdf-tools", "PDF tools hub")}, and the{" "}
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
      { question: "Can Dr.Utilio split PDFs on this route yet?", answer: "Not yet. This page is educational only for now." },
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
        title: "Where to go next",
        content: (
          <>
            <p>
              Continue with the {pdfLink("/pdf-tools", "PDF tools hub")} and the{" "}
              {pdfLink("/image-to-pdf-guide", "image to PDF guide")} if your
              workflow moves between scans and editable documents.
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
      "Learn what usually matters when turning images into PDFs, including page order, image quality, and resulting file size.",
    path: "/image-to-pdf-guide",
    intro: (
      <>
        <p>
          Image to PDF workflows are common for scans, photo-based paperwork,
          and simple document bundles. The key questions are usually image
          order, readability, and final file size.
        </p>
        <p>
          This page is educational only. Dr.Utilio is not yet processing image
          uploads into PDFs on this route.
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
          </>
        ),
      },
      {
        title: "Related PDF tools",
        content: (
          <>
            <p>
              Use the{" "}
              {pdfLink(
                "/calculators/pdf-file-size-estimator",
                "PDF file size estimator",
              )},
              the {pdfLink("/pdf-compression-guide", "PDF compression guide")},
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
      { question: "Can Dr.Utilio convert images to PDFs here yet?", answer: "Not yet. This page is educational only for now." },
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
