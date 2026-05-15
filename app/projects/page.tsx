"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const { lang } = useContext(LanguageContext);

  const t = {
    title: lang === "en" ? "Projects" : "Proyectos",
    rondaDesc:
      lang === "en"
        ? "Marketplace platform designed for small entrepreneurs."
        : "Plataforma marketplace diseñada para pequeños emprendedores.",
    chatDesc:
      lang === "en"
        ? "Real-time second-hand buying and selling app."
        : "App de compra/venta de segunda mano en tiempo real.",
  };

  return (
    <section className="container-custom py-20">
      <h1 className="text-5xl font-bold mb-10">{t.title}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Ronda Market"
          description={t.rondaDesc}
          stack={["Next.js", "Supabase", "PostgreSQL", "TypeScript"]}
          href="/projects/ronda"
        />

        <ProjectCard
          title="MercadoChat"
          description={t.chatDesc}
          stack={["Next.js", "Supabase", "Tailwind CSS", "TypeScript"]}
          href="/projects/chat"
        />
      </div>
    </section>
  );
}
