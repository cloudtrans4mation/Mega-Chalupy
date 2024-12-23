<template>
  <NuxtLink :to="`/listings/${listing.id}`">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      <!-- Image Slider Section -->
      <div class="relative h-56 overflow-hidden">
        <swiper
          class="image-slider"
          :pagination="{ clickable: true }"
          :navigation="true"
          :lazy="true"
          :modules="modules"
        >
          <swiper-slide
            v-for="(image, index) in parsedImages"
            :key="index"
          >
            <NuxtImg
              v-if="image"
              provider="cloudinary"
              sizes="100vw sm:80vw md:350px"
              :src="image"
              :alt="`Image of ${listing.title}`"
              format="webp"
              class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
            />
          </swiper-slide>
        </swiper>

        <!-- Heart Button -->
        <div
          class="absolute top-4 right-4"
          @click.stop
        >
          <HeartButton
            :listingId="listing.id"
            @favorited="favorited(listing.id)"
          />
        </div>
      </div>

      <!-- Details Section -->
      <div class="p-4">
        <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
          {{ listing.title }} • {{ listing.category }}
        </p>
        <p class="text-gray-900">
          ${{ totalPrice || price }} • Per Night
        </p>
        <p class="text-gray-700">
          {{ location?.flag }} {{ location?.label }}, {{ location?.region }}
        </p>
      </div>

      <!-- Info Section -->
      <div class="flex p-4 border-t border-gray-300 text-gray-700">
        <!-- Bedrooms -->
        <div class="flex-1 flex items-center">
          <svg
            class="h-6 w-6 text-gray-600 fill-current mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z" />
          </svg>
          <p>
            <span class="text-gray-900 font-bold">{{ listing.roomCount }}</span>
            Bedrooms
          </p>
        </div>

        <!-- Bathrooms -->
        <div class="flex-1 flex items-center">
          <svg
            class="h-6 w-6 text-gray-600 fill-current mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill-rule="evenodd" d="M17.03 21H7.97... (rest unchanged)" />
          </svg>
          <p>
            <span class="text-gray-900 font-bold">{{ listing.bathroomCount }}</span>
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import type { AuthUser, Listing } from '~/types';

type ListingCardProps = {
  listing: Listing;
  totalPrice?: number;
  user: AuthUser;
  locationValue: string;
  category: {
    icon: string;
    label: string;
    description: string;
  } | undefined;
};

const props = defineProps<ListingCardProps>();
const { listing } = props;

const { getByValue } = useCountries();
const location = getByValue(listing.locationValue);

const price = computed(() => listing.price);

const emit = defineEmits(['action', 'favorited']);

function favorited(id: string) {
  emit('favorited', id);
}

const modules = [Pagination, Navigation];

const parsedImages = computed(() => {
  if (Array.isArray(listing.imageSrc)) return listing.imageSrc;
  if (typeof listing.imageSrc === 'string') {
    try {
      const decodedStr = decodeURIComponent(listing.imageSrc).replace(/[{}"]/g, '');
      return decodedStr.split(',').map(url => url.trim()).filter(Boolean);
    } catch {
      return [];
    }
  }
  return [];
});
</script>

<style scoped>
/* Image Slider Container */
.image-slider {
  width: 100%;
  height: 180px; /* Adjust slider height */
  position: relative;
  background-color: white;
  border-radius: 10px;
  overflow: hidden; /* Prevent image overflow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
}

/* Swiper Slide Styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease; /* Smooth zoom effect */
}

/* Hover effect on image */
.swiper-slide img:hover {
  transform: scale(1.05); /* Slight zoom effect */
}

/* Navigation Buttons - Custom Airbnb Style with White Background */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 36px; /* Slightly larger for better interaction */
  height: 36px; /* Slightly larger for better interaction */
  background-color: white; /* White background */
  color: #000; /* Black arrows */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Light border */
  border-radius: 50%; /* Circular shape */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; /* Font size for arrows */
  z-index: 10; /* Ensure buttons appear above content */
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease; /* Smooth transition */
  opacity: 1; /* Full opacity */
}

/* Right arrow (next) positioning */
:deep(.swiper-button-next) {
  right: 15px; /* Position on the right */
  transform: translateY(-50%); /* Vertically center */
}

/* Left arrow (prev) positioning */
:deep(.swiper-button-prev) {
  left: 15px; /* Position on the left */
  transform: translateY(-50%); /* Vertically center */
}

/* Hover effect for buttons (subtle lazy effect) */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: #f1f1f1; /* Light gray background on hover */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */
  transform: scale(1.05); /* Slight scaling on hover */
}

/* Custom arrow icons */
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px; /* Font size for arrows */
  font-weight: bold; /* Bold arrows */
}

/* Pagination Dots */
:deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* Grayish inactive dots */
  opacity: 1;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for dots */
}

/* Active pagination dot */
:deep(.swiper-pagination-bullet-active) {
  background-color: #000; /* Active dot color */
  width: 10px;
  height: 10px;
  transform: scale(1.2); /* Slightly enlarge active dot */
}

/* Custom Swiper Styles */
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden; /* Prevent image overflow */
}

/* Custom Pagination for swiper */
:deep(.swiper-pagination) {
  bottom: 10px;
  z-index: 5;
}
</style>








