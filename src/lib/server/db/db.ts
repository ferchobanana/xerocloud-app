import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const pgClient = postgres("postgresql://hnosjotape:unEOwWF6gqX9@ep-lucky-pond-a52sle5e.us-east-2.aws.neon.tech/xeroweb_test?sslmode=require")
export const db = drizzle(pgClient)