import { z } from 'zod';


export const ImageSchema = z.union([
  z.string()
    .min(6, { message: 'Image must be at least 6 characters long' })
    .max(50000, { message: 'Image must be less than 50000 characters' })
    .trim(),
  z.array(
    z.string()
      .min(6, { message: 'Each image must be at least 6 characters long' })
      .max(50000, { message: 'Each image must be less than 50000 characters' })
      .trim()
  ),
]);


export const DescriptionSchema = z
  .string()
  .min(10, { message: 'Description must be at least 10 characters' })
  .max(400, { message: 'Description must be less than 400 characters' });
export const PublicIdSchema = z
  .string()
  .min(6, { message: 'Image public id is required' });
export const CountrySelectValueSchema = z.object({
  flag: z.string(),
  label: z.string(),
  latlng: z.array(z.number()),
  region: z.string(),
  value: z.string(),
});
export const PropertyAccessoriesSchema = z.enum([
  'Parking',
  'Kitchen',
  'Bedroom',
  'Bathroom',
  'Living Area',
  'Media & Technology',
  'Outdoor Space',
]);
export const ListingValuesSchema = z.object({
  category: z.string().min(1, { message: 'Category is required' }),
  locationValue: CountrySelectValueSchema.optional().refine(val => val != null, {
    message: 'Location is required',
  }),
  guestCount: z.number().min(1, { message: 'Guest count must be at least 1' }),
  roomCount: z.number().min(1, { message: 'Room count must be at least 1' }),
  bathroomCount: z.number().min(1, { message: 'Bathroom count must be at least 1' }),
  imageSrc: ImageSchema,
  price: z.number().min(1, { message: 'Price must be a number greater than 0' }),
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  description: DescriptionSchema,
  imagePublicId: PublicIdSchema,
  
  // Additional UI fields
  cotAvailability: z.string().min(1, { message: 'Cot availability is required' }).optional(),
  ownersMessage: z.string().optional(),
  
  // Children guidelines
  childrenAllowance: z.enum(['Allowed', 'Not Allowed']).optional(),
  cotAvailabilityChild: z.enum(['Available', 'Not Available']).optional(),
  
  // Check-in and Check-out guidelines
  checkInDate: z.string().optional(),
  checkOutDate: z.string().optional(),
  
  // Neighboring activities setup
  neighboringActivity: z.string().optional(),
  
  // Events setup
  eventsAllowance: z.enum(['Allowed', 'Not Allowed']).optional(),
  // New fields for the uploaded image
  numberOfRooms: z.number().min(1, { message: 'At least 1 room is required' }),
  squareMeterCount: z.number().min(1, { message: 'Square meter count must be greater than 0' }),
  smokingAllowance: z.enum(['Allowed', 'Not Allowed']).optional().default('Allowed'),
  // Property type
  propertyType: z.enum(['Entire', 'Room', 'Shared']).optional(),
  // Property accessories
  propertyAccessories: z.array(PropertyAccessoriesSchema).optional(),
  // New fields for property selections
  PropertyAccessoriesSelected: z.string().optional(),
  PropertyGuidelinesSelected: z.string().optional(),
  RoomInfoFormSelected: z.string().optional(),
  AccommodationSelectionSelected: z.string().optional(),
  RoomAmenitiesSelected: z.string().optional(),
});
export const ReservationSchema = z.object({
  listingId: z.string().min(16, { message: 'Invalid listing ID' }),
  startDate: z
    .string()
    .min(10, { message: 'Invalid start date' })
    .regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z
    .string()
    .min(10, { message: 'Invalid end date' })
    .regex(/^\d{4}-\d{2}-\d{2}$/),
});