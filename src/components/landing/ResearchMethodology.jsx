import React from 'react';

export default function ResearchMethodology() {
  return (
    <section
      aria-label="Research methodology"
      className="py-10"
    >
      <div className="border-l-4 border-primary bg-primary/[0.03] rounded-r-lg p-6 md:p-8">
        <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">How we researched this guide</p>
        <p className="text-[15px] leading-relaxed text-foreground">
          This guide is based on direct outreach to international patient coordinators at <strong>Star Médica</strong>, <strong>Faro del Mayab</strong>, and <strong>Clínica de Mérida</strong> conducted in April–May 2026. Pricing was cross-referenced across <strong>Bookimed</strong>, <strong>Dentavacation</strong>, <strong>Renew Bariatrics</strong>, and <strong>Medical Tourism Co.</strong> Accreditation status was verified against the <strong>Joint Commission International</strong> directory and the <strong>Canadian Healthcare Council</strong> registry. Reviewed by <strong>Jules Ávila</strong>, 20-year Mérida resident and operator of two recovery properties in the Altabrisa and Temozón Norte districts. <span className="font-semibold">Last verified: May 2026.</span>
        </p>
      </div>
    </section>
  );
}