<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { RegisterSchema } from '~/zod-schemas/auth-schemas'
import { ref, reactive } from 'vue'
import { useSeoMeta } from '#imports'
import { navigateTo } from 'nuxt/app'

// Loading and error state management
const isLoading = ref(false)
const errors = reactive<{ [key: string]: string }>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  clientType: '',
})

const toast = useToast()

// Reactive state for registration form data
const registerData = reactive({
  name: '',
  email: '',
  password: '',
  clientType: '', // This will be set based on the user selection
  err: '',
})

const confirmPassword = ref('')

// Function to set client type
function setClientType(type: 'owner' | 'client') {
  registerData.clientType = type
  console.log('Client Type Set:', registerData.clientType) // Debug log
}

// Function to check if a client type is selected
function isClientTypeSelected(type: 'owner' | 'client') {
  return registerData.clientType === type
}

// Function to register a user
async function register() {
  // Validate if client type is selected
  if (!registerData.clientType) {
    errors.clientType = 'Please select a client type'
    return
  } else {
    errors.clientType = ''
  }

  // Clear any previous errors
  Object.keys(errors).forEach(key => (errors[key] = ''))

  // Validate form data against the schema
  const result = RegisterSchema.safeParse({
    ...registerData,
    confirmPassword: confirmPassword.value,
  })

  if (!result.success) {
    result.error.errors.forEach(error => {
      errors[error.path[0]] = error.message
    })
    return
  }

  try {
    isLoading.value = true

    // Log data before sending to check if clientType is present
    console.log('Sending Data to Backend:', registerData) 

    // Make a POST request to register the user
    const res = await $fetch('/api/v1/auth/register', {
      method: 'POST',
      body: registerData,
    })

    if (res) {
      toast.success('Registered successfully')
      await navigateTo('/')
    }
  } catch (error: any) {
    console.error(error.data.message)
    errors.err = error.data.message
    toast.error('Registration failed: ' + error.data.message)
  } finally {
    isLoading.value = false
  }
}

// Set SEO meta tags
useSeoMeta({
  title: 'Register',
})
</script>

<template>
  <div class="relative w-full h-full max-w-2xl px-4 mx-auto my-6 mt-16 md:h-auto lg:h-auto md:px-0">
    <div class="flex flex-col gap-4">
      <Logo class="mx-auto" big />

      <Heading title="Welcome to Mega Chalupy" subTitle="Create an account" />
      <form @submit.prevent="register" class="flex flex-col gap-4">
        <Input v-model="registerData.name" id="name" label="Name" :disabled="isLoading" required :error="errors.name" />
        <Input v-model="registerData.email" id="email" label="Email" type="email" :disabled="isLoading" required
          :error="errors.email" />
        <Input v-model="registerData.password" id="password" label="Password" type="password" :disabled="isLoading"
          required :error="errors.password" />
        <Input v-model="confirmPassword" id="confirm password" label="Confirm password" type="password"
          :disabled="isLoading" required :error="errors.confirmPassword" />

        <!-- Client Type Section -->
        <main class="flex flex-col items-center overflow-hidden">
          <section class="flex gap-6 justify-center items-center w-full max-md:flex-col max-md:gap-4">
            <article @click="setClientType('owner')"
              :class="['article-btn flex flex-col p-5 bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 min-w-[100px] w-[400px] max-md:w-full cursor-pointer', { 'border-blue-500': isClientTypeSelected('owner') }]">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57880e77cbf696f15b15657024f2db286c72ac846b9077600fd3b6899e2d9acc?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Owner icon" class="object-contain aspect-square w-[50px]" />
              <div class="flex flex-col mt-6 w-full">
                <h2 class="text-base font-semibold text-black">As owner</h2>
                <p class="text-sm font-medium text-neutral-500">I want to post my rental</p>
              </div>
            </article>

            <article @click="setClientType('client')"
              :class="['article-btn flex flex-col p-5 bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 min-w-[200px] w-[400px] max-md:w-full cursor-pointer', { 'border-blue-500': isClientTypeSelected('client') }]">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94664606cea22aac92a72229f1fa5eb54c1fdfd882f2dca8d03e3b678ba2c334?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Client icon" class="object-contain aspect-square w-[50px]" />
              <div class="flex flex-col mt-6 w-full">
                <h2 class="text-base font-semibold text-black">As Client</h2>
                <p class="text-sm font-medium text-neutral-500">I want to rent</p>
              </div>
            </article>
          </section>

          <hr class="self-center w-[304px] h-0 border border-solid border-neutral-200 mt-6 max-md:w-full" />
        </main>

        <!-- Error message for client type -->
        <p class="text-sm text-rose-500" v-if="errors.clientType">
          {{ errors.clientType }}
        </p>

        <p class="text-sm text-rose-500" v-if="errors.err">
          {{ errors.err }}
        </p>

        <Button type="submit" label="Register" :disabled="isLoading" style="background-color: blue;">
        </Button>
      </form>
    </div>

    <div class="flex flex-col gap-4 mt-3">
      <hr />
      <a href="login/google">
        <Button outline label="Continue with Google">
          <Icon name="logos:google-icon" class="mr-1 size-5" />
        </Button>
      </a>
      <a href="login/github">
        <Button outline label="Continue with Github">
          <Icon name="logos:github-icon" class="mr-1 size-5" />
        </Button>
      </a>
    </div>

    <div class="flex flex-row justify-center gap-2 mt-4 items-centre">
      <div>Already have an account?</div>
      <NuxtLink to="/login" class="cursor-pointer text-neutral-800 hover:underline">
        Log in
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.article-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.article-btn img {
  transition: transform 0.3s ease;
}

.article-btn:hover img {
  transform: rotate(10deg);
}

.border-blue-500 {
  border-color: #3b82f6;
  /* Tailwind's blue-500 color */
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
</style>
