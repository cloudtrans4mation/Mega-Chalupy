<template>
  <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
    <label :for="inputId" class="text-base font-semibold leading-none text-black max-md:max-w-full">
      {{ label }}
    </label>
    <div class="flex flex-wrap justify-between p-2.5 mt-2 w-full bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] max-md:max-w-full">
      <input
        :id="inputId"
        type="text"
        :placeholder="placeholder"
        class="my-auto text-sm font-medium text-center text-neutral-500 w-full bg-transparent border-none focus:outline-none"
        @input="onInputChange"
      />
      <div class="flex flex-col flex-1 shrink justify-center items-end basis-0 min-w-[240px]">
        <img   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e713940dd7466d736ec2ce8a8b92bb88dbe5c209efcd3e71158e2822fc5d9fc?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" class="object-contain aspect-[1.67] w-[5px]" alt="" />
        <img   src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dfc0d5cba908f47ddbcdd6e576187d66778b290680676ad5b74b26de6be479b?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" class="object-contain mt-2.5 aspect-[1.67] w-[5px]" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps<{
  label: string;
  placeholder: string;
}>();

const emit = defineEmits(['updateValue']);

const inputId = computed(() => props.label.toLowerCase().replace(/\s+/g, '-'));

// Emit input value on change
function onInputChange(event: Event) {
  emit('updateValue', (event.target as HTMLInputElement).value);
}
</script>
