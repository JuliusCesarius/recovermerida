import React from 'react';
import { CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { Cite } from '@/components/landing/SourcesReference';

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
    what: <>Shows occupancy rates, average nightly prices, seasonal demand, and host revenue data for any neighborhood in Mérida. Use it to identify which areas have the highest availability during your travel window and negotiate better rates with hosts on longer stays.<Cite n={16} /></>,
    best: 'Finding the right neighborhood + price benchmark before searching Airbnb directly.',
    url: 'airdna.co',
    href: 'https://airdna.co',
  },
  {
    name: 'Inside Airbnb',
    color: 'border-blue-200 bg-blue-50',
    labelColor: 'text-blue-700 bg-blue-100',
    what: <>Open-data project that scrapes and publishes Airbnb listing data for major cities, including availability calendars, review counts, and host activity. Shows you which listings are genuinely available vs. ghost-listed.<Cite n={17} /></>,
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

      {/* Subsection B — Featured Listings */}
      <h3 className="text-lg font-semibold text-foreground mb-2">Where we actually send our patients</h3>
      <p className="text-sm text-muted-foreground mb-5">
        These two properties are operated by RecoverMérida partners — vetted for post-surgical stays, close to the hospital district, and set up for patients recovering alone or with a companion.
      </p>
      <div className="space-y-4 mb-10">
        {/* Listing 1 */}
        <a
          href="https://www.airbnb.mx/rooms/52459738"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row gap-0 border border-border rounded-xl overflow-hidden bg-card hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <img
            src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/c0195303f_generated_image.png"
            alt="Recovery house Mérida — Casa Altabrisa, ground floor, pool, 3 bedrooms"
            className="w-full sm:w-52 h-44 sm:h-auto object-cover shrink-0"
          />
          <div className="p-5 flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded">RecoverMérida Partner</span>
              </div>
              <h4 className="font-semibold text-foreground text-[15px] leading-snug group-hover:text-primary transition-colors">
                Casa Altabrisa — Ground-floor recovery suite, private pool, 3 BR
              </h4>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                5 min from Star Médica. Ground floor, step-free entry, full kitchen, blackout curtains, A/C in every room. Hosts speak English and are experienced with post-op guests.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">~$75 USD/night</span>
              <span>·</span>
              <span>Altabrisa, Mérida</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 text-primary font-medium">View on Airbnb <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        </a>

        {/* Listing 2 */}
        <a
          href="https://www.airbnb.mx/rooms/856773305965825817"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row gap-0 border border-border rounded-xl overflow-hidden bg-card hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <img
            src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/94d55b509_generated_image.png"
            alt="Recovery apartment Mérida — modern open plan, high ceilings, 2 bedrooms"
            className="w-full sm:w-52 h-44 sm:h-auto object-cover shrink-0"
          />
          <div className="p-5 flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded">RecoverMérida Partner</span>
              </div>
              <h4 className="font-semibold text-foreground text-[15px] leading-snug group-hover:text-primary transition-colors">
                Modern apartment — Temozón Norte, 2 BR, pool, elevator building
              </h4>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                Adjacent to Faro del Mayab (CHRISTUS Muguerza). Elevator access, private terrace, high-speed Wi-Fi for telehealth follow-ups. Ideal for longer 14–21 day orthopedic or bariatric stays.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">~$65 USD/night</span>
              <span>·</span>
              <span>Temozón Norte, Mérida</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 text-primary font-medium">View on Airbnb <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        </a>
      </div>

      {/* Subsection C — Neighborhoods */}
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