import { db } from "@vercel/postgres";

export async function getUserByEmail(email: string) {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0]; // or null if not found
}