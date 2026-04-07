import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "multiform",
  password: "postgres",
  port: 5432,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const result = await pool.query(
      `INSERT INTO users(
        first_name, last_name, email, phone,
        pan_number, industry, website,
        currency, bank_country, iban
      )
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *`,
      [
        body.first_name || "",
        body.last_name || "",
        body.rep_email || "",
        body.phone || "",
        body.pan_number || "",
        body.industry || "",
        body.website || "", 
        body.currency || "",
        body.bank_country || "",
        body.pin || "",
      ]
    );

    return NextResponse.json(result.rows[0]);

  } catch (error) {
    console.error("DB ERROR:", error);
    return NextResponse.json(
      { error: "Insert failed" },
      { status: 500 }
    );
  }
}