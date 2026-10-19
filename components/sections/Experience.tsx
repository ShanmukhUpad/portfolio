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
      "Benchmarking the lab's geospatial AI agent on all 50 GeoAnalystBench tasks, where it matches published LLMs on code but plans more steps than the expert on 43 of 48 tasks.",
      "Running user tests on the live agent across dataset search, map projections, raster data, file uploads, and adversarial prompts, and reporting 4 bugs that break core features.",
      "Improving the agent's architecture, including how it picks tools, keeps its search index current, and runs code.",
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
      "Trained a DeepLabV3-ResNet50 model on aerial imagery and built a tiled scanner that maps where it is likely wrong across full-size images, using only the model's own confidence and no labeled data.",
      "Validated the error maps on 4 benchmark datasets, found the model is about half as accurate along object edges, and presented the work in an IEEE-format paper and a CyberGIS talk.",
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
      "Cut Chicago's largest cross-neighborhood recall gap by 99%, to nearly zero, by pitting a custom Group-DRO XGBoost objective, with hand-derived gradient/Hessian, against per-group thresholds.",
      "Traced the disparity to a ranking deficit, not a threshold artifact, by computing per-group ROC AUC well above chance over 8,312 inspections, correctly predicting which mitigation would work.",
      "Rebuilt the City's forecasting pipeline on 2018-present data, cutting 148K raw records down to 42K clean rows, and clustered neighborhoods into 3 typologies via two-stage k-means and Ward clustering.",
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
      "Led a team of 8 to develop ensemble ML models (Random Forest, Gradient Boosting) predicting urban hardship, crime hotspots, crash risk, and transit accessibility across 77 Chicago community areas.",
      "Built a live data pipeline integrating the Chicago Data Portal SODA API and Global/Local Moran's I (LISA) spatial autocorrelation analysis across six urban domains.",
      "Developed an interactive Streamlit + Mapbox GL dashboard featuring choropleth maps, density heatmaps, and LISA cluster visualizations for city planning decisions.",
      "Engineered an urban domain-aware file upload system with automated validation, spatial mapping, and on-demand ML prediction.",
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
      "Built a real-time camera pipeline with OpenCV and MediaPipe that tracks face and hand landmarks from webcam video to detect mood and gesture controls, running as its own Docker service.",
      "Led a 15-person team building a Next.js journaling app with a guided mode that pulls in Google Calendar, weather data, and Claude AI.",
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
      "Built a Pandas merge tool that cut processing time by about 30% across hundreds of Chicago urban data pipelines.",
      "Added dataset merging and multi-tab data views to Curio, a visual data-pipeline tool used by researchers.",
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
