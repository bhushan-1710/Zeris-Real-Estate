/**
 * Areas We Serve Data
 * 
 * Spec notes:
 * - Includes Borivali, Kandivali, and Malad.
 * - Uses explicitly marked [PLACEHOLDER COPY — Raj to provide] blocks in Raj's first-person voice.
 */

export interface AreaInfo {
  slug: string;
  name: string;
  tagline: string;
  heroCopy: string;
  placeholderNotice: string;
  firstPersonNote: string;
  microMarkets: string[];
  keyStrengths: string[];
  commuteHighlights: {
    destination: string;
    duration: string;
    transit: string;
  }[];
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

export const areas: AreaInfo[] = [
  {
    slug: "borivali",
    name: "Borivali",
    tagline: "Quiet leafy avenues, established residential societies & national park serenity.",
    placeholderNotice: "[PLACEHOLDER COPY — Raj to provide specific childhood memories and 30-year neighborhood evolution perspectives]",
    heroCopy: "My family has lived and consulted in Borivali for over three decades. From Shimpoli to I.C. Colony and Vazira Naka, Borivali offers something increasingly rare in Mumbai: wide tree-lined roads, large-carpet family apartments, and a community atmosphere where neighbors know each other.",
    firstPersonNote: "When a family comes to me wanting peace of mind, strong community roots, and proximity to Sanjay Gandhi National Park, Borivali West is always my first conversation.",
    microMarkets: ["Borivali West (Shimpoli / Vazira)", "I.C. Colony & Holy Cross", "Gorai 1 & 2 Enclaves", "Borivali East (Kasturba / Magathane)"],
    keyStrengths: [
      "Predominance of large 3 & 4 BHK family societies",
      "Premier educational institutions & serene spiritual centers",
      "Terminal train origin guaranteeing seated morning commutes",
      "Direct western coastal road & metro access"
    ],
    commuteHighlights: [
      { destination: "BKC (Via Western Express Highway)", duration: "45 mins", transit: "Metro / Car" },
      { destination: "Nariman Point (Via Coastal Road)", duration: "55 mins", transit: "Coastal Road" },
      { destination: "International Airport (BOM)", duration: "35 mins", transit: "Metro Line 7" }
    ],
    mapCoordinates: { lat: 19.2307, lng: 72.8567 }
  },
  {
    slug: "kandivali",
    name: "Kandivali",
    tagline: "Modern gated high-rise developments, planned townships & thriving commercial nodes.",
    placeholderNotice: "[PLACEHOLDER COPY — Raj to provide first-hand insights on Thakur Village vs. Mahavir Nagar property dynamics]",
    heroCopy: "Kandivali is Mumbai's premier balanced suburb. On the East, Thakur Village and Thakur Complex represent self-contained, amenity-rich township living with podium gardens and clubhouses. On the West, Mahavir Nagar and M.G. Road offer vibrant retail, dining, and prime residential redevelopment towers.",
    firstPersonNote: "If you want modern tower amenities, zero-dead-space floor plans, and a 5-minute walk to top schools and healthcare, Kandivali East delivers unmatched value.",
    microMarkets: ["Thakur Village (East)", "Thakur Complex (East)", "Mahavir Nagar (West)", "Poisar & Dahanukarwadi"],
    keyStrengths: [
      "Modern gated high-rises with full podium clubhouses",
      "Dedicated Metro stations across both Link Road & WEH",
      "Self-contained micro-markets with all amenities in 10-min radius",
      "Strong rental yields and rapid capital appreciation"
    ],
    commuteHighlights: [
      { destination: "Andheri / MIDC", duration: "25 mins", transit: "Metro Line 7 / 2A" },
      { destination: "BKC Financial District", duration: "40 mins", transit: "Car / Metro" },
      { destination: "Mindspace Malad", duration: "12 mins", transit: "Link Road" }
    ],
    mapCoordinates: { lat: 19.2062, lng: 72.8532 }
  },
  {
    slug: "malad",
    name: "Malad",
    tagline: "Commercial energy, high-end residential enclaves & corporate proximity.",
    placeholderNotice: "[PLACEHOLDER COPY — Raj to provide specific commentary on Mindspace corridor expansion and luxury high-rise supply]",
    heroCopy: "Malad bridges the gap between commercial dynamism and luxury living. Home to the Mindspace IT and media hub, Malad West features sprawling modern towers, while Marve Road provides access to seaside open spaces.",
    firstPersonNote: "For professionals working in western corporate hubs who refuse to compromise on apartment scale and lifestyle amenities, Malad is the natural choice.",
    microMarkets: ["Mindspace & Link Road Corridor", "Chincholi Bunder", "Marve Road & Orlem", "Malad East (Dindoshi)"],
    keyStrengths: [
      "Proximity to premier shopping centers and corporate hubs",
      "Luxury towers with expansive balconies and clubhouses",
      "High liquidity in both leasing and resale markets",
      "Direct Metro Line 2A & 7 connectivity"
    ],
    commuteHighlights: [
      { destination: "Mindspace IT Hub", duration: "5 mins", transit: "Local" },
      { destination: "BKC", duration: "40 mins", transit: "Metro / WEH" },
      { destination: "Domestic Airport", duration: "30 mins", transit: "WEH" }
    ],
    mapCoordinates: { lat: 19.1874, lng: 72.8484 }
  }
];
