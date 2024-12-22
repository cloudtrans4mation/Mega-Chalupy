<template>
    <section class="flex flex-col">
        <div class="flex flex-col w-full max-md:max-w-full"></div>

        <div class="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
                <div class="flex flex-wrap gap-5 justify-center items-center w-full max-md:max-w-full">
                    <div
                        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Cot Availability
                        </h3>
                        <div
                            class="flex flex-wrap gap-10 justify-between items-center px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full">
                            <label for="squareMeterCount" class="sr-only">Square meter count</label>
                            <input type="number" id="squareMeterCount" :value="squareMeterCount"
                                placeholder="Please enter square meter count"
                                class="self-stretch my-auto w-full bg-transparent"
                                @input="$emit('update:squareMeterCount', $event.target.value)" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                        </div>
                    </div>

                    <div
                        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Owner's Message
                        </h3>

                        <div
                            class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full">
                            <label for="ownerMessage" class="sr-only">Custom message to hosts</label>

                            <textarea id="ownerMessage" placeholder="Please enter your custom message to your hosts."
                                class="w-full bg-transparent resize-none" :value="value"
                                @input="$emit('update:value', $event.target.value)"></textarea>
                        </div>
                    </div>
                </div>

                <div
                    class="flex flex-wrap gap-5 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    <div
                        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Check-in & Check-out Guidelines
                        </h3>

                        <div
                            class="flex flex-wrap gap-5 items-start mt-2 w-full text-sm font-medium text-center whitespace-nowrap text-neutral-500 max-md:max-w-full">
                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="checkInDate" class="sr-only">Check-in date</label>
                                <input type="date" id="checkInDate" placeholder="From"
                                    class="self-stretch my-auto w-full bg-transparent" :value="checkIn"
                                    @input="$emit('update:checkIn', $event.target.value)" />
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>

                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="checkOutDate" class="sr-only">Check-out date</label>
                                <input type="date" id="checkOutDate" placeholder="Till"
                                    class="self-stretch my-auto w-full bg-transparent" :value="checkOut"
                                    @input="$emit('update:checkOut', $event.target.value)" />
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Children Guidelines
                        </h3>
                        <div
                            class="flex flex-wrap gap-5 items-start mt-2 w-full text-sm font-medium text-center text-neutral-500 max-md:max-w-full">
                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="childrenAllowance" class="sr-only">Children Allowance</label>

                                <select id="childrenAllowance" :value="childrenAllowance"
                                    class="self-stretch my-auto w-full bg-transparent appearance-none"
                                    @change="$emit('update:childrenAllowance', $event.target.value)">
                                    <option value="">Children Allowance</option>
                                    <option value="allowed">Allowed</option>
                                    <option value="not-allowed">Not Allowed</option>
                                </select>

                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>

                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="cotAvailability" class="sr-only">Cot availability</label>

                                <select id="cotAvailability" :value="cotAvailability"
                                    class="self-stretch my-auto w-full bg-transparent appearance-none"
                                    @change="$emit('update:cotAvailability', $event.target.value)">
                                    <option value="">Cot availability</option>
                                    <option value="available">Available</option>
                                    <option value="not-available">Not Available</option>
                                </select>

                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="flex flex-col gap-5 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    <div
                        class="flex flex-col justify-center self-stretch my-auto min-h-[70px] min-w-[240px] w-[522px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Neighboring Activities Setup
                        </h3>

                        <div
                            class="flex flex-wrap gap-5 items-start mt-2 w-full text-sm font-medium text-neutral-500 max-md:max-w-full">
                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 text-center bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="activitySelect" class="sr-only">Choose Activity</label>

                                <select id="activitySelect" :value="activity"
                                    class="self-stretch my-auto w-full bg-transparent appearance-none"
                                    @change="$emit('update:activity', $event.target.value)">
                                    <option value="">Choose Activity</option>
                                    <option value="hiking">Hiking</option>
                                    <option value="cycling">Cycling</option>
                                    <option value="swimming">Swimming</option>
                                </select>

                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>

                            <div
                                class="flex flex-1 shrink self-stretch px-2.5 py-3 bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="kmInput" class="sr-only">Number of KM</label>

                                <input type="number" id="kmInput" :value="km" placeholder="Type number of KM"
                                    class="self-stretch my-auto w-full bg-transparent"
                                    @input="$emit('update:km', $event.target.value)" />
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                        <h3 class="text-base font-semibold leading-none text-black max-md:max-w-full">
                            Events Setup
                        </h3>

                        <div
                            class="flex flex-wrap gap-5 items-start mt-2 w-full text-sm font-medium text-center text-neutral-500 max-md:max-w-full">
                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="eventsAllowance" class="sr-only">Parties/Events Allowance</label>

                                <select id="eventsAllowance"
                                    class="self-stretch my-auto w-full bg-transparent appearance-none"
                                    :value="eventsAllowance"
                                    @change="$emit('update:eventsAllowance', $event.target.value)">
                                    <option value="">Parties/Events Allowance</option>
                                    <option value="allowed">Allowed</option>
                                    <option value="not-allowed">Not Allowed</option>
                                </select>

                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>

                            <div
                                class="flex flex-1 shrink gap-10 justify-between items-center px-2.5 py-3 bg-white rounded-lg border border-solid basis-0 border-black border-opacity-10 min-h-[40px] min-w-[240px]">
                                <label for="quietHours" class="sr-only">Quiet Hours</label>

                                <select id="quietHours"
                                    class="self-stretch my-auto w-full bg-transparent appearance-none"
                                    :value="quietHours" @change="$emit('update:quietHours', $event.target.value)">
                                    <option value="">Quiet Hours</option>
                                    <option value="22:00-06:00">22:00 - 06:00</option>
                                    <option value="23:00-07:00">23:00 - 07:00</option>
                                </select>

                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                    alt="" class="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[2]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropertyGuidelines',

  props: {
    checkIn: {
      type: String,
      required: false,
      default: ''
    },
    checkOut: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    eventsAllowance: {
      type: String,
      required: false,
      default: '',
    },
    quietHours: {
      type: String,
      required: false,
      default: '',
    },
    squareMeterCount: {
      type: Number,
      required: false,
      default: 0,
    },
    childrenAllowance: {
      type: String,
      required: false,
      default: '',
    },
    activity: {
      type: String,
      required: false,
      default: '',
    },
    km: {
      type: [String, Number],
      required: false,
      default: '',
    },
    cotAvailability: {
      type: String,
      required: false,
      default: '',
    },
  },

  emits: ['PropertyGuidelinesSelected'],

  methods: {
    // Emit all form data as a single object
    emitAllFields() {
      const data = {
        checkInDate: this.checkIn,
        checkOutDate: this.checkOut,
        ownerMessage: this.value,
        eventsAllowance: this.eventsAllowance,
        quietHours: this.quietHours,
        squareMeterCount: this.squareMeterCount,
        childrenAllowance: this.childrenAllowance,
        activity: this.activity,
        km: this.km,
        cotAvailability: this.cotAvailability
      };
      
      // Emit the entire form data object to the parent
      this.$emit('PropertyGuidelinesSelected', data);
    }
  },

  watch: {
    // Watch for changes in any property and emit the updated data
    checkIn() {
      this.emitAllFields();
    },
    checkOut() {
      this.emitAllFields();
    },
    value() {
      this.emitAllFields();
    },
    eventsAllowance() {
      this.emitAllFields();
    },
    quietHours() {
      this.emitAllFields();
    },
    squareMeterCount() {
      this.emitAllFields();
    },
    childrenAllowance() {
      this.emitAllFields();
    },
    activity() {
      this.emitAllFields();
    },
    km() {
      this.emitAllFields();
    },
    cotAvailability() {
      this.emitAllFields();
    }
  },

  // Optional lifecycle hook to emit data on component mounted
  mounted() {
    this.emitAllFields();
  }
});
</script>


<style>
input,
textarea,
select {
    border: none;
    outline: none;
    /* Removes the outline when input is focused */
}
</style>