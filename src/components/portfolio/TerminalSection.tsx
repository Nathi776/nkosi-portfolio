"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send } from "lucide-react";

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

const Linkedin = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface HistoryLine {
  type: "system" | "user" | "response" | "error";
  text: string;
}

const terminalHistory: HistoryLine[] = [
  { type: "system", text: "Nkosi Terminal v1.0.0" },
  { type: "system", text: "Type 'hello' to reveal contact info, or use the links below." },
  { type: "system", text: "---" },
];

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>(terminalHistory);
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user" as const, text: `> ${input}` }];

    if (cmd === "hello" || cmd === "hi" || cmd === "contact") {
      newHistory.push({ type: "response" as const, text: "📧 nkosinathi.simelane.dev@gmail.com" });
      newHistory.push({ type: "response" as const, text: "🔗 github.com/Nathi776" });
      newHistory.push({ type: "response" as const, text: "💼 linkedin.com/in/nkosinathi-simelane" });
      newHistory.push({ type: "system" as const, text: "--- Looking forward to connecting! ---" });
      setRevealed(true);
    } else if (cmd === "help") {
      newHistory.push({ type: "system" as const, text: "Commands: hello, help, clear" });
    } else if (cmd === "clear") {
      setHistory(terminalHistory);
      setInput("");
      return;
    } else if (cmd) {
      newHistory.push({ type: "error" as const, text: `Command not found: ${cmd}. Type 'help' for options.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <section id="terminal" className="relative px-6 md:px-[5vw] py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
          {"// 004 — CONNECT"}
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          The Terminal
        </h2>
      </div>

      <div className="h-px bg-border mb-16" />

      <motion.div
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Left — Message */}
        <div>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
            Let's build something remarkable together. I'm actively seeking internship opportunities in software engineering.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Whether you have an opening, a project idea, or just want to talk tech — I'd love to hear from you. Reach out through the terminal or use the direct links below.
          </p>

          {/* Direct links */}
          <div className="space-y-4">
            <a
              href="mailto:nkosinathi.simelane.dev@gmail.com"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
            >
              <Mail size={18} className="group-hover:text-primary transition-colors" />
              <span>nkosinathi.simelane.dev@gmail.com</span>
            </a>
            <a
              href="https://github.com/Nathi776"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
            >
              <Github size={18} className="group-hover:text-primary transition-colors" />
              <span>github.com/Nathi776</span>
            </a>
            <a
              href="https://linkedin.com/in/nkosinathi-simelane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
            >
              <Linkedin size={18} className="group-hover:text-primary transition-colors" />
              <span>linkedin.com/in/nkosinathi-simelane</span>
            </a>
          </div>
        </div>

        {/* Right — Terminal */}
        <div
          className="bg-card border border-border rounded-sm overflow-hidden cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-chart-4/60" />
            <div className="w-3 h-3 rounded-full bg-chart-2/60" />
            <span className="font-mono text-xs text-muted-foreground ml-2">nkosi@portfolio:~</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-sm">
            {history.map((line, i) => (
              <div
                key={i}
                className={`mb-1 ${
                  line.type === "user"
                    ? "text-primary"
                    : line.type === "error"
                    ? "text-destructive"
                    : line.type === "response"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {line.text}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-primary">→</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-foreground outline-none font-mono text-sm placeholder:text-muted-foreground/50 min-h-[44px]"
                placeholder="type 'hello'..."
                aria-label="Terminal input"
              />
              <button
                type="submit"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Submit command"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
