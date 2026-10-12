import React from 'react';
import { HoustonLogo } from './HoustonLogo';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#090F1A] text-slate-400 pt-16 pb-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio & Modern Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <HoustonLogo variant="light" size="md" />

            <p className="text-slate-400 leading-relaxed pr-6">
              Houston Plumbing Services provides top-quality plumbing services, from emergency repairs and water heaters to non-invasive underground slab tunneling. Trust our certified master plumbers.
            </p>

            {/* Modern Social Media Icon Badges */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-slate-700/60 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white border border-slate-700/60 hover:border-pink-500/50 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-black text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#FF0000] text-slate-300 hover:text-white border border-slate-700/60 hover:border-[#FF0000] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-white transition-colors">
                  Specials
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas / Scope (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                <li key={idx} className="hover:text-white transition-colors">
                  {area}, TX
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 mt-0.5 text-[#EF233C]">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.8} />
                </div>
                <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-blue-400">
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.8} />
                </div>
                <span>contact@houstonplumbingservices.com</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-emerald-400">
                  <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-white hover:text-red-400 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-medium">
                Texas Master Plumber License # 40714
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © 2026 Houston Plumbing Services, LLC. All Rights Reserved.
          </div>
          <div>
            Open 24 Hours, 7 Days a Week · Bonded & Insured
          </div>
        </div>

      </div>
    </footer>
  );
};
