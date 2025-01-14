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
    flag_size: 24,
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
  };
});
</script>


<style scoped>
.gtranslate_wrapper {
  position: relative;
  display: inline-flex; /* Align inline with other elements */
  align-items: center;
  justify-content: center;
  padding: 0 8px; /* Add slight horizontal padding */
}

.gtranslate_wrapper img {
  width: 16px; /* Ensure the flag icon is small and consistent */
  height: auto;
}

/* Ensure responsiveness */
@media (max-width: 768px) {
  .gtranslate_wrapper {
    padding: 0 4px; /* Reduce padding for smaller screens */
  }

  .gtranslate_wrapper img {
    width: 16px; /* Smaller flag for mobile */
  }
}
</style>