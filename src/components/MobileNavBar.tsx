"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Home, Briefcase, FolderGit2, Mail, Menu, Youtube } from "lucide-react"
import { useRouter } from "next/navigation"
import { AppLink } from "@/components/ui/link"
import { MobileSidebar } from "@/components/MobileSidebar"

const navItems = [
  { href: "/#home", icon: Home, label: "Home" },
  { href: "/#experience", icon: Briefcase, label: "Experience" },
  { href: "/#projects", icon: FolderGit2, label: "Projects" },
  { href: "/vlogs", icon: Youtube, label: "Vlogs" },
  { href: "/#contact", icon: Mail, label: "Contact" },
]

export function MobileNavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeHash, setActiveHash] = useState(pathname)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      if (pathname !== "/") {
        router.push(href)
        return
      }
      const element = document.querySelector(href.replace("/", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        router.push(href.replace("/", ""))
        setActiveHash(href.replace("/", ""))
      }
    } else {
      setActiveHash(href)
    }
  }

  return (
    <div className="md:hidden">
      {/* Bottom bar: sidebar trigger (left) + nav icons (center) + theme toggle (right) */}
      <div className="fixed top-0 left-0 right-0 z-50 py-2 flex items-center justify-between px-4 bg-background border-b border-border/50">
        {/* Sidebar trigger */}
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="flex items-center justify-center p-2.5 rounded-full hover:bg-accent transition-colors"
                aria-label="Open sidebar"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 max-w-xs w-64">
              <MobileSidebar setIsOpen={setIsOpen} pathname={pathname} />
            </SheetContent>
          </Sheet>
        </div>
        {/* Nav icons */}
        <div className="flex items-center gap-4 py-1">
          {navItems.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              icon={<item.icon className="h-5 w-5" />}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
                activeHash === item.href ||
                activeHash === item.href.replace("/", "")
                  ? "bg-accent text-accent-foreground"
                  : ""
              }`}
              onClick={(e) => handleClick(e, item.href)}
              active={
                activeHash === item.href ||
                activeHash === item.href.replace("/", "")
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
