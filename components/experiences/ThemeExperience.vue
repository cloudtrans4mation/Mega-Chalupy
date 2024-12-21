<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'

const modelValue = ref([]);

const inputValue = ref('');
const showSuggestions = ref(false);

const availableTags = [
    'Animals', 'Art and design', 'Culture, society, and science', 'Drink',
    'Entertainment', 'Food', 'History and literature', 'Nature and outdoors',
    'Sightseeing, shopping and transportation', 'Sports', 'Wellness'
];

const suggestions = computed(() => {
    return availableTags.filter(tag =>
        tag.toLowerCase().includes(inputValue.value.toLowerCase()) &&
        !modelValue.value.includes(tag)
    );
});

const addTag = (tag: string) => {
    if (!modelValue.value.includes(tag)) {
        modelValue.value.push(tag);
        inputValue.value = '';
        showSuggestions.value = false;
    }
};

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value;
    showSuggestions.value = inputValue.value.trim() !== '';
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && inputValue.value.trim() !== '') {
        addTag(inputValue.value.trim());
    }
};

const handleClickOutside = (event: MouseEvent) => {
    const inputElement = document.querySelector('.tags-input-input') as HTMLElement;
    const suggestionsElement = document.querySelector('.suggestions') as HTMLElement;
    if (inputElement && suggestionsElement && !inputElement.contains(event.target as Node) && !suggestionsElement.contains(event.target as Node)) {
        showSuggestions.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>







<template>
    <div class="relative">
        <TagsInputRoot v-model="modelValue"
            class="flex gap-2 items-center border p-2 rounded-lg w-full max-w-[480px] flex-wrap border-blackA7 bg-white">
            <TagsInputItem v-for="item in modelValue" :key="item" :value="item"
                class="text-black flex shadow-md items-center justify-center gap-2 bg-green8 aria-[current=true]:bg-green9 rounded p-1">
                <TagsInputItemText class="text-sm pl-1" />
                <TagsInputItemDelete class="p-0.5 rounded bg-transparent hover:bg-blackA4">
                    <Icon icon="lucide:x" />
                </TagsInputItemDelete>
            </TagsInputItem>

            <TagsInputInput
                :value="inputValue"
                @input="handleInput"
                @keydown="handleKeyDown"
                placeholder="Themes..."
                class="text-sm focus:outline-none flex-1 rounded text-green9 bg-transparent placeholder:text-mauve9 px-1 tags-input-input" />
        </TagsInputRoot>

        <div v-if="showSuggestions && suggestions.length" class="absolute mt-2 bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto w-full left-0 suggestions">
            <div v-for="suggestion in suggestions" :key="suggestion"
                class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                @click="addTag(suggestion)">
                {{ suggestion }}
            </div>
        </div>
    </div>
</template>





