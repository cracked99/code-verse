import { useMutation } from '@tanstack/react-query'
import { analyzePrompt } from '../services/api'
import { usePromptStore } from '../store/promptStore'

export function usePromptAnalysis() {
  const setAnalysis = usePromptStore((state) => state.setAnalysis)

  return useMutation({
    mutationFn: analyzePrompt,
    onSuccess: (data) => {
      setAnalysis(data)
    }
  })
}
