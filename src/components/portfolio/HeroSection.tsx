"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const architect = new SystemDesigner();",
  "import { innovation } from 'future';",
  "async function buildExperience() {",
  "  const solution = await solve(problem);",
  "  return deploy(solution);",
  "export default class Engineer {",
  "  constructor(passion, precision) {",
  "    this.craft = passion * precision;",
  "function optimize(performance) {",
  "  while (learning) { grow(); }",
  "const stack = ['React', 'Node', 'Python'];",
  "await database.connect(excellence);",
  "if (challenge) { innovate(); }",
  "render(<Portfolio vision={infinite} />);",
  "return { success: true, impact: 'high' };",
];

interface HeroSectionProps {
  bgImage: string;
}

export default function HeroSection({ bgImage }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="nexus" className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Digital wireframe landscape background"
          className="w-full h-full object-cover opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Animated code lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]" aria-hidden="true">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs md:text-sm text-foreground whitespace-nowrap"
            style={{
              top: `${(i / codeLines.length) * 100}%`,
              left: i % 2 === 0 ? "-10%" : "60%",
            }}
            animate={{
              x: i % 2 === 0 ? [0, 100, 0] : [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Status badge - top right */}
      <motion.div
        className="absolute top-24 right-6 md:right-[5vw] flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-xs tracking-wider text-primary">
          AVAILABLE FOR INTERNSHIPS
        </span>
      </motion.div>

      {/* Main content - bottom left */}
      <div className="relative z-10 px-6 md:px-[5vw] pb-16 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="font-mono text-xs text-muted-foreground tracking-wider mb-4">
            {"// SOFTWARE & SECURITY DEVELOPER"}
          </div>
          <h1 className="font-heading font-bold text-foreground leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
          >
            NKOSINATHI SIMELANE
          </h1>
          <div className="mt-6 max-w-md">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body">
              I architect systems and build experiences. Full-stack developer passionate about security, clean code, and solving real-world challenges.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <motion.button
              onClick={() => document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono text-sm tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded min-h-[44px] hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW ARCHIVE →
            </motion.button>
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              SCROLL TO EXPLORE
            </span>
          </div>
        </motion.div>

        {/* Coordinates */}
        <motion.div
          className="absolute bottom-16 md:bottom-24 right-6 md:right-[5vw] font-mono text-xs text-muted-foreground/50 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div>X: 0.00</div>
          <div>Y: {(scrollY * 0.01).toFixed(2)}</div>
        </motion.div>
      </div>
    </section>
  );
}
