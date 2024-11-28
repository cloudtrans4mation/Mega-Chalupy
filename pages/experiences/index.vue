<<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import Search from '../components/nav/Search.vue'
import AlwaysPresentFooter from '~/components/AlwaysPresentFooter.vue';
const router = useRouter()
const route = useRoute()
const toast = useToast()
const user = useUser()
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000); // 3 seconds


import PastExperiencesSection from '~/components/past-experiences/PastExperiencesSection.vue';
import Categories from '~/components/Categories.vue';

const { allListings, isLoading, fetchNextSet } = useFilteredPagination()

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
  </script>

  <template>


    <section>
      <PastExperiencesSection></PastExperiencesSection>
      <RegistrationBanner v-if="!user"></RegistrationBanner>
      <!-- Bouton "Afficher la carte" -->
      <Search />
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
</style>>