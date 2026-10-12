import React from 'react';
import { COMPARISON_DATA } from '../data/content';
import { HoustonLogo } from './HoustonLogo';
import { Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Architectural Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0047BA] mb-1.5">
              THE MASTER PLUMBER DIFFERENCE · SERVICE MATRIX
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase max-w-3xl">
              HOW IS HOUSTON PLUMBING SERVICES LLC DIFFERENT THAN OTHER PLUMBING COMPANIES?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
              Compare our service standards directly against uncertified handymen and generic national franchises.
            </p>
          </div>
        </div>

        {/* Clean Architectural Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mt-10">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-black text-slate-900 bg-slate-50 w-2/5">
                  Standards & Credentials
                </th>
                
                {/* Column 2: Uncertified */}
                <th className="p-5 sm:p-6 text-center text-xs sm:text-sm font-bold text-slate-500 bg-slate-50 w-1/5 border-l border-slate-200">
                  <div className="text-rose-600 font-extrabold uppercase tracking-wide">Uncertified</div>
                  <div className="text-slate-400 text-xs font-medium">Handymen</div>
                </th>

                {/* Column 3: Established Corporate */}
                <th className="p-5 sm:p-6 text-center text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 w-1/5 border-l border-slate-200">
                  <div className="font-extrabold text-slate-800 uppercase tracking-wide">National</div>
                  <div className="text-slate-400 text-xs font-medium">Franchises</div>
                </th>

                {/* Column 4: Houston Plumbing Services (Highlighted) */}
                <th className="p-5 sm:p-6 text-center bg-[#061224] text-white w-1/5 border-l border-slate-800">
                  <div className="flex justify-center mb-1">
                    <HoustonLogo variant="light" size="sm" className="scale-90" />
                  </div>
                  <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider">
                    ★ Houston Choice
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-slate-900">
                    <div>{row.feature}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5">{row.detail}</div>
                  </td>

                  {/* Uncertified */}
                  <td className="p-5 sm:p-6 text-center border-l border-slate-100">
                    {row.uncertified === false ? (
                      <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-rose-50/90 border border-rose-200/80 text-rose-500 shadow-2xs">
                        <X className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium">{String(row.uncertified)}</span>
                    )}
                  </td>

                  {/* Established / Big-Box Franchises */}
                  <td className="p-5 sm:p-6 text-center border-l border-slate-100">
                    {typeof row.established === 'boolean' ? (
                      row.established ? (
                        <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-600 shadow-2xs">
                          <Check className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-rose-50/90 border border-rose-200/80 text-rose-500 shadow-2xs">
                          <X className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </span>
                      )
                    ) : (
                      <span className="text-xs text-slate-600 font-medium">{String(row.established)}</span>
                    )}
                  </td>

                  {/* Houston Plumbing Services */}
                  <td className="p-5 sm:p-6 text-center bg-blue-50/30 border-l border-blue-100">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-[#0047BA] to-[#002f80] text-white shadow-sm shadow-blue-900/30 border border-blue-400/40">
                      <Check className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
