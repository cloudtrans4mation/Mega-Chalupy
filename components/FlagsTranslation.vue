<template>
  <div class="gtranslate_wrapper"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Set up GTranslate settings
  window.gtranslateSettings = {
    default_language: 'en',
    detect_browser_language: true,
    languages: ['cs'],
    wrapper_selector: '.gtranslate_wrapper',
    flag_size: 16,
    switcher_horizontal_position: 'inline',
    switcher_vertical_position: 'center',
  };

  // Dynamically load the GTranslate script
  const script = document.createElement('script');
  script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
  script.defer = true;
  document.body.appendChild(script);

  // Wait for the GTranslate widget to load
  script.onload = () => {
    // Remove all elements with the class "gt-lang-code"
    const elements = document.querySelectorAll('.gt-lang-code');
    elements.forEach((el) => el.remove());

    const switcherArrows = document.querySelectorAll('.gt_float_switcher-arrow');
    switcherArrows.forEach((arrow) => arrow.remove());
  };
});
</script>

<style scoped>
.gtranslate_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
}

@media (max-width: 600px) {
  .gtranslate_wrapper {
    bottom: 5px;
    right: 5px;
  }
}

@media (max-width: 400px) {
  .gtranslate_wrapper {
    bottom: 2px;
    right: 2px;
  }
}
</style>
