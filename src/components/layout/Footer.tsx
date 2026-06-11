import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container className="grid gap-8 py-8 text-sm text-slate-400 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-xl">
          <p className="font-medium text-slate-200">{siteConfig.name}</p>
          <p className="mt-1 text-slate-300">{siteConfig.subtitle}</p>
          <p className="mt-2">
            Drutilio is a growing tools platform. It currently focuses on
            financial calculators for common US planning scenarios. Calculator
            outputs are educational estimates only and are not financial, tax,
            legal, or investment advice.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-slate-200">Site</p>
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/calculators" className="transition hover:text-white">
              Explore calculators
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-slate-200">Policies</p>
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
