import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/lib/server/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: "postgresql://hnosjotape:unEOwWF6gqX9@ep-lucky-pond-a52sle5e.us-east-2.aws.neon.tech/xeroweb_test?sslmode=require"
    }
});