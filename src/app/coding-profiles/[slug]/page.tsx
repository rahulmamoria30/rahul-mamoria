"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { profileData } from "@/constants/home"
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Target,
  Flame,
  Award,
  Hash,
  Eye,
  MessageSquare,
  Star,
  Code,
  Calendar,
  Zap,
  CheckCircle2,
} from "lucide-react"
import { AppLink } from "@/components/ui/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface LeetCodeData {
  username: string
  realName: string
  avatar: string
  ranking: number
  reputation: number
  views: number
  solutionCount: number
  discussCount: number
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  contestRating: number | null
  contestsAttended: number
  contestGlobalRanking: number | null
  contestTopPercentage: number | null
  badges: { name: string; icon: string }[]
  languages: { name: string; count: number }[]
  skills: {
    advanced: { name: string; count: number }[]
    intermediate: { name: string; count: number }[]
    fundamental: { name: string; count: number }[]
  }
  calendar: {
    streak: number
    totalActiveDays: number
    submissionCalendar: string
  }
  recentSubmissions: {
    title: string
    timestamp: number
    lang: string
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CodeforcesData {
  handle: string
  rating: number
  maxRating: number
  rank: string
  maxRank: string
  contribution: number
  friendOfCount: number
  recentContests: {
    contestName: string
    rank: number
    newRating: number
  }[]
}

interface GFGData {
  username: string
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  codingScore: number
  monthlyScore: number
  instituteRank: string
  currentStreak: number
  maxStreak: number
  languagesUsed: string[]
}

interface CodeChefData {
  username: string
  currentRating: number
  highestRating: number
  stars: string
  countryRank: number | null
  globalRank: number | null
  countryName: string | null
  ratingData: {
    contestName: string
    rating: number
    rank: number
    date: string
  }[]
}

function timeAgo(timestamp: number): string {
  const now = Date.now() / 1000
  const diff = now - timestamp
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`
  return `${Math.floor(diff / 2592000)} months ago`
}

function SubmissionCalendar({ calendarJson }: { calendarJson: string }) {
  const data: Record<string, number> = JSON.parse(calendarJson || "{}")
  const today = new Date()
  const startDate = new Date(today)
  startDate.setFullYear(startDate.getFullYear() - 1)

  // Build a lookup from UTC-midnight timestamp to count
  // LeetCode keys are already UTC-midnight timestamps
  // Also try matching by date string to handle timezone offsets
  const countByDate: Record<string, number> = {}
  for (const [ts, count] of Object.entries(data)) {
    const d = new Date(Number(ts) * 1000)
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`
    countByDate[key] = (countByDate[key] || 0) + count
  }

  // Build weeks array (52 weeks)
  const weeks: { date: Date; count: number }[][] = []
  const current = new Date(startDate)
  // Align to Sunday
  current.setDate(current.getDate() - current.getDay())

  while (current <= today) {
    const week: { date: Date; count: number }[] = []
    for (let d = 0; d < 7; d++) {
      const key = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`
      week.push({
        date: new Date(current),
        count: countByDate[key] || 0,
      })
      current.setDate(current.getDate() + 1)
    }
    weeks.push(week)
  }

  const getColor = (count: number) => {
    if (count === 0) return "bg-border/30"
    if (count <= 2) return "bg-emerald-500/30"
    if (count <= 5) return "bg-emerald-500/50"
    if (count <= 10) return "bg-emerald-500/70"
    return "bg-emerald-500"
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px]">
        {/* Month labels */}
        <div className="flex gap-[3px] mb-1 ml-0">
          {weeks.map((week, i) => {
            const firstDay = week[0]?.date
            if (firstDay && firstDay.getDate() <= 7 && i > 0) {
              return (
                <span
                  key={i}
                  className="text-[10px] text-muted-foreground w-[11px] text-center"
                >
                  {months[firstDay.getMonth()]}
                </span>
              )
            }
            return <span key={i} className="w-[11px]" />
          })}
        </div>
        {/* Grid */}
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`w-[11px] h-[11px] rounded-[2px] ${getColor(
                    day.count
                  )} transition-colors duration-100`}
                  title={`${day.date.toLocaleDateString()}: ${
                    day.count
                  } submission${day.count !== 1 ? "s" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LeetCodeStats({ username }: { username: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/coding-profiles/leetcode/${username}`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <LoadingState />
  if (!data) return <ErrorState />

  const totalProblems = 3944
  const easyTotal = 946
  const mediumTotal = 2061
  const hardTotal = 937

  const solvedPercent = Math.round((data.totalSolved / totalProblems) * 100)

  const difficultyStats = [
    {
      label: "Easy",
      count: data.easySolved,
      total: easyTotal,
      color: "text-emerald-500",
      bg: "bg-emerald-500",
      ringColor: "text-emerald-500",
    },
    {
      label: "Med.",
      count: data.mediumSolved,
      total: mediumTotal,
      color: "text-amber-500",
      bg: "bg-amber-500",
      ringColor: "text-amber-500",
    },
    {
      label: "Hard",
      count: data.hardSolved,
      total: hardTotal,
      color: "text-red-500",
      bg: "bg-red-500",
      ringColor: "text-red-500",
    },
  ]

  const communityStats = [
    { icon: Eye, label: "Views", value: data.views?.toLocaleString() || "0" },
    {
      icon: CheckCircle2,
      label: "Solution",
      value: data.solutionCount?.toString() || "0",
    },
    {
      icon: MessageSquare,
      label: "Discuss",
      value: data.discussCount?.toString() || "0",
    },
    {
      icon: Star,
      label: "Reputation",
      value: data.reputation?.toString() || "0",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:w-72 flex-shrink-0 space-y-5"
      >
        {/* Profile Card */}
        <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
          <div className="flex items-center gap-3 mb-3">
            {data.avatar && (
              <Image
                src={data.avatar}
                alt={data.realName || data.username}
                width={48}
                height={48}
                className="rounded-lg"
              />
            )}
            <div>
              <h2 className="font-semibold text-foreground">
                {data.realName || data.username}
              </h2>
              <p className="text-xs text-muted-foreground">{data.username}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Rank{" "}
            <span className="font-semibold text-foreground">
              {data.ranking?.toLocaleString()}
            </span>
          </p>
        </div>

        {/* Community Stats */}
        <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Community Stats
          </p>
          <div className="space-y-3">
            {communityStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2.5">
                <stat.icon className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-sm text-foreground font-medium">
                  {stat.label}
                </span>
                <span className="text-sm text-muted-foreground ml-auto">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        {data.languages?.length > 0 && (
          <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Languages
            </p>
            <div className="space-y-2.5">
              {data.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-card/60 border border-border/30 text-xs font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {lang.count} problems solved
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {(data.skills?.advanced?.length > 0 ||
          data.skills?.intermediate?.length > 0 ||
          data.skills?.fundamental?.length > 0) && (
          <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Skills
            </p>
            <div className="space-y-4">
              {data.skills.advanced.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-red-400 mb-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    Advanced
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.advanced.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-card/60 border border-border/30 text-[11px] text-muted-foreground"
                      >
                        {s.name}{" "}
                        <span className="text-foreground/60">x{s.count}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {data.skills.intermediate.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-amber-400 mb-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Intermediate
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.intermediate.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-card/60 border border-border/30 text-[11px] text-muted-foreground"
                      >
                        {s.name}{" "}
                        <span className="text-foreground/60">x{s.count}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {data.skills.fundamental.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-emerald-400 mb-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Fundamental
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.fundamental.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-card/60 border border-border/30 text-[11px] text-muted-foreground"
                      >
                        {s.name}{" "}
                        <span className="text-foreground/60">x{s.count}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex-grow space-y-5"
      >
        {/* Solved Section */}
        <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            Problems Solved
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Ring */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-border/20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray={`${solvedPercent * 2.64} 264`}
                  strokeLinecap="round"
                  className="text-amber-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-foreground">
                  {data.totalSolved}
                </span>
                <span className="text-xs text-muted-foreground">
                  /{totalProblems}
                </span>
                <span className="text-[10px] text-muted-foreground mt-0.5">
                  Solved
                </span>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="flex-grow w-full space-y-3">
              {difficultyStats.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-semibold ${d.color}`}>
                      {d.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {d.count}
                      </span>
                      <span className="text-muted-foreground/60">
                        /{d.total}
                      </span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-border/20 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${d.bg} transition-all duration-500`}
                      style={{
                        width: `${Math.round((d.count / d.total) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Badges
            </p>
            <span className="text-lg font-bold text-foreground">
              {data.badges?.length || 0}
            </span>
          </div>
          {data.badges?.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {data.badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-card/80 to-card/40 border border-border/40 hover:border-primary/30 transition-all duration-200"
                  title={badge.name}
                >
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    {badge.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={badge.icon}
                        alt={badge.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            e.currentTarget.style.display = "none"
                            const fallback = document.createElement("div")
                            fallback.className =
                              "w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center"
                            fallback.innerHTML =
                              '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>'
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium text-foreground/80">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No badges yet</p>
          )}
        </div>

        {/* Submission Calendar */}
        <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary/60" />
              <p className="text-sm font-medium text-foreground">
                Submissions in the past one year
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>
                Total active days:{" "}
                <span className="font-semibold text-foreground">
                  {data.calendar.totalActiveDays}
                </span>
              </span>
              <span>
                Max streak:{" "}
                <span className="font-semibold text-foreground">
                  {data.calendar.streak}
                </span>
              </span>
            </div>
          </div>
          <SubmissionCalendar calendarJson={data.calendar.submissionCalendar} />
        </div>

        {/* Contest Performance */}
        {data.contestRating && (
          <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Contest Performance
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {data.contestRating}
                </div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {data.contestsAttended}
                </div>
                <div className="text-xs text-muted-foreground">Attended</div>
              </div>
              {data.contestGlobalRanking && (
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    #{data.contestGlobalRanking.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Global Rank
                  </div>
                </div>
              )}
              {data.contestTopPercentage && (
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    Top {data.contestTopPercentage}%
                  </div>
                  <div className="text-xs text-muted-foreground">Globally</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recent AC Submissions */}
        {data.recentSubmissions?.length > 0 && (
          <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-primary/60" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Recent AC
              </p>
            </div>
            <div className="space-y-0">
              {data.recentSubmissions.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 border-b border-border/20 last:border-0"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Zap className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 truncate">
                      {sub.title}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-3">
                    {timeAgo(sub.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GFGStats({ username }: { username: string }) {
  const [data, setData] = useState<GFGData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/coding-profiles/geeksforgeeks/${username}`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <LoadingState />
  if (!data) return <ErrorState />

  const difficultyStats = [
    {
      label: "Easy",
      count: data.easySolved,
      color: "text-emerald-500",
      bg: "bg-emerald-500",
    },
    {
      label: "Medium",
      count: data.mediumSolved,
      color: "text-amber-500",
      bg: "bg-amber-500",
    },
    {
      label: "Hard",
      count: data.hardSolved,
      color: "text-red-500",
      bg: "bg-red-500",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard icon={Target} label="Total Solved" value={data.totalSolved} />
        <StatCard icon={Zap} label="Coding Score" value={data.codingScore} />
        <StatCard
          icon={Flame}
          label="Current Streak"
          value={data.currentStreak}
        />
        <StatCard icon={Award} label="Max Streak" value={data.maxStreak} />
      </div>

      {/* Difficulty Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5 sm:p-6"
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Difficulty Breakdown
        </p>
        <div className="grid grid-cols-3 gap-4">
          {difficultyStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.count}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.monthlyScore > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Monthly Score
            </p>
            <div className="text-2xl font-bold text-foreground">
              {data.monthlyScore}
            </div>
          </motion.div>
        )}
        {data.instituteRank && data.instituteRank !== "N/A" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Institute Rank
            </p>
            <div className="text-2xl font-bold text-foreground">
              {data.instituteRank}
            </div>
          </motion.div>
        )}
      </div>

      {/* Languages Used */}
      {data.languagesUsed?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5 sm:p-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Languages Used
          </p>
          <div className="flex flex-wrap gap-2">
            {data.languagesUsed.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CodeChefStats({ username }: { username: string }) {
  const [data, setData] = useState<CodeChefData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/coding-profiles/codechef/${username}`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <LoadingState />
  if (!data) return <ErrorState />

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard icon={Trophy} label="Rating" value={data.currentRating} />
        <StatCard
          icon={Flame}
          label="Highest Rating"
          value={data.highestRating}
        />
        <StatCard icon={Star} label="Stars" value={data.stars} />
        {data.globalRank && (
          <StatCard icon={Hash} label="Global Rank" value={data.globalRank} />
        )}
        {!data.globalRank && data.countryRank && (
          <StatCard icon={Hash} label="Country Rank" value={data.countryRank} />
        )}
      </div>

      {/* Rating Details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5 sm:p-6"
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Rating Details
        </p>
        <div className="flex items-center gap-6">
          <div>
            <div className="text-3xl font-bold text-foreground">
              {data.currentRating}
            </div>
            <div className="text-sm text-muted-foreground">Current Rating</div>
          </div>
          <div className="h-12 w-px bg-border/50" />
          <div>
            <div className="text-3xl font-bold text-muted-foreground/60">
              {data.highestRating}
            </div>
            <div className="text-sm text-muted-foreground">Highest Rating</div>
          </div>
          {data.countryRank && (
            <>
              <div className="h-12 w-px bg-border/50" />
              <div>
                <div className="text-3xl font-bold text-muted-foreground/60">
                  #{data.countryRank}
                </div>
                <div className="text-sm text-muted-foreground">
                  {data.countryName || "Country"} Rank
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Recent Contests */}
      {data.ratingData.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-5 sm:p-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Recent Contests
          </p>
          <div className="space-y-3">
            {data.ratingData.map((contest, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
              >
                <span className="text-sm text-foreground/80 truncate pr-4">
                  {contest.contestName}
                </span>
                <div className="flex items-center gap-4 flex-shrink-0 text-sm">
                  <span className="text-muted-foreground">#{contest.rank}</span>
                  <span className="font-medium text-foreground">
                    {contest.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

function FallbackProfile({
  profile,
}: {
  profile: { title: string; url: string }
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <div className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-8 text-center max-w-md">
        <ExternalLink className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">View on {profile.title}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Visit the profile directly to see full stats and activity.
        </p>
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
        >
          Open {profile.title} Profile
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  valueColor,
}: {
  icon: typeof Target
  label: string
  value: string | number
  valueColor?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/20 hover:bg-card/50 transition-all duration-200"
    >
      <Icon className="w-4 h-4 text-primary/70 mb-2" />
      <div
        className={`text-xl sm:text-2xl font-bold tracking-tight ${
          valueColor || "text-foreground"
        }`}
      >
        {value}
      </div>
      <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  )
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-border/30" />
        <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">
        Loading stats...
      </p>
    </div>
  )
}

function ErrorState() {
  return (
    <div className="flex items-center justify-center py-20">
      <p className="text-sm text-muted-foreground">
        Failed to load stats. Please try again later.
      </p>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRankColor(rank: string): string {
  const r = rank.toLowerCase()
  if (r.includes("legendary") || r.includes("international grandmaster"))
    return "text-red-500"
  if (r.includes("grandmaster")) return "text-red-400"
  if (r.includes("international master")) return "text-orange-400"
  if (r.includes("master")) return "text-orange-500"
  if (r.includes("candidate master")) return "text-violet-500"
  if (r.includes("expert")) return "text-blue-500"
  if (r.includes("specialist")) return "text-cyan-500"
  if (r.includes("pupil")) return "text-green-500"
  return "text-muted-foreground"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function capitalize(s: string) {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function CodingProfilePage() {
  const params = useParams()
  const profile = profileData.find((p) => p.slug === params.slug)

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-semibold text-foreground">
            Profile Not Found
          </h1>
          <AppLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </AppLink>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-10"
    >
      {/* Back Navigation */}
      <div className="mb-8">
        <AppLink
          href="/#home"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </AppLink>
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={profile.imagePath}
            alt={profile.title}
            height={20}
            width={20}
            className="rounded"
          />
          <h1 className="text-sm sm:text-base font-semibold text-foreground">
            {profile.title}
          </h1>
        </div>
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
        >
          <ExternalLink className="w-3 h-3" />
          <span className="hidden sm:inline">View on {profile.title}</span>
          <span className="sm:hidden">Open</span>
        </a>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {profile.slug === "leetcode" && profile.apiUsername ? (
          <LeetCodeStats username={profile.apiUsername} />
        ) : (
          <FallbackProfile profile={profile} />
        )}
      </div>
    </motion.div>
  )
}
