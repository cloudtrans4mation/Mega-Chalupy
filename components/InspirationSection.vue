<template>
  <div class="relative flex justify-center items-center w-full max-w-[2520px] mx-auto overflow-hidden py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <!-- Previous Button -->
    <button
      @click="prevSlide"
      class="absolute left-4 md:left-8 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300"
    >
      <i class="fas fa-arrow-left"></i>
    </button>

    <!-- Slider Container -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Slide Items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full flex-shrink-0 flex items-center justify-center p-8 bg-cover bg-center rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-out"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <!-- Slide Content -->
        <div class="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h2 class="text-4xl font-extrabold mb-4">{{ slide.title }}</h2>
          <p class="text-lg mb-6">{{ slide.description }}</p>
          <button
            class="mt-4 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            See More
          </button>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-4 md:right-8 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300"
    >
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          image: "https://i.ibb.co/qCkd9jS/img1.jpg",
          title: "Switzerland",
          description: "Explore the serene beauty of the Swiss Alps.",
        },
        {
          image: "https://i.ibb.co/jrRb11q/img2.jpg",
          title: "Finland",
          description: "Experience the Northern Lights and tranquil lakes.",
        },
        {
          image: "https://i.ibb.co/NSwVv8D/img3.jpg",
          title: "Iceland",
          description: "Discover glaciers, geysers, and volcanic landscapes.",
        },
        {
          image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
          title: "Australia",
          description: "Adventure through the Outback and Sydney's skyline.",
        },
        {
          image: "https://i.ibb.co/jTQfmTq/img5.jpg",
          title: "Netherlands",
          description: "Stroll through tulip fields and scenic canals.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

div {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 0.9));
}
</style>
