ALTER TABLE "listings" ALTER COLUMN "cot_availability" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "owners_message" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "children_allowance" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "cot_availability_child" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "check_in_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "check_out_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "neighboring_activity" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "events_allowance" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "number_of_rooms" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "square_meter_count" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "smoking_allowance" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "smoking_allowance" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_type" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_accessories_selected" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_guidelines_selected" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "room_info_form_selected" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "accommodation_selection_selected" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "room_amenities_selected" DROP DEFAULT;