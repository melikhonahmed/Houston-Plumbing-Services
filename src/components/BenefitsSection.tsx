import React from 'react';
import { realPlumberImg } from '../assets/images';
import { BUSINESS_INFO } from '../data/content';
import { ShieldCheck, BadgePercent, Clock3, Sparkles, Phone, ArrowRight, Check } from 'lucide-react';

interface BenefitsSectionProps {
  onOpenQuoteModal?: (target?: string) => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      num: '01',
      title: 'Direct Master Plumber Oversight',
      tagline: 'Zero unsupervised apprentices or commissioned sales reps',
      description:
        'Most national franchise chains dispatch junior apprentices on commission. Every project at Houston Plumbing Services is diagnosed and directed under Texas Master Plumber License #40714, ensuring code-compliant craftsmanship on every fixture.',
      proof: 'Full compliance with Texas Uniform Plumbing Code',
      icon: ShieldCheck,
      badgeStyle: 'bg-blue-50/90 text-[#0047BA] border-blue-200/80 shadow-blue-500/5',
    },
    {
      num: '02',
      title: 'Transparent Pricing with 5% Price Beat',
      tagline: 'Itemized written quotes before work begins — guaranteed',
      description:
        'You receive a firm written estimate before any wrench touches a pipe. Present any written quote from a licensed Houston plumbing contractor, and we will match the full scope of work and beat their total price by 5%.',
      proof: 'Zero dispatch fee with repair · No weekend or overtime premiums',
      icon: BadgePercent,
      badgeStyle: 'bg-emerald-50/90 text-emerald-700 border-emerald-200/80 shadow-emerald-500/5',
    },
    {
      num: '03',
      title: '24/7 Emergency Dispatch Under 45 Minutes',
      tagline: 'Live local Houston dispatch day and night',
      description:
        'Plumbing emergencies demand immediate action. When a main line bursts or a water heater leaks, connect immediately with local Houston technicians who provide instant main shutoff instructions while our mobile warehouse truck is en route.',
      proof: 'Average arrival under 45 minutes across Greater Houston',
      icon: Clock3,
      badgeStyle: 'bg-red-50/90 text-[#D90429] border-red-200/80 shadow-red-500/5',
    },
    {
      num: '04',
      title: 'Clean Home & 1-Year Workmanship Warranty',
      tagline: 'Protective runners, shoe covers, and spotless cleanups',
      description:
        'We respect your property as if it were our own. Technicians wear protective shoe covers, lay down heavy neoprene floor runners, and test every fixture thoroughly before leaving your home in pristine condition.',
      proof: '1-year comprehensive warranty on all replacement parts and labor',
      icon: Sparkles,
      badgeStyle: 'bg-amber-50/90 text-amber-700 border-amber-200/80 shadow-amber-500/5',
    },
  ];

  const trustMetrics = [
    { label: 'State License', value: '#40714', note: 'TSBPE Master' },
    { label: 'Field Experience', value: '19+ Yrs', note: 'Greater Houston' },
    { label: 'Emergency Arrival', value: '< 45 Min', note: '24/7 Dispatch' },
    { label: 'Price Guarantee', value: '5% Lower', note: 'Competitor Match' },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Quiet, Editorial Metadata */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-bold text-[#D90429] uppercase tracking-wider mb-3">
            <span>TSBPE Master Plumber Lic. #40714</span>
            <span className="text-slate-300" aria-hidden="true">/</span>
            <span className="text-slate-600">Greater Houston Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
            Why Houston Property Owners Choose Us Over Generic Franchises
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Direct master trade oversight, upfront written quotes, and an enforceable 5% price beat promise. No commissioned sales reps, no hidden dispatch surcharges, and no unsupervised apprentices.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Photography & Grounded Credentials */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md">
              <img
                src={realPlumberImg}
                alt="Certified Houston Texas Master Plumber inspecting residential plumbing system"
                className="w-full h-[420px] sm:h-[480px] object-cover object-top"
              />

              {/* Grounded Photo Metadata Caption */}
              <div className="p-5 bg-slate-950 text-white border-t border-slate-800">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Wayne Campbell
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400">
                    TSBPE Lic. #40714
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Lead Master Plumber with over 19 years of continuous service throughout Harris, Fort Bend, and Montgomery counties.
                </p>
              </div>
            </div>

            {/* Clean Proof Grid */}
            <div className="grid grid-cols-2 gap-3">
              {trustMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {metric.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {metric.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Editorial Architectural Feature Rows */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-xs transition-colors hover:border-slate-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0 mt-1">
                      {pillar.num}
                    </span>

                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                          {pillar.title}
                        </h3>
                        {/* Modern Tailored Icon Badge */}
                        <div className={`w-11 h-11 rounded-xl ${pillar.badgeStyle} border flex items-center justify-center shrink-0 shadow-2xs`}>
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-[#0047BA]">
                        {pillar.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span>{pillar.proof}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Direct Conversion Footer Console */}
            <div className="p-6 rounded-xl bg-[#0E1624] text-white border border-slate-800 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Immediate Assistance
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    Need an emergency repair or a second opinion?
                  </div>
                  <p className="text-xs text-slate-400">
                    Live local dispatchers on duty 24/7. Never an automated answering service.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-4 py-2.5 rounded-lg bg-[#D90429] hover:bg-[#b80323] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" strokeWidth={2} />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>

                  {onOpenQuoteModal && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal('Why Choose Us')}
                      className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span>Get Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
