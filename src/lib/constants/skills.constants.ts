import { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export type SkillType = {
  name: string;
  icon: IconType;
};

const SKILLS: SkillType[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "WordPress", icon: FaWordpress },
];

export default SKILLS;
