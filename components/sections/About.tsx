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
            I&apos;m Shanmukh, a computer science and geography &amp; GIS
            student at the University of Illinois Urbana-Champaign, finishing in May 2027 with a 3.95 GPA, then
            staying for a Master of Computer Science through May 2028.
          </p>
          <p className="mb-5">
            I was born and raised in Naperville, Illinois, and went to Waubonsie Valley High School. I spent my
            freshman year at the University of Illinois Chicago studying computer science, starting in fall 2024,
            then transferred to the University of Illinois Urbana-Champaign in fall 2025 for computer science and
            GIS.
          </p>
          <p className="mb-5">
            My main interest is computer vision, especially sensor technology and motion control: getting cameras
            and other sensors to work out where things are and how they move. I&apos;m also drawn to augmented and
            virtual reality, and to urban planning and geospatial work. Ideally, I want to build software where all
            of these meet, like a city model you can walk around in and steer with your hands.
          </p>
          <p className="mb-5">
            In my free time, I play music. I&apos;ve played violin for 15 years and sung for 12, and I&apos;m in
            UIUC&apos;s Video Game Music Club, in both the symphonic and vocal ensembles. I also love video games,
            especially Super Smash Bros. and Japanese role-playing games. They shaped a lot of my career interests,
            even though most of those interests have nothing to do with games directly. Outside of that, I enjoy long
            walks and going to the gym. The walks outdoors made me appreciate geography more, and they&apos;re part of what
            pushed me toward the GIS side of my major.
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
          <div className="h-[340px] md:h-[440px] w-full overflow-hidden bg-wash">
            <IllinoisMap />
          </div>
          <figcaption className="mt-3 text-base text-ink-soft">
            Naperville, Chicago and Urbana: where I grew up, started college, and study now.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
