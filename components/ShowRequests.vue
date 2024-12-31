<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperSeparator, StepperTitle, StepperTrigger } from 'radix-vue'

const steps = [{
  step: 1,
  title: 'Requests',
  description: 'Accept the request you want',
  icon: 'radix-icons:home',
}, {
  step: 2,
  title: 'Payment of Approved requests',
  description: 'Set your preferred shipping method',
  icon: 'radix-icons:archive',
}, {
  step: 3,
  title: 'Checkin & Checkout',
  description: 'Checkin & Checkout',
  icon: 'radix-icons:check',
}]
</script>

<template>

  
 
</template>

<style scoped>
/* Scoped CSS for this component */
.bg-green-500 {
  background-color: #10B981; /* Tailwind green-500 */
}

.text-blackA11 {
  color: rgba(0, 0, 0, 0.11); /* Example color from @radix-ui/colors */
}
</style>