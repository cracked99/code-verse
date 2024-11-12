import { promptTemplates } from '../data/templates'
import { usePromptStore } from '../store/promptStore'

export default function TemplateSelector() {
  const setPrompt = usePromptStore((state) => state.setPrompt)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Templates</h3>
      <div className="space-y-3">
        {promptTemplates.map((template) => (
          <div
            key={template.id}
            className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => setPrompt(template.template)}
          >
            <h4 className="font-medium">{template.name}</h4>
            <p className="text-sm text-gray-500">{template.description}</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2 inline-block">
              {template.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
