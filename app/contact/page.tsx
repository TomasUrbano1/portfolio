"use client";

import FadeIn from "@/components/FadeIn";
import { useState, useContext } from "react";
import { LanguageContext } from "@/app/layout";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { lang } = useContext(LanguageContext);

  const t = {
    title: lang === "en" ? "Contact" : "Contacto",

    yourEmail: lang === "en" ? "Your Email" : "Tu Email",
    message: lang === "en" ? "Message" : "Mensaje",

    placeholderEmail:
      lang === "en" ? "your@email.com" : "tu@email.com",
    placeholderMessage:
      lang === "en" ? "Write your message..." : "Escribí tu mensaje...",

    send: lang === "en" ? "Send Message" : "Enviar Mensaje",

    success: lang === "en"
      ? "Message sent successfully!"
      : "¡Mensaje enviado con éxito!",

    error: lang === "en"
      ? "Something went wrong."
      : "Ocurrió un error.",

    emailLabel: lang === "en" ? "Email:" : "Correo:",
    linkedinLabel: "LinkedIn:",
    githubLabel: "GitHub:",
  };

  return (
    <section className="container-custom py-28 max-w-3xl">
      {/* TITLE */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-8">
          {t.title}
        </h1>
      </FadeIn>

      {/* FORM */}
      <FadeIn>
        <form
          className="space-y-6 rounded-2xl border border-white/10 bg-zinc-900 p-8"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, message }),
            });

            if (res.ok) {
              setStatus("success");
              form.reset();
            } else {
              setStatus("error");
            }
          }}
        >
          <div>
            <label className="block mb-2 text-sm text-zinc-300">{t.yourEmail}</label>
            <input
              name="email"
              type="email"
              required
              placeholder={t.placeholderEmail}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 
                         focus:border-zinc-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">{t.message}</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder={t.placeholderMessage}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 
                         focus:border-zinc-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-white text-black px-6 py-3 font-medium
                       hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            {t.send}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm pt-2">{t.success}</p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm pt-2">{t.error}</p>
          )}
        </form>
      </FadeIn>

      {/* LINKS */}
      <FadeIn>
        <div className="mt-12 space-y-3 text-zinc-400 text-sm">
          <p>
            <span className="text-zinc-500">{t.emailLabel}</span>{" "}
            <a
              href="mailto:toomas.urbano14@gmail.com"
              className="hover:text-white transition-colors"
            >
              toomas.urbano14@gmail.com
            </a>
          </p>

          <p>
            <span className="text-zinc-500">{t.linkedinLabel}</span>{" "}
            <a
              href="https://linkedin.com/in/tomas-urbano"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              linkedin.com/in/tomas-urbano
            </a>
          </p>

          <p>
            <span className="text-zinc-500">{t.githubLabel}</span>{" "}
            <a
              href="https://github.com/TomasUrbano1"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              github.com/TomasUrbano1
            </a>
          </p>
        </div>
      </FadeIn>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10 mt-20" />
    </section>
  );
}
