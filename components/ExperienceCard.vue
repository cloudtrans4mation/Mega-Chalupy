<script setup lang="ts">

// Define the expected props structure if not defined in ExperienceTypes
interface ExperienceCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

defineProps<ExperienceCardProps>();
</script>

<template>
  <div
    class="flex overflow-hidden flex-col flex-1 shrink px-20 pt-20 pb-96 rounded-lg basis-0 min-h-[628px] min-w-[240px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
  >
    <div
      class="text-5xl text-white leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]"
    >
      {{ title }}<br />{{ subtitle }}
    </div>
    <div
      class="flex items-start self-start mt-6 text-base text-gray-700"
      :class="{ 'whitespace-nowrap': buttonText.length > 15 }"
    >
      <button
        class="gap-2 self-stretch px-6 py-4 bg-white rounded-lg border-0 border border-solid shadow-sm max-md:px-5"
        tabindex="0"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>