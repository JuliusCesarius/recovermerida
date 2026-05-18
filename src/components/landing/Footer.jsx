import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-3">
            <p className="text-lg font-medium text-foreground tracking-tight">
              Recover<span className="text-primary">Mérida</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Mérida's recovery ecosystem for international patients.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary">
              <a href="https://wa.me/529991234567" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                WhatsApp
              </a>
              <a href="mailto:hello@recovermerida.com" className="hover:underline underline-offset-2">
                hello@recovermerida.com
              </a>
              <a href="https://recovermerida.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                recovermerida.com
              </a>
              <a href="https://recovermerida.mx" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                recovermerida.mx
              </a>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-1 md:text-right">
            <p>Last updated: May 2026</p>
            <p>© 2026 RecoverMérida</p>
            <a href="https://julesavila.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2 block">
              julesavila.com
            </a>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <p className="text-xs text-muted-foreground leading-relaxed">
          RecoverMérida coordinates recovery logistics and does not provide medical diagnosis or treatment. All medical decisions should be made in consultation with qualified healthcare professionals. Procedure pricing is approximate and may vary by hospital and individual case.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <Link to="/terms" className="text-primary hover:underline underline-offset-2">Terms and Conditions</Link>
          <Link to="/about" className="text-primary hover:underline underline-offset-2">About</Link>
          <Link to="/contact" className="text-primary hover:underline underline-offset-2">Contact</Link>
        </div>
      </div>
    </footer>
  );
}