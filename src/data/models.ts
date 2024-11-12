import { Model } from '../types'

export const availableModels: Model[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    description: 'Most capable GPT-4 model for various tasks'
  },
  {
    id: 'claude-2',
    name: 'Claude 2',
    provider: 'Anthropic',
    description: 'Advanced reasoning and analysis capabilities'
  },
  {
    id: 'palm-2',
    name: 'PaLM 2',
    provider: 'Google',
    description: 'Efficient language model with strong performance'
  }
]
