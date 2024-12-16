import { pgTable, PgTable,varchar } from "drizzle-orm/pg-core";

export const manager = pgTable("manager",{
    
    manager_id:varchar("manager_id",{length:20}).notNull(),
    manager_name:varchar("manager_name",{length:20}).notNull(),
    dept_id:varchar("dept_id",{length:20}).notNull()
})