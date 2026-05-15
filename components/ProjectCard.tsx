"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  stack,
  href,
}: {
  title: string;
  description: string;
  stack: string[];
  href: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 
                 hover:scale-[1.02] hover:border-zinc-700 transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-zinc-800 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex rounded-xl bg-white text-black px-4 py-2 text-sm font-medium
           hover:bg-white/90 hover:scale-105 transition-all duration-300"
      >
        View Project
      </Link>
    </motion.div>
  );
}
