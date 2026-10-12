/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { TrustBar } from './components/TrustBar';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ProcessSection } from './components/ProcessSection';
import { BenefitsSection } from './components/BenefitsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { WorkGallerySection } from './components/WorkGallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { SpecialsSection } from './components/SpecialsSection';
import { CtaBanner } from './components/CtaBanner';
import { FooterSection } from './components/FooterSection';
import { QuoteModal } from './components/QuoteModal';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState<string | undefined>(undefined);

  const handleOpenModal = (target?: string) => {
    setModalTarget(target);
    setModalOpen(true);
  };

  const handleScrollToService = (serviceId: string) => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0047BA] selection:text-white flex flex-col font-sans antialiased">
      
      {/* 1. Header (Utility Bar + Main Navigation + Call Pill) */}
      <TopBar onOpenQuoteModal={handleOpenModal} />

      {/* Main Page Flow Matching Reference Mockup */}
      <main className="flex-1 pb-20 md:pb-0">
        {/* 2. Hero Section: Dark Hero with Under-Sink Plumber + Floating 60-Sec Booking Card */}
        <HeroSection onOpenQuoteModal={handleOpenModal} />

        {/* 3. WHO WE ARE: 2 Plumbers Image on Left, Tabs on Right, 2x2 Checkmarks */}
        <StorySection onOpenQuoteModal={() => handleOpenModal('General Inquiry')} />

        {/* 4. KEY METRICS: 4 Large Number Counters (19+, 100%, #40714, 24/7) */}
        <TrustBar onSelectCategory={handleScrollToService} />

        {/* 5. OUR SERVICE: Vertical Selector on Left, Large Photo Showcase with Overlay on Right */}
        <ServicesShowcase onOpenQuoteModal={handleOpenModal} />

        {/* 6. OUR PROCESS: 3 Numbered Milestone Cards on Left, Title + Button on Right */}
        <ProcessSection onOpenQuoteModal={() => handleOpenModal('Service Booking')} />

        {/* 7. WHY CHOOSE US: Master Plumber Credentials, 4 Architectural Pillars & Comparison Matrix */}
        <BenefitsSection onOpenQuoteModal={handleOpenModal} />

        {/* 8. TESTIMONIAL: Modern Google Verified Customer Review Hub */}
        <GoogleReviewsSection onOpenQuoteModal={handleOpenModal} />

        {/* 9. OUR WORK: Mosaic Photo Gallery with Featured Large Card & 4-Grid Images */}
        <WorkGallerySection />

        {/* 10. CONTACT US: Dark Background, 24/7 Details on Left, Clean White Booking Form on Right */}
        <AppointmentSection />

        {/* 11. UPDATES & SPECIALS: 3 Featured Voucher Cards with Photos & Expirations + Price Match */}
        <SpecialsSection onOpenQuoteModal={handleOpenModal} />

        {/* 12. 24/7 Emergency CTA Bar with Direct Dial Button */}
        <CtaBanner onOpenQuoteModal={() => handleOpenModal('Emergency Service')} />
      </main>

      {/* 13. Clean 4-Column Footer (Logo, Quick Links, Service Areas, Contact) */}
      <FooterSection onOpenQuoteModal={handleOpenModal} />

      {/* Interactive Modal Syncing with Any Selected Service / Coupon */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceOrCoupon={modalTarget}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0E1624] p-2.5 px-4 border-t border-slate-800 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 bg-[#D90429] hover:bg-[#b80323] text-white text-xs font-black rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-98 uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call: (713) 231-3309</span>
        </a>

        <button
          onClick={() => handleOpenModal()}
          className="flex-1 py-3 px-3 bg-[#0047BA] hover:bg-[#003899] text-white text-xs font-black rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-98 uppercase tracking-wider cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Get Free Quote</span>
        </button>
      </div>

    </div>
  );
}
