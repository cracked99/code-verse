import { create } from 'zustand'

interface ModelState {
  selectedModels: string[]
  toggleModel: (modelId: string) => void
  responses: Record<string, any>
  setResponse: (modelId: string, response: any) => void
}

export const useModelStore = create<ModelState>((set) => ({
  selectedModels: [],
  toggleModel: (modelId) =>
    set((state) => ({
      selectedModels: state.selectedModels.includes(modelId)
        ? state.selectedModels.filter(id => id !== modelId)
        : [...state.selectedModels, modelId]
    })),
  responses: {},
  setResponse: (modelId, response) =>
    set((state) => ({
      responses: { ...state.responses, [modelId]: response }
    }))
}))
