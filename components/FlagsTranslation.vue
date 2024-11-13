<template>
  <Menu style="z-index: 999;" as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <img :src="currentLang" alt="User Icon" class="w-8 h-8 object-contain" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a @click="currentLang = englishFlag" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
              <img :src="englishFlag" alt="User Icon" class="w-8 h-8 object-contain" />
            </a>
          </MenuItem>

          <MenuItem v-slot="{ active }">
            <a @click="currentLang = czFlag" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
              <img :src="czFlag" alt="User Icon" class="w-8 h-8 object-contain" />
            </a>
          </MenuItem>
          <form method="POST" action="#">
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import langFlag from '~/public/lang.svg'
import englishFlag from '~/public/english.png'
import czFlag from '~/public/cz.svg'

const currentLang = ref(langFlag)
</script>
