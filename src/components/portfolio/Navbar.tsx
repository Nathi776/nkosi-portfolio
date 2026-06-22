"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
  { label: "Terminal", href: "#terminal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (pathname === "/") {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/" + href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-[5vw] py-5">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
        >
          NKOSI_
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded min-h-[44px] flex items-center"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="mailto:nkosinathi.simelane.dev@gmail.com"
            className="font-mono text-xs tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded min-h-[44px] flex items-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-lg tracking-widest text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <a
              href="mailto:nkosinathi.simelane.dev@gmail.com"
              className="font-mono text-lg tracking-widest bg-primary text-primary-foreground px-6 py-3 rounded min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
            >
              CONNECT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
