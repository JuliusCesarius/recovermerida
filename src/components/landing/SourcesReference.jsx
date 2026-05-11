import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Cite = ({ n }) => (
  <a
    href={`#source-${n}`}
    className="no-underline hover:underline underline-offset-2 text-[11px] font-medium align-super leading-none"
    style={{ color: '#0D6E6E' }}
    title={`Go to source ${n}`}
  >
    {n}
  </a>
);

const SOURCES = [
  { n: 1, text: 'IMARC Group', title: 'Mexico Medical Tourism Market Size & Forecast to 2034', date: 'May 2026', url: 'https://www.imarcgroup.com/mexico-medical-tourism-market', display: 'imarcgroup.com' },
  { n: 2, text: 'GMInsights', title: 'Medical Tourism Market Size & Forecast 2026–2035', date: 'May 2026', url: 'https://www.gminsights.com/industry-analysis/medical-tourism-market', display: 'gminsights.com' },
  { n: 3, text: 'Medical Tourism Association', title: 'Patient Decision Study', date: '2025', url: 'https://www.medicaltourism.com', display: 'medicaltourism.com' },
  { n: 4, text: 'SEFOTUR Yucatán', title: 'Estadísticas de Turismo Médico', date: '2025', url: 'https://sefotur.yucatan.gob.mx', display: 'sefotur.yucatan.gob.mx' },
  { n: 5, text: 'Canadian Healthcare Council', title: 'International Patient Safety Certification Directory', date: '2025', url: 'https://healthcarecan.ca', display: 'healthcarecan.ca' },
  { n: 6, text: 'Joint Commission International', title: 'JCI-Accredited Organizations', date: '2026', url: 'https://www.jointcommissioninternational.org/who-we-are/jci-accredited-organizations/', display: 'jointcommissioninternational.org' },
  { n: 7, text: 'Médica Sur Network', title: 'Strategic Alliance with Mayo Clinic', date: '2025', url: 'https://medicasur.com.mx', display: 'medicasur.com.mx' },
  { n: 8, text: 'Centro Médico de Las Américas', title: 'Institutional Profile', date: '2025', url: 'https://merida.cmahospital.mx', display: 'merida.cmahospital.mx' },
  { n: 9, text: 'Bookimed', title: 'Procedure Cost Data Mexico', date: 'May 2026', url: 'https://bookimed.com', display: 'bookimed.com' },
  { n: 10, text: 'Dentavacation', title: 'Dental Implants in Mérida Mexico', date: '2026', url: 'https://dentavacation.com', display: 'dentavacation.com' },
  { n: 11, text: 'Renew Bariatrics', title: 'Recovery Houses in Mexico', date: '2026', url: 'https://renewbariatrics.com', display: 'renewbariatrics.com' },
  { n: 12, text: 'Medical Tourism Co.', title: 'Dental Work Mérida Mexico', date: '2026', url: 'https://medicaltourismco.com', display: 'medicaltourismco.com' },
  { n: 13, text: 'Aeropuerto Internacional de Mérida', title: 'Route map', date: '2026', url: 'https://www.asur.com.mx', display: 'asur.com.mx' },
  { n: 14, text: 'Bookimed', title: 'How Long to Stay in Mexico After Surgery', date: '2026', url: 'https://bookimed.com', display: 'bookimed.com' },
  { n: 15, text: 'CDC Traveler\'s Health', title: 'Air Travel After Surgery', date: '2026', url: 'https://wwwnc.cdc.gov/travel', display: 'wwwnc.cdc.gov/travel' },
  { n: 16, text: 'AirDNA', title: 'Short-Term Rental Analytics Platform', date: '2026', url: 'https://airdna.co', display: 'airdna.co' },
  { n: 17, text: 'Murray Cox', title: 'Inside Airbnb: Adding Data to the Debate', date: '2026', url: 'http://insideairbnb.com', display: 'insideairbnb.com' },
];

export default function SourcesReference() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2"
        aria-expanded={open}
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {open ? 'Hide sources ↑' : 'View all 17 sources ↓'}
      </button>

      {open && (
        <div className="mt-5 border border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground mb-4 font-medium">Last verified: May 2026</p>
          <ol className="space-y-2">
            {SOURCES.map(({ n, text, title, date, url, display }) => (
              <li key={n} id={`source-${n}`} className="text-[13px] text-muted-foreground leading-relaxed">
                <span style={{ color: '#0D6E6E' }} className="font-semibold mr-1">{n}.</span>
                {text} · <em>{title}</em> · {date} ·{' '}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {display}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}