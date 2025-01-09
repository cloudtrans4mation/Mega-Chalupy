<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { LoginSchema } from '~/zod-schemas/auth-schemas'
import crypto from 'crypto'

const isLoading = ref(false)
const errors = reactive<{ [key: string]: string }>({ email: '', password: '', err: '' })
const toast = useToast()

const loginData = reactive({
  email: '',
  password: '',
})

async function login() {
  Object.keys(errors).forEach(key => (errors[key] = ''))

  const result = LoginSchema.safeParse(loginData)
  if (!result.success) {
    result.error.errors.forEach(error => {
      errors[error.path[0]] = error.message
    })
    return
  }
  isLoading.value = true

  try {
    const res = await $fetch('/api/v1/auth/login', {
      method: 'POST',
      body: loginData,
    })
    if (res) {
      toast.success('Logged in successfully!')
      await navigateTo('/')
    }
  } catch (error: any) {
    console.error(error.data.message)
    errors.err = error.data.message
  } finally {
    isLoading.value = false
  }
}

useSeoMeta({
  title: 'Login',
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen  px-4 py-8">
    <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
      <Logo class="mx-auto" big />
      <Heading title="Welcome to Mega Chalupy" subTitle="Log in to your account" />

      <form @submit.prevent="login" class="flex flex-col gap-6">
        <!-- Email Input -->
        <Input
          v-model="loginData.email"
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
          v-model="loginData.password"
          id="password"
          label="Password"
          type="password"
          :disabled="isLoading"
          required
          :error="errors.password"
          class="focus:ring-blue-500 focus:border-blue-500 border"
        />

        <!-- Error Message -->
        <p v-if="errors.err" class="text-sm text-rose-500">
          {{ errors.err }}
        </p>

        <!-- Forgot Password Link -->
        <NuxtLink
          to="/reset-password"
          class="text-sm text-blue-600 hover:text-blue-500 self-end"
        >
          Forgot password?
        </NuxtLink>

        <!-- Login Button -->
        <Button
          type="submit"
          :disabled="isLoading"
          label="Log in"
          style="background-color: #007bff; color: white; border-radius: 8px;"
        />
      </form>

      <!-- Social Login Options -->
      <div class="mt-6">
        <p class="text-sm text-gray-600 text-center">
          Or sign in with
        </p>
        <div class="flex justify-center space-x-4 mt-4">
          <!-- Google -->
          <button
            type="button"
            class="flex items-center px-4 py-2 border rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            aria-label="Sign in with Google"
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
            aria-label="Sign in with Apple"
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
            aria-label="Sign in with Facebook"
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


      
      <!-- Register Link -->
      <p class="mt-6 text-sm text-gray-600 text-center">
        Don't have an account? 
        <a href="/register" class="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for button and form enhancements */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

input:disabled {
  opacity: 0.7;
}

.text-sm {
  font-size: 0.875rem;
}

.bg-blue-600 {
  background-color: #007bff;
}

.hover\:text-blue-500:hover {
  color: #0056b3;
}

.focus\:ring-blue-500:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.focus\:border-blue-500:focus {
  border-color: #007bff;
}
</style>
