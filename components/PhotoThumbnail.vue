<template>

    <div class="flex overflow-hidden relative flex-col flex-wrap gap-5 content-start items-start self-stretch px-4 pt-4 pb-28 my-auto rounded-xl border border-solid aspect-[1.201] border-black border-opacity-10 min-h-[144px] w-[173px] max-md:pb-24">
  
      <img :src="src" :alt="alt" class="object-cover absolute inset-0 size-full" />
  
      <div class="flex relative flex-wrap gap-5 justify-center content-center items-center px-1 py-2 w-7 bg-white rounded-md border border-solid border-black border-opacity-10 min-h-[24px]">
  
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/efecf2d70fd355917d65b6d62bdf5988483a0aeff456a8f24258af8eb25a1934?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="" class="object-contain self-stretch my-auto aspect-[0.9] w-[9px]" />
  
      </div>
  
    </div>
  
  </template>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  
    name: 'PhotoThumbnail',
  
    props: {
  
      src: {
  
        type: String,
  
        required: true,
  
      },
  
      alt: {
  
        type: String,
  
        required: true,
  
      },  },

});

</script>