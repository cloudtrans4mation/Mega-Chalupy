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
    <main style="padding-top: 0;" class="flex-1 pt-12 pb-20">
      <slot />
    </main>
    <Footer style="margin-bottom: 80px;"/>
  </div>

</template>
