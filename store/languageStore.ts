// stores/languageStore.js

import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: localStorage.getItem('language') || '~/public/lang.svg',
  }),

  actions: {
    setLanguage(flag) {
      this.currentLang = flag;
      localStorage.setItem('language', flag); // Save language selection to localStorage
    },
  },
});
