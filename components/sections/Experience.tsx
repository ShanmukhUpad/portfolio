import { ResourceLinks, type ResourceLink } from "@/components/ui/ResourceLinks";

interface Role {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tools: string[];
  links?: ResourceLink[];
  /** Page-relative path under public/, so it resolves under the deploy basePath. */
  image?: { src: string; alt: string; caption: string; width: number; height: number };
}

const EXPERIENCES: Role[] = [
  {
    role: "Machine Learning Engineering Intern",
    company: "UIUC CyberGIS Lab",
    location: "Urbana, IL",
    period: "Sep 2026 – Present",
    tools: ["Python", "LLM agents", "Benchmarking", "User testing"],
    bullets: [
      "Testing and improving I-GUIDE's geospatial AI agent, an LLM system that writes and runs GIS code for researchers from plain-language requests",
      "Benchmarking the agent on GeoAnalystBench (48/50 tasks solved, over-planning on 43/48) and identifying flawed expert ground truth that skews LLM scoring",
      "Uncovering 2 silent failure modes, partial file reads and wrong CRS units causing a 10x area error, by designing trap datasets with known answers",
      "Validating the agent end to end by rebuilding my SIG-AIDA ML analysis through it, matching 21 of 23 outputs (R², MAE, feature importance, Moran's I)",
      "Reworking tool selection, search indexing, and code execution to reduce the over-planning and failures found in testing",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Semantic Segmentation Failure Analysis",
    location: "Urbana, IL",
    period: "May 2026 – Aug 2026",
    tools: ["Python", "PyTorch", "torchvision"],
    links: [
      { href: "https://github.com/ShanmukhUpad/semantic-segmentation-feature", label: "GitHub", icon: "github" },
      { href: "/label-free-detection.pdf", label: "Paper", download: true },
    ],
    image: {
      src: "projects/segmentation-example.webp",
      alt: "An aerial image of farmland and a village beside its land-cover label map: fields, roads, buildings and water",
      caption: "A LoveDA aerial tile and its land-cover labels, the kind of pair the model was trained on.",
      width: 1560,
      height: 760,
    },
    bullets: [
      "Trained a DeepLabV3-ResNet50 semantic segmentation model in PyTorch on aerial imagery, and wrote an IEEE-format paper presented at a CyberGIS talk",
      "Diagnosed failure modes through boundary, class, and confidence analysis, finding 2x lower IoU near class edges and high confidence on misclassified pixels",
      "Cut the error rate from 51% to under 10% on unseen imagery by building label-free uncertainty scoring (entropy, margin, confidence) to filter unreliable pixels",
      "Built a sliding-window inference tool generating full-resolution uncertainty maps to rank images for review",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Bias Reduction in Food Inspection Models across Chicago",
    location: "Urbana, IL",
    period: "May 2026 – Aug 2026",
    tools: ["Python", "XGBoost", "GeoPandas"],
    links: [
      { href: "/bias_reduction.ipynb", label: "Notebook", download: true },
      { href: "/bias_reduction.html", label: "View", icon: "external" },
    ],
    bullets: [
      "Cut the largest cross-neighborhood recall gap by 99% by writing a custom Group-DRO XGBoost objective with a hand-derived gradient and Hessian",
      "Predicted which bias fix would work by tracing the gap to a ranking deficit, not a threshold artifact, via per-group ROC AUC across 8,312 inspections",
      "Rebuilt the City's inspection forecasting pipeline on 2018-present data and clustered neighborhoods into 3 typologies with k-means and Ward clustering",
    ],
    image: {
      src: "projects/bias-reduction-fixes.webp",
      alt: "Bar chart of the recall gap after each fix: 0.125 for the stock model, 0.119 with the custom loss, 0.001 with per-group thresholds",
      caption: "Recall gap between neighborhood groups after each fix, at a fair operating point.",
      width: 790,
      height: 440,
    },
  },
  {
    role: "Project Lead",
    company: "Pathway to Improved Cities (ACM SIG-AIDA)",
    location: "Urbana, IL",
    period: "Feb 2026 – May 2026",
    tools: ["Python", "Scikit-learn", "GeoPandas", "Streamlit", "Mapbox GL", "SODA API"],
    links: [{ href: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities", label: "GitHub", icon: "github" }],
    bullets: [
      "Led an 8-person team building a Streamlit and Mapbox GL dashboard that turns any uploaded urban dataset into on-demand maps and Random Forest and Gradient Boosting predictions",
      "Surfaced model errors and spatial patterns across 6 urban domains with automated data validation, Moran's I and LISA hot-spot analysis, and actual vs. predicted maps",
      "Kept models and maps current with a live SODA API data pipeline",
    ],
    image: {
      src: "projects/pathway-lisa.webp",
      alt: "The dashboard's spatial autocorrelation panel: Moran's I of 0.31, a Moran scatterplot and a LISA cluster map of Chicago community areas",
      caption: "The dashboard's crime hot-spot analysis: global Moran's I and a LISA cluster map of Chicago.",
      width: 1600,
      height: 1150,
    },
  },
  {
    role: "Project Lead & Software Engineer",
    company: "Digital Diary (ACM SIG-CHI)",
    location: "Urbana, IL",
    period: "Sep 2025 – Apr 2026",
    tools: ["TypeScript", "Next.js", "Python", "OpenCV", "MediaPipe", "Claude API"],
    links: [
      { href: "https://acm-sigchi-digitaldiary.org/", label: "Website", icon: "external" },
      { href: "https://github.com/sigchi-uiuc/digital-diary", label: "GitHub", icon: "github" },
    ],
    bullets: [
      "Built real-time, hands-free mood logging from webcam video via MediaPipe hand landmark tracking and thumb angle",
      "Added facial-expression mood detection from MediaPipe face blendshapes",
      "Led a 15-person team shipping a Next.js journaling app integrating mood detection, Claude API, Google Calendar, and weather data",
    ],
    image: {
      src: "projects/digital-diary.webp",
      alt: "Digital Diary's journal page with mood-tagged entries and a calendar of days with entries",
      caption: "The journal view, shown with sample entries on a local copy.",
      width: 1600,
      height: 1000,
    },
  },
  {
    role: "Software Engineering Intern",
    company: "UIC Electronic Visualization Laboratory",
    location: "Chicago, IL",
    period: "Jun 2025 – Aug 2025",
    tools: ["Python", "Pandas", "TypeScript", "React"],
    links: [{ href: "https://github.com/ShanmukhUpad/curio", label: "GitHub", icon: "github" }],
    bullets: [
      "Cut processing time by about 30% across hundreds of urban data pipelines by building a Pandas merge tool",
      "Added dataset merging and multi-tab data views to Curio, a visual data-pipeline tool for researchers",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-gap pt-0 md:pt-0">
      <div className="frame">
        <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12 md:mb-16">
          Experience
        </h2>

        <ol className="flex flex-col gap-16 md:gap-20">
          {EXPERIENCES.map((exp) => (
            <li key={exp.company} data-reveal className="grid gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4 lg:col-span-3 text-base text-ink-soft">
                <p className="tabular font-medium text-ink">{exp.period}</p>
                <p className="mt-1">{exp.company}</p>
                <p>{exp.location}</p>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <h3 className="font-display font-semibold text-2xl leading-tight tracking-tight mb-4">
                  {exp.role}
                </h3>
                <ul className="flex flex-col gap-2.5 max-w-[72ch] list-disc pl-5 marker:text-accent">
                  {exp.bullets.map((b) => (
                    <li key={b} className="pl-1">
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-base text-ink-soft">{exp.tools.join(", ")}</p>
                {exp.links && (
                  <div className="mt-3">
                    <ResourceLinks links={exp.links} />
                  </div>
                )}
                {exp.image && (
                  <figure data-shutter className="mt-8 max-w-[72ch]">
                    {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
                    <img
                      src={exp.image.src}
                      alt={exp.image.alt}
                      width={exp.image.width}
                      height={exp.image.height}
                      decoding="async"
                      className="block h-auto w-full"
                    />
                    <figcaption className="mt-3 text-base text-ink-soft">{exp.image.caption}</figcaption>
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
