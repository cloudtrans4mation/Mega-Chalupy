<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import Search from '../components/nav/Search.vue'
import AlwaysPresentFooter from '~/components/AlwaysPresentFooter.vue';
import InspirationSection from '~/components/InspirationSection.vue';
const router = useRouter()
const route = useRoute()
const toast = useToast()
const user = useUser()
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000); // 3 seconds

import GiftCard from '~/components/GiftCard.vue';
import PastExperiencesSection from '~/components/past-experiences/PastExperiencesSection.vue';

const { allListings, isLoading, fetchNextSet } = useFilteredPagination()

// Handle query params for verification and error messages
if (import.meta.client) {
  if (route.fullPath.includes('?email=verified')) {
    toast.success('Email verified')

    const url = new URL(route.fullPath, window.location.origin)
    url.searchParams.delete('email')
    router.replace(url.pathname + url.search)
  } else if (route.fullPath.includes('?error')) {
    toast.error('Invalid or missing token')

    const url = new URL(route.fullPath, window.location.origin)
    url.searchParams.delete('error')
    router.replace(url.pathname + url.search)
  }
}

// Show Search component only on specific routes
const showSearch = computed(() => {
  // Add routes where Search should NOT appear
  const excludedRoutes = ['/experiences/create-experience', '/signup', '/profile', '/about'];
  return !excludedRoutes.includes(route.path);
});
</script>

<template>
  <section>
    <Container>
      <!-- Show ChalupSearch as usual -->
      <ChalupSearch></ChalupSearch>

      <!-- Show Search only if showSearch is true -->
      <Search v-if="!showSearch" />

      <!-- Show loading component initially -->
      <div v-if="loading">Loading...</div>

      <!-- Main content -->
      <div>
        <IsEmpty v-if="!isLoading && allListings?.length === 0" :showReset="true" />


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4"
          style="text-align: center;" v-if="allListings && allListings.length > 0">
          <ReservationListingCard v-for="listing in allListings" :listing="listing" :key="listing.id"
            class="flex justify-center items-center" />
        </div>


        <Observer @intersect="fetchNextSet" />
        <LoadingListingCards :cards="12" v-if="isLoading" />
      </div>
    </Container>

    <Availablelocations></Availablelocations>

    <RegistrationBanner v-if="!user"></RegistrationBanner>

    <ExploreByTypeSection></ExploreByTypeSection>


    <GiftCard></GiftCard>
    <Search />
    <MegaChalupyPlusSection></MegaChalupyPlusSection>
    <!-- <MoreListings></MoreListings> -->

    <TopAuthors></TopAuthors>

    <AlwaysPresentFooter />
  </section>
</template>

<style scoped>
.show-map-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .show-map-button {
    display: none;
  }
}

.icon {
  font-size: 1.2em;
}
</style>
