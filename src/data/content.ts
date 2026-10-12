export interface Coupon {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  badge?: string;
  expiration: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  ctaLabel: string;
  iconName: string;
  image?: string;
}

export interface SpecialistFeature {
  id: string;
  title: string;
  tagline: string;
  checkpoints: string[];
  ctaLabel: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
  image: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Houston Plumbing Services, LLC",
  phone: "(713) 231-3309",
  phoneRaw: "7132313309",
  address: "7807 Long Point Rd #330, Houston, TX 77055",
  license: "License # 40714",
  licenseStatus: "Fully Licensed & Insured (Bonded)",
  hours: "Open 24 Hours, 7 Days a Week",
  rating: "5.00",
  totalReviews: 210,
  priceMatchNote: "*** We Price Match + Go Lower by 5% ***",
  guaranteeText: "ALL PLUMBING SERVICES - 100% QUALITY GUARANTEE",
  serviceAreas: [
    "Houston",
    "Spring Branch",
    "Memorial",
    "Katy",
    "Sugar Land",
    "Pearland",
    "The Woodlands",
    "Cypress"
  ]
};

export const COUPONS: Coupon[] = [
  {
    id: "tankless",
    code: "TANKLESS-400",
    title: "$400 Off Tankless Water Heater",
    subtitle: "Call To Redeem This Offer",
    expiration: "04/15/2026",
    highlight: "$400 OFF"
  },
  {
    id: "tank",
    code: "TANK-200",
    title: "$200 Off Tank Water Heater",
    subtitle: "Call To Redeem This Offer",
    expiration: "04/15/2026",
    highlight: "$200 OFF"
  },
  {
    id: "repipe",
    code: "FREE-HEATER-REPIPE",
    title: "Free Water Heater with Whole Home Repipes",
    subtitle: "Call To Redeem Offer",
    expiration: "04/15/2026",
    highlight: "FREE UNIT"
  },
  {
    id: "pricematch",
    code: "PRICE-MATCH-5",
    title: "We Price Match + Go Lower by 5%",
    subtitle: "Call To Redeem Offer",
    expiration: "Guaranteed",
    highlight: "MATCH + 5%"
  }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Plumbing",
    shortDesc: "Complete home plumbing repairs, fixture installations, leak detection, and diagnostics.",
    fullDesc: "We handle all residential plumbing needs, from leak detection and repair to faucet and fixture replacements. Our services include toilet repairs, garbage disposal work, and addressing low water pressure. We also specialize in whole-home re-piping and water heater replacement.",
    bullets: [
      "Precision leak detection & slab leak diagnosis",
      "Faucet, sink, and toilet repair or installation",
      "Garbage disposal repair & replacement",
      "Low water pressure investigation & remediation",
      "Whole-home repiping and water heater upgrades"
    ],
    ctaLabel: "Residential Plumbing",
    iconName: "Home"
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    shortDesc: "Dependable plumbing for restaurants, offices, retail facilities, and multi-unit buildings.",
    fullDesc: "We offer reliable commercial plumbing services for businesses, including restaurant restroom plumbing and commercial water heater solutions. Our team provides ongoing maintenance, handles grease line issues, and upgrades properties to meet code requirements.",
    bullets: [
      "Commercial water heaters & boiler maintenance",
      "Restaurant grease trap & drain line maintenance",
      "Restroom plumbing & high-traffic fixtures",
      "Emergency repairs with zero commercial downtime",
      "Strict compliance with Houston municipal code"
    ],
    ctaLabel: "Commercial Plumbing",
    iconName: "Building2"
  },
  {
    id: "water-heaters",
    title: "Water Heaters",
    shortDesc: "Gas, electric, and high-efficiency tankless water heaters installed and serviced to code.",
    fullDesc: "Don't settle for lukewarm showers again. We install and service both gas and electric water heaters, including high-efficiency tankless systems. We correctly size and install units to manufacturer and code standards.",
    bullets: [
      "Tankless continuous hot water systems (Navien, Rinnai)",
      "Traditional gas & electric tank replacements",
      "Proper expansion tank & code ventilation installation",
      "Element, thermostat, and anode rod servicing",
      "Same-day emergency water heater replacement"
    ],
    ctaLabel: "Water Heaters",
    iconName: "Flame"
  },
  {
    id: "drain-sewer",
    title: "Drain & Sewer Line Services",
    shortDesc: "High-pressure hydro jetting, HD camera line inspections, and sewer repair.",
    fullDesc: "For slow or clogged drains, we provide professional drain cleaning, hydro jetting, and camera inspections. We also perform sewer line repairs for homes and businesses. From small clogs to major breaks, we find the cause and fix it right.",
    bullets: [
      "High-definition video sewer camera inspections",
      "Heavy-duty hydro jetting for grease and root blockages",
      "Main sewer line trenchless repair and replacement",
      "Shower, sink, and floor drain snaking",
      "Permanent root intrusion remediation"
    ],
    ctaLabel: "Drain & Sewer Services",
    iconName: "Wrench"
  },
  {
    id: "repipe",
    title: "Repiping Services",
    shortDesc: "Long-term replacement of corroded, galvanized, or failing piping with modern PEX and copper.",
    fullDesc: "For homes or buildings with aging, leaking, or low-pressure pipes, we provide professional repiping services. We replace failing water lines with modern, durable materials to prevent recurring leaks and water damage. From partial pipe replacement to full repipes, we fix the problem at the source for long-term reliability.",
    bullets: [
      "Full home copper and Uponor PEX-A repiping",
      "Elimination of pinhole leaks and discolored water",
      "Immediate restoration of balanced water pressure",
      "Minimal drywall disruption with professional patching",
      "Lifetime material warranties on qualifying installs"
    ],
    ctaLabel: "Repiping Services",
    iconName: "ShieldCheck"
  }
];

export const SEWER_SLAB_SPECIALISTS: SpecialistFeature[] = [
  {
    id: "camera",
    title: "CAMERA INSPECTIONS",
    tagline: "Stop guessing. Our HD cameras travel deep into your lines to find the root cause.",
    checkpoints: [
      "Visual proof before you pay",
      "Pinpoint accuracy (no digging)",
      "Detailed digital reports"
    ],
    ctaLabel: "BOOK INSPECTION",
    iconName: "Video"
  },
  {
    id: "tunneling",
    title: "UNDER-SLAB TUNNELING",
    tagline: "Protect your interior. We tunnel under your foundation to replace lines without damage.",
    checkpoints: [
      "Zero damage to exterior/floors",
      "Licensed, code compliant",
      "Clean, professional execution"
    ],
    ctaLabel: "GET SECOND OPINION",
    iconName: "Construction"
  },
  {
    id: "mainline",
    title: "MAIN LINE REPLACEMENT",
    tagline: "Full system upgrades and trenching for residential and commercial sewer lines.",
    checkpoints: [
      "Cast iron to PVC upgrades",
      "Durable for Houston's soil",
      "Full site cleanup included"
    ],
    ctaLabel: "FREE QUOTE",
    iconName: "Layers"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "1. GET A QUOTE",
    description: "It's the quickest and easiest way to obtain pricing for plumbing repairs, water heaters, and drain services. Prefer to talk it through first? Our friendly staff is happy to provide a brief phone consultation and help schedule an on-site evaluation. Financing available.",
    highlight: "Free Estimates · Phone Consultation · Financing Available",
    image: "/src/assets/images/hero_plumbing_van_1791640863675.jpg"
  },
  {
    step: 2,
    title: "2. SCHEDULE A VISIT",
    description: "Choose a time for us to do the job that fits your schedule. We make it simpler than ever to set up a plumbing appointment. Just contact us and tell us when to come out, and we will be there on time every single visit - whether you live in Houston, Katy, Sugar Land, Pearland, or The Woodlands.",
    highlight: "On-Time Arrival · Flexible Windows · Greater Houston Coverage",
    image: "/src/assets/images/plumbing_drain_camera_1791640907896.jpg"
  },
  {
    step: 3,
    title: "3. SIT BACK & RELAX",
    description: "When you hire our plumbing services, you can rely on working with fully insured, expert trained, and licensed professionals. We protect your floors and clean up after ourselves before we leave your house. We keep you informed every step of the way and never surprise you. Now you can sit back, relax, and let us take care of everything for you.",
    highlight: "Floor Protection · Clean Workspace · No Surprises Guaranteed",
    image: "/src/assets/images/homeowner_relaxing_1791640920780.jpg"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "service",
    title: "EXCELLENT SERVICE",
    description: "At Houston Plumbing Services, we believe customer satisfaction comes first. That's why we work to provide you with a knowledgeable, courteous, and professional experience from start to finish. We communicate clearly throughout the process and make sure the work we do is done right the first time.",
    iconName: "ThumbsUp"
  },
  {
    id: "pricing",
    title: "Upfront & Affordable Pricing",
    description: "Unlike many other plumbing companies, we do not surprise our customers with extra costs after the fact. We provide a written estimate that includes the price of parts and labor before any work begins.",
    iconName: "DollarSign"
  },
  {
    id: "emergency",
    title: "Emergency Plumbing Services Available 24 Hours A Day",
    description: "If you're dealing with an urgent problem such as a broken pipe, major leak, or sewage backup, it won't wait until morning. That's why we offer 24-hour emergency services and come to your assistance whenever you need us most.",
    iconName: "Clock"
  },
  {
    id: "reviewed",
    title: "Reliable, Strongly Reviewed Plumbing Company",
    description: "With many positive reviews from satisfied customers across the Greater Houston area, you can rest assured you've made the right decision hiring Houston Plumbing Services. We arrive when we say we will, complete the work we promised, and stand behind our work.",
    iconName: "Award"
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Fully Licensed & Insured",
    uncertified: false,
    established: true,
    houstonPlumbing: true,
    detail: "State of Texas Responsible Master Plumber License # 40714 with comprehensive general liability."
  },
  {
    feature: "Transparency & Upfront Pricing",
    uncertified: false,
    established: false,
    houstonPlumbing: true,
    detail: "Upfront written quotes with zero hidden trip surcharges or surprise add-ons."
  },
  {
    feature: "Emergency Availability 24/7",
    uncertified: false,
    established: true,
    houstonPlumbing: true,
    detail: "Live dispatchers around the clock, holidays, and weekends for urgent leak control."
  },
  {
    feature: "Family-Owned & Houston-Focused",
    uncertified: false,
    established: false,
    houstonPlumbing: true,
    detail: "Local ownership treating your home like our own, not a nationwide private equity franchise."
  }
];

export const REVIEWS_AI_SUMMARY = [
  "Professional, courteous technicians with deep expertise.",
  "Clear communication and transparent, competitive pricing.",
  "Fast response times and efficient, high-quality workmanship.",
  "Dependable for both routine repairs and major replacements, including water heaters and sewer connections.",
  "High demand can limit scheduling availability during peak periods."
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Matt",
    rating: 5,
    date: "Nov 12, 2025",
    text: "Efficient work by Leonard and team. Arrived on time, diagnosed the issue quickly, and had our plumbing back up and running with zero mess.",
    service: "Emergency Drain Service"
  },
  {
    id: "r2",
    author: "Neal Alko",
    rating: 5,
    date: "Nov 12, 2025",
    text: "Leonard and his team did an excellent job replacing my water heater. The entire process was smooth, efficient, and handled with great care at every step. Pricing was honest and transparent.",
    service: "Tankless Water Heater Replacement"
  },
  {
    id: "r3",
    author: "michael g",
    rating: 5,
    date: "Oct 28, 2025",
    text: "These guys are the best. Very reasonable prices and fast response. No need to say more than that.",
    service: "Pipe Repair & Inspection"
  },
  {
    id: "r4",
    author: "Sarah Jenkins (Spring Branch)",
    rating: 5,
    date: "Oct 19, 2025",
    text: "Saved us from a major under-slab nightmare. Other quotes were astronomical and wanted to rip up our hardwood floors. Houston Plumbing Services tunneled cleanly from the outside and did exceptional work.",
    service: "Under-Slab Tunneling"
  },
  {
    id: "r5",
    author: "David M. (Katy)",
    rating: 5,
    date: "Sep 30, 2025",
    text: "Called at 11 PM on a Sunday with a burst valve. They were here within 45 minutes and fixed it completely. Highly recommended!",
    service: "24/7 Emergency Plumbing"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do plumbers charge for estimates?",
    answer: "At Houston Plumbing Services, LLC, we offer free estimates with no obligation for all standard repairs, water heater replacements, repiping, and sewer jobs. We provide a clear, upfront written proposal detailing parts and labor before any work commences so you never face surprise charges."
  },
  {
    question: "Will you fix my low water pressure and leaking fixtures?",
    answer: "Yes, absolutely. Our licensed technicians carry diagnostic equipment to pinpoint the exact source of low pressure—whether caused by municipal pressure regulator failures, mineral build-up in galvanized lines, or hidden pinhole leaks. We also repair and replace all brands of kitchen, bath, and utility fixtures."
  },
  {
    question: "How do I find a good plumber in Houston?",
    answer: "Always verify licensing with the Texas State Board of Plumbing Examiners (our license is # 40714), ensure the company carries comprehensive general liability insurance, look for BBB A+ accreditation, and check genuine customer reviews. Houston Plumbing Services is family-owned, locally focused, and backed by hundreds of 5-star Google reviews."
  },
  {
    question: "Do you install and service water heaters and tankless systems?",
    answer: "Yes. We install and service all major gas and electric water heaters, including high-efficiency tankless units (such as Navien, Rinnai, and Rheem). We provide proper sizing calculations, code-compliant gas and venting connections, thermal expansion tanks, and offer limited-time specials ($400 off tankless systems)."
  },
  {
    question: "When should I replace my water heater or old pipes?",
    answer: "Standard tank water heaters typically last 8 to 12 years. If you notice rusty water, rumbling sounds, moisture around the base, or inconsistent temperature, it is time for a replacement. For homes built before 1990 with galvanized iron pipes or polybutylene, repiping with modern PEX or copper prevents catastrophic ceiling and floor water damage."
  },
  {
    question: "Do you offer 24-hour emergency plumbing service?",
    answer: "Yes! Plumbing emergencies like burst pipes, slab leaks, and severe sewer backups cannot wait until normal business hours. Our emergency response team is staffed 24 hours a day, 7 days a week, 365 days a year across Greater Houston. Call (713) 231-3309 immediately."
  },
  {
    question: "My drains keep clogging; do I need a camera inspection?",
    answer: "If plunging or basic snaking only provides temporary relief, recurring clogs usually indicate tree root intrusion, bellied pipes, cracked clay tile, or heavy grease buildup in your main sewer line. Our high-definition video camera inspection enters the pipe directly, providing visual proof on a digital monitor before recommending hydro jetting or repair."
  },
  {
    question: "Can you replace sewer lines without breaking my living room floor?",
    answer: "Yes. As specialized Under-Slab Tunneling experts, we dig access points from the exterior perimeter of your home and tunnel safely beneath the foundation beam. This allows us to replace broken drain and sewer lines while preserving your interior flooring, tile, and carpets completely untouched."
  }
];
