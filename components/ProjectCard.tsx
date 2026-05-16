// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/app/LanguageProvider";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  href,
  image,
}: ProjectCardProps) {
  const { lang } = useContext(LanguageContext);

  const t = {
    view: lang === "en" ? "View Project" : "Ver Proyecto",
    openNewTab:
      lang === "en"
        ? `Open ${title} in a new tab`
        : `Abrir ${title} en una nueva pestaña`,
    viewPage:
      lang === "en"
        ? `View ${title} project page`
        : `Ver página del proyecto ${title}`,
  };

  const isExternal = href.startsWith("http");

  const CardInner = (
    <>
      {/* IMAGE / PREVIEW */}
      <div className="mb-4 rounded-xl overflow-hidden bg-zinc-800/40">
        {image ? (
          <div className="relative w-full h-44 md:h-48">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        ) : (
          <div
            className="w-full h-44 md:h-48 flex items-center justify-center bg-gradient-to-br
                       from-zinc-900 to-zinc-800 text-zinc-500"
            aria-hidden
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-40"
            >
              <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 19h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-zinc-400">{description}</p>
      </div>

      {/* STACK BADGES */}
      <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label={`${title} tech stack`}>
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs md:text-sm bg-zinc-800 px-3 py-1 rounded-full text-zinc-200"
            role="listitem"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 md:p-6
                 hover:scale-[1.02] hover:border-zinc-700 transition-all duration-200"
      aria-labelledby={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={t.openNewTab}
        >
          {CardInner}
          <div className="mt-3 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium
                             hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                             transition-transform duration-200">
              {t.view}
              <ArrowRight size={16} className="text-zinc-600" />
            </span>
          </div>
        </a>
      ) : (
        <Link href={href} className="block" aria-label={t.viewPage}>
          {CardInner}
          <div className="mt-3 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium
                             hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                             transition-transform duration-200">
              {t.view}
              <ArrowRight size={16} className="text-zinc-600" />
            </span>
          </div>
        </Link>
      )}
    </motion.article>
  );
}
