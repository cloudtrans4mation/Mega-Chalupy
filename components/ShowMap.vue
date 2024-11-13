<script setup lang="ts">
import Search from './nav/Search.vue';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <DialogRoot>
      <DialogTrigger
        class="text-grass11 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        <button class="show-map-button">
          Show the cart
          <span class="icon">🗺️</span>
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
        <DialogContent
          class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">

          <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            <Search />
          </DialogDescription>

          <div class="mt-[25px] flex gap-4 justify-end">



          </div>

        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
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