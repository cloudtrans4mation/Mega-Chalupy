<script setup lang="ts">
import { ref } from 'vue';
import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperSeparator, StepperTitle, StepperTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'
import WhatWeAreLookingFor from '~/components/experiences/WhatWeAreLookingFor.vue';




const selectedPlace = ref<{ lat: number; lng: number } | null>(null);
const selectedLanguages = ref<string[]>([]);


const handlePlace = (place: { lat: number; lng: number }) => {
  selectedPlace.value = place;
  console.log('Selected Place:', selectedPlace.value);
};

const handleLanguages = (languages: string[]) => {
  selectedLanguages.value = languages;
  console.log('Selected Languages:', selectedLanguages.value);
};

const {
  ExperienceValues,
  steps,
  isLoading,
  errors,
  onNext,
  onBack,
  // add,
  // reduce,
  // categorySelected,
  // locationSelected,
  // createListing,
  // imagePublicId,
  // setPropertyAccessoriesSelected,
  // setPropertyGuidelinesSelected,
  // setRoomInfoFormSelected,
  // setAccommodationSelectionSelected,
  // setRoomAmenitiesSelected,
} = useCreateExperience();

useSeoMeta({
  title: 'Create Experience',
});

const selectedButton = ref<string | null>(null);
const currentStep = ref<STEPSFOREXPERIENCE>(STEPSFOREXPERIENCE.YOUR_IDEA); // Default to the first step
const currentTitle = ref<string>(STEP_LABELS[STEPSFOREXPERIENCE.YOUR_IDEA]);
const currentNumber = ref<number>(0);

const updateNavigation = (step: STEPSFOREXPERIENCE) => {
  currentStep.value = step;
  currentTitle.value = STEP_LABELS[step];
  currentNumber.value = Object.keys(STEP_LABELS).indexOf(step.toString());
};

function toggleSelection(label: string) {
  selectedButton.value = selectedButton.value === label ? null : label;

  const step = Object.entries(STEP_LABELS).find(
    ([, stepLabel]) => stepLabel === label
  )?.[0] as STEPSFOREXPERIENCE | undefined;

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
        <div v-if="steps === STEPSFOREXPERIENCE.GETTINGSTARTED">
          <ExperiencesGettingStarted></ExperiencesGettingStarted>
          <Button class="bg-blue-500 text-white px-4 py-2 rounded-md" label="Next" @click="onNext" />
        </div>
        <!-- Step 2: Category Selection -->
        <div v-if="steps === STEPSFOREXPERIENCE.YOUR_IDEA">
          <Heading title="In which city do you want to organize your experience ?" subTitle="Exact location ." />
          <div class="py-8" style="padding-bottom: 150px;">
            <ExperiencesAutoCompletePlace @update:place="handlePlace" @update:languages="handleLanguages" />

            <Heading title="Theme" subTitle="You can pick mutiple categories" />
            <ExperiencesThemeExperience></ExperiencesThemeExperience>

          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>

        </div>
        <!-- Step 3: Accessories -->
        <div v-if="steps === STEPSFOREXPERIENCE.WHAT_WE_ARE_LOOKING_FOR">
          <Heading title="Theme" subTitle="You can pick mutiple categories" />
          <div class="py-8">
            <ExperiencesWhatWeAreLookingFor></ExperiencesWhatWeAreLookingFor>
          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4 ">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 4: Specifications -->

        <div v-if="steps === STEPSFOREXPERIENCE.EXPERIENCE_PAGE">
          <div class="grid ">
            <ExperiencesExperiencePage></ExperiencesExperiencePage>


          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 5: Hosting Options -->

        
        <div v-if="steps === STEPSFOREXPERIENCE.PROGRAM_DETAILS">
          <div class="grid ">

            <ExperiencesWhatWillYouProvide></ExperiencesWhatWillYouProvide>

          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>
        <!-- Step 6: Room Amenities -->
        <div v-if="steps === STEPSFOREXPERIENCE.ABOUT_YOU">
          <div class="grid ">
            <ExperiencesWhatWillYouProvide></ExperiencesWhatWillYouProvide>
          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>


        <!-- Step 7: Things -->

        <div v-if="steps === STEPSFOREXPERIENCE.LOCATION">
          <div class="grid ">
            <ExperiencesWhatWillYouProvide></ExperiencesWhatWillYouProvide>
          </div>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 8: Images -->

        <!-- Step 9: Location -->

        <!-- Step 10: Type -->

        <!-- Step 11: Info -->

        <!-- Step 12: Description -->

        <!----------------------------------------------------------->

        <!----------------------------------------------------------->
        <div class="flex flex-col gap-8" v-if="steps === STEPSFOREXPERIENCE.PROPOSAL_SENT">
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

                <video loading="eager" src="public/finish.mp4"
                  alt="Illustration representing the finish and publish step"
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


  <!-- <NavigationForm :currentStep="currentStep" :currentTitle="currentTitle" :currentNumber="currentNumber" /> -->

</template>
