import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  const { handle } = await params

  try {
    const [infoRes, ratingRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${handle}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://codeforces.com/api/user.rating?handle=${handle}`, {
        next: { revalidate: 3600 },
      }),
    ])

    if (!infoRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Codeforces data" },
        { status: 502 }
      )
    }

    const infoJson = await infoRes.json()
    const user = infoJson.result?.[0]

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    let contests: { contestName: string; rank: number; newRating: number }[] =
      []
    if (ratingRes.ok) {
      const ratingJson = await ratingRes.json()
      contests = (ratingJson.result || [])
        .slice(-10)
        .reverse()
        .map((c: { contestName: string; rank: number; newRating: number }) => ({
          contestName: c.contestName,
          rank: c.rank,
          newRating: c.newRating,
        }))
    }

    return NextResponse.json({
      handle: user.handle,
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || "unrated",
      maxRank: user.maxRank || "unrated",
      avatar: user.titlePhoto,
      contribution: user.contribution || 0,
      friendOfCount: user.friendOfCount || 0,
      recentContests: contests,
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Codeforces data" },
      { status: 500 }
    )
  }
}
