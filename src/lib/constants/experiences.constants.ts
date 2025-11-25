export type ExperienceType = {
  title: string;
  duration: string;
  company: {
    name: string;
    link: string;
  };
};

const EXPERIENCE: ExperienceType[] = [
  {
    title: "Web Developer",
    duration: "Jan 2025 - Present",
    company: { name: "Dottopia", link: "https://dottopia.com" },
  },
  {
    title: "Freelance Web Developer",
    duration: "Jan 2024 - Present",
    company: {
      name: "Self-employed ",
      link: "https://linkedin.com/in/mohamedabdelhakem",
    },
  },
  {
    title: "IT Specialist",
    duration: "Mar 2024 - Dec 2024",
    company: { name: "RemasLand", link: "https://remaslandeg.com/" },
  },
];

export default EXPERIENCE;
