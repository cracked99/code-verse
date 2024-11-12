import { useState } from 'react'
import PromptInput from '../components/PromptInput'
import ModelSelector from '../components/ModelSelector'
import AnalysisResults from '../components/AnalysisResults'
import ModelResponses from '../components/ModelResponses'

export default function PromptEditor() {
  const [analysis, setAnalysis] = useState(null)
  const [responses, setResponses] = useState({})
  const [selectedModels, setSelectedModels] = useState<string[]>([])

  const handleAnalyze = async (prompt: string) => {
    // Simulate API call for analysis
    const mockAnalysis = {
      score: Math.round(Math.random() * 100),
      suggestions: [
        'Consider adding more context',
        'Be more specific about the desired output',
        'Add examples to clarify expectations'
      ],
      tokenCount: Math.round(Math.random() * 500)
    }
    setAnalysis(mockAnalysis)

    // Simulate API calls for selected models
    const mockResponses: Record<string, any> = {}
    for (const modelId of selectedModels) {
      mockResponses[modelId] = {
        modelId,
        response: `Mock response from ${modelId} for prompt: ${prompt.substring(0, 50)}...`,
        latency: Math.round(Math.random() * 1000),
        tokenCount: Math.round(Math.random() * 300)
      }
    }
    setResponses(mockResponses)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Prompt Editor</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PromptInput onAnalyze={handleAnalyze} />
            <AnalysisResults analysis={analysis} />
            <ModelResponses responses={responses} />
          </div>
          <div className="col-span-1">
            <ModelSelector onModelsChange={setSelectedModels} />
          </div>
        </div>
      </div>
    </div>
  )
}
