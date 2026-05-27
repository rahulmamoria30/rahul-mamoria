"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Quote } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { MotionDiv } from "@/components/ui/motion-div"
import { sectionConfig, Recommendation } from "@/constants/recommendations"

export function Recommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/recommendations")
      .then((res) => res.json())
      .then((data) => setRecommendations(data.recommendations))
      .catch(() => setRecommendations([]))
      .finally(() => setLoading(false))
  }, [])
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

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/50 bg-card/30 p-4 sm:p-6 md:p-8 animate-pulse"
            >
              <div className="space-y-3">
                <div className="h-3 w-full bg-muted/30 rounded" />
                <div className="h-3 w-5/6 bg-muted/30 rounded" />
                <div className="h-3 w-4/6 bg-muted/20 rounded" />
              </div>
              <div className="flex items-center gap-3 mt-4 pt-2 border-t border-border/30">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-muted/30" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 w-24 bg-muted/30 rounded" />
                  <div className="h-2.5 w-36 bg-muted/20 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <MotionDiv variant="container" className="grid gap-6 sm:grid-cols-2">
          {recommendations.map((rec: Recommendation, index: number) => (
            <MotionDiv
              key={index}
              variant="card"
              className="relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/10" />

              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground/90 leading-relaxed italic">
                  &ldquo;{rec.text}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-2 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    {rec.avatar ? (
                      <img
                        src={rec.avatar}
                        alt={rec.name}
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
                        {rec.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-foreground truncate">
                        {rec.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                        {rec.role} · {rec.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:ml-auto pl-11 sm:pl-0">
                    <span className="text-[10px] sm:text-xs text-muted-foreground/60">
                      {rec.date}
                    </span>
                    {rec.linkedinUrl && (
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground/60 hover:text-primary transition-colors"
                      >
                        LinkedIn
                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      )}
    </MotionDiv>
  )
}
