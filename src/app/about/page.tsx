"use client"

import {
  User,
  GraduationCap,
  Heart,
  Image as ImageIcon,
  ArrowLeft,
  BookOpen,
  MapPin,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { MotionDiv } from "@/components/ui/motion-div"
import { AppLink } from "@/components/ui/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  education,
  hobbies,
  galleryImages,
  aboutContent,
  books,
} from "@/constants/about"
import { useState } from "react"

export default function About() {
  const [showAllImages, setShowAllImages] = useState(false)
  const displayedImages = showAllImages
    ? galleryImages
    : galleryImages.slice(0, 4)

  return (
    <main className="min-h-screen pt-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Back Navigation */}
        <div className="mb-8">
          <AppLink
            href="/#home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </AppLink>
        </div>

        <MotionDiv variant="item">
          <SectionTitle icon={User} title="About Me" />
        </MotionDiv>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image and Basic Info */}
          <MotionDiv
            variant="item"
            className="flex flex-col items-center lg:w-1/3"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 relative rounded-2xl overflow-hidden border border-border">
              <Image
                height={400}
                width={400}
                src="/profile.png"
                alt={aboutContent.name}
                className="object-cover w-full h-full"
              />
            </div>
          </MotionDiv>

          {/* Right Column - About Content */}
          <MotionDiv variant="item" className="lg:w-2/3">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">
                {aboutContent.journey.title}
              </h3>
              <div className="space-y-4">
                {aboutContent.journey.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed break-words"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Location Journey */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={MapPin} title="My Journey" />
          <div className="flex flex-wrap items-center gap-3">
            {[
              { city: "Jaipur", label: "Born & Raised", emoji: "🏠" },
              { city: "Sikar", label: "JEE Prep · 2016", emoji: "📖" },
              { city: "NIT Calicut", label: "B.Tech · 2019", emoji: "🎓" },
              {
                city: "Hyderabad",
                label: "Working · 2023",
                emoji: "💼",
                current: true,
              },
            ].map((stop, index, arr) => (
              <div key={stop.city} className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-3 transition-all duration-300 ${
                    stop.current
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-card/40 border border-border/50 hover:border-primary/20"
                  }`}
                >
                  <span className="text-lg">{stop.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">
                      {stop.city}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[11px] text-muted-foreground">
                        {stop.label}
                      </p>
                      {stop.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <span className="text-muted-foreground/30 text-sm font-medium">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Education Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={GraduationCap} title="Education" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <MotionDiv
                key={index}
                variant="item"
                className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/70">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.field}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {edu.school}
                </p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Hobbies Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={Heart} title="Hobbies & Interests" />
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <MotionDiv
                key={index}
                variant="item"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:bg-card/50 transition-all duration-300 cursor-default"
              >
                <span className="text-lg">{hobby.emoji}</span>
                <span className="text-sm font-medium text-foreground">
                  {hobby.title}
                </span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Books Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={BookOpen} title="Books I Love" />

          {/* Favorite Books */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Favorites
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {books.favorites.map((book, index) => (
                <MotionDiv
                  key={index}
                  variant="item"
                  className="flex gap-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-border/30 shadow-md">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={80}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-base font-semibold text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-xs font-medium text-primary/70 mt-0.5">
                      by {book.author}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Other Books Read */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Also Read
            </p>
            <div className="flex flex-wrap gap-2">
              {books.read.map((book, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-card/50 border border-border/50 text-muted-foreground"
                >
                  <BookOpen className="w-3 h-3 text-primary/60" />
                  {book.title}
                  <span className="text-muted-foreground/50">
                    — {book.author}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Gallery Section */}
        <MotionDiv variant="item" className="space-y-6">
          <SectionTitle icon={ImageIcon} title="Gallery" />
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayedImages.map((image, index) => (
                <MotionDiv
                  key={index}
                  variant="card"
                  className="aspect-square relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </MotionDiv>
              ))}
            </div>

            {galleryImages.length > 4 && (
              <div className="flex justify-start">
                <button
                  onClick={() => setShowAllImages(!showAllImages)}
                  className="bg-transparent rounded-lg px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {showAllImages ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </MotionDiv>
      </motion.div>
    </main>
  )
}
