"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-[120px] px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Section variant="blur">
          <div className="text-center mb-16">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Selected Work
            </div>
            <h2 className="font-display text-[42px] max-md:text-3xl font-bold">
              Projects & <span className="text-primary italic">Case Studies</span>
            </h2>
            <p className="text-muted text-base mt-4 max-w-[550px] mx-auto leading-[1.7]">
              Delivering impactful solutions across healthcare, fintech, e-commerce,
              and developer tools — all managed end-to-end, remotely.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Section key={idx} delay={idx * 0.1} variant="scale">
              <TiltCard tiltAmount={5}>
                <motion.div
                  className="bento-card p-8 md:p-10 h-full flex flex-col group cursor-default"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4 relative z-[1]">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: project.accentColor + "15",
                        border: `1px solid ${project.accentColor}25`,
                      }}
                    >
                      <TrendingUp
                        size={18}
                        style={{ color: project.accentColor }}
                      />
                    </div>
                    <motion.div
                      className="w-9 h-9 rounded-full flex items-center justify-center border border-dark-border-subtle text-muted-darker group-hover:text-primary group-hover:border-primary/30 transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 45 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-light group-hover:text-primary transition-colors duration-300 relative z-[1]">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-[1.75] mb-6 flex-1 relative z-[1]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mb-6 relative z-[1]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-3 py-1 rounded-full font-mono tracking-[0.5px]"
                        style={{
                          backgroundColor: project.accentColor + "10",
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-5 border-t border-dark-border relative z-[1]">
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div
                          className="text-2xl font-bold font-display"
                          style={{ color: project.accentColor }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-muted-dark uppercase tracking-[1px] font-mono mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}
