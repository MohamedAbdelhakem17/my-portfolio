import { Facebook, Github, Linkedin } from "lucide-react";

// Type
export type SocialLink = {
  label: "Linkedin" | "Facebook" | "Github";
  link: string;
  Icon: typeof Linkedin;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/MohamedAbdelhakem17",
    Icon: Github,
  },
  {
    label: "Linkedin",
    link: "www.linkedin.com/in/mohamedabdelhakem",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/mohamed.abdelhakem.9693/",
    Icon: Facebook,
  },
];

export default SOCIAL_LINKS;
