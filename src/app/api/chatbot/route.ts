import { NextRequest, NextResponse } from "next/server"
import knowledgeBase from "@/data/chatbot-knowledge.json"

const HUGGINGFACE_API_URL =
  "https://router.huggingface.co/nscale/v1/chat/completions"

const MODEL = "meta-llama/Llama-3.1-8B-Instruct"

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql"

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number
  contestRating: number
  contestsAttended: number
  streak: number
  totalActiveDays: number
}

interface CodeforcesStats {
  rating: number
  maxRating: number
  rank: string
  maxRank: string
}

interface CodeChefStats {
  currentRating: number
  highestRating: number
  stars: string
}

interface GFGStats {
  totalSolved: number
  codingScore: number
  currentStreak: number
  maxStreak: number
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const query = `query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        profile { ranking }
        submitStats { acSubmissionNum { difficulty count } }
        userCalendar { streak totalActiveDays }
      }
      userContestRanking(username: $username) {
        attendedContestsCount rating
      }
    }`

    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username: "rahul_rm__" } }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    const data = await res.json()
    const user = data?.data?.matchedUser
    const contest = data?.data?.userContestRanking

    if (!user) return null

    const stats = user.submitStats.acSubmissionNum
    return {
      totalSolved:
        stats.find((s: { difficulty: string }) => s.difficulty === "All")
          ?.count || 0,
      easySolved:
        stats.find((s: { difficulty: string }) => s.difficulty === "Easy")
          ?.count || 0,
      mediumSolved:
        stats.find((s: { difficulty: string }) => s.difficulty === "Medium")
          ?.count || 0,
      hardSolved:
        stats.find((s: { difficulty: string }) => s.difficulty === "Hard")
          ?.count || 0,
      ranking: user.profile?.ranking || 0,
      contestRating: Math.round(contest?.rating || 0),
      contestsAttended: contest?.attendedContestsCount || 0,
      streak: user.userCalendar?.streak || 0,
      totalActiveDays: user.userCalendar?.totalActiveDays || 0,
    }
  } catch {
    return null
  }
}

async function fetchCodeforcesStats(): Promise<CodeforcesStats | null> {
  try {
    const res = await fetch(
      "https://codeforces.com/api/user.info?handles=rahul_rm__",
      {
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    const user = data.result?.[0]
    if (!user) return null
    return {
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || "unrated",
      maxRank: user.maxRank || "unrated",
    }
  } catch {
    return null
  }
}

async function fetchCodeChefStats(): Promise<CodeChefStats | null> {
  try {
    const res = await fetch(
      "https://codechef-api.vercel.app/handle/rahulrm_903",
      {
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return {
      currentRating: Number(data.currentRating) || 0,
      highestRating: Number(data.highestRating) || 0,
      stars: data.stars || "unrated",
    }
  } catch {
    return null
  }
}

async function fetchGFGStats(): Promise<GFGStats | null> {
  try {
    const res = await fetch(
      "https://geeks-for-geeks-stats-api.vercel.app/?userName=rahulmamoria",
      {
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return {
      totalSolved: Number(data.totalProblemsSolved) || 0,
      codingScore: Number(data.codingScore) || 0,
      currentStreak: Number(data.currentStreak) || 0,
      maxStreak: Number(data.maxStreak) || 0,
    }
  } catch {
    return null
  }
}

async function fetchLiveCodingStats(): Promise<string> {
  const [leetcode, codeforces, codechef, gfg] = await Promise.all([
    fetchLeetCodeStats(),
    fetchCodeforcesStats(),
    fetchCodeChefStats(),
    fetchGFGStats(),
  ])

  let stats = "\n## Live Coding Profile Stats (Real-time)\n"

  if (leetcode) {
    stats += `### LeetCode (@rahul_rm__)
- Total Problems Solved: ${leetcode.totalSolved} (Easy: ${leetcode.easySolved}, Medium: ${leetcode.mediumSolved}, Hard: ${leetcode.hardSolved})
- Ranking: ${leetcode.ranking}
- Contest Rating: ${leetcode.contestRating}
- Contests Attended: ${leetcode.contestsAttended}
- Current Streak: ${leetcode.streak} days
- Total Active Days: ${leetcode.totalActiveDays}
`
  }

  if (codeforces) {
    stats += `### Codeforces (@rahul_rm__)
- Current Rating: ${codeforces.rating}
- Max Rating: ${codeforces.maxRating}
- Rank: ${codeforces.rank}
- Max Rank: ${codeforces.maxRank}
`
  }

  if (codechef) {
    stats += `### CodeChef (@rahulrm_903)
- Current Rating: ${codechef.currentRating}
- Highest Rating: ${codechef.highestRating}
- Stars: ${codechef.stars}
`
  }

  if (gfg) {
    stats += `### GeeksforGeeks (@rahulmamoria)
- Total Problems Solved: ${gfg.totalSolved}
- Coding Score: ${gfg.codingScore}
- Current Streak: ${gfg.currentStreak} days
- Max Streak: ${gfg.maxStreak} days
`
  }

  return stats
}

function buildContext(): string {
  const kb = knowledgeBase

  return `You are an AI assistant for Rahul Mamoria's portfolio website. Answer questions about Rahul based ONLY on the following information. Be friendly, concise, and helpful. If you don't know something, say so politely.

## Personal Info
- Name: ${kb.personal.name}
- Role: ${kb.personal.role}
- Location: ${kb.personal.location}
- Hometown: ${kb.personal.hometown}
- Status: ${kb.personal.status}
- Summary: ${kb.personal.summary}

## Education
${kb.education
  .map((e) => `- ${e.degree} in ${e.field} from ${e.school} (${e.year})`)
  .join("\n")}

## Work Experience
${kb.experience
  .map((exp) => {
    let text = `### ${exp.title} at ${exp.company} (${exp.period}, ${exp.type})`
    if (exp.projects) {
      text +=
        "\n" +
        exp.projects
          .map((p) => `- Project: ${p.name}\n  ${p.description.join("\n  ")}`)
          .join("\n")
    }
    if (exp.description) {
      text += "\n" + exp.description.join("\n")
    }
    return text
  })
  .join("\n\n")}

## Tech Stack
- Frontend: ${kb.tech_stack.frontend.join(", ")}
- Backend: ${kb.tech_stack.backend.join(", ")}
- Database & Cloud: ${kb.tech_stack.database_and_cloud.join(", ")}
- Tools: ${kb.tech_stack.tools.join(", ")}

## Projects
${kb.projects
  .map(
    (p) => `- ${p.name}: ${p.description} (Tech: ${p.tech_stack.join(", ")})`
  )
  .join("\n")}

## Hackathon
- Event: ${kb.hackathon.event} — Result: ${kb.hackathon.result}
- Project: ${kb.hackathon.project} — ${kb.hackathon.description}

## Coding Profiles
${kb.coding_profiles.map((c) => `- ${c.platform}: ${c.url}`).join("\n")}

## Hobbies
${kb.hobbies.join(", ")}

## Social Links
- GitHub: ${kb.social_links.github}
- LinkedIn: ${kb.social_links.linkedin}
- Twitter: ${kb.social_links.twitter}
- Instagram: ${kb.social_links.instagram}
- YouTube: ${kb.social_links.youtube}
- Blog: ${kb.social_links.blog}

## Vlogs
Channel: ${kb.vlogs.channel}
${kb.vlogs.videos.map((v) => `- ${v.title} (${v.date})`).join("\n")}

## Books
Favorites: ${kb.books.favorites
    .map((b) => `${b.title} by ${b.author}`)
    .join(", ")}
Read: ${kb.books.read.map((b) => `${b.title} by ${b.author}`).join(", ")}

## Journey
${kb.journey.paragraphs.join(" ")}

## Recommendations
${kb.recommendations
  .map((r) => `${r.name} (${r.role} at ${r.company}): "${r.text}"`)
  .join("\n")}

## Certificates
${kb.certificates
  .map(
    (c) =>
      `- ${c.title} | Issuer: ${c.issuer} | Completed: ${c.date}${
        c.duration ? ` | Duration: ${c.duration}` : ""
      }${c.instructor ? ` | Instructor: ${c.instructor}` : ""}${
        c.expiration ? ` | Expires: ${c.expiration}` : ""
      } — ${c.description}`
  )
  .join("\n")}
`
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message too long. Please keep it under 500 characters." },
        { status: 400 }
      )
    }

    const apiKey = process.env.HF_TOKEN
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chatbot is not configured. Missing API key." },
        { status: 500 }
      )
    }

    const context = buildContext()
    const liveStats = await fetchLiveCodingStats()

    const response = await fetch(HUGGINGFACE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: context + liveStats },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      const errorMessage =
        errorData?.error || `Hugging Face API error: ${response.status}`

      if (response.status === 503) {
        return NextResponse.json(
          {
            error: "Model is loading. Please try again in a few seconds.",
            reply:
              "The AI model is warming up. Please try again in a moment! 🔄",
          },
          { status: 503 }
        )
      }

      return NextResponse.json({ error: errorMessage }, { status: 500 })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      return NextResponse.json(
        {
          reply: "I'm sorry, I couldn't generate a response. Please try again.",
        },
        { status: 200 }
      )
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chatbot API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
