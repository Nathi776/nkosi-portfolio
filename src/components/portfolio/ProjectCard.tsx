"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  // Derive tech stack array from the Project tech record
  const techStack = Object.values(project.tech).flatMap((val) => 
    val.split(", ").map((item) => item.trim())
  ).filter((value, index, self) => self.indexOf(value) === index); // unique items

  return (
    <motion.article
      ref={ref}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center py-16 md:py-24"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Project image */}
      <div className={`lg:col-span-7 relative ${isEven ? "lg:col-start-1" : "lg:col-start-6"} order-1`}>
        <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden rounded-sm group">
          <div className="aspect-video bg-muted relative">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-muted-foreground text-sm">
                NO IMAGE AVAILABLE
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
        {/* Index number */}
        <div className="absolute -top-4 left-4 font-mono text-6xl md:text-8xl font-bold text-foreground/[0.04] select-none pointer-events-none" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Project info */}
      <div className={`lg:col-span-6 relative z-10 ${isEven ? "lg:col-start-7 lg:pl-12" : "lg:col-start-1 lg:pr-12"} order-2`}>
        <div className="font-mono text-xs text-primary tracking-wider mb-3">
          {project.category || "SECURITY PLATFORM"}
        </div>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
          <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          {project.shortDesc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((t) => (
            <span
              key={t}
              className="font-mono text-xs tracking-wider px-3 py-1.5 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:text-foreground transition-colors min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
          >
            <BookOpen size={16} />
            <span>CASE STUDY</span>
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={16} />
              <span>SOURCE</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:text-foreground transition-colors min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
              <span>LIVE</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
