import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcrypt";  

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const check = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (check.rows.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (first_name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, first_name, email`,
      [name, email, hashedPassword]
    );

    return NextResponse.json(
      {
        message: "Registered successfully",
        user: result.rows[0],
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}