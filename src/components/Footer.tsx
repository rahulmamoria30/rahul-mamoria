"use client"
import { AppLink } from "@/components/ui/link"
import { socialLinks } from "@/constants/sidebar"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-8 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Rahul Mamoria
          </p>
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-8 w-8 rounded-lg text-muted-foreground/50 hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
