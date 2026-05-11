import React from 'react';
import { ExternalLink } from 'lucide-react';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a0254f06a505803a56ab728/e930f2a98_image.png';

export default function AuthorBio() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">About the person behind RecoverMérida</h2>
      <div className="border border-border rounded-xl bg-card p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={FOUNDER_IMG}
            alt="Jules Ávila — lifelong Meridano, CEO of iluk.ai, founder of RecoverMérida"
            className="w-20 h-20 rounded-full object-cover object-top shrink-0"
          />
          <div className="space-y-4">
            <p className="text-[15px] text-foreground leading-relaxed">
              RecoverMérida was founded by Jules Ávila — a lifelong Meridano, CEO of{' '}
              <a href="https://iluk.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">iluk.ai</a>,
              and operator of two recovery properties in northern Mérida. After 20 years watching international patients navigate Mérida's healthcare system without a coordination layer, he decided to build one. If you want to learn more about his work or reach out directly, visit{' '}
              <a href="https://julesavila.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">julesavila.com</a>.
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