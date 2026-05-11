import React from 'react';
import { UserX, Building, Heart } from 'lucide-react';

const CARDS = [
  {
    icon: UserX,
    question: 'Discharged with no follow-up?',
    text: "Most medical tourists leave the hospital with a bag of prescriptions and a hotel reservation — no monitoring, no nursing, no plan if something goes wrong.",
  },
  {
    icon: Building,
    question: 'Booked surgery and Airbnb separately?',
    text: 'An Airbnb is not a recovery facility. No medical-grade beds, no medication management, and no one checking your vitals at 3 a.m.',
  },
  {
    icon: Heart,
    question: 'Family worried about complications?',
    text: "The #1 concern from families back home: \"What happens if something goes wrong and you're alone in another country?\"",
  },
];

export default function PainValidators() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map(({ icon: Icon, question, text }) => (
          <div
            key={question}
            className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card group"
          >
            <Icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-medium text-foreground text-base mb-2">{question}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}