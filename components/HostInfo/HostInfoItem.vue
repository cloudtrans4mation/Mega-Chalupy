<script setup lang="ts">
import type { HotelInfoProps } from '~/composables/lib/CabinProps';

defineProps<HotelInfoProps>();
</script>

<template>
  <div
    class="flex flex-col px-5 py-8 text-sm bg-white rounded-lg border border-solid border-neutral-200 md:px-5"
    role="region"
    aria-label="Hotel Information"
  >
    <div class="flex flex-wrap gap-8 items-start w-full leading-none">
      <div class="flex gap-2 items-start whitespace-nowrap text-zinc-900 w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/3f39458fb4fba46e59d3146246ae6fad2081a325c690c24b4b5dafa19ac20b8d?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Check-in icon"
        />
        <div>Check-in</div>
      </div>
      <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] md:max-w-full">
        <div class="text-zinc-900">From 15:00 to 23:30</div>
        <div class="mt-3.5 text-neutral-500">
          You'll need to let the property know in advance what time you'll
          arrive.
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full">
      <div class="flex gap-2 items-start whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/74b5e125cb1213eee23de254d7984589c41baeb6871f0d7a1fff224a9efc43ef?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Check-out icon"
        />
        <div class="flex flex-col flex-1 shrink basis-0">
          <div class="leading-none text-zinc-900">Check-out</div>
          <button class="leading-7 text-sky-600" tabindex="0">here</button>
        </div>
      </div>
      <div class="flex-1 shrink leading-none basis-0 text-zinc-900 md:max-w-full">
        From 06:00 to 10:00
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full text-zinc-900">
      <div class="flex gap-2 items-start leading-5 whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/24505806a63313956cf4cf68280f41eeafb39a8ff59acd0744b50b236760d467?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Cancellation policy icon"
        />
        <div class="w-[88px] md:w-auto">Cancellation/prepayment</div>
      </div>
      <div class="flex-1 shrink leading-none basis-0 md:max-w-full">
        Cancellation and prepayment policies vary according to apartment type.
        Please
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-5 text-zinc-900">
      <div class="flex gap-2 items-start w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/d0ac656cc0eeaf27ef02915b28f1eb70c3e176eca16f9bf126aeb5614b7ea4ac?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Children and beds icon"
        />
        <div class="w-[123px] md:w-auto">Children and beds</div>
      </div>
      <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] md:max-w-full">
        <div class="leading-6">Child policies</div>
        <div class="mt-3 font-bold">
          Children of any age are welcome.
        </div>
        <div class="mt-3">
          Children 3 years and above will be charged as adults at this
          property.
        </div>
        <div class="mt-3 leading-5">
          To see <button class="underline" tabindex="0">correct prices</button> and occupancy
          information, please add the number of children in your group and
          their ages to your search.
        </div>
      </div>

      <div class="flex flex-col mt-4 w-full md:max-w-full">
        <div class="flex flex-col w-full md:max-w-full">
          <div class="leading-6 text-zinc-900">
            Cot and extra bed policies
          </div>
          <div class="flex overflow-hidden flex-col p-2.5 mt-4 max-w-full leading-none rounded border border-solid border-neutral-200 w-full md:w-auto">
            <div class="flex flex-wrap gap-10 justify-between items-center w-full md:max-w-full">
              <div class="gap-4 self-stretch my-auto text-zinc-900 w-[71px] md:w-auto">0 - 2 years</div>
              <div class="self-stretch my-auto text-green-700">Free</div>
            </div>
            <div class="flex mt-2.5 w-full bg-neutral-200 min-h-[1px]"></div>
            <div class="flex flex-wrap gap-10 justify-between items-center mt-2.5 w-full md:max-w-full">
              <div class="flex gap-4 items-center self-stretch my-auto text-zinc-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/c23164db791a428a30844096864d2d58c2b5de075646d6540f293d99cc0a163d?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
                  class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  alt="Cot icon"
                />
                <div class="self-stretch my-auto">Cot upon request</div>
              </div>
              <div class="self-stretch my-auto text-green-700">Free</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4 w-full leading-none text-zinc-900 md:max-w-full">
          <div class="leading-5">
            The number of cots allowed is dependent on the option you choose.
            Please check your selected option for more information.
          </div>
          <div class="mt-2">
            There are no extra beds available at this property.
          </div>
          <div class="mt-2">
            All cots are subject to availability.
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-center mt-5 w-full text-zinc-900">
      <div class="flex gap-2 items-start self-stretch my-auto leading-5 w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/bab028098fe16bc9ce20d7fa8ecfa6346ad0ffed440b9020776c2fa4899199f0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Age restriction icon"
        />
        <div class="w-[100px] md:w-auto">Age restriction</div>
      </div>
      <div class="flex-1 shrink self-stretch my-auto leading-none basis-0 md:max-w-full">
        The minimum age for check-in is 18
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-5 text-zinc-900">
      <div class="flex gap-2 items-start w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/6df9a67be5642a7077091e5101269d3b16201fe2942ffbf1ff8bd0771f929f13?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Payment icon"
        />
        <div class="w-[178px] md:w-auto">Payments by Mega-Chalupy</div>
      </div>
      <div class="flex-1 shrink basis-0 md:max-w-full">
        Mega-Chalupy takes your payment on behalf of the property for this stay,
        but make sure you have cash for any extras once you get there.
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-none text-zinc-900">
      <div class="flex gap-2 items-start whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/6bef349943fe996a9b5fa323b5e70200fb2bd8539a3437ff3e25991be8c54b32?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="No smoking icon"
        />
        <div>Smoking</div>
      </div>
      <div class="flex-1 shrink basis-0 md:max-w-full">
        Smoking is not allowed.
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-none text-zinc-900">
      <div class="flex gap-2.5 items-start whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/6015d2ddedc7382f97ad0314b856148a64aef68d7b348b125a16574553db7c5b?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 aspect-[0.95] w-[19px]"
          alt="No parties icon"
        />
        <div>Parties</div>
      </div>
      <div class="flex-1 shrink basis-0 md:max-w-full">
        Parties/events are not allowed
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-none text-zinc-900">
      <div class="flex gap-2 items-start whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/0f33f31704c5343da6f696f36fb2d964e8cc37e51aa8cd0d54e524fac8ed3901?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="Quiet hours icon"
        />
        <div>Quiet hours</div>
      </div>
      <div class="flex-1 shrink basis-0 md:max-w-full">
        Guests must be quiet between 22:00 and 09:00.
      </div>
    </div>

    <div class="flex flex-wrap gap-8 items-start mt-5 w-full leading-none text-zinc-900">
      <div class="flex gap-2.5 items-start whitespace-nowrap w-[151px] md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/dd4b26c03048bf7c09d9d41224995cd7680315219d6a6aca26ca1ca807be691e?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain shrink-0 w-5 aspect-square"
          alt="No pets icon"
        />
        <div>Pets</div>
      </div>
      <div class="flex-1 shrink basis-0 md:max-w-full">
        Pets are not allowed.
      </div>
    </div>
  </div>
</template>

