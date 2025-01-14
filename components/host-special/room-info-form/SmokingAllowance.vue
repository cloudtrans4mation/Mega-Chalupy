<template>
  <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
    <label for="smoking-allowance" class="text-base font-semibold leading-none text-black max-md:max-w-full">
      Smoking Allowance
    </label>
    <div class="flex flex-wrap gap-10 justify-between items-center px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full">
      <select
        id="smoking-allowance"
        class="self-stretch my-auto w-full bg-transparent border-none focus:outline-none appearance-none cursor-pointer"
        @change="onSmokingAllowanceChange"
      >
        <option value="" disabled selected>Please Choose smoking allowance</option>
        <option value="allowed">Allowed</option>
        <option value="not-allowed">Not Allowed</option>
        <option value="outdoor-only">Outdoor Only</option>
      </select>
      <img   src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['updateSmokingAllowance']);

// Function to handle smoking allowance selection change
function onSmokingAllowanceChange(event: Event) {
  const selectedValue = (event.target as HTMLSelectElement).value;
  emit('updateSmokingAllowance', selectedValue); // Emit the selected value
}
</script>
