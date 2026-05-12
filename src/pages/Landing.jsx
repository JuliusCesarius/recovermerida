import React from 'react';
import StickyNav from '../components/landing/StickyNav';
import HeroSection from '../components/landing/HeroSection';
import KeyFactsBlock from '../components/landing/KeyFactsBlock';
import InThisGuide from '../components/landing/InThisGuide';
import DataSourcesStrip from '../components/landing/DataSourcesStrip';
import TableOfContents from '../components/landing/TableOfContents';
import PainValidators from '../components/landing/PainValidators';
import TipsSection from '../components/landing/TipsSection';
import MethodologyBlock from '../components/landing/MethodologyBlock';
import ResearchMethodology from '../components/landing/ResearchMethodology';
import HospitalGuide from '../components/landing/HospitalGuide';
import PricingTable from '../components/landing/PricingTable';
import PullQuote from '../components/landing/PullQuote';
import ComparisonTable from '../components/landing/ComparisonTable';
import RecoveryHousingSection from '../components/landing/RecoveryHousingSection';
import InsuranceSection from '../components/landing/InsuranceSection';
import RecoveryTimeline from '../components/landing/RecoveryTimeline';
import MarketDataCallout from '../components/landing/MarketDataCallout';
import LeadCaptureForm from '../components/landing/LeadCaptureForm';
import TrustpilotPlaceholder from '../components/landing/TrustpilotPlaceholder';
import FAQAccordion from '../components/landing/FAQAccordion';
import RelatedArticles from '../components/landing/RelatedArticles';
import AuthorBio from '../components/landing/AuthorBio';
import SourcesReference from '../components/landing/SourcesReference';
import Footer from '../components/landing/Footer';
import WhatsAppFloat from '../components/landing/WhatsAppFloat';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <StickyNav />

      {/* Top brand bar */}
      <div className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center">
          <span className="text-lg font-medium text-foreground tracking-tight">
            Recover<span className="text-primary">Merida</span>
          </span>
        </div>
      </div>

      <HeroSection />

      {/* Main content with TOC */}
      <div className="max-w-[780px] mx-auto px-6 prose-editorial relative">

        {/* LLM citation blocks — immediately below hero */}
        <DataSourcesStrip />
        <InThisGuide />
        <KeyFactsBlock />

        <TableOfContents />

        <hr className="border-border" />
        <PainValidators />

        <hr className="border-border" />
        <TipsSection />

        <hr className="border-border" />
        <MethodologyBlock />

        <hr className="border-border" />
        <ResearchMethodology />

        <hr className="border-border" />
        <HospitalGuide />
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <PricingTable />
        <PullQuote>A single dental implant in Mérida costs $900 USD — compared to $3,500 USD in the US. Source: Bookimed, May 2026.</PullQuote>
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <ComparisonTable />
        <PullQuote>Mérida is the only city among Mérida, Tijuana, and Cancún with two distinct international accreditation standards (JCI + Canadian Healthcare Council) at the same hospital district. Source: JCI Directory, 2026.</PullQuote>
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <RecoveryHousingSection />
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <InsuranceSection />
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <RecoveryTimeline />
        <PullQuote>Most international patients need 10–14 days in Mérida after bariatric surgery before receiving surgical clearance to fly. Source: Bookimed; CDC Traveler's Health.</PullQuote>
        <p className="text-sm text-muted-foreground mt-2">→ <a href="#faq" className="text-primary hover:underline underline-offset-2">See related FAQ questions</a></p>

        <hr className="border-border" />
        <MarketDataCallout />

        <hr className="border-border" />
        <LeadCaptureForm />

        <hr className="border-border" />
        <TrustpilotPlaceholder />

        <hr className="border-border" />
        <FAQAccordion />

        <hr className="border-border" />
        <RelatedArticles />

        <hr className="border-border" />
        <AuthorBio />

        <hr className="border-border" />
        <SourcesReference />
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}