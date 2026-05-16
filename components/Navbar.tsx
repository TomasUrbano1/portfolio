// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LanguageContext } from "@/app/LanguageProvider";

export default function Navbar(): JSX.Element {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // idioma
  const { lang, setLang } = useContext(LanguageContext);

  const links = [
    { href: "/", label: lang === "en" ? "Home" : "Inicio" },
    { href: "/projects", label: lang === "en" ? "Projects" : "Proyectos" },
    { href: "/about", label: lang === "en" ? "About" : "Sobre mí" },
    { href: "/contact", label: lang === "en" ? "Contact" : "Contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && open && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menuMotion = {
    initial: { opacity: 0, height: 0, y: -6 },
    animate: { opacity: 1, height: "auto", y: 0 },
    exit: { opacity: 0, height: 0, y: -6 },
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "bg-black/60 border-white/6 backdrop-blur-md"
          : "bg-black/40 border-white/10 backdrop-blur-xl"
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between py-3 md:py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Tomás Urbano — Ir al inicio"
        >
          <Image
            src="/logo.svg"
            alt="Tomás Urbano logo"
            width={36}
            height={36}
            priority
            className="h-8 w-auto"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide text-white group-hover:opacity-90">
            Tomás Urbano
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm" role="menubar">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                  active ? "text-white font-medium" : "text-zinc-400 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
                role="menuitem"
              >
                {label}
              </Link>
            );
          })}

          {/* SELECTOR DE IDIOMA */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="ml-4 text-zinc-400 hover:text-white transition-colors px-2 py-1"
            aria-label="Cambiar idioma"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white
                       bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1, height: "auto" } : menuMotion.initial}
            animate={prefersReducedMotion ? { opacity: 1, height: "auto" } : menuMotion.animate}
            exit={prefersReducedMotion ? { opacity: 1, height: 0 } : menuMotion.exit}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            aria-hidden={!open}
          >
            <div className="container-custom pb-4">
              <div className="flex flex-col gap-2">
                {links.map(({ href, label }, idx) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                        active
                          ? "text-white font-medium bg-white/5"
                          : "text-zinc-300 hover:text-white hover:bg-white/3"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  );
                })}

                {/* SELECTOR DE IDIOMA MOBILE */}
                <button
                  onClick={() => setLang(lang === "en" ? "es" : "en")}
                  className="mt-2 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/3"
                >
                  {lang === "en" ? "Español" : "English"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
