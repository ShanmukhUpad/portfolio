"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection([...NAV_LINKS.map((l) => l.id), "resume"]);

  return (
    <header className="theme-dark fixed top-0 left-0 right-0 z-50">
      <nav className="frame flex items-center justify-between h-16">
        <a href="#top" aria-label="Back to top" className="shrink-0 transition-opacity hover:opacity-80">
          {/* The site favicon; relative so it resolves under the deploy's basePath */}
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
          <img src="favicon.ico" alt="" width={36} height={36} className="block size-9" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? "true" : undefined}
              className={cn("link text-base font-medium", activeId === link.id ? "text-ink" : "text-ink-soft")}
            >
              {link.label}
            </a>
          ))}
          <a href="#resume" className="button ml-2">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-base font-medium py-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="menu lg:hidden absolute inset-x-0 top-16 origin-top bg-ground pb-6 shadow-xl">
          <div className="frame flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "py-3 font-display text-3xl font-semibold",
                  activeId === link.id ? "text-ink" : "text-ink-soft"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resume"
              className={cn(
                "py-3 font-display text-3xl font-semibold",
                activeId === "resume" ? "text-ink" : "text-ink-soft"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
