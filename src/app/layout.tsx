import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig, toAbsoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Drutilio is a growing platform for smart online tools and calculators, starting with US-focused financial calculators for mortgages, loans, savings, retirement, and student loan planning.",
  applicationName: siteConfig.name,
  keywords: [
    "financial calculators",
    "online tools",
    "smart calculators",
    "US finance tools",
    "mortgage calculator",
    "loan calculator",
    "retirement calculator",
    "savings calculator",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: siteConfig.name,
    description:
      `${siteConfig.name} is a growing platform for smart online tools and calculators, including US-focused financial planning tools and educational estimates.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: toAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.subtitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      `${siteConfig.subtitle}. Start with mortgages, loans, savings, retirement, and student loan tools.`,
    images: [toAbsoluteUrl("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
