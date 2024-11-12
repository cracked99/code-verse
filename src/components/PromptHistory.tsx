import { useHistoryStore } from '../store/historyStore'
import { formatDistanceToNow } from 'date-fns'

export default function PromptHistory() {
  const history = useHistoryStore((state) => state.history)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">History</h3>
        <button
          onClick={() => useHistoryStore.getState().clearHistory()}
          className="text-sm text-red-600 hover:text-red-800"
        >
          Clear History
        </button>
      </div>
      <div className="space-y-3">
        {history.map((entry) => (
          <div key={entry.id} className="p-3 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm truncate flex-1">
                {entry.prompt.substring(0, 100)}...
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {formatDistanceToNow(entry.timestamp, { addSuffix: true })}
              </span>
            </div>
            <div className="flex space-x-4 text-xs">
              <span className="text-blue-600">
                Score: {Math.round(entry.analysis.score)}
              </span>
              <span className="text-green-600">
                Responses: {Object.keys(entry.responses).length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
