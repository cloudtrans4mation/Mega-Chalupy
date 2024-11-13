ALTER TABLE "listings" ADD COLUMN "cot_availability" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "owners_message" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "children_allowance" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "cot_availability_child" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "check_in_date" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "check_out_date" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "neighboring_activity" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "events_allowance" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "number_of_rooms" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "square_meter_count" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "smoking_allowance" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "property_type" text;