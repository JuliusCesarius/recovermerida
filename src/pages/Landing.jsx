import React from 'react';
import StickyNav from '../components/landing/StickyNav';
import HeroSection from '../components/landing/HeroSection';
import TableOfContents from '../components/landing/TableOfContents';
import PainValidators from '../components/landing/PainValidators';
import MethodologyBlock from '../components/landing/MethodologyBlock';
import MarketDataCallout from '../components/landing/MarketDataCallout';
import HospitalGuide from '../components/landing/HospitalGuide';
import PricingTable from '../components/landing/PricingTable';
import ComparisonTable from '../components/landing/ComparisonTable';
import InsuranceSection from '../components/landing/InsuranceSection';
import RecoveryTimeline from '../components/landing/RecoveryTimeline';
import RecoveryServices from '../components/landing/RecoveryServices';
import LeadCaptureForm from '../components/landing/LeadCaptureForm';
import TrustpilotPlaceholder from '../components/landing/TrustpilotPlaceholder';
import FAQAccordion from '../components/landing/FAQAccordion';
import AuthorBio from '../components/landing/AuthorBio';
import RelatedArticles from '../components/landing/RelatedArticles';
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
        <TableOfContents />

        <hr className="border-border" />
        <PainValidators />

        <hr className="border-border" />
        <MethodologyBlock />

        <hr className="border-border" />
        <MarketDataCallout />

        <hr className="border-border" />
        <HospitalGuide />

        <hr className="border-border" />
        <PricingTable />

        <hr className="border-border" />
        <ComparisonTable />

        <hr className="border-border" />
        <InsuranceSection />

        <hr className="border-border" />
        <RecoveryTimeline />

        <hr className="border-border" />
        <RecoveryServices />

        <hr className="border-border" />
        <LeadCaptureForm />

        <hr className="border-border" />
        <TrustpilotPlaceholder />

        <hr className="border-border" />
        <FAQAccordion />

        <hr className="border-border" />
        <AuthorBio />

        <hr className="border-border" />
        <RelatedArticles />
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}