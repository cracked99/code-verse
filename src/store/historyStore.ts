import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PromptHistory } from '../types'

interface HistoryState {
  history: PromptHistory[];
  addToHistory: (entry: PromptHistory) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (entry) => set((state) => ({
        history: [entry, ...state.history]
      })),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: 'prompt-history'
    }
  )
)
