<template>
    <article
        class="card flex overflow-hidden flex-col bg-white rounded-2xl border border-gray-200 shadow-sm max-w-[337px] transition-transform transform hover:scale-105 hover:shadow-lg">
        <header class="flex overflow-hidden relative flex-col w-full aspect-[1.174]">


            <div class="absolute top-3 right-3 z-10" @click="(e: MouseEvent) => e.preventDefault()">
                <HeartButton :listingId="listing.id" @click="(e: MouseEvent) => e.preventDefault()"
                    @favorited="favorited(listing.id)" />
            </div>


            <img  
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a19a2f47f28a2d22608363eeb19bf0e4c52399865e265660acffce85ad56d12?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                class="object-cover absolute inset-0 size-full rounded-t-2xl" alt="Sevierville, Tennessee landscape" />
            <img  
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/541f9829fd733bb530fd4104083783f4d844309bc747029ac4c6d90a97bd3c2a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                class="object-contain w-full aspect-[1.17] rounded-t-2xl" alt="Mega Chalupy listing main image" />
        </header>

        <main class="flex justify-between items-start px-5 pb-5 mt-3 w-full text-base leading-none text-neutral-800">
            <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                <h2 class="font-semibold text-lg">Sevierville, Tennessee</h2>
                <p class="mt-1 text-neutral-500">Mountain and park views</p>
                <p class="overflow-hidden pr-44 mt-1 w-full text-sm leading-none text-neutral-500">
                    Mar 18 – 23
                </p>
                <p class="flex gap-1 items-start self-start pr-0.5 mt-1 whitespace-nowrap">
                    <span class="font-semibold text-lg">$229</span>
                    <span class="text-sm">night</span>
                </p>
            </div>
            <div class="flex gap-1 items-center text-right whitespace-nowrap">
                <img  
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9acc2d35dc28979b2d209ba0204e4dc036e82eebb39896e86f2e82bfc59420f0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
                <span class="self-stretch my-auto text-sm">4.94</span>
            </div>
        </main>
    </article>
</template>

<script lang="ts" setup>
import type { Listing, Reservation } from '~/types'
import { format } from 'date-fns'

type ListingCardProps = {
    listing: Listing
    reservation?: Reservation
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    totalPrice?: number
}

const { listing, reservation } = defineProps<ListingCardProps>()

const { getByValue } = useCountries()
const location = getByValue(listing.locationValue)

const price = computed(() => (reservation ? reservation.totalPrice : listing.price))

const reservationDate = computed(() => {
    if (!reservation) return null

    const start = new Date(reservation?.startDate)
    const end = new Date(reservation?.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
})

const emit = defineEmits(['action', 'favorited'])

function action(id: string) {
    emit('action', id)
}

function favorited(id: string) {
    emit('favorited', id)
}

</script>

<style scoped>
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>