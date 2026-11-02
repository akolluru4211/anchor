// Anchor & Roots - Minimal Nature UI Interaction Logic

const serviceDetails = {
  'elder-care': {
    title: 'Elder Care',
    tag: 'Care & Wellness',
    icon: 'heart-handshake',
    image: 'assets/elder-care.jpg',
    lead: 'Compassionate, reliable local care for your parents so they never feel alone.',
    description: 'We act as an extended family in Hyderabad. From scheduled home visits and doctor check-ups to companion calls and daily assistance, our vetted relationship managers ensure your loved ones live with dignity and ease.',
    features: [
      'Bi-weekly or weekly in-person home companion visits',
      'Doctor appointment escort with door-to-door transportation',
      'Timely prescription refills and monthly grocery coordination',
      'Time-stamped photo and video updates sent after every single visit',
      '24/7 dedicated emergency response escalation coordinator'
    ],
    pricingHint: 'Included in Care Basic (from ₹4,999/mo) and Care Plus (₹8,000–12,000/mo).'
  },
  'property-watch': {
    title: 'Property & Land Watch',
    tag: 'Asset Protection',
    icon: 'shield-check',
    image: 'assets/property-watch.jpg',
    lead: 'Vigilant on-ground inspection to safeguard your ancestral land, plots, and vacant homes.',
    description: 'Protect your valuable real estate in and around Hyderabad against encroachments, boundary issues, utility leaks, and weather wear. We perform scheduled on-site audits with GPS-tagged photographic evidence.',
    features: [
      'Scheduled monthly or bi-monthly plot and property walkthroughs',
      'Geo-tagged, time-stamped 360° photo and video audit reports',
      'Boundary pillar checks, encroachment surveillance, and fence inspection',
      'Property tax, GHMC water bills, and electricity bill monitoring',
      'Local maintenance oversight for cleaning, repairs, and security guard checks'
    ],
    pricingHint: 'Annual plans ranging from ₹15,000 to ₹40,000 / year.'
  },
  'shipping-errands': {
    title: 'Shipping & Errands',
    tag: 'Logistics & Requests',
    icon: 'package-check',
    image: 'assets/shipping-errands.jpg',
    lead: 'Everyday physical tasks back home handled with prompt accountability.',
    description: 'Need urgent bank documents picked up, traditional sweets or festive gifts delivered to relatives, or a trusted local hand to handle government office follow-ups? We manage your errands with complete transparency.',
    features: [
      'Document pick-up, notarization support, and courier coordination',
      'Festival gifting, sweet boxes, and personalized hamper deliveries',
      'Bank, municipal, and utility office physical representations',
      'Safe courier hand-off with tracking and delivery confirmation',
      'Pay-per-task or bundled monthly errand credits'
    ],
    pricingHint: 'Flexible on-demand task pricing or add-on to existing Care Plans.'
  },
  'medical-coordination': {
    title: 'Medical Coordination',
    tag: 'Healthcare Advocacy',
    icon: 'stethoscope',
    image: 'assets/medical-coordination.jpg',
    lead: 'Supportive healthcare advocacy alongside our Elder Care packages.',
    description: 'Navigating hospitals and specialists can be overwhelming. Our care associates accompany your parents to outpatient consultations, record doctor recommendations, and digitize medical reports for your remote review.',
    features: [
      'Senior specialist appointment booking & priority clinic escort',
      'Hospital admission, discharge assistance, and patient comfort advocacy',
      'Digital health vault: organized lab reports and prescription history',
      'Home diagnostic sample collections (blood tests, ECG, vitals checks)',
      'Direct debrief with NRI family members after key medical visits'
    ],
    pricingHint: 'Integrated directly into Care Plus or on-demand hospital day passes.'
  },
  'personalized-travel': {
    title: 'Personalized Travel',
    tag: 'Coming Soon',
    icon: 'plane',
    image: 'assets/personalized-travel.jpg',
    lead: 'Seamless homecoming experiences from the moment your flight lands in Hyderabad.',
    description: 'Arrive to a spotless, stocked home and effortless transit. We arrange comfortable airport pickups, stock groceries in your ancestral home, test ACs and geysers in advance, and handle local chauffeur arrangements.',
    features: [
      'Rajiv Gandhi International Airport (RGIA) private pickup & drop',
      'Deep home cleaning, linen freshening, and pantry pre-stocking',
      'Tested electricals, water supply, and high-speed Wi-Fi readiness',
      'Dedicated local chauffeur and vehicle rental coordination'
    ],
    pricingHint: 'Launching soon in Hyderabad. Register your interest for early access.'
  },
  'events-weddings': {
    title: 'Home, Weddings & Events',
    tag: 'Future Offering',
    icon: 'sparkles',
    image: 'assets/events.jpg',
    lead: 'Stress-free coordination for family milestones, pujas, and home renovations.',
    description: 'Plan meaningful family milestones from overseas without the headache. We work with trusted local vendors to coordinate family pujas, intimate weddings, anniversaries, and interior home renovations.',
    features: [
      'Vetted local contractor and interior designer supervision',
      'Traditional family puja, pandit, and floral decor coordination',
      'Milestone photo/video updates with sign-offs before payments',
      'Guest hospitality and transport logistics management'
    ],
    pricingHint: 'Bespoke milestone quote based on project scope.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    }
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Service Modal Handling
  const serviceModal = document.getElementById('service-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const modalLead = document.getElementById('modal-lead');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalPricing = document.getElementById('modal-pricing');
  const modalImage = document.getElementById('modal-image');
  const modalEnquireBtn = document.getElementById('modal-enquire-btn');

  function openServiceModal(serviceKey) {
    const data = serviceDetails[serviceKey];
    if (!data || !serviceModal) return;

    modalTitle.textContent = data.title;
    modalTag.textContent = data.tag;
    modalLead.textContent = data.lead;
    modalDesc.textContent = data.description;
    modalPricing.textContent = data.pricingHint;
    modalImage.src = data.image;
    modalImage.alt = data.title;

    // Populate features list
    modalFeatures.innerHTML = data.features.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-[#36493e]">
        <svg class="w-4 h-4 text-[#2e7d52] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    modalEnquireBtn.onclick = () => {
      closeServiceModal();
      const serviceSelect = document.getElementById('form-service');
      if (serviceSelect) {
        serviceSelect.value = serviceKey;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-service]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service');
      openServiceModal(serviceKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeServiceModal);
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal && serviceModal.classList.contains('active')) {
      closeServiceModal();
    }
  });

  // Care Plan Toggle: Monthly vs Annual
  const planBillingToggle = document.getElementById('billing-toggle');
  const planTypeLabels = document.querySelectorAll('.plan-billing-label');
  const basicPriceEl = document.getElementById('price-basic');
  const plusPriceEl = document.getElementById('price-plus');
  const propertyPriceEl = document.getElementById('price-property');
  const basicPeriodEl = document.getElementById('period-basic');
  const plusPeriodEl = document.getElementById('period-plus');
  const propertyPeriodEl = document.getElementById('period-property');

  if (planBillingToggle) {
    planBillingToggle.addEventListener('change', () => {
      const isAnnual = planBillingToggle.checked;

      if (isAnnual) {
        // Annual discounted rate
        if (basicPriceEl) basicPriceEl.textContent = '₹4,249';
        if (plusPriceEl) plusPriceEl.textContent = '₹7,200–10,500';
        if (propertyPriceEl) propertyPriceEl.textContent = '₹13,500–36,000';
        if (basicPeriodEl) basicPeriodEl.textContent = '/ month (billed annually)';
        if (plusPeriodEl) plusPeriodEl.textContent = '/ month (billed annually)';
        if (propertyPeriodEl) propertyPeriodEl.textContent = '/ year (10% upfront savings)';
      } else {
        // Standard monthly
        if (basicPriceEl) basicPriceEl.textContent = '₹4,999';
        if (plusPriceEl) plusPriceEl.textContent = '₹8,000–12,000';
        if (propertyPriceEl) propertyPriceEl.textContent = '₹15,000–40,000';
        if (basicPeriodEl) basicPeriodEl.textContent = '/ month';
        if (plusPeriodEl) plusPeriodEl.textContent = '/ month';
        if (propertyPeriodEl) propertyPeriodEl.textContent = '/ year';
      }
    });
  }

  // Pre-fill contact form on plan "Enquire" click
  document.querySelectorAll('[data-plan-enquire]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-enquire');
      const subjectInput = document.getElementById('form-subject');
      const serviceSelect = document.getElementById('form-service');
      if (subjectInput) {
        subjectInput.value = `Enquiry about ${planName}`;
      }
      if (serviceSelect) {
        if (planName.includes('Property')) {
          serviceSelect.value = 'property-watch';
        } else {
          serviceSelect.value = 'elder-care';
        }
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('audit-contact-form');
  const formSuccessAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Scheduling Free Audit...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('hidden');
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        contactForm.reset();
      }, 900);
    });
  }

  // WhatsApp Pre-filled Link Generator
  const whatsappTriggers = document.querySelectorAll('.whatsapp-trigger');
  whatsappTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent("Hello Anchor & Roots team, I am an NRI interested in your care and property watch services in Hyderabad. I would like to schedule a free home audit.");
      // WhatsApp official URL (can open web or app)
      window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
    });
  });

  // Ensure Hero Video Autoplays Continuously in Loop
  const heroVideo = document.getElementById('hero-bg-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {
      // Autoplay with muted is allowed on all modern browsers
    });
    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = 0;
      heroVideo.play();
    });
  }

  // Header background shade on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-sm');
    } else {
      header?.classList.remove('shadow-sm');
    }
  });
});
