<template>
    <section class="flex flex-col px-72 pt-9 max-md:px-5">
        <header class="flex flex-col flex-1 w-full max-md:max-w-full">
            <h1 class="text-4xl text-black max-md:max-w-full">
                Please select <span class="font-bold text-black">Your subscription ...</span>
            </h1>
            <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">
                Please let us know if its professional service for you...
            </p>
        </header>
        <main class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-wrap gap-2.5 justify-center items-center w-full max-md:max-w-full">
                <SubscriptionCard type="Basic" price=" 1000" :features="['10 rental', 'Support']"
                    bgColor="bg-neutral-500" />
                <SubscriptionCard type="Professional+" price="1450"
                    :features="['100 rental', 'Front Page placement', 'extended visibility']" bgColor="bg-black"
                    isPopular />
                <SubscriptionCard type="Enterprise" price="Contact for pricing"
                    :features="['360 Virtual Tours setup', 'Professional Photography', 'Global Reach']"
                    bgColor="bg-sky-300" />
            </div>
            <p class="mt-5 text-sm leading-none text-slate-800 max-md:max-w-full">
                Get <span class="font-bold underline">Help ?</span>
            </p>
        </main>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubscriptionCard from '~/components/SubscriptionCard.vue';
export default defineComponent({
    name: 'SubscriptionSelection',
    components: {
        SubscriptionCard,
    },
});
</script>

<style scoped>
section {
    background-color: #f5f5f5;
    padding: 2rem;
}

header {
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
}

p {
    font-size: 1rem;
    color: #6b7280;
}

main {
    text-align: center;
}

.flex-wrap {
    gap: 1.5rem;
}

.SubscriptionCard {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.SubscriptionCard:hover {
    transform: translateY(-5px);
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

.text-sm {
    font-size: 0.875rem;
}
.underline {
    text-decoration: underline;
}
@media (max-width: 768px) {
    section {
        padding: 1rem;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 0.875rem;
    }

    .flex-wrap {
        gap: 1rem;
    }
}


</style>
