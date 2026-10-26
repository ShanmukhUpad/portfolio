import { Download, ExternalLink, Github } from "@/components/ui/icons";

export interface ResourceLink {
  href: string;
  label: string;
  /** Adds the `download` attribute (internal links only). */
  download?: boolean;
  icon?: "download" | "external" | "github";
}

const ICONS = {
  download: Download,
  external: ExternalLink,
  github: Github,
};

function iconFor(link: ResourceLink) {
  if (link.icon) return ICONS[link.icon];
  if (link.download) return ICONS.download;
  return ICONS.external;
}

/** Row of labelled resource links (repos, papers, notebooks, live sites). */
export function ResourceLinks({ links }: { links?: ResourceLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => {
        const Icon = iconFor(link);
        const isInternal = link.href.startsWith("/");
        return (
          <li key={link.href}>
            <a
              href={link.href}
              {...(isInternal
                ? { download: link.download || undefined }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="link inline-flex items-center gap-1.5 text-base font-medium text-accent"
            >
              <Icon size={15} />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
