import { AppLink } from "@/components/ui/link"
import Image from "next/image"

interface CodingProfileProps {
  url: string
  slug: string
  title: string
  imagePath: string
  className?: string
}

export function CodingProfile({
  url,
  slug,
  title,
  imagePath,
  className,
}: CodingProfileProps) {
  const isInternal = slug === "leetcode"
  const href = isInternal ? `/coding-profiles/${slug}` : url

  return (
    <AppLink
      href={href}
      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 text-sm font-medium transition-all duration-300 ${className}`}
      aria-label={`${title} Profile`}
    >
      <Image
        src={imagePath}
        alt={title}
        height={22}
        width={22}
        className="bg-transparent group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
        {title}
      </span>
    </AppLink>
  )
}
