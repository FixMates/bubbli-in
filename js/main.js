// Bubbli.in - Main Interactivity Engine & Experience System
document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '919739130926';

  // 1. Mobile Menu Toggle & Click-Outside Handling
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // 2. ScrollSpy - Active Navigation Highlighter
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-nav-link[href^="#"]');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active', 'text-cyan-400');
          } else {
            link.classList.remove('active', 'text-cyan-400');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 3. Reveal on Scroll Animation (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 4. Counting Animation for Stats
  const statElements = document.querySelectorAll('[data-counter-target]');
  let hasCounted = false;

  function runCounters() {
    if (hasCounted) return;
    statElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-counter-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      const duration = 1600; // ms
      const steps = 40;
      const stepTime = duration / steps;
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('en-IN')}${suffix}`;
      }, stepTime);
    });
    hasCounted = true;
  }

  const statsSection = document.getElementById('stats-metrics');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  // 5. Interactive Cost & Quote Calculator
  const calcType = document.getElementById('calc-type');
  const calcPages = document.getElementById('calc-pages');
  const calcPagesVal = document.getElementById('calc-pages-val');
  const calcPriceDisplay = document.getElementById('calc-price-display');
  const calcTimeDisplay = document.getElementById('calc-time-display');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  function updateCalculator() {
    if (!calcType || !calcPages || !calcPriceDisplay) return;

    const pages = parseInt(calcPages.value, 10) || 1;
    const type = calcType.value || 'dentist';

    if (calcPagesVal) {
      calcPagesVal.textContent = pages === 1 ? '1 Page (Special Launch Deal)' : `${pages} Pages`;
    }

    const businessNameMap = {
      'dentist': 'Dental Clinic / Healthcare',
      'restaurant': 'Restaurant / Cafe',
      'retail': 'Retail Store / Boutique',
      'salon': 'Salon & Spa Studio',
      'automation': 'Workflow Automation',
      'custom': 'Custom Local Business'
    };

    const selectedIndustry = businessNameMap[type] || 'Local Business';

    if (pages === 1) {
      calcPriceDisplay.innerHTML = `₹4,999 <span class="text-xs text-amber-400 font-bold block uppercase tracking-wider mt-1">Special Launch Deal 🔥</span>`;
      if (calcTimeDisplay) calcTimeDisplay.textContent = '3 Days Guaranteed Delivery';

      const msg = `Hi Bubbli! I want to claim the ₹4,999 Special Launch Deal for my ${selectedIndustry} website.`;
      if (calcWhatsappBtn) {
        calcWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        calcWhatsappBtn.innerHTML = `<span>Claim ₹4,999 Deal on WhatsApp &rarr;</span>`;
      }
    } else {
      calcPriceDisplay.innerHTML = `<span class="text-3xl font-extrabold text-cyan-300">Custom Quote</span><span class="text-xs text-slate-400 block mt-1">Tailored for ${pages} Pages</span>`;
      let days = pages <= 3 ? 4 : (pages <= 6 ? 6 : 8);
      if (calcTimeDisplay) calcTimeDisplay.textContent = `~${days} Days Delivery`;

      const msg = `Hi Bubbli! I am looking for a custom ${pages}-page website for my ${selectedIndustry}. Please share a quote and timeline!`;
      if (calcWhatsappBtn) {
        calcWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        calcWhatsappBtn.innerHTML = `<span>Get Custom Quote on WhatsApp &rarr;</span>`;
      }
    }
  }

  [calcType, calcPages].forEach(input => {
    if (input) {
      input.addEventListener('input', updateCalculator);
      input.addEventListener('change', updateCalculator);
    }
  });
  updateCalculator();

  // 6. Accordion FAQ
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
      });

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // 7. Enhanced Contact Form with Validation & WhatsApp/AJAX submission
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success-banner');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim() || '';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const phone = document.getElementById('contact-phone')?.value.trim() || '';
      const interest = document.getElementById('contact-interest')?.value || '₹4,999 Landing Page';
      const biz = document.getElementById('contact-biz')?.value.trim() || 'Business';
      const note = document.getElementById('contact-note')?.value.trim() || '';

      // Validation check
      if (!name || !phone) {
        alert('Please provide your name and phone/WhatsApp number.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;
      }

      // Format WhatsApp pre-fill message
      const text = `Hi Bubbli! New Inquiry:\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email || 'N/A'}\n• Interest: ${interest}\n• Business: ${biz}\n• Note: ${note}`;

      // Optional Formspree submission if online
      try {
        const formData = new FormData(contactForm);
        await fetch('https://formspree.io/f/xbjnbqwv', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).catch(() => {});
      } catch (err) {
        console.warn('Formspree notification skipped or handled locally', err);
      }

      // Show success message
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset form
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      // Also trigger direct WhatsApp connection
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      }, 500);
    });
  }

  // 8. Conversion Tracking helper for analytics
  document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'Lead',
          event_label: btn.href
        });
      }
      if (typeof fbq === 'function') {
        fbq('track', 'Contact');
      }
    });
  });
});
