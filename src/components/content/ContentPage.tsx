import { ReactNode } from "react";
import { AdPlaceholder } from "@/components/ads/AdPlaceholder";
import { Container } from "@/components/layout/Container";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function ContentPage({
  eyebrow,
  title,
  intro,
  children,
}: ContentPageProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{intro}</p>
        </div>

        <div className="mt-10">
          <AdPlaceholder placement="article-inline" />
        </div>

        <div className="mt-10 grid gap-6">
          {children}
        </div>
      </Container>
    </section>
  );
}
