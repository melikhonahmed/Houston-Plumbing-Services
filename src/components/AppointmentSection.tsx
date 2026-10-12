import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import {
  PhoneCall,
  Clock3,
  BadgeCheck,
  ShieldCheck,
  Send,
  Zap,
  MapPin,
  Calendar,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { heroVanImg } from '../assets/images';

export const AppointmentSection: React.FC = () => {
  const [urgency, setUrgency] = useState<'emergency' | 'sameday' | 'scheduled'>('emergency');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Emergency Leak & Pipe Repair');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0A1120] text-white overflow-hidden border-t border-b border-slate-800">
      
      {/* Background Graphic with Modern Architectural Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroVanImg}
          alt="Houston Master Plumber Vehicle Fleet"
          className="w-full h-full object-cover object-center opacity-15 filter grayscale contrast-125 transition-transform duration-1000 scale-100"
        />
        {/* Crisp Architectural Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1120] via-[#0A1120]/90 to-[#0A1120]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25"></div>
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0047BA]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#D90429]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D90429]/15 border border-[#D90429]/30 text-[#FF4D6D] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D90429] animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-[#D90429] -ml-4"></span>
            24/7 Priority Emergency Dispatch
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
            Book Master Plumbing <br />
            <span className="text-white">Service in Minutes</span>
          </h2>
          
          <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fast emergency response across Greater Houston. Licensed Texas Master Plumber #{BUSINESS_INFO.license.replace('License # ', '')} with upfront flat-rate quotes and zero after-hours overtime surprises.
          </p>
        </div>

        {/* 2-Column Split: Dispatcher Hub & Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 24/7 Dispatcher Hub & Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Phone Call Card */}
            <div className="p-1 rounded-2xl bg-gradient-to-r from-red-600/40 via-blue-600/30 to-red-600/40 shadow-2xl">
              <div className="bg-[#0F1B2E] rounded-[14px] p-6 sm:p-7 border border-white/10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Houston Dispatchers Active Now
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">
                    Avg. Response &lt; 60 Sec
                  </span>
                </div>

                <div className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  Got a sudden burst pipe, backed-up drain, or water heater failure? Don’t let water damage spread. Call our direct dispatch desk now for immediate priority scheduling.
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#D90429] to-[#B30020] hover:from-[#c20325] hover:to-[#9e001c] text-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white shrink-0 border border-white/20 shadow-inner group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-5.5 h-5.5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-red-100 uppercase tracking-wider">
                        24/7 Master Plumber Hotline
                      </div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight">
                        {BUSINESS_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-black bg-white text-[#D90429] px-4 py-2 rounded-lg uppercase tracking-wider group-hover:scale-105 transition-transform">
                    <span>Call Now</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </a>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0F1B2E]/70 border border-slate-800 rounded-xl p-4.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock3 className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <div className="font-bold text-sm text-white">45–60 Min Arrival</div>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Mobile service units stationed across Houston for rapid on-site arrivals.
                </div>
              </div>

              <div className="bg-[#0F1B2E]/70 border border-slate-800 rounded-xl p-4.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <BadgeCheck className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <div className="font-bold text-sm text-white">Licensed & Bonded</div>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Texas Master Plumber {BUSINESS_INFO.license} with complete liability coverage.
                </div>
              </div>

              <div className="bg-[#0F1B2E]/70 border border-slate-800 rounded-xl p-4.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <Zap className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <div className="font-bold text-sm text-white">Price Match -5%</div>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Bring any licensed competitor quote and we will beat it by 5% guaranteed.
                </div>
              </div>

              <div className="bg-[#0F1B2E]/70 border border-slate-800 rounded-xl p-4.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <ShieldCheck className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <div className="font-bold text-sm text-white">100% Guaranteed</div>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Fully warrantied parts and labor with zero hidden overtime charges.
                </div>
              </div>
            </div>

            {/* Service Areas Badge Bar */}
            <div className="bg-[#0F1B2E]/40 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-400 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#EF233C] shrink-0" strokeWidth={1.8} />
              <span>
                <strong className="text-slate-200">Dispatched To:</strong> Houston, Katy, Sugar Land, Spring Branch, Memorial, The Woodlands, Pearland & Cypress.
              </span>
            </div>

          </div>

          {/* Right Column: Clean, High-Contrast Modern Booking Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-9 text-slate-900 shadow-2xl border border-slate-100 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Schedule Service Online
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Fast response · Upfront pricing · Free phone consult
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No Obligation</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <BadgeCheck className="w-9 h-9" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-950">
                      Request Confirmed, {name}!
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-2 leading-relaxed">
                      Our Houston dispatcher has received your <strong>{urgency.toUpperCase()}</strong> request. We will call you directly at <strong>{phone}</strong> within minutes.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="text-xs font-black text-[#0047BA] hover:underline cursor-pointer"
                    >
                      ← Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Urgency Pill Selector */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Select Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setUrgency('emergency')}
                        className={`py-2.5 px-2 rounded-lg text-xs font-black text-center transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                          urgency === 'emergency'
                            ? 'bg-[#D90429] text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                          Emergency
                        </span>
                        <span className="text-[10px] font-normal opacity-90">Under 60 Min</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setUrgency('sameday')}
                        className={`py-2.5 px-2 rounded-lg text-xs font-black text-center transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                          urgency === 'sameday'
                            ? 'bg-[#0047BA] text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" strokeWidth={2} />
                          Same-Day
                        </span>
                        <span className="text-[10px] font-normal opacity-90">Today</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setUrgency('scheduled')}
                        className={`py-2.5 px-2 rounded-lg text-xs font-black text-center transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                          urgency === 'scheduled'
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                          Estimate
                        </span>
                        <span className="text-[10px] font-normal opacity-90">Free Quote</span>
                      </button>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Miller"
                        className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(713) 555-0199"
                        className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA] text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Email & Service Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA] text-slate-900 cursor-pointer"
                      >
                        <option value="Emergency Leak & Pipe Repair">Emergency Leak & Pipe Repair</option>
                        <option value="Under-Slab Tunneling & Foundation">Under-Slab Tunneling & Foundation</option>
                        <option value="Water Heater Repair & Replacement">Water Heater Repair & Replacement</option>
                        <option value="Drain Cleaning & Hydro-Jetting">Drain Cleaning & Hydro-Jetting</option>
                        <option value="Whole Home Repiping">Whole Home Repiping</option>
                        <option value="Commercial Plumbing Services">Commercial Plumbing Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Brief Description of Plumbing Issue
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Water leak under bathroom sink, water heater leaking at base..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0047BA] text-slate-900 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D90429] hover:bg-[#b80323] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-600/25 flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <span>Dispatching Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>
                          {urgency === 'emergency'
                            ? 'Request Immediate Emergency Dispatch'
                            : 'Submit Booking & Estimate Request'}
                        </span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-500 text-center">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      5% Price Match Guarantee
                    </span>
                    <span>·</span>
                    <span>No Obligation Phone Estimate</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
