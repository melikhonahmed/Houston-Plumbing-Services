import React, { useState } from 'react';
import { masterPlumbersTeamImg } from '../assets/images';
import { BUSINESS_INFO } from '../data/content';
import { Check, ArrowRight, Phone } from 'lucide-react';

interface StorySectionProps {
  onOpenQuoteModal: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'expertise' | 'values'>('mission');

  const bullets = [
    'Reliable, fast, and efficient service.',
    'Skilled plumbers, quality work.',
    'Affordable pricing, no surprises.',
    'Satisfaction guaranteed, every time.',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Balanced 2-Column Split Matching Design Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography of Master Plumbers On-Site */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={masterPlumbersTeamImg}
                alt="Licensed Texas Master Plumbers reviewing residential plumbing architectural plans on-site in Houston"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top group-hover:scale-102 transition-transform duration-500 ease-out"
              />

              {/* Integrated Grounded Credential Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 text-white flex items-end justify-between">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-300">
                    Texas State Board of Plumbing Examiners
                  </div>
                  <div className="text-sm font-black text-white tracking-tight">
                    Master Plumber License #40714
                  </div>
                </div>
                <div className="text-right text-xs font-semibold text-slate-200">
                  Houston Owned & Operated
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story, Tabs & 2x2 Checklist */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Red Eyebrow (Matching Reference: WHO WE ARE) */}
            <div className="space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#D90429]">
                WHO WE ARE
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
                Plumbing Solutions <br />
                <span className="text-slate-950">for Every Home</span>
              </h2>
            </div>

            {/* Clean Tabbed Navigation Header (Our Mission | Our Expertise | Our Values) */}
            <div className="flex items-center gap-4 sm:gap-8 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveTab('mission')}
                className={`text-sm sm:text-base font-extrabold pb-2 relative transition-colors cursor-pointer ${
                  activeTab === 'mission'
                    ? 'text-[#0047BA] border-b-2 border-[#0047BA]'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Our Mission
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('expertise')}
                className={`text-sm sm:text-base font-extrabold pb-2 relative transition-colors cursor-pointer ${
                  activeTab === 'expertise'
                    ? 'text-[#0047BA] border-b-2 border-[#0047BA]'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Our Expertise
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('values')}
                className={`text-sm sm:text-base font-extrabold pb-2 relative transition-colors cursor-pointer ${
                  activeTab === 'values'
                    ? 'text-[#0047BA] border-b-2 border-[#0047BA]'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Our Values
              </button>
            </div>

            {/* Tab Content Paragraph (Verbatim Authentic Content) */}
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[88px]">
              {activeTab === 'mission' && (
                <p>
                  At <strong className="text-slate-950 font-bold">Houston Plumbing Services LLC</strong>, our mission is to provide prompt, dependable, and code-compliant plumbing solutions tailored to meet the unique needs of our customers. We strive to be your trusted partner in keeping your home and business running smoothly.
                </p>
              )}

              {activeTab === 'expertise' && (
                <p>
                  From tough slab leaks and exterior foundation tunneling in older Spring Branch properties to total water heater replacements and drain repairs across Katy, Sugar Land, and The Woodlands, our master plumbers diagnose and solve the problem right the first time.
                </p>
              )}

              {activeTab === 'values' && (
                <p>
                  As a family-owned company, my family and I are committed to taking one more worry off your mind. We honor our 100% Quality Guarantee, offer upfront flat-rate pricing with zero hidden fees, and stand behind our <strong className="text-slate-950 font-bold">Price Match + Go Lower by 5%</strong> guarantee.
                </p>
              )}
            </div>

            {/* 4 Bullet Points in 2x2 Grid with Precision Micro-Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-1">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200/90 text-[#D90429] flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="text-sm font-bold text-slate-900 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row: Primary Button + Direct Phone Consultation */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-[#D90429] hover:bg-[#b80323] text-white px-7 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg text-sm font-extrabold text-slate-900 hover:text-[#0047BA] transition-colors group"
              >
                <span className="w-9 h-9 rounded-xl bg-blue-50/90 border border-blue-200/80 text-[#0047BA] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" strokeWidth={2} />
                </span>
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
