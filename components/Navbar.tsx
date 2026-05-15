"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50 
        border-b border-white/10 
        bg-black/40 backdrop-blur-xl
      "
    >
      <nav
        className="
          container-custom 
          flex items-center justify-between 
          py-4
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm">
          {links.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`
                  transition-all duration-300 
                  hover:text-white 
                  ${active ? "text-white font-medium" : "text-zinc-400"}
                `}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
