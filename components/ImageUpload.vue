<script lang="ts" setup>
type ImageUploadProps = {
  profile?: boolean
}
defineProps<ImageUploadProps>()

const config = useRuntimeConfig().public
const emit = defineEmits(['imagePublicId'])

declare global {
  interface Window {
    cloudinary: any
  }
}

const model = defineModel<string>()

const oAuthImageSrc = computed(() => /^(https:\/\/avatars|https:\/\/lh3)/.test(model))

let widget: any

if (import.meta.client) {
  widget = window.cloudinary.createUploadWidget(
    {
      cloud_name: config.cloudinaryName,
      upload_preset: "mega_chalupy",
      multiple: false,
      maxFiles: 1,
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
    },
    (error: any, result: { event: string; info: { path: string } }) => {
      if (!error && result && result.event === 'success') {
        const path = result.info.path
        const filename = path.split('/').pop()
        const imagePublicId = result.info.public_id

        emit('imagePublicId', imagePublicId)
        if (filename) {
          model.value = filename
        }
      }
    },
  )
}

function openUploadWidget() {
  widget.open()
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-6 p-16 border-4 border-dashed cursor-pointer hover:opacity-80 border-neutral-400 text-neutral-700 rounded-lg max-w-lg mx-auto"
    @click="openUploadWidget"
    v-if="!profile">
    <Icon
      name="material-symbols:add-photo-alternate-outline-rounded"
      class="w-16 h-16 text-neutral-500" />
    <div class="text-2xl font-bold">Click to Upload Your Profile Image</div>
    <div class="text-sm text-neutral-500">Supports PNG, JPG, JPEG, or WEBP formats</div>
  </div>

  <div v-else class="flex flex-col items-center mt-8">
    <Button
      @click="openUploadWidget"
      outline
      label="Click to Upload Image"
      class="w-48">
      <Icon
        name="material-symbols:add-photo-alternate-outline-rounded"
        class="w-6 h-6" />
    </Button>
  </div>

  <div v-if="model" class="mt-6 flex justify-center">
    <div class="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300">
      <NuxtImg
        v-if="oAuthImageSrc"
        alt="Profile image"
        class="object-cover w-full h-full"
        :src="model" />
      <NuxtImg
        v-else
        provider="cloudinary"
        alt="Profile image"
        class="object-cover w-full h-full"
        :src="model" />
    </div>
  </div>
</template>
