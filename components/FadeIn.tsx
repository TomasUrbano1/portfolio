// components/FadeIn.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number; // seconds
  duration?: number; // seconds
  direction?: Direction;
  distance?: number; // px
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up",
  distance = 18,
  once = true,
  className = "",
  style,
}: FadeInProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 1, x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const animate = shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={animate}
      viewport={{ once, amount: 0.12 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 0.8, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
