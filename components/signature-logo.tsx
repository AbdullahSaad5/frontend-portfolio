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
      viewBox="0 0 200 90"
      width={size}
      height={size * (90 / 200)}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "E" - elegant cursive e */}
      <motion.path
        d="M8 52 C18 52, 42 48, 42 38 C42 28, 28 24, 18 30 C8 36, 6 52, 14 62 C22 72, 38 72, 48 64"
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
        d="M56 44 C55 54, 54 62, 55 68"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      <motion.circle
        cx="57"
        cy="36"
        r="2"
        fill={color}
        variants={animate ? dotVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />
      {/* "s" */}
      <motion.path
        d="M66 47 C74 43, 78 48, 72 53 C66 58, 68 65, 78 62"
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
        d="M84 28 L84 68 M84 50 C88 44, 98 42, 98 52 L98 68"
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
        d="M112 50 C106 46, 104 54, 108 60 C112 66, 116 54, 116 48 L116 68"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Connecting flourish to K */}
      <motion.path
        d="M118 68 C126 62, 132 60, 136 58"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* "K" - elegant capital */}
      <motion.path
        d="M140 22 L140 74 M162 26 L140 52 L164 74"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Underline flourish */}
      <motion.path
        d="M6 80 C50 84, 100 82, 168 76 C178 75, 186 78, 175 80"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.4"
        variants={animate ? pathVariants : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "visible" : undefined}
      />

      {/* Decorative dot after K */}
      <motion.circle
        cx="172"
        cy="72"
        r="2.5"
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
      {/* Stylized cursive "E" */}
      <path
        d="M12 27 C18 27, 32 25, 32 20 C32 14, 24 12, 18 16 C12 20, 11 28, 16 34 C21 40, 32 38, 37 32"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Dot accent */}
      <circle cx="39" cy="31" r="2" fill={color} />
    </svg>
  );
}
