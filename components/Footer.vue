<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>

  <footer class="flex flex-col px-24 pt-10 pb-5  bg-white max-md:px-5">

    <div class="flex flex-wrap justify-between w-full text-slate-900 max-md:max-w-full">

      <nav
        class="flex flex-wrap flex-1 shrink justify-between h-full text-base basis-0 min-w-[240px] max-md:max-w-full">

        <div class="flex flex-col flex-1 shrink basis-0">

          <h2 class="font-bold leading-7">Product</h2>

          <ul class="flex flex-col mt-4 font-medium">

            <li><a href="#" class="opacity-50">Autocapture</a></li>

            <li><a href="#" class="mt-2.5 opacity-50">Data Governance</a></li>

            <li><a href="#" class="mt-2.5 opacity-50">Virtual Events</a></li>

            <li><a href="#" class="mt-2.5 opacity-50">Virtual Users</a></li>

            <li><a href="#" class="mt-2.5 opacity-50">Behavioral Analytics</a></li>

            <li><a href="#" class="mt-2.5 opacity-50">Connect</a></li>

          </ul>
        </div>

        <div class="flex flex-col flex-1 shrink whitespace-nowrap basis-0">

          <h2 class="font-bold leading-7">Explore</h2>

          <ul class="flex flex-col self-start mt-4 font-medium">

            <li><a href="#" class="opacity-50">Resources</a></li>

            <li><a href="#" class="mt-3 opacity-50">Blog</a></li>

            <li><a href="#" class="mt-3 opacity-50">Documents</a></li>

          </ul>

        </div>

        <div class="flex flex-col flex-1 shrink basis-0">

          <h2 class="font-bold leading-7">Company</h2>

          <ul class="flex flex-col self-start mt-4 font-medium">

            <li><a href="#" class="opacity-50">About us</a></li>

            <li><a href="#" class="mt-3 opacity-50">Partners</a></li>

            <li><a href="#" class="mt-3 opacity-50">Customers</a></li>

            <li><a href="#" class="mt-3 opacity-50">Contact us</a></li>

          </ul>

        </div>

      </nav>
      <aside class="flex flex-col my-auto rounded-none min-w-[240px] w-[338px]">

        <div
          class="flex flex-col justify-center px-11 py-9 rounded-lg bg-blend-normal bg-stone-300 bg-opacity-10 max-md:px-5">

          <div class="flex flex-col">

            <div class="flex flex-col w-full max-w-[248px]">

              <h2 class="text-base font-bold leading-7">Subscribe</h2>

              <form class="flex mt-4 w-full text-sm rounded-none">

                <label for="emailInput" class="sr-only">Email address</label>

                <input type="email" id="emailInput" placeholder="Email address" aria-label="Email address"
                  class="flex-grow p-4 mr-0 bg-white rounded-md border-2 border-solid border-slate-200" />

                <button type="submit" aria-label="Subscribe"
                  class="w-[50px] h-[50px] bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/46509efa23fcf76b193edceceea98209c932e57e6f4fa3bea6157e0468ff26a6?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa')] bg-contain bg-no-repeat"></button>

              </form>

            </div>

            <p class="mt-10 text-sm opacity-50">

              Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just
              insight

            </p>

          </div>

        </div>

      </aside>

    </div>
    <hr
      class="mt-8 w-full border border-solid bg-slate-900 bg-opacity-10 border-slate-900 min-h-[1px] max-md:max-w-full" />

    <div class="flex flex-wrap gap-10 justify-between items-center mt-8 w-full max-md:max-w-full">

      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b15b43ae0ca6c635499be139cab9e65fa08eb406a07d9a393d87212e0e4fe9?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
        alt="Company logo" class="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />

      <nav
        class="flex gap-9 items-start self-stretch my-auto text-sm font-bold leading-7 whitespace-nowrap text-slate-900">

        <a href="#">Terms</a>

        <a href="#">Privacy</a>

        <a href="#">Cookies</a>

      </nav>

      <div class="flex gap-4 items-start self-stretch my-auto">

        <a href="#" aria-label="Facebook"><img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d94bfe2e61a8a657d16d704830d2a47683c86deb9846b13bee928fd50ebaef12?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="" class="object-contain shrink-0 aspect-square w-[35px]" /></a>

        <a href="#" aria-label="Twitter"><img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ecccd33404d60c7d3193da67c4da1c46a4614bf055d180d6457f7dfa0e44d4?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="" class="object-contain shrink-0 aspect-square w-[35px]" /></a>

        <a href="#" aria-label="Instagram"><img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a771d2f2275bee48ebda3a567385cddff57fbb0063f70cc5b04dd839e08576cd?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="" class="object-contain shrink-0 aspect-square w-[35px]" /></a>

      </div>

    </div>

  </footer>

</template>
