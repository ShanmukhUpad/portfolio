"use client";

import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "Street-to-3D: Visual Odometry & 3D Mapping",
    description: [
      "Building a monocular visual odometry pipeline in C++ for camera localization, cutting trajectory drift from 33% to 13% on the KITTI benchmark with keyframe selection, 5-point RANSAC pose estimation, and triangulation",
      "Generalizing to an unseen KITTI sequence at 3.6% drift with no retuning, verified by a trajectory evaluation suite (ATE, RPE, Sim(3) alignment) that matches the open-source evo toolkit",
      "Calibrating cameras with OpenCV to recover intrinsics within 0.2 px in synthetic tests, the first stage of a phone-video-to-3D-map pipeline",
    ],
    tags: ["C++", "OpenCV", "Eigen", "Python", "Visual Odometry", "Multi-View Geometry"],
    featured: true,
    period: "Oct 2026 – Present",
  },
  {
    title: "Multi-Region Cloud Web Service",
    description: [
      "Deployed a Node.js and Express REST API on Firestore to Google Cloud servers in the US and Europe (cloud database course project)",
      "Measured a 3 to 4x latency penalty in Europe from cross-Atlantic database calls, with 0 stale reads across 100 consistency trials, by benchmarking in Python",
    ],
    tags: ["Node.js", "Express", "Python", "Firestore", "Google Cloud"],
    period: "Oct 2026",
  },
  {
    title: "Smash Ultimate Rankings Dashboard",
    description: [
      "Shipped an interactive dashboard comparing my ranking of all 89 fighters to the competitive tier list, with bootstrap confidence intervals and permutation tests",
      "Kept bad data out of the charts with unit-tested statistics and build-time data validation",
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
      "Built a live developer tool that turns any GitHub repo into an interactive dependency graph, with import resolvers for 12+ languages (Go, Java, Python, C++)",
      "Generated per-file explanations with the Claude API, cached in the browser so each file is explained once, in a Wii U-inspired interface",
      "Made large codebases faster to understand than a file tree by visualizing how every file connects",
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
      "Built a gesture-controlled 3D city viewer with MediaPipe hand tracking (clench to zoom, point to pan, grab to move buildings)",
      "Kept real-time rendering smooth by running hand tracking on a separate thread from the ModernGL renderer",
      "Generated 3D cities from OpenStreetMap footprints projected with pyproj, with GLSL lighting and haze over satellite imagery",
    ],
    tags: ["Python", "MediaPipe", "OpenCV", "ModernGL", "GLSL", "pyproj", "Shapely"],
    github: "https://github.com/ShanmukhUpad/urban-ar-gis",
    featured: true,
    period: "Mar 2026",
  },
  {
    title: "Off the Clock: Standalone VR Game",
    description: [
      "Built VR combat for sword fighting, laser guns, and mech flight in Unity XR, using sphere-cast sweeps so fast swings register reliably (VR course project)",
      "Held Meta Quest 3 builds to a 90 FPS target with an in-headset profiling overlay for frame time, draw calls, and memory",
      "Fixed laser effects missing in the headset by replacing shaders that lacked single-pass stereo support",
    ],
    tags: ["C#", "Unity XR", "OpenXR", "Meta Quest 3"],
    featured: true,
    period: "Apr 2026 – May 2026",
  },
  {
    title: "MAS Sycophancy: Hierarchical Multi-Agent LLM Failure",
    description: [
      "Showed one injected false claim cascades to 100% of agents in hierarchical LLM agentic workflows by turn 3",
      "Measured the failure without an LLM judge using stance flips, planning errors, and deference language",
      "Found anti-sycophancy prompting fails to prevent collapse, and co-authored an ACL-format paper on the \"Yes-Man\" failure mode",
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
      "Showed 5 significant data center impact effects vanish under a spatial-lag model vs. OLS with state fixed effects across U.S. counties",
      "Surfaced a Northern Virginia electricity-price hot spot invisible to national statistics with bivariate Moran's I and LISA",
      "Fused 12 datasets (data center sites, home values, utility prices, drought, air quality) into a Python spatial-regression pipeline",
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
      "Led an 8-person team building a Streamlit and Mapbox GL dashboard that turns any uploaded urban dataset into on-demand maps and Random Forest and Gradient Boosting predictions",
      "Surfaced model errors and spatial patterns across 6 urban domains with automated data validation, LISA hot-spot analysis, and actual vs. predicted maps",
    ],
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL", "SODA API"],
    github: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    featured: true,
    period: "Feb 2026 – May 2026",
  },
  {
    title: "Digital Diary (ACM SIG-CHI)",
    description: [
      "Built real-time, hands-free mood logging from webcam video via MediaPipe hand landmarks and face blendshapes",
      "Led a 15-person team shipping a Next.js journaling app integrating mood detection, Claude API, and Google Calendar",
    ],
    tags: ["Next.js", "TypeScript", "OpenCV", "MediaPipe", "Claude AI"],
    github: "https://github.com/sigchi-uiuc/digital-diary",
    demo: "https://acm-sigchi-digitaldiary.org/",
    demoLabel: "Website",
    featured: true,
    period: "Sep 2025 – Apr 2026",
  },
  {
    title: "Media Review",
    description: [
      "Let users search, review, and track games, movies, and TV shows in one place by integrating the IGDB, Twitch, and IMDb APIs",
      "Linked Steam, PlayStation, and Xbox accounts through OAuth so game playtime updates live on a user's profile",
      "Built the PostgreSQL backend for reviews, lists, favorites, friends, and progress tracking as the main backend developer on a team of 4",
    ],
    tags: ["TypeScript", "Next.js", "PostgreSQL", "OAuth", "REST APIs"],
    github: "https://github.com/CS222-UIUC/fa25-fa25-team001",
    period: "Sep 2025 – Dec 2025",
  },
  {
    title: "PlantRoute",
    description: [
      "Built an XGBoost model at HackIllinois that generates personalized low-carbon travel itineraries, balancing trip preferences with emissions",
      "Integrated Google Maps, Supermemory, and Gemini APIs with a Leaflet globe visualization",
    ],
    tags: ["Next.js", "TypeScript", "XGBoost", "Prisma ORM", "Leaflet", "Gemini API"],
    github: "https://github.com/groversomanshi/PlantRoute",
    demo: "https://tinyurl.com/44zy4ujm",
    period: "Feb 2026 – Mar 2026",
  },
  {
    title: "A Spatial Analysis of Walkability and Urban Form in the Chicago Metropolitan Area",
    description: [
      "Added an EPA-derived walkability measure to ChiVes, a geospatial analytics platform for the Chicago metro area",
      "Modeled walkability from urban form with an R regression (R² = 0.85)",
      "Showed mixed land use and street connectivity, not population density, drive walkability via Moran's I cluster mapping, and presented at the UIUC Undergraduate Research Symposium",
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
