import Link from "next/link";
import { Code2, Database, Server, Braces } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="container-custom py-28 relative 
                   bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]"
      >
        {/* LOGO DE FONDO SUTIL */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="absolute top-10 right-10 h-16 w-auto opacity-[0.08] pointer-events-none select-none"
        />

        <div className="max-w-3xl relative z-10">
          <FadeIn>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight text-white 
                         drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6"
            >
              Full‑Stack Developer
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Building real-world web applications with Next.js, Supabase and PostgreSQL.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-white text-black px-6 py-3 font-medium
                           hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-zinc-700 px-6 py-3 text-white
                           hover:border-zinc-500 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <Section title="About">
        <p className="max-w-3xl text-zinc-400 leading-8">
          I’m a self-taught full-stack developer focused on building real, production-ready applications.
        </p>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Ronda Market"
            description="Marketplace platform for entrepreneurs with dashboards and automated commissions."
            stack={["Next.js", "Supabase", "PostgreSQL", "Tailwind"]}
            href="/projects/ronda"
          />

          <ProjectCard
            title="MercadoChat"
            description="Real-time buy-and-sell app focused on speed and simplicity."
            stack={["Next.js", "Supabase", "Realtime", "TypeScript"]}
            href="/projects/chat"
          />
        </div>
      </Section>

      {/* TECH STACK */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Next.js", <Code2 key="1" />],
            ["React", <Braces key="2" />],
            ["Node.js", <Server key="3" />],
            ["PostgreSQL", <Database key="4" />],
            ["Supabase", <Database key="5" />],
            ["Tailwind CSS", <Code2 key="6" />],
            ["TypeScript", <Braces key="7" />],
          ].map(([label, icon]) => (
            <div
              key={label as string}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 flex items-center gap-4
                         hover:scale-[1.02] hover:border-zinc-700 transition-all duration-300"
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
