"use client";

import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section className="container-custom py-28 max-w-3xl">
      {/* TITLE */}
      <FadeIn>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-8">
          Contact
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
    <label className="block mb-2 text-sm text-zinc-300">Your Email</label>
    <input
      name="email"
      type="email"
      required
      placeholder="your@email.com"
      className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 
                 focus:border-zinc-500 outline-none transition-all"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm text-zinc-300">Message</label>
    <textarea
      name="message"
      rows={5}
      required
      placeholder="Write your message..."
      className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 
                 focus:border-zinc-500 outline-none transition-all"
    />
  </div>

  <button
    type="submit"
    className="rounded-xl bg-white text-black px-6 py-3 font-medium
               hover:bg-white/90 hover:scale-105 transition-all duration-300"
  >
    Send Message
  </button>

  {status === "success" && (
    <p className="text-green-400 text-sm pt-2">Message sent successfully!</p>
  )}

  {status === "error" && (
    <p className="text-red-400 text-sm pt-2">Something went wrong.</p>
  )}
</form>

      </FadeIn>

      {/* LINKS */}
      <FadeIn>
        <div className="mt-12 space-y-3 text-zinc-400 text-sm">
          <p>
            <span className="text-zinc-500">Email:</span>{" "}
            <a
              href="mailto:toomas.urbano14@gmail.com"
              className="hover:text-white transition-colors"
            >
              toomas.urbano14@gmail.com
            </a>
          </p>

          <p>
            <span className="text-zinc-500">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/tomas-urbano"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              linkedin.com/in/tomas-urbano
            </a>
          </p>

          <p>
            <span className="text-zinc-500">GitHub:</span>{" "}
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
