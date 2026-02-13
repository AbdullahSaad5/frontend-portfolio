"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";
}

const variants = {
  "fade-up": {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)", y: 30 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function Section({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: SectionProps) {
  const v = variants[variant];

  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
