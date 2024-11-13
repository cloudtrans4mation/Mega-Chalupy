<template>

  <NuxtLink :to="`/listings/${listing.id}`">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">

      <div class="relative h-56 p-4 overflow-hidden">
        <div class="flex justify-end">

          <NuxtImg provider="cloudinary" sizes="100vw sm:80vw md:350px" :src="listing.imageSrc"
            :alt="`Image of ${listing.title}`" format="webp" class="absolute inset-0 w-full h-full object-cover" />
          <!-- Heart Button -->
          <div @click="(e: MouseEvent) => e.preventDefault()">
            <HeartButton :listingId="listing.id" @click="(e: MouseEvent) => e.preventDefault()"
              @favorited="favorited(listing.id)" />
          </div>

        </div>
      </div>
      <div class="p-4">
        <p class="uppercase tracking-wide text-sm font-bold text-gray-700"> {{ listing.title }} • {{
          listing.category }}
        </p>
        <p class=" text-gray-900">${{ totalPrice || price }} • Per Night</p>
        <p class="text-gray-700"> {{ location?.flag }} {{ location?.label }}, {{ location?.region }}
        </p>
      </div>
      <div class="flex p-4 border-t border-gray-300 text-gray-700">
        <div class="flex-1 inline-flex items-center">
          <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z">
            </path>
          </svg>
          <p><span class="text-gray-900 font-bold">{{ listing.roomCount }} </span> Bedrooms</p>
        </div>
        <div class="flex-1 inline-flex items-center">
          <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z">
            </path>
          </svg>
          <p><span class="text-gray-900 font-bold">{{ listing.bathroomCount }}</span> Bathrooms</p>
        </div>
      </div>
      <!----    <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
        <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Owner</div>
        <div class="flex items-center pt-2">
          <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3"
            style="background-image: url(/avatar.webp)">
          </div>
          <div>
            <p class="font-bold text-gray-900">{{ user?.name }}</p>
          </div>
        </div>
      </div> ---->
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { format } from 'date-fns'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SwiperForListingCard from './SwiperForListingCard.vue';
import type { AuthUser, Listing } from '~/types'; // Make sure to import necessary types
import 'swiper/css';
import { EffectCards } from 'swiper/modules';

import 'swiper/css/effect-cards';


type ListingCardProps = {
  listing: Listing;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  totalPrice?: number;
  title?: string;
  user: AuthUser;
  roomCount?: number;
  guestCount?: number;
  bathroomCount?: number;
  description?: string;
  locationValue: string;
  category:
  | {
    icon: string;
    label: string;
    description: string;
  }
  | undefined;

};


// Correct usage: defineProps should be called once
const props = defineProps<ListingCardProps>();

// Destructure the props directly from the props object
const { listing, reservation, locationValue } = props;

const { getByValue } = useCountries()
const location = getByValue(listing.locationValue)
const price = computed(() => (reservation ? reservation.totalPrice : listing.price))
const reservationDate = computed(() => {
  if (!reservation) return null

  const start = new Date(reservation?.startDate)
  const end = new Date(reservation?.endDate)

  return `${format(start, 'PP')} - ${format(end, 'PP')}`
})

const emit = defineEmits(['action', 'favorited'])

function action(id: string) {
  emit('action', id)
}

function favorited(id: string) {
  emit('favorited', id)
}

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
