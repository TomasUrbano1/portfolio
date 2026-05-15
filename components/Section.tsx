"use client";

import FadeIn from "@/components/FadeIn";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Título con animación y jerarquía visual mejorada */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight text-white">
            {title}
          </h2>
        </FadeIn>

        {/* Contenido animado */}
        <FadeIn>
          {children}
        </FadeIn>

        {/* Separador sutil entre secciones */}
        <div className="h-px w-full bg-white/10 mt-16" />
      </div>
    </section>
  );
}
