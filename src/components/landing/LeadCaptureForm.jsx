import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const GUIDE_IMG = 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/41cba0b8c_CleanShot2026-05-12at32228.png';

const CONTENTS = [
  'Hospital accreditation comparison chart',
  'Procedure pricing breakdown (6 specialties)',
  'Recovery timeline by procedure type',
  'Insurance coverage checklist',
  'Recovery house details + photos',
  'Pre-travel preparation guide',
  'WhatsApp support line — direct access',
];

const PROCEDURES = ['Dental', 'Bariatric', 'Plastic', 'Orthopedic', 'Ophthalmology', 'Just exploring'];

export default function LeadCaptureForm() {
  const [form, setForm] = useState({ first_name: '', email: '', whatsapp: '', procedure: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.first_name.trim() || !form.email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }

    setSubmitting(true);
    const leadData = {
      first_name: form.first_name,
      email: form.email,
      whatsapp: form.whatsapp,
      procedure: form.procedure || 'Just exploring',
    };
    await base44.entities.Lead.create(leadData);
    fetch('https://julesai.app.n8n.cloud/webhook/1766bbe0-97bc-407a-b3b7-799529ac2020', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    }).catch(() => {});
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <section id="get-the-guide" className="py-16">
      <div className="border border-border rounded-2xl bg-card overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Guide preview */}
          <div className="p-8 md:p-10 bg-muted/30 flex flex-col justify-center">
            <img
              src={GUIDE_IMG}
              alt="The 2026 Mérida Surgery + Recovery Guide cover — free download for international patients"
              className="w-48 mx-auto rounded-lg shadow-md mb-6"
            />
            <h3 className="font-semibold text-foreground text-lg text-center mb-4">What's inside the guide</h3>
            <ul className="space-y-2">
              {CONTENTS.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-10">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Your guide is on its way!</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Check your WhatsApp and email — Jules will follow up personally within 24h.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-1">Get the free 2026 Surgery + Recovery Guide</h3>
                <p className="text-sm text-muted-foreground mb-6">Bilingual responses Mon–Sat 9am–9pm CST.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="first_name" className="text-sm font-medium">First name</Label>
                    <Input
                      id="first_name"
                      value={form.first_name}
                      onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                      placeholder="Your first name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp number</Label>
                    <div className="flex gap-2 mt-1">
                      <Select defaultValue="+1" onValueChange={() => {}}>
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1 US/CA</SelectItem>
                          <SelectItem value="+44">+44 UK</SelectItem>
                          <SelectItem value="+52">+52 MX</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        placeholder="555-123-4567"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="procedure" className="text-sm font-medium">I'm interested in…</Label>
                    <Select value={form.procedure} onValueChange={(val) => setForm({ ...form, procedure: val })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a procedure" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROCEDURES.map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {error && <p className="text-sm text-destructive">{error}</p>}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-base shadow-lg shadow-primary/20"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send me the free guide
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We don't sell data. Bilingual responses Mon–Sat 9am–9pm CST.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}