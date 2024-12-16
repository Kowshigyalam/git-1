import { bigint, primaryKey } from "drizzle-orm/mysql-core";
import { pgTable, PgTable,varchar } from "drizzle-orm/pg-core";

export const employee=pgTable("employee",{
    emp_id:varchar("emp_id",{length:20}).notNull(),
    emp_name:varchar("emp_name",{length:200}).notNull(),
    dept_id:varchar("dept_id",{length:20}).notNull(),
    manager_id:varchar("manager_id",{length:20}).notNull(),

})