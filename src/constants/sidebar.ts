import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  StarIcon,
  Pencil1Icon,
  InstagramLogoIcon,
  PersonIcon,
  VideoIcon,
} from "@radix-ui/react-icons"
import { MapPinIcon } from "lucide-react"

export const profileData = {
  name: "Rahul Mamoria",
  role: "Software Developer",
  status: "Open to work",
  location: "Hyderabad, India",
  locationIcon: MapPinIcon,
  image: "/profile.png",
}

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rahulmamoria30",
    icon: GitHubLogoIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahulmm07",
    icon: LinkedInLogoIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/rahul_rm__",
    icon: TwitterLogoIcon,
  },
]
export const socailLinksWithInstagram = [
  ...socialLinks,
  {
    label: "Instagram",
    href: "https://instagram.com/rahul_rm__",
    icon: InstagramLogoIcon,
  },
]

export const externalLinks = [
  {
    title: "About Me",
    url: "/about",
    icon: PersonIcon,
  },
  {
    title: "Hackathon",
    url: "/hackathon",
    icon: StarIcon,
  },
  {
    title: "My Blogs",
    url: "https://rahulmamoria.hashnode.dev/",
    icon: Pencil1Icon,
  },
  {
    title: "YouTube Vlogs",
    url: "/vlogs",
    icon: VideoIcon,
  },
  // {
  //   title: "Latest Tech Trends",
  //   url: "https://openai.com/index/generative-models/",
  //   icon: CodeIcon,
  // },
  // {
  //   title: "Exploring V0 SDK",
  //   url: "https://vercel.com/blog/ai-sdk-3-generative-ui",
  //   icon: ReaderIcon,
  // },
]
