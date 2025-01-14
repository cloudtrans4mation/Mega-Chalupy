<script setup lang="ts">
import { ref } from 'vue';
import { toRaw } from 'vue';
import AccommodationSelection from '~/components/host-special/AccommodationSelection.vue';
import RoomAmenities from '~/components/host-special/RoomAmenities.vue';
import PropertyAccessories from '~/components/host-special/PropertyAccessories.vue';
import RoomInfoForm from '~/components/host-special/room-info-form/RoomInfoForm.vue';
import PropertyGuidelines from '~/components/host-special/room-info-form/PropertyGuidelines.vue';
import GettingStarted from '~/components/GettingStarted.vue';
import ImageUploadForListingCreation from '~/components/ImageUploadForListingCreation.vue';
import FullAddress from '~/components/FullAddress.vue';
import NavigationForm from '~/components/NavigationForm.vue'; // Import NavigationForm
import { categories, things, buttons } from '~/data/constants';

let {
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
  setMapLibreLocation, // For setting map location (latitude, longitude)
  setFullAddress, // For setting the full address (street, apt, city, region)
} = useCreateListing();

useSeoMeta({
  title: 'Create Listing',
});

// Define state variables
const selectedButton = ref<string | null>(null); // This will store the selected button label
const currentStep = ref(STEPS.GETTINGSTARTED); // Current step

// Handle step change emitted by the child component
function handleStepChange(step: number) {
  console.log('Step changed to:', step);
  steps.value = step;
}

// Define button selection behavior
function toggleSelection(label: string) {
  selectedButton.value = selectedButton.value === label ? null : label; // Toggle selection on click
}

const formValues = ref<Record<string, any>>({});
const geocode = ref<{ lat: number; lon: number } | null>(null);

const handleGeocode = (geocodeData: { lat: number; lon: number }) => {
  geocode.value = geocodeData; // Store the received geocode data
  console.log('Received Geocode Data:', geocodeData); // Debug or process the data as needed
  setMapLibreLocation(toRaw(geocodeData));
};

// Function to handle form data emitted by FullAddress
function handleFormChange(updatedForm: any) {
  formValues.value = updatedForm; // Update formValues with emitted data
  const rawData = toRaw(formValues.value); // Convert formValues to raw data
  setFullAddress(rawData);
  console.log('Received Form Data:', rawData); // Debug or process the data as needed
}
</script>




<template>
  <section class="relative w-full h-full max-w-2xl px-4 mx-auto my-6 mt-16 md:h-auto lg:h-auto md:px-0">
    <transition name="fade" mode="out-in">
      <div :key="steps">
        <!-- Step 1: Getting Started -->
        <div v-if="steps === STEPS.GETTINGSTARTED">
          <GettingStarted></GettingStarted>
          <Button class="bg-blue-500 text-white px-4 py-2 rounded-md" label="Next" @click="onNext" />
        </div>

        <!-- Step 2: Category Selection -->
        <div v-if="steps === STEPS.CATEGORY">
          <Heading title="Where Your Rental Located?" subTitle="Pick a category" />
          <div class="grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
            <CategoryInput v-for="category in categories" :key="category.label"
              :selected="listingValues.category === category.label" @categorySelect="categorySelected"
              :label="category.label" :icon="category.icon" />
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">

            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>

        </div>

        <!-- Step 3: Accessories -->
        <div v-if="steps === STEPS.ACCESSORIES">
          <Heading title="Choose your Property Accessories ..." subTitle="Pick a category" />
          <div>
            <PropertyAccessories @PropertyAccessoriesSelected="setPropertyAccessoriesSelected" />
            <PropertyGuidelines @PropertyGuidelinesSelected="setPropertyGuidelinesSelected"></PropertyGuidelines>
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 4: Specifications -->
        <div v-if="steps === STEPS.SPECIFICATION">
          <Heading title="Enter your Property specifications ..." subTitle="Pick a category" />
          <div>
            <RoomInfoForm @RoomInfoFormSelected="setRoomInfoFormSelected"></RoomInfoForm>
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 5: Hosting Options -->
        <div v-if="steps === STEPS.HOSTINGOPTIONS">
          <Heading title="What type of place will your guests have?" subTitle="Pick a category" />
          <div>
            <AccommodationSelection @AccommodationSelectionSelected="setAccommodationSelectionSelected">
            </AccommodationSelection>
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 6: Room Amenities -->
        <div v-if="steps === STEPS.ROOMAMENTIES">
          <Heading title="Choose your Room Amenities ..." subTitle="Pick a category" />
          <div>
            <RoomAmenities @RoomAmenitiesSelected="setRoomAmenitiesSelected"></RoomAmenities>
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 7: Things -->
        <div v-if="steps === STEPS.THINGS">
          <Heading title="Tell the guest What you have in the place?"
            subTitle="Please choose what amenities you have?" />
          <div class="grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
            <CategoryInput v-for="thing in things" :key="thing.label" :selected="listingValues.category === thing.label"
              @categorySelect="categorySelected" :label="thing.label" :icon="thing.icon" />
          </div>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 8: Images -->
        <div v-if="steps === STEPS.IMAGES">
          <Heading title="Add a photo of your place" subTitle="What you have in the place?" />
          <ClientOnly>
            <ImageUploadForListingCreation v-model="listingValues.imageSrc" @imagePublicId="imagePublicId" />
          </ClientOnly>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button label="Next" :disabled="!listingValues.imageSrc" @click="onNext" style="background-color: blue;" />
          </div>
        </div>

        <!-- Step 9: Location -->
        <div v-if="steps === STEPS.LOCATION">
          <Heading title="Where is your place located?" subTitle="Help guests find you!" />
          <ClientOnly>
            <div class="component-container">
              <MapLibreLocation @update:geocode="handleGeocode" />
              <CountrySelect :selectedCountry="listingValues?.locationValue" @countrySelect="locationSelected" />
              <FullAddress @formChange="handleFormChange" />
            </div>
            <!-- <Map :center="listingValues?.locationValue?.latlng" /> -->
          </ClientOnly>

          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 10: Type -->
        <div v-if="steps === STEPS.TYPE">
          <Heading title="Choose What type of rental you offer?" subTitle="What type of rental you offer?" />
          <section class="flex flex-col w-full max-md:max-w-full">
            <div class="flex flex-wrap gap-4 justify-center items-start w-full max-md:max-w-full">
              <button v-for="button in buttons" :key="button.label" :class="[
                'flex gap-2.5 justify-center items-center px-5 py-2.5 text-sm font-medium whitespace-nowrap border-2 border-solid rounded-[31px] transition-colors duration-300',
                selectedButton === button.label
                  ? 'bg-gray-500 border-black text-white'
                  : 'bg-neutral-100 border-black text-black'
              ]" @click="toggleSelection(button.label)">
                <img :src="button.imgSrc" alt=""
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
                <span class="self-stretch my-auto">{{ button.label }}</span>
              </button>
            </div>
          </section>
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" :disabled="!listingValues.locationValue" label="Next"
              @click="onNext" />
          </div>
        </div>

        <!-- Step 11: Info -->
        <div class="flex flex-col gap-8" v-if="steps === STEPS.INFO">
          <Heading title="Share some basics about your place" subTitle="What amenities do you have?" />
          <Counter title="Guests" subtitle="How many guests do you allow?" :value="listingValues.guestCount" @add="add"
            @reduce="reduce" />
          <hr />
          <Counter title="Rooms" subtitle="How many rooms do you have?" :value="listingValues.roomCount" @add="add"
            @reduce="reduce" />
          <hr />
          <Counter title="Bathrooms" subtitle="How many bathrooms do you have?" :value="listingValues.bathroomCount"
            @add="add" @reduce="reduce" />
          <div class="flex flex-col gap-4 md:flex-row">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" :disabled="!listingValues.guestCount ||
              !listingValues.roomCount ||
              !listingValues.bathroomCount
              " label="Next" @click="onNext" />
          </div>
        </div>

        <!-- Step 12: Description -->
        <div v-if="steps === STEPS.DESCRIPTION">
          <Heading title="How would you describe your place?" subTitle="Short and sweet works best!" />
          <Input id="Title" label="Title" v-model="listingValues.title" :disabled="isLoading" :error="errors.title"
            required />
          <hr />
          <Input id="Description" label="Description" v-model="listingValues.description" :disabled="isLoading"
            :error="errors.description" required />
          <div class="flex flex-col gap-4 md:flex-row pt-4">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" label="Next" @click="onNext" />
          </div>
        </div>

        <!----------------------------------------------------------->
        <div class="flex flex-col gap-8" v-if="steps === STEPS.PRICE">
          <Heading title="Please set your price" subTitle="How much do you charge per night?" />
          <Input id="Price" label="Price" type="number" v-model="listingValues.price" :disabled="isLoading"
            :error="errors.price" formatPrice required />
          <div class="flex flex-col gap-4 md:flex-row">
            <Button label="Back" outline @click="onBack" />
            <Button style="background-color: blue;" :disabled="!listingValues.price" label="Next" @click="onNext" />
          </div>
        </div>
        <!----------------------------------------------------------->
        <div class="flex flex-col gap-8" v-if="steps === STEPS.PUBLISH">
          <section class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
              <article class="flex flex-col self-stretch my-auto min-w-[240px] w-[342px] max-md:w-full">
                <header class="flex flex-col w-full">
                  <h2 class="text-sm font-bold leading-none text-neutral-500">Step 3</h2>
                  <h1 class="mt-4 text-4xl font-semibold leading-[50px] text-slate-800">
                    Finish up and publish
                  </h1>
                </header>
                <p class="mt-8 text-lg text-black max-md:mt-6">
                  Finally, you'll choose booking settings...
                </p>
              </article>
              <div class="relative flex items-center justify-center w-[342px] h-[342px] max-md:w-full max-md:h-auto">
                <video loading="eager" src="public/finish.mp4"
                  alt="Illustration representing the finish and publish step"
                  class="object-contain self-stretch my-auto aspect-square min-w-[240px] w-full h-full max-md:max-w-full"
                  autoplay muted loop></video>
              </div>
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


  <NavigationForm :currentStep="currentStep" :onStepChange="handleStepChange" />

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

.bg-gray-500 {
  background-color: #8e929e;
}

.border-black {
  border-color: #000;
}

.component-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* Adjust this value to control the spacing */
  padding: 10px;
  /* Optional: add some padding around the entire container */
}

@media (max-width: 768px) {
  .component-container {
    gap: 15px;
    /* Adjust the gap for smaller screens if needed */
    padding: 8px;
    /* Adjust the padding for smaller screens */
  }
}
</style>