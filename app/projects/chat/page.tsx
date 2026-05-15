// app/projects/chat/page.tsx
"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Check } from "lucide-react";

const PROJECT_NAME = "MercadoChat"; // Cambiá esto por el nuevo nombre cuando quieras
const SHORT_DESC =
  "A real-time marketplace focused on simplicity, speed and a zero-fee model.";

export default function ChatPage(): JSX.Element {
  const features = [
    "Real-time chat (Supabase Realtime)",
    "Product listings",
    "Filters",
    "User profiles",
    "Mobile-first UI",
    "Zero-fee model",
  ];

  const tech = ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"];

  return (
    <section className="container-custom py-20 md:py-28">
      {/* HERO */}
      <header className="mb-8">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white
                       drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] mb-4"
          >
            {PROJECT_NAME} — Real‑Time Buy & Sell App
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-6">
            {SHORT_DESC} It lets users list items, chat instantly, filter results and manage
            profiles — built mobile‑first with performance and simplicity in mind.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-white text-black px-5 py-3 font-medium
                         hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition"
              aria-label={`Contact about ${PROJECT_NAME}`}
            >
              Get notified
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-zinc-200
                         hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 transition"
            >
              Back to projects
            </Link>

            <span
              className="inline-flex items-center rounded-xl border border-zinc-700 text-zinc-300 px-4 py-3 font-medium
                         opacity-90 cursor-default"
              aria-hidden
            >
              Coming Soon
            </span>
          </div>
        </FadeIn>
      </header>

      {/* FEATURES + STACK */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <FadeIn>
          <article className="md:col-span-2 rounded-2xl border border-white/6 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold mb-4">What it does</h2>

            <ul className="grid gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="flex-none mt-1 rounded-full bg-green-500/10 text-green-400 p-1.5"
                    aria-hidden
                  >
                    <Check size={14} />
                  </span>

                  <p className="text-zinc-300 leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Why it matters</h3>
              <p className="text-zinc-400 leading-relaxed">
                Fast, real‑time interactions reduce friction for buyers and sellers. The zero‑fee
                model prioritizes user growth and retention while keeping the product simple and
                focused on core marketplace flows.
              </p>
            </div>
          </article>
        </FadeIn>

        <FadeIn>
          <aside className="rounded-2xl border border-white/6 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1.5 text-sm text-zinc-200
                             hover:border-zinc-500 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-zinc-400 mb-2">Status</h4>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                <span className="text-zinc-200">Alpha — private testing</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2 text-sm font-medium
                           hover:bg-white/95 transition"
              >
                Request access
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200
                           hover:border-zinc-500 transition"
              >
                View other projects
              </Link>
            </div>
          </aside>
        </FadeIn>
      </div>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/6 mt-16" />
    </section>
  );
}
