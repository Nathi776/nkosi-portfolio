import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Terminal, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import GridOverlay from "@/components/portfolio/GridOverlay";
import Footer from "@/components/portfolio/Footer";

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // Derive tech stack array from the Project tech record
  const techStack = Object.values(project.tech).flatMap((val) => 
    val.split(", ").map((item) => item.trim())
  ).filter((value, index, self) => self.indexOf(value) === index); // unique items

  return (
    <main className="relative bg-background min-h-screen pt-24 md:pt-32">
      <GridOverlay />
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {/* Back navigation */}
        <div>
          <Link
            href="/#archive"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded py-1 px-2 border border-transparent hover:border-primary/20"
          >
            <ChevronLeft size={14} />
            <span>BACK TO ARCHIVE</span>
          </Link>
        </div>

        {/* Title / Header */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-primary tracking-wider">
            {project.category || "SELECTED CASE STUDY"}
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground tracking-tight">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            {project.shortDesc}
          </p>
        </div>

        <div className="h-px bg-border" />

        {/* Overview & Core Tech */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-heading font-semibold text-lg text-foreground flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" />
              <span>Project Overview</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed font-body">
              {project.overview}
            </p>
          </div>
          <div className="bg-card border border-border rounded-sm p-6 space-y-4 h-fit">
            <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider flex items-center gap-2">
              <Cpu size={14} className="text-primary" />
              <span>Core Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1.5 border border-border rounded-sm text-muted-foreground bg-background/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed System Design / Diagrams */}
        <section className="space-y-6">
          <h2 className="font-heading font-semibold text-xl text-foreground flex items-center gap-2">
            <Terminal size={18} className="text-primary" />
            <span>System Design & Architecture</span>
          </h2>
          <div className="space-y-8">
            {project.diagrams.map((d, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-4 md:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-muted-foreground">
                    {"// " + String(i + 1).padStart(2, "0") + " — " + d.label}
                  </p>
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden border border-border/50 bg-background/40">
                  <img
                    src={d.image}
                    alt={d.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="font-heading font-semibold text-xl text-foreground">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 list-none">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 font-body text-muted-foreground text-sm">
                <span className="text-primary font-mono select-none mt-0.5">▪</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Detailed Tech Details */}
        <section className="space-y-4">
          <h2 className="font-heading font-semibold text-xl text-foreground">
            Architecture Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(project.tech).map(([k, v]) => (
              <div key={k} className="border border-border/80 rounded-sm p-4 bg-card/40">
                <span className="font-mono text-xs text-primary">{k.toUpperCase()}</span>
                <p className="font-body text-foreground text-sm mt-1">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-4">
          <h2 className="font-heading font-semibold text-xl text-foreground">
            Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges.map((c, i) => (
              <div key={i} className="border border-border rounded-sm p-6 bg-card/20 space-y-2">
                <div className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                  <span className="font-mono text-xs text-destructive">PROB_</span>
                  <span>{c.problem}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-start gap-1.5 mt-2">
                  <span className="font-mono text-xs text-primary mt-0.5">SOLN_</span>
                  <span>{c.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Link */}
        <div className="pt-8 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
          >
            <Github size={16} />
            <span>VIEW SOURCE CODE</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
