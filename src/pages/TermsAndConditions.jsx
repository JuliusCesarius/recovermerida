import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CLAUSES = [
  {
    n: 1,
    title: 'Parties and definitions.',
    body: `These Terms and Conditions (the "Terms") govern the relationship between Julio César Ávila Saavedra, also commercially known as "Jules Avila" and operating under the brand "RecoverMerida" (the "Facilitator"), and any individual or legal entity who requests, receives or uses the services described herein (the "User"). "Providers" means independent third parties (physicians, hospitals, clinics, dentists, attorneys, notaries, real estate agents, immigration agents, carriers, contractors, insurers and other service providers) with whom the User chooses to contract directly.`,
  },
  {
    n: 2,
    title: 'Purpose and limited scope of service.',
    body: `The Facilitator's role is strictly and exclusively limited to: (i) connecting the User with Providers operating in Mérida, Yucatán and surrounding areas; and (ii) sharing cost analyses prepared based on publicly available and reference information ("public cost analyses"). The Facilitator does NOT provide medical, legal, tax, immigration, financial, real estate, construction or any other regulated professional services. All contracting, payment, performance, delivery, warranty and fulfillment take place directly and exclusively between the User and the relevant Provider, with no involvement, representation or intermediation by the Facilitator.`,
  },
  {
    n: 3,
    title: 'Informational nature and no warranty.',
    body: `Cost analyses, recommendations, lists, comparisons and any information provided by the Facilitator are merely informational and for reference purposes, are based on public sources available at the time of preparation and do NOT constitute an offer, a binding quote, professional advice, an expert opinion, a warranty or a promise of any specific outcome. Prices, fees, lead times, availability, quality and conditions offered by Providers may change without notice and are the sole responsibility of each Provider.`,
  },
  {
    n: 4,
    title: 'Disclaimer and exclusion of liability.',
    body: `To the maximum extent permitted by applicable law, the User acknowledges and agrees that the Facilitator (Julio César Ávila Saavedra, Jules Avila and RecoverMerida, as well as their collaborators, affiliates, partners, representatives and any associated brand) shall NOT be liable—whether civilly, commercially, administratively or criminally—for:`,
    bullets: [
      'Clinical, surgical, cosmetic, therapeutic, recovery-related or any other outcomes of medical or dental procedures.',
      'Variations, increases, discounts or discrepancies in prices compared to the cost analyses shared.',
      'The quality, suitability, timeliness, safety, compliance, delays, cancellations or breaches of any Provider.',
      'Direct, indirect, incidental, consequential damages, lost profits, moral damages or loss of opportunity arising from the relationship between the User and any Provider.',
      'Relocation, retirement, investment, purchase, rental, insurance, immigration or tax decisions made by the User.',
      'Information supplied by third parties, currency fluctuations, market conditions, regulatory changes or events of force majeure or act of God.',
    ],
  },
  {
    n: 5,
    title: 'Independence; no agency or hidden commissions.',
    body: `The Facilitator acts as an independent connector. The Facilitator is not an agent, attorney-in-fact, representative, employee, partner or franchisee of any Provider. Any reference, recommendation or introduction does not imply endorsement, certification or guarantee. The User is solely responsible for verifying credentials, licenses, insurance, contracts, terms and prices before contracting any Provider.`,
  },
  {
    n: 6,
    title: 'Introductory promotion: free support (pro bono) during May and June 2026.',
    body: `As a market-introduction courtesy, from May 1, 2026 through June 30, 2026, inclusive, the Facilitator will provide the Provider-connection service and public cost analyses on a free (pro bono) basis, at no fee, commission or charge to the User. This pro bono offering: (i) applies solely to the activities expressly described in Clause 2; (ii) does not include, under any circumstance, the costs, fees, materials, taxes or expenses charged by the Providers, which shall always be borne by the User; (iii) creates no obligation of continuity and no contractual precedent once the promotional period ends; and (iv) does not modify, expand or reduce the disclaimer of liability set forth in these Terms, which applies equally to the free services.`,
  },
  {
    n: 7,
    title: 'User conduct and accuracy of information.',
    body: `The User agrees to provide accurate information, to use the services for lawful and personal purposes, to treat Providers and other community members with respect, and to refrain from demanding from the Facilitator any actions outside the limited scope described herein. The Facilitator may suspend or terminate service, without liability, in the event of misuse, falsehoods or inappropriate conduct.`,
  },
  {
    n: 8,
    title: 'Personal data protection.',
    body: `Personal data shared by the User will be processed in accordance with the Mexican Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations, solely for the purpose of connecting the User with Providers and preparing cost analyses. The User may exercise ARCO rights (access, rectification, cancellation and objection) by writing to the Facilitator's contact email.`,
  },
  {
    n: 9,
    title: 'Intellectual property.',
    body: `All content, materials, comparisons, trademarks and distinctive signs of "RecoverMerida" and "Jules Avila" are the property of the Facilitator or their respective owners. The User is granted a limited, personal, non-exclusive and non-transferable license for consultation purposes only. Any reproduction, distribution or commercial use is prohibited without prior written authorization.`,
  },
  {
    n: 10,
    title: 'Modifications.',
    body: `The Facilitator may modify these Terms at any time by publishing the updated version. Continued use of the services after such modification shall constitute acceptance of the new Terms.`,
  },
  {
    n: 11,
    title: 'Maximum limitation of liability.',
    body: `In the event—expressly denied—that any authority were to find any liability on the part of the Facilitator, such liability shall be limited, in its total aggregate amount, to the amount actually paid by the User to the Facilitator during the twelve (12) months immediately preceding the event giving rise to such liability; for services rendered free of charge (including the pro bono period under Clause 6), such maximum liability shall be MXN $0.00 (zero pesos 00/100 M.N.).`,
  },
  {
    n: 12,
    title: 'Governing law and jurisdiction.',
    body: `These Terms shall be governed by the federal laws of the United Mexican States and, where applicable, by those of the State of Yucatán. For any dispute, the parties expressly submit to the competent courts of the city of Mérida, Yucatán, waiving any other jurisdiction that may correspond to them by reason of their present or future domicile.`,
  },
  {
    n: 13,
    title: 'Acceptance.',
    body: `Use of the services, receipt of cost analyses, requests for connection with Providers or any communication with the Facilitator shall constitute the User's full, express and informed acceptance of these Terms.`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to RecoverMerida
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10 pb-8 border-b border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Legal</p>
          <h1 className="text-3xl font-bold text-foreground mb-3">Terms and Conditions of Service</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">RecoverMerida</span> – Julio César Ávila Saavedra ("Jules Avila")
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Effective as of <span className="font-medium text-foreground">May 12, 2026</span>. Mérida, Yucatán, Mexico.
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-8">
          {CLAUSES.map(({ n, title, body, bullets }) => (
            <section key={n}>
              <h2 className="text-base font-semibold text-foreground mb-3">
                <span className="text-primary mr-1">{n}.</span> {title}
              </h2>
              <p className="text-[15px] leading-[1.75] text-muted-foreground">{body}</p>
              {bullets && (
                <ul className="mt-3 space-y-2 pl-4">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[15px] leading-[1.75] text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact footer */}
        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground leading-relaxed">
          <p>
            <span className="font-medium text-foreground">Contact:</span> Julio César Ávila Saavedra (Jules Avila) –{' '}
            <span className="font-medium text-foreground">RecoverMerida</span> –{' '}
            <a href="mailto:hola@recovermerida.com" className="text-primary hover:underline underline-offset-2">
              hola@recovermerida.com
            </a>{' '}
            – Mérida, Yucatán, Mexico.
          </p>
        </div>
      </main>
    </div>
  );
}