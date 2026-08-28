# Zeris Real Estate — Build Spec (Prototype v3)
**For: Antigravity / Gemini 3.7 Flash Medium**
**Source: Zeris Real Estate Design Blueprint, "Two Skylines" concept**
**Status: Concept prototype — verify business existence before this becomes a real client build**

**v3 changelog:** converted from single-page to a real multi-page site; added a curated set of functional modals/pop-ups; explicitly rejected the pop-up patterns that read as AI slop or low-trust dark patterns (see Section 8 — read this before adding any pop-up not already listed there).

---

## 0. What to build

A **multi-page** prototype site in **plain HTML/CSS/vanilla JS** — separate HTML files sharing one CSS file and one JS file, not a single scrolling page. No framework, no animation library. `IntersectionObserver` for scroll reveals, plain JS for hover/click interactions and modals. Respect `prefers-reduced-motion`.

Do not invent content. Where real content is unavailable (phone/email, testimonials, owner name, full listings inventory), use the placeholder treatment in Section 6 — never fabricate stats, reviews, or filler listings. This is a **demo build**, so photography may use good, genuinely relevant stock images (Section 6).

Business is active and posting on Instagram (@zeris.realestate) — the site should feel like it belongs to that same living, current brand.

---

## 1. Concept (the one idea everything traces back to)

**"Two Skylines."** Zeris serves two halves of the same client relationship: dense, fast city apartment markets (Versova, Lokhandwala, Bandra) and a slow, weekend hillside escape market (Lonavala). The site expresses this as **one continuous horizon line** — not two bolted-together services. It opens as a jagged city skyline and resolves, without a hard cut, into soft hill contours. City content moves at city speed (quick, tight reveals); Lonavala content moves at weekend speed (slow, wide, ambient). The visitor should *feel* the pace shift, not just read about it.

Test for every decision: would this still make sense for a generic single-neighbourhood Andheri/Bandra broker with no Lonavala presence? If yes, it's too generic — cut it.

---

## 2. Design tokens

Warm and light — dark, near-black backgrounds read as generic "AI-agency template" for a residential real-estate audience, not premium.

### Colour
```css
--cream:      #F7F2E9;  /* base background — warm ivory, not stark white */
--panel:      #EFE7D8;  /* section surfaces, alternating bands */
--panel-2:    #E4D9C4;  /* raised cards */
--charcoal:   #2B2620;  /* primary text; also the ONE dark background, used only for footer/contact band */
--stone:      #7A7264;  /* muted/secondary text */
--brass:      #B8935A;  /* primary accent — sampled from logo's gold ring */
--olive:      #5F6B4F;  /* secondary accent — Lonavala hillside green, used sparingly */
--ember:      #A9673A;  /* tertiary accent — hover states only */
--whatsapp:   #25D366;  /* RESERVED — only the WhatsApp affordance */
```

### Typography
| Role | Face | Notes |
|---|---|---|
| Display (headlines, page titles) | **Fraunces** (variable, serif) | Editorial, slightly handcrafted. Needs real size/weight on a light background — `clamp(2.5rem, 6vw, 5rem)` for page heroes. |
| Body | **Instrument Sans** | Clean humanist grotesk. |
| Data / UI labels (specs, listing codes, nav, filters) | **Fragment Mono** | Property specs, listing codes, filter labels. |

### Grid
- 12-column desktop grid, 1280px editorial container, gutters `clamp(20px, 5vw, 64px)`
- Alternate `--cream` / `--panel` band backgrounds section-to-section
- Mobile: single column, sticky WhatsApp bar, hamburger nav

---

## 3. Anti-slop rules (hard constraints)

Do **not** use:
- Dark/near-black full-page backgrounds
- Purple/blue gradients, glowing orbs, glassmorphism, neon
- A generic 3-icon feature grid for values
- Decorative 01/02/03 numbered markers (only real listing IDs like `VER·03`, `LON·01`)
- Generic, unrelated stock photography
- Fake stats, testimonials, awards, partner logos, customer counts
- Vague, "clever" nav labels a first-time visitor has to decode
- A static, motion-free page
- **Any pop-up not explicitly listed in Section 8** — see that section before adding one. Pop-ups are the single easiest way to make this feel like a template/slop site; default to *not* adding one unless it's on the approved list.

Do use:
- Warm light base + brass/olive accents
- Real, well-chosen stock photography (Section 6)
- The brand's line-language (skyline bars / contour lines) as a recurring graphic motif alongside photos
- Scroll-triggered reveals and hover micro-interactions throughout (Section 7)
- The curated modal system in Section 8, and nothing beyond it

---

## 4. Site structure (multi-page)

```
/                     index.html          Home — "Two Skylines" narrative, hero, featured listings, teaser sections
/listings.html        Listings            Full listing grid with Buy/Rent/Sell + area filter
/neighbourhoods.html  Neighbourhoods      Versova / Lokhandwala / Bandra / Lonavala, each with its own section
/services.html        Services            Full seven-item service range, explained (not just listed)
/about.html           About Us            "The Zeris Standard" — values, positioning
/contact.html         Contact             WhatsApp-first, Instagram link, service-area list
```

Shared across all pages: one `styles.css`, one `main.js`, identical header nav and footer.

**Nav** (identical on every page, current page indicated with a brass underline):
```
[Zeris logo]   Buy · Rent    Neighbourhoods    Listings    Services    About Us    Contact   [WhatsApp button]
```
- Nav labels are literal, not clever — this is a documented real-estate UX failure mode when menus get "branded" instead of descriptive.
- Logo (top-left) always links to `/`. No separate "Home" label needed.
- Fully visible nav on desktop; hamburger → slide-in panel on mobile (this slide-in panel is the one navigational "pop-up" on the site, and it's functional, not decorative).

---

## 5. Page-by-page content

### 5.1 Home (`index.html`)
- **Hero**: bold headline over the horizon-line SVG motif + one strong real hero photo (Mumbai skyline/apartment, golden hour), subtle 2–3% parallax drift on scroll. "View Listings" + WhatsApp buttons both visible without scrolling.
- **Neighbourhoods strip**: 4 cards (Versova, Lokhandwala, Bandra tagged "City"; Lonavala tagged "Escape"), each linking through to its section on `neighbourhoods.html`.
- **Featured listings**: the two verified listings as full editorial cards, linking to their detail modal (Section 8) — this is a *preview*, full listings live on `listings.html`.
- **"The Zeris Standard" teaser**: one paragraph + a "Read more" link to `about.html`.
- **Contact band** (see 5.6 — shared footer content, but Home gets the full-width version).

### 5.2 Listings (`listings.html`)
- Filter bar: Buy / Rent / Sell toggle + area dropdown (Versova, Lokhandwala, Bandra, Lonavala) — functional against the 2 demo listings, structured to obviously extend to real inventory later.
- Both verified listings shown as full cards. Clicking a card opens the **listing detail modal** (Section 8) — photo gallery, full specs, description, WhatsApp enquiry button.
- Do not pad with invented listings.

### 5.3 Neighbourhoods (`neighbourhoods.html`)
- Four sections, one per area (Versova, Lokhandwala, Bandra, Lonavala), each with photography, a short paragraph on what that area is like to live in/buy in, and a "View listings in [Area]" link back to the filtered listings page.

### 5.4 Services (`services.html`)
- The seven-item range, each with a short explanatory paragraph (not just a bare list this time, since it has its own page and room to breathe): Residential apartments, Commercial spaces, Plots, Row houses, Farmhouses, Industrial units, Agreements/registration/due diligence support, Property management, Market insights.

### 5.5 About Us (`about.html`)
- "The Zeris Standard" as a full page: the flowing typographic paragraph on Honesty/Integrity/Efficiency, the three labelled terms, plus the "one broker, two paces" story from Section 1.
- Owner/founder name: **omit** — unknown, do not invent.

### 5.6 Contact (`contact.html`)
- Uses the one dark `--charcoal` section on the site.
- WhatsApp-first CTA (points to the verified Instagram profile as a stand-in until a real WhatsApp number is confirmed), with a subtle looping pulse/glow (pauses on hover).
- Instagram link, explicitly noting it's active — flag that they're currently posting.
- Service-area list for clarity/SEO.

### Shared footer (every page)
Logo, repeated nav, service areas, Instagram + WhatsApp links, one line noting this is a concept prototype (small print, honest).

---

## 6. Content — verified vs. placeholder (do not deviate)

### Use as-is (verified, from source lead report)
- Business name: **Zeris Real Estate**
- Service areas: Versova, Lokhandwala, Linking Road (Bandra), Lonavala
- Buy · Sell · Rent
- Two current listings:
  1. **Duplex 3BHK — Versova**, 1,155 sq ft, For Sale — code `VER·03`
  2. **3BHK Bungalow — Tungarli, Lonavala**, ₹1.60 Cr — code `LON·01`
- Seven-item service range
- Positioning copy: "Honesty, Integrity, Efficiency"
- Instagram handle: **@zeris.realestate** — active, currently posting
- Website domain: **zerisrealestate.com**

### Marked as placeholder — do not invent
- **Phone/email**: unknown. WhatsApp CTAs point to the verified Instagram profile as a stand-in.
- **Owner/founder name**: unknown — do not reference anywhere.
- **Testimonials, review counts, awards, years in business, transaction counts**: none exist — omit entirely.
- **Full listings inventory**: only the two verified listings — do not pad.

### Photography — demo-only sourcing rules
- **City** (hero, Versova/Lokhandwala/Bandra, Versova listing): dense Indian/Mumbai apartment exteriors, skylines at golden hour, warm-lit interiors.
- **Lonavala/Escape** (Lonavala listing, hill-station imagery): green hillside, bungalow exteriors, monsoon/misty valley shots.
- Every image should read as plausible for that specific listing/area, not decorative filler. Mark each with `<!-- DEMO PLACEHOLDER — replace with real client photography -->`.

---

## 7. Motion system

| Interaction | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|
| Section/page reveal | Scroll into view | Fade + 18px rise | 700–800ms | `cubic-bezier(.16,1,.3,1)` |
| Card entrances | Scroll into view, staggered | Same, quicker, ~80ms stagger | ~600ms | Same |
| Listing/neighbourhood card hover | Hover | Lift 4px + soft shadow + photo scale 1.03x | 300ms | ease-out |
| Nav link (current page & hover) | Hover / active | Brass underline width 0→100% | 300ms | ease |
| Hero photo | Scroll | Slow parallax drift, 2–3% max | continuous | linear |
| Service row hover | Hover | Slight indent + brass left-border fade in | 250ms | ease |
| WhatsApp CTA | Hover | 1px lift + soft green glow | 250ms | ease |
| WhatsApp CTA (contact page) | On load, looping | Subtle pulse/glow, pauses on hover | 2–3s loop | ease-in-out |
| Modal open/close (Section 8) | Click / Esc / backdrop click | Fade + scale from 0.96→1 | 250ms | ease-out |

`prefers-reduced-motion: reduce` → disable all reveal/parallax/pulse/modal-scale animations; keep only instant color-change hover states, and modals still open/close but without the scale transition.

---

## 8. Pop-ups & modals — curated list (do not add beyond this)

Pop-ups are the fastest way to make a site feel like AI-generated slop or a pushy template. The rule for this build: **a modal is allowed only if it does something the page genuinely can't do inline** — never as decoration or "engagement."

### ✅ Include these (functional, expected, non-pushy)

1. **Listing detail modal** — clicking a listing card (Home preview or Listings page) opens a modal with: photo gallery (swipe/arrow through 3–5 stock images), full specs in Fragment Mono, short description, and a WhatsApp "Enquire about this property" button that pre-fills a message like *"Hi, I'm interested in [listing name], code [VER·03]."* Closes on Esc, backdrop click, or an explicit close button — never traps the user.
2. **Photo gallery lightbox** — clicking any photo (not just on listing cards) opens it full-screen with left/right arrows. Standard, expected, not intrusive.
3. **Mobile nav slide-in panel** — the hamburger menu's slide-in panel, functionally a modal. Already covered in Section 4.
4. **"Enquire" quick-contact modal** — a small modal triggered by a persistent "Enquire Now" button (not on page load, not on scroll/exit-intent) that shows a one-line form-free confirmation and hands off directly to WhatsApp with a pre-filled general enquiry message. No email/phone form — this business converts on WhatsApp, so don't build a form it doesn't need.

### ❌ Do not add (explicitly rejected — these are the slop patterns)

- Newsletter signup modal (on load, on scroll, or on exit-intent)
- "Get 10% off" / fake-urgency discount pop-ups — directly contradicts the "no fake scarcity" brand rule
- Exit-intent pop-ups of any kind
- A fake chat-bot bubble pretending to be a live agent (this business's real channel is WhatsApp — don't simulate a different one)
- Cookie-consent banners styled as marketing opportunities (a plain, minimal cookie notice is fine if included at all — no persuasive copy on it)
- Any modal that appears automatically without a direct click from the user
- Any modal that's hard to close (no visible X, no Esc support, backdrop click disabled)

If you (the builder) are tempted to add a pop-up not on the ✅ list because it "would boost engagement" — don't. That reasoning is exactly the pattern this section exists to block.

---

## 9. Functional features checklist

- Search/filter control on Listings page: Buy/Rent/Sell toggle + area dropdown
- Click-to-WhatsApp on every listing card and in the listing detail modal
- Sticky WhatsApp button on mobile, persistent across scroll, all pages
- Neighbourhood cards link to real content (their section on `neighbourhoods.html`, filtered to that area on `listings.html`)
- Fully visible nav on desktop; hamburger on mobile only
- Consistent footer on every page with service areas, nav, both contact channels
- Current-page indicator in nav (brass underline) so users always know where they are — a multi-page site needs this, a single scroller didn't

---

## 10. Tech notes

- Plain HTML/CSS/vanilla JS. One shared `styles.css`, one shared `main.js` across all pages.
- `IntersectionObserver` for scroll reveals; plain event listeners for hover, filters, and modal open/close.
- Modals: a single reusable modal component in JS (open/close/focus-trap/Esc-to-close), reused for listing detail and photo lightbox — don't hand-roll each one separately.
- No React/Framer Motion/GSAP/Three.js for this prototype.
- If this becomes a real build with a live filterable inventory, React/Next.js is a reasonable next step — not needed here.
- Mobile: single column, sticky WhatsApp bar, hamburger nav with slide-in panel.

---

## 11. Open items before this becomes a real client deliverable

1. **Confirm the business is currently active at this address/entity** — a Justdial listing for a similarly-named "Zeris Realty Services (Closed Down)" exists for a Versova entity; unconfirmed if related. The Instagram is confirmed active/posting, which is a good sign but doesn't fully resolve the directory-listing ambiguity.
2. Request the real logo file (SVG/PNG) and actual brand hex values.
3. Swap the demo's stock photography for real property/listing photography.
4. Confirm a real WhatsApp business number.

---

## 12. Prompt block (paste directly into Antigravity)

```
Build a multi-page prototype website for an active Mumbai real estate brokerage called "Zeris Real Estate" (confirmed active on Instagram @zeris.realestate) using plain HTML, CSS, and vanilla JavaScript only — no frameworks, no animation libraries. Build 6 separate HTML pages (index.html, listings.html, neighbourhoods.html, services.html, about.html, contact.html) sharing one styles.css and one main.js, with an identical header nav and footer on every page. Use IntersectionObserver for scroll reveals and plain JS for hover/click interactions and a reusable modal component.

Concept: "Two Skylines" — the brand serves two markets under one relationship: dense city apartments (Versova, Lokhandwala, Bandra) and slow weekend hillside homes (Lonavala). Express this as one continuous horizon-line SVG motif that opens as a jagged city skyline and resolves into soft hill contours. City content feels quick (600ms reveals, staggered cards); Lonavala content feels slow and spacious (800ms reveals, more negative space) — but every button, card, and nav link still needs a real hover state regardless of section pacing.

Use a WARM LIGHT palette, not a dark background:
- Colors: cream #F7F2E9 (base), panel #EFE7D8 (alternating bands), panel-2 #E4D9C4 (cards), charcoal #2B2620 (text; also background ONLY on the contact page's CTA band), stone #7A7264 (muted text), brass #B8935A (primary accent), olive #5F6B4F (secondary accent, sparing), ember #A9673A (hover only), whatsapp green #25D366 (reserved for WhatsApp CTAs only)
- Fonts: Fraunces (variable serif, bold/large for headlines) for headlines only, Instrument Sans for body, Fragment Mono for specs/listing codes/nav labels
- 12-column grid, 1280px container, gutters clamp(20px,5vw,64px), alternate cream/panel section backgrounds

Navigation (identical on every page, current page shown with a brass underline): logo (links home) — "Buy · Rent" — "Neighbourhoods" — "Listings" — "Services" — "About Us" — "Contact" — WhatsApp button. Literal labels only, no clever renaming. Visible nav on desktop, hamburger with a slide-in panel on mobile.

Pages:
- index.html: hero (headline + horizon-line SVG + real hero photo, subtle parallax, "View Listings" + WhatsApp CTAs), neighbourhoods strip (4 cards linking to neighbourhoods.html), featured listings preview (2 cards linking to the listing detail modal), "Zeris Standard" teaser linking to about.html, contact band.
- listings.html: Buy/Rent/Sell + area filter bar above the 2 verified listings (do not invent more) — Duplex 3BHK Versova 1,155 sqft for sale code VER·03 with a Mumbai apartment photo; 3BHK Bungalow Tungarli Lonavala ₹1.60 Cr code LON·01 with a green hillside/bungalow photo. Clicking a card opens the listing detail modal (photo gallery, full specs in Fragment Mono, description, WhatsApp enquiry button pre-filled with a message naming the listing).
- neighbourhoods.html: 4 sections (Versova, Lokhandwala, Bandra tagged "City"; Lonavala tagged "Escape"), each with photography, a short paragraph, and a link to that area's filtered listings.
- services.html: the 7-item service range (Residential, Commercial, Plots, Row houses, Farmhouses, Industrial units, Agreements/Due Diligence, Property Management, Market Insights), each with a short explanatory paragraph.
- about.html: "The Zeris Standard" full page — flowing paragraph on Honesty/Integrity/Efficiency, three labelled terms, the "one broker, two paces" story. No owner name (unknown, don't invent).
- contact.html: dark charcoal CTA band, WhatsApp-first with a subtle looping pulse (pauses on hover), Instagram link noting it's active, service-area list.

Modals — implement ONLY these, nothing else: (1) listing detail modal as described above, (2) a photo lightbox for any clicked image, (3) the mobile nav slide-in panel, (4) a persistent "Enquire Now" button that opens a small modal handing off directly to a pre-filled WhatsApp message — no email/phone form. All modals close on Esc, backdrop click, and a visible close button; fade+scale 250ms; none of them open automatically or on scroll/exit-intent.

Explicitly DO NOT add: newsletter signup modals, fake-discount/urgency pop-ups, exit-intent pop-ups, fake chat-bot bubbles, any modal that opens without a direct user click, or any modal that's hard to close.

Photography: real royalty-free stock photography (Unsplash/Pexels-style), genuinely relevant to each section — no generic Western real-estate stock, no unrelated filler. Mark each with an HTML comment noting it's a demo placeholder for real client photography.

Hard rules: no dark/near-black full-page backgrounds, no purple/blue gradients, glassmorphism, or glowing orbs, no decorative numbered markers, no testimonials/stats/awards/customer counts (none exist for this client), no vague nav labels, no static/motionless page — every card and button needs a real hover state. Respect prefers-reduced-motion by disabling reveal/parallax/pulse/modal-scale animations while keeping instant hover color changes.

Mobile: single column, sticky WhatsApp bar on every page, hamburger nav with slide-in panel.
```

---

*This document consolidates the full "Zeris Real Estate — Creative Direction & Design Blueprint" (27 Aug 2026) into a single build-ready reference, v3 revised to multi-page with a curated, non-slop modal system. Nothing here should be treated as final client-ready copy until the verification steps in Section 11 are resolved.*
