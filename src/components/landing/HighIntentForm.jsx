import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { Loader2, CheckCircle2 } from 'lucide-react';

const PROCEDURES = [
  { value: 'Dental', label: 'Dental implants / All-on-4' },
  { value: 'Bariatric', label: 'Bariatric / Gastric sleeve' },
  { value: 'Plastic', label: 'Plastic surgery' },
  { value: 'Orthopedic', label: 'Orthopedic (hip, knee)' },
  { value: 'Ophthalmology', label: 'LASIK / Ophthalmology' },
  { value: 'Just exploring', label: 'Just exploring' },
];

const TIMING_OPTIONS = [
  'Within 1 month',
  '1–3 months away',
  '3–6 months away',
  '6+ months away',
  'Not sure yet',
];

export default function HighIntentForm() {
  const [procedure, setProcedure] = useState('');
  const [timing, setTiming] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!procedure) { setError('Please select a procedure.'); return; }
    if (!timing) { setError('Please select your timing.'); return; }
    setError('');
    setSubmitting(true);
    const leadData = {
      first_name: '',
      email: '',
      procedure,
      whatsapp: '',
    };
    await base44.entities.Lead.create(leadData);
    fetch('https://julesai.app.n8n.cloud/webhook/1766bbe0-97bc-407a-b3b7-799529ac2020', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...leadData, stage: 'Hot lead — has date', timing }),
    }).catch(() => {});
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <section id="high-intent-form" className="py-8">
      <div
        style={{
          background: '#F0F7F7',
          borderLeft: '3px solid #0D6E6E',
          borderRadius: '8px',
          padding: '20px 24px',
        }}
      >
        <p className="text-[15px] font-medium text-foreground mb-1">Already have a surgeon or a surgery date?</p>
        <p className="text-[13px] text-muted-foreground mb-4">
          Tell us your procedure and approximate timing — we'll coordinate your recovery before you arrive.
        </p>

        {success ? (
          <div className="flex items-center gap-2 text-[#0D6E6E] text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Thanks! We'll be in touch shortly to coordinate your recovery.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
              <div className="flex-1">
                <Select value={procedure} onValueChange={setProcedure}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select procedure" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROCEDURES.map((p) => (
                      <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select value={timing} onValueChange={setTiming}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Approximate timing" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMING_OPTIONS.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-5 py-2 rounded-md text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: '#0D6E6E' }}
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Coordinate my recovery →'}
              </button>
            </div>
            {error && <p className="text-[12px] text-destructive mt-2">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}