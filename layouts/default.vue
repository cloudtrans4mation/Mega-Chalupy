<script lang="ts" setup>
import Loading from '~/components/Loading.vue';


const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000); // 3 seconds

</script>


<template>

  <Loading></Loading>
  <div v-if="!loading" class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 pt-12 pb-20 flex flex-col items-center justify-start" style="padding-top: 0;">
      <slot />
    </main>
    <Footer style="margin-bottom: 80px;" />
  </div>

</template>


<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

/* Adjust grid container for fewer items */
.grid {
  display: grid;
  justify-content: center; /* Center items horizontally */
  align-content: center; /* Center items vertically if fewer rows */
}</style>