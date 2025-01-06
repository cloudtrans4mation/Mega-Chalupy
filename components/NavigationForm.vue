<template>
  <nav class="flex pt-12 text-xs font-semibold text-zinc-400 w-full">
    <ul class="flex flex-wrap gap-1.5 justify-center items-center p-2.5 w-full bg-black">
      <li v-for="(label, index) in Object.keys(stepMap)" :key="index" class="flex-2 shrink">
        <button
          :class="[ 
            'gap-1.5 self-stretch px-10 py-1.5 my-auto min-h-[23px] rounded',
            selectedItem === stepMap[label] ? 'text-black bg-white' : 'bg-neutral-800'
          ]"
          @click="handleNavigation(label)"
        >
          {{ label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Ensure the navigation bar spans across the full width of the screen on large devices */
@media (min-width: 1024px) {
  nav {
    width: 100%;
  }
}
</style>


<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

// Assuming STEPS is imported from the relevant module
import { STEPS } from '~/composables/useCreateListing'


const {
  listingValues,
  steps,
  isLoading,
  errors,
  onNext,
  onBack,
  add,
  reduce,

} = useCreateListing()

export default defineComponent({
  name: 'NavigationForm',
  props: {
    currentStep: {
      type: String,
      required: true
    },
    onStepChange: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const stepMap = {
      'Type': STEPS.TYPE,
      'Amenities': STEPS.THINGS,
      'Photos': STEPS.IMAGES,
      'Description': STEPS.DESCRIPTION,
      'Hosting': STEPS.INFO,
      'Location': STEPS.LOCATION,
      'Details': STEPS.INFO,
      'Price': STEPS.PRICE,
      'Rooms': STEPS.INFO,
      'Finish up': STEPS.PUBLISH
    };

    // Set initial selected item based on currentStep prop
    const selectedItem = ref(stepMap[props.currentStep] || props.currentStep);

    watch(() => props.currentStep, (newStep) => {
      selectedItem.value = newStep;
    });

    function handleNavigation(label: string) {
      selectedItem.value = stepMap[label];
      props.onStepChange(stepMap[label]);
      onNext
    }
    

    return {
      stepMap,
      selectedItem,
      handleNavigation
    };
  }
  
});
</script>
