import React, { useState } from 'react';
import { COUPONS, Coupon, BUSINESS_INFO } from '../data/content';
import { waterHeaterImg, homeownerImg, heroSinkImg, slabTunnelImg } from '../assets/images';
import { Calendar, Copy, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface SpecialsSectionProps {
  onOpenQuoteModal: (couponTitle?: string) => void;
}

export const SpecialsSection: React.FC<SpecialsSectionProps> = ({ onOpenQuoteModal }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (coupon: Coupon) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(coupon.code);
    }
    setCopiedId(coupon.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCouponImage = (id: string) => {
    switch (id) {
      case 'tankless': return waterHeaterImg;
      case 'tank': return waterHeaterImg;
      case 'repipe': return homeownerImg;
      case 'pricematch': return heroSinkImg;
      default: return slabTunnelImg;
    }
  };

  return (
    <section id="specials" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Reference: UPDATES NEWS kicker + Title on Left, Button on Right) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#D90429] mb-1.5">
              CURRENT SPECIALS & PROMOTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
              Direct Savings for <br />
              <span className="text-slate-950">Every Houston Home</span>
            </h2>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#D90429] hover:bg-[#b80323] text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-colors cursor-pointer self-start sm:self-auto shadow-sm"
          >
            Claim All Specials
          </button>
        </div>

        {/* 3 Featured Cards (Matching Reference: 3 Cards with Photo, Date, Title, Link) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUPONS.slice(0, 3).map((coupon) => {
            const isCopied = copiedId === coupon.id;
            const image = getCouponImage(coupon.id);

            return (
              <div
                key={coupon.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo on Top (Matching Reference) */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={image}
                      alt={coupon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#D90429] text-white font-black text-xs px-2.5 py-1 rounded-md shadow-sm">
                      {coupon.highlight}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" strokeWidth={1.8} />
                      <span>Valid Through: {coupon.expiration}</span>
                    </div>

                    <h3 className="text-lg font-black text-slate-950 tracking-tight leading-snug">
                      {coupon.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {coupon.subtitle}. Mention code when booking to receive this promotional discount on your service.
                    </p>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200/90 rounded-xl p-2.5">
                    <div className="font-mono text-xs font-black text-[#0047BA]">
                      {coupon.code}
                    </div>

                    <button
                      onClick={() => handleCopy(coupon)}
                      className="text-[11px] font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer px-2 py-1 rounded-md hover:bg-slate-200/60 transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" strokeWidth={2.5} />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-500" strokeWidth={1.8} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(coupon.title)}
                    className="w-full bg-[#0047BA] hover:bg-[#003899] text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 group shadow-xs"
                  >
                    <span>Redeem This Offer</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4th Special: Price Match Callout Strip */}
        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50/90 border border-blue-200/80 text-[#0047BA] flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5.5 h-5.5" strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900">
                {BUSINESS_INFO.priceMatchNote}
              </div>
              <div className="text-xs text-slate-500">
                Present any written quote from a licensed Houston plumbing contractor and we will beat it by 5%.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Price Match Request')}
            className="bg-[#D90429] hover:bg-[#b80323] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Request Price Match
          </button>
        </div>

      </div>
    </section>
  );
};
