import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/Sidebar"
import { Background } from "@/components/Background"
import { TopNav } from "@/components/TopNav"
import { Footer } from "@/components/Footer"
import { MobileNavBar } from "@/components/MobileNavBar"
import { ScrollToTop } from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rahul Mamoria | Software Developer",
    template: "%s | Rahul Mamoria",
  },
  description:
    "Software Developer at Grid Dynamics. Building scalable web apps with React, Next.js, and TypeScript. NIT Calicut alumnus.",
  keywords: [
    "Rahul Mamoria",
    "Software Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Grid Dynamics",
  ],
  authors: [{ name: "Rahul Mamoria" }],
  creator: "Rahul Mamoria",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulmamoria.vercel.app",
    siteName: "Rahul Mamoria",
    title: "Rahul Mamoria | Software Developer",
    description:
      "Software Developer at Grid Dynamics. Building scalable web apps with React, Next.js, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Mamoria - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Mamoria | Software Developer",
    description:
      "Software Developer at Grid Dynamics. Building scalable web apps with React, Next.js, and TypeScript.",
    creator: "@rahul_rm__",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
          type="image/png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <div className="flex h-screen relative z-0">
            <div className="flex-none">
              <Sidebar />
            </div>
            <div className="flex-1 h-screen overflow-y-auto">
              <div className="hidden md:block">
                <TopNav />
              </div>
              <div className="w-full px-6 sm:px-8 py-8 sm:py-12 pt-16 md:pt-8">
                {children}
              </div>
              <Footer />
            </div>
          </div>
          <MobileNavBar />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
