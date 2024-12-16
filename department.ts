import { pgTable, PgTable,varchar } from "drizzle-orm/pg-core";

export const department = pgTable("department",{
    dept_id:varchar("dept_id",{length:20}).notNull(),
    dept_name:varchar("dept_name",{length:20}).notNull()

})