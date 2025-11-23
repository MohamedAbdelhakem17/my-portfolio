export type LinkItem = {
  href: string;
  label: string;
};

const NAVIGATION_LINKS: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export default NAVIGATION_LINKS;
