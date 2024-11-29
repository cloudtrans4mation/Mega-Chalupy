<template>
    <section class="max-md:max-w-full bg-white rounded-lg p-6 shadow-md">
      <h2 class="text-xl font-semibold mb-4">Top 10 authors of the month</h2>
      <ul class="space-y-4">
        <li v-for="author in authors" :key="author.id" class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors">
          <div class="flex items-center gap-3">
            <img 
              :src="author.avatar" 
              :alt="`${author.name}'s profile picture`"
              class="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h3 class="font-medium">{{ author.name }}</h3>
              <p class="text-sm text-gray-600">{{ author.articles }} articles</p>
            </div>
          </div>
          <button 
            class="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-1"
            @click="followAuthor(author.id)"
            :aria-label="`Follow ${author.name}`"
          >
            Follow
          </button>
        </li>
      </ul>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  interface Author {
    id: number
    name: string
    avatar: string
    articles: number
  }
  
  export default defineComponent({
    name: 'TopAuthors',
    setup() {
      const authors = ref<Author[]>([
        {
          id: 1,
          name: 'John Doe',
          avatar: 'avatar.webp',
          articles: 25
        },
        {
          id: 2,
          name: 'Jane Smith',
          avatar: 'avatar.webp',
          articles: 22
        },
        {
          id: 3,
          name: 'Mike Johnson',
          avatar: 'avatar.webp',
          articles: 20
        },

      ])
  
      const followAuthor = (authorId: number) => {
        // Implementation for following an author
        console.log(`Following author with ID: ${authorId}`)
      }
  
      return {
        authors,
        followAuthor
      }
    }
  })
  </script>