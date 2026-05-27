"use client"

import { useParams } from "next/navigation"
import { PROJECT_DATA } from "@/data/projects"
import ReactMarkdown from "react-markdown"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { AppLink } from "@/components/ui/link"
import { ComponentPropsWithoutRef } from "react"
import Image from "next/image"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export default function ProjectPage() {
  const params = useParams()
  const project = PROJECT_DATA.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-semibold text-foreground">
            Project Not Found
          </h1>
          <AppLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Home
          </AppLink>
        </div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[340px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.project_name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />

          {/* Back button overlay */}
          <div className="absolute top-14 left-4 sm:top-6 sm:left-6">
            <AppLink
              href="/#projects"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-background/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            >
              <ArrowLeft className="w-3 h-3" />
              Projects
            </AppLink>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-4 sm:pb-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 flex-shrink-0">
                  <project.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {project.project_name}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
          {/* Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/30">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.techstack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-card/50 border border-border/40 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <AppLink
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                Source Code
              </AppLink>
              {project.project_link ? (
                <AppLink
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </AppLink>
              ) : (
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <button
                      disabled
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-muted text-muted-foreground/50 cursor-not-allowed"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Live demo not available</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Markdown Content */}
          <article className="space-y-6">
            <ReactMarkdown
              components={{
                h1: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"h1">) => (
                  <h1
                    className="text-2xl font-bold text-foreground tracking-tight"
                    {...props}
                  >
                    {children}
                  </h1>
                ),
                h2: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"h2">) => (
                  <h2
                    className="text-lg font-semibold text-foreground mt-8 mb-3 flex items-center gap-2"
                    {...props}
                  >
                    <span className="h-1 w-4 rounded-full bg-primary/40" />
                    {children}
                  </h2>
                ),
                h3: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"h3">) => (
                  <h3
                    className="text-base font-semibold text-foreground/90 mt-5 mb-2"
                    {...props}
                  >
                    {children}
                  </h3>
                ),
                p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    {...props}
                  >
                    {children}
                  </p>
                ),
                ul: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"ul">) => (
                  <ul className="space-y-2 my-3" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"ol">) => (
                  <ol className="space-y-2 my-3 list-decimal pl-4" {...props}>
                    {children}
                  </ol>
                ),
                li: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"li">) => (
                  <li
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    {...props}
                  >
                    <span className="text-primary/40 mt-[3px] text-[10px] flex-shrink-0">
                      ●
                    </span>
                    <span>{children}</span>
                  </li>
                ),
                strong: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"strong">) => (
                  <strong
                    className="text-foreground/90 font-semibold"
                    {...props}
                  >
                    {children}
                  </strong>
                ),
                a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
                  <a
                    className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                code: ({
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"code">) => (
                  <code
                    className="px-1.5 py-0.5 text-[12px] font-mono bg-card/60 border border-border/40 text-foreground/80 rounded-md"
                    {...props}
                  >
                    {children}
                  </code>
                ),
                hr: () => <div className="h-px bg-border/30 my-6" />,
              }}
            >
              {project.description}
            </ReactMarkdown>
          </article>

          {/* Bottom Nav */}
          <div className="pt-6 border-t border-border/30">
            <AppLink
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to all projects
            </AppLink>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
