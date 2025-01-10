<template>
  <section
    class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-[100px] flex flex-col items-start font-bold text-zinc-700 pt-12 pb-12"
    aria-labelledby="news-heading"
  >
    <!-- Heading Section -->
    <h1 id="news-heading" class="text-2xl">Novinky ze světa Chalup</h1>
    <p class="mt-2 text-base font-light max-md:max-w-full">
      Nenechte si ujít novinky ze světa rentals.
    </p>

    <!-- News Cards Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <NewsCard
        v-for="(article, index) in newsArticles"
        :key="index"
        :date="article.date"
        :title="article.title"
        :image-url="article.imageUrl"
      />
    </div>

    <!-- Button Section -->
    <div class="flex justify-center w-full mt-8">

      <button class=" px-7 py-3 bg-black rounded-xl max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" @click="$emit('browse')">
        <span class="grow shrink w-[135px]">Přejít na blog</span>
      </button>
      
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewsCard from './NewsCard.vue'

interface NewsArticle {
  date: string
  title: string
  imageUrl: string
}

export default defineComponent({
  name: 'NewsSection',
  components: {
    NewsCard
  },
  data() {
    return {
      newsArticles: [
        {
          date: '15. duben 2024',
          title: 'OHello world',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/cfe0303960362bdfd413a48862934c803f1c90b32e92c87062f64d9948768f18?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
        },
        {
          date: '20. březen 2024',
          title: 'Poprvé vše o chatach',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/07f5befe9bf443482305927a0abbccbcccb66b138695d90085d6436540528daa?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
        },
        {
          date: '19. únor 2024',
          title: 'Vše o moderni chatach',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/948ee05ceded29cd7c39fa3503bc03cad2c34ad08c56f657a27a5afe328e27f8?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
        }
      ] as NewsArticle[]
    }
  },
  methods: {
    navigateToBlog() {
      // Navigation logic would be implemented here
    }
  }
})
</script>
