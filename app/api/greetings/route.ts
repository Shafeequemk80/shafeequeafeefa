import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import Greeting from "../../models/greeting";

export async function GET() {
  await connectDB();
  const greetings = await Greeting.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(greetings);
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const greeting = await Greeting.create({ name, message });

    return NextResponse.json(greeting, { status: 201 });
  } catch (error) {
    console.error("Error creating greeting:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
