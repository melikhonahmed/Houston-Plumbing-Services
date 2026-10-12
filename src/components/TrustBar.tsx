import { ShieldCheck, ArrowRight, Phone, BadgeCheck, Medal, Clock3, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface TrustBarProps {
  onSelectCategory: (category: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onSelectCategory }) => {
  const metrics = [
    {
      stat: "19+",
      statLabel: "Years Active",
      title: "Houston Craftsmanship",
      subTitle: "Serving Greater Houston Since 2005",
      bullet1: "15,000+ residential & commercial systems completed",
      bullet2: "Master-level diagnostics & non-invasive methods",
      actionLabel: "View Track Record",
      target: "residential",
      icon: Medal,
      accentBorder: "group-hover:border-blue-500/80",
      accentBar: "group-hover:bg-[#0047BA]",
      iconBg: "bg-blue-50/90 text-[#0047BA] border border-blue-200/80 shadow-xs shadow-blue-500/5",
      hoverIconBg: "group-hover:bg-[#0047BA] group-hover:text-white group-hover:border-[#0047BA] group-hover:shadow-md group-hover:shadow-blue-500/20",
    },
    {
      stat: "100%",
      statLabel: "Guarantee",
      title: "Upfront Price Pledge",
      subTitle: "Written Quotes · Zero Hidden Trip Fees",
      bullet1: "Price Match + Go 5% Lower on written competitor quotes",
      bullet2: "Firm pricing before any work begins — no surprises",
      actionLabel: "Our Price Pledge",
      target: "commercial",
      icon: ShieldCheck,
      accentBorder: "group-hover:border-emerald-500/80",
      accentBar: "group-hover:bg-emerald-600",
      iconBg: "bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 shadow-xs shadow-emerald-500/5",
      hoverIconBg: "group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-md group-hover:shadow-emerald-500/20",
    },
    {
      stat: "#40714",
      statLabel: "TSBPE License",
      title: "Texas Master Plumber",
      subTitle: "Direct State Board Certification",
      bullet1: "Regulated by Texas State Board of Plumbing Examiners",
      bullet2: "$2,000,000 general liability bonded & code-certified",
      actionLabel: "Verify License",
      target: "slab-leak",
      icon: BadgeCheck,
      accentBorder: "group-hover:border-slate-800/80",
      accentBar: "group-hover:bg-slate-900",
      iconBg: "bg-slate-100/90 text-slate-800 border border-slate-200/90 shadow-xs",
      hoverIconBg: "group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:shadow-md",
    },
    {
      stat: "24/7",
      statLabel: "Live Fleet",
      title: "Rapid Emergency Response",
      subTitle: "Houston Metro Dispatch Coverage",
      bullet1: "45-minute average arrival time across Houston",
      bullet2: "Fully stocked mobile warehouse on every call",
      actionLabel: "Emergency Dispatch",
      target: "water-heaters",
      icon: Clock3,
      accentBorder: "group-hover:border-red-500/80",
      accentBar: "group-hover:bg-[#D90429]",
      iconBg: "bg-red-50/90 text-[#D90429] border border-red-200/80 shadow-xs shadow-red-500/5",
      hoverIconBg: "group-hover:bg-[#D90429] group-hover:text-white group-hover:border-[#D90429] group-hover:shadow-md group-hover:shadow-red-500/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-[#D90429] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D90429]" />
              <span>Verified Qualifications & Standing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-950 tracking-tight leading-tight">
              Houston’s Gold Standard in <br className="hidden sm:inline" />
              <span className="text-[#0047BA]">Master-Level Plumbing</span>
            </h2>
          </div>

          <div className="text-sm text-slate-600 max-w-md leading-relaxed">
            Every project is executed by state-regulated tradesmen adhering to the International Plumbing Code and Texas state regulations.
          </div>
        </div>

        {/* 4 Distinct Architectural Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectCategory(item.target)}
                className={`relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 ${item.accentBorder} shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06),0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden`}
              >
                {/* Top Colored Accent Bar on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-transparent ${item.accentBar} transition-colors duration-300`} />

                <div>
                  {/* Top Header: Stat Category & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                      {item.statLabel}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.hoverIconBg} flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 shrink-0`}>
                      <Icon className="w-5 h-5 transition-transform" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* High-Impact Stat Display */}
                  <div className="text-4xl sm:text-[42px] font-black text-slate-950 tracking-tight tabular-nums group-hover:text-[#0047BA] transition-colors mb-2 leading-none">
                    {item.stat}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight mt-3 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-5">
                    {item.subTitle}
                  </div>

                  {/* Structured Proof Points (Clean High-Craft Spec Lines) */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item.bullet1}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item.bullet2}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger Strip */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700 group-hover:text-[#0047BA] transition-colors">
                    {item.actionLabel}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#0047BA] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom State Licensing Strip with Direct Dial Action */}
        <div className="mt-10 pt-7 border-t border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4">
            <span className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">
              State Regulated:
            </span>
            <span>Texas State Board of Plumbing Examiners (TSBPE)</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
            <span className="font-semibold text-slate-900">{BUSINESS_INFO.license}</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              {BUSINESS_INFO.licenseStatus}
            </span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#D90429] transition-colors shrink-0 group"
          >
            <Phone className="w-3.5 h-3.5 text-[#D90429] group-hover:scale-110 transition-transform" />
            <span>24/7 Live Emergency Line: <strong className="font-black text-slate-950">{BUSINESS_INFO.phone}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
};
