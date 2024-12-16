import fs from 'fs';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/*.ts',
  out: './migrations',
  dbCredentials: {
  user:'postgres',
  host:'localhost',
  database:'joins',
  password:'Kowshi123@',
  port:5432,
  ssl:false,
  },
});
 

