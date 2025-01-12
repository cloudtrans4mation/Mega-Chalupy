<template>
  <nav class="flex pt-12 text-xs font-semibold text-zinc-400 w-full">
    <ul class="flex flex-wrap gap-1.5 justify-center items-center p-2.5 w-full bg-black">
      <li v-for="(label, index) in Object.keys(stepMap)" :key="index" class="flex-2 shrink">
        <button :class="[
          'gap-1.5 self-stretch px-10 py-1.5 my-auto min-h-[23px] rounded',
          selectedItem === stepMap[label] ? 'text-black bg-white' : 'bg-neutral-800'
        ]" @click="handleNavigation(label)">
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
    // Step map defines the numeric value associated with each label
    const stepMap = {
      'Type': 1,
      'Amenities': 2,
      'Photos': 3,
      'Description': 4,
      'Hosting': 5,
      'Location': 6,
      'Details': 7,
      'Price': 8,
      'Rooms': 9,
      'Finish up': 10
    };

    // Initial selection based on the current step
    const selectedItem = ref(stepMap[props.currentStep] || props.currentStep);

    watch(() => props.currentStep, (newStep) => {
      selectedItem.value = newStep;
    });

    function handleNavigation(label: string) {
      const stepValue = stepMap[label];
      selectedItem.value = stepValue;
      props.onStepChange?.(stepValue); // Ensure the function exists before calling
    }


    return {
      stepMap,
      selectedItem,
      handleNavigation
    };
  }
});
</script>
