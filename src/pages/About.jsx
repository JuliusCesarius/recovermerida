import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[780px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-6">About RecoverMérida</h1>

        <div className="prose-editorial space-y-5 text-foreground/80 text-base leading-relaxed">
          <p>
            RecoverMérida is a medical tourism resource and recovery coordination service for US and Canadian
            patients seeking world-class procedures in Mérida, Mexico — at a fraction of the cost back home.
          </p>
          <p>
            Mérida is home to four JCI-accredited hospitals, a permanent expat community of over 10,000 North
            Americans, and a safety record that consistently ranks it the safest city in Mexico. Yet most patients
            navigating medical travel do it alone: piecing together surgeon referrals, recovery housing, post-op
            logistics, and bilingual coordination on their own. That's the gap RecoverMérida fills.
          </p>
          <p>
            We work across 14 service areas — from bariatric and dental procedures to orthopedics, plastic surgery,
            ophthalmology, and beyond. Our team handles hospital coordination, recovery-certified housing, 24/7
            AI-powered wellness monitoring, meal preparation, physical therapy coordination, and 30-day remote
            follow-up after you fly home.
          </p>
          <p>
            RecoverMérida is built for patients who want to make a well-informed, well-supported decision — not
            just find the cheapest option. We believe that saving 60–70% on a procedure shouldn't mean sacrificing
            continuity of care or peace of mind.
          </p>
          <p>
            The platform is built and maintained by <a href="https://julesavila.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Jules Avila</a>, a Mérida-based founder with firsthand experience navigating the
            intersection of expat life and medical logistics in the Yucatán.
          </p>
        </div>

        <div className="mt-10 flex gap-4 text-sm">
          <Link to="/" className="text-primary hover:underline underline-offset-2">← Back to Guide</Link>
          <Link to="/contact" className="text-primary hover:underline underline-offset-2">Contact us →</Link>
        </div>
      </div>
    </div>
  );
}