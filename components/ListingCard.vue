<script lang="ts" setup>
import type { Listing, Reservation } from '~/types'
import { format } from 'date-fns'
import { ref, computed } from 'vue'
import ShowRequests from './ShowRequests.vue'

type ListingCardProps = {
  listing: Listing
  reservation?: Reservation
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  totalPrice?: number
}

const { listing, reservation } = defineProps<ListingCardProps>()
const emit = defineEmits(['action', 'favorited'])

const showRequestsModal = ref(false) // State for modal visibility
const requests = ref([
  { name: 'John Doe', message: 'Looking to book this cabin for a weekend.' },
  { name: 'Jane Smith', message: 'Is this listing still available?' },
])
const { getByValue } = useCountries()
const location = getByValue(listing.locationValue)
const price = computed(() => (reservation ? reservation.totalPrice : listing.price))
const reservationDate = computed(() => {
  if (!reservation) return null
  const start = new Date(reservation?.startDate)
  const end = new Date(reservation?.endDate)
  return `${format(start, 'PP')} - ${format(end, 'PP')}`
})
const parsedImageSrc = computed(() => {
  try {
    if (!listing.imageSrc) return []
    const decodedData = decodeURIComponent(listing.imageSrc)
    const validJson = decodedData.replace("{", "[").replace("}", "]")
    return JSON.parse(validJson)
  } catch (error) {
    console.error('Error parsing imageSrc:', error)
    return []
  }
})
function action(id: string) {
  emit('action', id)
}
function favorited(id: string) {
  emit('favorited', id)
}
</script>



<template>
  <div class="col-span-1 group">
    <div class="flex flex-col w-full gap-3 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
      <!-- Image Section -->
      <div class="relative w-full overflow-hidden aspect-square">
        <NuxtImg
          v-if="parsedImageSrc[0]"
          provider="cloudinary"
          sizes="100vw sm:80vw md:350px"
          :src="parsedImageSrc[0]"
          :alt="`Image of ${listing.title}`"
          format="webp"
          class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
        />
        <!-- Heart Button -->
        <div class="absolute top-3 right-3 z-10" @click="(e: MouseEvent) => e.preventDefault()">
          <HeartButton :listingId="listing.id" @favorited="favorited(listing.id)" />
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

        <!-- Show Requests Button -->
        <div>
          <DialogRoot>
            <DialogTrigger
              class="bg-green-500 border-2 border-green-600 text-white text-center relative disabled:bg-slate-400 disabled:text-gray-300 disabled:border-slate-400 text-lg font-medium rounded-lg hover:bg-green-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-200 w-full px-3 py-1.5"
            >
              Show Requests
            </DialogTrigger>

            <!-- Dialog Content (Modal) -->
            <DialogPortal>
              <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
              <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
              >
                <ShowRequests :requests="requests" />
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
        </div>
      </div>
    </div>
  </div>
</template>


