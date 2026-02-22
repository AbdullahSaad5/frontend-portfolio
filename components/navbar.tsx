"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { SignatureLogoMark } from "@/components/signature-logo";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`backdrop-blur-xs fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-[400ms] ${
          scrolled
            ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "border-b border-transparent"
        }`}
      >
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => scrollTo("home")}
        >
          <SignatureLogoMark size={36} />
          <span className="text-[15px] font-semibold tracking-wide group-hover:text-primary transition-colors duration-300">
            Eisha<span className="text-primary">.</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
              style={{ color: activeSection === item.id ? "#F97316" : "#6B8299" }}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-[60] text-light-muted hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-dark/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.span
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-3xl font-display font-bold cursor-pointer transition-colors duration-300 hover:text-primary"
                  style={{
                    color: activeSection === item.id ? "#F97316" : "#E8ECF1",
                  }}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </motion.span>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
