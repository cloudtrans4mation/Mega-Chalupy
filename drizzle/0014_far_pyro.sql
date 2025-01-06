ALTER TABLE "listings" ADD COLUMN "map_libre_location_longitude" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "map_libre_location_latitude" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "country_selected_code" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "country_selected_name" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "full_address_street" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "full_address_apt" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "full_address_city" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "full_address_region" text;