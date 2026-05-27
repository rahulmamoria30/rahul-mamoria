"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import {
  sectionConfig,
  skillCategories,
  experiences,
  ExperienceItem,
  ExperienceProject,
} from "@/constants/experience"
import { MotionDiv } from "@/components/ui/motion-div"

export function Experience() {
  return (
    <MotionDiv
      variant="container"
      id={sectionConfig.id}
      className="pb-24 space-y-10 scroll-mt-24"
    >
      <MotionDiv variant="item">
        <SectionTitle
          icon={sectionConfig.title.icon}
          title={sectionConfig.title.text}
        />
      </MotionDiv>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/40 hidden sm:block" />

        <MotionDiv variant="container" className="flex flex-col gap-8">
          {experiences.map((exp: ExperienceItem, index: number) => (
            <MotionDiv
              key={index}
              variant="card"
              className="relative flex gap-5 sm:gap-8"
            >
              {/* Timeline dot & logo */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                <div className="relative w-10 h-10 rounded-xl bg-card/60 border border-border/50 overflow-hidden z-10">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 group rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
                {/* Header bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-5 py-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    {/* Mobile logo */}
                    <div className="relative w-8 h-8 rounded-lg bg-card/60 border border-border/50 overflow-hidden sm:hidden flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-card/60 border border-border/40 text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4">
                  {exp.projects ? (
                    <div className="space-y-0">
                      {exp.projects.map(
                        (project: ExperienceProject, pIndex: number) => (
                          <div
                            key={pIndex}
                            className={
                              pIndex > 0
                                ? "pt-4 mt-4 border-t border-border/20"
                                : ""
                            }
                          >
                            <MotionDiv
                              variant="fade"
                              transition={{ delay: 0.1 * pIndex }}
                              className="mb-3"
                            >
                              <h5 className="text-sm font-semibold text-foreground/85 flex items-center gap-2">
                                <span className="h-1 w-4 rounded-full bg-primary/40" />
                                {project.name}
                              </h5>
                            </MotionDiv>
                            <ul className="space-y-2 pl-6">
                              {project.description.map(
                                (item: string, i: number) => (
                                  <MotionDiv
                                    key={i}
                                    variant="fade"
                                    transition={{
                                      delay: 0.08 * (pIndex + i + 1),
                                    }}
                                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                                  >
                                    <span className="text-primary/40 mt-[3px] text-[10px] flex-shrink-0">
                                      ●
                                    </span>
                                    <span>{item}</span>
                                  </MotionDiv>
                                )
                              )}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.description?.map((item: string, i: number) => (
                        <MotionDiv
                          key={i}
                          variant="fade"
                          transition={{ delay: 0.08 * i }}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary/40 mt-[3px] text-[10px] flex-shrink-0">
                            ●
                          </span>
                          <span>{item}</span>
                        </MotionDiv>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Technical Skills
        </p>
        <MotionDiv
          variant="container"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skillCategories.map((category) => (
            <MotionDiv
              key={category.title}
              variant="card"
              whileHover="hover"
              className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 p-5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-card/60 border border-border/50 text-primary">
                  <category.icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground/90">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3.5">
                {category.skills.map((skill, skillIndex) => (
                  <MotionDiv
                    key={skill.name}
                    variant="fade"
                    transition={{ delay: 0.08 * skillIndex }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/75">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1 bg-border/20 rounded-full overflow-hidden">
                      <Progress
                        value={skill.level}
                        max={100}
                        className="h-full bg-border/20"
                      />
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}
