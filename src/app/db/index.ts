import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';


const sql = neon(process.env.DATABASE_URL!); // Edge-ready Neon client
export const db = drizzle(sql);
