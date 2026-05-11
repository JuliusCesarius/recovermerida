import React from 'react';
import { ExternalLink } from 'lucide-react';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/5bbd5e367_generated_f49cd9b8.png';

const CREDENTIALS = [
  'CEO, iluk.ai (AI product company, Mérida)',
  '20-year Mérida resident, native of Yucatán',
  'Operator of 2 recovery properties in northern Mérida',
  'Direct relationships with international coordinators at Star Médica, Faro del Mayab, Clínica de Mérida',
];

export default function AuthorBio() {
  return (
    <section className="py-12">
      <div className="border border-border rounded-xl bg-card p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={FOUNDER_IMG}
            alt="Jules Ávila — CEO iluk.ai, 20-year Mérida resident, founder of RecoverMerida recovery services"
            className="w-32 h-32 rounded-xl object-cover object-top shrink-0"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Jules Ávila</h3>
              <p className="text-sm text-muted-foreground">Founder, RecoverMerida</p>
            </div>

            <ul className="space-y-1.5">
              {CREDENTIALS.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {c}
                </li>
              ))}
            </ul>

            <p className="text-sm text-primary font-medium italic">
              "Jules responds personally to every first inquiry."
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://linkedin.com/in/julioavila"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                linkedin.com/in/julioavila
              </a>
              <a
                href="https://julesavila.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                julesavila.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}