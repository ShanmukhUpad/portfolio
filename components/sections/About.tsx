"use client";

import dynamic from "next/dynamic";

const IllinoisMap = dynamic(() => import("@/components/ui/IllinoisMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-wash" aria-hidden />,
});

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
          className="text-xl leading-[1.35] md:text-2xl md:columns-2 md:gap-12"
        >
          <p className="mb-5">
            <strong className="font-semibold">I&apos;m Shanmukh</strong>, a computer science and geography &amp; GIS
            student at the University of Illinois Urbana-Champaign, finishing in May 2027 with a 3.95 GPA, then
            staying for a Master of Computer Science through May 2028.
          </p>
          <p className="mb-5">
            I grew up in Naperville, spent a year at UIC in Chicago, and transferred to Urbana in fall 2025. Most of
            what I build sits where cities meet computers: computer vision on aerial imagery, spatial statistics on
            city data, and AR you steer with your hands.
          </p>
          <p>
            Right now I&apos;m a machine learning engineering intern at the UIUC CyberGIS Lab, testing a geospatial
            AI agent until it fails, then fixing why it did.{" "}
            <a
              href="#contact"
              className="font-medium text-accent underline decoration-[0.07em] underline-offset-[0.2em]"
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
