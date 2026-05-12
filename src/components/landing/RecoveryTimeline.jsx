import React from 'react';

const STEPS = [
  { day: 'Day –7 to –3', title: 'Pre-op evaluation', desc: 'Remote assessment via WhatsApp + documentation review.' },
  { day: 'Day 0', title: 'Arrival day', desc: 'Airport pickup · hospital check-in · pre-op labs.' },
  { day: 'Day 1', title: 'Surgery day', desc: 'Procedure at accredited hospital · AI post-op monitoring begins.' },
  { day: 'Day 2–3', title: 'Hospital discharge', desc: 'Transfer to recovery-certified housing.' },
  { day: 'Day 3–10', title: 'Recovery phase', desc: 'Daily AI check-ins · nursing on-call · meal prep · PT.' },
  { day: 'Day 10–12', title: 'Clearance assessment', desc: 'Surgeon sign-off · travel clearance documentation.' },
  { day: 'Day 10–14', title: 'Flight home', desc: 'Transport to airport · 30-day remote monitoring continues.' },
];

export default function RecoveryTimeline() {
  return (
    <section id="recovery-timeline" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        How long do I need to stay in Mérida after surgery?
      </h2>
      <p className="text-[17px] leading-relaxed font-medium text-foreground mb-6">
        Most international patients require 10–14 days in Mérida after major surgery — from hospital discharge through surgical clearance to fly. Here's the full recovery timeline coordinated by RecoverMérida.
      </p>

      <div className="mt-8 relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-4 md:gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-sm font-semibold text-primary">
                  {i + 1}
                </div>
              </div>
              <div className="pt-1.5">
                <p className="text-xs font-medium text-primary uppercase tracking-wide">{step.day}</p>
                <h3 className="text-base font-semibold text-foreground mt-0.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}