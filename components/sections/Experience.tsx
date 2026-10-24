"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ExperienceCard, type Experience } from "@/components/ui/ExperienceCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EXPERIENCES: Experience[] = [
  {
    role: "Machine Learning Engineering Intern",
    company: "UIUC CyberGIS Lab",
    location: "Urbana, IL",
    period: "Sep 2026 – Present",
    tags: ["Python", "LLM Agents", "Benchmarking", "User Testing"],
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
    tags: ["Python", "PyTorch", "torchvision"],
    link: "https://github.com/ShanmukhUpad/semantic-segmentation-feature",
    links: [{ href: "/label-free-detection.pdf", label: "Paper", download: true }],
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
    tags: ["Python", "XGBoost", "GeoPandas"],
    links: [
      { href: "/bias_reduction.ipynb", label: "Notebook", download: true },
      { href: "/bias_reduction.html", label: "View", icon: "external" },
    ],
    bullets: [
      "Cut the largest cross-neighborhood recall gap by 99% by writing a custom Group-DRO XGBoost objective with a hand-derived gradient and Hessian",
      "Predicted which bias fix would work by tracing the gap to a ranking deficit, not a threshold artifact, via per-group ROC AUC across 8,312 inspections",
      "Rebuilt the City's inspection forecasting pipeline on 2018-present data and clustered neighborhoods into 3 typologies with k-means and Ward clustering",
    ],
  },
  {
    role: "Project Lead, Data Scientist & GI Scientist",
    company: "Pathway to Improved Cities (ACM SIG-AIDA)",
    location: "Urbana, IL",
    period: "Feb 2026 – May 2026",
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL"],
    link: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    bullets: [
      "Led an 8-person team building a Streamlit and Mapbox GL dashboard that turns any uploaded urban dataset into on-demand maps and Random Forest and Gradient Boosting predictions",
      "Surfaced model errors and spatial patterns across 6 urban domains with automated data validation, Moran's I and LISA hot-spot analysis, and actual vs. predicted maps",
      "Kept models and maps current with a live SODA API data pipeline",
    ],
  },
  {
    role: "Project Lead & Software Engineer",
    company: "ACM SIG-CHI",
    location: "Urbana, IL",
    period: "Sep 2025 – Apr 2026",
    tags: ["TypeScript", "Next.js", "Python", "OpenCV", "MediaPipe"],
    link: "https://acm-sigchi-digitaldiary.org/",
    bullets: [
      "Built real-time, hands-free mood logging from webcam video via MediaPipe hand landmark tracking and thumb angle",
      "Added facial-expression mood detection from MediaPipe face blendshapes (smile, frown, brow, cheek)",
      "Led a 15-person team shipping a Next.js journaling app integrating mood detection, Claude API, Google Calendar, and weather data",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "UIC Electronic Visualization Laboratory",
    location: "Chicago, IL",
    period: "Jun 2025 – Aug 2025",
    tags: ["Python", "Pandas", "TypeScript", "React"],
    link: "https://github.com/ShanmukhUpad/curio",
    bullets: [
      "Cut processing time by about 30% across hundreds of urban data pipelines by building a Pandas merge tool",
      "Added dataset merging and multi-tab data views to Curio, a visual data-pipeline tool for researchers",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
            02 / experience
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Animated timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{
              marginLeft: "-1.5rem",
              backgroundColor: "var(--color-border)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: reduced ? "100%" : lineHeight,
                backgroundColor: "var(--color-signal-dim)",
              }}
            />
          </div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {EXPERIENCES.map((exp, i) => (
              <motion.div key={i} variants={staggerItem} className="relative">
                <span
                  className="hidden lg:block absolute top-6"
                  style={{
                    left: "-1.5rem",
                    transform: "translateX(-3.5px)",
                    width: 7,
                    height: 7,
                    backgroundColor: "var(--color-signal)",
                    border: "1px solid var(--color-bg-alt)",
                  }}
                  aria-hidden
                />
                <ExperienceCard exp={exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
