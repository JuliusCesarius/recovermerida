import React from 'react';
import { Bot, Home, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SERVICES = [
  {
    icon: Bot,
    title: '24/7 AI WhatsApp monitoring',
    desc: 'Our system tracks symptoms, medication adherence, and vital signs via WhatsApp — and alerts nursing staff the moment something needs attention.',
  },
  {
    icon: Home,
    title: 'Recovery-certified housing',
    desc: 'Medical-grade beds, private rooms, meal prep, and medication management — all within 15 minutes of every major hospital in Mérida.',
  },
  {
    icon: Languages,
    title: 'Bilingual coordination',
    desc: 'From surgeon follow-ups to pharmacy runs to airport transfers — one bilingual team handles everything so you can focus on healing.',
  },
];

export default function RecoveryServices() {
  const scrollToForm = () => {
    document.getElementById('get-the-guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="border border-border rounded-lg p-6 bg-card">
            <Icon className="w-6 h-6 text-primary mb-4" />
            <h3 className="font-medium text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          onClick={scrollToForm}
          className="border-primary text-primary hover:bg-primary/5"
        >
          Download the free guide or DM us on WhatsApp
        </Button>
      </div>
    </section>
  );
}