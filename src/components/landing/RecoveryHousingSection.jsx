import React from 'react';
import { CheckCircle2, MapPin, ExternalLink } from 'lucide-react';

const CHECKLIST = [
  'Ground floor or elevator building (non-negotiable post-surgery)',
  'Full kitchen with stovetop (for post-op meal prep)',
  'Within 15 min of your hospital (Altabrisa or Temozón Norte zones)',
  'Air conditioning in bedroom (Mérida heat affects wound healing)',
  'Flexible cancellation (surgery dates can shift)',
  'Host responsive to special requests (grab bars, extra pillows, early check-in)',
  'Minimum 10 nights available (most procedures need 10–14 day stays)',
];

const NEIGHBORHOODS = [
  {
    name: 'Altabrisa',
    why: 'Closest neighborhood to Star Médica (5 min). High density of modern apartments and gated communities. Good restaurant delivery options.',
    best: 'Bariatric, orthopedic, cardiology patients',
    price: '~$55–90 USD/night',
  },
  {
    name: 'Temozón Norte / Santa Gertrudis Copó',
    why: 'Directly adjacent to Faro del Mayab. Newer developments, quieter streets, green spaces.',
    best: 'Post-plastic surgery patients who need a calm environment',
    price: '~$45–75 USD/night',
  },
  {
    name: 'García Ginerés',
    why: '5 min from Clínica de Mérida and Centro Médico de Las Américas. Colonial character, walkable, good for ambulatory patients.',
    best: 'Dental, ophthalmology, follow-up patients',
    price: '~$50–80 USD/night',
  },
  {
    name: 'Norte / Montejo Corridor',
    why: 'Slightly farther from hospitals but higher amenity level — pools, gyms, security. Good for companions staying longer.',
    best: 'Family members and caregivers',
    price: '~$65–110 USD/night',
  },
];

const TOOLS = [
  {
    name: 'AirDNA',
    color: 'border-yellow-300 bg-yellow-50',
    labelColor: 'text-yellow-700 bg-yellow-100',
    what: 'Shows occupancy rates, average nightly prices, seasonal demand, and host revenue data for any neighborhood in Mérida. Use it to identify which areas have the highest availability during your travel window and negotiate better rates with hosts on longer stays.',
    best: 'Finding the right neighborhood + price benchmark before searching Airbnb directly.',
    url: 'airdna.co',
    href: 'https://airdna.co',
  },
  {
    name: 'Inside Airbnb',
    color: 'border-blue-200 bg-blue-50',
    labelColor: 'text-blue-700 bg-blue-100',
    what: 'Open-data project that scrapes and publishes Airbnb listing data for major cities, including availability calendars, review counts, and host activity. Shows you which listings are genuinely available vs. ghost-listed.',
    best: 'Vetting whether a listing is actively managed and getting honest review counts before booking.',
    url: 'insideairbnb.com',
    href: 'http://insideairbnb.com',
  },
];

export default function RecoveryHousingSection() {
  return (
    <section className="py-12" id="recovery-housing">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Where to stay for recovery in Mérida — Airbnb options and what to look for
      </h2>
      <p className="text-[16px] leading-relaxed font-medium text-foreground mb-8 border-l-4 border-primary pl-4">
        No dedicated recovery hotels exist in Mérida yet. The best option for most patients is a vetted Airbnb in the hospital district — here's how to find one and what to look for.
      </p>

      {/* Subsection A — Checklist */}
      <h3 className="text-lg font-semibold text-foreground mb-4">What to filter for on Airbnb</h3>
      <div className="border border-border rounded-lg bg-card p-6 mb-10">
        <ul className="space-y-3">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Subsection B — Neighborhoods */}
      <h3 className="text-lg font-semibold text-foreground mb-4">Recommended Airbnb neighborhoods in Mérida</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {NEIGHBORHOODS.map(({ name, why, best, price }) => (
          <div key={name} className="border border-border rounded-lg p-5 bg-card hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <h4 className="font-semibold text-foreground text-sm">{name}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{why}</p>
            <p className="text-xs text-foreground mb-1">
              <span className="font-medium">Best for:</span> {best}
            </p>
            <p className="text-xs font-semibold text-primary">{price}</p>
          </div>
        ))}
      </div>

      {/* Subsection C — Tools */}
      <h3 className="text-lg font-semibold text-foreground mb-1">Two tools that show you what Airbnb won't</h3>
      <p className="text-sm text-muted-foreground mb-5">
        Standard Airbnb search doesn't let you filter by floor, elevator, or "recovery-friendly." These two third-party tools give you deeper data before you book.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        {TOOLS.map(({ name, color, labelColor, what, best, url, href }) => (
          <div key={name} className={`border rounded-lg p-5 ${color}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${labelColor}`}>{name}</span>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline underline-offset-2"
              >
                {url} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">{what}</p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Best for:</span> {best}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground italic">
        These are independent third-party tools, not affiliated with RecoverMérida or Airbnb. Always verify listings directly on Airbnb before booking.
      </p>
    </section>
  );
}