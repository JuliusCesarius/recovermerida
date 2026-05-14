import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const user = await base44.auth.me();
  if (!user || user.role !== 'admin') {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { path } = await req.json();
  if (!path || !path.endsWith('.md')) {
    return Response.json({ error: 'Invalid path' }, { status: 400 });
  }

  try {
    const content = await Deno.readTextFile(`/app/src/${path}`);
    return Response.json({ content });
  } catch {
    return Response.json({ content: '' });
  }
});