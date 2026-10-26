import { ResourceLinks, type ResourceLink } from "@/components/ui/ResourceLinks";

interface Project {
  title: string;
  kind: string;
  period: string;
  year: string;
  description: string[];
  tools: string[];
  links?: ResourceLink[];
}

const PROJECTS: Project[] = [
  {
    title: "Street-to-3D: Visual Odometry & 3D Mapping",
    kind: "Computer vision",
    period: "Oct 2026 – Present",
    year: "2026",
    description: [
      "Building a monocular visual odometry pipeline in C++ for camera localization, cutting trajectory drift from 33% to 13% on the KITTI benchmark with keyframe selection, 5-point RANSAC pose estimation, and triangulation",
      "Generalizing to an unseen KITTI sequence at 3.6% drift with no retuning, verified by a trajectory evaluation suite (ATE, RPE, Sim(3) alignment) that matches the open-source evo toolkit",
      "Calibrating cameras with OpenCV to recover intrinsics within 0.2 px in synthetic tests, the first stage of a phone-video-to-3D-map pipeline",
    ],
    tools: ["C++", "OpenCV", "Eigen", "Python", "Visual odometry", "Multi-view geometry"],
  },
  {
    title: "Multi-Region Cloud Web Service",
    kind: "Cloud systems",
    period: "Oct 2026",
    year: "2026",
    description: [
      "Deployed a Node.js and Express REST API on Firestore to Google Cloud servers in the US and Europe (cloud database course project)",
      "Measured a 3 to 4x latency penalty in Europe from cross-Atlantic database calls, with 0 stale reads across 100 consistency trials, by benchmarking in Python",
    ],
    tools: ["Node.js", "Express", "Python", "Firestore", "Google Cloud"],
  },
  {
    title: "Smash Ultimate Rankings Dashboard",
    kind: "Statistics",
    period: "Sep 2026",
    year: "2026",
    description: [
      "Shipped an interactive dashboard comparing my ranking of all 89 fighters to the competitive tier list, with bootstrap confidence intervals and permutation tests",
      "Kept bad data out of the charts with unit-tested statistics and build-time data validation",
    ],
    tools: ["TypeScript", "Next.js", "Statistics"],
    links: [
      { href: "https://shanmukhupad.github.io/Smash-Ultimate-Rankings/", label: "Website", icon: "external" },
      { href: "https://github.com/ShanmukhUpad/Smash-Ultimate-Rankings", label: "GitHub", icon: "github" },
    ],
  },
  {
    title: "Codebase Mapper",
    kind: "Developer tool",
    period: "Jul 2026",
    year: "2026",
    description: [
      "Built a live developer tool that turns any GitHub repo into an interactive dependency graph, with import resolvers for 12+ languages (Go, Java, Python, C++)",
      "Generated per-file explanations with the Claude API, cached in the browser so each file is explained once, in a Wii U-inspired interface",
      "Made large codebases faster to understand than a file tree by visualizing how every file connects",
    ],
    tools: ["TypeScript", "Next.js", "React", "Claude API"],
    links: [
      { href: "https://codebase-mapper.vercel.app", label: "Website", icon: "external" },
      { href: "https://github.com/ShanmukhUpad/Code-Atlas", label: "GitHub", icon: "github" },
    ],
  },
  {
    title: "Off the Clock: Standalone VR Game",
    kind: "VR game",
    period: "Apr 2026 – May 2026",
    year: "2026",
    description: [
      "Built VR combat for sword fighting, laser guns, and mech flight in Unity XR, using sphere-cast sweeps so fast swings register reliably (VR course project)",
      "Held Meta Quest 3 builds to a 90 FPS target with an in-headset profiling overlay for frame time, draw calls, and memory",
      "Fixed laser effects missing in the headset by replacing shaders that lacked single-pass stereo support",
    ],
    tools: ["C#", "Unity XR", "OpenXR", "Meta Quest 3"],
  },
  {
    title: "MAS Sycophancy: Hierarchical Multi-Agent LLM Failure",
    kind: "LLM research",
    period: "Mar 2026 – May 2026",
    year: "2026",
    description: [
      "Showed one injected false claim cascades to 100% of agents in hierarchical LLM agentic workflows by turn 3",
      "Measured the failure without an LLM judge using stance flips, planning errors, and deference language",
      "Found anti-sycophancy prompting fails to prevent collapse, and co-authored an ACL-format paper on the “Yes-Man” failure mode",
    ],
    tools: ["Python", "Concordia", "Vertex AI"],
    links: [
      { href: "/MAS-Sycophancy.pdf", label: "Paper", download: true },
      { href: "https://github.com/VelupallyG/mas-sycophancy", label: "GitHub", icon: "github" },
    ],
  },
  {
    title: "Spatial Autocorrelation of AI Data Centers",
    kind: "Spatial statistics",
    period: "Mar 2026 – May 2026",
    year: "2026",
    description: [
      "Showed 5 significant data center impact effects vanish under a spatial-lag model vs. OLS with state fixed effects across U.S. counties",
      "Surfaced a Northern Virginia electricity-price hot spot invisible to national statistics with bivariate Moran's I and LISA",
      "Fused 12 datasets (data center sites, home values, utility prices, drought, air quality) into a Python spatial-regression pipeline",
    ],
    tools: ["Python", "GeoPandas", "libpysal", "esda", "spreg"],
    links: [
      {
        href: "https://drive.google.com/file/d/1AqqyYQIkKm83-Xw9wflU3zjfdRdfiHaK/view?usp=sharing",
        label: "View analysis",
        icon: "external",
      },
    ],
  },
  {
    title: "Urban AR GIS: Hand-Tracked 3D City Viewer",
    kind: "AR & graphics",
    period: "Mar 2026",
    year: "2026",
    description: [
      "Built a gesture-controlled 3D city viewer with MediaPipe hand tracking (clench to zoom, point to pan, grab to move buildings)",
      "Kept real-time rendering smooth by running hand tracking on a separate thread from the ModernGL renderer",
      "Generated 3D cities from OpenStreetMap footprints projected with pyproj, with GLSL lighting and haze over satellite imagery",
    ],
    tools: ["Python", "MediaPipe", "OpenCV", "ModernGL", "GLSL", "pyproj", "Shapely"],
    links: [{ href: "https://github.com/ShanmukhUpad/urban-ar-gis", label: "GitHub", icon: "github" }],
  },
  {
    title: "PlantRoute",
    kind: "Hackathon",
    period: "Feb 2026 – Mar 2026",
    year: "2026",
    description: [
      "Built an XGBoost model at HackIllinois that generates personalized low-carbon travel itineraries, balancing trip preferences with emissions",
      "Integrated Google Maps, Supermemory, and Gemini APIs with a Leaflet globe visualization",
    ],
    tools: ["Next.js", "TypeScript", "XGBoost", "Prisma ORM", "Leaflet", "Gemini API"],
    links: [
      { href: "https://tinyurl.com/44zy4ujm", label: "Demo", icon: "external" },
      { href: "https://github.com/groversomanshi/PlantRoute", label: "GitHub", icon: "github" },
    ],
  },
  {
    title: "Walkability and Urban Form in Chicago",
    kind: "Spatial analysis",
    period: "Oct 2025 – Apr 2026",
    year: "2025",
    description: [
      "Added an EPA-derived walkability measure to ChiVes, a geospatial analytics platform for the Chicago metro area",
      "Modeled walkability from urban form with an R regression (R² = 0.85)",
      "Showed mixed land use and street connectivity, not population density, drive walkability via Moran's I cluster mapping, and presented at the UIUC Undergraduate Research Symposium",
    ],
    tools: ["R", "sf", "Spatial analysis", "ChiVes"],
    links: [{ href: "https://shanmukhupad.github.io/chicago-walkability/", label: "Website", icon: "external" }],
  },
  {
    title: "Media Review",
    kind: "Web app",
    period: "Sep 2025 – Dec 2025",
    year: "2025",
    description: [
      "Let users search, review, and track games, movies, and TV shows in one place by integrating the IGDB, Twitch, and IMDb APIs",
      "Linked Steam, PlayStation, and Xbox accounts through OAuth so game playtime updates live on a user's profile",
      "Built the PostgreSQL backend for reviews, lists, favorites, friends, and progress tracking as the main backend developer on a team of 4",
    ],
    tools: ["TypeScript", "Next.js", "PostgreSQL", "OAuth", "REST APIs"],
    links: [{ href: "https://github.com/CS222-UIUC/fa25-fa25-team001", label: "GitHub", icon: "github" }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="theme-dark section-gap">
      <div className="frame">
        <div className="mb-12 md:mb-16 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Projects
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="max-w-[46ch] text-ink-soft">
            Eleven builds from the last two years. Open any row for what it does and what it measured.
          </p>
        </div>

        <div className="ledger">
          {PROJECTS.map((p, i) => (
            <details
              key={p.title}
              className="ledger-row"
              open={i === 0}
              data-reveal
              style={{ "--i": Math.min(i, 6) } as React.CSSProperties}
            >
              <summary className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-4 md:grid-cols-12 md:py-5">
                <span className="font-display font-semibold text-xl md:col-span-7 md:text-2xl leading-tight tracking-tight">
                  {p.title}
                </span>
                <span className="hidden md:block md:col-span-3 text-base text-ink-soft">{p.kind}</span>
                <span className="flex items-baseline justify-end gap-5 md:col-span-2">
                  <span className="tabular text-base text-ink-soft">{p.year}</span>
                  <span aria-hidden className="ledger-toggle inline-block w-4 text-center text-2xl leading-none text-accent">
                    +
                  </span>
                </span>
                <span className="col-span-2 text-base text-ink-soft md:hidden">{p.kind}</span>
              </summary>

              <div className="grid gap-6 pb-10 pt-2 md:grid-cols-12 md:gap-8">
                <ul className="md:col-span-7 flex flex-col gap-2.5 list-disc pl-5 marker:text-accent">
                  {p.description.map((d) => (
                    <li key={d} className="pl-1">
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="md:col-span-5 flex flex-col gap-3 text-base">
                  <p className="tabular text-ink-soft">{p.period}</p>
                  <p className="text-ink-soft">{p.tools.join(", ")}</p>
                  <ResourceLinks links={p.links} />
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
