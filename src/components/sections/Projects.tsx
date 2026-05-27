"use client"

import { FolderGit2, Github, ExternalLink, ArrowRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { PROJECT_DATA } from "@/data/projects"
import { AppLink } from "@/components/ui/link"
import { MotionDiv } from "@/components/ui/motion-div"

export function Projects() {
  return (
    <MotionDiv
      variant="container"
      id="projects"
      className="space-y-10 scroll-mt-24"
    >
      <MotionDiv variant="item">
        <SectionTitle icon={FolderGit2} title="Projects" />
      </MotionDiv>

      <MotionDiv variant="container" className="flex flex-col gap-5">
        {PROJECT_DATA.map((project, index) => (
          <MotionDiv
            key={index}
            variant="card"
            className="group rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Left: Icon + Title (mobile) / Icon + Index (desktop) */}
              <div className="flex sm:flex-col items-center gap-3 sm:gap-2 px-4 sm:px-5 py-3 sm:py-5 sm:w-20 sm:border-r border-b sm:border-b-0 border-border/30 flex-shrink-0">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/60 border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                  <project.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-foreground/90 sm:hidden">
                  {project.project_name}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground/40 hidden sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Right: Content */}
              <div className="flex-1 px-4 sm:px-5 py-3 sm:py-5 space-y-3 sm:space-y-4">
                {/* Title Row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="hidden sm:block text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                    {project.project_name}
                  </h3>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <AppLink
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium rounded-lg bg-card/60 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
                    >
                      <Github className="w-3 h-3" />
                      Source
                    </AppLink>
                    {project.project_link && (
                      <AppLink
                        href={project.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/15 transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </AppLink>
                    )}
                    <AppLink
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </AppLink>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {project.project_detail[0]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.techstack.map((tech, i) => (
                    <MotionDiv
                      key={i}
                      variant="fade"
                      transition={{ delay: 0.05 * i }}
                      className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-card/60 border border-border/30 text-muted-foreground/80"
                    >
                      {tech}
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  )
}
