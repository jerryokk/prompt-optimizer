import { ModelConfig } from './types';

// 获取环境变量的辅助函数
const getEnvVar = (key: string): string => {
  // 1. 首先尝试 process.env
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] || '';
  }

  // 2. 然后尝试 import.meta.env（Vite 环境）
  try {
    // @ts-ignore - 在构建时忽略此错误
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore - 在构建时忽略此错误
      const value = import.meta.env[key];
      if (value) return value;
    }
  } catch {
    // 忽略错误
  }

  // 3. 最后返回空字符串
  return '';
};

// 从环境变量获取 API keys
const OPENAI_API_KEY = getEnvVar('VITE_OPENAI_API_KEY').trim();
const GEMINI_API_KEY = getEnvVar('VITE_GEMINI_API_KEY').trim();
const DEEPSEEK_API_KEY = getEnvVar('VITE_DEEPSEEK_API_KEY').trim();
const SILICONFLOW_API_KEY = getEnvVar('VITE_SILICONFLOW_API_KEY').trim();
const CUSTOM_API_KEY = getEnvVar('VITE_CUSTOM_API_KEY').trim();
const CUSTOM_API_BASE_URL = getEnvVar('VITE_CUSTOM_API_BASE_URL');
const CUSTOM_API_MODEL = getEnvVar('VITE_CUSTOM_API_MODEL');

export const defaultModels: Record<string, ModelConfig> = {
  pollinations_4o_mini: {
    name: 'Pollinations',
    baseURL: 'https://text.pollinations.ai/openai',
    models: ['openai'],
    defaultModel: 'openai',
    apiKey: 'notneed',
    enabled: true,
    provider: 'openai'
  },
  pollinations_4o: {
    name: 'Pollinations',
    baseURL: 'https://text.pollinations.ai/openai',
    models: ['openai-large'],
    defaultModel: 'openai-large',
    apiKey: 'notneed',
    enabled: true,
    provider: 'openai'
  },
  pollinations_o1_mini: {
    name: 'Pollinations',
    baseURL: 'https://text.pollinations.ai/openai',
    models: ['openai-reasoning'],
    defaultModel: 'openai-reasoning',
    apiKey: 'notneed',
    enabled: true,
    provider: 'openai'
  },
  pollinations_deepseek_r1: {
    name: 'Pollinations',
    baseURL: 'https://text.pollinations.ai/openai',
    models: ['deepseek-reasoner'],
    defaultModel: 'deepseek-reasoner',
    apiKey: 'notneed',
    enabled: true,
    provider: 'openai'
  },
  openai: {
    name: 'OpenAI',
    baseURL: 'https://api.openai.com/v1',
    models: ['gpt-4', 'gpt-3.5-turbo'],
    defaultModel: 'gpt-3.5-turbo',
    apiKey: OPENAI_API_KEY,
    enabled: !!OPENAI_API_KEY,
    provider: 'openai'
  },
  gemini: {
    name: 'Gemini',
    baseURL: 'https://generativelanguage.googleapis.com',
    models: ['gemini-2.0-flash'],
    defaultModel: 'gemini-2.0-flash',
    apiKey: GEMINI_API_KEY,
    enabled: !!GEMINI_API_KEY,
    provider: 'gemini'
  },
  deepseek: {
    name: 'DeepSeek',
    baseURL: 'https://api.deepseek.com/v1',
    models: ['deepseek-chat'],
    defaultModel: 'deepseek-chat',
    apiKey: DEEPSEEK_API_KEY,
    enabled: !!DEEPSEEK_API_KEY,
    provider: 'deepseek'
  },
  siliconflow: {
    name: 'SiliconFlow',
    baseURL: 'https://api.siliconflow.cn/v1',
    models: ['Pro/deepseek-ai/DeepSeek-V3'],
    defaultModel: 'Pro/deepseek-ai/DeepSeek-V3',
    apiKey: SILICONFLOW_API_KEY,
    enabled: !!SILICONFLOW_API_KEY,
    provider: 'siliconflow'
  },
  custom: {
    name: 'Custom',
    baseURL: CUSTOM_API_BASE_URL,
    models: [CUSTOM_API_MODEL],
    defaultModel: CUSTOM_API_MODEL,
    apiKey: CUSTOM_API_KEY,
    enabled: !!CUSTOM_API_KEY,
    provider: 'custom'
  }
}; 