import React from 'react';

export default function PullQuote({ children }) {
  return (
    <blockquote className="my-6 border-l-4 border-primary bg-primary/[0.04] rounded-r-lg px-5 py-4">
      <p className="text-[18px] leading-relaxed text-foreground font-medium italic">{children}</p>
    </blockquote>
  );
}