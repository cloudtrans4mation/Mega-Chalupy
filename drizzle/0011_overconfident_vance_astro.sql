CREATE TABLE IF NOT EXISTS "experiences" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" varchar(500) NOT NULL,
	"category" text NOT NULL,
	"image_src" text NOT NULL,
	"image_public_id" text,
	"duration" integer NOT NULL,
	"group_size" integer NOT NULL,
	"price_per_person" integer NOT NULL,
	"location" text NOT NULL,
	"meeting_point" text NOT NULL,
	"language" text NOT NULL,
	"provided_items" text,
	"traveler_requirements" text,
	"what_to_bring" text,
	"age_restriction" text,
	"cancellation_policy" text,
	"safety_guidelines" text,
	"available_dates" text,
	"start_time" text,
	"end_time" text,
	"experience_accessories_selected" text,
	"experience_guidelines_selected" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "experiences" ADD CONSTRAINT "experiences_user_id_auth_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."auth_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
