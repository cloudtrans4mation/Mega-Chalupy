<template>
  <div class="flex flex-col items-center p-6 bg-white shadow-md rounded-xl max-w-[270px] transition-transform transform hover:scale-105">
    <!-- Card Header -->
    <div class="flex items-center gap-4 w-full mb-4">
      <!-- Ranking Badge -->
      <div v-if="ranking" :class="rankingColorClasses" class="px-3 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">
        #{{ ranking }}
      </div>
      
      <!-- Profile Image -->
      <div class="flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 shadow-md">
        <img :src="profileImage" :alt="profileName" loading="lazy" class="w-full h-full object-cover rounded-full" />
      </div>
    </div>

    <!-- Profile Information -->
    <div class="flex flex-col items-center mt-3 text-center">
      <!-- Name -->
      <div class="text-sm font-semibold text-gray-800 truncate w-full">
        {{ profileName }}
      </div>
      
      <!-- Location -->
      <div class="text-xs text-gray-500 mt-1">
        {{ location }}
      </div>
    </div>

    <!-- Rating Section -->
    <div class="flex items-center gap-2 mt-3 px-4 py-2 bg-gray-100 rounded-full w-max mx-auto">
      <div class="text-xs font-medium text-gray-700">
        {{ rating }}
      </div>
      <img :src="starImage" alt="Rating Star" class="w-5 h-5 object-contain" />
    </div>
  </div>
</template>

<style scoped>
/* Updated shadow effect for the card, removing large background */
.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for hover effect */
}
</style>




<script lang="ts">
import { defineComponent } from 'vue'

interface ProfileCardProps {
  ranking?: number
  profileImage: string
  profileName: string
  location: string
  rating: string
  starImage: string
  containerClasses?: string
  headerWidth?: string
  nameWidth?: string
  locationPadding?: string
}

export default defineComponent({
  name: 'TopAuthorCard',
  props: {
    ranking: {
      type: Number,
      required: false
    },
    profileImage: {
      type: String,
      required: true
    },
    profileName: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    },
    starImage: {
      type: String,
      required: true
    },
    containerClasses: {
      type: String,
      default: 'pt-3.5 pr-12 pb-7 pl-3.5'
    },
    headerWidth: {
      type: String,
      default: 'w-[142px]'
    },
    nameWidth: {
      type: String,
      default: 'w-[109px]'
    },
    locationPadding: {
      type: String,
      default: 'px-6 max-md:px-5'
    }
  },
  computed: {
    rankingColorClasses(): string {
      const colors = {
        1: 'text-red-800 bg-red-100',
        2: 'text-blue-800 bg-blue-100',
        3: 'text-green-800 bg-green-100'
      }
      return colors[this.ranking as keyof typeof colors] || ''
    }
  }
})
</script>