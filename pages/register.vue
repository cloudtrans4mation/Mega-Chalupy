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
  <div class="flex items-center justify-center min-h-screen px-6 py-8 max-w-[60rem] ">
    <div class="bg-white shadow-lg rounded-lg  w-full p-8 space-y-6">
      <Logo class="mx-auto mb-6" big />
      <Heading title="Welcome to Mega Chalupy" subTitle="Create an account" />

      <form @submit.prevent="register" class="flex flex-col gap-6">
        <!-- Name Input -->
        <Input
          v-model="registerData.name"
          id="name"
          label="Name"
          :disabled="isLoading"
          required
          :error="errors.name"
          class="focus:ring-blue-500 focus:border-blue-500 border"
        />

        <!-- Email Input -->
        <Input
          v-model="registerData.email"
          id="email"
          label="Email Address"
          type="email"
          :disabled="isLoading"
          required
          :error="errors.email"
          class="focus:ring-blue-500 focus:border-blue-500 border"
        />

        <!-- Password Input -->
        <Input
          v-model="registerData.password"
          id="password"
          label="Password"
          type="password"
          :disabled="isLoading"
          required
          :error="errors.password"
          class="focus:ring-blue-500 focus:border-blue-500 border"
        />

        <!-- Confirm Password Input -->
        <Input
          v-model="confirmPassword"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          :disabled="isLoading"
          required
          :error="errors.confirmPassword"
          class="focus:ring-blue-500 focus:border-blue-500 border"
        />

        <!-- Client Type Section -->
        <main class="flex flex-col items-center overflow-hidden mt-6 space-y-6">
          <section class="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
            <!-- Owner Button -->
            <article
              @click="setClientType('owner')"
              :class="[
                'article-btn flex flex-col items-center p-6 bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 w-full max-w-xs cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105',
                { 'border-blue-500': isClientTypeSelected('owner') }
              ]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57880e77cbf696f15b15657024f2db286c72ac846b9077600fd3b6899e2d9acc?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Owner icon"
                class="object-contain aspect-square w-[50px] mx-auto"
              />
              <div class="flex flex-col mt-4 w-full text-center">
                <h2 class="text-base font-semibold text-black">As Owner</h2>
                <p class="text-sm font-medium text-neutral-500">I want to post my rental</p>
              </div>
            </article>

            <!-- Client Button -->
            <article
              @click="setClientType('client')"
              :class="[
                'article-btn flex flex-col items-center p-6 bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 w-full max-w-xs cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105',
                { 'border-blue-500': isClientTypeSelected('client') }
              ]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94664606cea22aac92a72229f1fa5eb54c1fdfd882f2dca8d03e3b678ba2c334?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Client icon"
                class="object-contain aspect-square w-[50px] mx-auto"
              />
              <div class="flex flex-col mt-4 w-full text-center">
                <h2 class="text-base font-semibold text-black">As Client</h2>
                <p class="text-sm font-medium text-neutral-500">I want to rent</p>
              </div>
            </article>
          </section>

          <hr class="self-center w-full h-0 border border-solid border-neutral-200 mt-6" />
        </main>

        <!-- Error message for client type -->
        <p class="text-sm text-rose-500" v-if="errors.clientType">
          {{ errors.clientType }}
        </p>

        <p class="text-sm text-rose-500" v-if="errors.err">
          {{ errors.err }}
        </p>

        <!-- Register Button -->
        <Button
          type="submit"
          :disabled="isLoading"
          label="Register"
          style="background-color: #007bff; color: white; border-radius: 8px;"
        />
      </form>

      <!-- Social Login Options -->
      <div class="mt-6 space-y-4">
        <p class="text-sm text-gray-600 text-center">
          Or sign up with
        </p>
        <div class="flex justify-center space-x-4">
          <!-- Google -->
          <button
            type="button"
            class="flex items-center px-4 py-2 border rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            aria-label="Sign up with Google"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/3d5797f45b26ee3c25aa64985eb241909d242626e81fe9b32a765e5214712594"
              alt="Google logo"
              class="h-5 mr-2"
            />
            Google
          </button>

          <!-- Apple -->
          <button
            type="button"
            class="flex items-center px-4 py-2 border rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            aria-label="Sign up with Apple"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/34870c274940a3247bb0e6dd59307d645fa316517a8df67bd6624f54037f042a"
              alt="Apple logo"
              class="h-5 mr-2"
            />
            Apple
          </button>

          <!-- Facebook -->
          <button
            type="button"
            class="flex items-center px-4 py-2 border rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            aria-label="Sign up with Facebook"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/7ef9b09388f19b91553be60a3d9efaca93b73e22315cdceb1cb397447048b8c6"
              alt="Facebook logo"
              class="h-5 mr-2"
            />
            Facebook
          </button>
        </div>
      </div>

      <!-- Login Link -->
      <p class="mt-6 text-sm text-gray-600 text-center">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 hover:underline">
          Log in
        </NuxtLink>
      </p>
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
