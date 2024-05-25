CREATE TABLE IF NOT EXISTS "subdomains" (
	"id" serial PRIMARY KEY NOT NULL,
	"subdomain" text NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "subdomains_subdomain_unique" UNIQUE("subdomain")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subdomains" ADD CONSTRAINT "subdomains_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
