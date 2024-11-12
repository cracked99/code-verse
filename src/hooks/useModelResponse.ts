import { useMutation } from '@tanstack/react-query'
import { getModelResponse } from '../services/api'
import { useModelStore } from '../store/modelStore'

export function useModelResponse() {
  const setResponse = useModelStore((state) => state.setResponse)

  return useMutation({
    mutationFn: async ({ modelId, prompt }: { modelId: string; prompt: string }) => {
      const response = await getModelResponse(modelId, prompt)
      return { modelId, response }
    },
    onSuccess: ({ modelId, response }) => {
      setResponse(modelId, response)
    }
  })
}
