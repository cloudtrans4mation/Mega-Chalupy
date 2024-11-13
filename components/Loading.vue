<template>
    <div v-if="loading" class="loader">
      <img src="/Mega.Chalupy.gif" alt="Loading..." />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const loading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 3000); // 3 seconds
  });
  </script>
  
  <style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  