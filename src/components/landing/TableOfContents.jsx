import React, { useState, useEffect } from 'react';

const TOC_ITEMS = [
  { id: 'hospital-guide', label: 'Hospital guide' },
  { id: 'pricing-table', label: 'Pricing table' },
  { id: 'merida-vs-alternatives', label: 'Mérida vs alternatives' },
  { id: 'recovery-timeline', label: 'Recovery timeline' },
  { id: 'insurance-accepted', label: 'Insurance accepted' },
  { id: 'get-the-guide', label: 'Get the guide' },
  { id: 'faq', label: 'FAQ' },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden xl:block fixed right-[max(1rem,calc((100vw-1100px)/2-240px))] top-24 w-52">
        <nav className="space-y-0.5">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">Contents</p>
          {TOC_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block text-sm px-3 py-1.5 rounded-md transition-colors ${
                activeId === id
                  ? 'text-primary font-medium bg-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile inline TOC */}
      <div className="xl:hidden sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-2 -mx-6 px-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {TOC_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-xs whitespace-nowrap px-3 py-1.5 rounded-full transition-colors ${
                activeId === id
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}