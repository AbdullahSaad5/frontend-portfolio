"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-[120px] px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] mx-auto relative z-[2]">
        <Section variant="blur">
          <div className="text-center mb-14">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Testimonials
            </div>
            <h2 className="font-display text-[42px] max-md:text-3xl font-bold">
              What People <span className="text-primary italic">Say</span>
            </h2>
          </div>
        </Section>

        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full"
            >
              <div className="bento-card p-10 md:p-14 text-center relative overflow-hidden">
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                    <Quote className="text-primary" size={20} />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-primary"
                        fill="currentColor"
                      />
                    )
                  )}
                </div>

                {/* Quote text */}
                <p className="text-light-muted leading-[1.9] text-base md:text-lg italic mb-8 max-w-[650px] mx-auto">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="text-sm font-semibold text-light">
                    {testimonials[active].author}
                  </div>
                  <div className="text-xs text-muted-dark mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={18} />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className="relative cursor-pointer bg-transparent border-none p-1"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-primary scale-125"
                      : "bg-dark-border-light hover:bg-muted-dark"
                  }`}
                />
              </button>
            ))}
          </div>

          <motion.button
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
