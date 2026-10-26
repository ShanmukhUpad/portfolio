"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Download } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export const RESUMES = [
  { label: "Computer Vision & ML", href: "/ShanmukhUpadhyayula-Resume-CV.pdf" },
  { label: "Software Engineering & Cloud", href: "/ShanmukhUpadhyayula-Resume-SWE.pdf" },
  { label: "GIS & Spatial Data Science", href: "/ShanmukhUpadhyayula-Resume-GIS.pdf" },
];

interface ResumeMenuProps {
  label?: string;
  /** Which way the menu opens from its trigger. */
  placement?: "down" | "up";
  className?: string;
}

export function ResumeMenu({ label = "Resume", placement = "down", className }: ResumeMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
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

  const up = placement === "up";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="button w-full justify-between"
      >
        {label}
        <ChevronDown
          size={16}
          className="transition-transform duration-200"
          style={{ transform: open !== up ? "rotate(180deg)" : "none" }}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            "menu theme-dark absolute right-0 z-50 w-72 p-1.5 shadow-xl",
            up ? "bottom-full mb-2 origin-bottom-right" : "top-full mt-2 origin-top-right"
          )}
          style={{ "--menu-shift": up ? "6px" : "-6px" } as React.CSSProperties}
        >
          {RESUMES.map((resume) => (
            <Link
              key={resume.href}
              href={resume.href}
              download
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base text-ink transition-colors duration-150 hover:bg-wash"
            >
              {resume.label}
              <Download size={16} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
