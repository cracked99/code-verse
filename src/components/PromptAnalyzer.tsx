import { useEffect } from 'react'
import { usePromptStore } from '../store/promptStore'
import { analyzePrompt } from '../services/api'

export default function PromptAnalyzer() {
  const prompt = usePromptStore((state) => state.prompt)
  const setAnalysis = usePromptStore((state) => state.setAnalysis)

  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      if (prompt.trim().length > 10) {
        try {
          const analysis = await analyzePrompt(prompt)
          setAnalysis(analysis)
        } catch (error) {
          console.error('Analysis failed:', error)
        }
      }
    }, 500)

    return () => clearTimeout(debounceTimeout)
  }, [prompt, setAnalysis])

  return null
}
