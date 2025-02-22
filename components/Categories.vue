<script lang="ts" setup>
import { categories } from '~/data/constants'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = ref(route.query.category)
const isSticky = ref(false)

const isMainPage = computed(() => route.name === 'index')

watch(
  () => route.query.category,
  (newCategory) => {
    category.value = newCategory
  },
)

let observer: IntersectionObserver

onMounted(() => {
  const menu = document.querySelector('.menu')

  observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = entry.intersectionRatio < 1
    },
    {
      root: null,
      threshold: 0.9, // Adjust the threshold value to a smaller value
    }
  )

  if (menu) {
    observer.observe(menu)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>


  <Container v-if="isMainPage">

    
    <div :class="{ 'sticky top-0 left-0 right-0 z-10': isSticky }"
      class="menu bg-white flex flex-row items-center justify-between overflow-x-auto w-full px-12 pb-0.5 text-xs font-medium whitespace-nowrap backdrop-blur-lg bg-gradient-to-r from-white/60 via-white/40 to-white/60 border-b border-black border-opacity-10 rounded-lg text-zinc-600 max-md:px-5">

      <CategoryBox v-for="item in categories" :key="item.label" :label="item.label" :selected="category === item.label"
        :icon="item.icon"
        class="flex flex-col items-center text-center px-4 py-2 transition-colors duration-300 hover:text-black" />
    </div>

  </Container>


  
</template>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  /* Ensure it stays above other content */
}
</style>
