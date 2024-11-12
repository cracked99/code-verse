interface Analysis {
  score: number;
  suggestions: string[];
  tokenCount: number;
}

export default function AnalysisResults({ analysis }: { analysis: Analysis | null }) {
  if (!analysis) return null

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Analysis Results</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800">Quality Score</h4>
          <p className="text-2xl font-bold text-blue-600">{analysis.score}/100</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-green-800">Token Count</h4>
          <p className="text-2xl font-bold text-green-600">{analysis.tokenCount}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-gray-700 mb-2">Suggestions</h4>
        <ul className="list-disc list-inside space-y-2">
          {analysis.suggestions.map((suggestion, index) => (
            <li key={index} className="text-gray-600">{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
