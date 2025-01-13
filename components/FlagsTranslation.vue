<template>
  <div class="gtranslate_wrapper"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Set up GTranslate settings
  window.gtranslateSettings = {
    default_language: 'cz',
    native_language_names: true,
    detect_browser_language: true,
    languages: ['en', 'cs'],
    wrapper_selector: '.gtranslate_wrapper',
    switcher_horizontal_position: 'right',
    switcher_vertical_position: 'top',
    float_switcher_open_direction: 'bottom',
  };

  // Dynamically load the GTranslate script
  const script = document.createElement('script');
  script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
  script.defer = true;
  document.body.appendChild(script);
});
</script>

<style scoped>
/* Add any specific styles you need for your GTranslate wrapper */
.gtranslate_wrapper {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}
</style>
