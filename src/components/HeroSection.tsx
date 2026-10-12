import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { heroSinkImg, customerNealImg, customerSarahImg, customerDavidImg, customerElenaImg } from '../assets/images';
import { Phone, ArrowRight, BadgeCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  // Quick 60-Second Booking Bar state
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickZip, setQuickZip] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [quickLoading, setQuickLoading] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) return;
    setQuickLoading(true);
    setTimeout(() => {
      setQuickLoading(false);
      setQuickSubmitted(true);
    }, 450);
  };

  return (
    <div className="relative bg-[#0E1624] text-white overflow-hidden">
      
      {/* Hero Visual Container (Matching Reference: Dark Image Under Sink with Smooth Dark Gradient) */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSinkImg}
            alt="Licensed Plumber Fixing Kitchen Sink in Houston"
            className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.7] contrast-[1.05]"
          />
          {/* Deep Navy Gradient Overlay matching reference aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1624] via-[#0E1624]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1624] via-transparent to-transparent"></div>
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-2xl space-y-6">
            
            {/* Orange/Red Eyebrow (Matching Reference: YOUR TRUSTED PLUMBING EXPERTS) */}
            <div className="text-xs sm:text-sm font-extrabold text-[#D90429] uppercase tracking-wider">
              YOUR TRUSTED HOUSTON PLUMBING EXPERTS
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]">
              Fast Solutions for <br />
              <span className="text-white">Plumbing Problems</span>
            </h1>

            {/* Subtitle verbatim */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
              From emergency leak repairs and tankless water heaters to non-invasive under-slab tunneling, our licensed plumbers provide prompt, dependable, and code-compliant workmanship backed by our 100% Quality Guarantee.
            </p>

            {/* Dual CTA Buttons (Matching Reference) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-[#D90429] hover:bg-[#b80323] text-white px-7 py-3.5 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 group"
              >
                <Phone className="w-3.5 h-3.5 text-slate-300 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                <span>Contact Us Today</span>
              </a>
            </div>

            {/* Social Proof Overlapping Avatars Widget */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5 items-center">
                <img
                  src={customerNealImg}
                  alt="Verified Houston Customer Neal Alko"
                  className="w-11 h-11 rounded-full border-2 border-[#0E1624] object-cover shadow-md ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 hover:z-10"
                />
                <img
                  src={customerSarahImg}
                  alt="Verified Houston Customer Sarah Jenkins"
                  className="w-11 h-11 rounded-full border-2 border-[#0E1624] object-cover shadow-md ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 hover:z-10"
                />
                <img
                  src={customerDavidImg}
                  alt="Verified Houston Customer David M."
                  className="w-11 h-11 rounded-full border-2 border-[#0E1624] object-cover shadow-md ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 hover:z-10"
                />
                <img
                  src={customerElenaImg}
                  alt="Verified Houston Customer Elena R."
                  className="w-11 h-11 rounded-full border-2 border-[#0E1624] object-cover shadow-md ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 hover:z-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>210+ Verified</span>
                    <BadgeCheck className="w-4 h-4 text-emerald-400" strokeWidth={1.8} />
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <span className="text-amber-400 font-bold">5.0 ★</span>
                    <span>Google Customer Reviews</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Floating Quick Booking Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 pb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-7 text-slate-900">
          {quickSubmitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1">
              <div className="text-sm font-black text-emerald-950 flex items-center justify-center gap-1.5">
                <BadgeCheck className="w-4.5 h-4.5 text-emerald-600" strokeWidth={1.8} />
                <span>Priority Request Received!</span>
              </div>
              <p className="text-xs text-emerald-800">
                A Houston Plumbing Services dispatcher will call <strong>{quickPhone}</strong> within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              {/* Left Headline */}
              <div className="lg:col-span-4">
                <div className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-tight">
                  Quick Plumbing Service <br className="hidden sm:inline" />
                  <span className="text-[#0047BA]">Book in 60 Seconds.</span>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA]"
                />

                <input
                  type="tel"
                  required
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA]"
                />

                <button
                  type="submit"
                  disabled={quickLoading}
                  className="w-full bg-[#D90429] hover:bg-[#b80323] text-white py-3 px-4 rounded-lg font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>{quickLoading ? 'Submitting...' : 'Submit Request'}</span>
                  {!quickLoading && <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
};
