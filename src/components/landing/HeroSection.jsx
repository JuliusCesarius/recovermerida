import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react';

const FOUNDER_IMG = "https://media.base44.com/images/public/6a0254f06a505803a56ab728/5bbd5e367_generated_f49cd9b8.png";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('get-the-guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — 60% */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5 px-3 py-1">
                Mérida Medical Tourism — May 2026
              </Badge>
            </div>

            <h1 className="text-[32px] md:text-[46px] leading-[1.1] font-bold text-foreground tracking-tight">
              Surgery in Mérida?{' '}
              <span className="text-primary">Recover like family.</span>
            </h1>

            <p className="text-sm text-muted-foreground">
              Last updated: May 11, 2026 · 10 min read
            </p>

            <p className="text-[17px] md:text-[18px] leading-relaxed font-medium text-foreground">
              Mérida's four JCI-accredited hospitals offer the same procedures as US facilities at 30–70% less, with zero waiting lists — and now a fully coordinated recovery system for international patients, managed by a Mérida native.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12 shadow-lg shadow-primary/20"
              >
                Get the free 2026 Surgery + Recovery Guide
              </Button>
              <a
                href="#consult"
                className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:underline underline-offset-4 self-center"
              >
                Book a free 15-min consult <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — 40% */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <img
                src={FOUNDER_IMG}
                alt="Jules Ávila, CEO iluk.ai, 20-year Mérida resident and founder of RecoverMerida recovery coordination"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-5 space-y-3">
                <div>
                  <p className="font-medium text-foreground">Jules Ávila</p>
                  <p className="text-sm text-muted-foreground">CEO iluk.ai · 20 years in Mérida · 2 recovery properties</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Shield className="w-3 h-3" /> JCI-accredited hospitals
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Award className="w-3 h-3" /> Canadian Healthcare Council
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <MapPin className="w-3 h-3" /> Mérida native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Byline bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By <strong className="text-foreground">Jules Ávila</strong> · May 11, 2026 · 10 min read</span>
          <div className="flex items-center gap-2 ml-auto">
            {['Facebook', 'X', 'LinkedIn', 'WhatsApp'].map((platform) => (
              <button
                key={platform}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-xs font-medium text-muted-foreground"
                title={`Share on ${platform}`}
              >
                {platform[0]}
              </button>
            ))}
            <button
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-xs text-muted-foreground"
              title="Copy link"
              onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
              🔗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}