import React from 'react';
import { Home, Award, Clock, UserCheck, Plane, MapPin } from 'lucide-react';

const TIPS = [
  {
    icon: Home,
    title: 'Your Airbnb is probably not recovery-ready',
    text: "Standard rentals have stairs, no grab bars, no meal prep service, and hosts who aren't prepared for post-op needs. Ask specifically for ground-floor access, a full kitchen, and proximity to your hospital before booking.",
  },
  {
    icon: Award,
    title: 'JCI accreditation is not the same across hospitals',
    text: 'Star Médica holds a Canadian Healthcare Council Level 3 certification. Faro del Mayab (CHRISTUS) holds JCI and is part of the Mayo Clinic strategic alliance. These are different standards — ask your hospital which body certified them and when.',
  },
  {
    icon: Clock,
    title: 'The discharge happens faster than you expect',
    text: 'Most international patients are discharged within 24–48 hours of surgery. The hospital\'s job ends at discharge — your recovery coordination needs to start before you arrive, not after.',
  },
  {
    icon: UserCheck,
    title: 'You can negotiate a bilingual nurse escort',
    text: 'Several independent bilingual nurses in Mérida offer post-op escort and home-visit services at $30–50 USD per visit. This is not advertised — ask your hospital\'s international coordinator or a local recovery coordinator for a referral.',
  },
  {
    icon: Plane,
    title: 'Flying home too early is the most common mistake',
    text: 'General rule: 7–10 days for dental and minor procedures, 10–14 days for bariatric, 14–21 days for orthopedic. Flying before surgical clearance risks DVT and wound complications. Get written travel clearance from your surgeon before booking your return flight.',
  },
  {
    icon: MapPin,
    title: "Mérida's hospital district is compact — use it",
    text: 'Star Médica, Faro del Mayab, and the main recovery housing cluster are all within a 15-minute drive. Unlike Cancún, you don\'t need to cross the city for follow-up appointments. Build your recovery housing search around the Altabrisa and Temozón Norte neighborhoods.',
  },
];

export default function TipsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        What most patients don't know before surgery in Mérida
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        The honest answer is that medical tourism information is full of promotional content. These are the practical realities that don't make it into the brochures.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TIPS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-sm leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}