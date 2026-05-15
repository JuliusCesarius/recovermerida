import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);

  try {
    const configs = await base44.asServiceRole.entities.AgentConfig.filter({});
    const find = (key) => configs.find(c => c.key === key)?.content || '';

    return Response.json({
      instructions: find('jules-instructions'),
      kb: find('jules-kb'),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});