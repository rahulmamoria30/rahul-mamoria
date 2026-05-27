"use client"

import { Youtube, ExternalLink } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { vlogsData } from "@/constants/vlogs"
import { AppLink } from "@/components/ui/link"

export function Vlogs() {
  return (
    <section id="vlogs" className="pb-16 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <SectionTitle icon={Youtube} title="YouTube Vlogs" />
          <AppLink
            href={vlogsData.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            <ExternalLink className="w-3 h-3" />
            View Channel
          </AppLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {vlogsData.videos.map((video, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="px-3 sm:px-4 py-2.5 sm:py-3">
                <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {video.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-8 sm:mt-10 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 px-4 py-5 sm:p-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">
            Enjoy my content? Don&apos;t miss out on new vlogs.
          </p>
          <p className="text-xs text-muted-foreground/70 mb-4">
            Subscribe to my YouTube channel for travel, music, and more.
          </p>
          <AppLink
            href={`${vlogsData.channelUrl}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[#FF0000] text-white hover:bg-[#CC0000] transition-all duration-200"
          >
            <Youtube className="w-4 h-4" />
            Subscribe on YouTube
          </AppLink>
        </div>
      </div>
    </section>
  )
}
