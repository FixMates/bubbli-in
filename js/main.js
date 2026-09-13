// Bubbli.in - Main Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '919739130926';

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Industry Solution Tabs Switcher
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-content]');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');

      tabButtons.forEach(b => {
        b.classList.remove('active-tab', 'bg-gradient-to-r', 'from-blue-600', 'to-cyan-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-800');
      });

      btn.classList.add('active-tab', 'bg-gradient-to-r', 'from-blue-600', 'to-cyan-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');

      tabPanels.forEach(panel => {
        if (panel.id === target) {
          panel.classList.remove('hidden');
          panel.classList.add('grid');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('grid');
        }
      });
    });
  });

  // 3. Interactive Quote & Turnaround Calculator
  const calcType = document.getElementById('calc-type');
  const calcPages = document.getElementById('calc-pages');
  const calcPagesVal = document.getElementById('calc-pages-val');
  const calcWaBooking = document.getElementById('calc-wa-booking');
  const calcQrMenu = document.getElementById('calc-qr-menu');
  const calcSeo = document.getElementById('calc-seo');

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
      'dentist': 'Dental Clinic',
      'restaurant': 'Restaurant / Cafe',
      'retail': 'Retail Store / Boutique',
      'salon': 'Salon & Spa',
      'custom': 'Local Business'
    };

    const selectedIndustry = businessNameMap[type] || 'Local Business';

    if (pages === 1) {
      // Special Promotional Launch Deal
      calcPriceDisplay.innerHTML = `₹4,999 <span class="text-xs text-amber-400 font-bold block uppercase tracking-wider mt-1">Special Launch Deal 🔥</span>`;
      if (calcTimeDisplay) calcTimeDisplay.textContent = '3 Days Delivery';

      const msg = `Hi Bubbli! I want to claim the *₹4,999 Special Launch Deal* for my *${selectedIndustry}* landing page. Let's discuss!`;
      if (calcWhatsappBtn) {
        calcWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        calcWhatsappBtn.innerHTML = `<span>Claim ₹4,999 Launch Deal on WhatsApp &rarr;</span>`;
      }
    } else {
      // Custom Multi-Page Quote
      calcPriceDisplay.innerHTML = `<span class="text-2xl sm:text-3xl font-bold text-cyan-300">Custom Quote</span><span class="text-xs text-slate-400 block mt-1">Tailored for ${pages} Pages</span>`;
      let days = pages <= 3 ? 4 : (pages <= 6 ? 6 : 8);
      if (calcTimeDisplay) calcTimeDisplay.textContent = `~${days} Days Delivery`;

      const msg = `Hi Bubbli! I am looking for a custom *${pages}-page website* for my *${selectedIndustry}*. Please share a customized quote and timeline!`;
      if (calcWhatsappBtn) {
        calcWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        calcWhatsappBtn.innerHTML = `<span>Get Custom Quote on WhatsApp &rarr;</span>`;
      }
    }
  }

  const calcInputs = [calcType, calcPages, calcWaBooking, calcQrMenu, calcSeo];
  calcInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', updateCalculator);
      input.addEventListener('change', updateCalculator);
    }
  });
  updateCalculator();

  // 4. Accordion FAQ
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

  // 5. Contact Form Handler (Direct to WhatsApp)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Client';
      const phone = document.getElementById('contact-phone')?.value || '';
      const biz = document.getElementById('contact-biz')?.value || 'Business';
      const note = document.getElementById('contact-note')?.value || '';

      const text = `Hi Bubbli! My name is ${name} (Phone: ${phone}). I run "${biz}". Inquiry: ${note}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
