import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await pool.query(
      "INSERT INTO emails (email, timestamp) VALUES ($1, NOW())",
      [email]
    );
    return NextResponse.json({ message: "Email saved" }, { status: 201 });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}