import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Cite } from '@/components/landing/SourcesReference';

export default function MarketDataCallout() {
  return (
    <section className="py-12">
      <div className="border-l-4 border-secondary bg-secondary/20 rounded-r-lg p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <p className="text-xs font-medium text-primary uppercase tracking-wider">Market data</p>
        </div>
        <blockquote className="text-[15px] leading-relaxed text-foreground">
          "Mexico medical tourism market: $1.73B (2024) → projected $10.36B by 2033 at 19.57% CAGR.<Cite n={1} /><Cite n={2} />"
        </blockquote>
        <blockquote className="text-[15px] leading-relaxed text-foreground">
          "63% of medical tourists only click results showing accreditation credentials.<Cite n={3} />"
        </blockquote>
        <blockquote className="text-[15px] leading-relaxed text-foreground">
          "Mérida processes 150,000+ international patients annually.<Cite n={4} />"
        </blockquote>
      </div>
    </section>
  );
}