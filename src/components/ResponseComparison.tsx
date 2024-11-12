import { useModelStore } from '../store/modelStore'
import { availableModels } from '../data/models'

export default function ResponseComparison() {
  const responses = useModelStore((state) => state.responses)

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Response Comparison</h3>
      <div className="grid gap-4">
        {Object.entries(responses).map(([modelId, response]) => {
          const model = availableModels.find(m => m.id === modelId)
          return (
            <div key={modelId} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{model?.name}</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {response.latency}ms
                  </span>
                  <span className="text-sm text-gray-500">
                    {response.tokenCount} tokens
                  </span>
                </div>
              </div>
              <pre className="mt-2 p-3 bg-gray-50 rounded text-sm overflow-x-auto">
                {response.response}
              </pre>
            </div>
          )
        })}
      </div>
    </div>
  )
}
