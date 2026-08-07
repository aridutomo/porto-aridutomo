"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in seconds */
  delay?: number;
  /** vertical offset in px */
  y?: number;
};

/**
 * Motivated scroll-reveal wrapper. Collapses to a no-op render when the
 * visitor prefers reduced motion. Uses Motion's viewport observer, not a
 * window scroll listener.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
