/**
 * Zeris Real Estate — JavaScript Interaction & Motion Controller (Build Spec v3)
 * Concept: "Two Skylines" (Mumbai & Lonavala)
 * Framework-free, IntersectionObserver scroll reveals, curated modal system.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Verified Property Inventory Data (Live Zeris Inventory)
     ========================================================================== */
  const PROPERTY_INVENTORY = {
    'AZD-01': {
      code: 'AZD·01',
      title: 'Spacious 2 BHK + Terrace',
      location: 'Azad Nagar, Andheri West, Mumbai',
      market: 'city',
      type: 'buy',
      price: '₹3.50 Cr',
      specs: {
        configuration: '2 Bed · 2 Bath · Open Terrace',
        terraceArea: 'Private Open Sky Terrace',
        floor: 'Higher Level (Open Air Proportions)',
        furnishing: 'Semi-Furnished',
        possession: 'Ready to Move',
        parking: '1 Dedicated Reserved'
      },
      tag: 'City · Private Terrace',
      description: 'A distinct 2 BHK residence in Azad Nagar featuring a private attached open-to-sky terrace. Ideal for indoor-outdoor entertaining, ample cross-ventilation, and situated minutes from metro connectivity, shopping, and dining avenues.',
      images: [
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm interested in the 2 BHK + Terrace in Azad Nagar (₹3.50 Cr, Code: AZD·01). Please share full details and viewing slots."
    },
    'YAR-01': {
      code: 'YAR·01',
      title: 'Fully Furnished 2 BHK for Rent',
      location: 'Yari Road, Versova, Mumbai',
      market: 'city',
      type: 'rent',
      price: '₹50,000 / mo',
      specs: {
        configuration: '2 Bed · 2 Bath',
        furnishing: '100% Fully Furnished Turnkey',
        floor: 'Mid Level',
        possession: 'Immediate Move-in',
        community: 'Quiet Residential Enclave',
        parking: 'Society Open Parking'
      },
      tag: 'Rent · Turnkey Furnished',
      description: 'Tastefully furnished 2 BHK situated along the peaceful residential stretch of Yari Road. Complete with custom woodwork, split air conditioning, equipped modular kitchen, and easy walking distance to Versova cafes and beach promenade.',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm inquiring about the Fully Furnished 2 BHK for rent on Yari Road (₹50k/mo, Code: YAR·01). Please share lease terms and viewing times."
    },
    'COM-01': {
      code: 'COM·01',
      title: 'Commercial Shop for Outright Sale',
      location: 'Prime High-Street, Andheri West, Mumbai',
      market: 'city',
      type: 'buy',
      price: '₹2.50 Cr (Negotiable)',
      specs: {
        category: 'Ground Level High-Street Retail',
        frontage: 'High Footfall Glass Frontage',
        ceilingHeight: 'Double-Height Proportions',
        ownership: 'Freehold Clear Title',
        possession: 'Immediate Handover',
        idealUse: 'Retail Boutique / Clinic / Salon / CA Office'
      },
      tag: 'Commercial · Outright Sale',
      description: 'Ground floor commercial showroom/retail unit available for outright sale in high-density Andheri West. Excellent visibility, road frontage, self-contained washroom, and high foot-traffic catchment.',
      images: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'd like details on the Commercial Shop for Outright Sale in Andheri West (₹2.50 Cr, Code: COM·01)."
    },
    'YAR-02': {
      code: 'YAR·02',
      title: 'Spacious 3 BHK for Rent',
      location: 'Yari Road, Versova, Mumbai',
      market: 'city',
      type: 'rent',
      price: '₹1.10 Lacs / mo',
      specs: {
        configuration: '3 Bed · 3 Bath · Large Living Hall',
        floor: 'High Floor (Panoramic Open Views)',
        furnishing: 'Semi-Furnished / Modular',
        building: 'Well-Maintained Society with Lift',
        parking: '1 Covered Stilt Parking',
        security: '24x7 Gated Security & CCTV'
      },
      tag: 'Rent · High-Floor 3BHK',
      description: 'Expansive 3 BHK residence on a high floor along Yari Road. Offers grand living room dimensions, cross breezes from the Arabian Sea, premium fixtures, and a quiet residential neighborhood feel.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm interested in the 3 BHK for rent on Yari Road (₹1.10L/mo, Code: YAR·02). Please share inspection availability."
    },
    'SEA-01': {
      code: 'SEA·01',
      title: '2 BHK with Partial Sea View',
      location: 'Versova Coastline, Andheri West',
      market: 'city',
      type: 'rent',
      price: '₹72,500 / mo',
      specs: {
        configuration: '2 Bed · 2 Bath',
        view: 'Partial Arabian Sea Horizon',
        floor: 'Upper Floor',
        furnishing: 'Semi-Furnished',
        possession: 'Immediate Lease',
        parking: '1 Reserved Stilt'
      },
      tag: 'Rent · Sea Breeze',
      description: 'Prime coastal 2 BHK in Versova offering partial sea horizon views and continuous ocean breezes. Features spacious bedrooms, verified society approvals, and quick access to Versova beach promenade.',
      images: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm inquiring about the 2 BHK with Partial Sea View in Versova (₹72,500/mo, Code: SEA·01)."
    },
    'OFC-01': {
      code: 'OFC·01',
      title: 'Corporate Office in Crystal Plaza',
      location: 'Crystal Plaza, New Link Road, Andheri West',
      market: 'city',
      type: 'rent',
      price: '₹1.00 Lac / mo',
      specs: {
        category: 'Commercial Corporate Office',
        setup: 'Cabins + Workstation Area + Reception',
        connectivity: 'Direct on New Link Road & Metro',
        complex: 'Crystal Plaza Business Hub',
        powerBackup: '100% DG Backup & High-Speed Lifts',
        possession: 'Immediate Move-in'
      },
      tag: 'Commercial · Office Rent',
      description: 'Plug-and-play fitted commercial office suite in the landmark Crystal Plaza complex on New Link Road. Ideal for production houses, legal practices, tech agencies, or corporate branches with excellent transit connectivity.',
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'd like to inspect the Office in Crystal Plaza on New Link Road (₹1.00L/mo, Code: OFC·01)."
    },
    'AND-01': {
      code: 'AND·01',
      title: 'Spacious 2 BHK with Terrace',
      location: 'Andheri West, Mumbai',
      market: 'city',
      type: 'rent',
      price: '₹45,000 / mo',
      specs: {
        configuration: '2 Bed · 2 Bath · Open Terrace',
        terrace: 'Attached Private Outdoor Terrace',
        floor: 'Upper Floor',
        furnishing: 'Unfurnished / Well-Maintained',
        possession: 'Ready for Occupancy',
        parking: 'Society Allotted Parking'
      },
      tag: 'Rent · Private Terrace',
      description: 'Comfortable and open 2 BHK rental apartment in central Andheri West, featuring an attached private terrace. Great natural light, peaceful residential society, and great access to local markets and transit.',
      images: [
        'https://images.unsplash.com/photo-1533779283484-84e14e91438d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm interested in the 2 BHK with Terrace for rent in Andheri West (₹45k/mo, Code: AND·01)."
    },
    'AND-02': {
      code: 'AND·02',
      title: '2 BHK Apartment — Prime Location',
      location: 'Andheri West, Mumbai',
      market: 'city',
      type: 'buy',
      price: '₹2.50 Cr',
      specs: {
        configuration: '2 Bed · 2 Bath',
        carpetArea: '720 sq.ft. (RERA Verified)',
        ownership: 'Freehold Co-Op Society Title',
        floor: 'Mid Floor',
        possession: 'Ready to Move',
        parking: '1 Stilt Reserved'
      },
      tag: 'For Sale · Prime Core',
      description: 'A well-apportioned 2 BHK apartment in a prime Andheri West residential society. Verified carpet measurements, clear 30-year society chain of title, and excellent connectivity to Lokhandwala, Link Road, and western railways.',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm interested in the 2 BHK Apartment for Sale in Andheri West (₹2.50 Cr, Code: AND·02). Please share title documentation."
    },
    'SUM-01': {
      code: 'SUM·01',
      title: 'Suman Apartments',
      location: 'Yari Road, Versova, Andheri West',
      market: 'city',
      type: 'buy',
      price: '₹2.50 Cr',
      specs: {
        configuration: '2 Bed · 2 Bath',
        carpetArea: '710 sq.ft.',
        society: 'Established Suman Co-Operative Society',
        floor: 'Higher Level',
        possession: 'Ready for Immediate Registration',
        parking: 'Society Open Parking'
      },
      tag: 'For Sale · Yari Road',
      description: 'An established co-operative apartment in Suman Apartments along Yari Road, Versova. Clean documentation, peaceful neighborhood environment, green canopy tree line, and walking distance to Versova promenade.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'd like details on Suman Apartments on Yari Road, Versova (₹2.50 Cr, Code: SUM·01)."
    },
    'LON-01': {
      code: 'LON·01',
      title: '3BHK Hillside Bungalow',
      location: 'Tungarli, Lonavala Hills',
      market: 'escape',
      type: 'buy',
      price: '₹1.60 Cr',
      specs: {
        carpetArea: '1,850 sq.ft. (Built-up)',
        layout: '3 Bed · 3 Bath · Private Lawn',
        plotSize: '2,400 sq.ft. Plot',
        view: 'Mist & Hill Contour View',
        possession: 'Immediate Clear Title',
        parking: 'Private Gated Driveway'
      },
      tag: 'Escape · Hill Retreat',
      description: 'A serene standalone hillside bungalow tucked into the green folds of Tungarli, Lonavala. Features a wrap-around veranda, private landscaped lawn, unhurried hill breezes, and quick access from the Mumbai-Pune Expressway.',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
      ],
      whatsappText: "Hi Zeris Real Estate, I'm interested in the 3BHK Bungalow in Tungarli, Lonavala (₹1.60 Cr, Code: LON·01). Please share title docs and inspection slots."
    }
  };

  /* ==========================================================================
     2. Navigation: Active Page Highlight & Mobile Drawer
     ========================================================================== */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Highlight active link in header & mobile drawer
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile Menu Drawer Handler
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');

  function toggleMobileNav(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('is-open');
    if (hamburgerBtn) hamburgerBtn.classList.toggle('is-active', isOpen);
    if (mobileDrawer) mobileDrawer.classList.toggle('is-open', isOpen);
    if (mobileBackdrop) mobileBackdrop.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  window.toggleMobileNav = toggleMobileNav;

  hamburgerBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileNav();
  });
  
  mobileCloseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileNav(false);
  });
  
  mobileBackdrop?.addEventListener('click', () => toggleMobileNav(false));

  // Auto-close mobile drawer when any link is clicked
  document.querySelectorAll('.mobile-nav-link, .mobile-nav-footer a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileNav(false);
    });
  });

  // Dynamic Header Scroll State (Transparent over hero -> Frosted glass on scroll)
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const updateHeaderScroll = () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
  }

  /* ==========================================================================
     3. Curated Modal & Lightbox System (Spec Section 8)
     ========================================================================== */
  let currentGalleryIndex = 0;
  let activeListingData = null;

  const listingModal = document.getElementById('listing-detail-modal');
  const lightboxModal = document.getElementById('photo-lightbox-modal');
  const enquireModal = document.getElementById('quick-enquire-modal');

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('is-active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('is-active');
    modalEl.setAttribute('aria-hidden', 'true');
    // If no other modals are active, release scroll lock
    if (!document.querySelector('.modal-overlay.is-active')) {
      document.body.style.overflow = '';
    }
  }

  // Universal close triggers
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Backdrop click close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key listener for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.is-active').forEach(modal => closeModal(modal));
      toggleMobileNav(false);
    }
  });

  // Populate & Launch Listing Detail Modal
  window.openListingModal = function(listingKey) {
    const data = PROPERTY_INVENTORY[listingKey];
    if (!data) {
      console.warn("Property code not found:", listingKey);
      return;
    }
    if (!listingModal) return;

    activeListingData = data;
    currentGalleryIndex = 0;

    // Set text elements
    const codeEl = listingModal.querySelector('#modal-listing-code');
    const titleEl = listingModal.querySelector('#modal-listing-title');
    const locationEl = listingModal.querySelector('#modal-listing-location');
    const priceEl = listingModal.querySelector('#modal-listing-price');
    const descEl = listingModal.querySelector('#modal-listing-desc');
    const specsContainer = listingModal.querySelector('#modal-specs-container');
    const whatsappBtn = listingModal.querySelector('#modal-whatsapp-cta');

    if (codeEl) codeEl.textContent = data.code;
    if (titleEl) titleEl.textContent = data.title;
    if (locationEl) locationEl.textContent = data.location;
    if (priceEl) priceEl.textContent = data.price;
    if (descEl) descEl.textContent = data.description;

    // Specs Grid
    if (specsContainer) {
      specsContainer.innerHTML = '';
      Object.entries(data.specs).forEach(([key, val]) => {
        const item = document.createElement('div');
        item.className = 'spec-item';
        item.innerHTML = `
          <span class="spec-item-label">${key.replace(/([A-Z])/g, ' $1')}</span>
          <span class="spec-item-val">${val}</span>
        `;
        specsContainer.appendChild(item);
      });
    }

    // Gallery Image
    updateGalleryImage();

    // WhatsApp Action link
    if (whatsappBtn) {
      const waUrl = `https://wa.me/919920897015?text=${encodeURIComponent(data.whatsappText)}`;
      whatsappBtn.setAttribute('href', waUrl);
      whatsappBtn.setAttribute('target', '_blank');
      whatsappBtn.setAttribute('rel', 'noopener noreferrer');
    }

    // Share Dossier button setup
    const shareBtn = listingModal.querySelector('#modal-share-btn');
    if (shareBtn) {
      shareBtn.onclick = () => copyPropertyLink(data.code);
    }

    // Update URL bar silently for deep-linking
    const url = new URL(window.location);
    url.searchParams.set('property', data.code);
    window.history.replaceState({}, '', url);

    openModal(listingModal);
  };

  // Toast notification helper
  function showToast(message) {
    let toast = document.getElementById('zeris-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'zeris-toast';
      toast.className = 'zeris-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2400);
  }

  // Copy Property Deep Link to Clipboard
  window.copyPropertyLink = function(propertyCode) {
    const origin = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
    const fullUrl = `${origin}listings.html?property=${encodeURIComponent(propertyCode)}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl).then(() => {
        showToast(`✓ Link copied for ${propertyCode}`);
      }).catch(() => {
        promptCopyFallback(fullUrl);
      });
    } else {
      promptCopyFallback(fullUrl);
    }
  };

  function promptCopyFallback(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('✓ Link copied to clipboard');
  }

  /* ==========================================================================
     4. Interactive Shortlist & Multi-Property Inquire Tray
     ========================================================================== */
  const SHORTLIST_STORAGE_KEY = 'zeris_saved_residences';
  let savedShortlist = [];

  try {
    const raw = localStorage.getItem(SHORTLIST_STORAGE_KEY);
    if (raw) savedShortlist = JSON.parse(raw);
  } catch (e) {
    savedShortlist = [];
  }

  function saveShortlist() {
    try {
      localStorage.setItem(SHORTLIST_STORAGE_KEY, JSON.stringify(savedShortlist));
    } catch (e) {}
    renderShortlistUI();
  }

  window.toggleShortlist = function(code) {
    const index = savedShortlist.indexOf(code);
    if (index > -1) {
      savedShortlist.splice(index, 1);
      showToast(`Removed ${code} from Shortlist`);
    } else {
      savedShortlist.push(code);
      showToast(`★ Added ${code} to Shortlist`);
    }
    saveShortlist();
  };

  window.clearShortlist = function() {
    savedShortlist = [];
    saveShortlist();
    showToast('Shortlist cleared');
  };

  window.inquireShortlistWhatsApp = function() {
    if (savedShortlist.length === 0) return;
    const items = savedShortlist.map((code, idx) => {
      const p = PROPERTY_INVENTORY[code];
      return `${idx + 1}) ${p ? p.title : code} (${p ? p.price : ''}) [Ref: ${code}]`;
    }).join('\n');

    const msg = `Hi Zeris Real Estate, I would like to inquire about my shortlisted properties:\n\n${items}\n\nPlease share floor plans and arrange private viewings.`;
    const waUrl = `https://wa.me/919920897015?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  function renderShortlistUI() {
    // 1. Update Pin Button states
    document.querySelectorAll('[data-shortlist-btn]').forEach(btn => {
      const code = btn.getAttribute('data-shortlist-btn');
      if (savedShortlist.includes(code)) {
        btn.classList.add('is-shortlisted');
        btn.setAttribute('aria-label', `Remove ${code} from shortlist`);
      } else {
        btn.classList.remove('is-shortlisted');
        btn.setAttribute('aria-label', `Add ${code} to shortlist`);
      }
    });

    // 2. Update or Inject Floating Drawer
    let drawer = document.getElementById('shortlist-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'shortlist-drawer';
      drawer.className = 'shortlist-drawer';
      document.body.appendChild(drawer);
    }

    if (savedShortlist.length === 0) {
      drawer.classList.remove('is-active');
      return;
    }

    const rowsHtml = savedShortlist.map(code => {
      const p = PROPERTY_INVENTORY[code];
      const title = p ? p.title : code;
      const price = p ? p.price : '';
      return `
        <div class="shortlist-item-row">
          <span class="shortlist-item-name" title="${title}">${title}</span>
          <span class="shortlist-item-price">${price}</span>
          <span class="shortlist-remove-item" onclick="toggleShortlist('${code}')" title="Remove">&times;</span>
        </div>
      `;
    }).join('');

    drawer.innerHTML = `
      <div class="shortlist-drawer-header">
        <span class="shortlist-drawer-title">
          <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:var(--brass-light);"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          Shortlist (${savedShortlist.length})
        </span>
        <button class="shortlist-clear-btn" onclick="clearShortlist()">Clear</button>
      </div>
      <div class="shortlist-items-list">
        ${rowsHtml}
      </div>
      <button class="btn btn-whatsapp-solid" onclick="inquireShortlistWhatsApp()" style="width:100%; padding:0.65rem 1rem; font-size:0.82rem; justify-content:center;">
        <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:#fff;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
        Inquire on Shortlist (${savedShortlist.length})
      </button>
    `;
    drawer.classList.add('is-active');
  }

  // Initial render of shortlist pins
  renderShortlistUI();

  function updateGalleryImage() {
    if (!activeListingData || !listingModal) return;
    const imgEl = listingModal.querySelector('#modal-gallery-img');
    const counterEl = listingModal.querySelector('#modal-gallery-counter');
    if (imgEl) {
      imgEl.src = activeListingData.images[currentGalleryIndex];
      imgEl.alt = `${activeListingData.title} view ${currentGalleryIndex + 1}`;
    }
    if (counterEl) {
      counterEl.textContent = `${currentGalleryIndex + 1} / ${activeListingData.images.length}`;
    }
  }

  // Gallery Next/Prev with Touch Swipe Support
  const prevGalleryImage = () => {
    if (!activeListingData) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + activeListingData.images.length) % activeListingData.images.length;
    updateGalleryImage();
  };

  const nextGalleryImage = () => {
    if (!activeListingData) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % activeListingData.images.length;
    updateGalleryImage();
  };

  document.getElementById('modal-gallery-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    prevGalleryImage();
  });

  document.getElementById('modal-gallery-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    nextGalleryImage();
  });

  // Touch Swipe Gesture for Modal Gallery on Mobile
  const modalGalleryEl = document.querySelector('.modal-gallery');
  if (modalGalleryEl) {
    let touchStartX = 0;
    let touchEndX = 0;

    modalGalleryEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalGalleryEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          nextGalleryImage(); // swipe left -> next image
        } else {
          prevGalleryImage(); // swipe right -> prev image
        }
      }
    }, { passive: true });
  }

  // Photo Lightbox Trigger
  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox-src') || trigger.getAttribute('src');
      const caption = trigger.getAttribute('data-lightbox-caption') || trigger.getAttribute('alt') || 'Property Photograph';
      
      const lightboxImg = document.getElementById('lightbox-target-img');
      const lightboxCap = document.getElementById('lightbox-target-caption');
      
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCap) lightboxCap.textContent = caption;
      
      openModal(lightboxModal);
    });
  });

  // Quick Enquire Modal triggers
  document.querySelectorAll('[data-open-enquire]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(enquireModal);
    });
  });

  /* ==========================================================================
     5. Interactive Filter Bar on Listings Page
     ========================================================================== */
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const areaSelect = document.getElementById('filter-area-select');
  const listingCards = document.querySelectorAll('.listing-card-item');
  const emptyMessage = document.getElementById('listings-empty-message');
  const resultsCounter = document.getElementById('filter-results-count');

  let activeCategory = 'all';
  let activeArea = 'all';

  function applyFilters() {
    let visibleCount = 0;

    listingCards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardArea = card.getAttribute('data-area');

      const matchesType = (activeCategory === 'all' || cardType.includes(activeCategory));
      const matchesArea = (activeArea === 'all' || cardArea === activeArea);

      if (matchesType && matchesArea) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCounter) {
      resultsCounter.textContent = `${visibleCount} Listing${visibleCount === 1 ? '' : 's'} Shown`;
    }

    if (emptyMessage) {
      emptyMessage.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      activeCategory = tab.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  areaSelect?.addEventListener('change', (e) => {
    activeArea = e.target.value;
    applyFilters();
  });

  // Read URL query parameters (?area=lonavala or ?property=AZD-01 or ?id=AZD-01)
  const urlParams = new URLSearchParams(window.location.search);
  const areaParam = urlParams.get('area');
  if (areaParam && areaSelect) {
    areaSelect.value = areaParam;
    activeArea = areaParam;
    applyFilters();
  }

  const propParam = urlParams.get('property') || urlParams.get('id');
  if (propParam && PROPERTY_INVENTORY[propParam]) {
    setTimeout(() => {
      window.openListingModal(propParam);
    }, 250);
  }

  /* ==========================================================================
     6. Maharashtra Stamp Duty & Acquisition Cost Calculator Widget
     ========================================================================== */
  function initStampDutyCalculator() {
    const calcInput = document.getElementById('stamp-calc-price');
    const calcLoc = document.getElementById('stamp-calc-loc');
    const genderBtns = document.querySelectorAll('[data-calc-gender]');
    const outDuty = document.getElementById('stamp-out-duty');
    const outCess = document.getElementById('stamp-out-cess');
    const outReg = document.getElementById('stamp-out-reg');
    const outTotal = document.getElementById('stamp-out-total');
    const whatsappCalcBtn = document.getElementById('stamp-calc-whatsapp');

    if (!calcInput || !outDuty || !outTotal) return;

    let selectedGender = 'male'; // male (6%), female (5%), joint (5.5%)

    function formatINR(val) {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(val);
    }

    function calculateOutPocket() {
      const price = Math.max(0, parseFloat(calcInput.value) || 0);
      const isMumbai = calcLoc ? (calcLoc.value === 'mumbai') : true;

      // Base Stamp duty rates in Maharashtra
      let stampRate = 0.06;
      if (selectedGender === 'female') stampRate = 0.05;
      else if (selectedGender === 'joint') stampRate = 0.055;

      const stampDuty = price * stampRate;
      const metroCess = isMumbai ? (price * 0.01) : 0;
      // Maharashtra Registration fee is 1% capped at ₹30,000
      const regFee = price > 0 ? Math.min(price * 0.01, 30000) : 0;
      const totalAcquisition = price + stampDuty + metroCess + regFee;

      if (outDuty) outDuty.textContent = formatINR(stampDuty);
      if (outCess) outCess.textContent = formatINR(metroCess);
      if (outReg) outReg.textContent = formatINR(regFee);
      if (outTotal) outTotal.textContent = formatINR(totalAcquisition);

      if (whatsappCalcBtn) {
        const msg = `Hi Zeris Real Estate, I calculated acquisition costs for a ₹${(price / 10000000).toFixed(2)} Cr property in ${isMumbai ? 'Mumbai' : 'Lonavala'} (Est. Total: ${formatINR(totalAcquisition)}). I would like to discuss title vetting and available options.`;
        whatsappCalcBtn.href = `https://wa.me/919920897015?text=${encodeURIComponent(msg)}`;
      }
    }

    genderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        genderBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selectedGender = btn.getAttribute('data-calc-gender') || 'male';
        calculateOutPocket();
      });
    });

    calcInput.addEventListener('input', calculateOutPocket);
    calcLoc?.addEventListener('change', calculateOutPocket);

    // Initial run
    calculateOutPocket();
  }

  initStampDutyCalculator();

  /* ==========================================================================
     7. Scroll Reveal System via IntersectionObserver
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-init');

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     8. Subtle Parallax Drift for Hero Photography
     ========================================================================== */
  const heroImage = document.querySelector('.hero-parallax-img');
  if (heroImage && !prefersReducedMotion) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY < 800) {
        heroImage.style.transform = `translateY(${scrollY * 0.04}px)`;
      }
    }, { passive: true });
  }
});
