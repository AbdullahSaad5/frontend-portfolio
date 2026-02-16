"use client";

import { motion } from "framer-motion";

interface SignatureLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
  color?: string;
}

export function SignatureLogo({
  size = 120,
  animate = true,
  className = "",
  color = "#F97316",
}: SignatureLogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: { duration: 0.3 },
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <svg
      viewBox="0 0 300 100"
      width={size}
      height={size * (100 / 300)}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "E" - elegant cursive */}
      <motion.path
        d="M15 75 C15 75, 45 78, 55 65 C65 52, 50 35, 30 38 C10 41, 8 58, 15 68 C22 78, 40 82, 55 75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* "i" */}
      <motion.path
        d="M62 50 C62 50, 60 70, 62 75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
        style={{ transition: "none" }}
      />
      <motion.circle
        cx="63"
        cy="42"
        r="2"
        fill={color}
        variants={animate ? dotVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* "s" */}
      <motion.path
        d="M72 52 C80 48, 82 55, 74 58 C66 61, 70 70, 80 67"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* "h" */}
      <motion.path
        d="M85 35 L85 75 M85 55 C85 50, 100 48, 100 58 L100 75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* "a" */}
      <motion.path
        d="M115 55 C105 52, 105 65, 112 68 C119 71, 118 55, 118 55 L118 75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Connecting flourish */}
      <motion.path
        d="M120 75 C128 70, 135 72, 140 68"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* "K" */}
      <motion.path
        d="M148 30 L148 80 M170 35 L148 58 L172 80"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Underline flourish */}
      <motion.path
        d="M12 85 C60 90, 120 88, 175 82 C190 80, 200 84, 180 87"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Decorative dot */}
      <motion.circle
        cx="185"
        cy="75"
        r="3"
        fill={color}
        variants={animate ? dotVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
    </svg>
  );
}

// Small version for navbar
export function SignatureLogoMark({
  size = 36,
  className = "",
  color = "#F97316",
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="46" height="46" rx="14" fill="url(#logoGrad)" opacity="0.1" />
      <rect x="2" y="2" width="46" height="46" rx="14" stroke="url(#logoGrad)" strokeWidth="1.5" opacity="0.3" />
      {/* Stylized "E" */}
      <path
        d="M15 35 C15 35, 27 37, 32 30 C37 23, 30 16, 22 18 C14 20, 12 28, 15 33 C18 38, 28 40, 35 35"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Dot accent */}
      <circle cx="37" cy="33" r="2" fill={color} />
    </svg>
  );
}
