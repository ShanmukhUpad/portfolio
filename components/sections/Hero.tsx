import { NodeGraph } from "@/components/svg/NodeGraph";

export function Hero() {
  return (
    <section id="top" className="theme-dark relative overflow-hidden">
      <NodeGraph />
      <div className="frame relative grid items-center gap-10 pt-28 pb-16 md:grid-cols-12 md:gap-12 md:pt-36 md:pb-24">
        {/* Each line is authored so it can rise from behind its own baseline */}
        <h1
          className="lines font-display font-bold text-ink md:col-span-8"
          style={{ fontSize: "clamp(3rem, 7.2vw, 7rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
        >
          <span className="line">
            <span data-line style={{ "--i": 0 } as React.CSSProperties}>
              Shanmukh
            </span>
          </span>
          <span className="line">
            <span data-line style={{ "--i": 1 } as React.CSSProperties}>
              Upadhyayula
            </span>
          </span>
        </h1>

        <div data-after-lines className="w-[min(70%,260px)] md:col-span-4 md:w-full md:max-w-[340px] md:justify-self-end">
          {/* Relative so it resolves under the deploy's basePath */}
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
          <img
            src="shanmukh.webp"
            alt="Shanmukh Upadhyayula"
            width={366}
            height={380}
            decoding="async"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
