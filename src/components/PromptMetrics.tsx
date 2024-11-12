import { usePromptStore } from '../store/promptStore'

export default function PromptMetrics() {
  const analysis = usePromptStore((state) => state.analysis)

  if (!analysis) return null

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm font-medium text-gray-500">Quality Score</h4>
        <div className="mt-2 flex items-center">
          <span className="text-2xl font-bold">{Math.round(analysis.score)}</span>
          <span className="ml-2 text-sm text-gray-500">/100</span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${analysis.score}%` }}
          />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm font-medium text-gray-500">Suggestions</h4>
        <p className="text-2xl font-bold">{analysis.suggestions.length}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-sm font-medium text-gray-500">Improvements</h4>
        <p className="text-2xl font-bold">{analysis.improvements.length}</p>
      </div>
    </div>
  )
}
