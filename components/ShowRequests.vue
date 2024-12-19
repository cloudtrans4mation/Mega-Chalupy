<script setup lang="ts">
import { ref } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

const showRequestsModal = ref(false)
const requests = ref([
  { name: 'John Doe', message: 'Looking to book this cabin for a weekend.' },
  { name: 'Jane Smith', message: 'Is this listing still available?' },
  { name: 'Michael Johnson', message: 'I would like to confirm the booking for next month.' },
])

function showRequests() {
  showRequestsModal.value = true
}

function closeRequestsModal() {
  showRequestsModal.value = false
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

        <!-- Show Requests Button -->
        <div>
          <Button
            @click="showRequests"
            small
            :label="'Show Requests'"
            style="background-color: green;" 
          />
        </div>
      </div>
    </div>
  </NuxtLink>

  <!-- Requests Modal -->
  <DialogRoot v-if="showRequestsModal">
    <DialogTrigger
      class="text-grass11 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
    >
      Show Requests
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          Requests Received
        </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          These are the requests received for your listing.
        </DialogDescription>
        <div class="overflow-y-auto max-h-[300px]">
          <ul>
            <li v-for="(request, index) in requests" :key="index" class="border-b py-2">
              <div class="font-semibold">{{ request.name }}</div>
              <div>{{ request.message }}</div>
            </li>
          </ul>
        </div>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Close
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
