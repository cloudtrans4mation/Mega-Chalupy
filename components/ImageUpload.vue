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

// Updated model to hold multiple image URLs
const model = defineModel<string[]>([])

const oAuthImageSrc = computed(() =>
  model.value.every((src) => /^(https:\/\/avatars|https:\/\/lh3)/.test(src))
)

let widget: any

if (import.meta.client) {
  widget = window.cloudinary.createUploadWidget(
    {
      cloud_name: config.cloudinaryName,
      upload_preset: "mega_chalupy",
      multiple: true,
      maxFiles: 5,
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
    },
    (error: any, result: { event: string; info: { path: string, public_id: string } }) => {
      if (!error && result && result.event === 'success') {
        const path = result.info.path
        const filename = path.split('/').pop()
        const imagePublicId = result.info.public_id

        console.log('path', path)
        console.log('filename', filename)
        console.log('imagePublicId', imagePublicId)
        console.log('model', model)

        emit('imagePublicId', imagePublicId)

        if (filename) {
          // Append the new filename to the model array
          model.value = [...model.value, filename]
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
    class="flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
    @click="openUploadWidget" v-if="!profile">
    <Icon name="material-symbols:add-photo-alternate-outline-rounded" class="size-12" />
    <div class="text-lg font-semibold">Click to upload</div>
  </div>
  
  <div v-else>
    <Button @click="openUploadWidget" outline label="Click to upload" class="md:w-40">
      <Icon name="material-symbols:add-photo-alternate-outline-rounded" class="size-6" />
    </Button>
  </div>

  <!-- Loop through model array to display each image -->
  <div v-if="model.length">
    <div class="image-gallery grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <NuxtImg
        v-for="(src, index) in model"
        :key="index"
        :src="src"
        alt="Uploaded Image"
        class="rounded-lg shadow-lg border border-gray-200 object-cover object-center max-w-full max-h-48"
        :provider="oAuthImageSrc ? null : 'cloudinary'"
      />
    </div>
  </div>
</template>
