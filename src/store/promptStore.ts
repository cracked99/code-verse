import { create } from 'zustand'

interface PromptState {
  prompt: string
  setPrompt: (prompt: string) => void
  analysis: string | null
  setAnalysis: (analysis: string | null) => void
}

export const usePromptStore = create<PromptState>((set) => ({
  prompt: '',
  setPrompt: (prompt) => set({ prompt }),
  analysis: null,
  setAnalysis: (analysis) => set({ analysis }),
}))
