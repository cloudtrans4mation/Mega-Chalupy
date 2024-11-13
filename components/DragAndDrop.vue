<template>

    <section class="flex flex-col px-72 pt-9 max-md:px-5">
  
      <div class="flex flex-col w-full max-md:max-w-full">
  
        <header class="flex flex-col w-full max-md:max-w-full">
  
          <h1 class="text-4xl text-black max-md:max-w-full">
  
            Tell the guest <span class="font-bold text-black">What you have in the place ?</span>
  
          </h1>
  
          <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">
  
            Please Drag and Drop high-quality photos of your property ...
  
          </p>
  
        </header>
  
        <main class="flex flex-wrap gap-5 justify-center content-center items-center px-4 py-16 mt-16 w-full bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-[280px] max-md:mt-10 max-md:max-w-full">
  
          <PhotoThumbnail v-for="(photo, index) in photos" :key="index" :src="photo.src" :alt="photo.alt" />
  
        </main>
  
      </div>
  
    </section>
  
  </template>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  import PhotoThumbnail from './PhotoThumbnail.vue';
  
  
  interface Photo {
  
    src: string;alt: string;
  
  }
  
  
  export default defineComponent({
  
    name: 'PhotoUpload',
  
    components: {
  
      PhotoThumbnail,
  
    },
  
    data() {
  
      return {
  
        photos: [
  
          { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edb816ad9569c826308a4a380481fce338923c17be093110e8d81d38209b0723?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', alt: 'Property photo 1' },
  
          { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d2bd55c8f64717fc7d36b17ca10d40bd6e311c6d4bda2c092b61cfd8db14f5d3?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', alt: 'Property photo 2' },
  
          { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/876f3f2749a3a5adc2d256c035e0755453c266346404afcfae32f5ebc8ef447d?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', alt: 'Property photo 3' },
  
          { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14adbec2ec69014925c57e6053aaa6ba6c0d2b6b0207cab398292fcb4e86e31a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', alt: 'Property photo 4' },
  
          { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3cc4f3d82a8a87e6584d68ad7ecdadb4f485e9bae27f3a1419610a5c71b22aa?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', alt: 'Property photo 5' },
  
        ] as Photo[],
  
      };
  
    },
  
  });
  
  </script>