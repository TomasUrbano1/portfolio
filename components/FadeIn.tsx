"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}      // cómo arranca (invisible y un poco abajo)
      animate={{ opacity: 1, y: 0 }}       // cómo termina (visible y en su lugar)
      transition={{ duration: 0.6, ease: "easeOut" }} // velocidad y curva
    >
      {children}
    </motion.div>
  );
}
