"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";

interface ArchiveSectionProps {
  projects: Project[];
}

export default function ArchiveSection({ projects }: ArchiveSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="archive" className="relative px-6 md:px-[5vw] py-24 md:py-32">
      {/* Section header */}
      <div className="flex items-start justify-between mb-16 md:mb-24">
        <div>
          <div className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
            {"// 002 — SELECTED WORK"}
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            The Archive
          </h2>
        </div>
        <div className="font-mono text-xs text-muted-foreground/50 text-right hidden md:block">
          <div>X: {(scrollY * 0.005).toFixed(2)}</div>
          <div>Y: {(scrollY * 0.01).toFixed(2)}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-8" />

      {/* Projects */}
      <div>
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectCard project={project} index={index} />
            {index < projects.length - 1 && (
              <div className="h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
