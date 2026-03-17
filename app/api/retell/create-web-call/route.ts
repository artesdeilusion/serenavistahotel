import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { agent_id, hotel_id, hotel_name } = body

    if (!agent_id || !hotel_id || !hotel_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const response = await fetch("https://api.reservoice.com/api/retell/create-web-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id,
        hotel_id,
        hotel_name,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Retell API error:", errorText)
      return NextResponse.json(
        { error: "Failed to create call", details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in create-web-call route:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
