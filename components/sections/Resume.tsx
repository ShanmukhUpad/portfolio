"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Download, ExternalLink } from "@/components/ui/icons";
import { RESUMES } from "@/components/ui/ResumeMenu";
import { cn } from "@/lib/utils";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Resume() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const resume = RESUMES[active];
  const src = `${BASE_PATH}${resume.href}`;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + RESUMES.length) % RESUMES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="resume" className="section-gap bg-wash">
      <div className="frame grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Resume
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mb-8 max-w-[36ch]">
            Three versions of the same record, each ordered for a different kind of role.
          </p>

          <div
            role="tablist"
            aria-label="Resume versions"
            aria-orientation="vertical"
            className="flex flex-col gap-1"
            onKeyDown={onKeyDown}
          >
            {RESUMES.map((r, i) => (
              <button
                key={r.href}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`resume-tab-${i}`}
                aria-selected={i === active}
                aria-controls="resume-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  "px-4 py-3 text-left transition-colors duration-150",
                  i === active ? "bg-accent text-on-accent" : "hover:bg-ground"
                )}
              >
                <span className="block font-semibold">{r.label}</span>
                <span className={cn("block text-base", i === active ? "opacity-90" : "text-ink-soft")}>{r.note}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={resume.href} download className="button">
              Download PDF
              <Download size={16} />
            </Link>
            <Link
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1.5 text-base font-medium text-accent"
            >
              Open in a new tab
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>

        <div
          id="resume-panel"
          role="tabpanel"
          aria-labelledby={`resume-tab-${active}`}
          className="lg:col-span-8"
        >
          {/* Remount per resume so every browser reloads the embedded document */}
          <object
            key={src}
            data={`${src}#view=FitH&navpanes=0`}
            type="application/pdf"
            aria-label={`${resume.label} resume`}
            className="block w-full bg-ground h-[70svh] lg:h-auto lg:aspect-[8.5/11] lg:max-h-[88svh]"
          >
            <div className="flex h-full min-h-[16rem] flex-col items-start justify-center gap-4 bg-ground p-8">
              <p>This browser can&apos;t show PDFs inline.</p>
              <Link href={resume.href} target="_blank" rel="noopener noreferrer" className="button">
                Open the {resume.label} resume
              </Link>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
