import { useState } from 'react'

const SAMPLE_COMPARISONS = [
  {
    prompt: "Explain quantum computing to a 10-year-old",
    responses: {
      'gpt-4': {
        response: "Imagine you have a huge puzzle...",
        latency: 450,
        tokenCount: 128
      },
      'claude-2': {
        response: "Think of quantum computing like magic...",
        latency: 380,
        tokenCount: 142
      }
    }
  },
  {
    prompt: "Write a haiku about programming",
    responses: {
      'gpt-4': {
        response: "Code flows like water\nBugs emerge from shadows deep\nDebugger saves all",
        latency: 280,
        tokenCount: 64
      },
      'claude-2': {
        response: "Fingers touch keyboard\nLogic blooms in silicon\nPrograms come alive",
        latency: 310,
        tokenCount: 72
      }
    }
  }
]

export default function ModelComparison() {
  const [selectedComparison, setSelectedComparison] = useState(0)

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Model Comparison</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Select Comparison
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={selectedComparison}
            onChange={(e) => setSelectedComparison(Number(e.target.value))}
          >
            {SAMPLE_COMPARISONS.map((comp, index) => (
              <option key={index} value={index}>
                {comp.prompt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Prompt</h3>
            <p>{SAMPLE_COMPARISONS[selectedComparison].prompt}</p>
          </div>

          {Object.entries(SAMPLE_COMPARISONS[selectedComparison].responses).map(([model, data]) => (
            <div key={model} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{model}</h3>
                <div className="text-sm text-gray-500">
                  Latency: {data.latency}ms | Tokens: {data.tokenCount}
                </div>
              </div>
              <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                {data.response}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
