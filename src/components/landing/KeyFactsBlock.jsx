import React from 'react';

const FACTS = [
  { label: 'Hospitals with international accreditation', value: '4 — Star Médica, Faro del Mayab, Clínica de Mérida, Centro Médico de Las Américas' },
  { label: 'JCI-accredited facilities', value: '2 — Star Médica (CHC Level 3) and Faro del Mayab (JCI)' },
  { label: 'Average cost savings vs US', value: '30–70% depending on procedure (source: Bookimed, 2026)' },
  { label: 'Medical tourists annually', value: '150,000+ (source: SEFOTUR Yucatán, 2025)' },
  { label: 'Market size', value: '$1.73B (2024) → projected $10.36B by 2033 (source: IMARC Group, 2026)' },
  { label: 'Recovery housing zones', value: 'Altabrisa, Temozón Norte, García Ginerés, Montejo corridor' },
];

export default function KeyFactsBlock() {
  return (
    <aside
      aria-label="Key facts"
      className="my-8 rounded-r-lg border-l-4 border-primary px-5 py-5"
      style={{ background: '#F0F7F7' }}
    >
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Key facts — Mérida medical tourism 2026</p>
      <ul className="space-y-2">
        {FACTS.map((f) => (
          <li key={f.label} className="text-[14px] text-foreground leading-snug">
            <span className="font-semibold">{f.label}:</span>{' '}
            <span className="text-muted-foreground">{f.value}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}