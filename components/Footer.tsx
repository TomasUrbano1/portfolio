export default function Footer() {
  return (
    <footer
      className="
        border-t border-white/10 
        mt-32 
        bg-black/40 backdrop-blur-xl
      "
    >
      <div
        className="
          container-custom 
          py-10 
          text-sm 
          text-zinc-400 
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-4
        "
      >
        {/* LEFT SIDE — LOGO + COPYRIGHT */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-6 w-auto opacity-80"
          />
          <p className="text-zinc-500">
            © 2026 Tomás — Full‑Stack Developer
          </p>
        </div>

        {/* RIGHT SIDE — LINKS */}
        <div className="flex gap-6">
          <a
            href="https://github.com/TomasUrbano1"
            target="_blank"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tomas-urbano"
            target="_blank"
            className="hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:toomas.urbano14@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
