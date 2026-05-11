import React from 'react';
import { Check, Minus, X } from 'lucide-react';
import { Cite } from '@/components/landing/SourcesReference';

const ROWS = [
  {
    label: 'Direct flights from US/Canada',
    cite: 13,
    merida: { val: 'check', note: 'Miami, Houston, Dallas, Toronto direct' },
    tijuana: { val: 'check', note: 'San Diego land border + Tijuana airport' },
    cancun: { val: 'check', note: 'Most US/Canadian hubs direct' },
  },
  {
    label: 'JCI-accredited hospitals',
    cite: 6,
    merida: { val: 'check', note: '2 JCI + 2 US-affiliated' },
    tijuana: { val: 'partial', note: '1 JCI-accredited' },
    cancun: { val: 'partial', note: '1 JCI-accredited' },
  },
  {
    label: 'Recovery house ecosystem',
    cite: 11,
    merida: { val: 'check', note: 'RecoverMerida — purpose-built' },
    tijuana: { val: 'none', note: 'No dedicated recovery housing' },
    cancun: { val: 'none', note: 'Hotel-based only' },
  },
  {
    label: 'Average cost savings vs US',
    merida: { val: 'check', note: '30–70%' },
    tijuana: { val: 'check', note: '40–70%' },
    cancun: { val: 'partial', note: '20–50% (higher COL)' },
  },
  {
    label: 'English-speaking staff prevalence',
    merida: { val: 'check', note: 'High — large expat community' },
    tijuana: { val: 'check', note: 'High — border city' },
    cancun: { val: 'check', note: 'High — tourism economy' },
  },
];

function StatusIcon({ val }) {
  if (val === 'check') return <Check className="w-4 h-4 text-savings" />;
  if (val === 'partial') return <Minus className="w-4 h-4 text-amber-500" />;
  return <X className="w-4 h-4 text-destructive" />;
}

export default function ComparisonTable() {
  return (
    <section id="merida-vs-alternatives" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Mérida vs Tijuana vs Cancún for surgery (2026)
      </h2>
      <p className="text-[17px] leading-relaxed font-medium text-foreground mb-8">
        All three cities offer medical tourism, but they differ sharply on recovery infrastructure, flight access, and post-op coordination.
      </p>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-sm border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th scope="col" className="text-left py-3 pr-4 font-medium text-muted-foreground w-1/4"></th>
              <th scope="col" className="text-left py-3 px-4 font-semibold text-primary">Mérida</th>
              <th scope="col" className="text-left py-3 px-4 font-medium text-muted-foreground">Tijuana</th>
              <th scope="col" className="text-left py-3 pl-4 font-medium text-muted-foreground">Cancún</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.label} className={`border-b border-border ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                <td className="py-3.5 pr-4 font-medium text-foreground">{row.label}{row.cite ? <Cite n={row.cite} /> : null}</td>
                {['merida', 'tijuana', 'cancun'].map((city) => (
                  <td key={city} className="py-3.5 px-4">
                    <div className="flex items-start gap-2">
                      <StatusIcon val={row[city].val} />
                      <span className="text-muted-foreground text-xs leading-relaxed">{row[city].note}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 border-l-4 border-primary bg-primary/[0.03] rounded-r-lg p-6">
        <p className="text-[15px] leading-relaxed text-foreground italic">
          "I chose to build in Mérida — not Tijuana, not Cancún — because of three things I couldn't find anywhere else: a 36-year-old bilingual medical media ecosystem (Yucatán Today, Yucatán Magazine), a climate that favors post-op recovery, and a city where hospital directors still pick up the phone."
        </p>
        <p className="mt-2 text-sm text-muted-foreground">— Jules Ávila, May 2026</p>
      </div>
    </section>
  );
}