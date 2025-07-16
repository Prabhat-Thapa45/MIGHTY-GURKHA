import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema'; // make sure this points to your schema file

const sql = neon(process.env.DATABASE_URL!); // neon client
export const db = drizzle(sql, { schema }); // drizzle instance with schema
