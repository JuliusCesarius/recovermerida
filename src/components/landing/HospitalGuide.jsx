import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, ExternalLink, Shield } from 'lucide-react';
import { Cite } from '@/components/landing/SourcesReference';

const HOSPITALS = [
  {
    name: 'Star Médica Mérida',
    image: 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/8717e0cd5_generated_7831b697.png',
    badges: ['JCI Accredited', 'Canadian Healthcare Council Level 3'],
    badgeCites: [null, 5],
    distinction: '"Mexico\'s Best Private Hospitals" #1 Southern Region (Expansión, 2025)',
    address: 'Calle 26 199, Altabrisa',
    phone: '+52 999 930-2880',
    website: 'starmedica.com',
    url: 'https://starmedica.com',
  },
  {
    name: 'Faro del Mayab (CHRISTUS Muguerza)',
    image: 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/15325139f_generated_b35f57c2.png',
    badges: ['JCI Accredited', 'Mayo Clinic Strategic Alliance'],
    badgeCites: [6, 7],
    distinction: 'Part of Mayo Clinic strategic alliance via Médica Sur Network.',
    address: 'Calle 24 S/N, Temozón Norte',
    phone: '+52 999 689-4500',
    website: 'christusmuguerza.com.mx',
    url: 'https://christusmuguerza.com.mx',
  },
  {
    name: 'Clínica de Mérida',
    image: 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/7aa16ecfc_generated_c1bc23b4.png',
    badges: ['Mercy Hospital Miami Affiliate'],
    badgeCites: [null],
    distinction: 'English-speaking staff. Affiliated with Mercy Hospital Miami.',
    address: 'Av. Itzáes 242, García Ginerés',
    phone: '+52 999 942-1800',
    website: 'clinicamerida.com.mx',
    url: 'https://clinicamerida.com.mx',
  },
  {
    name: 'Centro Médico de Las Américas',
    image: 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/434611a1e_generated_1cabcbeb.png',
    badges: ['Mercy Hospital Miami Associate'],
    badgeCites: [8],
    distinction: 'Maternity + specialist center. Associated with Mercy Hospital Miami.',
    address: 'Calle 54 365, near Paseo de Montejo',
    phone: '+52 999 926-2111',
    website: 'merida.cmahospital.mx',
    url: 'https://merida.cmahospital.mx',
  },
];

export default function HospitalGuide() {
  return (
    <section id="hospital-guide" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Which hospitals in Mérida are best for international patients? (2026)
      </h2>
      <p className="text-[17px] leading-relaxed font-medium text-foreground mb-8">
        Mérida has four major private hospitals with international accreditation, bilingual staff, and procedures at 30–70%<Cite n={1} /> below US costs — all within 20 minutes of each other.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HOSPITALS.map((h) => (
          <article key={h.name} className="border border-border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
            <img
              src={h.image}
              alt={`${h.name} hospital exterior in Mérida, Yucatán — accredited medical facility for international patients`}
              className="w-full h-48 object-cover"
            />
            <div className="bg-maroon px-5 py-3">
              <h3 className="text-lg font-semibold text-white">{h.name}</h3>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {h.badges.map((b, bi) => (
                  <Badge key={b} variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                    <Shield className="w-3 h-3 mr-1" />
                    {b}{h.badgeCites?.[bi] ? <Cite n={h.badgeCites[bi]} /> : null}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">{h.distinction}</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{h.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{h.phone}</span>
                </div>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline underline-offset-2"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>{h.website}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}