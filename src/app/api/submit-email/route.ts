import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);
    const { email } = body;

    if (!email || typeof email !== "string" || email.trim() === "") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log("Attempting to connect to Neon database...");
    await pool.connect();
    await pool.query(
      "INSERT INTO emails (email, timestamp) VALUES ($1, NOW())",
      [email]
    );
    console.log("Email saved to database:", email);

    return NextResponse.json({ message: "Email saved" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/submit-email:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}