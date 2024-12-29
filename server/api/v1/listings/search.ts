import { desc, eq, and, SQLWrapper, gte, lte, exists, not } from 'drizzle-orm'
import { db } from '~/server/db/drizzle';
import { listing } from '~/server/db/schema';

export default eventHandler(async event => {
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const pageSize = 12;

    const filters: SQLWrapper[] = [];

    // Add location filter if specified
    if (query.locationValue) {
      filters.push(eq(listing.locationValue, query.locationValue));
    }

    // Add more filters if needed (e.g., category, price range)
    if (query.category) {
      filters.push(eq(listing.category, query.category));
    }

    // Check if there are favoriteIds to filter by
    const favoriteIds = query.favoriteIds || [];
    if (favoriteIds.length > 0) {
      filters.push(inArray(listing.id, favoriteIds));
    }

    // Fetch listings with applied filters
    const listings = await db
      .select({
        id: listing.id,
        title: listing.title,
        imageSrc: listing.imageSrc,
        category: listing.category,
        price: listing.price,
        locationValue: listing.locationValue,
        createdAt: listing.createdAt,
      })
      .from(listing)
      .where(and(...filters)) // Apply all filters
      .orderBy(desc(listing.createdAt)) // Order by creation date
      .limit(pageSize) // Limit results for pagination
      .offset((page - 1) * pageSize); // Apply pagination offset

    // Handle no listings found
    if (!listings.length) {
      throw createError({
        statusCode: 404,
        message: 'No listings found',
      });
    }

    return listings;
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Something went wrong',
    });
  }
});
