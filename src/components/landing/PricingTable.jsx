import React from 'react';

const PROCEDURES = [
  { name: 'Dental implant (single)', merida: '$900', us: '$3,500', savings: '74%' },
  { name: 'All-on-4 implants', merida: '$11,000', us: '$35,000', savings: '69%' },
  { name: 'Bariatric / gastric sleeve', merida: '$6,500', us: '$21,000', savings: '70%' },
  { name: 'Tummy tuck', merida: '$4,200', us: '$12,000', savings: '65%' },
  { name: 'Hip replacement', merida: '$9,500', us: '$40,000', savings: '76%' },
  { name: 'LASIK (both eyes)', merida: '$1,800', us: '$5,000', savings: '64%' },
];

export default function PricingTable() {
  return (
    <section id="pricing-table" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        What does surgery in Mérida actually cost? (May 2026)
      </h2>
      <p className="text-[17px] leading-relaxed font-medium text-foreground mb-8">
        These are patient-facing price ranges sourced from Bookimed, Dentavacation, and Renew Bariatrics — specific enough to plan your trip.
      </p>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-sm border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th scope="col" className="text-left py-3 pr-4 font-medium text-muted-foreground">Procedure</th>
              <th scope="col" className="text-right py-3 px-4 font-medium text-muted-foreground">Mérida (USD)</th>
              <th scope="col" className="text-right py-3 px-4 font-medium text-muted-foreground">USA average (USD)</th>
              <th scope="col" className="text-right py-3 pl-4 font-medium text-savings">Savings</th>
            </tr>
          </thead>
          <tbody>
            {PROCEDURES.map((p, i) => (
              <tr key={p.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                <td className="py-3.5 pr-4 font-medium text-foreground">{p.name}</td>
                <td className="py-3.5 px-4 text-right text-foreground tabular-nums">{p.merida}</td>
                <td className="py-3.5 px-4 text-right text-muted-foreground tabular-nums">{p.us}</td>
                <td className="py-3.5 pl-4 text-right font-semibold text-savings tabular-nums">{p.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        Sources:{' '}
        <a href="https://bookimed.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Bookimed (May 2026)</a>
        {' · '}
        <a href="https://dentavacation.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Dentavacation (2026)</a>
        {' · '}
        <a href="https://renewbariatrics.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Renew Bariatrics (2026)</a>
        . Prices are approximate ranges. MXN equivalents at 1 USD ≈ $17.50 MXN.
      </p>
    </section>
  );
}