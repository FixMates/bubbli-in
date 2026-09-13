// Bubbli.in - Interactive Client-Side Engine
document.addEventListener('DOMContentLoaded', () => {
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
        b.classList.remove('active-tab', 'bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-800');
      });

      btn.classList.add('active-tab', 'bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
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

  // 3. Interactive Website Cost & Turnaround Calculator
  const calcType = document.getElementById('calc-type');
  const calcPages = document.getElementById('calc-pages');
  const calcPagesVal = document.getElementById('calc-pages-val');
  const calcWaBooking = document.getElementById('calc-wa-booking');
  const calcQrMenu = document.getElementById('calc-qr-menu');
  const calcSeo = document.getElementById('calc-seo');
  const calcSpeed = document.getElementById('calc-speed');

  const calcPriceDisplay = document.getElementById('calc-price-display');
  const calcTimeDisplay = document.getElementById('calc-time-display');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  function updateCalculator() {
    if (!calcType || !calcPages || !calcPriceDisplay) return;

    const basePrices = {
      'dentist': 6999,
      'restaurant': 5999,
      'billing': 7999,
      'salon': 4999,
      'custom': 5499
    };

    const type = calcType.value || 'dentist';
    const pages = parseInt(calcPages.value, 10) || 1;
    if (calcPagesVal) calcPagesVal.textContent = pages === 1 ? '1 Page (Landing Page)' : `${pages} Pages`;

    let total = basePrices[type] || 5000;
    
    // Add page costs (beyond 1 page)
    if (pages > 1) {
      total += (pages - 1) * 800;
    }

    // Addons
    if (calcWaBooking && calcWaBooking.checked) total += 999;
    if (calcQrMenu && calcQrMenu.checked) total += 1499;
    if (calcSeo && calcSeo.checked) total += 1499;
    if (calcSpeed && calcSpeed.checked) total += 999;

    let days = pages <= 2 ? 3 : (pages <= 5 ? 5 : 7);

    calcPriceDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (calcTimeDisplay) calcTimeDisplay.textContent = `${days} Days Delivery`;

    // Update WhatsApp CTA button with tailored message
    const businessNameMap = {
      'dentist': 'Dentist / Healthcare Clinic',
      'restaurant': 'Restaurant / Cafe',
      'billing': 'Retail / Billing / Store',
      'salon': 'Salon & Spa',
      'custom': 'Local Business'
    };

    const selectedIndustry = businessNameMap[type] || 'Local Business';
    const msg = `Hi Bubbli! I used the website cost calculator for my *${selectedIndustry}* (${pages} pages). Estimated quote: ₹${total.toLocaleString('en-IN')}. I would like to get started!`;
    const encoded = encodeURIComponent(msg);
    
    if (calcWhatsappBtn) {
      calcWhatsappBtn.href = `https://wa.me/919999999999?text=${encoded}`;
    }
  }

  // Bind calculator events
  const calcInputs = [calcType, calcPages, calcWaBooking, calcQrMenu, calcSeo, calcSpeed];
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

      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // 5. Contact Form Handler (Opens WhatsApp with message)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Client';
      const phone = document.getElementById('contact-phone')?.value || '';
      const biz = document.getElementById('contact-biz')?.value || 'Business';
      const note = document.getElementById('contact-note')?.value || '';

      const text = `Hi Bubbli Team! My name is ${name} (${phone}), business: ${biz}. Note: ${note}`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
