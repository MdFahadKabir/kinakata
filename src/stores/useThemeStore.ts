'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '@/types';

interface ThemeState {
  theme: Theme;
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
  toggleTheme: () => void;
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      mounted: false,
      setMounted: (mounted) => set({ mounted }),
      toggleTheme: () => {
        const newTheme: Theme = get().theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme);
          state.setMounted(true);
        }
      },
    },
  ),
);
