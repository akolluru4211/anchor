// Anchor & Roots - Minimal Nature UI Interaction Logic

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

  // Direct Service Card Selection -> Smooth Scroll to Contact Form with Option Selected (No Popup)
  document.querySelectorAll('[data-service-select]').forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceKey = link.getAttribute('data-service-select');
      const serviceSelect = document.getElementById('form-service');
      if (serviceSelect && serviceKey) {
        serviceSelect.value = serviceKey;
      }
      const subjectInput = document.getElementById('form-subject');
      if (subjectInput && serviceKey) {
        const formattedTitle = serviceKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        subjectInput.value = `Enquiry about ${formattedTitle}`;
      }
    });
  });

  // Care Plan Toggle: Monthly vs Annual
  const planBillingToggle = document.getElementById('billing-toggle');
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

  // Ensure Hero Video Autoplays Continuously in Loop & Bulletproof Poster Fallback
  const heroVideo = document.getElementById('hero-bg-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('playsinline', '');
    heroVideo.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry on first document interaction if policy blocked initial autoplay
          const resumeOnInteraction = () => {
            heroVideo.play().catch(() => {});
            document.removeEventListener('click', resumeOnInteraction);
            document.removeEventListener('touchstart', resumeOnInteraction);
          };
          document.addEventListener('click', resumeOnInteraction, { once: true });
          document.addEventListener('touchstart', resumeOnInteraction, { once: true });
        });
      }
    };

    tryPlay();

    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = 0;
      heroVideo.play();
    });

    // Poster fallback in case local assets resolve slowly
    const posterImg = new Image();
    posterImg.onerror = () => {
      heroVideo.poster = 'https://static.wixstatic.com/media/d49a40_1f4860734ba94532868071f295d130ddf000.jpg';
    };
    posterImg.src = heroVideo.poster;
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
