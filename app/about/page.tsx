"use client";

import FadeIn from "@/components/FadeIn";
import { useContext } from "react";
import { LanguageContext } from "@/app/LanguageProvider";

export default function AboutPage() {
  const { lang } = useContext(LanguageContext);

  const t = {
    title: lang === "en" ? "About Me" : "Sobre mí",

    p1:
      lang === "en"
        ? "I’m a self‑taught full‑stack developer focused on building real, production‑ready applications using modern technologies like Next.js, Supabase, PostgreSQL and Tailwind CSS. I enjoy creating intuitive and efficient digital products, combining business logic with clean UI design."
        : "Soy un desarrollador full‑stack autodidacta enfocado en construir aplicaciones reales y listas para producción usando tecnologías modernas como Next.js, Supabase, PostgreSQL y Tailwind CSS. Disfruto crear productos digitales intuitivos y eficientes, combinando lógica de negocio con un diseño limpio y funcional.",

    p2:
      lang === "en"
        ? "I’m currently working on Ronda Market and MercadoChat, two real‑world applications built from scratch — including authentication, role‑based dashboards, real‑time features, secure database rules and modern UI/UX."
        : "Actualmente estoy trabajando en Ronda Market y MercadoChat, dos aplicaciones reales construidas desde cero — con autenticación, paneles según rol, funcionalidades en tiempo real, reglas de base de datos seguras y una UI/UX moderna.",

    p3:
      lang === "en"
        ? "My goal is to keep improving as a developer, build products that solve real problems, and work with teams where I can contribute, learn and grow."
        : "Mi objetivo es seguir mejorando como desarrollador, crear productos que resuelvan problemas reales y trabajar con equipos donde pueda aportar, aprender y crecer.",
  };

  return (
    <section className="container-custom py-28">
      {/* TITLE */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-8">
          {t.title}
        </h1>
      </FadeIn>

      {/* PARAGRAPH */}
      <FadeIn>
        <p className="text-zinc-400 leading-8 max-w-3xl text-lg mb-10">
          {t.p1}
          <br /><br />
          <span className="text-white font-medium">Ronda Market</span> {lang === "en" ? "and" : "y"}{" "}
          <span className="text-white font-medium">MercadoChat</span>. {t.p2.replace("Ronda Market and MercadoChat, ", "")}
          <br /><br />
          {t.p3}
        </p>
      </FadeIn>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10 mt-20" />
    </section>
  );
}
