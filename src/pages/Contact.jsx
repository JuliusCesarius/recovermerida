import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://julesai.app.n8n.cloud/webhook/1766bbe0-97bc-407a-b3b7-799529ac2020', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, stage: 'Contact page' }),
    }).catch(() => {});
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[780px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-4">Contact RecoverMérida</h1>
        <p className="text-muted-foreground mb-10">
          Have a question about procedures, pricing, or recovery logistics? Reach out — we're happy to help.
        </p>

        {/* Contact methods */}
        <div className="flex flex-wrap gap-6 mb-12 text-sm">
          <a href="mailto:hello@recovermerida.com" className="flex items-center gap-2 text-primary hover:underline underline-offset-2 font-medium">
            ✉️ hello@recovermerida.com
          </a>
          <a href="https://wa.me/529991234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline underline-offset-2 font-medium">
            💬 WhatsApp
          </a>
          <a href="https://recovermerida.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline underline-offset-2 font-medium">
            🌐 recovermerida.com
          </a>
        </div>

        {/* Contact form */}
        {sent ? (
          <div className="rounded-xl border border-border bg-muted/40 px-6 py-8 text-center space-y-2">
            <p className="text-lg font-semibold text-foreground">Message received!</p>
            <p className="text-sm text-muted-foreground">We'll get back to you within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border border-input bg-white text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border border-input bg-white text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border border-input bg-white text-sm focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                placeholder="What would you like to know?"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-10">
          <Link to="/" className="text-sm text-primary hover:underline underline-offset-2">← Back to Guide</Link>
        </div>
      </div>
    </div>
  );
}