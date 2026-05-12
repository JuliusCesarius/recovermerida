import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_ITEMS = [
  {
    q: 'Is Mérida safe for Americans and Canadians?',
    a: 'Yes. Mérida has been ranked the safest city in Mexico for over a decade by INEGI (Mexico\'s national statistics institute) and is consistently listed among the safest cities in Latin America. The city has a large expat community of 10,000+ North Americans, well-established international healthcare infrastructure, and a low crime rate comparable to mid-size Canadian cities.',
  },
  {
    q: 'Which hospitals in Mérida are accredited for international patients?',
    a: 'Mérida has four major private hospitals serving international patients: Star Médica Mérida (JCI accredited, Canadian Healthcare Council Level 3), Faro del Mayab / CHRISTUS Muguerza (JCI accredited, Mayo Clinic strategic alliance), Clínica de Mérida (Mercy Hospital Miami affiliate), and Centro Médico de Las Américas (Mercy Hospital Miami associate). All have bilingual staff and international patient coordinators.',
  },
  {
    q: 'Are Mérida hospitals JCI accredited?',
    a: 'Yes. Star Médica Mérida and Faro del Mayab (CHRISTUS Muguerza) both hold Joint Commission International (JCI) accreditation, the gold standard for international hospital quality. Star Médica additionally holds Canadian Healthcare Council Level 3 certification.',
  },
  {
    q: 'What is a recovery house and do I need one after surgery?',
    a: 'A recovery house is a short-term furnished accommodation specifically designed for post-surgical patients. Unlike a hotel or Airbnb, recovery houses offer medical-grade beds, nursing access, meal preparation, medication management, and daily check-ins. After most surgical procedures, a recovery house is strongly recommended for the first 7–14 days to reduce complication risk and ensure proper healing.',
  },
  {
    q: 'Are there recovery houses in Mérida?',
    a: 'Yes. RecoverMerida operates two recovery-certified properties in northern Mérida, within 15 minutes of all four major hospitals. Each property offers private rooms, 24/7 AI-powered WhatsApp monitoring, bilingual staff, meal preparation, and coordination with your surgical team. This is a new category in Mérida — most medical tourists previously had to arrange their own post-op housing.',
  },
  {
    q: 'How long do I need to stay in Mérida after bariatric or orthopedic surgery?',
    a: 'Most bariatric surgery patients (gastric sleeve) need 7–10 days in Mérida post-procedure. Orthopedic procedures like hip or knee replacement typically require 10–14 days. Your surgeon will provide a personalized recovery timeline and travel clearance before you fly home. RecoverMerida coordinates the entire post-op stay including housing, nursing, and surgeon follow-ups.',
  },
  {
    q: 'Can I fly home after surgery in Mexico — how long should I wait?',
    a: 'Flying after surgery depends on the procedure. For dental implants, most patients can fly within 2–3 days. Bariatric surgery: 7–10 days. Plastic surgery (tummy tuck, etc.): 10–14 days. Orthopedic (hip/knee): 10–14 days. LASIK: 3–5 days. Your surgeon provides written travel clearance. RecoverMerida includes airport transport and 30-day remote monitoring after you return home.',
  },
  {
    q: 'What post-op care is available for medical tourists in Mérida?',
    a: 'RecoverMerida provides a full post-op care system: 24/7 AI-powered WhatsApp monitoring that tracks symptoms and alerts nursing staff, recovery-certified housing with medical-grade amenities, bilingual coordination between you and your surgical team, daily wellness check-ins, meal preparation, medication management, physical therapy coordination, and 30-day remote monitoring after you fly home.',
  },
  {
    q: 'Can I use my US or Canadian insurance for surgery in Mérida?',
    a: 'Several major US and Canadian insurance carriers are accepted at Mérida\'s top hospitals through the Amexcare international billing partnership. Accepted carriers include Blue Cross Blue Shield international plans, Cigna Global, Aetna International, GeoBlue, BUPA International, and Canadian Snowbird Association health plans. Contact your hospital\'s international patient coordinator before travel to verify coverage.',
  },
  {
    q: 'Where do snowbirds typically go for surgery in Mexico — why is Mérida different?',
    a: 'Most snowbirds considering surgery in Mexico look at Tijuana, Cancún, or Guadalajara. Mérida is different for three reasons: (1) it has the highest concentration of JCI-accredited hospitals per capita in southeastern Mexico, (2) it\'s the safest major city in Mexico with a 10,000+ expat community, and (3) it now has a dedicated recovery infrastructure for international patients — something no other Mexican medical tourism city offers at this level.',
  },
  {
    q: 'What if something goes wrong after surgery in Mexico?',
    a: 'This is the most important question to ask. RecoverMerida\'s system is designed specifically to catch complications early: 24/7 AI WhatsApp monitoring flags symptoms in real-time, nursing staff are on-call around the clock, and your surgeon is within 20 minutes. All four Mérida hospitals have emergency departments. After you fly home, 30-day remote monitoring continues — and if a complication requires in-person care, RecoverMerida coordinates re-admission at your original hospital.',
  },
  {
    q: 'How much does bariatric surgery cost in Mérida compared to the US?',
    a: 'Gastric sleeve surgery in Mérida costs approximately $6,500 USD compared to $21,000 USD in the United States — a savings of roughly 70%. This includes the surgical procedure, hospital stay, and basic post-op care. Sources: Bookimed and Renew Bariatrics pricing data (May 2026). RecoverMerida\'s recovery coordination (housing, monitoring, nursing) is an additional service.',
  },
  {
    q: 'Is Mérida or Cancún better for medical tourism?',
    a: 'Mérida is better for medical tourism requiring recovery time. While Cancún has good hospitals, it lacks dedicated recovery infrastructure for surgical patients, has higher accommodation costs, and its tourist-oriented environment is less conducive to post-surgical recovery. Mérida offers lower costs of living, a safer and quieter environment, the same level of hospital accreditation, and now has purpose-built recovery housing and coordination services.',
  },
  {
    q: 'How do I find verified reviews for Mérida hospitals?',
    a: 'Check Google Reviews for each hospital by name, Bookimed patient reviews, and the RecoverMerida Trustpilot page (launching 2026). For hospital-specific quality data, verify JCI accreditation status at jointcommissioninternational.org. RecoverMerida also provides direct references from previous international patients upon request.',
  },
];

export default function FAQAccordion() {
  return (
    <section id="faq" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
        Frequently asked questions about surgery and recovery in Mérida (May 2026)
      </h2>
      <p className="text-sm text-muted-foreground mb-8">Last updated: May 2026</p>

      <Accordion type="single" collapsible defaultValue="item-0">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-[15px] font-medium text-foreground py-5 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}