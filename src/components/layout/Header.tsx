import Link from "next/link";
import { Container } from "@/components/layout/Container";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            US Personal Finance
          </span>
          <span className="text-lg font-semibold text-white">
            Finance Calculators Hub
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
