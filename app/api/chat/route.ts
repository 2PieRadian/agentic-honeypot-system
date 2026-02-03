import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // TODO: Replace with actual backend API call
    // For now, this is a placeholder that echoes the message
    // In production, this would forward to your actual chat service

    // Simulate network delay for realistic feel
    await new Promise((resolve) =>
      setTimeout(resolve, 500 + Math.random() * 1000),
    );

    // Placeholder response - replace with actual API integration
    const reply = `Thank you for your message. Our system has received: "${message}"`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
