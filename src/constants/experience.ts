import { Code, Server, Database, Wrench, Briefcase } from "lucide-react"

export interface ExperienceProject {
  name: string
  description: string[]
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  type: string
  description?: string[]
  projects?: ExperienceProject[]
  logo: string
}

export const sectionConfig = {
  id: "experience",
  className: "pb-24 space-y-6 scroll-mt-24",
  title: {
    icon: Briefcase,
    text: "Experience & Skills",
  },
}

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 70 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 50 },
    ],
  },
  {
    title: "System Design",
    icon: Server,
    skills: [
      { name: "OOPS(Java)", level: 80 },
      { name: "DBMS", level: 75 },
      { name: "Design Patterns", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Database,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Unit Testing", level: 85 },
      { name: "Spring Boot", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    title: "Certifications & Problem Solving",
    icon: Wrench,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Google Digital Leader", level: 90 },
    ],
  },
]

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Grid Dynamics",
    period: "Sept 2023 - Present",
    type: "Full-time",
    logo: "/images/grid-dynamics.png",
    projects: [
      {
        name: "Ford Motor Company — Platform Engineering Team",
        description: [
          "Led frontend development for a self-service CI/CD platform, simplifying cloud and deployment workflows for 200+ developers through intuitive dashboards.",
          "Designed scalable backend APIs integrating enterprise DevOps tools, deployment pipelines, and infrastructure services.",
          "Built reusable React components and scalable fullstack modules, reducing development effort by 30% and improving feature delivery speed.",
          "Collaborated with platform engineering teams to improve developer onboarding, automation, and platform usability.",
        ],
      },
      {
        name: "Mars Petcare — Care Development",
        description: [
          "Developed backend workflows and RESTful APIs for a Campaigns Manager platform managing 12+ healthcare SDKs, including dog poop scan and tooth scan features.",
          "Automated SDK build pipelines and JavaScript bundle generation, improving release efficiency and maintainability.",
          "Engineered reusable React and Ant Design components, improving development efficiency by 33% and reducing rendering time by 22%.",
          "Achieved 83%+ test coverage using Vitest, reducing regression issues by 35%.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Flyzy",
    period: "Jun 2023 - Aug 2023",
    type: "Internship",
    logo: "/images/flyzy.png",
    description: [
      "Integrated external APIs with MongoDB: Efficiently connected external APIs to MongoDB, optimizing data fetching and management processes",
      "Designed and implemented core application logic, database management, and API integrations to enhance back-end performance and streamline data handling",
      "Optimized database queries and indexing to improve data retrieval speed and reduce latency in API responses, ensuring a seamless user experience",
    ],
  },
]
