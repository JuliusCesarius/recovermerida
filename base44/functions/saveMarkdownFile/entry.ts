import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const user = await base44.auth.me();
  if (!user || user.role !== 'admin') {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { path, content } = await req.json();
  if (!path || !path.endsWith('.md')) {
    return Response.json({ error: 'Invalid path' }, { status: 400 });
  }

  const allowed = ['content/jules-kb.md', 'content/jules-instructions.md'];
  if (!allowed.includes(path)) {
    return Response.json({ error: 'Path not allowed' }, { status: 403 });
  }

  try {
    await Deno.writeTextFile(`/app/src/${path}`, content);
    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
});