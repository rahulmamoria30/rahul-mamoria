"use client"

import { Code2, ArrowDown, Download } from "lucide-react"
import { CodingProfile } from "@/components/ui/coding-profile"
import { profileData, introduction } from "@/constants/home"
import { MotionDiv } from "@/components/ui/motion-div"

// Calculate years of experience from 4 Sept 2023 to today
function getYearsOfExperience() {
  const start = new Date(2023, 8, 4)
  const now = new Date()
  const diff = now.getTime() - start.getTime()
  const years = diff / (1000 * 60 * 60 * 24 * 365.25)
  return years.toFixed(1)
}

const stats = [
  { value: `${getYearsOfExperience()}+`, label: "Years Experience" },
  { value: "6", label: "Months SDE Internship" },
  { value: "3", label: "Months Backend Internship" },
]

export function Home() {
  return (
    <MotionDiv
      variant="container"
      id="home"
      className="min-h-screen flex flex-col justify-center py-20 sm:py-24"
    >
      {/* Hero Section */}
      <div className="space-y-12">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Greeting Badge */}
          <MotionDiv variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {introduction.greeting} Welcome to my corner of the web
            </span>
          </MotionDiv>

          {/* Name & Role */}
          <MotionDiv variant="slide" className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              {introduction.name}
              <span className="text-primary">.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground/70">
              {introduction.role}
            </p>
          </MotionDiv>

          {/* Summary */}
          <MotionDiv variant="fade" className="max-w-xl space-y-3">
            <p className="text-lg sm:text-xl font-medium text-foreground/80 leading-snug">
              {introduction.summary}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/70 leading-relaxed">
              {introduction.description}
            </p>
          </MotionDiv>

          {/* CTA Row */}
          <MotionDiv
            variant="fade"
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Get in touch
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </MotionDiv>
        </div>

        {/* Stats Strip */}
        <MotionDiv variant="item">
          <div className="flex flex-wrap gap-px rounded-xl overflow-hidden border border-border/50">
            {stats.map((stat, idx) => (
              <MotionDiv
                key={stat.label}
                variant="fade"
                transition={{ delay: 0.15 * idx }}
                className="flex-1 min-w-[140px] bg-card/30 backdrop-blur-sm px-5 py-5 text-center hover:bg-card/50 transition-colors duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Coding Profiles */}
        <MotionDiv variant="item" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-card/50 border border-border/50">
              <Code2 className="w-4 h-4 text-primary/80" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Competitive Programming
            </p>
          </div>
          <MotionDiv variant="container" className="flex flex-wrap gap-3">
            {profileData.map((profile, index) => (
              <MotionDiv key={index} variant="card" whileHover="hover">
                <CodingProfile
                  slug={profile.slug}
                  url={profile.url}
                  title={profile.title}
                  imagePath={profile.imagePath}
                />
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}
