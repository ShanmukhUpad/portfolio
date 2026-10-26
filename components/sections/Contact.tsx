import { Github, Linkedin } from "@/components/ui/icons";

const EMAIL = "shanmukh.upad@gmail.com";

const SOCIAL = [
  { icon: Github, label: "GitHub", href: "https://github.com/ShanmukhUpad" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/Shanmukh-Upadhyayula" },
];

export function Contact() {
  return (
    <section id="contact" className="theme-dark flex flex-col lg:min-h-[86svh]">
      <div className="frame flex flex-1 flex-col pt-24 pb-10 md:pt-32">
        <h2 data-reveal className="max-w-[24ch] text-xl md:text-2xl leading-snug">
          Write to me about maps, cities, computer vision, or an internship.
        </h2>

        <a
          href={`mailto:${EMAIL}`}
          className="lines group mt-auto block pt-20 font-display font-semibold text-ink transition-colors duration-200 hover:text-accent"
          style={{ fontSize: "clamp(2.6rem, 8.2vw, 7.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
        >
          <span data-reveal className="block">
            <span className="block md:inline">shanmukh.upad@</span>
            <span className="block md:inline">gmail.com</span>
          </span>
        </a>

        <div className="mt-12 flex flex-col gap-3 text-base md:flex-row md:items-baseline md:justify-between">
          <p className="text-ink-soft">Urbana, Illinois</p>
          <ul className="flex gap-6">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-2 font-medium"
                >
                  <Icon size={16} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
