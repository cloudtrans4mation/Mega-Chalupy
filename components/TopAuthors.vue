<template>
  <div class="flex flex-wrap gap-6 w-full px-16 py-4 max-md:max-w-full">
    <!-- Card Container -->
    <div 
      v-for="profile in profiles" 
      :key="profile.id" 
      class="flex flex-1 min-w-[220px] max-w-[300px] bg-transparent shadow-none rounded-2xl border-none overflow-hidden p-4 transition-transform transform hover:scale-105"
    >
      <TopAuthorsCard
        :ranking="profile.ranking"
        :profile-image="profile.image"
        :profile-name="profile.name"
        :location="profile.location"
        :rating="profile.rating"
        :star-image="profile.starImage"
        :container-classes="profile.containerClasses"
        :header-width="profile.headerWidth"
        :name-width="profile.nameWidth"
        :location-padding="profile.locationPadding"
        class="w-[280px]" 
      />
    </div>
  </div>
</template>






<script lang="ts">
import { defineComponent } from 'vue'
import TopAuthorsCard from './TopAuthorCard.vue'

interface Profile {
  id: number
  ranking?: number
  image: string
  name: string
  location: string
  rating: string
  starImage: string
  containerClasses?: string
  headerWidth?: string
  nameWidth?: string
  locationPadding?: string
}

export default defineComponent({
  name: 'TopAuthors',
  components: {
    TopAuthorsCard
  },
  data() {
    return {
      profiles: [
        {
          id: 1,
          ranking: 1,
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/d96fe7cb1a05cecc57905c666afb63211e6a7b35852f021c56b7fc288b8d9001?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          name: 'Truelock Alric',
          location: 'New York',
          rating: '4.9',
          starImage: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/31940b31533b6271a97455d1079bec557edfa0a23dcf69737c0c67b5f7d5c051?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
        },
        {
          id: 2,
          ranking: 2,
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/5d56b1f63e3097ef3ce5b7f23b6e67a5127e2d1670b3db0cc1633e5a92497ebd?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          name: 'Birrell Chariot',
          location: 'New York',
          rating: '4.9',
          starImage: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/8e63073c75323a38f8a216098b96caf1df19012de920ec4d94b47e5a8cb82e12?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
        },
        {
          id: 3,
          ranking: 3,
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/d1b228224003e3384abfd54a2885c0c5b773399a4f696a42ea03edfb186401f2?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          name: 'Foulcher Nathanil',
          location: 'New York',
          rating: '4.9',
          starImage: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/fd91147230d24bae788e95f53d949ce5d313c7d6d57064204c18cb4ba8217c65?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          nameWidth: 'w-[142px]',
          locationPadding: 'px-10 max-md:px-5'
        },

      ] as Profile[]
    }
  }
})
</script>