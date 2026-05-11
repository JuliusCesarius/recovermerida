import React from 'react';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    title: 'Recovery house Mérida — what to expect, costs, and certification (2026)',
    desc: 'Everything you need to know about post-surgical recovery housing in Mérida.',
  },
  {
    title: 'Mérida hospitals JCI accredited: what it means for international patients',
    desc: 'A breakdown of JCI accreditation and which Mérida hospitals hold it.',
  },
  {
    title: 'Snowbird surgery checklist 2026 — planning your medical winter in Mérida',
    desc: 'The complete pre-travel checklist for Americans and Canadians.',
  },
];

export default function RelatedArticles() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold text-foreground mb-6">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map(({ title, desc }) => (
          <article
            key={title}
            className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow group cursor-pointer"
          >
            <h3 className="font-medium text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
            <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}