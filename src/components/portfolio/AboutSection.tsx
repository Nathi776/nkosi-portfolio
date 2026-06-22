"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { category: "LANGUAGES", items: ["JavaScript", "Python", "TypeScript", "HTML/CSS", "SQL"] },
  { category: "FRAMEWORKS", items: ["React", "Node.js", "Next.js", "Express", "Tailwind CSS"] },
  { category: "TOOLS", items: ["Git", "Docker", "VS Code", "Figma", "Linux"] },
  { category: "CONCEPTS", items: ["REST APIs", "CI/CD", "Agile", "System Design", "Testing"] },
];

interface AboutSectionProps {
  processImage: string;
}

export default function AboutSection({ processImage }: AboutSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 md:px-[5vw] py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
          {"// 003 — CAPABILITIES"}
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          The Engineer
        </h2>
      </div>

      <div className="h-px bg-border mb-16" />

      <motion.div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Left column — About text */}
        <div>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
            I'm a software engineer who believes great code is invisible — users should feel the impact, not the complexity. I build systems that are clean, scalable, and purposeful.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Currently seeking internship opportunities where I can contribute to meaningful projects, learn from experienced teams, and bring my passion for problem-solving to real-world challenges. I thrive in environments that value curiosity, collaboration, and continuous improvement.
          </p>

          {/* Process image */}
          <div className="relative rounded-sm overflow-hidden mt-10">
            <img
              src={processImage}
              alt="Abstract circuit trace patterns representing engineering process"
              className="w-full aspect-video object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        {/* Right column — Skills grid */}
        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <div className="font-mono text-xs text-primary tracking-widest mb-4">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm px-4 py-2 border border-border rounded-sm text-muted-foreground hover:border-primary hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { value: "5+", label: "PROJECTS" },
              { value: "10+", label: "TECHNOLOGIES" },
              { value: "2024", label: "STARTED" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
