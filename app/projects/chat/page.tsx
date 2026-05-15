"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function ChatPage() {
  const features = [
    "Real-time chat (Supabase Realtime)",
    "Product listings",
    "Filters",
    "User profiles",
    "Mobile-first UI",
    "Zero-fee model",
  ];

  return (
    <section className="container-custom py-28">
      {/* HERO */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6">
          MercadoChat — Real-Time Buy & Sell App
        </h1>
      </FadeIn>

      <FadeIn>
        <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-10">
          MercadoChat is a real-time marketplace focused on simplicity, speed and a zero-fee model.
          It allows users to list items, chat instantly, filter results, and manage profiles — all with a
          mobile-first experience. Optional monetization through ads is planned for future versions.
        </p>
      </FadeIn>

      {/* COMING SOON BUTTON */}
      <FadeIn>
        <span
          className="inline-flex rounded-xl border border-zinc-700 text-zinc-300 px-6 py-3 font-medium
                     hover:border-zinc-500 hover:scale-105 transition-all duration-300 mb-16"
        >
          Coming Soon
        </span>
      </FadeIn>

      {/* FEATURES CARD */}
      <FadeIn>
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-10">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">Features</h2>

          <ul className="space-y-3 text-zinc-300 text-lg">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3"
              >
                <span className="text-white">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* STACK */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "Supabase", "Tailwind CSS", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm
                             hover:border-zinc-500 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10 mt-20" />
    </section>
  );
}
