"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Linkedin, Github, Mail } from "lucide-react";
import { SignatureLogoMark } from "@/components/signature-logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 md:px-10 py-10 border-t border-dark-card relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-4">
            <SignatureLogoMark size={32} />
            <div>
              <div className="font-mono text-[13px] text-muted-darkest">
                &copy; 2026 Eisha Kamran<span className="text-primary">.</span>
              </div>
              <div className="font-mono text-[11px] text-muted-darkest/60 flex items-center gap-1 mt-0.5">
                Designed with <Heart size={10} className="text-primary" fill="currentColor" /> in Pakistan
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 items-center">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/eisha-kamran", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Mail, href: "mailto:eisha@axiomsolinc.com", label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-darkest hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer no-underline"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                aria-label={link.label}
              >
                <link.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 right-6 md:right-10 w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer text-muted-dark hover:text-primary hover:border-primary/30 transition-colors duration-300"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
