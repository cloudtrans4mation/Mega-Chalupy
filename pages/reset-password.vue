<script lang="ts" setup>
import { EmailSchema } from '~/zod-schemas/auth-schemas'

const email = ref('')
const error = ref('')
const emailSent = ref()
const isLoading = ref(false)



async function passwordReset() {
  // Clear the previous error message
  error.value = '';

  // Validate the email before making the request
  const result = EmailSchema.safeParse(email.value);
  if (!result.success) {
    error.value = result.error.errors[0].message; // Display validation error
    return;
  }

  try {
    isLoading.value = true;

    // Make the API call
    const res = await $fetch('/api/v1/auth/reset-password', {
      method: 'POST',
      body: { email: email.value },
    });

    // Check if the email was successfully sent
    if (res?.success) {
      emailSent.value = true;
    } else {
      // Handle cases where the response doesn't indicate success
      error.value = res?.message || 'Failed to send reset email. Please try again later.';
    }
  } catch (err: any) {
    // Log the error to understand what happened
    console.error('Error during password reset:', err);

    // Handle and display meaningful error messages
    if (err?.data?.message) {
      error.value = `Error: ${err.data.message}`; // Server-specific error message
    } else if (err?.status === 500) {
      error.value = 'Internal Server Error. Please try again later.'; // Explicitly handle 500
    } else {
      error.value = err.message || 'An unknown error occurred.';
    }
  } finally {
    isLoading.value = false;
  }
}



</script>

<template>
  <section class="flex flex-col items-center max-w-xl mx-auto mt-16">
    <Logo
      class="mb-6"
      big />
    <EditFormContainer>
      <Heading
        title="Forgot your password?"
        subTitle="No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. " />

      <p
        v-if="emailSent"
        class="mt-4 font-semibold text-emerald-500">
        We have emailed your password reset link.
      </p>
      <form
        class="my-4"
        @submit.prevent="passwordReset">
        <Input
          id="email"
          type="email"
          label="Email"
          v-model="email"
          :error
          :disabled="isLoading" />
        <Button
          label="Email password reset link"
          type="submit"
          class="mt-4"
           style="background-color: blue;"
          :disabled="isLoading" />
      </form>
    </EditFormContainer>
  </section>
</template>
