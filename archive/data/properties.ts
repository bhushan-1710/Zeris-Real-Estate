/**
 * Properties Inventory Data
 * 
 * Spec notes:
 * - All sample entries are marked isPlaceholder: true.
 * - Price is config-driven (defaulting to "Enquire").
 * - Tags are phrased in Raj's authentic tone ("Large format · 2,400+ sq ft · Family homes").
 */

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  area: 'Borivali' | 'Kandivali' | 'Malad';
  subArea: string;
  formatTag: string; // e.g. "Large format · 2,400+ sq ft · Family homes"
  specs: {
    bhk: string;
    carpetArea: string;
    possession: string;
    floor: string;
    parking: string;
  };
  priceDisplay: string; // "Enquire" by default
  guidePrice?: string;
  featured: boolean;
  isPlaceholder: boolean;
  image: string; // AI generated or sample interior
  videoUrl?: string; // Facade video
  description: string[];
  keyHighlights: string[];
}

export const properties: Property[] = [
  {
    id: "bor-sample-01",
    slug: "sample-listing-borivali-west-duplex",
    title: "Sample Listing — Borivali West",
    tagline: "Large-format family duplex overlooking lush parkland canopy.",
    area: "Borivali",
    subArea: "Borivali West",
    formatTag: "Large format · 2,400+ sq ft · Established Gated Society",
    specs: {
      bhk: "4 BHK Duplex",
      carpetArea: "2,480 sq ft",
      possession: "Ready to Move",
      floor: "Higher Floor (18+)",
      parking: "3 Dedicated Covered",
    },
    priceDisplay: "Enquire",
    featured: true,
    isPlaceholder: true,
    image: "/images/property-1.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Facade placeholder
    description: [
      "A thoughtfully planned, double-height duplex designed for multi-generational families in Borivali West.",
      "Features separate service access, cross-ventilation catching the western sea breeze, and quiet residential neighborhood surroundings.",
      "Clear legal title with complete conveyance and active cooperative society management."
    ],
    keyHighlights: [
      "Direct western sun exposure and unobstructed green canopy views",
      "Expansive 32-ft living and formal dining span",
      "Two master suites with dedicated walk-in wardrobe zones",
      "Walking distance to premier ICSE schools and Jain Derasar"
    ]
  },
  {
    id: "kan-sample-02",
    slug: "sample-listing-kandivali-east-highrise",
    title: "Sample Listing — Kandivali East",
    tagline: "Modern high-rise residence in a premier gated complex off Western Express Highway.",
    area: "Kandivali",
    subArea: "Kandivali East (Thakur Village)",
    formatTag: "3 BHK · 1,350 sq ft · Premium High-Rise Tower",
    specs: {
      bhk: "3 BHK",
      carpetArea: "1,350 sq ft",
      possession: "Immediate",
      floor: "Mid Floor (12th)",
      parking: "2 Covered",
    },
    priceDisplay: "Enquire",
    featured: true,
    isPlaceholder: true,
    image: "/images/property-2.jpg",
    description: [
      "Sunlit 3-bedroom apartment inside one of Kandivali East's most respected developments.",
      "Efficient floor plate with zero corridor wastage, modern modular fittings, and serene views toward the national park hills.",
      "Complete clubhouse access, Olympic swimming pool, and gated round-the-clock security."
    ],
    keyHighlights: [
      "Zero dead space layout with dedicated utility balcony",
      "Seamless 5-minute connectivity to Western Express Highway & Metro Line 7",
      "East-West orientation ensuring continuous daylight",
      "Fully functional clubhouse and landscaped podium gardens"
    ]
  },
  {
    id: "bor-sample-03",
    slug: "sample-listing-borivali-penthouse",
    title: "Sample Listing — Borivali Shimpoli",
    tagline: "Exclusive penthouse with private terrace for outdoor evening entertaining.",
    area: "Borivali",
    subArea: "Borivali West (Shimpoli)",
    formatTag: "Penthouse · 3,100 sq ft · Private Open Terrace",
    specs: {
      bhk: "4.5 BHK Penthouse",
      carpetArea: "3,100 sq ft (incl. Terrace)",
      possession: "Ready to Move",
      floor: "Top Floor (Private Key Access)",
      parking: "3 Stilt Covered",
    },
    priceDisplay: "Enquire",
    featured: true,
    isPlaceholder: true,
    image: "/images/property-3.jpg",
    description: [
      "One of the few authentic private terrace penthouses available in the quiet lanes of Shimpoli, Borivali West.",
      "Designed for privacy and quiet luxury, featuring open-to-sky terrace space with custom pergolas, outdoor seating, and panoramic sunset views.",
      "Direct private elevator access to the foyer level."
    ],
    keyHighlights: [
      "950 sq ft private wrap-around terrace with plumbing and weatherproof deck",
      "Custom Italian marble flooring in all formal entertaining zones",
      "Independent staff quarters with private washroom",
      "Single apartment per floor building profile"
    ]
  },
  {
    id: "mal-sample-04",
    slug: "sample-listing-malad-west-luxury",
    title: "Sample Listing — Malad West",
    tagline: "Spacious corner apartment with wraparound balcony in prime Chincholi Bunder.",
    area: "Malad",
    subArea: "Malad West (Link Road)",
    formatTag: "3 BHK · 1,480 sq ft · Landmark Residential Complex",
    specs: {
      bhk: "3 BHK Luxury",
      carpetArea: "1,480 sq ft",
      possession: "Immediate",
      floor: "Higher Floor (22nd)",
      parking: "2 Covered Podium",
    },
    priceDisplay: "Enquire",
    featured: false,
    isPlaceholder: true,
    image: "/images/property-4.jpg",
    description: [
      "Spacious 3BHK residence strategically located near Link Road, Malad West with effortless access to Mindspace and infinity mall corridors.",
      "Designed with floor-to-ceiling sound-insulated glass and wide balconies overlooking the city skyline."
    ],
    keyHighlights: [
      "Large wraparound balcony with sunset views",
      "Modern gymnasium, temperature-controlled swimming pool, and squash court",
      "Direct connectivity to New Link Road and upcoming coastal connectors"
    ]
  }
];
