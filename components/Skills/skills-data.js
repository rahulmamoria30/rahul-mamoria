import {
  Code2,
  Palette,
  Lightbulb,
  Rocket,
  Database,
  Globe,
} from "lucide-react"; // Import icons from Lucide or any other icon library

const skillsData = [
  {
    name: "Programming Languages",
    icon: <Globe className="h-8 w-8" />,
    description: "Java, JavaScript, C/C++",
  },
  {
    name: "Frontend Developement",
    icon: <Code2 className="h-8 w-8" />,
    description: "HTML, CSS, JavaScript, React, Next.js",
  },
  {
    name: "Backend Developement",
    icon: <Code2 className="h-8 w-8" />,
    description: "Nodejs, Express, Java, Spring Boot",
  },
  {
    name: "Database Management",
    icon: <Database className="h-8 w-8" />,
    description: "SQL, MongoDB",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8" />,
    description: "Figma",
  },
  {
    name: "Problem Solving",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Solved 600+ DSA Questions",
  },
 
 
  
];

export default skillsData;
