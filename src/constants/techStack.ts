import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiRedis,
  SiJest,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiGraphql,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { IconType } from "react-icons"

export interface TechItem {
  name: string
  icon: IconType
  color: string
}

export interface TechCategory {
  title: string
  items: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
]
