import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "./LanguageProvider";

export const metadata = {
  title: "Tomás Urbano — Full‑Stack Developer",
  description:
    "Building real-world web applications with Next.js, Supabase and PostgreSQL.",
  metadataBase: new URL("https://tomasurbano.vercel.app"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Tomás Urbano — Full‑Stack Developer",
    description: "Modern full‑stack developer portfolio built with Next.js.",
    url: "https://tomasurbano.vercel.app",
    siteName: "Tomás Urbano Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tomás Urbano — Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tomás Urbano — Full‑Stack Developer",
    description:
      "Building real-world web applications with Next.js and Supabase.",
    images: ["/og-image.png"],
  },

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* PRELOAD DEL LOGO PARA PERFORMANCE */}
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className="
          bg-black text-white 
          antialiased 
          selection:bg-white/20 
          min-h-screen 
          flex flex-col
        "
      >
        <LanguageProvider>
          <Navbar />

          <main className="flex-1 pt-20">{children}</main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
