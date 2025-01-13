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
/* Ensure the GTranslate wrapper is responsive */
.gtranslate_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Responsive styles for the GTranslate widget */
@media (max-width: 768px) {
  .gtranslate_wrapper {
    flex-direction: column;
  }
}

/* Ensure the GTranslate widget adapts to different screen sizes */
.gtranslate_wrapper .gt_float_switcher {
  width: 100%;
  max-width: 100px;
}

@media (max-width: 768px) {
  .gtranslate_wrapper .gt_float_switcher {
    max-width: 100%;
  }
}
</style>
