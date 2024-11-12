interface ModelResponse {
  modelId: string;
  response: string;
  latency: number;
  tokenCount: number;
}

export default function ModelResponses({ 
  responses 
}: { 
  responses: Record<string, ModelResponse> 
}) {
  if (Object.keys(responses).length === 0) return null

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Model Responses</h3>
      <div className="space-y-4">
        {Object.entries(responses).map(([modelId, response]) => (
          <div key={modelId} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{modelId}</h4>
              <div className="text-sm text-gray-500">
                Latency: {response.latency}ms | Tokens: {response.tokenCount}
              </div>
            </div>
            <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
              {response.response}
            </pre>
          </div>
        ))}
      </div>
    </div>
  )
}
