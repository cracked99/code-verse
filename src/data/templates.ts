import { PromptTemplate } from '../types'

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'task-breakdown',
    name: 'Task Breakdown',
    description: 'Break down a complex task into smaller steps',
    template: 'Break down the following task into detailed steps:\n\n[TASK]\n\nProvide a step-by-step breakdown with clear instructions for each step.',
    category: 'Planning'
  },
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Review code for best practices and improvements',
    template: 'Review the following code for best practices, potential issues, and suggested improvements:\n\n```\n[CODE]\n```\n\nConsider: readability, performance, security, and maintainability.',
    category: 'Development'
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'Analyze data and provide insights',
    template: 'Analyze the following data and provide key insights:\n\n[DATA]\n\nConsider: patterns, trends, anomalies, and actionable recommendations.',
    category: 'Analysis'
  }
]
