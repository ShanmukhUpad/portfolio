"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Menu, X } from "@/components/ui/icons";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const RESUMES = [
  { label: "Computer Vision & ML", href: "/ShanmukhUpadhyayula-Resume-CV.pdf" },
  { label: "Software Engineering & Cloud", href: "/ShanmukhUpadhyayula-Resume-SWE.pdf" },
  { label: "GIS & Spatial Data Science", href: "/ShanmukhUpadhyayula-Resume-GIS.pdf" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  return (
    <header
      className="theme-dark fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "var(--color-elevated)", borderColor: "var(--color-border)" }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-9 h-9 flex items-center justify-center text-sm font-bold font-mono rounded-full border"
            style={{
              backgroundColor: "var(--color-signal-tint)",
              borderColor: "var(--color-signal-dim)",
              color: "var(--color-signal)",
            }}
          >
            SU
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <NavPill key={link.href} href={link.href} label={link.label} active={activeId === link.id} />
          ))}
          <ResumeMenu />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--color-text-primary)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium"
                  style={{
                    backgroundColor: activeId === link.id ? "var(--color-signal-tint)" : "transparent",
                    color: activeId === link.id ? "var(--color-signal)" : "var(--color-text-muted)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <p
                className="mt-2 px-3 text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Resume
              </p>
              {RESUMES.map((resume) => (
                <Link
                  key={resume.href}
                  href={resume.href}
                  download
                  className="px-4 py-2 rounded-md text-sm font-medium flex items-center justify-between"
                  style={{
                    backgroundColor: "var(--color-signal)",
                    color: "var(--color-elevated)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {resume.label}
                  <Download size={16} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative ml-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 flex items-center gap-1.5"
        style={{
          backgroundColor: "var(--color-signal)",
          color: "var(--color-elevated)",
        }}
      >
        Resume
        <ChevronDown
          size={14}
          className="transition-transform duration-150"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-64 rounded-md border p-1.5 shadow-lg"
            style={{ backgroundColor: "var(--color-elevated)", borderColor: "var(--color-border)" }}
          >
            {RESUMES.map((resume) => (
              <Link
                key={resume.href}
                href={resume.href}
                download
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-[var(--color-signal-tint)] hover:text-[var(--color-signal)]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {resume.label}
                <Download size={16} />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavPill({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      className="px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-[var(--color-signal-tint)] hover:text-[var(--color-signal)]"
      style={{
        backgroundColor: active ? "var(--color-signal-tint)" : "transparent",
        color: active ? "var(--color-signal)" : "var(--color-text-muted)",
      }}
    >
      {label}
    </a>
  );
}
