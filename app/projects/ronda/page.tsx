"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function RondaPage() {
  const features = [
    "Authentication (Supabase Auth)",
    "Role-based dashboards (Admin, Seller, Buyer)",
    "Mercado Pago integration",
    "Automated 5% commission",
    "Product CRUD",
    "Orders & status flow",
    "Secure database with RLS",
    "Mobile-first UI",
  ];

  return (
    <section className="container-custom py-28">
      {/* HERO */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6">
          Ronda Market — Marketplace for Entrepreneurs
        </h1>
      </FadeIn>

      <FadeIn>
        <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-10">
          Ronda Market is a full marketplace platform designed for small entrepreneurs.
          It includes authentication, role-based dashboards, product management,
          order flow, and automated low-fee commission logic. Built with a secure,
          scalable architecture using Supabase and PostgreSQL.
        </p>
      </FadeIn>

      {/* VISIT PROJECT BUTTON */}
      <FadeIn>
        <Link
          href="https://ronda-market.vercel.app"
          target="_blank"
          className="inline-flex rounded-xl bg-white text-black px-6 py-3 font-medium
                     hover:bg-white/90 hover:scale-105 transition-all duration-300 mb-16"
        >
          Visit Live Project →
        </Link>
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
              {["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm
                               hover:border-zinc-500 transition-all duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10 mt-20" />
    </section>
  );
}
