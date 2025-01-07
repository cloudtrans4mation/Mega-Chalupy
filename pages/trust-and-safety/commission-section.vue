<script lang="ts">
import { defineComponent } from 'vue'

interface CommissionInfoProps {
  title: string
  description: string
  roles: Array<string>
}

export default defineComponent({
  name: 'CommissionInfo',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Commission'
    },
    description: {
      type: String,
      required: true,
      default: 'Creating a safe and private experience. MegaCabin provides resources and technologies to verify identities and protect privacy. We guide our community to follow local and state laws to ensure a safe environment for everyone.'
    },
    roles: {
      type: Array as () => string[],
      required: true,
      default: () => ['Guest', 'Owner/Manager']
    }
  }
})
</script>

<template>
  <div
    class="flex flex-col flex-1 shrink justify-between self-stretch my-auto basis-0 min-h-[234px] min-w-[240px]"
    role="article"
  >
    <h1 class="text-6xl leading-none text-zinc-800 max-md:text-4xl">
      {{ title }}
    </h1>
    <div class="flex flex-col w-full text-sm">
      <p class="leading-7 text-zinc-800">
        {{ description }}
      </p>
      <div
        class="flex gap-4 items-center self-start mt-3 leading-6 text-blue-600 whitespace-nowrap"
        role="list"
        aria-label="Available roles"
      >
        <div 
          v-for="(role, index) in roles" 
          :key="index"
          class="self-stretch my-auto"
          :class="{ 'w-[43px]': index === 0, 'w-[119px]': index === 1 }"
          role="listitem"
        >
          {{ role }}
        </div>
        <div
          v-if="roles.length > 1"
          class="flex shrink-0 self-stretch my-auto w-px bg-zinc-300 h-[22px]"
          role="separator"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  </div>
</template>