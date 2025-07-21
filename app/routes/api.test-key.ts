import { type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { LLMManager } from '~/lib/modules/llm/manager';

export async function loader({ context, request }: LoaderFunctionArgs) {
  const env = context.cloudflare?.env as any;
  const llmManager = LLMManager.getInstance(env);
  
  try {
    // Test if we can get models from the API
    const models = await llmManager.updateModelList({
      apiKeys: {},
      providerSettings: {},
      serverEnv: env,
    });
    
    return Response.json({
      success: true,
      message: 'API key is working!',
      models: models.slice(0, 3), // Show first 3 models
      envKeys: Object.keys(env).filter(key => key.includes('API_KEY')),
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: 'API key test failed',
      error: error instanceof Error ? error.message : String(error),
      envKeys: Object.keys(env).filter(key => key.includes('API_KEY')),
    }, { status: 500 });
  }
} 