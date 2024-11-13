<script lang="ts" setup>
import type { Listing, Reservation } from '~/types'
import { format } from 'date-fns'

type ListingCardProps = {
  listing: Listing
  reservation?: Reservation
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  totalPrice?: number
}

const { listing, reservation } = defineProps<ListingCardProps>()

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
</script>

<template>
  <NuxtLink
    class="col-span-1 group"
    :to="`/listings/${listing.id}`">
    <div class="flex flex-col w-full gap-3 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
      <!-- Image Section -->
      <div class="relative w-full overflow-hidden aspect-square">
        <NuxtImg
          provider="cloudinary"
          sizes="100vw sm:80vw md:350px"
          :src="listing.imageSrc"
          :alt="`Image of ${listing.title}`"
          format="webp"
          class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
        />
        <!-- Heart Button -->
        <div
          class="absolute top-3 right-3 z-10"
          @click="(e: MouseEvent) => e.preventDefault()">
          <HeartButton
            :listingId="listing.id"
            @click="(e: MouseEvent) => e.preventDefault()"
            @favorited="favorited(listing.id)"
          />
        </div>


      </div>
      <!-- Content Section -->
      <div class="p-4 flex flex-col gap-2">
        <div class="text-lg font-semibold truncate">
          {{ location?.flag }} {{ location?.label }}, {{ location?.region }}
        </div>
        <div class="font-light text-neutral-500 truncate">
          {{ reservationDate || listing.category }}
        </div>
        <div class="flex flex-row items-center gap-2">
          <div class="font-semibold text-xl">$ {{ totalPrice || price }}</div>
          <div v-if="!totalPrice && !reservation" class="font-light text-sm">
            per night
          </div>
        </div>
        <!-- Action Button -->
        <div>
          <Button
            @click="action(actionId!)"
            small
            v-if="actionLabel"
            :disabled="!actionLabel"
            :label="actionLabel"
            style="background-color: blue;"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
