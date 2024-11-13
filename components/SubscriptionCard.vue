<template>
  <article
    :class="['flex flex-col px-8 pb-10 rounded-xl min-w-[240px] w-[241px] max-md:px-5', bgColor, { 'my-auto': !isPopular }]">
    <header v-if="isPopular"
      class="gap-2.5 pt-4 pr-14 pb-8 pl-14 max-w-full text-base font-semibold leading-6 text-white rounded-3xl bg-zinc-800 min-h-[82px] w-[241px] max-md:px-5">
      MOST POPULAR
    </header>

    <div class="flex items-start py-6 w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7680442ff733b875ead1b65afe207d63901b748ed830ae43ab758ffeb7844154?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
        class="object-contain aspect-[3.18] w-[102px]" alt="" />
    </div>

    <h2
      :class="['mt-2.5 text-2xl font-black leading-none', { 'text-white': type !== 'Enterprise', 'text-black tracking-[2px]': type === 'Enterprise' }]">
      {{ type }}
    </h2>

    <div class="flex flex-col mt-2.5 w-full">
      <h3 class="text-base font-semibold leading-none text-white">Offers:</h3>
      <ul class="flex flex-col mt-2.5 w-full text-sm font-medium text-indigo-50">
        <li v-for="feature in features" :key="feature" class="flex gap-3 items-center mt-2.5">
          <!-- NuxtLink to navigate to order-summary -->
          <NuxtLink to="/order-summary" class="flex items-center w-full">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a40ef5bac291db23b4574a1f55b40dc64de071c0dfbc8652d935791566f1ab?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              class="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]" alt="" />
            <span class="flex-1 shrink self-stretch my-auto basis-0">{{ feature }}</span>
          </NuxtLink>
        </li>

      </ul>
    </div>

    <p
      :class="['mt-2.5 text-xs tracking-wide text-center', { 'text-white': type !== 'Enterprise', 'text-white underline': type === 'Enterprise' }]">
      Starts at   {{ price }}  czk/month
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubscriptionCard',
  props: {
    type: {
      type: String as PropType<'Basic' | 'Professional+' | 'Enterprise'>,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    features: {
      type: Array as PropType<string[]>,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
article {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

article:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

header {
  background-color: #1f2937;
  color: #fff;
  text-align: center;
  border-bottom: 2px solid #374151;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

h3 {
  text-align: center;
  margin-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

li img {
  margin-right: 0.5rem;
}

p {
  text-align: center;
  margin-top: 1rem;
}

.bg-neutral-500 {
  background-color: #6b7280;
}

.bg-black {
  background-color: #000;
  color: #fff;
}

.bg-sky-300 {
  background-color: #81c784;
}

@media (max-width: 768px) {
  article {
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.75rem;
  }
}
</style>