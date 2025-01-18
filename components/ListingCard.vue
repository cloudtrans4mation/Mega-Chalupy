<script lang="ts" setup>
import { format } from 'date-fns'
import { ref, computed } from 'vue'
import type { ListingCardProps } from '~/data/types';

const { listing, reservation } = defineProps<ListingCardProps>()
const emit = defineEmits(['action', 'favorited'])
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
    <div
      class="flex flex-col w-full gap-3 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
      <!-- Image Section -->
      <div class="relative w-full overflow-hidden aspect-square">
        <NuxtImg v-if="parsedImageSrc[0]" provider="cloudinary" sizes="100vw sm:80vw md:350px" :src="parsedImageSrc[0]"
          :alt="`Image of ${listing.title}`" format="webp"
          class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110" />
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
          <Button @click="action(actionId!)" small v-if="actionLabel" :disabled="!actionLabel" :label="actionLabel"
            style="background-color: blue;" />
        </div>

        <!-- Show Requests Button -->
        <div>
          <DialogRoot>
            <DialogTrigger
              class="text-center relative disabled:opacity-60 disabled:cursor-not-allowed rounded-lg hover:opacity-70 transition w-full bg-green-500 border-2 text-white py-1.5 text-sm font-light border-green-500 focus:outline-none">
              Show Requests
            </DialogTrigger>

            <DialogPortal>
              <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
              <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[25px] shadow-lg focus:outline-none z-[100]"
                style="width: 90%; max-width: 1200px; border-radius: 10px;">
                <DialogTitle class="text-black m-0 text-[20px] font-semibold">
                  Requests
                </DialogTitle>
                <DialogDescription class="text-black mt-[10px] mb-5 text-[15px] leading-normal">
                  The Process of accepting the requests is as follows:
                </DialogDescription>

                <!-- Table to Show Requests -->
                <div class="overflow-auto">
                  <table class="min-w-full bg-white border border-gray-300 rounded-lg text-black">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="px-4 py-2 text-left font-semibold">Request ID</th>
                        <th class="px-4 py-2 text-left font-semibold">User</th>
                        <th class="px-4 py-2 text-left font-semibold">Total Price</th>
                        <th class="px-4 py-2 text-left font-semibold">Status</th>
                        <th class="px-4 py-2 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(reservation, index) in requests" :key="index" class="border-t border-gray-300">
                        <td class="px-4 py-2">{{ reservation?.id }}</td>
                        <td class="px-4 py-2">{{ reservation?.user }}</td>
                        <td class="px-4 py-2">{{ reservation?.totalPrice }}</td>
                        <td class="px-4 py-2">{{ reservation?.status }}</td>
                        <td class="px-4 py-2 flex gap-2">
                          <button
                            class="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition focus:outline-none"
                            @click="acceptRequest(reservation?.id)">
                            Accept
                          </button>
                          <button
                            class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition focus:outline-none"
                            @click="refuseRequest(reservation?.id)">
                            Refuse
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="mt-4 flex justify-end">
                  <DialogClose as-child>
                    <button
                      class="bg-gray-300 text-black hover:bg-gray-400 focus:shadow-gray-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:outline-none">
                      Close
                    </button>
                  </DialogClose>
                </div>
                <DialogClose
                  class="text-gray-600 hover:bg-gray-200 focus:shadow-gray-300 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full focus:outline-none"
                  aria-label="Close">
                  <Icon icon="lucide:x" />
                </DialogClose>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped CSS for this component */
.bg-green-500 {
  background-color: #10B981;
  /* Tailwind green-500 */
}
.text-blackA11 {
  color: rgba(0, 0, 0, 0.11);
  /* Example color from @radix-ui/colors */
}
</style>