"use client"

import { Layers } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { MotionDiv } from "@/components/ui/motion-div"
import { techStack } from "@/constants/techStack"

export function TechStack() {
  return (
    <section className="py-16 sm:py-20">
      <MotionDiv variant="fade">
        <SectionTitle icon={Layers} title="Tech Stack" />
      </MotionDiv>

      <div className="mt-8 space-y-8">
        {techStack.map((category, catIdx) => (
          <MotionDiv
            key={category.title}
            variant="fade"
            transition={{ delay: catIdx * 0.1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {category.title}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.items.map((tech, idx) => (
                <MotionDiv
                  key={tech.name}
                  variant="fade"
                  transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                  className="group flex items-center gap-2 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 px-3 py-2 sm:px-4 sm:py-2.5 hover:border-primary/20 hover:bg-card/60 transition-all duration-200 cursor-default"
                >
                  <tech.icon
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                    {tech.name}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
