<<script lang="ts" setup>
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

import {
  StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperSeparator, StepperTitle,
  StepperTrigger
} from 'radix-vue'

const steps = [{
  step: 1,
  title: 'Requests',
  description: 'Accept the request you want',
  icon: 'radix-icons:home',
}, {
    step: 2,
    title: 'Payment of Approved requests',
    description: 'Set your preferred shipping method',
    icon: 'radix-icons:archive',
  }, {
    step: 3,
    title: 'Checkin & Checkout',
    description: 'Checkin & Checkout',
    icon: 'radix-icons:check',
    }]
    </script>



    <template>
      <div class="col-span-1 group">
        <div
          class="flex flex-col w-full gap-3 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
          <!-- Image Section -->
          <div class="relative w-full overflow-hidden aspect-square">
            <NuxtImg v-if="parsedImageSrc[0]" provider="cloudinary" sizes="100vw sm:80vw md:350px"
              :src="parsedImageSrc[0]" :alt="`Image of ${listing.title}`" format="webp"
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
                  Show Requests</DialogTrigger>

                <DialogPortal>
                  <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
                  <DialogContent
                    class="bg-green-500 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
                    <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                      Requests </DialogTitle>
                    <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                      The Process of accepting the requests is as follow : </DialogDescription>

                    <!-------------------------------------------->
                    <StepperRoot :default-value="2" class="   flex gap-2 w-full max-w-[32rem]">
                      <StepperItem v-for="item in steps" :key="item.step"
                        class="w-full flex justify-center gap-2 cursor-pointer group data-[disabled]:pointer-events-none relative px-4"
                        :step="item.step">
                        <StepperTrigger
                          class="inline-flex items-center group-data-[disabled]:text-gray-400 group-data-[state=active]:bg-green11 group-data-[state=active]:text-white justify-center rounded-full text-gray-400 w-10 h-10 shrink-0 bg-gray-300 group-data-[state=completed]:bg-white group-data-[state=completed]:text-green10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                          <StepperIndicator>
                            <Icon :icon="item.icon" class="w-5 h-5" />
                          </StepperIndicator>
                        </StepperTrigger>

                        <StepperSeparator v-if="item.step !== steps[steps.length - 1].step"
                          class="absolute block top-5 left-[calc(50%+30px)] right-[calc(-50%+20px)] h-0.5 rounded-full group-data-[disabled]:bg-gray-300 bg-gray-300 group-data-[state=completed]:bg-white bg-green5 shrink-0" />

                        <div
                          class="absolute text-center top-full left-0 w-full mt-2 text-white group-data-[state=inactive]:text-gray-300">
                          <StepperTitle class="font-medium">
                            {{ item.title }}
                          </StepperTitle>
                          <StepperDescription class="hidden sm:block text-xs">
                            {{ item.description }}
                          </StepperDescription>
                        </div>
                      </StepperItem>
                    </StepperRoot>


                    <!-------------------------------------------->

                    <div class="mt-[25px] flex justify-end">
                      <DialogClose as-child>
                        <button
                          class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                        </button>
                      </DialogClose>
                    </div>
                    <DialogClose
                      class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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