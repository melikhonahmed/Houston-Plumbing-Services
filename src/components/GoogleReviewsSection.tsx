import React, { useState, useMemo } from 'react';
import {
  customerNealImg,
  customerSarahImg,
  customerDavidImg,
  customerElenaImg,
} from '../assets/images';
import { BUSINESS_INFO } from '../data/content';
import {
  Star,
  ExternalLink,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Quote,
  Wrench,
  Check,
} from 'lucide-react';

interface GoogleReviewsSectionProps {
  onOpenQuoteModal?: (target?: string) => void;
}

interface CustomerReview {
  id: string;
  author: string;
  role: string;
  neighborhood: string;
  rating: number;
  date: string;
  serviceCategory: string;
  serviceName: string;
  image?: string;
  initials?: string;
  headline: string;
  quote: string;
  jobDetail: string;
  highlightMetric: string;
  outcomeTag: string;
  verifiedJob: boolean;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const reviews: CustomerReview[] = [
    {
      id: 'rev-sarah',
      author: 'Sarah Jenkins',
      role: 'Homeowner',
      neighborhood: 'Spring Branch, Houston',
      rating: 5,
      date: 'September 2024',
      serviceCategory: 'Under-Slab Tunneling',
      serviceName: 'Foundation Sewer Tunneling',
      image: customerSarahImg,
      headline: 'Saved our hardwood floors from an invasive jackhammer tear-out.',
      quote:
        'Other national franchises gave astronomical quotes and insisted on jackhammering straight through our living room hardwoods. Wayne and his crew tunneled 40 feet cleanly from the exterior foundation perimeter, replaced the cracked cast iron pipes, and left our interior completely untouched. Spotless cleanup and true trade integrity.',
      jobDetail: '40ft Exterior Tunneling · Video Inspected · 10-Yr Warranty',
      highlightMetric: 'Saved $4,200',
      outcomeTag: 'Zero Interior Damage',
      verifiedJob: true,
    },
    {
      id: 'rev-neal',
      author: 'Neal Alko',
      role: 'Homeowner',
      neighborhood: 'Memorial, Houston',
      rating: 5,
      date: 'October 2024',
      serviceCategory: 'Water Heaters',
      serviceName: 'Tankless Conversion',
      image: customerNealImg,
      headline: 'Flawless tankless conversion that beat our previous quote by 5%.',
      quote:
        'Wayne replaced our failing 50-gallon tank with a high-efficiency Navien tankless system. The entire process was completed in one afternoon with meticulous attention to gas venting and shutoff valves. Upfront written pricing was honest and beat a competing estimate by 5% with zero surprise add-ons.',
      jobDetail: 'Navien NPE-240A2 · Old Tank Hauled · Code Venting',
      highlightMetric: 'Beat Quote by 5%',
      outcomeTag: 'Same-Day Install',
      verifiedJob: true,
    },
    {
      id: 'rev-david',
      author: 'David Miller',
      role: 'Restaurant & Bar Owner',
      neighborhood: 'Katy, TX',
      rating: 5,
      date: 'September 2024',
      serviceCategory: 'Emergency',
      serviceName: 'Commercial Hydro-Jetting',
      image: customerDavidImg,
      headline: 'On-site in 38 minutes on a Sunday night at 11:15 PM.',
      quote:
        'A main sewer line backup in a commercial kitchen is an immediate shut-down risk. I called at 11:15 PM on a Sunday; their mobile warehouse truck was in our parking lot in under 40 minutes. They cleared the obstruction, scoped the line on a color monitor, and had our grease lines flowing before 1:00 AM.',
      jobDetail: 'Commercial Hydro-Jetting · Camera Verification · 38-Min Arrival',
      highlightMetric: '38 Min Arrival',
      outcomeTag: 'Zero Business Downtime',
      verifiedJob: true,
    },
    {
      id: 'rev-elena',
      author: 'Elena Rodriguez',
      role: 'Homeowner',
      neighborhood: 'The Heights, Houston',
      rating: 5,
      date: 'August 2024',
      serviceCategory: 'Repiping',
      serviceName: 'Whole-Home PEX-a Repipe',
      image: customerElenaImg,
      headline: 'Completed a 1960s bungalow repipe in two days flat.',
      quote:
        'Our older home suffered three pinhole leaks in galvanized pipes over two months. Wayne evaluated the system and laid out an Uponor PEX-a replacement plan. The team took exceptional care of our plaster walls, finished the job in two days, and restored strong, crystal-clear water pressure throughout the entire house.',
      jobDetail: 'Uponor PEX-a Expansion · Neoprene Floor Protection',
      highlightMetric: '2-Day Turnaround',
      outcomeTag: 'Lifetime Guarantee',
      verifiedJob: true,
    },
    {
      id: 'rev-marcus',
      author: 'Marcus Vance',
      role: 'Homeowner',
      neighborhood: 'Sugar Land, TX',
      rating: 5,
      date: 'July 2024',
      serviceCategory: 'Water Heaters',
      serviceName: 'Emergency Gas Water Heater',
      initials: 'MV',
      headline: 'Same-day gas water heater installation before a cold front.',
      quote:
        'Our water heater pilot failed and the tank began leaking. Called Houston Plumbing Services at 7:30 AM; by 1:00 PM we had a brand-new Bradford White unit installed, vented to city code, and running hot water. Clean workmanship, protective shoe covers, and spotless cleanup.',
      jobDetail: 'Bradford White 50-Gal · City Code Venting · Thermal Expansion',
      highlightMetric: 'Same-Day Install',
      outcomeTag: 'Code Compliant',
      verifiedJob: true,
    },
    {
      id: 'rev-robert',
      author: 'Robert & Linda Chen',
      role: 'Homeowners',
      neighborhood: 'West University, Houston',
      rating: 5,
      date: 'October 2024',
      serviceCategory: 'Under-Slab Tunneling',
      serviceName: 'Cast Iron Drain Line Replacement',
      initials: 'RC',
      headline: 'Clear video diagnostics, honest options, and zero pressure.',
      quote:
        'We suspected root intrusion under our foundation slab. Unlike other companies that immediately pushed an expensive whole-house rebuild, Wayne pushed an HD camera through our cleanout and showed us the exact joint fault on his high-definition monitor. Fair, honest, and high-quality repair.',
      jobDetail: 'HD Camera Inspection · Targeted Exterior Line Replacement',
      highlightMetric: 'Video Certified',
      outcomeTag: 'Targeted Repair',
      verifiedJob: true,
    },
  ];

  const categories = ['All', 'Under-Slab Tunneling', 'Water Heaters', 'Emergency', 'Repiping'];

  const filteredReviews = useMemo(() => {
    if (selectedCategory === 'All') return reviews;
    return reviews.filter((r) => r.serviceCategory === selectedCategory);
  }, [selectedCategory, reviews]);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Houston+Plumbing+Services+LLC+7807+Long+Point+Rd+Houston+TX';

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Aligned with Site Layout Architecture */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-3">
            {/* Red Eyebrow matching WHO WE ARE, OUR PROCESS, OUR WORK */}
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#D90429]">
              CUSTOMER REVIEWS & TESTIMONIALS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
              Trusted by 2,400+ Houston <br />
              <span className="text-slate-950">Homeowners & Businesses</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every review reflects real, code-compliant plumbing work directed under Texas Master Plumber License #40714. Upfront written quotes with zero surprise fees.
            </p>
          </div>

          {/* Official Clean Google Business Profile Credibility Widget */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs shrink-0 lg:max-w-md w-full sm:w-auto">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3.5">
                {/* Official Google 'G' Icon */}
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-slate-200 shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12c0 1.97.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-950 tracking-tight">5.0</span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">
                    210+ Verified Google Reviews
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0047BA] hover:text-[#00358a] bg-blue-50/80 hover:bg-blue-100/80 px-3.5 py-2 rounded-xl border border-blue-200/60 transition-colors shrink-0"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-slate-200 text-center text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Rating</span>
                <span className="font-extrabold text-slate-900">5.0 / 5.0</span>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-slate-500 block text-[11px]">Pricing</span>
                <span className="font-extrabold text-slate-900">100% Upfront</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Master Lic.</span>
                <span className="font-extrabold text-emerald-700">#40714</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Segmented Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? reviews.length
                  : reviews.filter((r) => r.serviceCategory === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Showing</span>
            <strong className="text-slate-900 font-bold">{filteredReviews.length} Verified Customer Reviews</strong>
          </div>
        </div>

        {/* Modern 3-Column Review Cards Grid Aligned with Layout Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Card Top: Google Review Pill + Service Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12c0 1.97.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span>Google Review</span>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0047BA] border border-blue-100">
                    {rev.serviceCategory}
                  </span>
                </div>

                {/* Star Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-2xs" strokeWidth={1.5} />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug group-hover:text-[#0047BA] transition-colors mb-3">
                  "{rev.headline}"
                </h3>

                {/* Detailed Testimonial Body */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {rev.quote}
                </p>

                {/* Project Scope & Highlight Box */}
                <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-100 mb-6 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#0047BA]" strokeWidth={1.8} />
                      <span>{rev.serviceName}</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {rev.highlightMetric}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-normal">
                    {rev.jobDetail}
                  </div>
                </div>
              </div>

              {/* Card Footer: Verified Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {rev.image ? (
                    <img
                      src={rev.image}
                      alt={rev.author}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-700 shrink-0">
                      {rev.initials || rev.author.slice(0, 2)}
                    </div>
                  )}

                  <div>
                    <div className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={1.8} />
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D90429] shrink-0" strokeWidth={1.8} />
                      <span>{rev.neighborhood}</span>
                    </div>
                  </div>
                </div>

                {onOpenQuoteModal && (
                  <button
                    onClick={() => onOpenQuoteModal(rev.serviceName)}
                    title={`Request quote for ${rev.serviceName}`}
                    className="p-2 rounded-xl text-slate-400 hover:text-[#0047BA] hover:bg-blue-50 transition-colors cursor-pointer group"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Assurance & Action Banner: Grounded, Professional, Matching App Layout */}
        <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-7 sm:p-9 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#D90429] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D90429]" strokeWidth={1.8} />
              <span>Texas Master Plumber Lic. #40714</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">5% Price Beat Guarantee</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-950">
              Ready for an Honest, Upfront Written Estimate?
            </h4>
            <p className="text-sm text-slate-600 max-w-xl">
              We match any licensed Houston contractor's written quote and beat it by 5%. No dispatch fees with repair, and zero unsupervised apprentices.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold flex items-center gap-2 transition-colors border border-slate-300 shadow-xs group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D90429] transition-transform group-hover:scale-110" strokeWidth={2} />
              <span>(713) 231-3309</span>
            </a>

            {onOpenQuoteModal && (
              <button
                onClick={() => onOpenQuoteModal('Customer Reviews Booking')}
                className="py-3 px-5 rounded-xl bg-[#D90429] hover:bg-[#b80323] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer uppercase tracking-wider group"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
            )}

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" strokeWidth={1.8} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
