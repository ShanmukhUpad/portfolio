"use client";

import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "Multi-Region Cloud Web Service",
    description: [
      "Cloud database course project. Deployed a Node.js and Express REST API on Firestore to Google Cloud servers in the US and Europe.",
      "Quantified a 3 to 4 times slowdown in Europe by benchmarking latency in Python, since each request crossed the Atlantic twice, with 0 stale reads in 100 trials.",
    ],
    tags: ["Node.js", "Express", "Python", "Firestore", "Google Cloud"],
    period: "Oct 2026",
  },
  {
    title: "Smash Ultimate Rankings Dashboard",
    description: [
      "Built an interactive dashboard comparing my ranking of all 89 fighters to the competitive tier list, with filters, bootstrap confidence intervals, and permutation tests.",
      "Wrote unit tests for the statistics and build-time data validation, so a bad edit to the source data fails the build instead of skewing the charts.",
    ],
    tags: ["TypeScript", "Next.js", "Statistics"],
    github: "https://github.com/ShanmukhUpad/Smash-Ultimate-Rankings",
    demo: "https://shanmukhupad.github.io/Smash-Ultimate-Rankings/",
    demoLabel: "Website",
    period: "Sep 2026",
  },
  {
    title: "Codebase Mapper",
    description: [
      "Built a live developer tool that turns any GitHub repo into an interactive dependency map, writing import resolvers for over a dozen languages including Go, Java, Python, and C++.",
      "Added file explanations from a local LLM with a Claude API fallback and browser caching, wrapped in a Wii U-inspired interface with menu sound effects.",
    ],
    tags: ["TypeScript", "Next.js", "React", "Claude API"],
    github: "https://github.com/ShanmukhUpad/Code-Atlas",
    demo: "https://codebase-mapper.vercel.app",
    demoLabel: "Website",
    period: "Jul 2026",
  },
  {
    title: "Urban AR GIS: Hand-Tracked 3D City Viewer",
    description: [
      "Turned OpenStreetMap data for any latitude and longitude into a navigable 3D city by projecting building footprints to local meters with pyproj and triangulating them into 3D models.",
      "Built a webcam AR viewer where MediaPipe hand tracking lets users zoom, pan, and grab 973 3D campus buildings with gestures, with tracking on its own thread at about 30 FPS.",
      "Wrote ModernGL/GLSL shaders for a 60 FPS renderer with Blinn-Phong lighting, gamma correction on high-resolution satellite imagery, and atmospheric haze.",
    ],
    tags: ["Python", "MediaPipe", "OpenCV", "ModernGL", "GLSL", "pyproj", "Shapely"],
    github: "https://github.com/ShanmukhUpad/urban-ar-gis",
    featured: true,
    period: "Mar 2026",
  },
  {
    title: "Off the Clock: Standalone VR Game",
    description: [
      "Virtual Reality course project. Built motion controls and a combat system for sword fighting, laser guns, and mech flight, using controller tracking data and sphere-cast sweeps so fast sword swings register hits reliably.",
      "Tested Android builds on Meta Quest 3 against a 90 FPS target, adding an in-headset overlay for frame time, draw calls, and memory use to catch performance drops on the device.",
      "Debugged laser effects that rendered on PC but disappeared in the headset, traced the cause to shaders that do not support single-pass stereo rendering, and replaced them with a compatible fallback.",
    ],
    tags: ["C#", "Unity XR", "OpenXR", "Meta Quest 3"],
    featured: true,
    period: "Apr 2026 – May 2026",
  },
  {
    title: "MAS Sycophancy: Hierarchical Multi-Agent LLM Failure",
    description: [
      "Demonstrated that hierarchical LLM agent topologies collapse under a single injected authority hallucination, driving a large sycophancy effect and 100% cascade by turn 3.",
      "Quantified the failure without an LLM judge, using three independent signals (stance flips, planning errors, and deference language), each completely absent in the uninjected baseline.",
      "Showed that explicit anti-sycophancy prompting fails to prevent collapse, co-authoring an ACL-format paper on the resulting \"Yes-Man\" failure mode.",
    ],
    tags: ["Python", "Concordia", "Vertex AI"],
    github: "https://github.com/VelupallyG/mas-sycophancy",
    links: [{ href: "/MAS-Sycophancy.pdf", label: "Paper", download: true }],
    featured: true,
    period: "Mar 2026 – May 2026",
  },
  {
    title: "Spatial Autocorrelation of AI Data Centers",
    description: [
      "Proved 5 statistically significant hyperscale-impact effects vanish under a spatial-lag model, contrasting OLS-with-state-fixed-effects against GM_Lag across 3,220 U.S. counties.",
      "Surfaced a 34-county Northern Virginia electricity-price hot spot invisible to national statistics via bivariate global Moran's I and LISA across 5 impact variables.",
      "Fused 12 datasets on hyperscale locations, home values, utility prices, drought, and air quality into a Python spatial-regression pipeline.",
    ],
    tags: ["Python", "GeoPandas", "libpysal", "esda", "spreg"],
    period: "Mar 2026 – May 2026",
    links: [
      {
        href: "https://drive.google.com/file/d/1AqqyYQIkKm83-Xw9wflU3zjfdRdfiHaK/view?usp=sharing",
        label: "View Analysis",
        icon: "external",
      },
    ],
  },
  {
    title: "Pathway to Improved Cities (ACM SIG-AIDA)",
    description: [
      "Led an 8-person team building a Streamlit and Mapbox GL dashboard that turns any uploaded urban dataset into on-demand maps and Random Forest and Gradient Boosting predictions.",
      "Made model errors and spatial patterns easy to spot across 6 urban domains with automated data validation, LISA hot-spot analysis, and actual vs. predicted map views.",
    ],
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL", "SODA API"],
    github: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    featured: true,
    period: "Feb 2026 – May 2026",
  },
  {
    title: "Digital Diary (ACM SIG-CHI)",
    description: [
      "Built a real-time camera pipeline with OpenCV and MediaPipe that tracks face and hand landmarks from webcam video to detect mood and gesture controls, running as its own Docker service.",
      "Led a 15-person team building a Next.js journaling app with a guided mode that pulls in Google Calendar, weather data, and Claude AI.",
    ],
    tags: ["Next.js", "TypeScript", "OpenCV", "MediaPipe", "Claude AI"],
    github: "https://github.com/sigchi-uiuc/digital-diary",
    demo: "https://acm-sigchi-digitaldiary.org/",
    demoLabel: "Website",
    featured: true,
    period: "Sep 2025 – Apr 2026",
  },
  {
    title: "PlantRoute",
    description: [
      "HackIllinois: XGBoost model generating personalized low-carbon travel itineraries, balancing vacation preferences with emissions reduction",
      "Fused Google Maps, Supermemory, and Gemini APIs with a Leaflet globe visualization",
    ],
    tags: ["Next.js", "TypeScript", "XGBoost", "Prisma ORM", "Leaflet", "Gemini API"],
    github: "https://github.com/groversomanshi/PlantRoute",
    demo: "https://tinyurl.com/44zy4ujm",
    period: "Feb 2026 – Mar 2026",
  },
  {
    title: "A Spatial Analysis of Walkability and Urban Form in the Chicago Metropolitan Area",
    description: [
      "Contributed a new EPA-derived walkability score variable to ChiVes, a geospatial urban analytics platform for the Chicago metro area",
      "Modeled walkability from urban form with an R regression (R² = 0.85).",
      "Showed that mixed land use and street connectivity, not population density, drive walkability by mapping spatial clusters with Moran's I, and presented the findings at the UIUC Undergraduate Research Symposium.",
      "Cleaned and transformed raw EPA walk score data using R's sf library into publication-ready spatial measures with improved geographic precision",
    ],
    tags: ["R", "sf", "Spatial Analysis", "ChiVes"],
    demo: "https://shanmukhupad.github.io/chicago-walkability/",
    demoLabel: "Website",
    period: "Oct 2025 – Apr 2026",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="theme-dark section-padding"
      style={{ backgroundColor: "var(--color-elevated)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
            04 / projects
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Projects
          </h2>
          <p className="text-sm mb-12" style={{ color: "var(--color-text-muted)" }}>
            A selection of work spanning computer vision, XR, LLM research, urban analytics, HCI, and geospatial analysis.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 gap-5 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex flex-col gap-5">
            {PROJECTS.filter((_, i) => i % 2 === 0).map((project, i) => (
              <motion.div key={`l-${i}`} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {PROJECTS.filter((_, i) => i % 2 === 1).map((project, i) => (
              <motion.div key={`r-${i}`} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
