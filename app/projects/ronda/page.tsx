"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/app/layout";

const PROJECT_NAME = "Ronda Market";
const LIVE_URL = "https://ronda-market.vercel.app";

export default function RondaPage(): JSX.Element {
  const { lang } = useContext(LanguageContext);

  const t = {
    heroTitle:
      lang === "en"
        ? `${PROJECT_NAME} — Marketplace for Entrepreneurs`
        : `${PROJECT_NAME} — Marketplace para emprendedores`,

    heroDesc:
      lang === "en"
        ? `${PROJECT_NAME} is a marketplace platform designed for small entrepreneurs: product management, order flow, role‑based dashboards and automated commissions. Built with a secure and scalable architecture using Supabase and PostgreSQL.`
        : `${PROJECT_NAME} es una plataforma marketplace pensada para emprendedores: gestión de productos, flujos de pedido, dashboards por rol y comisiones automatizadas. Arquitectura segura y escalable basada en Supabase y PostgreSQL.`,

    visit: lang === "en" ? "Visit Live Project" : "Ver proyecto en vivo",
    back: lang === "en" ? "Back to projects" : "Volver a proyectos",
    alpha: lang === "en" ? "Alpha — private testing" : "Alpha — pruebas privadas",

    features: lang === "en" ? "Features" : "Características",
    why: lang === "en" ? "Why it matters" : "Por qué importa",

    whyText:
      lang === "en"
        ? "A marketplace optimized for entrepreneurs reduces friction in daily sales and management. The combination of role‑based dashboards and automated business rules allows operations to scale without losing control or security."
        : "Un marketplace optimizado para emprendedores reduce la fricción en la venta y gestión diaria. La combinación de dashboards por rol y reglas de negocio automatizadas permite escalar operaciones sin perder control ni seguridad.",

    techStack: lang === "en" ? "Tech Stack" : "Tecnologías",
    status: lang === "en" ? "Status" : "Estado",

    requestAccess: lang === "en" ? "Request access" : "Solicitar acceso",
    viewSource: lang === "en" ? "View source" : "Ver código",
  };

  const features =
    lang === "en"
      ? [
          "Authentication (Supabase Auth)",
          "Role-based dashboards (Admin, Seller, Buyer)",
          "Mercado Pago integration",
          "Automated 5% commission",
          "Product CRUD",
          "Orders & status flow",
          "Secure database with RLS",
          "Mobile-first UI",
        ]
      : [
          "Autenticación (Supabase Auth)",
          "Dashboards por rol (Admin, Seller, Buyer)",
          "Integración con Mercado Pago",
          "Comisión automática del 5%",
          "CRUD de productos",
          "Flujo de pedidos y estados",
          "Base de datos segura con RLS",
          "UI mobile-first",
        ];

  const tech = ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"];

  return (
    <section className="container-custom py-20 md:py-28">
      {/* HERO */}
      <header className="mb-8">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white
                       drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] mb-4 leading-tight"
          >
            {t.heroTitle}
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-6">
            {t.heroDesc}
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white text-black px-5 py-3 font-medium
                         hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition"
              aria-label={`Open ${PROJECT_NAME} live`}
            >
              {t.visit}
              <ArrowRight size={16} className="text-zinc-600" />
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-zinc-200
                         hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 transition"
            >
              {t.back}
            </Link>

            <span
              className="inline-flex items-center rounded-xl border border-zinc-700 text-zinc-300 px-4 py-3 font-medium
                         opacity-90 cursor-default"
              aria-hidden
            >
              {t.alpha}
            </span>
          </div>
        </FadeIn>
      </header>

      {/* FEATURES + STACK */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <FadeIn>
          <article className="md:col-span-2 rounded-2xl border border-white/6 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold mb-4">{t.features}</h2>

            <ul className="grid gap-3" role="list" aria-label={`${PROJECT_NAME} features`}>
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
              <h3 className="text-lg font-semibold mb-3">{t.why}</h3>
              <p className="text-zinc-400 leading-relaxed">{t.whyText}</p>
            </div>

            {/* Removed TRY DEMO — no signup route */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200
                           hover:border-zinc-500 transition"
              >
                {t.requestAccess}
              </Link>
            </div>
          </article>
        </FadeIn>

        <FadeIn>
          <aside className="rounded-2xl border border-white/6 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold mb-4">{t.techStack}</h3>

            <div className="flex flex-wrap gap-3" role="list" aria-label={`${PROJECT_NAME} tech stack`}>
              {tech.map((t) => (
                <span
                  key={t}
                  className="bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1.5 text-sm text-zinc-200
                             hover:border-zinc-500 transition"
                  role="listitem"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-zinc-400 mb-2">{t.status}</h4>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                <span className="text-zinc-200">{t.alpha}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://github.com/TomasUrbano1/ronda-market"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200
                           hover:border-zinc-500 transition"
              >
                {t.viewSource}
                <ArrowRight size={14} className="ml-2 text-zinc-400" />
              </a>
            </div>
          </aside>
        </FadeIn>
      </div>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/6 mt-16" />
    </section>
  );
}
