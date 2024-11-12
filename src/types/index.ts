export interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
}

export interface PromptAnalysis {
  score: number;
  suggestions: string[];
  improvements: string[];
  tokenCount: number;
  readabilityScore: number;
  clarity: number;
}

export interface ModelResponse {
  modelId: string;
  response: string;
  latency: number;
  tokenCount: number;
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  template: string;
  category: string;
}

export interface PromptHistory {
  id: string;
  prompt: string;
  timestamp: number;
  analysis: PromptAnalysis;
  responses: Record<string, ModelResponse>;
}
