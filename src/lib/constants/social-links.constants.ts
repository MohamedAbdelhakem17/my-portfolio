import { Facebook, Github, Linkedin, MessageCircleMore } from "lucide-react";

// Type
export type SocialLink = {
  label: "Linkedin" | "Facebook" | "Github" | "Whatsapp";
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
    link: "https://www.linkedin.com/in/mohamedabdelhakem",
    Icon: Linkedin,
  },
  {
    label: "Whatsapp",
    link: "https://wa.me/?text=Hello%20Mohamed",
    Icon: MessageCircleMore,
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/mohamed.abdelhakem.9693/",
    Icon: Facebook,
  },
];

export default SOCIAL_LINKS;
