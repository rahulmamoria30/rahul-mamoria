import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params

  try {
    const res = await fetch(
      `https://codechef-api.vercel.app/handle/${encodeURIComponent(username)}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch CodeChef data" },
        { status: 502 }
      )
    }

    const data = await res.json()

    if (!data.success && !data.name) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      username: data.name || username,
      currentRating: Number(data.currentRating) || 0,
      highestRating: Number(data.highestRating) || 0,
      stars: data.stars || "unrated",
      countryRank: data.countryRank || null,
      globalRank: data.globalRank || null,
      countryName: data.countryName || null,
      totalSolved: Number(data.currentRating) > 0 ? null : null, // CodeChef API doesn't always return problem count
      ratingData: Array.isArray(data.ratingData)
        ? data.ratingData
            .slice(-10)
            .map(
              (c: {
                name: string
                rating: string
                rank: string
                end_date: string
              }) => ({
                contestName: c.name,
                rating: Number(c.rating) || 0,
                rank: Number(c.rank) || 0,
                date: c.end_date,
              })
            )
        : [],
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch CodeChef data" },
      { status: 500 }
    )
  }
}
