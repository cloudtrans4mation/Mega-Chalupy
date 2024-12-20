ALTER TABLE "reservations" ADD COLUMN "status" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "reservations" ADD COLUMN "reservation_description" text DEFAULT 'Nothing!';