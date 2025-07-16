import { db } from "@/app/db/db";
import { storiesTable } from "@/app/db/schema";

export async function GET() {
  const stories = await db.select().from(storiesTable);
  return Response.json(stories);
}
