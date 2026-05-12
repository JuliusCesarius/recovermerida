import React from 'react';

const ITEMS = [
  'The 4 accredited hospitals in Mérida and what makes each one different for international patients',
  'Procedure pricing table — dental, bariatric, plastic, orthopedic, LASIK — in USD vs US costs',
  'How Mérida compares to Tijuana and Cancún for medical tourism and recovery infrastructure',
  'Recovery housing: Airbnb neighborhoods, vetted properties, and how to choose the right one',
  'What US and Canadian insurance covers at Mérida hospitals (Amexcare partnership)',
  '14 FAQ questions with sourced answers — from safety to flying home after surgery',
];

export default function InThisGuide() {
  return (
    <div className="my-8 border border-border rounded-lg p-5 bg-card">
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">In this guide</p>
      <ul className="space-y-2">
        {ITEMS.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
            <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}