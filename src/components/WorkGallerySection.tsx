import React from 'react';
import {
  slabTunnelImg,
  waterHeaterImg,
  drainCameraImg,
  commercialImg,
  heroVanImg,
} from '../assets/images';
import { Layers, Flame, Camera, Building2, BadgeCheck } from 'lucide-react';

export const WorkGallerySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#D90429]">
            OUR WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
            Quality Plumbing <br />
            <span className="text-slate-950">Work You Can Trust</span>
          </h2>
        </div>

        {/* Masonry / Mosaic Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Featured Large Card on Left */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group h-[420px] lg:h-auto bg-slate-900">
            <img
              src={slabTunnelImg}
              alt="Under-Slab Foundation Tunneling in Houston"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90"
            />
            {/* Dark Caption Bar with Modern Icon */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
              <div className="bg-slate-900/90 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-2 rounded-xl inline-flex items-center gap-2 border border-slate-700/60 shadow-xs">
                <Layers className="w-3.5 h-3.5 text-cyan-400" strokeWidth={1.8} />
                <span>Under-Slab Tunneling & Foundation Pipe Repair</span>
              </div>
            </div>
          </div>

          {/* Right 4 Grid Images (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Grid 1: Water Heater */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-56 group bg-slate-900">
              <img
                src={waterHeaterImg}
                alt="Tankless and Tank Water Heater Installation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-end">
                <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-black uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-700/50">
                  <Flame className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.8} />
                  <span>Tankless Water Heater Installation</span>
                </span>
              </div>
            </div>

            {/* Grid 2: Drain Camera */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-56 group bg-slate-900">
              <img
                src={drainCameraImg}
                alt="HD Video Sewer Camera Diagnostics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-end">
                <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-black uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-700/50">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" strokeWidth={1.8} />
                  <span>HD Sewer Camera Diagnostics</span>
                </span>
              </div>
            </div>

            {/* Grid 3: Commercial */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-56 group bg-slate-900">
              <img
                src={commercialImg}
                alt="Commercial Restaurant & Facility Plumbing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-end">
                <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-black uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-700/50">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.8} />
                  <span>Commercial Facility Plumbing</span>
                </span>
              </div>
            </div>

            {/* Grid 4: Fleet & Team */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-56 group bg-slate-900">
              <img
                src={heroVanImg}
                alt="Houston Plumbing Services Master Plumber Fleet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-end">
                <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-black uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-700/50">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.8} />
                  <span>Master Plumbing Fleet & Technicians</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
