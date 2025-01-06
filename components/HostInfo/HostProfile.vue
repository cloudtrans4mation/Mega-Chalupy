<template>
    <section class="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <h2 class="text-2xl font-semibold tracking-tight leading-none text-neutral-800 max-md:max-w-full">
            Meet your Host
        </h2>

        <div class="flex flex-col mt-6 w-full max-md:max-w-full">
            <div
                class="flex relative flex-col flex-wrap justify-center px-6 py-8 w-full rounded-3xl min-h-[230px] shadow-[0px_6px_20px_rgba(0,0,0,0.2)] max-md:px-5 max-md:max-w-full">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6d006ab309d410985aa59569c02ade5ca5b69f6a26eae456dad64a481ebd118?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="" class="object-cover absolute inset-0 w-full h-full rounded-3xl" />

                <div
                    class="flex relative flex-col flex-1 shrink justify-center items-center px-24 w-full basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
                    <div class="flex relative flex-col max-w-full w-[104px]">
                        <!-- Avatar with badge -->
                        <div class="relative w-full">
                            <img  :src="user.image" 
                                class="object-cover w-full aspect-square rounded-full" />

                            <!-- Verified badge -->
                            <img src="/verified.svg" alt="Verified Badge"
                                class="absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-white" />
                        </div>
                    </div>

                    <div class="flex flex-col items-center mt-2 text-center text-white">
                        <h3 class="flex flex-col max-w-full text-3xl font-bold leading-none w-[158px]">
                            <span class="pt-px w-full">{{ user.name }}</span>
                        </h3>
                        <p class="flex items-center text-sm font-semibold leading-none">
                            <span class="self-stretch my-auto">Started hosting in 2024</span>
                        </p>
                    </div>
                </div>
            </div>

            <ul class="flex flex-col justify-center items-start self-center mt-8 max-md:max-w-full">
                <HostInfoItem v-for="(item, index) in hostInfo" :key="index" :icon="item.icon" :label="item.label"
                    :value="item.value" />
            </ul>
        </div>
    </section>
</template>




<script lang="ts">
import { defineComponent } from 'vue';
import HostInfoItem from './HostInfoItem.vue';
import type { AuthUser } from '~/types'

export default defineComponent({
    name: 'HostProfile',
    components: {
        HostInfoItem,
    },
    props: {
        user: {
            type: Object as PropType<AuthUser>, // Expecting an object of type AuthUser
            required: true, // Make it required (optional if you prefer)
        },
    },
    setup(props) {
        const hostInfo = [
            {
                icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97702fe00810722bf0277b83cd62e20741b54b80e6a3b6c33b5c221f11abd4f2?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
                label: 'Where I went to school',
                value: 'George Washington High School'
            },
        ];

        // Access the `user` prop
        console.log(props.user); // Example: log the user object

        return {
            hostInfo,
            user: props.user, // Return `user` to use it in the template
        };
    },
});
</script>


<style scoped>
/* Adjust the styles for the verified badge */
.verified-badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid white;
    /* Adds a white border around the badge */
}
</style>
