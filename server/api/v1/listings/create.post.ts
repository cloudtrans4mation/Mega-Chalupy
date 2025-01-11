import { generateIdFromEntropySize } from 'lucia'
import { db } from '~/server/db/drizzle'
import { listing } from '~/server/db/schema'
import { ListingValuesSchema } from '~/zod-schemas/listing-schema'

export default defineEventHandler(async event => {
  try {
    const currentUser = event.context.user
    if (!currentUser) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      })
    }

    const parseResult = await readValidatedBody(event, ListingValuesSchema.safeParse)

    if (!parseResult.success) {
      console.error("Validation failed:", parseResult.error.issues);
    
      // Check the error's path to locate the exact problematic field
      parseResult.error.issues.forEach(issue => {
        console.error(`Field '${issue.path.join('.')}' has an issue: ${issue.message}`);
      });
    
      throw createError({
        statusCode: 400,
        message: `Validation failed for ${parseResult.error.issues
          .map(issue => issue.path.join('.'))
          .join(', ')}`,
      });
    }
     

    const {
      category,
      guestCount,
      roomCount,
      bathroomCount,
      imageSrc,
      locationValue,
      price,
      title,
      description,
      imagePublicId,

      neighboringActivity,
      eventsAllowance,
      numberOfRooms,
      squareMeterCount,
      smokingAllowance,
      propertyType,
      PropertyAccessoriesSelected,
      PropertyGuidelinesSelected,
      RoomInfoFormSelected,
      AccommodationSelectionSelected,
      RoomAmenitiesSelected,
  
      // Newly added fields
      mapLibreLocationInfo,
      fullAddress,
    } = parseResult.data;
    
    
    const id = generateIdFromEntropySize(16)

    await db.insert(listing).values({
      id,
      userId: String(currentUser.id),
      category,
      locationValue: locationValue!.value,
      guestCount,
      roomCount,
      bathroomCount,
      imageSrc,
      price,
      title,
      description,
      imagePublicId,
      neighboringActivity: neighboringActivity ?? null,
      eventsAllowance: eventsAllowance ?? null,
      numberOfRooms,
      squareMeterCount,
      smokingAllowance,
      propertyType: propertyType ?? null,
      PropertyAccessoriesSelected: PropertyAccessoriesSelected ?? null,
      PropertyGuidelinesSelected: PropertyGuidelinesSelected ?? null,
      RoomInfoFormSelected: RoomInfoFormSelected ?? null,
      AccommodationSelectionSelected: AccommodationSelectionSelected ?? null,
      RoomAmenitiesSelected: RoomAmenitiesSelected ?? null,
      

      // Newly added fields
      mapLibreLocationInfo: mapLibreLocationInfo ?? null,

      fullAddress: fullAddress?.street ?? null,
 
    });
    

    return { statusCode: 201, message: 'Listing created!' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Something went wrong',
    })
  }
})
