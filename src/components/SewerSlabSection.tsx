import React from 'react';
import { SEWER_SLAB_SPECIALISTS, BUSINESS_INFO } from '../data/content';
import { Camera, Layers, Network, Check, ArrowRight, AlertTriangle } from 'lucide-react';
import { drainCameraImg, slabTunnelImg } from '../assets/images';

interface SewerSlabSectionProps {
  onOpenQuoteModal: (actionName?: string) => void;
}

export const SewerSlabSection: React.FC<SewerSlabSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Video': return Camera;
      case 'Construction': return Layers;
      case 'Layers':
      default: return Network;
    }
  };

  const getCardImage = (id: string) => {
    switch (id) {
      case 'camera': return drainCameraImg;
      case 'tunneling':
      case 'mainline':
      default: return slabTunnelImg;
    }
  };

  return (
    <section id="sewer-slab" className="py-16 sm:py-24 bg-[#061224] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#D90429] mb-1.5">
              HOUSTON CLAY SOIL & UNDERGROUND DIAGNOSTICS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              SEWER & SLAB SPECIALISTS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium max-w-2xl">
              Houston Plumbing Services ® uses advanced technology to fix your sewer lines correctly the first time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('Sewer & Slab Inspection')}
              className="bg-[#D90429] hover:bg-[#b80323] text-white px-5 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 group shadow-sm"
            >
              <span>Schedule Camera Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Engineering Advisory: Exterior Tunneling vs Jackhammering */}
        <div className="my-10 bg-slate-900 border border-slate-800 rounded-xl p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" strokeWidth={1.8} />
                <span>The Texas Clay Foundation Challenge · Stop The Band-Aid Fixes</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Exterior Under-Slab Tunneling: Zero Interior Floor Destruction
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Houston’s expansive gumbo clay shifts constantly, causing pipes underneath concrete foundations to crack and separate. While standard contractors jackhammer straight through your expensive hardwood or imported tile, <strong>Houston Plumbing Services LLC tunnels beneath your slab from the exterior yard</strong>. Your interior floors remain 100% intact and dust-free.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-950 border border-slate-800/80 rounded-lg p-4 space-y-2 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Our Non-Invasive Standard:
              </div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span>Zero interior floor demolition</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span>No toxic dust or homeowner displacement</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span>Permanent code-certified replacement</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Specialist Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEWER_SLAB_SPECIALISTS.map((spec) => {
            const Icon = getIcon(spec.iconName);
            const image = getCardImage(spec.id);

            return (
              <div
                key={spec.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-950 border-b border-slate-800">
                    <img
                      src={image}
                      alt={spec.title}
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-950/40">
                          <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider">
                          Engineering Grade
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Copy */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-white tracking-tight uppercase">
                      {spec.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400 leading-relaxed font-normal">
                      {spec.tagline}
                    </p>

                    {/* Checkpoints */}
                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                      {spec.checkpoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenQuoteModal(spec.title)}
                    className="w-full bg-[#0047BA] hover:bg-[#003899] text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 group shadow-xs"
                  >
                    <span>{spec.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
