<template>
    <section class="explore-stays flex flex-col items-center w-full max-w-screen-lg mx-auto px-5 mt-8 md:mt-16">
        <header class="header">
            <h2 class="header-title">Explore by types of stays</h2>
            <p class="header-subtitle">Explore houses based on 10 types of stays</p>
        </header>

        <main class="flex flex-wrap justify-center gap-4 w-full">
            <ul class="card-container">
                <li v-for="(stay, index) in stayTypes" :key="index" class="card">
                    <StayCard :stay="stay" />
                </li>
            </ul>
        </main>

        <footer class="flex justify-center items-center gap-3 mt-10">
            <button class="button-nav" aria-label="Previous">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59f749797d1232d0b4a64e81c6627d52eb21dd88d949c36fe54c77c794f0dad?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Previous" class="icon" />
            </button>
            <button class="button-nav" aria-label="Next">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef1aea3f3bf5c1d736bf1b2d89001ba446eaa4f2a38cef904378009c4f27757?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Next" class="icon" />
            </button>
        </footer>
    </section>
</template>

<style scoped>
.header {
  max-width: 720px;
  margin: 0 auto 2rem;
  text-align: center;
  padding: 1rem;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1f2937; /* dark gray for better readability */
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.header-title:hover {
  color: #3b82f6; /* blue color on hover */
}

.header-subtitle {
  font-size: 1.25rem;
  color: #6b7280; /* medium gray */
  margin-top: 0.25rem;
  transition: opacity 0.3s ease;
}


.explore-stays {
    margin: 0 auto;
}

.button-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 50%;
    transition: background-color 0.3s;
}

.button-nav:hover {
    background-color: #f3f4f6;
}

.icon {
    width: 1rem;
    height: auto;
    object-fit: contain;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.card {
    width: 240px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: #fff;
}

.card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-content {
    padding: 1rem;
    text-align: center;
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
    margin: 0.5rem 0;
}

.card-description {
    font-size: 0.875rem;
    color: #555;
}

.card-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    background-color: #1d4ed8;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.card-button:hover {
    background-color: #2563eb;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import StayCard from './StayCard.vue';

interface StayType {
    name: string;
    properties: number;
    image: string;
}

export default defineComponent({
    name: 'ExploreStays',
    components: {
        StayCard,
    },
    data() {
        return {
            stayTypes: [
                { name: 'Nature House', properties: 17288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dda802c07ec93039a49c17c46d968eb66e2b4e346c27879cba13c7f0eaaf9c2?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa' },
                { name: 'Wooden house', properties: 2118, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a484497db371820147cb5d75d0ab5a9874879ef048097a5eaca9144adccd5e9a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa' },
                { name: 'Houseboat', properties: 36612, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/593ed12f2482010b0bdd94ef40f4d4c4569b60c0044d6252e242c1dd10130d4f?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa' },
                { name: 'Farm House', properties: 188288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/424a1a71a35b28839130cb343ea0e2edbbf7ddbe43f18ee127320441d5dbb125?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa' },
                { name: 'Dome House', properties: 188288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c03705941583a90f0fbee07dc5101b23d2a5d1ac923254048a6531b54031d7a9?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa' },
            ] as StayType[],
        };
    },
});
</script>