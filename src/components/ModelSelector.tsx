import { useState } from 'react'

const AVAILABLE_MODELS = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI' },
  { id: 'claude-2', name: 'Claude 2', provider: 'Anthropic' },
  { id: 'palm-2', name: 'PaLM 2', provider: 'Google' },
  { id: 'llama-2', name: 'Llama 2', provider: 'Meta' }
]

export default function ModelSelector({ 
  onModelsChange 
}: { 
  onModelsChange: (models: string[]) => void 
}) {
  const [selectedModels, setSelectedModels] = useState<string[]>([])

  const handleModelToggle = (modelId: string) => {
    const newSelection = selectedModels.includes(modelId)
      ? selectedModels.filter(id => id !== modelId)
      : [...selectedModels, modelId]
    
    setSelectedModels(newSelection)
    onModelsChange(newSelection)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Select Models</h3>
      <div className="space-y-3">
        {AVAILABLE_MODELS.map((model) => (
          <label
            key={model.id}
            className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedModels.includes(model.id)}
              onChange={() => handleModelToggle(model.id)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <div className="ml-3">
              <div className="font-medium">{model.name}</div>
              <div className="text-sm text-gray-500">{model.provider}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
