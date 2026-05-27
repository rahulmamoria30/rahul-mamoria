import { NextResponse } from "next/server"
import { recommendations } from "@/constants/recommendations"

export async function GET() {
  try {
    return NextResponse.json({ recommendations })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch recommendations" },
      { status: 500 }
    )
  }
}
