import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as dotenv from 'dotenv';

dotenv.config();


const pool = new Pool({
 // connectionString: "postgres://postgres:Kowshi123@@localhost:5432/crudone?schema=public",
  user:'postgres',
  host:'localhost',
  database:'joins',
  password:'Kowshi123@',
  port:5432,
});

pool.connect().then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("DB connection failed")
})
export const db = drizzle(pool);




// Function to create the table manually using raw SQL
