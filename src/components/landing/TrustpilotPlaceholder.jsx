import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function TrustpilotPlaceholder() {
  return (
    <section className="py-12">
      <div className="border border-border rounded-lg p-8 bg-card text-center">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-border fill-border" />
          ))}
        </div>
        <p className="font-semibold text-foreground text-lg mb-1">RecoverMerida on Trustpilot</p>
        <p className="text-sm text-muted-foreground mb-4">We're just getting started — your review helps future patients.</p>
        <a
          href="https://trustpilot.com/review/recovermerida.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline underline-offset-2"
        >
          Be our first reviewer <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}