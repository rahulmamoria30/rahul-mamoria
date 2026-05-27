import { Code, Server, User, Code2, Cpu } from "lucide-react"

export const sectionConfig = {
  id: "home",
  className: "min-h-screen py-26 space-y-6 scroll-mt-24",
  title: {
    icon: User,
    text: "Software Engineer",
  },
  whatIDo: {
    icon: Cpu,
    text: "What I Do ... ?",
  },
  codingProfiles: {
    icon: Code2,
    text: "Coding Profiles",
  },
}

export const introduction = {
  greeting: "नमस्ते !",
  name: "I'm Rahul",
  role: "Software Engineer",
  summary: "I build products that people love to use.",
  description:
    "Fullstack engineer with expertise in React, Next.js, and Node.js — currently building self-service developer platforms at Grid Dynamics. Passionate about clean architecture, great UX, and shipping fast.",
}

export const skillCards = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Crafting responsive UIs with React, Next.js, and TypeScript.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building scalable APIs with Node.js, Python, and modern databases.",
  },
]

export const profileData = [
  {
    slug: "leetcode",
    url: "https://leetcode.com/u/rahul_rm__/",
    title: "LeetCode",
    imagePath: "/images/coding-profiles/leetcode.svg",
    apiUsername: "rahul_rm__",
  },
  {
    slug: "geeksforgeeks",
    url: "https://www.geeksforgeeks.org/user/rahulmamoria/",
    title: "GeeksforGeeks",
    imagePath: "/images/coding-profiles/gfg.png",
    apiUsername: "rahulmamoria",
  },
  {
    slug: "codechef",
    url: "https://www.codechef.com/users/rahulrm_903",
    title: "CodeChef",
    imagePath: "/images/coding-profiles/codechef.png",
    apiUsername: "rahulrm_903",
  },
  {
    slug: "codeforces",
    url: "https://codeforces.com/profile/rahul_rm__",
    title: "Codeforces",
    imagePath: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg",
    apiUsername: "rahul_rm__",
  },
]
