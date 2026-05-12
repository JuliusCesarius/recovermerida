import React from 'react';
import { Shield } from 'lucide-react';

const CARRIERS = [
  'Blue Cross Blue Shield international plans',
  'Cigna Global',
  'Aetna International',
  'GeoBlue',
  'BUPA International',
  'Canadian Snowbird Association health plans',
];

export default function InsuranceSection() {
  return (
    <section id="insurance-accepted" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Can I use my US or Canadian insurance for surgery in Mérida?
      </h2>
      <p className="text-[17px] leading-relaxed font-medium text-foreground mb-6">
        Yes — several major US and Canadian insurance carriers are accepted at Star Médica and Faro del Mayab through the Amexcare international billing partnership, which bridges US and Canadian insurance systems with Mexican hospitals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {CARRIERS.map((c) => (
          <div key={c} className="flex items-center gap-3 py-3 px-4 border border-border rounded-lg bg-card">
            <Shield className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm text-foreground">{c}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        <strong>Note:</strong> Star Médica and Faro del Mayab work with Amexcare, a medical coding and billing company that bridges US/Canadian insurance systems with Mexican hospitals. Contact your hospital's international patient coordinator before travel.
      </p>
    </section>
  );
}