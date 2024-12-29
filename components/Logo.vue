<script setup lang="ts">
defineProps({
  big: { type: Boolean, required: false, default: false },
})
</script>
<template>
  <NuxtImg
    src="/newbiglogoformogin.png"
    class="block"
    :height="big ? '32' : '32'"
    :width="big ? '32' : '32'"
    alt="company logo" />
</template>
