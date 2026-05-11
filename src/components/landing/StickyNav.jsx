import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('get-the-guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-white/95 backdrop-blur-md border-b border-border shadow-sm`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-medium text-foreground tracking-tight">
          Recover<span className="text-primary">Merida</span>
        </span>
        <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          <span className="px-2 py-1 rounded hover:bg-muted cursor-pointer font-medium text-foreground">EN</span>
          <span className="text-border">|</span>
          <span className="px-2 py-1 rounded hover:bg-muted cursor-pointer">ES</span>
        </div>
        <Button size="sm" onClick={scrollToForm} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get free guide
        </Button>
      </div>
    </nav>
  );
}