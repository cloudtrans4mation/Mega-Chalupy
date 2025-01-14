<script setup lang="ts">
interface AmenityItem {
  icon: string;
  label: string;
  subItems?: AmenityItem[];
  description?: string; // Optional description for amenities
}

interface Facility {
  icon: string;
  name: string;
}


interface FacilityItem {
  id: number;
  icon: string;
  name: string;
  altText: string;
}

const facilities: FacilityItem[] = [
  {
    id: 1,
    icon: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/159d09f98eee0e7c7f78a0c714accd8dd3a467bbd04216a390ab551ba1891e5e?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
    name: 'Free WiFi',
    altText: 'WiFi connectivity icon'
  },
  {
    id: 2,
    icon: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/ead00d07d55240f545a716cd9fabfb9f15b5d6c8a97c807b2fa06d6ba2fad68b?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
    name: 'Parking',
    altText: 'Parking facility icon'
  },
  {
    id: 3,
    icon: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/4b7248af7054bbd7a24baca75005f840b3cb5c12f3976f565140f4c3f75d947f?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
    name: 'Family rooms',
    altText: 'Family rooms icon'
  },
  {
    id: 4,
    icon: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/f01ed30e6d99d0abeda18a58f4515a048781ff77eeed3e65011a291f74c09404?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
    name: 'Non-smoking rooms',
    altText: 'No smoking icon'
  },
  {
    id: 5,
    icon: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/5eb18bfd5b96cfc824e76a0b36c6dc3acb474c7a9ff97d9ad0abbd2ecbc16466?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
    name: 'Garden',
    altText: 'Garden area icon'
  }
];

const amenities: AmenityItem[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b6ac1043542bf839c0e5a73a55a4bf4d436f6f23760c71210836054f491f63a9?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd',
    label: 'Outdoors',
    subItems: [
      { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0bffa53055198c6a3e6920aec0d21f8d62129d4e0806161e99439050cd96324b?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd', label: 'Garden' }
    ]
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a884a6e367789394d955c3af1eee34025d535852f2f3994460ce7c584366af11?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd',
    label: 'Food & Drink',
    subItems: [
      { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/94b8d03a9f609cbf7e5c757083ccc27ad9b17bc643449cdafee0ce40428e02c6?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd', label: 'Tea/Coffee maker' }
    ]
  },
];


</script>

<template>
  <section class="flex flex-col w-full" aria-label="Facilities and Amenities">
    <!-- Facilities Section -->
    
    <ul class="flex flex-wrap gap-6 items-center mt-6 w-full text-sm font-medium leading-none" role="list">
      <li v-for="facility in facilities" :key="facility.name" class="flex gap-3 items-center">
        <img :src="facility.icon" :alt="`${facility.name} icon`"  
          class="object-contain shrink-0 w-5 aspect-square" />
        <span>{{ facility.name }}</span>
      </li>
    </ul>

    <!-- Amenities Section -->
    <section class="mt-8">
      <h2 class="text-2xl font-semibold leading-none text-black">Property Amenities</h2>
      <ul class="flex flex-col w-full space-y-4 mt-6">
        <li v-for="(amenity, index) in amenities" :key="index">
          <article class="flex flex-col w-full">
            <header class="flex gap-3 items-center w-full text-base">
              <img :src="amenity.icon" :alt="`${amenity.label} icon`"  
                class="object-contain shrink-0 w-5 aspect-square" />
              <h3 class="flex-1">{{ amenity.label }}</h3>
            </header>
            <p v-if="amenity.description" class="mt-2 text-sm text-zinc-600">{{ amenity.description }}</p>
            <ul v-if="amenity.subItems" class="flex flex-col mt-4 w-full space-y-1.5">
              <li v-for="(subItem, subIndex) in amenity.subItems" :key="subIndex"
                class="flex gap-4 items-center text-sm">
                <img :src="subItem.icon" :alt="`${subItem.label} icon`"  
                  class="object-contain shrink-0 w-4 aspect-square" />
                <span>{{ subItem.label }}</span>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </section>
  </section>
</template>
