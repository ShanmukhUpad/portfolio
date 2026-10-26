import Link from "next/link";
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

const linkClass = "link inline-flex items-center gap-1.5 text-base font-medium text-accent";

/** Row of labelled resource links (repos, papers, notebooks, live sites). */
export function ResourceLinks({ links }: { links?: ResourceLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => {
        const Icon = iconFor(link);
        const content = (
          <>
            <Icon size={15} />
            {link.label}
          </>
        );

        // Internal files go through next/link so the deploy basePath is prefixed
        return (
          <li key={link.href}>
            {link.href.startsWith("/") ? (
              <Link href={link.href} download={link.download || undefined} className={linkClass}>
                {content}
              </Link>
            ) : (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
