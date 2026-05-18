'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en } from '@/data/en';
import { bn } from '@/data/bn';
import type { Language, Translations } from '@/types';

interface LanguageState {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const translations = { en, bn } as const;

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: 'en',
      t: en,
      toggleLanguage: () => {
        const newLang: Language = get().lang === 'en' ? 'bn' : 'en';
        set({ lang: newLang, t: translations[newLang] });
      },
    }),
    {
      name: 'language',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.t = translations[state.lang];
        }
      },
    },
  ),
);
