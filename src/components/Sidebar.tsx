"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AppLink } from "@/components/ui/link"
import { usePathname } from "next/navigation"
import { socialLinks, externalLinks, profileData } from "@/constants/sidebar"

const fadeSlide = {
  initial: { opacity: 0, x: -8 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -8, transition: { duration: 0.15, ease: "easeIn" } },
}

const fadeScale = {
  initial: { opacity: 0, scale: 0.92 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.15, ease: "easeIn" },
  },
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className="hidden md:flex relative h-screen flex-col border-r border-border/50 bg-background/60 backdrop-blur-xl"
        style={{ overflow: "visible" }}
        animate={{ width: isCollapsed ? 72 : 280 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-7 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background shadow-sm hover:bg-accent hover:shadow-md transition-all duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isCollapsed ? (
              <motion.span
                key="open"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <PanelLeftOpen className="h-4 w-4 text-muted-foreground" />
              </motion.span>
            ) : (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <PanelLeftClose className="h-4 w-4 text-muted-foreground" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Profile Section */}
        <div className="relative px-4 pt-8 pb-6 overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/[0.07] to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center gap-3">
            {/* Avatar with status ring */}
            <div className="relative">
              <motion.div
                className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-[2px]"
                animate={{
                  width: isCollapsed ? 44 : 80,
                  height: isCollapsed ? 44 : 80,
                }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src={profileData.image}
                  alt={profileData.name}
                  width={76}
                  height={76}
                  className="rounded-full object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.jpg"
                  }}
                />
              </motion.div>
              {/* Status dot */}
              <motion.span
                className="absolute bottom-0 right-0 block rounded-full bg-emerald-500 ring-2 ring-background"
                animate={{
                  width: isCollapsed ? 10 : 14,
                  height: isCollapsed ? 10 : 14,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  key="profile-info"
                  className="text-center space-y-1.5 mt-1 overflow-hidden"
                  {...fadeScale}
                >
                  <h1 className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
                    {profileData.name}
                  </h1>
                  <p className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                    {profileData.role}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {profileData.status}
                  </span>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground/80 whitespace-nowrap">
                    <profileData.locationIcon className="w-3 h-3" />
                    <span>{profileData.location}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-border/60" />

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.p
                key="nav-label"
                className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap"
                {...fadeSlide}
              >
                Navigate
              </motion.p>
            )}
          </AnimatePresence>
          {externalLinks.map((link, index) => {
            const isActive = pathname === link.url
            const isExternal = !link.url.startsWith("/")

            return (
              <TooltipProvider key={index} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <AppLink
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      } ${isCollapsed ? "justify-center" : ""}`}
                    >
                      <link.icon
                        className={`h-[18px] w-[18px] flex-shrink-0 transition-colors duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      />
                      <AnimatePresence>
                        {!isCollapsed && (
                          <motion.span
                            key={`link-${index}`}
                            className="truncate whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{
                              opacity: 1,
                              width: "auto",
                              transition: {
                                duration: 0.25,
                                delay: 0.05 * index,
                              },
                            }}
                            exit={{
                              opacity: 0,
                              width: 0,
                              transition: { duration: 0.15 },
                            }}
                          >
                            {link.title}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </AppLink>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right" sideOffset={8}>
                      <p className="text-xs font-medium">{link.title}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-4 h-px bg-border/60" />

        {/* Social Links */}
        <div className="px-3 py-4 overflow-hidden">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.p
                key="connect-label"
                className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap"
                {...fadeSlide}
              >
                Connect
              </motion.p>
            )}
          </AnimatePresence>
          <motion.div
            className="flex items-center"
            animate={{
              flexDirection: isCollapsed ? "column" : "row",
              gap: isCollapsed ? 12 : 4,
              paddingLeft: isCollapsed ? 0 : 4,
              paddingRight: isCollapsed ? 0 : 4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <TooltipProvider delayDuration={0}>
              {socialLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <AppLink
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200"
                    >
                      <link.icon className="h-[18px] w-[18px]" />
                    </AppLink>
                  </TooltipTrigger>
                  <TooltipContent
                    side={isCollapsed ? "right" : "top"}
                    sideOffset={8}
                  >
                    <p className="text-xs font-medium">{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
