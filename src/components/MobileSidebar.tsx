import Image from "next/image"
import { AppLink } from "@/components/ui/link"
import { externalLinks, socialLinks, profileData } from "@/constants/sidebar"
import { Dispatch, SetStateAction } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileSidebarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  pathname: string
}

export const MobileSidebar = ({ setIsOpen, pathname }: MobileSidebarProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Gradient accent */}
      <div className="relative px-6 pt-8 pb-6">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/[0.07] to-transparent pointer-events-none" />

        <div className="relative flex flex-col items-center gap-3">
          {/* Avatar with status ring */}
          <div className="relative">
            <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-[2px] w-16 h-16">
              <Image
                src={profileData.image}
                alt={profileData.name}
                width={60}
                height={60}
                className="rounded-full object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.jpg"
                }}
              />
            </div>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background" />
          </div>

          <div className="text-center space-y-1.5">
            <h1 className="text-base font-semibold tracking-tight text-foreground">
              {profileData.name}
            </h1>
            <p className="text-xs font-medium text-muted-foreground">
              {profileData.role}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {profileData.status}
            </span>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground/80">
              <profileData.locationIcon className="w-3 h-3" />
              <span>{profileData.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-border/60" />

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
          Navigate
        </p>
        {externalLinks.map((link, idx) => {
          const isActive = pathname === link.url
          const isExternal = link.url.startsWith("http")

          return (
            <AppLink
              key={idx}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <link.icon
                className={`h-[18px] w-[18px] flex-shrink-0 transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              <span className="truncate">{link.title}</span>
            </AppLink>
          )
        })}
      </nav>

      {/* Divider */}
      <div className="mx-6 h-px bg-border/60" />

      {/* Social Links */}
      <div className="px-4 py-4">
        <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
          Connect
        </p>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <AppLink
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200"
              >
                <link.icon className="h-[18px] w-[18px]" />
              </AppLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
