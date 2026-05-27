"use client"

import { useEffect, useState } from "react"
import { Github, Star, GitFork, Users, BookOpen } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { MotionDiv } from "@/components/ui/motion-div"

const GITHUB_USERNAME = "rahulmamoria30"

interface GitHubData {
  publicRepos: number
  followers: number
  totalStars: number
  totalForks: number
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ])

        if (!userRes.ok || !reposRes.ok) return

        const user = await userRes.json()
        const repos = await reposRes.json()

        const totalStars = repos.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0
        )
        const totalForks = repos.reduce(
          (acc: number, repo: { forks_count: number }) =>
            acc + repo.forks_count,
          0
        )

        setData({
          publicRepos: user.public_repos,
          followers: user.followers,
          totalStars,
          totalForks,
        })
      } catch {
        // Silently fail — stats just won't show
      }
    }

    fetchGitHubData()
  }, [])

  const stats = data
    ? [
        { icon: BookOpen, label: "Repositories", value: data.publicRepos },
        { icon: Star, label: "Stars", value: data.totalStars },
        { icon: GitFork, label: "Forks", value: data.totalForks },
        { icon: Users, label: "Followers", value: data.followers },
      ]
    : []

  return (
    <section className="py-16 sm:py-20">
      <MotionDiv variant="fade">
        <SectionTitle icon={Github} title="GitHub" />
      </MotionDiv>

      <div className="mt-8 space-y-6">
        {/* Stats Cards */}
        {data && (
          <MotionDiv variant="fade" transition={{ delay: 0.1 }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <MotionDiv
                  key={stat.label}
                  variant="fade"
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-4 text-center hover:border-primary/20 hover:bg-card/50 transition-all duration-200"
                >
                  <stat.icon className="w-4 h-4 text-primary/70 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}

        {/* Contribution Graph */}
        <MotionDiv variant="fade" transition={{ delay: 0.3 }}>
          <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-4 sm:p-6 overflow-hidden">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Contribution Graph
            </p>
            <div className="w-full overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                alt="GitHub Contribution Graph"
                className="w-full min-w-[640px] h-auto dark:invert dark:hue-rotate-180 dark:brightness-110"
                loading="lazy"
              />
            </div>
          </div>
        </MotionDiv>

        {/* Profile Link */}
        <MotionDiv variant="fade" transition={{ delay: 0.4 }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile →</span>
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}
