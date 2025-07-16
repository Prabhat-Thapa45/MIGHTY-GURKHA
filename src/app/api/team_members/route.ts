import { db } from "@/app/db/db";
import { teamMembersTable } from "@/app/db/schema";


export async function GET() {
    const teamMembers = await db.select().from (teamMembersTable);
    return Response.json(teamMembers);
}