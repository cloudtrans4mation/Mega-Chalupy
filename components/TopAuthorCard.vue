<template>
    <div class="flex flex-col items-center" :class="cardStyles">
      <div class="flex gap-5 justify-between items-start self-start max-w-full" :class="headerWidth">
        <div :class="rankStyles">
          #{{ rank }}
        </div>
        <div class="flex overflow-hidden justify-center items-center mt-4 w-20 h-20 rounded-full shadow-sm bg-white bg-opacity-0 min-h-[80px]">
          <img
            :src="avatar"
            :alt="`Profile photo of ${name}`"
            class="object-contain self-stretch my-auto w-20 rounded-full aspect-square"
            loading="lazy"
          />
        </div>
      </div>
      <div class="flex flex-col pt-3 max-w-full text-center" :class="nameWidth">
        <div class="flex flex-col w-full">
          <div class="overflow-hidden w-full text-base font-medium text-gray-900">
            {{ name }}
          </div>
          <div class="px-6 mt-1.5 w-full text-sm leading-none text-gray-500 max-md:px-5">
            {{ location }}
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-4">
        <div 
          class="flex justify-center items-center px-5 py-2 bg-gray-100 rounded-full"
          role="status"
          :aria-label="`Rating: ${rating} out of 5 stars`"
        >
          <div class="self-stretch pt-px my-auto text-xs font-medium leading-none text-center text-gray-900 whitespace-nowrap">
            {{ rating }}
          </div>
          <div class="flex flex-col items-start self-stretch pl-2 my-auto w-7 min-h-[20px]">
            <div class="flex overflow-hidden flex-col justify-center items-center w-5 min-h-[20px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/31940b31533b6271a97455d1079bec557edfa0a23dcf69737c0c67b5f7d5c051?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
                alt=""
                class="object-contain flex-1 w-full aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface Props {
    name: string
    location: string
    avatar: string
    rating: number
    rank: number
    rankColor: string
  }
  
  export default defineComponent({
    name: 'LeaderboardCard',
    props: {
      name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      },
      rankColor: {
        type: String,
        required: true
      }
    },
    computed: {
      cardStyles() {
        return {
          'pt-3.5 pr-12 pb-7 pl-3.5 bg-white rounded-3xl border border-solid border-gray-200 border-opacity-70 max-md:pr-5': true
        }
      },
      headerWidth() {
        return {
          'w-[142px]': true
        }
      },
      nameWidth() {
        return {
          'w-[109px]': true
        }
      },
      rankStyles() {
        return {
          'px-2.5 py-1 text-xs font-medium leading-none text-center whitespace-nowrap rounded-full': true,
          'text-red-800 bg-red-100': this.rankColor === 'red',
          'text-blue-800 bg-blue-100': this.rankColor === 'blue',
          'text-green-800 bg-green-100': this.rankColor === 'green'
        }
      }
    }
  })
  </script>