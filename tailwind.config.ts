// tailwind.config.js
const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");
const aspectRatio = require("@tailwindcss/aspect-ratio");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        text: "var(--text)",
        border: "rgba(255,255,255,0.06)",
        glass: "var(--glass)",
        accent: "var(--accent)",
        focus: "var(--focus)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      boxShadow: {
        "soft-lg": "0 6px 18px rgba(2,6,23,0.6)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      transitionTimingFunction: {
        "spring-quick": "cubic-bezier(.22,.8,.36,1)",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
  safelist: [
    { pattern: /^max-h-/ },
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
    { pattern: /^hover:/ },
    { pattern: /^container-custom$/ },
    { pattern: /^surface$/ },
    { pattern: /^bg-glass$/ },
    { pattern: /^badge$/ },
  ],
};
