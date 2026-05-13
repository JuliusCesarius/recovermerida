import { useEffect } from 'react';

function fireGA4(eventName, params) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
}

export default function ScrollTracking() {
  useEffect(() => {
    // Scroll depth tracking
    const milestones = [25, 50, 75, 100];
    const fired = new Set();

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          fireGA4('scroll_depth', { depth: m });
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Section visibility tracking via IntersectionObserver
    const SECTIONS = [
      { id: 'pricing-table', name: 'Pricing table viewed' },
      { id: 'comparison-table', name: 'Comparison table viewed' },
      { id: 'faq', name: 'FAQ viewed' },
      { id: 'get-the-guide', name: 'Lead form viewed' },
      { id: 'high-intent-form', name: 'High-intent form viewed' },
    ];

    const observedSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedSections.has(entry.target.id)) {
            const section = SECTIONS.find((s) => s.id === entry.target.id);
            if (section) {
              observedSections.add(entry.target.id);
              fireGA4('section_viewed', { section: section.name });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}