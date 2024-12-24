<template>
  <section class="px-4 py-6 sm:px-8 md:px-12 lg:px-16 bg-white text-black">
    <header class="flex flex-col space-y-1">
      <!-- Dynamic Title and Subtitle Section -->
      <div :class="`${center ? 'text-center' : 'text-start'}`">
        <h1 class="text-3xl font-bold leading-tight">
          {{ title }}
        </h1>
      </div>

      <!-- Property Details Section (Directly Below the Title) -->
      <div class="flex flex-wrap items-center justify-between text-sm mt-2">
        <!-- Ratings and Location -->
        <div class="flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45741a4f68ed5bf3cd2e97756ca5f4f158a89eebd516d72bd71547dc37bfd19?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="Star Icon" class="w-4 h-4" />
            <span>5.0</span>
          </div>
          <a href="#reviews" class="underline">0 reviews</a>
          <div class="flex items-center gap-2 text-gray-500">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1162eb8ee62f8ae01a1ccad66338a1ae042073f1ad4aa6e543ec0aa629f10b85?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="Superhost Icon" class="w-4 h-4" />
            <span>Host</span>
          </div>
          <a href="#location" class="text-gray-500 underline">
            {{ subTitle }}
          </a>
        </div>

        <!-- Action Links (Share and Save) -->
        <div class="flex gap-4 text-black">
          <a class="flex items-center gap-1 cursor-pointer hover:underline" @click="shareProperty">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20242f213dd9d7afd719f1de27156ebe8479261606af202808d7d7b66456e7fb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="Share Icon" class="w-4 h-4" />
            <span>Share</span>
          </a>


          <ToastProvider>
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c070cdf2a1a3d989c1bd587a9529e53d3db60e59d55671b373ac63695a746269?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="Save Icon" class="w-4 h-4" />
            <button class="flex items-center gap-1 cursor-pointer hover:underline" @click="handleClick">
              Save
            </button>
            <ToastRoot v-model:open="open"
              class="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
              <ToastTitle class="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                Listing Added Successfully
              </ToastTitle>
              <ToastDescription as-child>
              
              </ToastDescription>
              <ToastAction class="[grid-area:_action]" as-child alt-text="Goto schedule to undo">
                <button
                  class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                  Undo
                </button>
              </ToastAction>
            </ToastRoot>
            <ToastViewport
              class="[--viewport-padding:_25px] fixed top-0 left-1/2 transform -translate-x-1/2 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
          </ToastProvider>


        </div>
      </div>
    </header>
  </section>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ToastAction, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'radix-vue'
type HeadingProps = {
  title: string
  subTitle?: string
  center?: boolean
  danger?: boolean
}

const { title, subTitle, center, danger } = defineProps<HeadingProps>();

const subtitleClasses = computed(() =>
  `mt-2 ${danger ? 'text-red-600 font-semibold' : 'font-light text-neutral-500'}`,
);


function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}

// Dummy implementation for share and save actions
function shareProperty() {
  alert("Property shared!");
}


const open = ref(false)
const eventDateRef = ref(new Date())
const timerRef = ref(0)
function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}
function handleClick() {
  open.value = false
  window.clearTimeout(timerRef.value)
  timerRef.value = window.setTimeout(() => {
    eventDateRef.value = oneWeekAway()
    open.value = true
  }, 100)
}
</script>

<style scoped>
/* General padding and font adjustments */
section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Responsive padding adjustments */
@media (min-width: 640px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>