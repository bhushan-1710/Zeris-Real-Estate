/**
 * Site Configuration for Raj Soni Realty
 * All business-critical identifiers are config-driven and never fabricated.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  trustLine: string;
  reraNumber: string | null; // Keep null/empty until officially supplied by Raj
  whatsappNumber: string; // Wire to env variable or placeholder
  phoneNumber: string; // Display phone placeholder
  email: string | null; // Contact email placeholder
  contactFormEndpoint: string;
  serviceAreas: string[];
  featureFlags: {
    showClientStories: boolean; // Feature-flagged hidden until real reviews exist
    showExactPrices: boolean; // Config-driven: false defaults to "Enquire"
  };
  social: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Raj Soni Realty",
  shortName: "Raj Soni",
  tagline: "Second-generation Mumbai property consultant specializing in Borivali & Kandivali.",
  trustLine: "RERA registered · Second-generation Mumbai consultant · Borivali & Kandivali",
  // RERA number is strictly conditional and left empty until confirmed by Raj
  reraNumber: process.env.NEXT_PUBLIC_RERA_NUMBER || null,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919820000000",
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98200 00000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "/api/contact",
  serviceAreas: ["Borivali", "Kandivali", "Malad"],
  featureFlags: {
    showClientStories: false, // Strict spec rule: hidden until real reviews exist
    showExactPrices: false, // Strict spec rule: default to "Enquire"
  },
  social: {
    instagram: "https://instagram.com/rajsonirealty",
    youtube: "https://youtube.com/@rajsonirealty",
  },
};
