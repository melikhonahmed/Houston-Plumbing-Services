import React from 'react';
import { PhoneCall, Search, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      tag: 'UPFRONT WRITTEN ESTIMATE',
      desc: 'Getting started with Houston Plumbing Services is quick and hassle-free. Reach out online or by phone with your plumbing concern—we provide upfront, transparent written pricing before any work begins.',
      icon: PhoneCall,
      accent: '#D90429',
      iconBg: 'bg-red-50/90 text-[#D90429] border-red-200/80 shadow-red-500/5',
    },
    {
      num: '02',
      title: 'Inspection & Diagnosis',
      tag: '30-MIN COURTESY CALL',
      desc: 'Our Texas Master Plumbers arrive promptly in fully stocked service trucks with a 30-minute courtesy arrival call. We use advanced HD camera diagnostics to pinpoint the exact issue without destructive guesswork.',
      icon: Search,
      accent: '#0047BA',
      iconBg: 'bg-blue-50/90 text-[#0047BA] border-blue-200/80 shadow-blue-500/5',
    },
    {
      num: '03',
      title: 'Sit Back & Relax',
      tag: '100% QUALITY GUARANTEED',
      desc: 'We complete the repair or installation cleanly, test all lines thoroughly, and leave your property immaculate. Every service is backed by our 100% Quality Guarantee and Texas Master Plumber License #40714.',
      icon: ShieldCheck,
      accent: '#10B981',
      iconBg: 'bg-emerald-50/90 text-emerald-600 border-emerald-200/80 shadow-emerald-500/5',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#D90429]">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-tight">
            Fixing Your Plumbing Issues <br />
            <span className="text-slate-950">in Just 3 Simple Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            No stress, no surprise charges, and no endless waiting. We take care of the heavy lifting so your plumbing system stays reliable year-round.
          </p>
        </div>

        {/* 3-Column Milestone Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;

            return (
              <div
                key={s.num}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-slate-300 font-mono tracking-tight group-hover:text-slate-400 transition-colors">
                      {s.num}
                    </span>

                    <div className={`w-12 h-12 rounded-xl ${s.iconBg} border flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                      <Icon className="w-5.5 h-5.5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Micro-tag */}
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                    {s.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-950 tracking-tight mb-3">
                    {s.title}
                  </h3>

                  {/* Full Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Step {idx + 1} of 3</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#D90429]' : 'bg-slate-200'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${idx === 1 ? 'bg-[#0047BA]' : 'bg-slate-200'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${idx === 2 ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-950 tracking-tight">
              Ready to resolve your plumbing issue today?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Book online in 60 seconds or call our live Houston emergency dispatch line.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#D90429] hover:bg-[#b80323] text-white px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm inline-flex items-center gap-2 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 px-5 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D90429] transition-transform group-hover:scale-110" strokeWidth={2} />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
