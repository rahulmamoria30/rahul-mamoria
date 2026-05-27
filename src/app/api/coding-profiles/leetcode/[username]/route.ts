import { NextRequest, NextResponse } from "next/server"

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql"

const USER_PROFILE_QUERY = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      realName
      ranking
      userAvatar
      reputation
      starRating
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    badges {
      name
      icon
    }
    languageProblemCount {
      languageName
      problemsSolved
    }
    tagProblemCounts {
      advanced {
        tagName
        problemsSolved
      }
      intermediate {
        tagName
        problemsSolved
      }
      fundamental {
        tagName
        problemsSolved
      }
    }
    userCalendar {
      activeYears
      streak
      totalActiveDays
      submissionCalendar
    }
    profile {
      realName
      ranking
      userAvatar
      reputation
      starRating
      solutionCount
      categoryDiscussCount
      postViewCount
    }
  }
  recentAcSubmissionList(username: $username, limit: 10) {
    title
    timestamp
    statusDisplay
    lang
  }
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    topPercentage
  }
}
`

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params

  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: USER_PROFILE_QUERY,
        variables: { username },
      }),
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LeetCode data" },
        { status: 502 }
      )
    }

    const json = await res.json()
    const user = json.data?.matchedUser
    const contest = json.data?.userContestRanking
    const recentAC = json.data?.recentAcSubmissionList || []

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const acStats = user.submitStats?.acSubmissionNum || []
    const totalSolved =
      acStats.find((s: { difficulty: string }) => s.difficulty === "All")
        ?.count || 0
    const easySolved =
      acStats.find((s: { difficulty: string }) => s.difficulty === "Easy")
        ?.count || 0
    const mediumSolved =
      acStats.find((s: { difficulty: string }) => s.difficulty === "Medium")
        ?.count || 0
    const hardSolved =
      acStats.find((s: { difficulty: string }) => s.difficulty === "Hard")
        ?.count || 0

    // Languages
    const languages = (user.languageProblemCount || [])
      .filter((l: { problemsSolved: number }) => l.problemsSolved > 0)
      .sort(
        (a: { problemsSolved: number }, b: { problemsSolved: number }) =>
          b.problemsSolved - a.problemsSolved
      )
      .slice(0, 5)
      .map((l: { languageName: string; problemsSolved: number }) => ({
        name: l.languageName,
        count: l.problemsSolved,
      }))

    // Skills
    const skills = {
      advanced: (user.tagProblemCounts?.advanced || [])
        .filter((t: { problemsSolved: number }) => t.problemsSolved > 0)
        .sort(
          (a: { problemsSolved: number }, b: { problemsSolved: number }) =>
            b.problemsSolved - a.problemsSolved
        )
        .slice(0, 5)
        .map((t: { tagName: string; problemsSolved: number }) => ({
          name: t.tagName,
          count: t.problemsSolved,
        })),
      intermediate: (user.tagProblemCounts?.intermediate || [])
        .filter((t: { problemsSolved: number }) => t.problemsSolved > 0)
        .sort(
          (a: { problemsSolved: number }, b: { problemsSolved: number }) =>
            b.problemsSolved - a.problemsSolved
        )
        .slice(0, 5)
        .map((t: { tagName: string; problemsSolved: number }) => ({
          name: t.tagName,
          count: t.problemsSolved,
        })),
      fundamental: (user.tagProblemCounts?.fundamental || [])
        .filter((t: { problemsSolved: number }) => t.problemsSolved > 0)
        .sort(
          (a: { problemsSolved: number }, b: { problemsSolved: number }) =>
            b.problemsSolved - a.problemsSolved
        )
        .slice(0, 5)
        .map((t: { tagName: string; problemsSolved: number }) => ({
          name: t.tagName,
          count: t.problemsSolved,
        })),
    }

    // Calendar
    const calendar = user.userCalendar || {}

    // Recent AC
    const recentSubmissions = recentAC.map(
      (s: { title: string; timestamp: string; lang: string }) => ({
        title: s.title,
        timestamp: Number(s.timestamp),
        lang: s.lang,
      })
    )

    return NextResponse.json({
      username: user.username,
      realName: user.profile?.realName,
      avatar: user.profile?.userAvatar,
      ranking: user.profile?.ranking,
      reputation: user.profile?.reputation,
      views: user.profile?.postViewCount || 0,
      solutionCount: user.profile?.solutionCount || 0,
      discussCount: user.profile?.categoryDiscussCount || 0,
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      contestRating: contest?.rating ? Math.round(contest.rating) : null,
      contestsAttended: contest?.attendedContestsCount || 0,
      contestGlobalRanking: contest?.globalRanking,
      contestTopPercentage: contest?.topPercentage
        ? Number(contest.topPercentage.toFixed(1))
        : null,
      badges: user.badges || [],
      languages,
      skills,
      calendar: {
        streak: calendar.streak || 0,
        totalActiveDays: calendar.totalActiveDays || 0,
        submissionCalendar: calendar.submissionCalendar || "{}",
      },
      recentSubmissions,
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    )
  }
}
