import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Home, Users, Calendar } from 'lucide-react';

const MERIDA_IMG = "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=900&q=80&fit=crop";

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

            <p className="text-sm text-muted-foreground italic">
              The honest, no-fluff guide to medical tourism and recovery in Mérida — May 2026
            </p>

            <p className="text-[17px] md:text-[18px] leading-relaxed font-medium text-foreground border-l-4 border-primary pl-4">
              Mérida's four JCI-accredited hospitals offer the same procedures as US facilities at 30–70% less, with zero waiting lists and bilingual care teams — but the recovery side has been largely uncoordinated, until now. Here's everything you need to plan it right.
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
                src={MERIDA_IMG}
                alt="Northern Mérida hospital district — Altabrisa neighborhood near Star Médica and Faro del Mayab hospitals"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Shield className="w-3 h-3" /> JCI-accredited hospitals
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Users className="w-3 h-3" /> Bilingual care teams
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Home className="w-3 h-3" /> Recovery-certified housing
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-primary/5 text-primary border border-primary/15 rounded-full px-3 py-1">
                    <Calendar className="w-3 h-3" /> May 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Byline bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>RecoverMerida Editorial · May 11, 2026 · 10 min read</span>
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