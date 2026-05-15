import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Save, RefreshCw, BookOpen, Settings } from 'lucide-react';

const TABS = [
  {
    key: 'jules-kb',
    label: 'Knowledge Base',
    icon: BookOpen,
    description: 'Facts, pricing, hospitals, services — what Jules knows.',
  },
  {
    key: 'jules-instructions',
    label: 'Agent Instructions',
    icon: Settings,
    description: 'Personality, tone, rules, and escalation logic.',
  },
];

export default function AdminJules() {
  const [activeTab, setActiveTab] = useState('jules-kb');
  const [contents, setContents] = useState({ 'jules-kb': '', 'jules-instructions': '' });
  const [recordIds, setRecordIds] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    base44.entities.AgentConfig.filter({})
      .then(records => {
        const newContents = { ...contents };
        const newIds = {};
        records.forEach(r => {
          if (r.key in newContents) {
            newContents[r.key] = r.content;
            newIds[r.key] = r.id;
          }
        });
        setContents(newContents);
        setRecordIds(newIds);
      })
      .catch(() => setError('Could not load configuration from database.'))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const existingId = recordIds[activeTab];
      if (existingId) {
        await base44.entities.AgentConfig.update(existingId, { content: contents[activeTab] });
      } else {
        const record = await base44.entities.AgentConfig.create({ key: activeTab, content: contents[activeTab] });
        setRecordIds(ids => ({ ...ids, [activeTab]: record.id }));
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setError('Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const activeTab_ = TABS.find(t => t.key === activeTab);

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
          {TABS.map(({ key, label, icon: Icon }) => (
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
              <p className="text-sm font-semibold text-foreground">{activeTab_.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activeTab_.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {loading && <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin" />}
              <button
                onClick={handleSave}
                disabled={saving || loading}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {saving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                {saved ? 'Saved!' : 'Save'}
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
            disabled={loading}
            spellCheck={false}
            className="w-full h-[60vh] px-5 py-4 text-sm font-mono text-foreground bg-white resize-none focus:outline-none disabled:opacity-50"
            placeholder={loading ? 'Loading...' : 'Start typing...'}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          Stored in database as key: <code className="font-mono">{activeTab}</code>
        </p>
      </div>
    </div>
  );
}