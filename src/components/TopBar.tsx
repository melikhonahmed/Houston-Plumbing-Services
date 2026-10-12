import React, { useState } from 'react';
import { HoustonLogo } from './HoustonLogo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, Clock, Menu, X, ArrowRight } from 'lucide-react';

interface TopBarProps {
  onOpenQuoteModal: (serviceOrCoupon?: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0E1624] text-white sticky top-0 z-50 shadow-md">
      {/* 1. Very Top Utility Bar (Matching Reference Exact Layout) */}
      <div className="border-b border-slate-800/80 text-[11px] py-2 px-4 sm:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Phone & License */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span className="w-5 h-5 rounded-md bg-red-500/10 border border-red-500/20 text-[#EF233C] flex items-center justify-center group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                <Phone className="w-3 h-3" strokeWidth={2} />
              </span>
              <span className="font-semibold text-slate-200 group-hover:text-white">{BUSINESS_INFO.phone}</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-slate-400" strokeWidth={1.75} />
              <span>contact@houstonplumbingservices.com</span>
            </div>
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Emergency Service</span>
            </div>

            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 font-medium">
              Texas Master Plumber {BUSINESS_INFO.license}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - Responsive scaling for mobile and tablet */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <HoustonLogo variant="full-badge" size="sm" className="sm:hidden" />
            <HoustonLogo variant="full-badge" size="md" className="hidden sm:inline-flex" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#about" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#specials" className="hover:text-white transition-colors">
              Specials
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Call CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-[#D90429] hover:bg-[#b80323] text-white px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all group"
            >
              <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" strokeWidth={2} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 bg-[#D90429] text-white rounded-lg sm:hidden shadow-xs"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A121E] border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Services
            </a>
            <a
              href="#specials"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-slate-900 rounded-lg hover:bg-slate-800 text-rose-400 transition-colors"
            >
              Current Specials
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#0047BA] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-sm"
            >
              Get Free Estimate
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full bg-[#D90429] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
