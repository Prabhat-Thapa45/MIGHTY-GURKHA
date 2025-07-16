import { boolean, integer, pgTable, varchar, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  isAdmin: boolean().notNull().default(true),
});

export const storiesTable = pgTable("stories", {
  id: serial("id").primaryKey(),                      // Auto-generated unique ID
  name: varchar("name", { length: 100 }).notNull(),   // e.g. "Sanjay Gurung"
  rank: varchar("rank", { length: 100 }).notNull(),   // e.g. "British Army"
  photo: varchar("photo", { length: 255 }).notNull(), // Path to photo asset
  quote: text("quote").notNull(),                     // Longer quote or testimonial
});


export const teamMembersTable = pgTable("team_members", {
  id: serial("id").primaryKey(),                      // Auto-generated unique ID
  name: varchar("name", { length: 100 }).notNull(),   // e.g. "Sanjay Gurung"
  role: varchar("role", { length: 100}).notNull(),   // e.g. "Cook"
  image: varchar("image", { length: 255 }).notNull(), // Path to team member image
});