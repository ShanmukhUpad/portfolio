"use client";

import dynamic from "next/dynamic";

const IllinoisMap = dynamic(() => import("@/components/ui/IllinoisMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-wash" aria-hidden />,
});

function Mark({ children, tone = 1 }: { children: React.ReactNode; tone?: 1 | 2 | 3 }) {
  return (
    <span className="mark" style={{ backgroundColor: `var(--color-mark-${tone})` }}>
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-gap">
      <div className="frame">
        <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-10 md:mb-14">
          About
        </h2>

        <div
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
          className="text-xl leading-[1.3] md:text-2xl md:leading-[1.3] md:columns-2 md:gap-12 hyphens-auto"
        >
          <p className="mb-5">
            <strong className="font-semibold">I&apos;m Shanmukh</strong>, a computer science and geography &amp; GIS
            student at the University of Illinois Urbana-Champaign, finishing in <Mark>May 2027</Mark> with a{" "}
            <Mark tone={2}>3.95 GPA</Mark>, then staying for a <Mark tone={3}>Master of Computer Science</Mark>{" "}
            through May 2028.
          </p>
          <p className="mb-5">
            I grew up in <Mark>Naperville</Mark>, spent a year at UIC in Chicago, and transferred to Urbana in
            fall 2025. Most of what I build sits where cities meet computers:{" "}
            <Mark tone={2}>computer vision on aerial imagery</Mark>, spatial statistics on city data, and AR you
            steer with your hands.
          </p>
          <p>
            Right now I&apos;m a machine learning engineering intern at the <Mark tone={3}>UIUC CyberGIS Lab</Mark>,
            testing a geospatial AI agent until it fails, then fixing why it did.{" "}
            <a
              href="#contact"
              className="mark link font-medium"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-on-accent)" }}
            >
              If that overlaps with your work, write to me.
            </a>
          </p>
        </div>

        <figure className="mt-16 md:mt-24">
          <div data-shutter>
            <div className="h-[340px] md:h-[440px] w-full overflow-hidden bg-wash">
              <IllinoisMap />
            </div>
          </div>
          <figcaption className="mt-3 text-base text-ink-soft">
            Naperville, Chicago and Urbana: where I grew up, started college, and study now.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
