const COURSEWORK = [
  "Spatial Analysis",
  "Virtual Reality",
  "Data Management in the Cloud",
  "Human-LLM Interaction",
  "Algorithms & Formal Models of Computation",
  "CyberGIS & Geospatial Data Science",
  "Intro to GIS I & II",
  "Environmental Data Science",
  "Intro to Computer Systems",
  "Software Design Lab",
  "Data Structures",
  "Discrete Structures",
  "Linear Algebra",
];

const PLANNED = ["Computational Photography", "Computer Vision", "Autonomous Vehicle System Engineering"];

const FIGURES = [
  {
    figure: "3.95",
    text: "GPA in the B.S. in Computer Science & Geographic Information Science, finishing May 2027.",
  },
  {
    figure: "2028",
    text: "The year I finish the Master of Computer Science, also at Illinois, starting August 2027.",
  },
];

export function Education() {
  return (
    <section id="education" className="section-gap bg-wash">
      <div className="frame">
        <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">
          Education
        </h2>
        <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="text-xl md:text-2xl mb-14 md:mb-20">
          University of Illinois Urbana-Champaign
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:gap-8 mb-16 md:mb-24">
          {FIGURES.map((f, i) => (
            <div key={f.figure} data-reveal style={{ "--i": i + 2 } as React.CSSProperties}>
              <p
                className="tabular font-display font-bold text-accent"
                style={{ fontSize: "clamp(3.5rem, 6.4vw, 5.75rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                {f.figure}
              </p>
              <p className="mt-5 max-w-[34ch] text-lg">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div data-reveal className="md:col-span-4">
            <h3 className="font-display font-semibold text-2xl mb-3">Clubs</h3>
            <p>Project lead, ACM SIG-HCI</p>
            <p>Project lead, ACM SIG-AIDA</p>
          </div>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="md:col-span-8">
            <h3 className="font-display font-semibold text-2xl mb-3">Coursework</h3>
            <p className="max-w-[68ch]">{COURSEWORK.join(", ")}.</p>
            <p className="mt-3 max-w-[68ch] text-ink-soft">Next: {PLANNED.join(", ")}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
