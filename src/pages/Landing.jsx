import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import StickyNav from '@/components/landing/StickyNav';
import TableOfContents from '@/components/landing/TableOfContents';
import InThisGuide from '@/components/landing/InThisGuide';
import KeyFactsBlock from '@/components/landing/KeyFactsBlock';
import DataSourcesStrip from '@/components/landing/DataSourcesStrip';
import MarketDataCallout from '@/components/landing/MarketDataCallout';
import HospitalGuide from '@/components/landing/HospitalGuide';
import PricingTable from '@/components/landing/PricingTable';
import HighIntentForm from '@/components/landing/HighIntentForm';
import ComparisonTable from '@/components/landing/ComparisonTable';
import RecoveryTimeline from '@/components/landing/RecoveryTimeline';
import RecoveryHousingSection from '@/components/landing/RecoveryHousingSection';
import InsuranceSection from '@/components/landing/InsuranceSection';
import RecoveryServices from '@/components/landing/RecoveryServices';
import TipsSection from '@/components/landing/TipsSection';
import PullQuote from '@/components/landing/PullQuote';
import TrustpilotPlaceholder from '@/components/landing/TrustpilotPlaceholder';
import AuthorBio from '@/components/landing/AuthorBio';
import ResearchMethodology from '@/components/landing/ResearchMethodology';
import RelatedArticles from '@/components/landing/RelatedArticles';
import SourcesReference, { Cite } from '@/components/landing/SourcesReference';
import MethodologyBlock from '@/components/landing/MethodologyBlock';
import Footer from '@/components/landing/Footer';
import WhatsAppFloat from '@/components/landing/WhatsAppFloat';
import JulesChat from '@/components/landing/JulesChat';
import ScrollTracking from '@/components/landing/ScrollTracking';
import { Loader2, CheckCircle2 } from 'lucide-react';

// FAQ data
const FAQ_ITEMS = [
  {
    q: 'Is Mérida safe for Americans and Canadians?',
    a: <>Yes. Mérida has been ranked the safest city in Mexico for over a decade by INEGI and is consistently listed among the safest cities in Latin America. The city has a large expat community of 10,000+ North Americans, well-established international healthcare infrastructure, and a low crime rate comparable to mid-size Canadian cities. <a href="#get-the-guide" className="text-primary hover:underline underline-offset-2">→ Get the free guide for more safety details</a></>
  },
  {
    q: 'Which hospitals in Mérida are accredited for international patients?',
    a: <>Mérida has four major private hospitals serving international patients: Star Médica Mérida (JCI accredited, Canadian Healthcare Council Level 3), Faro del Mayab / CHRISTUS Muguerza (JCI accredited, Mayo Clinic strategic alliance), Clínica de Mérida (Mercy Hospital Miami affiliate), and Centro Médico de Las Américas (Mercy Hospital Miami associate). All have bilingual staff and international patient coordinators. <a href="#hospital-guide" className="text-primary hover:underline underline-offset-2">→ See the full hospital guide</a></>
  },
  {
    q: 'Are Mérida hospitals JCI accredited?',
    a: <>Yes. Star Médica Mérida and Faro del Mayab (CHRISTUS Muguerza) both hold Joint Commission International (JCI) accreditation, the gold standard for international hospital quality. Star Médica additionally holds Canadian Healthcare Council Level 3 certification. <a href="#hospital-guide" className="text-primary hover:underline underline-offset-2">→ See accreditation details</a></>
  },
  {
    q: 'What is a recovery house and do I need one after surgery?',
    a: 'A recovery house is a short-term furnished accommodation specifically designed for post-surgical patients. Unlike a hotel or Airbnb, recovery houses offer medical-grade beds, nursing access, meal preparation, medication management, and daily check-ins. After most surgical procedures, a recovery house is strongly recommended for the first 7–14 days to reduce complication risk and ensure proper healing.'
  },
  {
    q: 'Are there recovery houses in Mérida?',
    a: <>As of May 2026, no dedicated recovery hotel exists in Mérida, but RecoverMérida operates two recovery-certified properties in northern Mérida — within 15 minutes of all four major hospitals in the Altabrisa and Temozón Norte neighborhoods. <a href="#get-the-guide" className="text-primary hover:underline underline-offset-2">→ Contact us to learn more</a></>
  },
  {
    q: 'How long do I need to stay in Mérida after bariatric or orthopedic surgery?',
    a: <>Most bariatric surgery patients (gastric sleeve) need 7–10 days in Mérida post-procedure. Orthopedic procedures like hip or knee replacement typically require 10–14 days. Your surgeon will provide a personalized recovery timeline and travel clearance before you fly home. <a href="#recovery-timeline" className="text-primary hover:underline underline-offset-2">→ See the full recovery timeline</a></>
  },
  {
    q: 'Can I fly home after surgery in Mexico — how long should I wait?',
    a: 'Flying after surgery depends on the procedure. For dental implants, most patients can fly within 2–3 days. Bariatric surgery: 7–10 days. Plastic surgery (tummy tuck, etc.): 10–14 days. Orthopedic (hip/knee): 10–14 days. LASIK: 3–5 days. Your surgeon provides written travel clearance.'
  },
  {
    q: 'What post-op care is available for medical tourists in Mérida?',
    a: <>RecoverMerida provides a full post-op care system: 24/7 AI-powered WhatsApp monitoring that tracks symptoms and alerts nursing staff, recovery-certified housing with medical-grade amenities, bilingual coordination between you and your surgical team, daily wellness check-ins, meal preparation, medication management, physical therapy coordination, and 30-day remote monitoring after you fly home. <a href="#get-the-guide" className="text-primary hover:underline underline-offset-2">→ Download our post-op care guide</a></>
  },
  {
    q: 'Can I use my US or Canadian insurance for surgery in Mérida?',
    a: <>Several major US and Canadian insurance carriers are accepted at Mérida's top hospitals through the Amexcare international billing partnership. Accepted carriers include Blue Cross Blue Shield international plans, Cigna Global, Aetna International, GeoBlue, BUPA International, and Canadian Snowbird Association health plans. <a href="#insurance-accepted" className="text-primary hover:underline underline-offset-2">→ See full insurance details</a></>
  },
  {
    q: 'Where do snowbirds typically go for surgery in Mexico — why is Mérida different?',
    a: <>Most snowbirds considering surgery in Mexico look at Tijuana, Cancún, or Guadalajara. Mérida is different for three reasons: (1) it has the highest concentration of JCI-accredited hospitals per capita in southeastern Mexico, (2) it's the safest major city in Mexico with a 10,000+ expat community, and (3) it now has a dedicated recovery infrastructure for international patients. <a href="#merida-vs-alternatives" className="text-primary hover:underline underline-offset-2">→ See Mérida vs alternatives comparison</a></>
  },
  {
    q: 'What if something goes wrong after surgery in Mexico?',
    a: "RecoverMerida's system is designed specifically to catch complications early: 24/7 AI WhatsApp monitoring flags symptoms in real-time, nursing staff are on-call around the clock, and your surgeon is within 20 minutes. All four Mérida hospitals have emergency departments."
  },
  {
    q: 'How much does bariatric surgery cost in Mérida compared to the US?',
    a: <>Gastric sleeve surgery in Mérida costs approximately $6,500 USD compared to $21,000 USD in the United States — a savings of roughly 70%.<Cite n={9} /><Cite n={11} /> <a href="#pricing-table" className="text-primary hover:underline underline-offset-2">→ See the full pricing table</a></>
  },
  {
    q: 'Is Mérida or Cancún better for medical tourism?',
    a: <>Mérida is better for medical tourism requiring recovery time. While Cancún has good hospitals, it lacks dedicated recovery infrastructure for surgical patients, has higher accommodation costs, and its tourist-oriented environment is less conducive to post-surgical recovery. <a href="#merida-vs-alternatives" className="text-primary hover:underline underline-offset-2">→ See the full comparison</a></>
  },
  {
    q: 'How do I find verified reviews for Mérida hospitals?',
    a: 'Check Google Reviews for each hospital by name, Bookimed patient reviews, and the RecoverMerida Trustpilot page (launching 2026). For hospital-specific quality data, verify JCI accreditation status at jointcommissioninternational.org.'
  },
];

// Lead capture form
const PROCEDURES = [
  { value: 'Dental', label: '🦷 Dental implants / All-on-4' },
  { value: 'Bariatric', label: '⚕️ Bariatric / Gastric sleeve' },
  { value: 'Plastic', label: '✨ Plastic surgery' },
  { value: 'Orthopedic', label: '🦴 Orthopedic (hip, knee)' },
  { value: 'Ophthalmology', label: '👁 LASIK / Ophthalmology' },
  { value: 'Just exploring', label: '🔍 Just exploring' },
];

function LeadForm({ preselectedProcedure = '' }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [procedure, setProcedure] = useState(preselectedProcedure);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName.trim()) { setError('Please enter your first name.'); return; }
    if (!email.trim()) { setError('Please enter your email.'); return; }
    setError('');
    setSubmitting(true);

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'lead_form_submit', procedure });
    }

    const leadData = { first_name: firstName, email, whatsapp, procedure: procedure || 'Just exploring' };
    await base44.entities.Lead.create(leadData);
    fetch('https://julesai.app.n8n.cloud/webhook/1766bbe0-97bc-407a-b3b7-799529ac2020', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...leadData, notes, stage: 'Guide request' }),
    }).catch(() => {});

    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary" />
        <p className="text-lg font-semibold text-foreground">You're on the list!</p>
        <p className="text-sm text-muted-foreground max-w-sm">
          We'll send the guide to <strong>{email}</strong> within the next few minutes. Check your spam folder if you don't see it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First name *"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <input
          type="email"
          placeholder="Email address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <input
        type="tel"
        placeholder="WhatsApp number (optional, with country code)"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PROCEDURES.map((p) => (
          <button
            key={p.value}
            type="button"
            onClick={() => {
              setProcedure(p.value);
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({ event: 'procedure_selected', procedure: p.value });
              }
            }}
            className={`px-3 py-2 rounded-md text-sm border transition-colors text-left ${
              procedure === p.value
                ? 'border-primary bg-primary/10 text-primary font-medium'
                : 'border-border bg-background text-muted-foreground hover:border-primary/50'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Anything else you'd like us to know? (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={2}
        className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring resize-none"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-md text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
        style={{ backgroundColor: '#0D6E6E' }}
      >
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : 'Send me the free guide →'}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">No spam. Unsubscribe any time.</p>
    </form>
  );
}

// FAQ accordion item
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-start gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-[15px] leading-snug">{q}</span>
        <span className="text-primary font-semibold text-xl shrink-0 mt-0.5">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pb-5 text-[15px] text-muted-foreground leading-relaxed pr-6">{a}</div>
      )}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollTracking />
      <StickyNav />
      <TableOfContents />
      <WhatsAppFloat />
      <JulesChat />

      <main className="max-w-[780px] mx-auto px-6 pt-10 pb-20 prose-editorial">

        {/* Hero */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/f32287a2b_RecoverMeridaIcon.png"
              alt="RecoverMerida"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-medium tracking-tight">
              Recover<span className="text-primary">Mérida</span>
            </span>
          </div>

          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Medical Tourism Guide · May 2026
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Medical Tourism in Mérida, Mexico — 2026 Guide
          </h1>

          <p className="bold-lede text-[19px] leading-relaxed font-medium text-foreground mb-6">
            Mérida has four JCI-accredited hospitals, 150,000+ international patients annually,<Cite n={4} /> and procedures priced 30–70% below US costs.<Cite n={9} /> This is the only Mérida-specific guide with sourced pricing, hospital accreditation data, and recovery logistics — updated May 2026.
          </p>

          <img
            src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/d322598d8_expatsinmerida.png"
            alt="Mérida, Yucatán — medical tourism destination for snowbirds and expats"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: '400px' }}
          />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Mérida, Yucatán — Mexico's safest major city and fastest-growing medical tourism destination
          </p>
        </header>

        <MethodologyBlock />
        <DataSourcesStrip />
        <InThisGuide />
        <KeyFactsBlock />

        {/* Safety */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Is Mérida safe for medical travel?
          </h2>
          <p className="text-[17px] leading-relaxed font-medium text-foreground mb-4">
            Mérida has been ranked the safest city in Mexico for over a decade by INEGI, Mexico's national statistics institute. The city has a permanent expat community of 10,000+ North Americans and is consistently listed among the safest cities in Latin America — with crime rates comparable to mid-size Canadian cities.
          </p>
          <PullQuote>
            "Mérida ranks #1 safest city in Mexico — and it's not close. That's what makes it viable for recovery."
          </PullQuote>
        </section>

        <MarketDataCallout />

        {/* Hospital Guide */}
        <section id="hospital-guide" className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            The 4 accredited hospitals in Mérida for international patients
          </h2>
          <p className="text-[17px] leading-relaxed font-medium text-foreground mb-6">
            Every hospital on this list has bilingual staff, international patient coordinators, and accepts US or Canadian insurance through affiliated billing networks.
          </p>
          <HospitalGuide />
        </section>

        {/* Pricing */}
        <section id="pricing-table" className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What does surgery cost in Mérida? (2026 pricing table)
          </h2>
          <p className="text-[17px] leading-relaxed font-medium text-foreground mb-6">
            The data below is cross-referenced from Bookimed, Dentavacation, Renew Bariatrics, and Medical Tourism Co. Pricing reflects all-in hospital estimates and does not include recovery housing or flights.
          </p>
          <PricingTable />
          <HighIntentForm />
        </section>

        {/* Comparison */}
        <section id="merida-vs-alternatives" className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Mérida vs Tijuana vs Cancún — medical tourism comparison
          </h2>
          <p className="text-[17px] leading-relaxed font-medium text-foreground mb-6">
            Most medical tourism guides rank cities by price alone. This table compares the full picture: accreditation, infrastructure, safety, and recovery ecosystem.
          </p>
          <ComparisonTable />
        </section>

        {/* Recovery Timeline */}
        <RecoveryTimeline />

        {/* Recovery Housing */}
        <section id="recovery-housing" className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Recovery housing in Mérida — what to look for
          </h2>
          <RecoveryHousingSection />
        </section>

        {/* Recovery Services */}
        <RecoveryServices />

        {/* Insurance */}
        <section id="insurance-accepted" className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            US and Canadian insurance accepted at Mérida hospitals
          </h2>
          <InsuranceSection />
        </section>

        {/* Lead Form */}
        <section id="get-the-guide" className="py-12">
          <div className="border-2 border-primary rounded-xl p-6 md:p-8 bg-card">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Free guide</p>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Get the complete Mérida Medical Tourism Guide
            </h2>
            <p className="text-[15px] text-muted-foreground mb-6">
              Hospital contacts, pricing worksheets, recovery housing checklist, and insurance coordination guide — all in one PDF. Free, no spam.
            </p>
            <LeadForm />
          </div>
        </section>

        <TipsSection />

        <TrustpilotPlaceholder />

        {/* FAQ */}
        <section id="faq" className="faq-section py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Frequently asked questions — Mérida medical tourism 2026
          </h2>
          <div className="border border-border rounded-xl bg-card divide-y divide-border overflow-hidden">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        <ResearchMethodology />
        <AuthorBio />
        <RelatedArticles />
        <SourcesReference />
      </main>

      <Footer />
    </div>
  );
}