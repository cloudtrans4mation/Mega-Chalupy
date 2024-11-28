ALTER TABLE "listings" ALTER COLUMN "cot_availability" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "owners_message" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "children_allowance" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "cot_availability_child" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "check_in_date" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "check_out_date" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "neighboring_activity" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "events_allowance" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "number_of_rooms" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "square_meter_count" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "smoking_allowance" SET DEFAULT 'Allowed';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "smoking_allowance" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_accessories_selected" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "property_guidelines_selected" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "room_info_form_selected" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "accommodation_selection_selected" SET DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "room_amenities_selected" SET DEFAULT 'entire';