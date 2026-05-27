"use client"

import { Vlogs } from "@/components/sections/Vlogs"
import { AppLink } from "@/components/ui/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function VlogsPage() {
  return (
    <main className="min-h-screen pt-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <AppLink
            href="/#home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </AppLink>
        </div>
        <Vlogs />
      </motion.div>
    </main>
  )
}
