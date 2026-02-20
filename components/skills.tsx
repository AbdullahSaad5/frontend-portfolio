"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Target, Briefcase, Code, Settings, Users, Brain, Globe } from "lucide-react";
import { Section } from "@/components/ui/section";
import { skills, tools } from "@/data/portfolio";

const skillIcons: Record<string, typeof Briefcase> = {
  "Project Management": Briefcase,
  "Agile / Scrum": Settings,
  "Stakeholder Mgmt": Users,
  "AI & Automation": Brain,
  "Cross-timezone Ops": Globe,
  "Technical Architecture": Code,
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = skillIcons[skill.name] || Briefcase;

  return (
    <Section delay={index * 0.08}>
      <div
        ref={ref}
        className="bento-card p-6 h-full group cursor-default"
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: skill.color + "15",
            border: `1px solid ${skill.color}25`,
          }}
        >
          <Icon size={20} style={{ color: skill.color }} />
        </div>

        {/* Name & Level */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-light group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </span>
          <span
            className="font-mono text-[13px] font-medium transition-colors duration-300"
            style={{ color: skill.color }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-dark-card overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: "0%" }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            }}
          />
        </div>
      </div>
    </Section>
  );
}

function ToolTag({ tool, index }: { tool: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      className="inline-flex items-center px-[18px] py-2 rounded-full text-[13px] font-mono tracking-[0.5px] border border-dark-border-subtle bg-dark-card/60 text-light-muted backdrop-blur-[10px] transition-colors duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 cursor-default"
    >
      {tool}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-[120px] px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Section variant="blur">
          <div className="text-center mb-16">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Skills & Tools
            </div>
            <h2 className="font-display text-[42px] max-md:text-3xl font-bold">
              My <span className="text-primary italic">Arsenal</span>
            </h2>
          </div>
        </Section>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Section variant="fade-left">
              <h3 className="text-lg font-semibold mb-6 text-light-muted">
                Tools & Technologies
              </h3>
            </Section>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, i) => (
                <ToolTag key={i} tool={tool} index={i} />
              ))}
            </div>
          </div>

          <div>
            <Section delay={0.35}>
              <div className="bento-card p-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Target className="text-primary" size={18} />
                  </div>
                  <span className="font-semibold text-[15px]">
                    What I&apos;m Looking For
                  </span>
                </div>
                <p className="text-muted text-sm leading-[1.75]">
                  Remote TPM or engineering roles at early-to-mid-stage startups
                  (Seed → Series B) building in AI, SaaS, developer tools, or
                  automation. Open to both project management and hands-on coding
                  positions. I thrive in environments where I can learn, ship, and
                  make a real impact.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}
