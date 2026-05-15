// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Code2, Database, Server, Braces } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* HERO */}
      <section
        className="container-custom py-16 md:py-24 relative
                   bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_70%)]"
        aria-labelledby="hero-title"
      >
        {/* LOGO DE FONDO SUTIL */}
        <div className="pointer-events-none select-none absolute top-6 right-6 opacity-8 z-0">
          <Image
            src="/logo.svg"
            alt="Tomás Urbano logo"
            width={120}
            height={120}
            className="opacity-8"
            priority
          />
        </div>

        <div className="max-w-3xl relative z-10">
          <FadeIn>
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white
                         drop-shadow-[0_0_12px_rgba(255,255,255,0.12)] mb-3 md:mb-5 leading-tight"
            >
              I build fast, production‑ready web apps
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-base md:text-lg text-zinc-400 mb-6 md:mb-8 leading-relaxed">
              Modern full‑stack development with Next.js, Supabase and PostgreSQL — focused on
              performance, reliability and delightful UX.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium
                           hover:bg-white/95 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-transform duration-200"
                aria-label="Contact Tomás"
              >
                Contact Me
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-white
                           hover:border-zinc-500 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 transition-transform duration-200"
                aria-label="View projects"
              >
                View Projects
                <span className="ml-3 text-zinc-400" aria-hidden>
                  ↗
                </span>
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-5 text-sm text-zinc-500">
              Available for freelance and contract work — open to remote opportunities.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <Section title="About">
        <p className="max-w-3xl text-zinc-400 leading-8">
          I’m a self-taught full‑stack developer building production applications used by real
          people. I focus on fast load times, reliable backends and clean UX. Currently working on
          Ronda Market and MercadoChat.
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
            image="/projects/ronda-preview.png"
          />

          <ProjectCard
            title="MercadoChat"
            description="Real-time buy-and-sell app focused on speed and simplicity."
            stack={["Next.js", "Supabase", "Realtime", "TypeScript"]}
            href="/projects/chat"
            image="/projects/mercadochat-preview.png"
          />
        </div>
      </Section>

      {/* TECH STACK */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(
            [
              ["Next.js", <Code2 key="1" />],
              ["React", <Braces key="2" />],
              ["Node.js", <Server key="3" />],
              ["PostgreSQL", <Database key="4" />],
              ["Supabase", <Database key="5" />],
              ["Tailwind CSS", <Code2 key="6" />],
              ["TypeScript", <Braces key="7" />],
            ] as [string, JSX.Element][]
          ).map(([label, icon]) => (
            <div
              key={label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 flex items-center gap-4
                         hover:scale-[1.02] hover:border-zinc-700 transition-all duration-200"
              role="listitem"
              aria-label={label}
            >
              <div className="text-zinc-200">{icon}</div>
              <span className="text-zinc-100">{label}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
