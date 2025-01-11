ALTER TABLE "listings" RENAME COLUMN "full_address_region" TO "map_libre_location_info";--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "full_address" text;--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "map_libre_location_longitude";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "map_libre_location_latitude";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "country_selected_code";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "country_selected_name";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "full_address_street";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "full_address_apt";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "full_address_city";