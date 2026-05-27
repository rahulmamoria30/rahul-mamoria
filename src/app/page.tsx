"use client"

import { Home } from "@/components/sections/Home"
import { TechStack } from "@/components/sections/TechStack"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Certificates } from "@/components/sections/Certificates"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <main className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Home />
      <TechStack />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}
