<script setup lang="ts">
interface HostingQuestionsProps {
  onAskClick: () => void;
}

const props = withDefaults(defineProps<HostingQuestionsProps>(), {
  onAskClick: () => {}
});
</script>

<template>
    <div
      class="flex flex-col justify-between px-10 py-16 font-medium rounded-lg overflow-hidden max-w-7xl mx-auto my-12"
      role="region"
      aria-label="Hosting Questions Section"
      :style="{ backgroundImage: `url('/experiences/barbie.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <h1
        class="text-8xl text-white leading-[96px] max-md:text-4xl max-md:leading-10 max-md:text-center max-md:leading-[52px]"
      >
        Questions<br />about<br />hosting?
      </h1>
      <div
        class="flex justify-start mt-12 text-base text-gray-700 max-md:mt-10"
      >
        <button
          @click="onAskClick"
          class="gap-2 self-stretch px-6 py-4 bg-white rounded-lg border-0 border border-solid shadow-sm max-md:px-5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="button"
          aria-label="Ask a Superhost for assistance"
        >
          Ask a Superhost
        </button>
      </div>
    </div>
  </template>
  
  
  