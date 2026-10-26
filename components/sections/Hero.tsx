import { ResumeMenu } from "@/components/ui/ResumeMenu";

export function Hero() {
  return (
    <section id="top" className="theme-dark relative flex flex-col min-h-[78svh] lg:min-h-svh">
      <div className="frame flex flex-1 flex-col pt-[18svh] pb-7 md:pt-[16svh]">
        {/* Each line is authored so it can rise from behind its own baseline */}
        <h1
          className="lines font-display font-bold text-ink"
          style={{ fontSize: "clamp(4.25rem, 16.4vw, 15rem)", lineHeight: 0.86, letterSpacing: "-0.035em" }}
        >
          <span className="line">
            <span data-line style={{ "--i": 0 } as React.CSSProperties}>
              Shanmukh
            </span>
          </span>
          <span className="line md:text-right">
            <span data-line style={{ "--i": 1 } as React.CSSProperties}>
              Upadhyayula
            </span>
          </span>
        </h1>

        <div
          data-after-lines
          className="mt-auto flex flex-col gap-6 pt-16 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[44ch] text-xl leading-snug text-ink md:text-2xl">
            Computer science + GIS student at UIUC, building computer vision and spatial analysis
            software for cities.
          </p>
          <ResumeMenu label="Download resume" placement="up" className="md:w-auto w-full shrink-0" />
        </div>
      </div>
    </section>
  );
}
