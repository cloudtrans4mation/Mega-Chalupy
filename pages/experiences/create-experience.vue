<script setup lang="ts">
import { ref } from 'vue';
import { useCreateListing } from '~/composables/useCreateListing'; // Assuming a custom composable for managing listings
import { STEPS, STEP_LABELS } from '~/data/constants';
import AccommodationSelection from '~/components/host-special/AccommodationSelection.vue';
import RoomAmenities from '~/components/host-special/RoomAmenities.vue';
import PropertyAccessories from '~/components/host-special/PropertyAccessories.vue';
import RoomInfoForm from '~/components/host-special/room-info-form/RoomInfoForm.vue';
import PropertyGuidelines from '~/components/host-special/room-info-form/PropertyGuidelines.vue';
import ImageUploadForListingCreation from '~/components/ImageUploadForListingCreation.vue';
import GettingStarted from '~/components/experiences/GettingStarted.vue';

const {
  listingValues,
  steps,
  isLoading,
  errors,
  onNext,
  onBack,
  add,
  reduce,
  categorySelected,
  locationSelected,
  createListing,
  imagePublicId,
  setPropertyAccessoriesSelected,
  setPropertyGuidelinesSelected,
  setRoomInfoFormSelected,
  setAccommodationSelectionSelected,
  setRoomAmenitiesSelected,
} = useCreateListing();

useSeoMeta({
  title: 'Create Listing',
});

const selectedButton = ref<string | null>(null);
const currentStep = ref<STEPS>(STEPS.YOUR_IDEA); // Default to the first step
const currentTitle = ref<string>(STEP_LABELS[STEPS.YOUR_IDEA]);
const currentNumber = ref<number>(0);

const updateNavigation = (step: STEPS) => {
  currentStep.value = step;
  currentTitle.value = STEP_LABELS[step];
  currentNumber.value = Object.keys(STEP_LABELS).indexOf(step.toString());
};

function toggleSelection(label: string) {
  selectedButton.value = selectedButton.value === label ? null : label;

  const step = Object.entries(STEP_LABELS).find(
    ([, stepLabel]) => stepLabel === label
  )?.[0] as STEPS | undefined;

  if (step !== undefined) {
    updateNavigation(step);
  }
}
</script>


<template>



  <section class="relative w-full h-full max-w-2xl px-4 mx-auto my-6 mt-16 md:h-auto lg:h-auto md:px-0">
    <transition name="fade" mode="out-in">
      <div :key="steps">
        <!-- Step 1: Getting Started -->
        

        <!-- Step 2: Category Selection -->
    

        <!-- Step 3: Accessories -->


        <!-- Step 4: Specifications -->


        <!-- Step 5: Hosting Options -->

        <!-- Step 6: Room Amenities -->
 
        <!-- Step 7: Things -->
  
        <!-- Step 8: Images -->


        <!-- Step 9: Location -->
   

        <!-- Step 10: Type -->
   
        <!-- Step 11: Info -->
    

        <!-- Step 12: Description -->
        
        <!----------------------------------------------------------->
    
        <!----------------------------------------------------------->
        <div class="flex flex-col gap-8" v-if="steps === STEPS.PUBLISH">
          <section class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
              <article class="flex flex-col self-stretch my-auto min-w-[240px] w-[342px]">
                <header class="flex flex-col w-full">
                  <h2 lass="text-sm font-bold leading-none text-neutral-500">Step 3</h2>
                  <h1 class="mt-4 text-4xl font-semibold leading-[50px] text-slate-800">
                    Finish up and publish
                  </h1>
                </header>
                <p class="mt-16 text-lg text-black max-md:mt-10">
                  Finally, you'll choose booking settings...
                </p>

                <video loading="eager" src="public/finish.mp4" alt="Illustration representing the finish and publish step"
                  class="object-contain self-stretch my-auto aspect-square min-w-[240px] w-[70px] max-md:max-w-full"
                  autoplay muted loop>
                </video>
              </article>
            </div>
          </section>
          <div class="flex flex-col gap-4 md:flex-row">
            <Button label="Back" outline @click="onBack" />
            <Button label="Create" @click="createListing" style="background-color: blue;" />
          </div>
        </div>
        <!----------------------------------------------------------->
      </div>
    </transition>
  </section>


  <NavigationForm :currentStep="currentStep" :currentTitle="currentTitle" :currentNumber="currentNumber" />

</template>


<style>
input {
  border: none;
  outline: none;
  /* Removes the outline when input is focused */
}

/* Basic Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide Transition Example */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  /* Slide in from the right */
}

/* You can customize more animations depending on your needs */

/* Slide Transition Example */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  /* Slide in from the right */
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
  /* After entering, return to original position */
}
</style>