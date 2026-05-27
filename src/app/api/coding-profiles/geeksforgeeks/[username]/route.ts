import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params

  try {
    const res = await fetch(
      `https://geeks-for-geeks-stats-api.vercel.app/?userName=${encodeURIComponent(
        username
      )}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GeeksforGeeks data" },
        { status: 502 }
      )
    }

    const data = await res.json()

    const totalSolved = Number(data.totalProblemsSolved) || 0
    const easySolved = Number(data.School) || 0 + Number(data.Basic) || 0
    const mediumSolved = Number(data.Easy) || 0 + Number(data.Medium) || 0
    const hardSolved = Number(data.Hard) || 0

    return NextResponse.json({
      username: data.userName || username,
      institution: data.instituteRank !== "NA" ? data.instituteRank : null,
      languagesUsed: data.languagesUsed
        ? data.languagesUsed
            .split(",")
            .map((l: string) => l.trim())
            .filter(Boolean)
        : [],
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      codingScore: Number(data.codingScore) || 0,
      monthlyScore: Number(data.monthlyCodingScore) || 0,
      instituteRank: data.instituteRank || "N/A",
      currentStreak: Number(data.currentStreak) || 0,
      maxStreak: Number(data.maxStreak) || 0,
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GeeksforGeeks data" },
      { status: 500 }
    )
  }
}
