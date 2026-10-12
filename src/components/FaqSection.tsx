import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FaqSectionProps {
  onOpenQuoteModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Architectural Split Layout */}
        <div className="pb-10 border-b border-slate-200">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0047BA] mb-1.5">
            KNOWLEDGE BASE · FREQUENT QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase">
            FAQS - COMMON PLUMBING SERVICE QUESTIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            Clear, honest answers to help you make informed decisions about your home's plumbing.
          </p>
        </div>

        {/* Clean Accordion List with Fine Dividers */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0047BA] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-black pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-all duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#0047BA]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-extrabold text-slate-900">
              Have a question not listed here?
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Speak directly with our master plumbing dispatch team today.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D90429] transition-transform group-hover:scale-110" strokeWidth={2} />
              <span>Call (713) 231-3309</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 bg-[#D90429] hover:bg-[#b80323] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer group shadow-xs"
            >
              <span>Ask A Plumber</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
