"use client";

import { useState } from "react";
import { Download } from "@/components/ui/icons";
import { ResumeMenu, RESUMES } from "@/components/ui/ResumeMenu";
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
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  return (
    <header className="theme-dark fixed top-0 left-0 right-0 z-50">
      <nav className="frame flex items-center justify-between h-16">
        <a href="#top" className="link font-display font-semibold text-lg tracking-tight whitespace-nowrap">
          Shanmukh Upadhyayula
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
          <ResumeMenu className="ml-2" />
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
            <p className="mt-6 mb-2 text-base text-ink-soft">Resume</p>
            {RESUMES.map((resume) => (
              <a
                key={resume.href}
                href={resume.href}
                download
                className="flex items-center justify-between py-2.5 text-base text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {resume.label}
                <Download size={16} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
