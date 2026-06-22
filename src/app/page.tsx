import React from "react";
import GridOverlay from "@/components/portfolio/GridOverlay";
import HeroSection from "@/components/portfolio/HeroSection";
import ArchiveSection from "@/components/portfolio/ArchiveSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TerminalSection from "@/components/portfolio/TerminalSection";
import Footer from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <GridOverlay />
      <HeroSection bgImage="https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/7cb2a693d_generated_0214edcd.png" />
      <ArchiveSection projects={projects} />
      <AboutSection processImage="https://media.base44.com/images/public/6a3819d607ebb1ba908853c0/58583fc06_generated_18860c4a.png" />
      <TerminalSection />
      <Footer />
    </main>
  );
}
