const SKILL_GROUPS = [
  {
    category: "Computer vision",
    skills: [
      "Visual odometry", "Multi-view geometry", "Camera calibration", "Semantic segmentation",
      "Uncertainty estimation", "Landmark tracking", "Trajectory evaluation (ATE / RPE)",
    ],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "C++", "C", "R", "JavaScript", "C#", "Java", "SQL", "HTML/CSS"],
  },
  {
    category: "GIS",
    skills: [
      "ArcGIS Pro", "ArcGIS Online", "ArcGIS Field Maps", "ArcPy", "Mapbox GL", "Leaflet", "sf (R)",
      "GeoPandas", "Shapely", "pyproj", "PySAL", "LiDAR", "DEMs", "Georeferencing",
    ],
  },
  {
    category: "ML & data",
    skills: [
      "PyTorch", "torchvision", "Eigen", "TensorFlow", "Scikit-learn", "XGBoost", "NumPy",
      "ESDA / libpysal", "Matplotlib", "Seaborn",
    ],
  },
  {
    category: "Frameworks & tools",
    skills: [
      "React", "Next.js", "Node.js", "Express", "Prisma ORM", "Streamlit", "OpenCV", "MediaPipe", "Pandas",
      "ModernGL / GLSL", "Tailwind CSS", "Git", "Docker", "Linux", "Google Cloud", "Firestore", "MongoDB",
      "Jupyter", "Unity XR", "Android", "Vercel", "LaTeX",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="frame">
        <h2 data-reveal className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12 md:mb-16">
          Skills
        </h2>

        <dl className="flex flex-col gap-10 md:gap-12">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="grid gap-2 md:grid-cols-12 md:gap-8"
            >
              <dt className="md:col-span-4 lg:col-span-3 font-display font-semibold text-2xl leading-tight">
                {group.category}
              </dt>
              <dd className="md:col-span-8 lg:col-span-9 text-lg leading-relaxed max-w-[64ch]">
                {group.skills.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
