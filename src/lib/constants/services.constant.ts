export type serviceItem = {
  title: string;
  description: string;
};

const SERVICES = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building modern web applications using Next.js, Node.js, and Express. Creating responsive, fast, and maintainable websites from scratch.",
  },
  {
    title: "WordPress Custom Development",
    description:
      "Developing custom WordPress themes and plugins using PHP and ACF. Tailoring WordPress sites to client needs with responsive design and optimized performance.",
  },
  {
    title: "UI/UX Design & Frontend Optimization",
    description:
      "Designing intuitive user interfaces and experiences. Optimizing React and Next.js frontend for speed, accessibility, and smooth interactions.",
  },
  {
    title: "API & Backend Development",
    description:
      "Building robust APIs with Node.js and Express, integrating databases, handling authentication, and deploying full-stack applications on VPS or cloud servers.",
  },
] as const;

export default SERVICES;
