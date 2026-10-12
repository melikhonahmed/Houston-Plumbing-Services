import React from 'react';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface GuaranteeBannerProps {
  onOpenQuoteModal: () => void;
}

export const GuaranteeBanner: React.FC<GuaranteeBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-[#0047BA] text-white py-14 sm:py-16 border-y border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text - Exact match from original website */}
          <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
            <div className="text-xs sm:text-sm font-bold text-blue-100 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" strokeWidth={1.8} />
              <span>Risk-Free Plumbing Services In Houston Today!</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight">
              ALL PLUMBING SERVICES - 100% QUALITY GUARANTEE
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Every job is performed to strict Texas plumbing codes by licensed technicians. If you are not completely satisfied with our workmanship, we will return and resolve it at zero extra charge.
            </p>
          </div>

          {/* Right Action & Call Button */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto lg:w-full py-3.5 px-6 bg-[#D90429] hover:bg-[#b80323] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Request Guaranteed Service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto lg:w-full py-3 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-colors flex items-center justify-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 transition-transform group-hover:scale-110" strokeWidth={2} />
              <span>Call (713) 231-3309</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
