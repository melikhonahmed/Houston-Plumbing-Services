import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-[#0E1624] text-white py-10 sm:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          {/* Left Text (Matching Reference: Get 24/7 Emergency Plumbing Help — Call Today!) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Get 24/7 Emergency <br className="sm:hidden" />
            Plumbing Help — <span className="text-white">Call Today!</span>
          </h2>

          {/* Right Phone Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="bg-[#D90429] hover:bg-[#b80323] text-white px-7 py-3.5 rounded-lg font-black text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-lg transition-all shrink-0 group"
          >
            <Phone className="w-4 h-4 transition-transform group-hover:scale-110" strokeWidth={2} />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

        </div>
      </div>
    </section>
  );
};
