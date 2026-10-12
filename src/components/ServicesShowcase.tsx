import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import {
  ArrowRight,
  Phone,
  Wrench,
  Layers,
  Droplets,
  Flame,
  Building2,
  Sparkles,
  ChevronRight,
  Check,
} from 'lucide-react';
import {
  homeownerImg,
  commercialImg,
  waterHeaterImg,
  drainCameraImg,
  slabTunnelImg,
  heroSinkImg,
} from '../assets/images';

interface ServicesShowcaseProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('residential');

  const servicesList = [
    {
      id: 'residential',
      num: '01',
      name: 'Residential Plumbing',
      tagline: 'Precision leak diagnostics & whole-home fixtures',
      title: 'Complete Home Plumbing & Emergency Repairs',
      desc: 'From precision electronic leak detection to fixture repairs, water lines, and garbage disposals — performed with licensed master-level craftsmanship.',
      badge: 'Same-Day Dispatch',
      image: heroSinkImg,
      icon: Wrench,
      bullets: [
        'Precision electronic leak detection',
        'Same-day Houston emergency repairs',
        'Faucets, fixtures & toilet installations',
        'Upfront flat-rate written pricing',
      ],
    },
    {
      id: 'pipe-repair',
      num: '02',
      name: 'Sewer & Under-Slab Tunneling',
      tagline: 'Exterior yard access — zero floor destruction',
      title: 'Non-Invasive Underground Foundation Repairs',
      desc: 'Houston’s shifting clay soil cracks pipes beneath concrete slabs. We tunnel directly from the exterior yard so interior hardwood, tile, and carpets remain 100% untouched.',
      badge: 'Zero Floor Damage',
      image: slabTunnelImg,
      icon: Layers,
      bullets: [
        'Exterior perimeter yard tunneling access',
        'Interior hardwood & tile 100% protected',
        'High-density structural soil backfill',
        'Permanent code-certified replacement',
      ],
    },
    {
      id: 'drain-cleaning',
      num: '03',
      name: 'Drain Cleaning & Hydro Jetting',
      tagline: '4,000 PSI high-pressure scouring & root clearing',
      title: 'High-Pressure Hydro Jetting & Root Removal',
      desc: 'For slow or recurring drain clogs, we utilize fiber-optic sewer camera inspections and heavy-duty 4,000 PSI hydro jetting to blast through grease, sludge, and tree roots.',
      badge: '4,000 PSI Hydro Jet',
      image: drainCameraImg,
      icon: Droplets,
      bullets: [
        'HD fiber-optic sewer camera inspection',
        '4,000 PSI hydro-jetting pipe scouring',
        'Main sewer line cleanouts & snaking',
        'Permanent root intrusion remediation',
      ],
    },
    {
      id: 'water-heaters',
      num: '04',
      name: 'Water Heaters & Tankless',
      tagline: 'Navien & Rinnai continuous flow systems',
      title: 'Gas, Electric & Continuous Tankless Water Heaters',
      desc: 'Don’t settle for lukewarm showers. We install, repair, and maintain both gas and electric water heaters, including high-efficiency continuous tankless units.',
      badge: '$400 Off Tankless',
      image: waterHeaterImg,
      icon: Flame,
      bullets: [
        '$400 off high-efficiency tankless installs',
        '$200 off traditional tank replacements',
        'Expansion tanks & code-certified venting',
        'Same-day emergency heater replacement',
      ],
    },
    {
      id: 'commercial',
      num: '05',
      name: 'Commercial Plumbing',
      tagline: 'Restaurants, offices, retail & multi-unit properties',
      title: 'Code-Compliant Plumbing for Houston Businesses',
      desc: 'Reliable commercial plumbing for restaurants, offices, retail spaces, and multi-unit complexes — including grease traps, commercial boilers, and rapid emergency dispatch.',
      badge: 'Commercial Fleet',
      image: commercialImg,
      icon: Building2,
      bullets: [
        'Commercial boilers & water heaters',
        'Grease trap lines & interceptors',
        'Strict Houston municipal code compliance',
        'Priority commercial dispatch with zero downtime',
      ],
    },
    {
      id: 'repipe',
      num: '06',
      name: 'Whole Home Repiping',
      tagline: 'Uponor PEX-A & copper replacement with lifetime warranty',
      title: 'Durable PEX-A & Copper Pipe Replacement',
      desc: 'Permanently eliminate pinhole leaks, rusty discolored water, and low pressure by replacing aging galvanized pipes with modern Uponor PEX-A and Type L copper.',
      badge: 'Lifetime Warranty',
      image: homeownerImg,
      icon: Sparkles,
      bullets: [
        'Free water heater with whole-home repipe',
        'Permanent end to recurring pinhole leaks',
        'Balanced high-flow water pressure restored',
        'Lifetime manufacturer material warranty',
      ],
    },
  ];

  const currentService = servicesList.find((s) => s.id === selectedServiceId) || servicesList[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Clean Editorial Hierarchy */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#D90429] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D90429]" />
              <span>CORE SERVICE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
              Reliable, Fast, and <br />
              <span className="text-[#0047BA]">Expert Plumbing Solutions</span>
            </h2>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#D90429] hover:bg-[#b80323] text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            Request Service Quote
          </button>
        </div>

        {/* Interactive Split Layout: Architectural Menu + Live Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Polished Service Console Menu (horizontal snap on small screens, vertical on tablet/desktop) */}
          <div className="lg:col-span-5 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            {servicesList.map((service) => {
              const isSelected = service.id === selectedServiceId;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`min-w-[240px] sm:min-w-[280px] lg:min-w-0 snap-start text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between group border shrink-0 lg:shrink ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-lg shadow-slate-950/10 ring-2 ring-blue-500/20'
                      : 'bg-white hover:bg-slate-50/90 text-slate-800 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Modern Architectural Icon Container */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0047BA] to-[#002f80] text-white border-blue-400/40 shadow-md shadow-blue-900/30'
                          : 'bg-slate-100/90 text-slate-700 border-slate-200/90 group-hover:bg-blue-50 group-hover:text-[#0047BA] group-hover:border-blue-200/80 shadow-2xs'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-105" strokeWidth={1.8} />
                    </div>

                    {/* Text Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono font-bold ${
                            isSelected ? 'text-blue-400' : 'text-slate-400'
                          }`}
                        >
                          {service.num}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-extrabold truncate ${
                            isSelected ? 'text-white' : 'text-slate-900 group-hover:text-slate-950'
                          }`}
                        >
                          {service.name}
                        </span>
                      </div>
                      <p
                        className={`text-xs truncate font-normal mt-0.5 ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Cue */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isSelected
                        ? 'bg-white/15 text-white'
                        : 'bg-slate-100 text-slate-400 group-hover:text-slate-800 group-hover:bg-slate-200'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" strokeWidth={2} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Photography Showcase with Grounded Technical Proof */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 min-h-[480px] sm:min-h-[520px] lg:h-full group bg-slate-950 flex flex-col justify-end">
              
              {/* Background Photo with Depth Scale */}
              <img
                src={currentService.image}
                alt={currentService.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
              />

              {/* Rich Multi-stop Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/20 pointer-events-none" />

              {/* Top Status Indicators */}
              <div className="absolute top-5 inset-x-5 sm:top-6 sm:inset-x-6 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentService.badge}</span>
                </div>

                <div className="text-xs font-extrabold text-slate-200 bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                  TSBPE Lic. #40714
                </div>
              </div>

              {/* Bottom Technical Specifications & Action Console */}
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-blue-400 mb-1">
                    Verified Craftsmanship Spec
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-snug">
                    {currentService.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                  {currentService.desc}
                </p>

                {/* 4 Technical Specs Grid with Modern Bespoke Micro-Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-white/15">
                  {currentService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Row */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenQuoteModal(currentService.name)}
                    className="bg-[#D90429] hover:bg-[#b80323] text-white px-5 sm:px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-red-950/40 flex items-center gap-2 hover:scale-[1.02] group"
                  >
                    <span>Schedule This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 transition-colors py-1.5 group"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EF233C] transition-transform group-hover:scale-110" strokeWidth={1.8} />
                    <span>Live Houston Line: <strong className="font-black text-white">{BUSINESS_INFO.phone}</strong></span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
