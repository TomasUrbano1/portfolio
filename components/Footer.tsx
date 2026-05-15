// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 mt-20 bg-black/40 backdrop-blur-xl"
    >
      <div className="container-custom py-8 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Tomás Urbano logo"
            width={96}
            height={24}
            className="h-6 w-auto opacity-80"
            priority={false}
          />
          <p className="text-zinc-500">
            © {year} <span className="text-zinc-200">Tomás Urbano</span> — Full‑Stack Developer
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6">
          <Link
            href="https://github.com/TomasUrbano1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200"
            aria-label="GitHub — abre en una nueva pestaña"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
            <span aria-hidden className="hidden sm:inline">GitHub</span>
          </Link>

          <Link
            href="https://linkedin.com/in/tomas-urbano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn — abre en una nueva pestaña"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
            <span aria-hidden className="hidden sm:inline">LinkedIn</span>
          </Link>

          <a
            href="mailto:toomas.urbano14@gmail.com"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200"
            aria-label="Enviar email a Tomás"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
            <span aria-hidden className="hidden sm:inline">Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
