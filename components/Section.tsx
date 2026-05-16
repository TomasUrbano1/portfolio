// components/Section.tsx
"use client";

import React, { useContext } from "react";
import FadeIn from "@/components/FadeIn";
import { LanguageContext } from "@/app/LanguageProvider";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  hideDivider?: boolean;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  hideDivider = false,
}: SectionProps): JSX.Element {
  const { lang } = useContext(LanguageContext);

  const headingId =
    id ?? (title ? `section-${title.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="container-custom">
        {title && (
          <FadeIn>
            <header className="mb-8">
              <h2
                id={headingId}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight text-white"
              >
                {title}
              </h2>

              {subtitle && (
                <p className="text-sm md:text-base text-zinc-400 max-w-3xl">
                  {subtitle}
                </p>
              )}
            </header>
          </FadeIn>
        )}

        <FadeIn>
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </FadeIn>

        {!hideDivider && (
          <div className="h-px w-full bg-white/10 mt-12" />
        )}
      </div>
    </section>
  );
}
