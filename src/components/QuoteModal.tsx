import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, CORE_SERVICES, COUPONS } from '../data/content';
import { X, Send, BadgeCheck, Phone, ShieldCheck, Clock3 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceOrCoupon?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceOrCoupon,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('Emergency Plumbing Repair');
  const [details, setDetails] = useState('');
  const [urgency, setUrgency] = useState<'immediate' | 'today' | 'flexible'>('today');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialServiceOrCoupon) {
      setService(initialServiceOrCoupon);
    }
  }, [initialServiceOrCoupon, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-xl w-full max-h-[92vh] overflow-y-auto relative">
        
        {/* Modal Header */}
        <div className="bg-[#061224] text-white p-6 rounded-t-xl flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
          <div>
            <div className="text-[10px] font-bold text-[#D90429] uppercase tracking-widest flex items-center gap-1.5">
              <Clock3 className="w-3.5 h-3.5 text-[#D90429]" strokeWidth={1.8} />
              <span>24/7 Priority Houston Dispatch</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Request A Free Fast Quote
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Zero obligation · Transparent written pricing before any work starts
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <BadgeCheck className="w-9 h-9" strokeWidth={1.8} />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Thank You, {name || 'Valued Customer'}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your plumbing estimate request has been received by our Houston Master Plumber dispatch desk. We will call you within 15 minutes to confirm appointment details.
              </p>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-sm mx-auto text-left text-xs text-slate-700 space-y-1">
                <div><strong>Selected Service:</strong> {service}</div>
                <div><strong>Contact:</strong> {phone}</div>
                <div><strong>Urgency:</strong> {urgency === 'immediate' ? 'Emergency 24/7' : urgency === 'today' ? 'Same-Day' : 'Flexible'}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3 bg-[#D90429] hover:bg-[#b80323] text-white font-black text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-sm group"
                >
                  <Phone className="w-4 h-4 text-white transition-transform group-hover:scale-110" strokeWidth={2} />
                  <span>Call (713) 231-3309</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Urgency Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Service Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('immediate')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      urgency === 'immediate'
                        ? 'bg-red-50 border-[#D90429] text-[#D90429]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Immediate (24/7)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('today')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      urgency === 'today'
                        ? 'bg-blue-50 border-[#0047BA] text-[#0047BA]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Same-Day
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('flexible')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      urgency === 'flexible'
                        ? 'bg-slate-100 border-slate-700 text-slate-900'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Later This Week
                  </button>
                </div>
              </div>

              {/* Service or Voucher Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Plumbing Service or Special Voucher *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden bg-slate-50 font-bold text-slate-800"
                >
                  <optgroup label="Core Services">
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Sewer & Slab Tunneling">Sewer & Slab Tunneling</option>
                    <option value="Emergency Drain Cleaning">Emergency Drain Cleaning</option>
                  </optgroup>
                  <optgroup label="Coupons & Specials">
                    {COUPONS.map((c) => (
                      <option key={c.id} value={`${c.title} (${c.code})`}>
                        {c.title} — Code: {c.code}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Other">
                    <option value="General Inquiry">General Consultation / Diagnostic</option>
                    <option value="Price Match Request">5% Lower Price Match Request</option>
                  </optgroup>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(713) 231-3309"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Email & Address / Zip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Houston Street / Zip Code
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 77055 or Spring Branch"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Issue Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Description of the Issue
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g., leaking water heater in garage, slab leak suspected, slow drains in kitchen..."
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:border-[#0047BA] focus:outline-hidden"
                />
              </div>

              {/* Price Match & Guarantee Note */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0047BA] shrink-0" strokeWidth={1.8} />
                <span>
                  Backed by our <strong>100% Quality Guarantee</strong> & <strong>Price Match + 5% Lower</strong> pledge.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#D90429] hover:bg-[#b80323] text-white font-black text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm group"
              >
                {loading ? (
                  <span>Dispatching Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    <span>Request Free Written Estimate</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-center text-slate-400">
                Direct phone inquiries: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#0047BA] font-bold hover:underline">{BUSINESS_INFO.phone}</a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
