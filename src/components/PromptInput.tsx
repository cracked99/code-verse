import { useState } from 'react'

export default function PromptInput({ onAnalyze }: { onAnalyze: (prompt: string) => void }) {
  const [prompt, setPrompt] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = async () => {
    if (!prompt.trim() || isAnalyzing) return
    setIsAnalyzing(true)
    await onAnalyze(prompt)
    setIsAnalyzing(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="prompt" className="text-sm font-medium text-gray-700">
          Your Prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[200px] p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your prompt here..."
          disabled={isAnalyzing}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !prompt.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Prompt'}
        </button>
      </div>
    </div>
  )
}
