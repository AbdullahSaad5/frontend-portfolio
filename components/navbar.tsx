"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-[400ms] ${
        scrolled
          ? "bg-dark/85 backdrop-blur-[20px] backdrop-saturate-150 border-b border-dark-border-light/30"
          : "border-b border-transparent"
      }`}
    >
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("home")}
      >
        <div className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-base font-bold text-white font-display">
          E
        </div>
        <span className="text-[15px] font-semibold tracking-wide">
          Eisha<span className="text-primary">.</span>
        </span>
      </div>

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
    </nav>
  );
}
