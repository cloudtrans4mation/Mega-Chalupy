<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelCard',
  props: {
    hotelName: { type: String, required: true },
    distanceFromCastle: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviewCount: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    locationImageUrl: { type: String, required: true },
    verifiedImageUrl: { type: String, required: true },
    mapIconUrl: { type: String, required: true },
  },
  emits: ['showMap', 'showDetails'],
});
</script>

<template>
  <div class="hotel-card flex flex-col p-4 bg-white rounded-lg border border-black/10" role="article">
    <!-- Header Section -->
    <div class="header flex flex-col md:flex-row gap-4 w-full min-h-[240px]">
      <img :src="imageUrl" :alt="hotelName" loading="lazy" class="hotel-image object-contain w-full md:w-60 aspect-square" />
      <div class="content flex flex-col flex-1 text-xs">
        <!-- Title and Verification Badge -->
        <div class="title flex items-center gap-4 text-xl font-bold">
          <span class="hotel-name">{{ hotelName }}</span>
          <img :src="verifiedImageUrl" alt="Verified property badge" loading="lazy"
            class="verified-badge w-5 aspect-square" />
        </div>

        <!-- Description Section -->
        <div class="details mt-7">
          <button class="map-button font-bold text-left text-black" @click="$emit('showMap')">
            Show on map
          </button>
          <div class="location-info flex items-center gap-2.5 text-zinc-900">
            <img :src="mapIconUrl" alt="Map icon" loading="lazy" class="map-icon w-4 aspect-square" />
            <span>{{ distanceFromCastle }} km from castle</span>
          </div>
          <p class="description mt-7 leading-5 text-zinc-900">
            {{ description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="footer flex justify-between mt-7">
      <div class="review-section flex gap-5 items-center">
        <div class="review-details">
          <div class="review-label text-base text-zinc-900">Fabulous</div>
          <div class="review-count text-xs text-zinc-600">
            {{ reviewCount }} reviews
          </div>
        </div>
        <div class="rating flex items-center justify-center w-8 h-8 text-white text-base bg-black rounded-md"
          role="text" aria-label="Hotel rating">
          {{ rating }}
        </div>
      </div>

      <button class="details-button px-4 py-2 text-sm text-white bg-blue-600 rounded-lg border border-blue-600"
        @click="$emit('showDetails')">
        Go to details
      </button>
    </div>
  </div>
</template>

<style scoped>
.hotel-card {
  background-blend-mode: normal;
  width: 100%;
  max-width: 70%;
  margin: auto;
}

.hotel-image {
  background-blend-mode: normal;
}

.verified-badge {
  background-blend-mode: normal;
}

.map-button {
  background-blend-mode: normal;
}

.details-button {
  background-blend-mode: normal;
}

@media (max-width: 768px) {
  .hotel-card {
    max-width: 100%;
  }

  .header {
    flex-direction: column;
  }

  .hotel-image {
    width: 100%;
  }
}
</style>
