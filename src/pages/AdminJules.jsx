import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Save, RefreshCw, BookOpen, Settings } from 'lucide-react';

const FILES = [
  {
    key: 'kb',
    label: 'Knowledge Base',
    icon: BookOpen,
    path: 'content/jules-kb.md',
    description: 'Facts, pricing, hospitals, services — what Jules knows.',
  },
  {
    key: 'instructions',
    label: 'Agent Instructions',
    icon: Settings,
    path: 'content/jules-instructions.md',
    description: 'Personality, tone, rules, and escalation logic.',
  },
];

async function loadFile(path) {
  const res = await base44.functions.invoke('getMarkdownFile', { path });
  return res.data?.content || '';
}

async function saveFile(path, content) {
  await base44.functions.invoke('saveMarkdownFile', { path, content });
}

export default function AdminJules() {
  const [activeTab, setActiveTab] = useState('kb');
  const [contents, setContents] = useState({ kb: '', instructions: '' });
  const [loading, setLoading] = useState({ kb: false, instructions: false });
  const [saving, setSaving] = useState({ kb: false, instructions: false });
  const [saved, setSaved] = useState({ kb: false, instructions: false });
  const [error, setError] = useState('');

  useEffect(() => {
    FILES.forEach(({ key, path }) => {
      setLoading(l => ({ ...l, [key]: true }));
      loadFile(path)
        .then(content => setContents(c => ({ ...c, [key]: content })))
        .catch(() => setError(`Could not load ${path}`))
        .finally(() => setLoading(l => ({ ...l, [key]: false })));
    });
  }, []);

  const handleSave = async (key) => {
    const file = FILES.find(f => f.key === key);
    setSaving(s => ({ ...s, [key]: true }));
    setError('');
    try {
      await saveFile(file.path, contents[key]);
      setSaved(s => ({ ...s, [key]: true }));
      setTimeout(() => setSaved(s => ({ ...s, [key]: false })), 2500);
    } catch {
      setError('Save failed. Check that the backend function is deployed.');
    } finally {
      setSaving(s => ({ ...s, [key]: false }));
    }
  };

  const activeFile = FILES.find(f => f.key === activeTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white px-6 py-4 flex items-center gap-3">
        <img
          src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/f32287a2b_RecoverMeridaIcon.png"
          alt="RecoverMerida"
          className="w-8 h-8 object-contain"
        />
        <div>
          <h1 className="text-base font-semibold text-foreground">Jules Configuration</h1>
          <p className="text-xs text-muted-foreground">Edit knowledge base and agent instructions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {FILES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Editor card */}
        <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">{activeFile.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activeFile.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {loading[activeTab] && (
                <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin" />
              )}
              <button
                onClick={() => handleSave(activeTab)}
                disabled={saving[activeTab] || loading[activeTab]}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {saving[activeTab] ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Save className="w-3.5 h-3.5" />
                )}
                {saved[activeTab] ? 'Saved!' : 'Save'}
              </button>
            </div>
          </div>

          {error && (
            <div className="mx-5 mt-4 px-4 py-2.5 rounded-lg bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}

          <textarea
            value={contents[activeTab]}
            onChange={e => setContents(c => ({ ...c, [activeTab]: e.target.value }))}
            disabled={loading[activeTab]}
            spellCheck={false}
            className="w-full h-[60vh] px-5 py-4 text-sm font-mono text-foreground bg-white resize-none focus:outline-none disabled:opacity-50"
            placeholder={loading[activeTab] ? 'Loading...' : 'Start typing...'}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          File: <code className="font-mono">{activeFile.path}</code>
        </p>
      </div>
    </div>
  );
}