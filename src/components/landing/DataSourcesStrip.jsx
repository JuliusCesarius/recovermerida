import React from 'react';

const SOURCES = [
  'Bookimed',
  'IMARC Group',
  'GMInsights',
  'SEFOTUR Yucatán',
  'Joint Commission International',
  'Medical Tourism Association',
  'Dentavacation',
  'Renew Bariatrics',
];

export default function DataSourcesStrip() {
  return (
    <div className="my-6 py-3 border-y border-border">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground shrink-0">Our data sources include:</span>
        {SOURCES.map((s, i) => (
          <span key={s}>
            <span className="text-muted-foreground">{s}</span>
            {i < SOURCES.length - 1 && <span className="ml-3 text-border">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}