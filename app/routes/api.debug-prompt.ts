import { type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { PromptLibrary } from '~/lib/common/prompt-library';
import { WORK_DIR, MODIFICATIONS_TAG_NAME } from '~/utils/constants';
import { allowedHTMLElements } from '~/utils/markdown';

export async function loader({ context, request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const promptId = url.searchParams.get('promptId') || 'default';
  
  try {
    const systemPrompt = PromptLibrary.getPropmtFromLibrary(promptId, {
      cwd: WORK_DIR,
      allowedHtmlElements: allowedHTMLElements,
      modificationTagName: MODIFICATIONS_TAG_NAME,
    });
    
    return Response.json({
      success: true,
      promptId,
      promptLength: systemPrompt.length,
      promptPreview: systemPrompt.substring(0, 500) + '...',
      hasArtifactInstructions: systemPrompt.includes('<artifact_instructions>'),
      hasCosmiqArtifact: systemPrompt.includes('<cosmiqArtifact'),
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
} 