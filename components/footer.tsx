"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eisha-kamran" },
  { label: "GitHub", href: "#" },
  { label: "Email", href: "mailto:eisha@axiomsolinc.com" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-10 py-8 border-t border-dark-card relative">
      <div className="flex justify-between items-center text-[13px] text-muted-darkest flex-wrap gap-4">
        <div className="font-mono">
          &copy; 2026 Eisha Kamran<span className="text-primary">.</span> All rights
          reserved.
        </div>
        <div className="flex gap-6 font-mono items-center">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="cursor-pointer transition-colors duration-300 text-muted-darkest no-underline"
              whileHover={{ scale: 1.1, color: "#F97316" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 right-10 w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center cursor-pointer text-muted-dark hover:text-primary hover:border-primary transition-colors duration-300"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
