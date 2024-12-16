import { pgTable, PgTable,varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects",{
    project_id:varchar("project_id",{length:20}).notNull(),
    project_name:varchar("project_name",{length:100}).notNull(),
    team_member_id:varchar("team_member_id",{length:20}).notNull()
})