import React from 'react';
import { TrendingUp } from 'lucide-react';

const STATS = [
  {
    text: 'Mexico medical tourism market: $1.73B (2024) → projected $10.36B by 2033 at 19.57% CAGR.',
    source: 'IMARC Group, 2026',
    url: 'https://www.imarcgroup.com/mexico-medical-tourism-market',
  },
  {
    text: '63% of medical tourists only click results showing accreditation credentials.',
    source: 'Medical Tourism Association',
    url: 'https://www.medicaltourism.com',
  },
  {
    text: 'Mérida processes 150,000+ international patients annually.',
    source: 'SEFOTUR Yucatán, 2025',
    url: 'https://sefotur.yucatan.gob.mx',
  },
];

export default function MarketDataCallout() {
  return (
    <section className="py-12">
      <div className="border-l-4 border-secondary bg-secondary/20 rounded-r-lg p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <p className="text-xs font-medium text-primary uppercase tracking-wider">Market data</p>
        </div>
        {STATS.map(({ text, source, url }, i) => (
          <blockquote key={i} className="text-[15px] leading-relaxed text-foreground">
            "{text}{' '}
            <span className="text-sm">
              Source:{' '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {source}
              </a>
            </span>
            "
          </blockquote>
        ))}
      </div>
    </section>
  );
}