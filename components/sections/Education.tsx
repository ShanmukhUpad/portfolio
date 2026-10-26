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

const DEGREES = [
  {
    degree: "B.S. in Computer Science & Geographic Information Science",
    detail: "GPA 3.95 / 4.0",
    dates: "Aug 2024 – May 2027",
  },
  {
    degree: "Master of Computer Science (planned)",
    detail: "",
    dates: "Aug 2027 – May 2028",
  },
];

export function Education() {
  return (
    <section id="education" className="section-gap bg-wash">
      <div className="frame">
        <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-8 md:mb-10">
          Education
        </h2>

        <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mb-12 md:mb-16">
          <h3 className="font-display font-semibold text-2xl mb-4">University of Illinois Urbana-Champaign</h3>
          <ul className="flex flex-col gap-3">
            {DEGREES.map((d) => (
              <li key={d.degree} className="flex flex-col gap-x-6 md:flex-row md:items-baseline md:justify-between">
                <span>
                  {d.degree}
                  {d.detail && <span className="text-ink-soft"> · {d.detail}</span>}
                </span>
                <span className="tabular text-base text-ink-soft">{d.dates}</span>
              </li>
            ))}
          </ul>
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
