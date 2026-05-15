"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <section className="container-custom py-28">
      {/* TITLE */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-8">
          About Me
        </h1>
      </FadeIn>

      {/* PARAGRAPH */}
      <FadeIn>
        <p className="text-zinc-400 leading-8 max-w-3xl text-lg mb-10">
          I’m a self-taught full‑stack developer focused on building real, 
          production‑ready applications using modern technologies like Next.js, 
          Supabase, PostgreSQL and Tailwind CSS. I enjoy creating intuitive and 
          efficient digital products, combining business logic with clean UI design.
          <br /><br />
          I’m currently working on <span className="text-white font-medium">Ronda Market</span> 
          and <span className="text-white font-medium">MercadoChat</span>, two real‑world 
          applications built from scratch — including authentication, role‑based dashboards, 
          real‑time features, secure database rules and modern UI/UX.
          <br /><br />
          My goal is to keep improving as a developer, build products that solve real problems, 
          and work with teams where I can contribute, learn and grow.
        </p>
      </FadeIn>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10 mt-20" />
    </section>
  );
}
