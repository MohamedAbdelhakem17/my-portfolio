import { Github, MoveUpRight, type LucideIcon } from "lucide-react";

export type ProjectType = {
  type: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  links: {
    name: string;
    link: string;
    icon: LucideIcon;
  }[];
};

const PROJECTS: ProjectType[] = [
  {
    type: "Full Stack",
    name: "Goocast Booking System",
    description:
      "Goocast Booking System is a smart, user-friendly booking platform that allows clients to reserve studios and services in seconds, with instant availability display and a seamless experience from start to finish. Built with modern technologies for high performance, it supports flexible pricing, accurate scheduling, and advanced add-ons for a professional and versatile booking experience.",
    stack: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "React",
      "React Router DOM",
      "Node.js",
      "Express",
      "Mongoose",
    ],
    image: "/images/goocast.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/MohamedAbdelhakem17/goo-cast-reservation-system",
        icon: Github,
      },
      { name: "Live", link: "https://booking.goocast.net/", icon: MoveUpRight },
    ],
  },
  {
    type: "Full Stack",
    name: "Scarabio Analyze Tool",
    description:
      "Scarabio On-Page Audit Tool quickly analyzes your web pages from an Excel or CSV upload, checking keywords, schema, headings, and other SEO factors to help improve search visibility.",
    stack: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express",
      "Mongoose",
    ],
    image: "/images/scarabio.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/MohamedAbdelhakem17/scarbio",
        icon: Github,
      },
      { name: "Live", link: "https://scarabio.com", icon: MoveUpRight },
    ],
  },
  {
    type: "WordPress Website",
    name: "Yes Elite Clinics Website",
    description:
      "The official website of Yes Elite Clinics — a cosmetic and plastic surgery clinic offering body contouring, dermatology, and aesthetic services. The site showcases services, branches, contact information, and online booking features, serving as a comprehensive digital presence for the clinic in Egypt.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    image: "/images/yeseliteclinicsbook.png",
    links: [
      {
        name: "Live",
        link: "https://yeseliteclinicsbook.com",
        icon: MoveUpRight,
      },
    ],
  },
  {
    type: "Front End",
    name: "Alufq Alwaed Website",
    description:
      "The official website of Alufq Alwaed — a professional platform showcasing services, news, and resources. Built with modern front-end technologies for responsive and interactive user experience.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/alufqalwaed.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/MohamedAbdelhakem17/Alufq-Alwaed",
        icon: Github,
      },
      {
        name: "Live",
        link: "https://www.alufqalwaed.com/",
        icon: MoveUpRight,
      },
    ],
  },
];

export default PROJECTS;
